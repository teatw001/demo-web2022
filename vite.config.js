const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detailElement: resolve(__dirname, 'detail.html'),
        products: resolve(__dirname, 'product.html'),
        signIns: resolve(__dirname, 'signin.html'),
        signups: resolve(__dirname, 'signup.html'),
      },
    },
  },
});