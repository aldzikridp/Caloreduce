const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    cssnano({
      preset: [
        'default',
        { discardComments: { removeAll: true } },
      ],
    }),
  ],
};
