import React, { Component, Fragment } from 'react';
import { get } from 'lodash';

import './CourseInfo.scss';
import BulletIcon from '../../assets/images/icon_bullet.svg';
import PlusIcon from '../../assets/images/icon_plus.svg';
import PlayIcon from '../../assets/images/icon_play.svg';

class CourseInfo extends Component {
  state = {
    isIntroductionVisible: false,
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

  render() {
    const { isIntroductionVisible } = this.state;
    const { courseDetail } = this.props;
    const chapters = get(courseDetail, 'child', []);

    return (
      <div className="CourseInfoContainer">
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
              {chapters.map((chapter, index) => (
                <div className="Course" key={chapter.id}>
                  <div className="Name">
                    <img alt="bullet" src={BulletIcon}></img>
                    <img alt="plus" src={PlusIcon}></img>
                    <div>
                      KHÓA {index + 1}: {chapter.title}
                    </div>
                  </div>

                  {chapter.parts.map(part => (
                    <Fragment>
                      <div className="Part" key={part.id}>
                        <img alt="bullet" src={BulletIcon}></img>
                        <img alt="plus" src={PlusIcon}></img>
                        <div>{part.title}</div>
                      </div>

                      {part.lessons.map(lesson => (
                        <div className="Lessons" key={lesson.id}>
                          <div className="LessonContainer">
                            <div className="Lesson">
                              <img alt="play" src={PlayIcon}></img>
                              <div>{lesson.title}</div>
                            </div>
                            <div className="Duration">
                              {lesson.duration}
                            </div>
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
    );
  }
}

export default CourseInfo;
