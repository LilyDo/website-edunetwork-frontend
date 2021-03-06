import React, { Component, Fragment } from 'react';
import { get } from 'lodash';

import './CourseInfo.scss';
import BulletIcon from '../../assets/images/icon_bullet.svg';
import PlusIcon from '../../assets/images/icon_plus.svg';
import PlayIcon from '../../assets/images/icon_play.svg';
import AttachmentIcon from '../../assets/images/icon_attachment.svg';
import {
  formatDuration,
  getUserFormLocal,
} from '../../services/appService';

class CourseInfo extends Component {
  state = {
    isIntroductionVisible: true,
    activeAttachment: {},
    currentUser: {},
  };

  showCourseIntroduction = () => {
    this.setState({
      isIntroductionVisible: true,
    });
  };

  hideCourseIntroduction = () => {
    this.setState({
      isIntroductionVisible: false,
    });
  };

  toggleChapter = chapter => {
    const key = `isChapter${chapter.id}Visible`;
    this.setState({
      [key]: !this.state[key],
    });
  };

  togglePart = part => {
    const key = `isPart${part.id}Visible`;
    this.setState({
      [key]: !this.state[key],
    });
  };

  setActiveAttachment = attachment => {
    this.setState({
      activeAttachment: attachment,
    });
    // this changes the scrolling behavior to "smooth"
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  componentDidMount() {
    this.setState({
      currentUser: getUserFormLocal(),
    });
  }

  render() {
    const {
      isIntroductionVisible,
      activeAttachment,
      currentUser,
    } = this.state;
    const { courseDetail } = this.props;
    const chapters = get(courseDetail, 'child', []);

    return (
      <div className="CourseInfoContainer">
        {activeAttachment && activeAttachment.link_file ? (
          <div className="AttachmentPlayer">
            <iframe
              title="hero_youtube"
              src={`${activeAttachment.link_file}?autoplay=1&showinfo=0&controls=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="CourseAvatar">
            {courseDetail.avatar && (
              <img src={courseDetail.avatar} alt="course avatar" />
            )}
          </div>
        )}

        <div className="TitleDescriptionCurriculumnContainer">
          <div className="Title">
            <div
              className={
                isIntroductionVisible === true
                  ? 'IntroductionTitle Active'
                  : 'IntroductionTitle'
              }
              onClick={this.showCourseIntroduction}
            >
              <span>Course detail</span>
            </div>
            {!(currentUser.max_price < courseDetail.price) && (
              <div
                className={
                  isIntroductionVisible === false
                    ? 'CurriculumTitle Active'
                    : 'CurriculumTitle'
                }
                onClick={this.hideCourseIntroduction}
              >
                <span>Content</span>
              </div>
            )}
          </div>

          {isIntroductionVisible && (
            <div className="CourseIntroduction">
              <div className="IntroductionContent">
                <div className="Head">Course introduction</div>
                <p>{courseDetail.description}</p>
              </div>
            </div>
          )}

          {!isIntroductionVisible && (
            <div className="CourseCurriculum">
              <div className="Head">Content</div>
              <div className="CurriculumContent">
                {chapters.map(chapter => (
                  <div className="Course" key={chapter.id}>
                    <div
                      className="Name"
                      onClick={() => this.toggleChapter(chapter)}
                    >
                      {this.state[`isChapter${chapter.id}Visible`] ? (
                        <img alt="bullet" src={BulletIcon}></img>
                      ) : (
                        <img alt="plus" src={PlusIcon}></img>
                      )}
                      <div>{chapter.title}</div>
                    </div>

                    {this.state[`isChapter${chapter.id}Visible`] &&
                      chapter.parts.map((part, index) => (
                        <Fragment key={index}>
                          <div
                            className="Part"
                            key={part.id}
                            onClick={() => this.togglePart(part)}
                          >
                            {this.state[`isPart${part.id}Visible`] ? (
                              <img
                                alt="bullet"
                                src={BulletIcon}
                              ></img>
                            ) : (
                              <img alt="plus" src={PlusIcon}></img>
                            )}
                            <div>{part.title}</div>
                          </div>

                          {this.state[`isPart${part.id}Visible`] &&
                            part.lessons.map((lesson, index) => (
                              <div
                                className="Lessons"
                                key={lesson.id}
                              >
                                <div className="LessonContainer">
                                  <div
                                    className="Lesson"
                                    onClick={() =>
                                      this.setActiveAttachment(
                                        lesson.attachments[0],
                                      )
                                    }
                                  >
                                    <div className="Duration">
                                      {formatDuration(
                                        lesson.duration,
                                      )}
                                    </div>
                                    <div
                                      className={
                                        'LessonTitle ' +
                                        (activeAttachment ===
                                        lesson.attachments[0]
                                          ? 'Active'
                                          : '')
                                      }
                                    >
                                      {lesson.title}
                                    </div>
                                  </div>
                                  <img
                                    alt="play"
                                    src={PlayIcon}
                                  ></img>
                                </div>
                                <div className="Attachments">
                                  {lesson.attachments.map(
                                    (attachment, index) =>
                                      !attachment.type ===
                                        'Video' && (
                                        <div
                                          key={index}
                                          className="Attachment"
                                          onClick={() =>
                                            this.setActiveAttachment(
                                              attachment,
                                            )
                                          }
                                        >
                                          <img
                                            src={AttachmentIcon}
                                            alt="attachment"
                                          />
                                          {attachment.link_file}
                                        </div>
                                      ),
                                  )}
                                </div>
                              </div>
                            ))}
                        </Fragment>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CourseInfo;
