import React from 'react';
import frontpagePic from '../../../assets/works/movix_frontpage.jpg';
import searchPic from '../../../assets/works/movix_search.jpg';
import moviePic from '../../../assets/works/movix_moviepage.jpg';
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
} from './common';

export default function Movix() {
  return (
    <Wrapper>
      <Heading>
        <WorkTitle>MoviX</WorkTitle>
        <Description>Doing stuff for fun</Description>
      </Heading>
      <ImgWrapper>
        <Img src={moviePic} alt='Movix movie page' />
      </ImgWrapper>
      <Section>
        <Column>
          <SubTitle>Background</SubTitle>
          <Text>
            Movix is an app I made for fun, trying to copy a UI I found from dribbble with a small twist. I also added
            search and save functionalities.
          </Text>
        </Column>
        <Column>
          <SubTitle>Includes</SubTitle>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Styled Components</li>
            <li>The Movie Database API</li>
          </ul>
        </Column>
      </Section>
      <Heading>
        <SubTitle>Search and favourites</SubTitle>
      </Heading>
      <ImgWrapper>
        <Img src={searchPic} alt='Movix search page' />
      </ImgWrapper>
      <Section>
        <Text>Users favourites are saved in local storage, while popular and top rated movies are saved in cache.</Text>
      </Section>
      <Heading>
        <SubTitle>Frontpage</SubTitle>
      </Heading>
      <ImgWrapper>
        <Img src={frontpagePic} alt='Movix front page' />
      </ImgWrapper>
      <Heading>
        <SubTitleLink>
          <Link href='https://deduskaa.github.io/movix/' target='_blank' rel='noopener'>
            Visit page >
          </Link>
        </SubTitleLink>
        <SubTitleLink>
          <Link href='https://github.com/deduskaa/movix' target='_blank' rel='noopener'>
            Source code >
          </Link>
        </SubTitleLink>
      </Heading>
    </Wrapper>
  );
}
