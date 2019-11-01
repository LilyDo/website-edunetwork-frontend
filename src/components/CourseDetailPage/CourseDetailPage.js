import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import CourseLevel from '../CourseLevel/CourseLevel';
import CourseInfo from '../CourseInfo/CourseInfo';
import CourseCarouselContainer from '../CourseCarouselContainer/CourseCarouselContainer';

class CourseDetailPage extends Component {
  render() {
    console.log('xxx useParams()', useParams());
    return (
      <div>
        <Breadcrumb />
        <CourseLevel />
        <CourseInfo />
        <CourseCarouselContainer />
      </div>
    );
  }
}

export default CourseDetailPage;
