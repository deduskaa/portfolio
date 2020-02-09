import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg'
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg'
import { ReactComponent as EmailIcon } from '../assets/envelope-solid.svg'
import { ReactComponent as GithubIcon } from '../assets/github.svg'

const Wrapper = styled.footer`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
`

const Icon = styled.i`
  color: lightgray;
  margin: 20px 20px 20px 0;
  transition: color 0.25s;

  svg {
    height: 20px;
    fill: lightgray;
    transition: fill 0.25s;
  }

  &:hover {
    color: gray;
    svg {
      fill: gray;
    }
  }
`

export const Footer = () => {
  const socialLinks = [
    {
      link: 'mailto:jennny.tran@gmail.com',
      title: 'email',
      icon: <EmailIcon />
    },
    {
      link: 'https://www.linkedin.com/in/jenny-tran-66b92870/',
      title: 'linkedin',
      icon: <LinkedInIcon />
    },
    {
      link: 'https://github.com/deduskaa',
      title: 'github',
      icon: <GithubIcon />
    },
    {
      link: 'https://www.instagram.com/deduskaa/',
      title: 'instagram',
      icon: <InstagramIcon />
    }
  ]

  return (
    <Wrapper>
      <p>© Jenny Tran</p>
      <div>
        {socialLinks.map(social => (
          <a
            aria-label={social.title}
            href={social.link}
            rel="noopener noreferrer"
            target="_blank"
            key={social.title}
          >
            <Icon>{social.icon}</Icon>
          </a>
        ))}
      </div>
    </Wrapper>
  )
}
