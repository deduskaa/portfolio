import React from 'react'
import styled from 'styled-components'
import { theme } from './theme'
import { fadeIn } from './animations'

const Section = styled.section`
  animation: ${fadeIn} 0.9s;
  max-width: 700px;
  margin: 60px auto 80px;
  padding: 0 15px;

  h2 {
    font-weight: 300;
    line-height: 1rem;
    line-height: 2.5rem;
  }
`

const Bold = styled.span`
  color: ${theme.colors.main};
  font-weight: 500;
`

export const Introduction = () => (
  <Section>
    <h2>
      Hi, I'm <Bold>Jenny Tran</Bold> - I like to code cool websites and sometimes I also design
      stuff.
    </h2>
  </Section>
)
