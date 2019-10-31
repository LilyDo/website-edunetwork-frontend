import React from 'react';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import './AccountCoursePage.scss';

function AccountCoursePage() {
  return (
    <div>
      <AccountBreadcrumb />
      <div className="AccountCoursePage">
        <div className="MyCourse">
          <div className="Title">Khóa học của bạn</div>
          <div className="CourseContainer">
            <div className="Course">A</div>
          </div>
        </div>
        <div className="RecommendedCourse">
          <div className="Title">Khóa học đề xuất cho bạn</div>
          <div className="CourseContainer">
            <div className="Course">B</div>
          </div>
        </div>
        <div className="OtherCourse">
          <div className="Title">Khóa học bổ sung cho bạn</div>
          <div className="CourseContainer">
            <div className="Course">C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountCoursePage;
