import styled from 'styled-components';

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const Item = styled.div`
  text-align: center;
  padding: 100px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${props =>
    props.sliding ? 'none' : 'transform 1s ease'};
  transform: ${props => {
    if (!props.sliding) return 'translateX(0px)';
    if (props.dir === PREV) return 'translateX(-80%)';
    return 'translateX(80%)';
  }};
`;

export const CourseCarouselContainer = styled.div`
  display: flex;
  transition: ${props =>
    props.sliding ? 'none' : 'transform 1s ease'};
  transform: ${props => {
    if (!props.sliding) return 'translateX(0% )';
    if (props.dir === PREV) return 'translateX(-20%)';
    return 'translateX(20%)';
  }};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${props => props.order};
`;

export const CourseCarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 20%;
  overflow: hidden;
  order: ${props => props.order};
`;

export const SlideButton = styled.button`
  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    cursor: pointer;
    outline: 0;
  }
`;

export const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 75%;
`;

export const ExtraInfo = styled.div`
  margin-top: 25px;
  display: inline-block;
`;

export const Code = styled.code`
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  margin: 0;
  padding: 0.2em 0.4em;
`;
