const path = require('path');
const rimraf = require('rimraf');

const PUBLIC_FOLDER = `${__dirname}/public`;

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Hooks
exports.onPreInit = () =>
  rimraf(
    `${PUBLIC_FOLDER}/*`,
    {},
    e => (e ? Promise.reject(e) : Promise.resolve(e))
  );

// Webpack
exports.onCreateWebpackConfig = ({
  // stage,
  // rules,
  // loaders,
  // plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
