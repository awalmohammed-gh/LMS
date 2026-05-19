import javascript from "./js.png";
import htmlcss from "./htmlcss.png";
import fullstack from "./fullstack.png";
import aiauto from "./aiauto.png";
import nextjs from "./nextjs.png";
import python from "./python.png";
import nodejs from "./nodejs.png";
import appdev from "./app.png";
import frontend from "./frontend.png";

import facebook from "./facebook.png";
import twitter from "./twitter.png";
import linkedIn from "./linkedin.png";
import youtube from "./youtube.png";

export const socialMedia = [
  { id: 1, image: facebook, path: "http://facebook.com" },
  { id: 2, image: twitter, path: "http://twitter.com" },
  { id: 3, image: linkedIn, path: "http://linkedin.com" },
  { id: 4, image: youtube, path: "http://youtube.com" },
];

/**
 * RULE:
 * hasPurchased: false → preview only (limited videos + basic PDFs)
 * hasPurchased: true → full access (all videos + PDFs + resources)
 */

export const courses = [
  {
    _id: "course_001",
    title: "Complete JavaScript Masterclass",
    slug: "complete-javascript-masterclass",
    category: "JavaScript",
    level: "Beginner to Advanced",

    instructor: {
      name: "Mohammed Awal",
      avatar: "/images/instructors/awal.jpg",
      bio: "Full-stack web developer and software engineer with strong experience in JavaScript ecosystems.",
      email: "awal@example.com",
      joined: "2020-01-15",
    },

    thumbnail: [javascript],
    trailerUrl: "https://www.youtube.com/embed/exampleTrailer",

    shortDescription:
      "Master JavaScript from fundamentals to advanced concepts with real-world projects.",

    description:
      "This JavaScript masterclass is a complete roadmap from absolute beginner to advanced developer. You will learn variables, data types, functions, arrays, objects, DOM manipulation, ES6+ features, asynchronous programming, APIs, error handling, and architecture patterns. The course focuses heavily on real-world projects such as calculators, to-do apps, API-based apps, and dynamic dashboards.",

    price: 299.99,
    discountPrice: 199.99,
    currency: "GHS",

    isFeatured: true,
    isPublished: true,
    hasPurchased: false,

    access: {
      previewLimit: 1,
      unlockOnPurchase: true,
    },

    totalDuration: "45 hours",
    totalLessons: 150,
    totalStudents: 8450,

    rating: 4.9,
    reviewsCount: 1520,
    language: "English",

    requirements: [
      "Basic computer literacy",
      "Access to a laptop or desktop",
      "No programming experience required",
    ],

    whatYouWillLearn: [
      "JavaScript fundamentals",
      "DOM manipulation",
      "ES6+ modern features",
      "Async programming and Promises",
      "API integration",
      "Real-world project building",
      "Debugging and testing",
      "Performance optimization",
    ],

    tags: ["JavaScript", "Frontend", "Programming", "Web Development"],

    resources: {
      free: [
        {
          id: "js_free_pdf",
          type: "pdf",
          title: "JavaScript Starter Notes",
          url: "/resources/js-preview.pdf",
          size: "2.5 MB",
        },
        {
          id: "js_free_cheatsheet",
          type: "pdf",
          title: "JavaScript Cheatsheet",
          url: "/resources/js-cheatsheet.pdf",
          size: "1.2 MB",
        },
      ],
      premium: [
        {
          id: "js_full_pdf",
          type: "pdf",
          title: "Complete JavaScript Handbook (500+ pages)",
          url: "/resources/js-full.pdf",
          size: "15 MB",
        },
        {
          id: "js_projects_zip",
          type: "zip",
          title: "JavaScript Projects Source Code (15 projects)",
          url: "/resources/js-projects.zip",
          size: "45 MB",
        },
        {
          id: "js_exercises",
          type: "pdf",
          title: "150+ Coding Exercises with Solutions",
          url: "/resources/js-exercises.pdf",
          size: "8 MB",
        },
      ],
    },

    sections: [
      {
        _id: "sec_1",
        title: "JavaScript Basics",
        lessons: [
          {
            _id: "l1_1",
            title: "Introduction to JavaScript",
            duration: "10:30",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/example1",
              premium: "https://cdn.site.com/js/full/intro.mp4",
            },
            description:
              "Understanding what JavaScript is and how it runs in the browser.",
          },
          {
            _id: "l1_2",
            title: "Variables and Data Types",
            duration: "25:15",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/example2",
              premium: "https://cdn.site.com/js/full/variables.mp4",
            },
            description:
              "Learn about var, let, const, and primitive data types.",
          },
          {
            _id: "l1_3",
            title: "Operators and Expressions",
            duration: "30:00",
            isPreview: false,
            video: {
              free: null,
              premium: "https://cdn.site.com/js/full/operators.mp4",
            },
            description:
              "Arithmetic, comparison, logical, and assignment operators.",
          },
        ],
      },
      {
        _id: "sec_2",
        title: "Control Flow & Functions",
        lessons: [
          {
            _id: "l2_1",
            title: "Conditional Statements",
            duration: "35:20",
            isPreview: false,
            video: {
              free: null,
              premium: "https://cdn.site.com/js/full/conditionals.mp4",
            },
            description: "if, else if, else, and switch statements.",
          },
          {
            _id: "l2_2",
            title: "Loops and Iteration",
            duration: "40:10",
            isPreview: false,
            video: {
              free: null,
              premium: "https://cdn.site.com/js/full/loops.mp4",
            },
            description: "for, while, do-while, forEach, and map.",
          },
        ],
      },
    ],
  },

  {
    _id: "course_002",
    title: "Complete HTML & CSS Masterclass",
    slug: "complete-html-css-masterclass",
    category: "HTML & CSS",
    level: "Beginner to Intermediate",

    description:
      "A complete guide to building modern responsive websites using HTML5 and CSS3. You will learn structure, semantic HTML, Flexbox, Grid, animations, responsive design, and UI best practices.",

    shortDescription: "Build modern responsive websites using HTML and CSS.",

    instructor: {
      name: "Mohammed Awal",
      avatar: "/images/instructors/awal.jpg",
      bio: "Web developer and UI/UX enthusiast with 8+ years of experience.",
      email: "awal@example.com",
      joined: "2020-01-15",
    },

    thumbnail: [htmlcss],
    trailerUrl: "https://www.youtube.com/embed/html-trailer",
    price: 199.99,
    discountPrice: 129.99,
    currency: "GHS",

    isFeatured: true,
    isPublished: true,
    hasPurchased: false,

    access: {
      previewLimit: 2,
      unlockOnPurchase: true,
    },

    totalDuration: "28 hours",
    totalLessons: 95,
    totalStudents: 6230,

    rating: 4.8,
    reviewsCount: 890,
    language: "English",

    requirements: [
      "Basic computer skills",
      "Any text editor (VS Code recommended)",
      "No prior coding experience needed",
    ],

    whatYouWillLearn: [
      "HTML5 semantic structure",
      "CSS3 styling and animations",
      "Flexbox and Grid layouts",
      "Responsive design principles",
      "Building complete websites",
      "CSS Frameworks basics",
      "Cross-browser compatibility",
      "Web accessibility standards",
    ],

    tags: ["HTML", "CSS", "Web Design", "Frontend"],

    resources: {
      free: [
        {
          id: "htmlcss_free",
          type: "pdf",
          title: "HTML & CSS Basics Guide",
          url: "/resources/htmlcss-preview.pdf",
          size: "3 MB",
        },
        {
          id: "htmlcss_cheatsheet",
          type: "pdf",
          title: "HTML Tags & CSS Properties Cheatsheet",
          url: "/resources/htmlcss-cheatsheet.pdf",
          size: "1.8 MB",
        },
      ],
      premium: [
        {
          id: "htmlcss_full",
          type: "pdf",
          title: "HTML & CSS Full Guide (400+ pages)",
          url: "/resources/htmlcss-full.pdf",
          size: "12 MB",
        },
        {
          id: "htmlcss_templates",
          type: "zip",
          title: "10 Responsive Website Templates",
          url: "/resources/htmlcss-templates.zip",
          size: "35 MB",
        },
        {
          id: "htmlcss_exercises",
          type: "pdf",
          title: "50 Practical Exercises",
          url: "/resources/htmlcss-exercises.pdf",
          size: "5 MB",
        },
      ],
    },

    sections: [
      {
        _id: "sec_1",
        title: "HTML Fundamentals",
        lessons: [
          {
            _id: "l1_1",
            title: "Introduction to HTML",
            duration: "12:00",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/html-intro",
              premium: "https://cdn.site.com/html/full/intro.mp4",
            },
            description: "What is HTML and how websites work.",
          },
          {
            _id: "l1_2",
            title: "HTML Document Structure",
            duration: "18:30",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/html-structure",
              premium: "https://cdn.site.com/html/full/structure.mp4",
            },
            description: "DOCTYPE, html, head, and body tags.",
          },
          {
            _id: "l1_3",
            title: "Headings and Paragraphs",
            duration: "15:20",
            isPreview: false,
            video: {
              free: null,
              premium: "https://cdn.site.com/html/full/headings.mp4",
            },
            description: "Using h1-h6 and p tags effectively.",
          },
        ],
      },
      {
        _id: "sec_2",
        title: "CSS Styling",
        lessons: [
          {
            _id: "l2_1",
            title: "Introduction to CSS",
            duration: "20:15",
            isPreview: false,
            video: {
              free: null,
              premium: "https://cdn.site.com/html/full/css-intro.mp4",
            },
            description: "Inline, internal, and external CSS.",
          },
          {
            _id: "l2_2",
            title: "CSS Selectors and Properties",
            duration: "35:40",
            isPreview: false,
            video: {
              free: null,
              premium: "https://cdn.site.com/html/full/selectors.mp4",
            },
            description: "Understanding CSS specificity and inheritance.",
          },
        ],
      },
    ],
  },

  {
    _id: "course_003",
    title: "Frontend Development Masterclass",
    slug: "frontend-development-masterclass",
    category: "Frontend",
    level: "Intermediate",

    description:
      "This course teaches you how to build complete frontend applications using HTML, CSS, JavaScript, and modern UI techniques. You will learn responsive design, component-based structure, and real-world UI building.",

    shortDescription:
      "Build professional frontend applications with modern tools and techniques.",

    instructor: {
      name: "Mohammed Awal",
      avatar: "/images/instructors/awal.jpg",
      bio: "Senior frontend developer specializing in React and Vue.js.",
      email: "awal@example.com",
      joined: "2020-01-15",
    },

    thumbnail: [frontend],
    trailerUrl: "https://www.youtube.com/embed/frontend-trailer",
    price: 299.99,
    discountPrice: 199.99,
    currency: "GHS",

    isFeatured: false,
    isPublished: true,
    hasPurchased: false,

    access: {
      previewLimit: 1,
      unlockOnPurchase: true,
    },

    totalDuration: "35 hours",
    totalLessons: 120,
    totalStudents: 4320,

    rating: 4.7,
    reviewsCount: 654,
    language: "English",

    requirements: [
      "Basic HTML, CSS, and JavaScript knowledge",
      "Computer with internet connection",
      "Willingness to learn",
    ],

    whatYouWillLearn: [
      "Modern frontend architecture",
      "Responsive design patterns",
      "State management",
      "API integration",
      "Performance optimization",
      "Build tools and bundlers",
      "Testing frontend applications",
      "Deployment strategies",
    ],

    tags: ["Frontend", "Web Development", "UI/UX"],

    resources: {
      free: [
        {
          id: "frontend_free",
          type: "pdf",
          title: "Frontend Development Basics",
          url: "/resources/frontend-preview.pdf",
          size: "2 MB",
        },
      ],
      premium: [
        {
          id: "frontend_full",
          type: "pdf",
          title: "Frontend Complete Notes",
          url: "/resources/frontend-full.pdf",
          size: "18 MB",
        },
        {
          id: "frontend_projects",
          type: "zip",
          title: "5 Complete Frontend Projects",
          url: "/resources/frontend-projects.zip",
          size: "50 MB",
        },
      ],
    },

    sections: [
      {
        _id: "sec_1",
        title: "Frontend Fundamentals",
        lessons: [
          {
            _id: "l1_1",
            title: "Course Overview",
            duration: "08:00",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/frontend-overview",
              premium: "https://cdn.site.com/frontend/full/overview.mp4",
            },
            description: "What you'll learn in this course.",
          },
          {
            _id: "l1_2",
            title: "Setting Up Development Environment",
            duration: "22:30",
            isPreview: false,
            video: {
              free: null,
              premium: "https://cdn.site.com/frontend/full/setup.mp4",
            },
            description: "Installing VS Code, Node.js, and Git.",
          },
        ],
      },
    ],
  },

  {
    _id: "course_004",
    title: "Backend Development with Node.js",
    slug: "backend-development-nodejs",
    category: "Backend",
    level: "Intermediate to Advanced",

    description:
      "Learn backend development using Node.js and Express. Build REST APIs, authentication systems, database integration, file uploads, and deploy production-ready applications.",

    shortDescription: "Master backend development with Node.js and Express.",

    instructor: {
      name: "Mohammed Awal",
      avatar: "/images/instructors/awal.jpg",
      bio: "Backend architect and Node.js expert.",
      email: "awal@example.com",
      joined: "2020-01-15",
    },

    thumbnail: [nodejs],
    trailerUrl: "https://www.youtube.com/embed/nodejs-trailer",
    price: 349.99,
    discountPrice: 229.99,
    currency: "GHS",

    isFeatured: true,
    isPublished: true,
    hasPurchased: false,

    access: {
      previewLimit: 1,
      unlockOnPurchase: true,
    },

    totalDuration: "40 hours",
    totalLessons: 135,
    totalStudents: 3780,

    rating: 4.9,
    reviewsCount: 1120,
    language: "English",

    requirements: [
      "Basic JavaScript knowledge",
      "Understanding of asynchronous programming",
      "Computer with 8GB RAM minimum",
    ],

    whatYouWillLearn: [
      "Node.js fundamentals",
      "Express.js framework",
      "REST API development",
      "Database integration (MongoDB, PostgreSQL)",
      "Authentication & Authorization (JWT)",
      "File uploads and processing",
      "Error handling and logging",
      "Deployment and DevOps basics",
    ],

    tags: ["Node.js", "Backend", "API", "Express"],

    resources: {
      free: [
        {
          id: "nodejs_free",
          type: "pdf",
          title: "Node.js Quick Start Guide",
          url: "/resources/nodejs-preview.pdf",
          size: "2.5 MB",
        },
      ],
      premium: [
        {
          id: "nodejs_full",
          type: "pdf",
          title: "Complete Node.js Handbook",
          url: "/resources/nodejs-full.pdf",
          size: "20 MB",
        },
        {
          id: "nodejs_projects",
          type: "zip",
          title: "8 Backend Projects Source Code",
          url: "/resources/nodejs-projects.zip",
          size: "60 MB",
        },
      ],
    },

    sections: [
      {
        _id: "sec_1",
        title: "Node.js Basics",
        lessons: [
          {
            _id: "l1_1",
            title: "What is Node.js?",
            duration: "15:00",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/nodejs-intro",
              premium: "https://cdn.site.com/nodejs/full/intro.mp4",
            },
            description: "Understanding Node.js and its ecosystem.",
          },
          {
            _id: "l1_2",
            title: "NPM and Package Management",
            duration: "28:30",
            isPreview: false,
            video: {
              free: null,
              premium: "https://cdn.site.com/nodejs/full/npm.mp4",
            },
            description: "Using NPM, package.json, and dependencies.",
          },
        ],
      },
    ],
  },

  {
    _id: "course_005",
    title: "Python Programming Masterclass",
    slug: "python-programming-masterclass",
    category: "Python",
    level: "Beginner to Advanced",

    description:
      "Learn Python from basics to advanced topics including OOP, file handling, automation, scripting, data analysis, and real-world applications.",

    shortDescription:
      "Complete Python course for beginners to advanced developers.",

    instructor: {
      name: "Mohammed Awal",
      avatar: "/images/instructors/awal.jpg",
      bio: "Python developer and data science enthusiast.",
      email: "awal@example.com",
      joined: "2020-01-15",
    },

    thumbnail: [python],
    trailerUrl: "https://www.youtube.com/embed/python-trailer",
    price: 279.99,
    discountPrice: 179.99,
    currency: "GHS",

    isFeatured: false,
    isPublished: true,
    hasPurchased: false,

    access: {
      previewLimit: 2,
      unlockOnPurchase: true,
    },

    totalDuration: "50 hours",
    totalLessons: 165,
    totalStudents: 12500,

    rating: 4.8,
    reviewsCount: 2100,
    language: "English",

    requirements: [
      "No prior programming experience needed",
      "Computer with Python installation capability",
      "Basic math knowledge",
    ],

    whatYouWillLearn: [
      "Python syntax and basics",
      "Data structures and algorithms",
      "Object-oriented programming",
      "File handling and exceptions",
      "Modules and packages",
      "Web scraping",
      "Automation scripts",
      "Introduction to data science",
    ],

    tags: ["Python", "Programming", "Automation", "Data Science"],

    resources: {
      free: [
        {
          id: "python_free",
          type: "pdf",
          title: "Python Basics Guide",
          url: "/resources/python-preview.pdf",
          size: "3 MB",
        },
      ],
      premium: [
        {
          id: "python_full",
          type: "pdf",
          title: "Complete Python Handbook (600+ pages)",
          url: "/resources/python-full.pdf",
          size: "25 MB",
        },
        {
          id: "python_projects",
          type: "zip",
          title: "20 Python Projects Source Code",
          url: "/resources/python-projects.zip",
          size: "40 MB",
        },
        {
          id: "python_exercises",
          type: "pdf",
          title: "200+ Coding Challenges",
          url: "/resources/python-exercises.pdf",
          size: "10 MB",
        },
      ],
    },

    sections: [
      {
        _id: "sec_1",
        title: "Python Fundamentals",
        lessons: [
          {
            _id: "l1_1",
            title: "Installing Python and Setup",
            duration: "12:00",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/python-setup",
              premium: "https://cdn.site.com/python/full/setup.mp4",
            },
            description: "Installing Python and setting up IDE.",
          },
          {
            _id: "l1_2",
            title: "First Python Program",
            duration: "10:30",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/python-first",
              premium: "https://cdn.site.com/python/full/first.mp4",
            },
            description: "Writing and running your first Python script.",
          },
        ],
      },
    ],
  },

  {
    _id: "course_006",
    title: "Full Stack Web Development Bootcamp",
    slug: "fullstack-web-development-bootcamp",
    category: "Full Stack",
    level: "All Levels",

    description:
      "Become a full stack developer by mastering frontend and backend technologies including React, Node.js, Express, MongoDB, and deployment strategies. Build real-world projects from scratch.",

    shortDescription:
      "Complete full stack bootcamp - from zero to job-ready developer.",

    instructor: {
      name: "Mohammed Awal",
      avatar: "/images/instructors/awal.jpg",
      bio: "Full stack developer with 10+ years of industry experience.",
      email: "awal@example.com",
      joined: "2020-01-15",
    },

    thumbnail: [fullstack],
    trailerUrl: "https://www.youtube.com/embed/fullstack-trailer",
    price: 499.99,
    discountPrice: 349.99,
    currency: "GHS",

    isFeatured: true,
    isPublished: true,
    hasPurchased: false,

    access: {
      previewLimit: 3,
      unlockOnPurchase: true,
    },

    totalDuration: "75 hours",
    totalLessons: 250,
    totalStudents: 15800,

    rating: 4.9,
    reviewsCount: 3250,
    language: "English",

    requirements: [
      "Basic computer skills",
      "No prior coding experience required",
      "Dedication to learn full stack development",
    ],

    whatYouWillLearn: [
      "HTML, CSS, and JavaScript fundamentals",
      "React.js for frontend",
      "Node.js and Express for backend",
      "MongoDB database design",
      "RESTful API development",
      "Authentication and security",
      "Deployment and hosting",
      "Git and version control",
      "Agile development practices",
      "Building 5+ full stack projects",
    ],

    tags: ["Full Stack", "MERN", "Web Development", "Bootcamp"],

    resources: {
      free: [
        {
          id: "fullstack_free",
          type: "pdf",
          title: "Full Stack Roadmap",
          url: "/resources/fullstack-preview.pdf",
          size: "4 MB",
        },
      ],
      premium: [
        {
          id: "fullstack_full",
          type: "pdf",
          title: "Complete Full Stack Handbook",
          url: "/resources/fullstack-full.pdf",
          size: "35 MB",
        },
        {
          id: "fullstack_projects",
          type: "zip",
          title: "10 Full Stack Projects Source Code",
          url: "/resources/fullstack-projects.zip",
          size: "100 MB",
        },
        {
          id: "fullstack_interview",
          type: "pdf",
          title: "Full Stack Interview Preparation Guide",
          url: "/resources/fullstack-interview.pdf",
          size: "8 MB",
        },
      ],
    },

    sections: [
      {
        _id: "sec_1",
        title: "Course Introduction",
        lessons: [
          {
            _id: "l1_1",
            title: "Welcome to the Bootcamp",
            duration: "15:00",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/bootcamp-welcome",
              premium: "https://cdn.site.com/fullstack/full/welcome.mp4",
            },
            description: "Course overview and what you'll achieve.",
          },
        ],
      },
    ],
  },

  {
    _id: "course_007",
    title: "Next.js Complete Guide",
    slug: "nextjs-complete-guide",
    category: "React/Next.js",
    level: "Intermediate",

    description:
      "Master Next.js for modern full stack applications including SSR, SSG, API routes, authentication, file-based routing, and deployment. Build production-ready React applications.",

    shortDescription: "Build production-ready React applications with Next.js.",

    instructor: {
      name: "Mohammed Awal",
      avatar: "/images/instructors/awal.jpg",
      bio: "React and Next.js specialist.",
      email: "awal@example.com",
      joined: "2020-01-15",
    },

    thumbnail: [nextjs],
    trailerUrl: "https://www.youtube.com/embed/nextjs-trailer",
    price: 349.99,
    discountPrice: 249.99,
    currency: "GHS",

    isFeatured: false,
    isPublished: true,
    hasPurchased: false,

    access: {
      previewLimit: 1,
      unlockOnPurchase: true,
    },

    totalDuration: "32 hours",
    totalLessons: 110,
    totalStudents: 6540,

    rating: 4.8,
    reviewsCount: 980,
    language: "English",

    requirements: [
      "Basic React knowledge",
      "JavaScript ES6+ understanding",
      "Computer with Node.js installed",
    ],

    whatYouWillLearn: [
      "Next.js fundamentals",
      "File-based routing",
      "SSR and SSG",
      "API routes",
      "Authentication with NextAuth",
      "Database integration",
      "Image optimization",
      "Deployment on Vercel",
      "Performance optimization",
      "Building e-commerce sites",
    ],

    tags: ["Next.js", "React", "SSR", "Full Stack"],

    resources: [
      {
        free: [
          {
            id: "nextjs_free",
            type: "pdf",
            title: "Next.js Quick Start",
            url: "/resources/nextjs-preview.pdf",
            size: "2 MB",
          },
        ],
        premium: [
          {
            id: "nextjs_full",
            type: "pdf",
            access: false,
            title: "Complete Next.js Guide",
            url: "/resources/nextjs-full.pdf",
            size: "15 MB",
          },
          {
            id: "nextjs_projects",
            type: "zip",
            access: false,
            title: "5 Next.js Projects",
            url: "/resources/nextjs-projects.zip",
            size: "45 MB",
          },
        ],
      },
    ],

    sections: [
      {
        _id: "sec_1",
        title: "Getting Started",
        lessons: [
          {
            _id: "l1_1",
            title: "What is Next.js?",
            duration: "12:00",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/nextjs-intro",
              premium: "https://cdn.site.com/nextjs/full/intro.mp4",
            },
            description: "Understanding Next.js and its benefits.",
          },
        ],
      },
    ],
  },

  {
    _id: "course_008",
    title: "Mobile App Development with React Native",
    slug: "mobile-app-development-react-native",
    category: "Mobile Development",
    level: "Intermediate",

    description:
      "Build cross-platform mobile applications for Android and iOS using React Native with real-world projects, API integration, state management, and app store deployment.",

    shortDescription:
      "Create native mobile apps for iOS and Android with React Native.",

    instructor: {
      name: "Mohammed Awal",
      avatar: "/images/instructors/awal.jpg",
      bio: "Mobile developer with experience in React Native and Flutter.",
      email: "awal@example.com",
      joined: "2020-01-15",
    },

    thumbnail: [appdev],
    trailerUrl: "https://www.youtube.com/embed/reactnative-trailer",
    price: 399.99,
    discountPrice: 279.99,
    currency: "GHS",

    isFeatured: false,
    isPublished: true,
    hasPurchased: false,

    access: {
      previewLimit: 1,
      unlockOnPurchase: true,
    },

    totalDuration: "38 hours",
    totalLessons: 125,
    totalStudents: 4890,

    rating: 4.7,
    reviewsCount: 745,
    language: "English",

    requirements: [
      "Basic React knowledge",
      "JavaScript fundamentals",
      "Mac for iOS development (optional)",
    ],

    whatYouWillLearn: [
      "React Native fundamentals",
      "Navigation and routing",
      "State management (Redux)",
      "API integration",
      "Native device features",
      "Push notifications",
      "App store deployment",
      "Performance optimization",
      "Testing mobile apps",
      "Building 5+ mobile apps",
    ],

    tags: ["React Native", "Mobile", "iOS", "Android"],

    resources: {
      free: [
        {
          id: "rn_free",
          type: "pdf",
          title: "React Native Basics",
          url: "/resources/rn-preview.pdf",
          size: "3 MB",
        },
      ],
      premium: [
        {
          id: "rn_full",
          type: "pdf",
          title: "Complete React Native Guide",
          url: "/resources/rn-full.pdf",
          size: "22 MB",
        },
        {
          id: "rn_projects",
          type: "zip",
          title: "8 Mobile App Source Code",
          url: "/resources/rn-projects.zip",
          size: "70 MB",
        },
      ],
    },

    sections: [
      {
        _id: "sec_1",
        title: "React Native Fundamentals",
        lessons: [
          {
            _id: "l1_1",
            title: "Setting Up React Native",
            duration: "25:00",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/rn-setup",
              premium: "https://cdn.site.com/rn/full/setup.mp4",
            },
            description: "Installing React Native and dependencies.",
          },
        ],
      },
    ],
  },

  {
    _id: "course_009",
    title: "AI Automation Masterclass",
    slug: "ai-automation-masterclass",
    category: "AI & Automation",
    level: "Intermediate to Advanced",

    description:
      "Learn AI automation, workflow design, API integration, and how to build intelligent systems using modern AI tools and APIs. Master OpenAI, LangChain, and automation platforms.",

    shortDescription:
      "Master AI tools and build intelligent automation systems.",

    instructor: {
      name: "Mohammed Awal",
      avatar: "/images/instructors/awal.jpg",
      bio: "AI engineer and automation specialist.",
      email: "awal@example.com",
      joined: "2020-01-15",
    },

    thumbnail: [aiauto],
    trailerUrl: "https://www.youtube.com/embed/ai-trailer",
    price: 429.99,
    discountPrice: 299.99,
    currency: "GHS",

    isFeatured: true,
    isPublished: true,
    hasPurchased: false,

    access: {
      previewLimit: 1,
      unlockOnPurchase: true,
    },

    totalDuration: "42 hours",
    totalLessons: 140,
    totalStudents: 3240,

    rating: 4.9,
    reviewsCount: 890,
    language: "English",

    requirements: [
      "Basic programming knowledge",
      "Interest in AI and automation",
      "Python basics recommended",
    ],

    whatYouWillLearn: [
      "AI fundamentals and concepts",
      "OpenAI API integration",
      "Prompt engineering",
      "LangChain framework",
      "Building chatbots",
      "Workflow automation",
      "AI agent development",
      "RAG systems",
      "Deploying AI applications",
      "Real-world AI projects",
    ],

    tags: ["AI", "Automation", "OpenAI", "Machine Learning"],

    resources: {
      free: [
        {
          id: "ai_free",
          type: "pdf",
          title: "AI Automation Basics",
          url: "/resources/ai-preview.pdf",
          size: "3.5 MB",
        },
      ],
      premium: [
        {
          id: "ai_full",
          type: "pdf",
          title: "Complete AI Automation Handbook",
          url: "/resources/ai-full.pdf",
          size: "28 MB",
        },
        {
          id: "ai_projects",
          type: "zip",
          title: "10 AI Automation Projects",
          url: "/resources/ai-projects.zip",
          size: "55 MB",
        },
        {
          id: "ai_prompts",
          type: "pdf",
          title: "500+ Prompt Engineering Guide",
          url: "/resources/ai-prompts.pdf",
          size: "12 MB",
        },
      ],
    },

    sections: [
      {
        _id: "sec_1",
        title: "AI Fundamentals",
        lessons: [
          {
            _id: "l1_1",
            title: "Introduction to AI Automation",
            duration: "20:00",
            isPreview: true,
            video: {
              free: "https://www.youtube.com/embed/ai-intro",
              premium: "https://cdn.site.com/ai/full/intro.mp4",
            },
            description: "Understanding AI and its automation capabilities.",
          },
        ],
      },
    ],
  },
];
