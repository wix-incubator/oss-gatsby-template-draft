import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class inverseCtaButton extends Component {
  render() {
    const { children } = this.props
    return (
      <Link style={{ border: 'none' }} to={this.props.to}>
        <InverceButtonContainer>{children}</InverceButtonContainer>
      </Link>
    )
  }
}

export default inverseCtaButton

const InverceButtonContainer = styled.div`
  border: 1px solid #ffffff;
  border-radius: 24px;
  padding: 10px;
  margin: 10px;
  font-face: "Helvetica Neue";
  font-size: 1em;
  color: #EB5E51;
  background: #ffffff;
  display: inline-block;
  transition: all 0.3s ease;
  height: 42px;


  &:hover {
    opacity:0.9;
  }
`
