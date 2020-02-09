import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { theme } from './theme'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px;
`

const LinkList = styled.ul`
  list-style-type: none;
  margin: 0 40px;
  padding: 0;

  li {
    display: inline-block;
    padding: 15px 20px;
  }
`

const Title = styled.h1`
  margin: 20px;
  font-weight: normal;
`

const Link = styled(RouterLink)`
  cursor: pointer;
  color: #444;
  transition: color 0.2s;
  position: relative;

  &:after {
    content: '';
    width: 0;
    background-color: ${theme.colors.main};
    position: absolute;
    height: 2px;
    bottom: -5px;
    left: 0;
    transition: width 0.25s;
  }

  &:hover {
    color: #000;

    &:after {
      width: 100%;
    }
  }
`

export const Nav = () => (
  <Navbar>
    <Title>
      <RouterLink to="/">Jenny Tran</RouterLink>
    </Title>
    <LinkList>
      <li>
        <Link to="/">Work</Link>
      </li>
      <li>
        <Link to="/about">About me</Link>
      </li>
    </LinkList>
  </Navbar>
)
