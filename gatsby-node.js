const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/post.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    return res.data.allMarkdownRemark.edges.forEach(({ node }) => createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    }));
  });
};
