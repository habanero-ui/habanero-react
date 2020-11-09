module.exports = {
  stories: [
    '../docs/**/*.stories.@(js|jsx|mdx)',
    '../src/**/*.stories.@(js|jsx|mdx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
  ],
}
