'use strict'

module.exports = (ctx) => ({
  map: ctx.file.dirname._includess('examples') ? false : {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: {
    autoprefixer: {
      cascade: false
    }
  }
})
