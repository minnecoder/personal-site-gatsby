import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import "./blog.css"

const BlogPage = ({ data }) => (
 <>
 <Header />
    <div id="blog-page">
      <div className="blog-index">
        <h3>Index</h3>
        {data.allMarkdownRemark.edges.map(list => (
          <div key={list.node.id}>
            <Link to={list.node.frontmatter.path}>
              {list.node.frontmatter.title}
            </Link>
          </div>
        ))}
      </div>
      
      <div className="blog-entries">
        {data.allMarkdownRemark.edges.map(blog => (
          <div
            key={blog.node.id}
            className="blog-entry"
            id={blog.node.frontmatter.title}
          >
            <h3 ><Link 
            className="blog-link"
            to={blog.node.frontmatter.path}
            >{blog.node.frontmatter.title}</Link></h3>

            <p> Date: {blog.node.frontmatter.date}</p>

            <div dangerouslySetInnerHTML={{ __html: blog.node.excerpt }} />
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
)

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
