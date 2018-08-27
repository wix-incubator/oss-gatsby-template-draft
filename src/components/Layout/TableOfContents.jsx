import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaSortDesc } from 'react-icons/lib/fa'
import { isNull } from 'util';

/* eslint react/no-array-index-key: "off" */


function handleClick(event, title) {
  const list = document.getElementById(`list-${title}`)
  const chevron = document.getElementById(`chevron-${title}`)
  if (list.style.display === 'inherit') {
    list.style.display = 'none'
    chevron.style.transform = 'rotate(270deg)'
  } else {
    list.style.display = 'inherit'
    chevron.style.transform = 'rotate(360deg)'
  }
}

const Links = ({ entries , postTitle, indentation, level}) => (
  <StyledLinkList>
    {entries.map(({ entry }, key) => (
      <EntryListItem key={key} className={`tocitems tocitems-level-${level}`} id={`entry-li-${entry.childMarkdownRemark.frontmatter.title}`}>
        <Link to={entry.childMarkdownRemark.fields.slug}>

        { postTitle == entry.childMarkdownRemark.frontmatter.title && 
           <EntryTitle className={`activeMenuItem`} id={`menu-title-${entry.childMarkdownRemark.frontmatter.title}`}>{indentation}<b>{entry.childMarkdownRemark.frontmatter.title}</b></EntryTitle>}

        {postTitle !== entry.childMarkdownRemark.frontmatter.title && 
          <EntryTitle id={`menu-title-${entry.childMarkdownRemark.frontmatter.title}`}>{indentation}{entry.childMarkdownRemark.frontmatter.title}</EntryTitle>}
        </Link>
      </EntryListItem>
    ))}
  </StyledLinkList>
)

const ChapterList = ({ chapters, entries, postTitle, title, level = 0 }) => (
  <StyledChapterList>
    {title && (
      <ChapterListItem key={`${title}${level}`}
        className={`head tochead-level-${level}`}
        id={`head-${title}-level${level}`}
        onClick={event => handleClick(event, title)}
      >
        { level==0 && <ChapterTitle level={level}>{title}</ChapterTitle>}
        { level==1 && <ChapterTitle level={level}>{title}</ChapterTitle>}
        { level==2 && <ChapterTitle level={level}>{title}</ChapterTitle>}
        { level==3 && <ChapterTitle level={level}>{title}</ChapterTitle>}


        { level==0 && <FaSortDesc className={'chevron'} id={`chevron-${title}`} />}
        { level==1 && <FaSortDesc className={'chevron-1'} id={`chevron-${title}`} />}
        { level==2 && <FaSortDesc className={'chevron-2'} id={`chevron-${title}`} />}
        { level==3 && <FaSortDesc className={'chevron-3'} id={`chevron-${title}`} />}
      </ChapterListItem>
    )}
    <ChapterListItem id={`list-${title}`} className={`toclist toclist-level-${level}`} postTitle={postTitle} style={{ display: 'inherit' }}>
      
      
      {entries && <Links entries={entries} postTitle={postTitle}  level={level}/>} 

  
   {chapters &&
      chapters.map((chapter, index) => (
        <ChapterList {...chapter} level={level + 1} postTitle={postTitle} key={`${index}`} />
      ))}</ChapterListItem>    
  </StyledChapterList>
)

const TableOfContents = ({ postTitle, chapters }) => (
  <TOCWrapper >
    {chapters.map((chapter, index) => <ChapterList {...chapter} postTitle={postTitle} key={index} />)}
  </TOCWrapper>
)

export default TableOfContents

const TOCWrapper = styled.div`
  padding: ${props => props.theme.sitePadding};
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-child {
    align-self: flex-start;
    margin-bottom: 10px;
  }
`

const StyledChapterList = styled.ol`
  list-style: none;
  margin: 0;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

const StyledLinkList = styled.ol`
  list-style: none;
`

const EntryTitle = styled.h6`
  display: inline-block;
  font-weight: 200;
  color: black;
  margin: 0;
  line-height: 1.5;
  border-bottom: 1px solid transparent;
  text-decoration: none;
`

const ChapterListItem = styled.li`
  margin: 0;
  transition: all 300ms ease-in-out;

  .chevron {
    height: 15px;
    width: 15px;
    color: ${props => props.theme.gatsbyLight}};
    transform: rotate(360deg);
    transition: all 300ms ease-in-out;
  }
  .chevron-1 {
    height: 12px;
    width: 12px;
    color: ${props => props.theme.submenuChevronColor}};
    transform: rotate(360deg);
    transition: all 300ms ease-in-out;
  }

  .toclist-level-1 {
    padding-left: 10px;
  }

  .toclist-level-2 {

    padding-left: 20px;
  }

  .tochead-level-1 {padding-left: 10px;}

  .tochead-level-2 {padding-left: 20px;}

  .tochead-level-3 {padding-left: 30px;}
`

const EntryListItem = styled.li`
  margin: 0;
  a:hover {
    border-bottom: 1px solid black;
  }
`

const ChapterTitle = styled.h5`
  font-weight: ${({ level }) => {
    switch (level % 3) {
      case 1:
        return '300'
      case 2:
        return '200'
      default:
        return '400'
    }
  }};
  font-size: ${({ level }) => {
    switch (level % 3) {
      case 1:
        return '1.8rem'
      case 2:
        return '1.8rem'
      default:
        return '1.8rem'
    }
  }};
  color: ${({ level, theme }) => {
    switch (level % 3) {
      case 1:
        return 'darkgrey'
      case 2:
        return 'lightgrey'
      default:
        return 'grey'
    }
  }};
`
