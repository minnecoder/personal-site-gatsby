// /**
//  * Layout component that queries for data
//  * with Gatsby's StaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/static-query/
//  */

// import React from "react"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "../components/layout.css"

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             // display: `flex`,
//             // flexDirection: `column`,
//             // justifyContent: `flex-end`
//           }}
//         >
//           <main>{children}</main>
//           <footer className="footer">
//           <p className="footer-text">
//             © {new Date().getFullYear()} Sean Parkin
//             </p>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout