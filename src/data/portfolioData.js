/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION (Single Source of Truth)
 * ============================================================================
 * You can easily update your personal details, project URLs, and social links
 * here without having to modify any UI components.
 *
 * All placeholder values are clearly marked with comments.
 */

export const personalInfo = {
  // Replace with your actual name
  name: "N. Gamini Prasad",
  firstName: "Gamini",
  lastName: "Prasad",
  
  // Professional titles & credentials
  role: "Full Stack Developer",
  degree: "B.Tech Computer Science and Engineering (2024)",
  experienceLevel: "Fresher / 0–2 Years Experience",
  
  // Location & availability
  location: "Bengaluru, India",
  workPreference: "Bengaluru / Remote / Hybrid",
  availability: "Available for Immediate Joining",

  // Profile Image (Place your photo in 'public/profile.jpg' or provide an external image URL)
  profileImage: "/Myself.jpeg",

  // Target roles for recruiter matching
  targetRoles: [
    "Java Developer",
    "Java Backend Developer",
    "Spring Boot Developer",
    "Python Developer",
    "Django Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Associate Software Engineer (ASE)",
    "Graduate Engineer Trainee (GET)",
    "Software Engineer Trainee",
    "Trainee Software Engineer"
  ],

  // Professional summaries
  headline: "B.Tech CSE Graduate | Java & Python Full Stack Developer",
  tagline: "Building scalable backend systems and modern web applications with Java, Spring Boot, Python, Django, React, and SQL.",
  shortBio: "2024 B.Tech Computer Science graduate and software engineer fresher with strong foundations in Data Structures, Object-Oriented Design, and Full-Stack Engineering. Specializing in high-performance backend APIs using Spring Boot and Django, clean relational database design with PostgreSQL/MySQL, and modern frontend interfaces with React.",
  
  // Contact & Social Links (Replace with your actual URLs)
  email: "gamanin79@example.com", // REPLACE WITH YOUR EMAIL
  //phone: "+91 XXXXX XXXXX", // OPTIONAL: REPLACE WITH YOUR PHONE
  github: "https://github.com/NGamaniprasad", // REPLACE WITH YOUR GITHUB PROFILE URL
  linkedin: "https://www.linkedin.com/in/n-gamini-prasad-b33995274/", // REPLACE WITH YOUR LINKEDIN PROFILE URL
  resumeUrl: "/N_Gamini_Prasad_Full_Stack__Resume.pdf", // REPLACE OR PLACE YOUR RESUME AS 'public/resume.pdf'
  
  // Quick engineering highlights for Hero
  highlights: [
    { label: "Graduation Year", value: "2024" },
    { label: "Education", value: "B.Tech CSE" },
    { label: "Core Stack", value: "Java & Python" },
    { label: "Location", value: "Bengaluru/Remote/Hybrid" }
  ]
};

export const skillsData = {
  languages: [
    { name: "Java", level: "Core Java, OOP, Collections, Streams, Multithreading", badge: "Java 8/21", icon: "Code" },
    { name: "Python", level: "OOP, Scripting, Data Structures, Backend", badge: "Python 3.x", icon: "Code" },
    { name: "JavaScript", level: "ES6+, Async/Await, DOM, Modern Web APIs", badge: "ES6+", icon: "Code" },
    { name: "SQL", level: "Complex Queries, Joins, Indexing, Schema Design", badge: "ANSI SQL", icon: "Database" }
  ],
  backend: [
    { name: "Spring Boot", level: "REST APIs, MVC, Microservices, Dependency Injection", badge: "Spring Boot 3.x", icon: "Server" },
    { name: "Spring Framework", level: "IoC Container, Spring Core, Spring Security", badge: "Enterprise", icon: "Layers" },
    { name: "Hibernate & Spring Data JPA", level: "Entity Mapping, Transactions, JPQL, Spring Data JPA", badge: "ORM", icon: "Database" },
    { name: "Django", level: "MTV Architecture, ORM, Admin, Authentication", badge: "Framework", icon: "Server" },
    { name: "Django REST Framework", level: "Serializers, ViewSets, API Routing, Permissions", badge: "REST APIs", icon: "Share2" },
    { name: "REST APIs", level: "Clean API Design, HTTP Status Codes, Error Handling", badge: "Architecture", icon: "Globe" },
    { name: "JWT Authentication", level: "Stateless Security, Role-Based Access Control (RBAC)", badge: "Security", icon: "Shield" }
  ],
  frontend: [
    { name: "React.js", level: "Functional Components, Hooks, State Management, Router", badge: "SPA", icon: "Layout" },
    { name: "Vite", level: "Fast Build Tooling, ESM Development", badge: "Build Tool", icon: "Zap" },
    { name: "HTML5", level: "Semantic Markup, Accessibility (a11y), SEO Best Practices", badge: "Markup", icon: "FileText" },
    { name: "CSS3", level: "Flexbox, CSS Grid, Custom Properties, Responsive Layouts", badge: "Styling", icon: "Palette" },
    { name: "JavaScript (Frontend)", level: "Dynamic UI, Event Handling, Fetch/Axios API Integration", badge: "Client-side", icon: "Code" }
  ],
  database: [
    { name: "PostgreSQL", level: "Relational Modeling, Foreign Keys, Indexing, Constraints", badge: "RDBMS", icon: "Database" },
    { name: "MySQL", level: "Database Design, CRUD Optimization, Triggers & Views", badge: "RDBMS", icon: "Database" }
  ],
  tools: [
    { name: "Git", level: "Version Control, Branching Strategy, Merge/Rebase", badge: "VCS", icon: "GitBranch" },
    { name: "GitHub", level: "Repository Management, Pull Requests, Code Reviews", badge: "Collaboration", icon: "Github" },
    { name: "Maven", level: "Dependency Management, Project Build & Packaging", badge: "Build Tool", icon: "Box" },
    { name: "Postman", level: "API Testing, Request Collections, Environment Variables", badge: "API Testing", icon: "Send" },
    { name: "Swagger / OpenAPI", level: "API Documentation, Contract Testing, Endpoint Schemas", badge: "Docs", icon: "BookOpen" },
    { name: "IntelliJ IDEA & VS Code", level: "IDE Debugging, Profiling, Extension Ecosystems", badge: "Tools", icon: "Terminal" }
  ]
};

