 import React from 'react'
 import Helmet from 'react-helmet'
import { graphql } from 'gatsby';
import PropTypes from "prop-types";
import Header from "../components/header"
import Footer from "../components/footer"
import styles from "./post.module.css"

 export default function Template({data}) {
     const {markdownRemark: post} = data;

     return (
 
         <div className={styles.postContainer}>
          <Header />
          <Helmet title={`Sean Parkin - ${post.frontmatter.title}`} />
          <div className={styles.blogPost}>
            <h1>{post.frontmatter.title}</h1>
             
            <div 
             className={styles.blogPostContent}
             dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
          <Footer />
         </div>

         

     );
 }

 Template.propTypes ={
   data: PropTypes.object
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