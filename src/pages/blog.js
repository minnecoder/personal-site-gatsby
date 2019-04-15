import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  background: #353535;
  font-family: Arial, sans-serif;
  color: white;
`

const Blog = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  flex: 1 100%;
  margin-top: 12vh;
`

const BlogIndex = styled.div`
  background: #444;
  width: 15%;
  height: 60%;
  text-align: center;
  > h3 {
    padding: 10px 0;
  }
`
const IndexLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 5px 0;
`

const EntryLink = styled(Link)`
  color: #08fdd8;
  text-decoration: none;
`

const BlogEntries = styled.div`
  padding: 20px;
  width: 70%;
`

const BlogEntry = styled.div`
  background: #444;
  padding: 25px;
  margin-bottom: 50px;
  > p {
    padding: 8px 0;
  }
`

// #08fdd8

const BlogPage = ({ data }) => (
  <Main>
    <Header />
    <Blog id="blog-page">
      <BlogIndex>
        <h3>Index</h3>
        {data.allMarkdownRemark.edges.map(list => (
          <div key={list.node.id}>
            <IndexLink to={list.node.frontmatter.path}>{list.node.frontmatter.title}</IndexLink>
          </div>
        ))}
      </BlogIndex>

      <BlogEntries>
        {data.allMarkdownRemark.edges.map(blog => (
          <BlogEntry key={blog.node.id} id={blog.node.frontmatter.title}>
            <h3>
              <EntryLink to={blog.node.frontmatter.path}>{blog.node.frontmatter.title}</EntryLink>
            </h3>

            <p> Date: {blog.node.frontmatter.date}</p>

            <div dangerouslySetInnerHTML={{ __html: blog.node.excerpt }} />
          </BlogEntry>
        ))}
      </BlogEntries>
    </Blog>
    <Footer />
  </Main>
)

BlogPage.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          html
          id
          excerpt(pruneLength: 500)
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`

export default BlogPage
