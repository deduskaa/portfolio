import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Work } from './Work'
import movixPic from '../assets/works/movix.jpg'
import krhPic from '../assets/works/krh.jpg'
import marketingPic from '../assets/works/marketing.jpg'
import yrityshakuPic from '../assets/works/yrityshaku.jpg'

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  max-width: 1200px;
`

export const WorkList = () => {
  const works = [
    {
      link: '/works/krh',
      img: krhPic,
      title: 'Kohderyhmähaku',
      content: 'Developing a web service for sales and marketing.'
    },
    {
      link: '/works/yrityshaku',
      img: yrityshakuPic,
      title: 'Yrityshaku',
      content: 'Designing and developing for Finland’s leading business media.'
    },
    { link: '/works/movix', img: movixPic, title: 'Movix', content: 'Freetime project' },
    {
      link: '/works/marketing',
      img: marketingPic,
      title: 'Marketing',
      content: 'My previous work that led me here.'
    }
  ]

  return (
    <Wrapper>
      {works.map(work => (
        <Link to={work.link}>
          <Work img={work.img} title={work.title} content={work.content} link={work.link} />
        </Link>
      ))}
    </Wrapper>
  )
}
