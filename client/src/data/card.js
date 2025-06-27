const latestDate = new Date().toISOString();

export const mockData = [
  {
    _id: "666a1f87d45e0a9c1f4e1234",
    title: "Learn JavaScript",
    description: "Start with variables, functions, and ES6 features.",
    content: "JavaScript is the foundation of modern web development. Begin by learning about variables (`let`, `const`, `var`), data types (string, number, boolean, object, array), and basic control flow like `if`, `for`, and `while`. Gradually move into ES6+ features like arrow functions, template literals, destructuring, and spread/rest operators. Understand key concepts such as closures, prototypal inheritance, and the event loop. This knowledge is essential before jumping into libraries like React or frameworks like Node.js.",
    author: "John Doe",
    createdAt: latestDate
  },
  {
    _id: "666a1f87d45e0a9c1f4e1235",
    title: "Build a MERN App",
    description: "Create a full-stack application using MongoDB, Express, React, and Node.js.",
    content: "The MERN stack allows you to build powerful, scalable full-stack web applications. Start by designing your database schema in MongoDB. Use Express to create API routes that interact with the database. Build the frontend using React, managing state and UI components effectively. Connect everything using Axios or Fetch, and learn how to manage environment variables. Finally, implement form handling, error handling, and state management with context or Redux. This hands-on experience is crucial for mastering real-world development.",
    author: "Jane Smith",
    createdAt: latestDate
  },
  {
    _id: "666a1f87d45e0a9c1f4e1236",
    title: "Deploy with Vercel",
    description: "Deploy your frontend easily using Vercel's free hosting.",
    content: "Vercel offers an easy and seamless deployment experience for frontend applications, especially React. Learn how to push your project to GitHub and connect it to Vercel. Understand the build settings and framework detection. Use environment variables securely and set up custom domains. Explore automatic deployment on git push, preview branches, and handling client-side routing. Make sure your app is optimized for performance, and debug common issues like 404s or incorrect base paths.",
    author: "Ali Nguyen",
    createdAt: latestDate
  },
  {
    _id: "666a1f87d45e0a9c1f4e1237",
    title: "Understand Async/Await",
    description: "Learn how to handle asynchronous operations using async/await syntax.",
    content: "JavaScript runs asynchronously by default. `async/await` provides a cleaner way to handle asynchronous logic compared to chaining `.then()` with Promises. Learn how to use `await` with APIs like `fetch`, wrap functions with `async`, and use `try/catch` blocks for error handling. Understand the difference between synchronous and asynchronous code, and how it affects the call stack and execution order. Practice chaining async functions and running multiple operations in parallel using `Promise.all()`.",
    author: "Carlos Ramos",
    createdAt: latestDate
  },
  {
    _id: "666a1f87d45e0a9c1f4e1238",
    title: "Version Control with Git",
    description: "Track your code changes and collaborate with Git and GitHub.",
    content: "Git is an essential tool for any developer. Learn how to initialize a Git repository, track changes with `add`, `commit`, and `push`, and collaborate via GitHub. Understand branching and merging, resolving merge conflicts, and creating pull requests. Use `.gitignore` to prevent unwanted files from being tracked. Explore GitHub features like issues, forks, stars, and GitHub Actions. Version control enables smooth collaboration and project tracking in professional environments.",
    author: "Emma Johnson",
    createdAt: latestDate
  }
];