import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as Sentry from "@sentry/vue";
const app = createApp(App);


const initSentry = () => {

  Sentry.init({
      dsn: "https://e4929d7ee358419bb2931ddc4a8efcf4@o1407376.ingest.sentry.io/4505251557343232",
      integrations: [
        new Sentry.BrowserTracing({
          // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
          tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
        }),
      //   new Sentry.Replay(),
      ],
      release: "test12345",
      // debug: true,
      logErrors: true,
  
      // Performance Monitoring
      tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
      // Session Replay
      replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
      replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });

  
} 

  setTimeout(() => {
    initSentry()
  }, 1000)

  app.mount("#app");