export const featuredProjects = [
  {
    id: "fintrack",
    title: "FINTRACK — Personal Finance Management Application",
    subtitle: "Full-Stack Financial Management & Budgeting System",
    category: "Full Stack (Java & React)",
    badge: "Featured Full Stack Project",

    problemSolved:
      "Individuals struggle with tracking daily multi-category expenses, managing monthly budgets, and transparently splitting shared expenses with family or roommates without cumbersome spreadsheets.",

    description:
      "A full-stack personal finance application engineered with Java Spring Boot and React. Enables users to securely manage incomes, track categorized expenses, set budget limits, and manage shared expenses through a centralized financial dashboard.",

    techStack: [
      "Java 21",
      "Spring Boot 4.x",
      "MySQL",
      "Spring Data JPA",
      "Hibernate",
      "Spring Security",
      "JWT",
      "React.js",
      "Vite",
      "RESTful APIs"
    ],

    features: [
      {
        title: "Secure Authentication & Profile",
        desc:
          "JWT-based stateless authentication with BCrypt password hashing, token validation, and role-based access control."
      },
      {
        title: "Income & Expense Tracking",
        desc:
          "Complete CRUD management for income and categorized expenses with transaction data and date-based filtering."
      },
      {
        title: "Budget Management & Alerts",
        desc:
          "Users can configure monthly budget limits and monitor spending progress against defined category budgets."
      },
      {
        title: "Shared Expenses & Split Calculation",
        desc:
          "Collaborative expense management allowing users to create shared expenses and calculate individual balances."
      },
      {
        title: "Financial Dashboard & Analytics",
        desc:
          "Dashboard providing financial summaries, cash-flow information, monthly trends, and spending insights."
      }
    ],

    engineeringHighlights: [
      "Engineered a clean multi-layer backend architecture using Controller → Service → Repository with DTO-based API responses.",
      "Implemented Spring Data JPA repositories with relational constraints and PostgreSQL persistence.",
      "Built a GlobalExceptionHandler using @ControllerAdvice for standardized REST API error handling.",
      "Secured REST endpoints using Spring Security with stateless JWT authentication and role-based authorization.",
      "Developed a responsive React frontend with modular components, protected routes, and JWT authentication state management."
    ],

    architecture: {
      client:
        "React.js + Vite frontend with modular UI components, custom Fetch-based API integration, protected routes, and JWT authentication state.",

      server:
        "Spring Boot 4.x REST API using Spring Security, DTO validation, Service-layer business logic, Spring Data JPA, and Hibernate.",

      database:
        "MySQLrelational database with foreign keys, constraints, and JPA entity mappings."
    },

    githubUrl:
      "https://github.com/NGamaniprasad/FinTrack_Springboot_React",

    liveUrl: null,

    isFeatured: true
  },

  {
    id: "ipl-cricket-manager",
    title: "IPL / Cricket Tournament Management System",
    subtitle: "Dynamic Tournament Scheduling & Live Statistics Platform",
    category: "Full Stack (Python Django & React)",
    badge: "Full Stack Web Application",

    problemSolved:
      "Managing cricket leagues and tournament fixtures manually can lead to scheduling conflicts, difficult roster management, and delayed scoreboard and standings updates.",

    description:
      "A full-stack cricket tournament management platform built with Django REST Framework and React. Provides tournament management, fixture scheduling, team and player records, scorecard management, and automated tournament standings.",

    techStack: [
      "Python 3.x",
      "Django",
      "Django REST Framework",
      "React.js",
      "MySQL",
      "REST APIs",
      "JavaScript",
      "CSS3"
    ],

    features: [
      {
        title: "Tournament & Fixture Scheduling",
        desc:
          "Tournament management with fixture generation and match scheduling for cricket competitions."
      },
      {
        title: "Team & Player Management",
        desc:
          "Maintains team rosters, player profiles, and cricket-related player information."
      },
      {
        title: "Live Scorecard",
        desc:
          "Dynamic scorecard functionality for recording match innings, runs, wickets, overs, and match statistics."
      },
      {
        title: "Tournament Standings",
        desc:
          "Automatically calculates tournament standings using match results, points, wins, losses, and Net Run Rate."
      }
    ],

    engineeringHighlights: [
      "Modeled tournament, team, player, match, innings, and scorecard relationships using Django ORM.",
      "Created RESTful APIs using Django REST Framework serializers, ViewSets, and API routing.",
      "Implemented backend validation to maintain match and tournament data integrity.",
      "Developed interactive React pages for fixtures, scorecards, teams, players, and tournament standings.",
      "Implemented frontend API integration and state synchronization for tournament data."
    ],

    architecture: {
      client:
        "React SPA with component-based tournament pages, scorecards, standings, fixtures, and team/player interfaces.",

      server:
        "Django + Django REST Framework backend providing REST APIs, serializers, validation, permissions, and ORM-based business logic.",

      database:
        "Relational database using Django ORM for tournament, match, team, player, innings, and scorecard relationships."
    },

    githubUrl:
      "https://github.com/NGamaniprasad/Django_React_IPL",

    liveUrl: null,

    isFeatured: true
  },

  {
    id: "employee-management-system",
    title: "Employee Management System (EMS)",
    subtitle: "Employee, Department & Leave Administration Platform",
    category: "Full Stack (Django & React)",
    badge: "Enterprise CRUD System",

    problemSolved:
      "Organizations need a centralized system to manage employee records, departments, leave requests, and employee information without relying on fragmented manual processes.",

    description:
      "A full-stack Employee Management System built using Django REST Framework and React. Provides centralized employee management, department organization, leave workflows, employee search, and administrative CRUD operations.",

    techStack: [
      "Python",
      "Django",
      "Django REST Framework",
      "React.js",
      "MySQL",
      "JWT Authentication",
      "REST APIs",
      "CSS3"
    ],

    features: [
      {
        title: "Employee Directory & Profiles",
        desc:
          "Centralized employee records containing employee information, designation, department, and employment details."
      },
      {
        title: "Department & Role Management",
        desc:
          "Organizes employees by departments and maintains structured organizational relationships."
      },
      {
        title: "Leave Management",
        desc:
          "Employees can submit leave requests while authorized users can review and manage leave status."
      },
      {
        title: "Employee Search & Filtering",
        desc:
          "Search and filter employees based on attributes such as name, employee ID, department, designation, and status."
      },
      {
        title: "Administrative Management",
        desc:
          "Administrative users can manage employee records and perform CRUD operations through the dashboard."
      }
    ],

    engineeringHighlights: [
      "Constructed REST APIs using Django REST Framework GenericViews and ViewSets.",
      "Implemented authentication and role-based permissions for administrative and standard users.",
      "Designed normalized relational models with foreign-key relationships and database integrity constraints.",
      "Developed a responsive React dashboard with CRUD operations, search, filtering, forms, and client-side validation.",
      "Integrated frontend React components with Django REST APIs for asynchronous employee management workflows."
    ],

    architecture: {
      client:
        "React dashboard with asynchronous CRUD operations, search and filtering, reusable components, and state management.",

      server:
        "Django REST Framework backend using serializers, API views, permissions, authentication, and ORM-based data access.",

      database:
        "Relational database with employee, department, leave, and related entity relationships."
    },

    githubUrl:
      "https://github.com/NGamaniprasad/DJANGO_REACT_EMS",

    liveUrl: null,

    isFeatured: true
  },

  {
    id: "utilityhub",
    title: "UtilityHub — Online Utility & Calculator Platform",
    subtitle: "Full-Stack Utility Tools & Role-Based Administration Platform",
    category: "Full Stack (Java Spring Boot & React)",
    badge: "Featured Full Stack Project",

    problemSolved:
      "Users often need quick utility calculations without installing separate applications, while administrators need centralized control over users and the utility tools available on the platform.",

    description:
      "A full-stack utility platform built with Spring Boot and React that provides authenticated users with a centralized dashboard for accessing active utility tools. The system includes JWT authentication, role-based authorization, user profile management, administrative user and tool management, and database-driven dynamic tool availability.",

    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "JWT Authentication",
      "Jakarta Validation",
      "React.js",
      "React Router",
      "JavaScript",
      "Fetch API",
      "REST APIs"
    ],

    features: [
      {
        title: "JWT Authentication & User Management",
        desc:
          "Secure user registration and login with JWT authentication, profile management, password changes, and protected user routes."
      },
      {
        title: "Role-Based Access Control",
        desc:
          "Supports USER, ADMIN, and SUPER_ADMIN roles with different authorization levels for users, tools, and administrator management."
      },
      {
        title: "Dynamic Utility Tool Management",
        desc:
          "Utility tools are stored in the database with active and inactive states, allowing administrators to add, edit, activate, deactivate, and delete tools."
      },
      {
        title: "Utility Calculator Suite",
        desc:
          "Provides practical utilities including Number to Words, EMI Calculator, Age Calculator, Percentage Calculator, and Unit Converter."
      },
      {
        title: "Admin & Super Admin Management",
        desc:
          "Protected administrative dashboards provide user, tool, and administrator management functionality."
      }
    ],

    engineeringHighlights: [
      "Designed a layered Spring Boot backend with Controller, DTO, Entity, Repository, Service, Security, and Config components.",
      "Implemented stateless JWT authentication with Spring Security, BCrypt password hashing, CORS configuration, and role-based authorization.",
      "Built database-driven dynamic tool management where only active tools are returned to authenticated users.",
      "Created REST APIs for user, administrator, and utility-tool workflows with protected administrative endpoints.",
      "Developed a React SPA using React Router and Fetch API with separate user, admin, and utility-tool workflows."
    ],

    architecture: {
      client:
        "React.js SPA with React Router, modular components, protected routes, user/admin pages, utility tools, and Fetch API integration.",

      server:
        "Spring Boot REST API using Spring Security, JWT authentication, DTO validation, Service-layer business logic, and role-based authorization.",

      database:
        "Relational database persistence using Spring Data JPA, Hibernate, entity relationships, and database-backed utility tool management."
    },

    githubUrl:
      "https://github.com/NGamaniprasad/Utility_HUB_SpringBoot_React",

    liveUrl: null,

    isFeatured: true
  },

  {
    id: "learning-portal",
    title: "Learning Portal",
    subtitle: "Online Course Learning, Attendance & Certification Platform",
    category: "Full Stack (Express.js & MySQL)",
    badge: "Full Stack Web Application",

    problemSolved:
      "Learners need a centralized platform to select courses, access structured modules, monitor attendance and learning progress, and receive certification after completing a course.",

    description:
      "A web-based learning platform that allows users to create accounts, select courses, learn structured modules, track attendance, monitor course progress, and receive a course completion certificate.",

    techStack: [
      "JavaScript",
      "Express.js",
      "HTML",
      "CSS",
      "MySQL",
      
    ],

    features: [
      {
        title: "User Authentication",
        desc:
          "User signup and login functionality for accessing the learning portal."
      },
      {
        title: "Course Selection",
        desc:
          "Users can browse and select available courses including Python Full Stack, Java Full Stack, MERN, AI & Machine Learning, and Web Development."
      },
      {
        title: "Structured Course Modules",
        desc:
          "Courses are organized into introduction, basic, intermediate, advanced, practical projects, assignments, assessments, and final completion stages."
      },
      {
        title: "Attendance & Progress Tracking",
        desc:
          "Tracks learner attendance and monitors progress through the selected course modules."
      },
      {
        title: "Course Completion Certificate",
        desc:
          "Provides a completion certificate after the learner successfully completes the course."
      }
    ],

    engineeringHighlights: [
      "Built a backend application using Express.js with MySQL database persistence.",
      "Designed relational database tables for users, courses, modules, attendance, and certificates.",
      "Implemented a structured course-learning workflow from course selection through final completion.",
      "Created web interfaces using HTML, CSS, and JavaScript for user interaction.",
      "Integrated attendance, learning progress, and certification functionality into the course workflow."
    ],

    architecture: {
      client:
        "Web frontend built with HTML, CSS, and JavaScript for authentication, course selection, modules, attendance, progress, and certification pages.",

      server:
        "Express.js backend handling application routes, user workflows, course operations, attendance, progress, and certificate functionality.",

      database:
        "MySQL relational database containing users, courses, modules, attendance, and certificate records."
    },

    githubUrl: "https://github.com/NGamaniprasad/Learning_Portal",

    liveUrl: "https://learning-portal-prasad.onrender.com/",

    isFeatured: true
  },

  {
    id: "fastmail-portal",
    title: "FastMail Portal",
    subtitle: "Secure Web-Based Email Sending & Attachment Platform",
    category: "Backend (Python & FastAPI)",
    badge: "Python Backend Project",

    problemSolved:
      "Users need a simple web interface for sending emails to multiple recipients with optional attachments while keeping authentication and sensitive email configuration outside the application source code.",

    description:
      "A FastAPI-based web application that provides password-protected access to an email sending interface. Users can send emails to multiple recipients, attach files, and receive email delivery status responses through a browser-based workflow.",

    techStack: [
      "Python",
      "FastAPI",
      "Jinja2",
      "HTML",
      "CSS",
      "SMTP",
      "Python-dotenv",
      "Session Authentication"
    ],

    features: [
      {
        title: "Password-Based Login",
        desc:
          "Provides a protected login workflow before users can access the email functionality."
      },
      {
        title: "Session Management",
        desc:
          "Uses session-based authentication to maintain authenticated user access."
      },
      {
        title: "Multiple Recipient Email",
        desc:
          "Allows users to send emails to multiple recipients through a web interface."
      },
      {
        title: "File Attachments",
        desc:
          "Supports optional file attachments when sending emails."
      },
      {
        title: "Environment-Based Configuration",
        desc:
          "Sensitive login, session, and SMTP configuration is managed using environment variables."
      }
    ],

    engineeringHighlights: [
      "Built a FastAPI backend with server-rendered Jinja2 templates for the web interface.",
      "Implemented session-based authentication and protected application workflows.",
      "Integrated SMTP email delivery with support for multiple recipients and file attachments.",
      "Used python-dotenv to keep sensitive authentication and SMTP configuration outside application code.",
      "Implemented success and failure response handling for email sending operations."
    ],

    architecture: {
      client:
        "Jinja2 server-rendered HTML interface with HTML and CSS for login, email composition, and response pages.",

      server:
        "FastAPI backend handling authentication, session management, email requests, SMTP integration, and application routes.",

      database:
        "No database is specified in the provided project documentation."
    },

    githubUrl: "https://github.com/NGamaniprasad/Fast_Api_Chat",

    liveUrl: null,

    isFeatured: true
  },

  {
    id: "email-scraper",
    title: "Email Scraper with FastAPI & Google Sheets",
    subtitle: "URL-Based Comment Scraping & Email Lead Collection Platform",
    category: "Backend (Python & FastAPI)",
    badge: "Python Automation Project",

    problemSolved:
      "Manually collecting email leads from online comments can be time-consuming. This application automates URL-based comment scraping, email extraction, and storage of collected leads in Google Sheets.",

    description:
      "A FastAPI web application that allows authenticated users to provide a URL, scrape comments from the source, extract email leads, save the collected data to Google Sheets, and review the scraping results.",

    techStack: [
      "Python",
      "FastAPI",
      "Jinja2",
      "HTML",
      "CSS",
      "Google Sheets API",
      "Session Middleware"
    ],

    features: [
      {
        title: "Password-Based Authentication",
        desc:
          "Provides protected access through a login workflow and session management."
      },
      {
        title: "URL-Based Scraping",
        desc:
          "Accepts a URL and processes comments from the specified source."
      },
      {
        title: "Email Lead Extraction",
        desc:
          "Extracts email addresses from the scraped comment data."
      },
      {
        title: "Google Sheets Integration",
        desc:
          "Stores collected email leads directly in a configured Google Sheet."
      },
      {
        title: "Scraping Results",
        desc:
          "Displays the collected scraping and email extraction results through the web interface."
      }
    ],

    engineeringHighlights: [
      "Built the application using FastAPI with Jinja2 server-rendered templates.",
      "Implemented session-based authentication for protected scraping workflows.",
      "Separated scraping and Google Sheets functionality into dedicated Python modules.",
      "Integrated Google Sheets API for persistent storage of extracted email leads.",
      "Designed a workflow covering authentication, URL submission, scraping, extraction, storage, and result presentation."
    ],

    architecture: {
      client:
        "Jinja2-based web interface using HTML and CSS for login, scraping input, and results pages.",

      server:
        "FastAPI backend with authentication, session middleware, URL scraping workflow, email extraction, and Google Sheets integration.",

      database:
        "Google Sheets is used as the external data storage destination for extracted email leads."
    },

    githubUrl: "https://github.com/NGamaniprasad/Email_Scraper_Fast_Api",

    liveUrl: null,

    isFeatured: true
  }
];


