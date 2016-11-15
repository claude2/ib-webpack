module.exports = {
  entry: ['./index.js'],

  output: {
    libraryTarget: 'commonjs2',
    publicPath: '/',
    filename: './bundle.js'
  },
  target: 'node',
  node: {
    net: 'empty',  // webpack error without this, Can't resolve 'net' in './node_modules/ib/lib'
  },
  devtool: 'source-map'
};
