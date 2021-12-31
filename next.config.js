const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'react-native-web',
  'native-base',
]);

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins(
  [
    withTM,
    [withFonts, { projectRoot: __dirname }],
    [withExpo, { projectRoot: __dirname }],
    // your plugins go here.
  ],
  nextConfig
);