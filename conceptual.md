### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a library in React. It allows you to manage application navigation, which in the context of React, allows for navigating between components within a React application - without the need for the page to reload.

Dynamic Routing - routing is handled dynamically, which means the application can decide which components to show based on the URL, without refreshing the page - the foundation for a single page application.

Link Management - React Router provides components like <Link> and <NaveLink> for creating links rather than  <a> tags. This allows for URL changes without reloading the page.

Parameterized Routing - RR handles routes with parameters dynamically, for example /users/:userId, where the :userId can change based on whatever user id you're referencing.

Nested Routes - RR allows for routes within routes for multiple levels of navigation. For example, you can have a main component that corresponds to a route, and within that component, additional routes that correspond to child components.

Navigation Control - RR allows you to redirect a user after a form submission.

- What is a single page application?
SPAs are the bread and butter and the appeal of React. They allow you to navigate and interact with a web application without having to reload the page. Also, in a SPA, most of the content is loaded once at the beginning, and only data gets updated as users interact with the app.

- What are some differences between client side and server side routing?
Client side routing means that navigation between different parts/components of an application doesn't require a page reload. React Router library is used to manage client-side routing, enabling the app to display different content for different URLs.

- What are two ways of handling redirects with React Router? When would you use each?
1. <Redirect> component - use based on a specific condition directly within your component's render output - for ex, redirecting to a login page if the user is not authenticated.
2. history.push or history.replace - uses history object, and used to add a new entry onto the history stack or replacing the current entry. Used post a redirect after some asynchronous operation, like a form submission or fetching data. 

- What are two different ways to handle page-not-found user experiences using React Router? 
A catch-all route at the bottom of your route definitions. This route will match any URL that hasn't matched with the routes defined above it. Or, the useRouteMatch hook to check if the URL matches a specific pattern.

- How do you grab URL parameters from within a component using React Router?
useParams hook. Parameters are denoted by a colon followed by the param name, ex: /user/:userId. import { useParams }, then const { userId } = useParams(); - this allowd you to extract userId from the URL, which you can then use userId as a variable within your component to fetch data, perform operations or simply display it.

- What is context in React? When would you use it?
Context alleviates prop drilling and allows you to pass data from a 'child' component to a 'great grandchild' component, effectively skipping the component level of 'grandchild'. Designed to share data that can be considered 'global' for a tree of React components, such as athe current authenticated user.

- Describe some differences between class-based components and function components in React.
Class components extend React.Component. Functional components are declared as functions, are simpler. The introduction of hooks was the catalyst for the use of funcational components, as prior to that class components were the only way to use local state and lifecycle methods. Hooks like useState and useEffect could now manage state and side effects in FCs. 

- What are some of the problems that hooks were designed to solve?
Before hooks, reusing logic that involved state between components required wrapping components in such a way that was difficult to understand. Hooks allow for more direct reuse of stateful logic without changing your component hierarchy.
Class components can be difficult to understand, requiring the understanding of 'this' and lifecycle methods - hooks simplify component creation, making the code more readable and maintainable.