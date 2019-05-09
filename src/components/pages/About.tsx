import React from 'react';
import styled from 'styled-components';
import youngMe from '../../assets/youngme.jpg';
import { theme } from '../theme';

const Section = styled.section`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 0;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  margin: 30px 0 10px;
`;

const ImgWrapper = styled.div`
  flex: 1 1 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  img {
    border-radius: 50%;
  }
`;

const Wrapper = styled.div`
  max-width: 750px;
  flex: 1 1 100%;
`;

const Description = styled.p`
  line-height: 1.7;
  font-family: ${theme.fonts.light_text};
  font-size: 18px;
  margin: 0;
`;

const Tag = styled.div<{ tag: string }>`
  border-radius: 10px;
  padding: 5px 10px;
  background-color: ${p =>
    p.tag === 'design' ? theme.tags.design : p.tag === 'marketing' ? theme.tags.marketing : theme.tags.dev};
  margin: 5px 5px 5px 0;
  color: ${theme.colors.text}
  font-family: ${theme.fonts.light_text};
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ExpWrapper = styled.div`
    margin: 15px 0 0;
`;

const ExperienceRow = styled.h4`
  margin: 0;
  font-weight: 400;
  margin-bottom: 5px;
`;

const WorkTitle = styled.span`
  font-family: ${theme.fonts.italic_main};
  font-size: 14px;
  color: ${theme.colors.text};
`;

const Time = styled.p`
  text-transform: uppercase;
  margin: 0 0 20px;
  font-size: 12px;
  color: ${theme.colors.gray};
`;

export default function About() {
  const skills = [
    { title: 'HTML', tag: 'web' },
    { title: 'CSS', tag: 'web' },
    { title: 'Sass', tag: 'web' },
    { title: 'Javascript', tag: 'web' },
    { title: 'Typescript', tag: 'web' },
    { title: 'React', tag: 'web' },
    { title: 'Redux', tag: 'web' },
    { title: 'jQuery', tag: 'web' },
    { title: 'Git', tag: 'web' },
    { title: 'AngularJS', tag: 'web' },
    { title: 'UI/UX Design', tag: 'design' },
    { title: 'Figma', tag: 'design' },
    { title: 'Adobe Illustrator', tag: 'design' },
    { title: 'Adobe Photoshop', tag: 'design' },
    { title: 'Adobe Premiere', tag: 'design' },
    { title: 'Social Media Marketing', tag: 'marketing' },
    { title: 'Digital Marketing', tag: 'marketing' },
    { title: 'Print Designs', tag: 'marketing' },
    { title: 'SEO', tag: 'marketing' },
    { title: 'Google Analytics', tag: 'marketing' },
    { title: 'Ensighten', tag: 'marketing' }
  ];

  return (
    <Section>
      <ImgWrapper>
        <img src={youngMe} />
      </ImgWrapper>
      <Wrapper>
        <Title>About Me</Title>
        <Description>
          Hi! I'm Jenny Tran, a front end dev focused in UI/UX design. I'm always looking for new and exciting
          opportunities, so don't hesitate to get in touch via <a href='mailto:jennny.tran@gmail.com'>email</a>. My
          interests lie particulary in front end development, executing beautiful UIs and motion design.
        </Description>

        <Title>What I know</Title>
        <TagContainer>
          {skills.map(skill => (
            <Tag tag={skill.tag}>{skill.title}</Tag>
          ))}
        </TagContainer>

        <Title>Work experience</Title>
        <ExpWrapper>
          <ExperienceRow>
            Software Developer — <WorkTitle>ALMA TALENT OY, Helsinki</WorkTitle>
          </ExperienceRow>
          <Time>March 2018 - </Time>
          <ExperienceRow>
           Front-end Developer — <WorkTitle>APPRIX OY, Helsinki</WorkTitle>
          </ExperienceRow>
          <Time>September 2017 - March 2018, 6 KK</Time>
          <ExperienceRow>
            Shop assistant — <WorkTitle>EJ-HOLDING OY, Espoo</WorkTitle>
          </ExperienceRow>
          <Time>July 2013 - January 2017, 3 V 8 KK</Time>
          <ExperienceRow>
            Marketing assistant — <WorkTitle>BERNER OY, Helsinki</WorkTitle>
          </ExperienceRow>
          <Time>August 2015 - April 2016, 9 KK</Time>
        </ExpWrapper>
      </Wrapper>
    </Section>
  );
}