export const practicalExperience = [
  {
    category: "Backend API Engineering & Architecture",
    description: "Designed and implemented robust RESTful APIs using Java (Spring Boot) and Python (Django / DRF). Applied clean layered architectures MVT and (Controller/View -> Service/Logic -> Repository/ORM -> DTO/Serializer) ensuring strict separation of concerns.",
    keySkills: ["Spring Boot ","Django", "Django REST Framework", "RESTful Design", "DAO Pattern", "Error Handling"]
  },
  {
    category: "Relational Database Design & Data Modeling",
    description: "Architected normalized relational database schemas in PostgreSQL and MySQL. Modeled complex one-to-many and many-to-many entity relationships using JPA/Hibernate and Django ORM with foreign key constraints, indexes, and transactional boundaries.",
    keySkills: [ "MySQL", "Spring Data JPA", "Django ORM", "Schema Normalization"]
  },
  {
    category: "Authentication, Authorization & Security",
    description: "Implemented stateless authentication using JSON Web Tokens (JWT) with secure password hashing (BCrypt). Enforced Role-Based Access Control (RBAC) to protect sensitive endpoints and secure multi-tenant data access.",
    keySkills: ["JWT Authentication", "Spring Security", "BCrypt", "RBAC", "Token Interceptors"]
  },
  {
    category: "Full-Stack Integration & Modern UI",
    description: "Built responsive, accessible single-page applications in React.js and Vite. Integrated asynchronous REST APIs, handled loading/error states, managed client authentication tokens, and ensured cross-device responsiveness.",
    keySkills: ["React.js", "Vite", "JavaScript (ES6+)", "Axios/Fetch", "Responsive Design"]
  },
  {
    category: "Testing, Debugging & Developer Workflows",
    description: "Validated API endpoints and payloads using Postman test collections and Swagger/OpenAPI specifications. Maintained clean Git version control workflows, semantic commits, and modular codebase structure.",
    keySkills: ["Postman", "Swagger / OpenAPI", "Git & GitHub", "Maven", "Debugging"]
  }
];


