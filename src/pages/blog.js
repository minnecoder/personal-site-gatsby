import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
    <Layout>
        <SEO title="Blog" keywords={[`gatsby`,`application`,`react`]}/>
        <h1>This is the blog page!!</h1>
    </Layout>
)

export default BlogPage