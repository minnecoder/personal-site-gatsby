import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";

const BlogPage = ({data}) => (
    <Layout>
        <SEO title="Blog" keywords={[`gatsby`,`application`,`react`]}/>
        <h3>Index</h3>
        <ul>
        {data.allMarkdownRemark.edges.map(index => (
            <li>
            <a href={index.node.frontmatter.path}>{index.node.frontmatter.title}</a>
            </li>
        ))}
        </ul>
    </Layout>
)

export const pageQuery= graphql`
    query IndexQuery {
        allMarkdownRemark(limit: 10) {
            edges {
              node {
                frontmatter {
                  path
                  title
                }
              }
            }
        }
    }
`

export default BlogPage