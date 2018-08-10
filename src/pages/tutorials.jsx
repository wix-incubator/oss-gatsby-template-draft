import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../../data/SiteConfig'
import MainHeader from '../components/Layout/Header'

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
`
class TutorialsPage extends React.Component {
    render() {
      return (
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <main>
            <MainHeader
              siteTitle={config.siteTitle}
              siteDescription={config.siteDescription}
              location={this.props.location}
              logo={config.siteLogo}
            />
            <BodyContainer>
              TODO: Tutorials info
            </BodyContainer>
          </main>
        </div>
      )
    }
  }
  
  export default TutorialsPage