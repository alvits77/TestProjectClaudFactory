module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // For Jest - Babel equivalents for experimentalDecorators and emitDecoratorMetadata
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