export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "Mother Theresa Institute of Engineering and Technology",
    location: "Palamaner-Andhra Pradesh",
    year: "2024",
    status: "Graduated",
    percentage: "83%",
    coreCoursework: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (Java)",
      "Database Management Systems (DBMS)",
      "Operating Systems (OS)",
      "Computer Networks (CN)",
      "Software Engineering & System Design Basics"
    ],
    highlights: [
      "Strong theoretical and practical foundation in Computer Science fundamentals.",
      "Hands-on coursework in database normalization, SQL queries, and algorithmic problem solving.",
      "Completed end-to-end full-stack software engineering projects."
    ]
  },

  {
    degree: "Intermediate (MPC)",
    field: "Mathematics, Physics & Chemistry",
    institution: "Sai Sree Chaitanya Jr College",
    location: "Sai Nagar, Andhra Pradesh",
    year: "2018 – 2020",
    status: "Completed",
    percentage: "93%",
    coreCoursework: [],
    highlights: [
      "Completed Intermediate (MPC) with 93%."
    ]
  },

  {
    degree: "Secondary School Certificate (SSC)",
    field: "Secondary Education",
    institution: "Z.P.H School",
    location: "Nidigunta, Andhra Pradesh",
    year: "2017 – 2018",
    status: "Completed",
    percentage: "87%",
    coreCoursework: [],
    highlights: [
      "Completed SSC with 87%."
    ]
  }
];

