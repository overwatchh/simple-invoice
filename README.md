# [Live demo](https://simple-invoice-93279.web.app/) 
# Overview
In short, my submission includes:
- CI/CD flow set up using GitHub Actions. 
- The application is hosted on Firebase Hosting for easy testing and review. However, the POST request to create an invoice is facing CORS policy issues in the production environment. It only works on the local machine.
- Automated tests: Unit tests and e2e tests.
   - To run unit tests: `npm run test`
   - To run e2e tests: `npm run test:e2e`
   - Test coverage can be viewed at [https://simple-invoice-93279.web.app/test-coverage/](https://simple-invoice-93279.web.app/test-coverage/)
# Airchitecture explainations
The application is separated into the following modules, which makes it maintainable and scalable:
- /routers: Defines the routes of the application.
- /types: Defines the general types used in the application.
- /components: Includes the components used in the application. Each component will have the following structure and will be stored in - /components/ComponentName directory:
  - ComponentName.scss: Stylesheet for the component.
  - ComponentName.tsx: Code for the component.
  - ComponentName.config.ts: Configuration belonging to the component, such as an array of available options for a dropdown or a default value for useState.
  - index.ts: Exports the ComponentName from here.
**API calls will not be made in components**, but in containers instead, which will be discussed right below.
- /containers: Has the same folder structure as a component, but the main difference is that the trigger function to make API calls will be invoked here. One or more components will be used here to create a desired UI.
- /layouts: Uses HOCs to define the layout for the application. These HOCs will be used to wrap containers and components.
- /services: Defines API slices using RTK Query, a powerful data fetching and caching tool.
- /styles: Defines general stylesheets such as color variables or mixins.
- /utils: Utility functions will be defined here to use across the app.
# Preview
1. Login screenb <br />
![image](https://user-images.githubusercontent.com/36781077/224722623-c598bccb-434d-4389-a2a2-58f49463c348.png)
2. Create invoice screen
![image](https://user-images.githubusercontent.com/36781077/224723456-9b43d54a-2efe-4fdd-a3af-ca670c4cac50.png)
3. Create invoice screen
![image](https://user-images.githubusercontent.com/36781077/224723599-ac6f9786-472c-4632-a11b-38e2d65f1eb0.png)
