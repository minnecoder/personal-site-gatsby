 import React from 'react'
 import Helmet from 'react-helmet'
import { graphql } from 'gatsby';
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/post.css"

 export default function Template({data}) {
     const {markdownRemark: post} = data;
     return (
         <>
         <Header />
         <div className="post-container">
         <Helmet title={`Sean Parkin - ${post.frontmatter.title}`} />
             <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
             
             <div 
             className="blog-post-content"
             dangerouslySetInnerHTML={{__html: post.html}} />
             </div>
         </div>
         <Footer />
         </>
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