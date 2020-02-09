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
import companyPagePic from '../../../assets/works/companysearch_companypage.jpg'
import frontpagePic from '../../../assets/works/companysearch_frontpage.jpg'
import performersPic from '../../../assets/works/companysearch_performers.jpg'

export const CompanySearch = () => (
  <Wrapper>
    <Heading>
      <WorkTitle>Kauppalehti.fi - Yrityshaku</WorkTitle>
      <Description>Part of something big</Description>
    </Heading>
    <ImgWrapper>
      <Img src={frontpagePic} alt="KL.fi Yrityshaku - Etusivu" />
    </ImgWrapper>
    <Section>
      <Column>
        <SubTitle>Background</SubTitle>
        <Text>
          Kauppalehti is a multichannel news outlet focusing on economic phenomena and the money
          market in the digital era. Yrityshaku has been part of Kauppalehti since the beginning.
        </Text>
      </Column>
      <Column>
        <SubTitle>My role</SubTitle>
        <ul>
          <li>UI/UX Design</li>
          <li>Visual Design</li>
          <li>Development</li>
        </ul>
      </Column>
    </Section>
    <Heading>
      <SubTitle>Development</SubTitle>
    </Heading>
    <ImgWrapper>
      <Img src={companyPagePic} alt="Two mobile pictures of company search" />
    </ImgWrapper>
    <Section>
      <Text>
        Yrityshaku was my first big React project and I consider it my firstborn, codewise. Being
        part of designing and developing it is probably one of the highlights of my career.
        Technologywise I got my first touch on real world React development, Redux and Typescript.
      </Text>
    </Section>
    <Heading>
      <SubTitle>Menestyjät-lista and Protestilista</SubTitle>
    </Heading>
    <ImgWrapper>
      <Img src={performersPic} alt="Movix search page" />
    </ImgWrapper>
    <Section>
      <Text>
        The frontpage and companypage of Yrityshaku's basic layout was mostly done when I came in,
        but Menestyjät-lista and Protestilista still needed revamping so this was my first big
        design task. Yrityshaku was part of Kauppalehti.fi Yritykset section as was Menestyjät-lista
        which is a list of well performed companies in Finland. Protestlista is a record of
        companies unhonoured bills of exchange in Finland.
      </Text>
    </Section>
    <Heading>
      <SubTitleLink>
        <Link href="https://www.kauppalehti.fi/yritykset" target="_blank" rel="noopener">
          Visit page >
        </Link>
      </SubTitleLink>
    </Heading>
  </Wrapper>
)
