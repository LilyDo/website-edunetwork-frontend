import React, { Component, Fragment } from 'react';
import { get } from 'lodash';

import './CourseInfo.scss';
import BulletIcon from '../../assets/images/icon_bullet.svg';
import PlusIcon from '../../assets/images/icon_plus.svg';
import PlayIcon from '../../assets/images/icon_play.svg';
import AttachmentIcon from '../../assets/images/icon_attachment.svg';
import { formatDuration } from '../../services/appService';

class CourseInfo extends Component {
  state = {
    isIntroductionVisible: true,
    activeAttachment: {},
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
    console.log('attachment:', attachment);
    this.setState({
      activeAttachment: attachment,
    });
  };

  render() {
    const { isIntroductionVisible, activeAttachment } = this.state;
    const { courseDetail } = this.props;
    const chapters = get(courseDetail, 'child', []);

    return (
      <div className="CourseInfoContainer">
        {activeAttachment && (
          <div className="AttachmentPlayer">
            <iframe
              title="hero_youtube"
              src={`${activeAttachment.link_file}?autoplay=1&showinfo=0&controls=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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
              <span>Thông tin khóa học</span>
            </div>
            <div
              className={
                isIntroductionVisible === false
                  ? 'CurriculumTitle Active'
                  : 'CurriculumTitle'
              }
              onClick={this.hideCourseIntroduction}
            >
              <span>Giáo trình</span>
            </div>
          </div>

          {isIntroductionVisible && (
            <div className="CourseIntroduction">
              <div className="IntroductionContent">
                <div className="Head">Giới thiệu khóa học</div>
                <p>{courseDetail.description}</p>
              </div>
            </div>
          )}

          {!isIntroductionVisible && (
            <div className="CourseCurriculum">
              <div className="Head">Giáo trình</div>
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
                      chapter.parts.map(part => (
                        <Fragment>
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
                            part.lessons.map(lesson => (
                              <div
                                className="Lessons"
                                key={lesson.id}
                              >
                                <div className="LessonContainer">
                                  <div className="Lesson">
                                    <div className="Duration">
                                      {formatDuration(
                                        lesson.duration,
                                      )}
                                    </div>
                                    <div className="LessonTitle">
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
                                    attachment => (
                                      <div
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