export const githubSectionData = {
  profileUrl: "https://github.com/NGamaniprasad",

  username: "NGamaniprasad",

  featuredRepos: [
    {
      name: "FinTrack_Springboot_React",
      description:
        "Full-stack personal finance management application built with Java 21, Spring Boot 4.x, MySQL, Spring Data JPA, JWT Security, and React.",

      language: "Java",

      languageColor: "#b07219",

      stars: "Public",

      forks: "Full Stack",

      url: "https://github.com/NGamaniprasad/FinTrack_Springboot_React"
    },

    {
      name: "Django_React_IPL",
      description:
        "Cricket tournament management system built with Django REST Framework and React featuring tournament management, fixtures, teams, players, scorecards, and standings.",

      language: "Python",

      languageColor: "#3572A5",

      stars: "Public",

      forks: "Full Stack",

      url: "https://github.com/NGamaniprasad/Django_React_IPL"
    },

    {
      name: "DJANGO_REACT_EMS",
      description:
        "Full-stack Employee Management System built with Django REST Framework and React featuring employee management, departments, leave workflows, search, filtering, and role-based access.",

      language: "Python",

      languageColor: "#3572A5",

      stars: "Public",

      forks: "Full Stack",

      url: "https://github.com/NGamaniprasad/DJANGO_REACT_EMS"
    },

    {
      name: "UtilityHub",
      description:
        "Full-stack utility platform built with Java Spring Boot and React featuring JWT authentication, role-based access control, dynamic utility tools, and admin management.",

      language: "Java",

      languageColor: "#b07219",

      stars: "Public",

      forks: "Full Stack",

      url: "https://github.com/NGamaniprasad/Utility_HUB_SpringBoot_React"
    },

    {
      name: "Learning Portal",
      description:
        "Web-based learning platform built with Express.js and MySQL featuring user authentication, course selection, structured modules, attendance tracking, learning progress, and completion certificates.",

      language: "JavaScript",

      languageColor: "#f1e05a",

      stars: "Public",

      forks: "Full Stack",

      url: "https://github.com/NGamaniprasad/Learning_Portal"
    },

    {
      name: "FastMail Portal",
      description:
        "Secure web-based email sending application built with FastAPI featuring session authentication, multiple recipients, file attachments, SMTP integration, and environment-based configuration.",

      language: "Python",

      languageColor: "#3572A5",

      stars: "Public",

      forks: "Backend",

      url: "https://github.com/NGamaniprasad/Fast_Api_Chat"
    },

    {
      name: "Email Scraper",
      description:
        "FastAPI-based email lead collection application that scrapes comments from a provided URL, extracts email addresses, and stores collected leads in Google Sheets.",

      language: "Python",

      languageColor: "#3572A5",

      stars: "Public",

      forks: "Backend / Automation",

      url: "https://github.com/NGamaniprasad/Email_Scraper_Fast_Api"
    }
  ]
};

