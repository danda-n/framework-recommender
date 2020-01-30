const frameworks = [
  {
    title: "React",
    subtitle: "A JavaScript library for building user interfaces",
    description_card:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
    description: {
      d_main: "React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However React is only concerned with rendering data to the DOM and so creating React applications usually requires the use of additional libraries for state management, routing, and interaction with an API. Redux, React Router and axios are respective examples of such libraries.",
      d_h: ["Declarative", "Component-Based", "Learn Once, Write Everywhere"],
      d_p: [
        "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.",
        "Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
        "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.",
      ],
    },
    
    
    //   description: "Asd,",
    // description_more_h1: "Declarative",
    // description_more_p1:
    //   "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    // description_more_p11:
    //   "Declarative views make your code more predictable and easier to debug.",
    // description_more_h2: "Component-Based",
    // description_more_p2:
    //   "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
    // description_more_p21:
    //   "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
    // description_more_h3: "Learn Once, Write Everywhere",
    // description_more_p3:
    //   "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",
    // description_more_p31:
    //   "React can also render on the server using Node and power mobile apps using React Native.",


    logo: "",
    advantages: [
      "Update process is optimised and accelerated.",
      "JSX makes components/blocks code readable. It displays how components are plugged or combined with.",
      "React’s data binding establishes conditions for creation dynamic applications.",
      "Prompt rendering. Using comprises methods to minimise number of DOM operations helps to optimise updating process and accelerate it.",
      "Testable. React’s native tools are offered for testing, debugging code.",
      "SEO-friendly.",
      "Up to date. Facebook team supports the library. Advice or code samples can be given by Facebook community.",
      "Using React+ES6/7, application gets high-tech and is suitable for highload systems."
    ],
    disadvantages: [
      "Learning curve. Being not full-featured framework it is requered in-depth knowledge for integration user interface free library into MVC framework.",
      "View-orientedness is one of the cons of ReactJS.",
      "Not using isomorphic approach to exploit application leads to search engines indexing problems.",
      "Lots of developers dislike JSX React’s documentation, manuals are difficult for newcomers’ understanding.",
      "React’s large size library."
    ],
    full_desc: "",
    uses: ""
  },
  {
    title: "Vue.JS",
    description_card:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
      description: {
        d_main: "React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However React is only concerned with rendering data to the DOM and so creating React applications usually requires the use of additional libraries for state management, routing, and interaction with an API. Redux, React Router and axios are respective examples of such libraries.",
        d_h: ["Declarative", "Component-Based", "Learn Once, Write Everywhere"],
        d_p: [
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.",
          "Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
          "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.",
        ],
      },
      logo: "",
    advantages: ["a", "b", "c"],
    disadvantages: ["d", "e", "f"]
  },
  {
    title: "Angular",
    description_card:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
      description: {
        d_main: "React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However React is only concerned with rendering data to the DOM and so creating React applications usually requires the use of additional libraries for state management, routing, and interaction with an API. Redux, React Router and axios are respective examples of such libraries.",
        d_h: ["Declarative", "Component-Based", "Learn Once, Write Everywhere"],
        d_p: [
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.",
          "Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
          "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.",
        ],
      },
      logo: "",
    advantages: ["a", "b", "c"],
    disadvantages: ["d", "e", "f"]
  },
  {
    title: "Ember",
    description_card:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
      description: {
        d_main: "React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However React is only concerned with rendering data to the DOM and so creating React applications usually requires the use of additional libraries for state management, routing, and interaction with an API. Redux, React Router and axios are respective examples of such libraries.",
        d_h: ["Declarative", "Component-Based", "Learn Once, Write Everywhere"],
        d_p: [
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.",
          "Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
          "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.",
        ],
      },
      logo: "",
    advantages: ["a", "b", "c"],
    disadvantages: ["d", "e", "f"]
  },
  {
    title: "Svelte",
    description_card:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
      description: {
        d_main: "React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However React is only concerned with rendering data to the DOM and so creating React applications usually requires the use of additional libraries for state management, routing, and interaction with an API. Redux, React Router and axios are respective examples of such libraries.",
        d_h: ["Declarative", "Component-Based", "Learn Once, Write Everywhere"],
        d_p: [
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.",
          "Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
          "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.",
        ],
      },
      logo: "",
    advantages: ["a", "b", "c"],
    disadvantages: ["d", "e", "f"]
  },
  {
    title: "Knockout",
    description_card:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
      description: {
        d_main: "React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However React is only concerned with rendering data to the DOM and so creating React applications usually requires the use of additional libraries for state management, routing, and interaction with an API. Redux, React Router and axios are respective examples of such libraries.",
        d_h: ["Declarative", "Component-Based", "Learn Once, Write Everywhere"],
        d_p: [
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.",
          "Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
          "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.",
        ],
      },
      logo: "",
    advantages: ["a", "b", "c"],
    disadvantages: ["d", "e", "f"]
  }
];

export default frameworks;
