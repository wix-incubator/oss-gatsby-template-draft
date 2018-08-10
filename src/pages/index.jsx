import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import CtaButton from '../components/CtaButton'
import InverseCtaButton from '../components/inverseCtaButton'
import Navigation from '../components/Layout/Navigation'
import ReactPlayer from 'react-player'

class Index extends React.Component {
  render() {
    const allSEOMarkdown = this.props.data.allMarkdown.edges

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={allSEOMarkdown} />
        <main>
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <h1>{config.siteTitle}</h1>
              <h4>{config.siteDescription}</h4>
              
              <InverseCtaButton to={'/lesson-one'}>Get Started</InverseCtaButton>
              <InverseCtaButton to={'/lesson-one'}>Take a Tutorial</InverseCtaButton>
              <InverseCtaButton to={'/lesson-one'}>Try In a SandBox</InverseCtaButton>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <ReactPlayer  url='https://youtu.be/Jx7L_2VkfR4' playing />
            
            <div className="grid-container" id="features">
              <div class="grid-item-1">
              <h3>Share queries</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed congue tellus. Suspendisse ut consectetur leo. Proin consectetur risus at tellus efficitur, vitae convallis dolor blandit. Vestibulum ac hendrerit augue, ultricies semper eros. Duis aliquet viverra nulla, et hendrerit erat. Donec odio neque, consectetur et ligula ut, tempor vulputate nibh. Nulla augue ipsum, imperdiet viverra imperdiet ac, molestie nec urna. Aenean sit amet tortor arcu. Sed ullamcorper condimentum ligula, quis pretium orci efficitur vel. </p>
              </div>
              <div class="grid-item-2">
              <h3>Combine data from multiple sources</h3>
              <p>Proin at ornare urna. Aenean sodales, eros nec ultricies interdum, tellus turpis dictum diam, nec cursus tortor augue ut diam. Sed eget accumsan diam.</p>
              </div>
              <div class="grid-item-3">
              <h3>Embed Visual Metrics</h3>
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque aliquet mollis libero nec vehicula. </p>
              </div>
            </div>

            <h2>A Gatsby Template for Content</h2>
            <p>
              Made for modern documentation sites. Table of Contents
              automatically generated from markdown files.{' '}
            </p>
            <CtaButton to={'/lesson-one'}>See Your First Post</CtaButton>

            <div className="contributors">
              <p>
                Created by Eric Windmill.{' '}
                <a href="https:twitter.com/ericwindmill">
                  You should follow him on Twitter.
                </a>{' '}
                Also, <a href="https://github.com/Levino">Levin Keller</a> for
                making it better than I could{"'"}ve alone.
              </p>
            </div>
          </BodyContainer>
        </main>
      </div>
    )
  }
}

export default Index

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
  text-align: center;
`

const Hero = styled.div`
  padding: 50px 0;
  color: white;
  & > h1 {
    font-weight: 100;
    
  }
  & > h4 {
    font-weight: 100;
  }
`

const BodyContainer = styled.div`
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
  text-align: center;

  .contributors {
    max-width: 400px;
    margin: 100px auto 0;
  }

  .grid-container {
    margin-top: 36px;
    text-align: left;
    display: grid;
    width: 1044px; 
    grid-gap: 36px;
    color: #eeeeee;        
  grid-template-columns: auto auto auto auto;
  font-size: 20px;   
  }

  .grid-container > div {
  color: #000000;
  font-size: 20pt;
  }

  .grid-item-1 {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .grid-item-2 {
    grid-column-start: 5;
    grid-column-end: 8;
  }

  .grid-item-3 {
    grid-column-start: 9;
    grid-column-end: 12;
  }
`

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdown: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