export const certificationsData = [
  {
    name: "Java Full Stack Training",
    issuer: "Java Learning Center",
    date: "Jun 2024 – Aug 2025",
    location: "Bengaluru",
    type: "Training",
    description:
      "Developed full-stack web applications through instructor-led training with practical experience in Java 8, Spring Framework, Hibernate, JDBC, JSP, Servlets, MySQL, Git, Maven, HTML5, CSS3, JavaScript, and React.js.",
    skills: [
      "Java 8",
      "Spring Framework",
      "Hibernate",
      "JDBC",
      "JSP",
      "Servlets",
      "MySQL",
      "Git",
      "Maven",
      "React.js"
    ],
    credentialUrl: ""
  },

  {
    name: "Python Full Stack Internship",
    issuer: "KODNEST",
    date: "Jan 2024 – Jun 2024",
    location: "Online",
    type: "Internship",
    description:
      "Developed backend APIs, integrated frontend components with relational databases, and connected frontend and backend applications as part of practical full-stack web application development.",
    skills: [
      "Python",
      "Backend APIs",
      "Frontend Integration",
      "SQL",
      "Full Stack Development"
    ],
    credentialUrl: ""
  },

  {
    name: "Machine Learning with Python",
    issuer: "Verzeo",
    date: "3 Months",
    location: "Online",
    type: "Training",
    description:
      "Completed practical training focused on machine learning concepts and Python-based implementation.",
    skills: [
      "Python",
      "Machine Learning"
    ],
    credentialUrl: ""
  },

  {
    name: "AI & Data Science",
    issuer: "Insyness",
    date: "3 Months",
    location: "Online",
    type: "Training",
    description:
      "Completed training focused on artificial intelligence and data science concepts.",
    skills: [
      "Artificial Intelligence",
      "Data Science"
    ],
    credentialUrl: ""
  },

  {
    name: "Cloud Computing",
    issuer: "NPTEL – IIT Kharagpur",
    date: "5 Months",
    location: "Online",
    type: "Certification",
    description:
      "Completed NPTEL coursework in Cloud Computing.",
    skills: [
      "Cloud Computing"
    ],
    credentialUrl: ""
  },

  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "3 Months",
    location: "Online",
    type: "Certification",
    description:
      "Completed foundational networking coursework covering networking concepts and fundamentals.",
    skills: [
      "Computer Networks",
      "Networking Fundamentals"
    ],
    credentialUrl: ""
  }
];