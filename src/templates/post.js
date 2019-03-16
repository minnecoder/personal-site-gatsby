 import React from 'react'
 import Helmet from 'react-helmet'
import { graphql } from 'gatsby';
import Layout from "../components/layout"

 export default function Template({data}) {
     const {markdownRemark: post} = data;
     return (
         <Layout>
         <div className="post-container">
         <Helmet title={`Sean Parkin - ${post.frontmatter.title}`} />
             <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
             
             <div 
             className="blog-post-content"
             dangerouslySetInnerHTML={{__html: post.html}} />
             </div>
         </div>
         </Layout>
     );
 }

 export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) { 
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`