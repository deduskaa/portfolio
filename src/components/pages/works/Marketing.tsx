import React from 'react';
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
  SubTitleLink
} from './common';
import rollUpPic from '../../../assets/works/marketing_rollup.jpg';
import socialMediaPic from '../../../assets/works/marketing_social.jpg';

export default function Marketing() {
  return (
    <Wrapper>
      <Heading>
        <WorkTitle>Marketing</WorkTitle>
        <Description>She has a dark past.</Description>
      </Heading>
      {/* <ImgWrapper><Img src={frontpagePic} alt='KL.fi Yrityshaku - Etusivu' /></ImgWrapper> */}
      <Section>
        <SubTitle>Background</SubTitle>
        <Text>
          I gratuated as a media engineer and as you might wonder what media engineer does, we are kind of jack of all
          trades. During my education I focused on marketing and did my thesis about social media marketing. In the
          end I saw the light and was pulled in to the wonderful world of web development.
        </Text>
      </Section>
      <Heading>
        <SubTitle>Print</SubTitle>
      </Heading>
      <ImgWrapper>
        <Img src={rollUpPic} alt='Rollup' />
      </ImgWrapper>
      <Section>
        <Text>
          I've produced printed marketing material for b2b sales. In this case marketing materials included different
          catalogs, flyers, pop-ups, product tags and many other things.
        </Text>
      </Section>
      <Heading>
        <SubTitle>Social Media Marketing</SubTitle>
      </Heading>
      <ImgWrapper>
        <Img src={socialMediaPic} alt='Social media marketing' />
      </ImgWrapper>
      <Section>
        <Text>
          As{' '}
          <a href=' http://urn.fi/URN:NBN:fi:amk-201705036226' target='_blank' rel='noopener'>
            my thesis work
          </a>{' '}
          I planned a suitable social media marketing strategy for a book publishing company Minerva Kustannus and
          assisted them in implementing it. I also created and managed their Instagram account and created Facebook ads for them.
        </Text>
      </Section>
    </Wrapper>
  );
}
