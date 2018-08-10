import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import UserLinks from '../UserLinks'
import config from '../../../data/SiteConfig'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;

  section {
    margin-top: 20px;
  }

  .nav-link {
    font-size: 2rem;
    margin-right: 10px;
    font-weight: 200;
    color: black;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      margin-bottom: 20px;
    }

    span {
      display: none;
    }
  }
`

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        <span>
        <Link className="nav-link" to="/">
        {' '}
<img src={config.siteLogo} width="188px" alt="" />{' '}
</Link>
        </span>        
        <section>         
          <Link className="nav-link" to="/understanding-quix">
            {' '}
            Docs{' '}
          </Link>
          <Link className="nav-link" to="/tutorials">
            {' '}
            Tutorials{' '}
          </Link>
          <Link className="nav-link" to="/dev">
            {' '}
            Dev Portal{' '}
          </Link>
          <Link className="nav-link" to="/community">
            {' '}
            Community{' '}
          </Link>
        </section>
        <span>
          <UserLinks />
        </span>
      </NavContainer>
    )
  }
}

export default Navigation
