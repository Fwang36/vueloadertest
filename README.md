
1. npm install

2. Change dsn in Sentry.init() of src/main.js

3. Generate new loader script in your Settings > Projects > {Project Name} > Client Keys (DSN) > Configure > Javascript Loader Script

4. Replace line 6 with loader script in index.html

5. in vite.config.js, edit the org, project to your org.

6. npm run build

7. npm run start