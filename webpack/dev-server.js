'use strict';

module.exports = {
  contentBase: './src',
  port: 9000,
  host: '0.0.0.0',
  inline: true,
  historyApiFallback: true,
  stats: 'errors-only',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 500
  }
};
