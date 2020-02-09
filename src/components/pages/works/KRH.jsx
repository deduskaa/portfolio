import React from 'react'
import {
  Wrapper,
  Heading,
  WorkTitle,
  Description,
  Img,
  ImgWrapper,
  Section,
  Column,
  SubTitle,
  Text,
  SubTitleLink,
  Link
} from './common'
import krhMultipleViewPic from '../../../assets/works/krh_desktop_mobile.jpg'
import krhDesktopPic from '../../../assets/works/krh_desktop.jpg'
import krhFrontPic from '../../../assets/works/krh_frontpage.jpg'

export const KRH = () => (
  <Wrapper>
    <Heading>
      <WorkTitle>Kohderyhmähaku</WorkTitle>
      <Description>Out with the old and in with the new</Description>
    </Heading>
    <ImgWrapper>
      <Img src={krhMultipleViewPic} alt="Kohderyhmähaku" />
    </ImgWrapper>
    <Section>
      <Column>
        <SubTitle>Background</SubTitle>
        <Text>
          Kohderyhmähaku is a web application for boosting B2B sales and marketing by providing
          users a tool where they can find potential customers and partners.
        </Text>
      </Column>
      <Column>
        <SubTitle>My role</SubTitle>
        <ul>
          <li>UI/UX Design</li>
          <li>Visual Design</li>
          <li>Prototyping</li>
          <li>Development</li>
        </ul>
      </Column>
    </Section>
    <Heading>
      <SubTitle>Design</SubTitle>
    </Heading>
    <ImgWrapper>
      <Img src={krhDesktopPic} alt="Kohderyhmahaku desktop picture" />
    </ImgWrapper>
    <Section>
      <Text>
        The goal of the new design was to simplify the service to new and old users and refreshen
        the visual design. This meant clearing up search parameters names and clearer categorizing.
      </Text>
    </Section>
    <Heading>
      <SubTitle>Development</SubTitle>
    </Heading>
    <ImgWrapper>
      <Img src={krhFrontPic} alt="Kohderyhmahaku frontpage" />
    </ImgWrapper>
    <Section>
      <Text>
        Kohderyhmähaku was done with React, Typescript and Ant Design was used as a Design System. I
        had my first touch on configuring Webpack and React hooks and Context API in this project.
      </Text>
    </Section>
    <Heading>
      <SubTitleLink>
        <Link
          href="https://tietopalvelut.almatalent.fi/kohderyhmahaku/"
          target="_blank"
          rel="noopener"
        >
          Visit page >
        </Link>
      </SubTitleLink>
    </Heading>
  </Wrapper>
)
