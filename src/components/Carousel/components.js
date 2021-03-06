import styled from 'styled-components';

export const NEXT = 'NEXT';
export const PREV = 'PREV';

const mobileBreakPoint = '768px';
const smallMobileBreakPoint = '600px';
const inBetweenBreakpoint = '1024px';

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
    if (props.dir === PREV) return 'translateX(-60%)';
    return 'translateX(60%)';
  }};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlot = styled.div`
  @media only screen and (max-width: ${smallMobileBreakPoint}) {
    flex-basis: 100%;
  }

  @media only screen and (min-width: ${inBetweenBreakpoint}) {
    flex-basis: 80%;
    margin-right: 50px;
  }

  flex: 1 0 100%;
  order: ${props => props.order};
`;

export const SlideButton = styled.button`
  border: none;
  background: none;

  img {
    @media only screen and (max-width: ${smallMobileBreakPoint}) {
      width: 40px;
    }

    @media only screen and (min-width: ${mobileBreakPoint}) {
      width: 60px;
    }
  }

  &:active {
    position: relative;
  }
  &:focus {
    cursor: pointer;
    outline: 0;
  }
`;

export const AppContainer = styled.div`
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

export const CenteredDiv = styled.div`
  @media only screen and (max-width: ${smallMobileBreakPoint}) {
    padding-top: 5px;
    padding-right: 10px;
    padding-left: 10px;
  }

  @media only screen and (min-width: ${inBetweenBreakpoint}) {
    padding-top: 10px;
    padding-right: 20px;
    padding-left: 20px;
  }
  display: flex;
  justify-content: space-between;
`;
