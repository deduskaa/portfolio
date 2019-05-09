import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from './theme';
import { appearUp, fadeIn } from './animations';
import { Link } from 'react-router-dom';

function createCSSAnimationDelayLoop() {
  let styles = '';

  for (let i = 1; i < 5; i++) {
    styles += `
     &:nth-child(${i}) {
         animation-delay: ${i * 50}ms;
       }
     `;
  }

  return css`
    ${styles}
  `;
}

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 30px;
  font-weight: 400;
  color: ${theme.colors.text};
  transition: color 0.22s ease-out;
`;

const Description = styled.p`
  animation: ${fadeIn} 0.2;
  color: ${theme.colors.white};
  font-size: 16px;
  line-height: 1.5;
  margin: 10px 0;
  transition: opacity 0.4s ease-in;
  visibility: hidden;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 35px;
  z-index: 1;
  max-width: 70%;
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;

  &:after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    transform: translate(0, 100%);
    background-color: ${theme.colors.main};
    transition: transform 0.4s ease-out, opacity 0.4s;
    opacity: 0.2;
  }

  a {
    color: ${theme.colors.white};
    font-weight: 500;
    position: absolute;
    left: 35px;
    bottom: 10%;
    z-index: 1;
    opacity: 0;
    transition: all 0.25s;
  }
`;

const Wrapper = styled.div`
  margin: 25px 35px;
  position: relative;
  opacity: 0;
  animation: ${appearUp} 0.35s ease-out forwards;
  ${createCSSAnimationDelayLoop()};

  &:hover {
    ${Title} {
      color: ${theme.colors.white};
    }

    ${Description} {
      visibility: visible;
    }

    ${Overlay} {
      :after {
        opacity: 0.85;
        transform: translate(0, 0);
      }
      a {
        animation: ${appearUp} 0.35s ease-out forwards;
      }
    }
  }
`;

interface Props {
  img: string;
  title: string;
  content: string;
  link: string;
}

export default function Work(props: Props) {
  return (
    <Wrapper>
      <TextContainer>
        <Title>{props.title}</Title>
        <Description>{props.content}</Description>
      </TextContainer>
      <Img src={props.img} alt={props.title} />
      <Overlay>
        <Link to={props.link}>Read more ></Link>
      </Overlay>
    </Wrapper>
  );
}
