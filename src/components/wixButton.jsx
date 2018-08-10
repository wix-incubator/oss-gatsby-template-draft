import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ButtonLayout from 'wix-style-react/ButtonLayout'

class wixButton extends Component {
  render() {
    const { children } = this.props
    return (
      <Link style={{ border: 'none' }} to={this.props.to}>
        <ButtonLayout height="x-large" theme="fullred">
  <span>
  { children }
  </span>
</ButtonLayout>
      </Link>
    )
  }
}

export default wixButton
