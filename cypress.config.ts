import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3333',
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.{spec,cy}.*',
    supportFile: false,
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
})
