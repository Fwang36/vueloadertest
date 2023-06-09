import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { sentryVitePlugin } from '@sentry/vite-plugin'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [vue(),
    sentryVitePlugin({
      org: "insertOrg",
      project: "insertProject",
      
      // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      // and need `project:releases` and `org:read` scopes
      // authToken: env.SENTRY_AUTH_TOKEN,
      release: "test12345",
      sourcemaps: {
        // Specify the directory containing build artifacts
        assets: "./dist/**",
      },
    })
  ],
})
