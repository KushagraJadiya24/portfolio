export const profile = {
  name: "Kushagra Jadiya",
  title: "Software Development Engineer",
  positioning: "Backend & AI-Integrated Systems",
  summary:
    "Backend-focused developer building practical systems across APIs, security, data, infrastructure and AI-integrated applications.",
  email: "kjadiya2004@gmail.com",
  phone: "+91 6262787980",
  location: "Pune, India · open to relocate · remote-friendly",
  workAuthorization: "Indian national · open to relocation & sponsorship",
  languages: ["English", "Hindi", "Telugu"],
  github: "https://github.com/KushagraJadiya24",
  linkedin: "https://linkedin.com/in/kushagra-jadiya",
  resume: "/resume/Kushagra-Jadiya-Resume.pdf",
  leetcode: "https://leetcode.com/u/KushagraJadiya24/",
  education: {
    institution: "Bharati Vidyapeeth College of Engineering, Pune",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    period: "Jul 2023 – May 2027",
    result: "CGPA: 9.06 / 10.0"
  }
} as const;

export const experience = [
  {
    period: "Jun 2025 – Jul 2025",
    organization: "Rashtriya Ispat Nigam Limited (Vizag Steel)",
    role: "Project Trainee",
    technologies: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL", "JWT"],
    points: [
      "Architected and deployed a corporate auction management portal, delivering 6 operational modules for enterprise clients within a 4-week timeline.",
      "Designed and deployed 12+ RESTful APIs for programmatic bidding and inventory tracking, incorporating centralized exception handling to reduce application runtime crashes by 40%.",
      "Configured stateless authentication using JWT and Role-Based Access Control (RBAC), enforcing granular permission isolation across 2 distinct user roles (Admin and Corporate Client)."
    ]
  },
  {
    period: "Jul 2025 – Aug 2025",
    organization: "Shell – AICTE",
    role: "AI/ML Virtual Intern",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "MinMaxScaler", "Random Forest", "Joblib", "Streamlit"],
    points: [
      "Developed a smart irrigation prediction system by preprocessing sensor data using Pandas, NumPy, and MinMaxScaler, then training a MultiOutput Random Forest classifier using Scikit-learn.",
      "Evaluated model performance using classification metrics, serialized the trained model with Joblib, and deployed it through an interactive Streamlit application for real-time irrigation prediction."
    ]
  }
] as const;

export const projects = [
  {
    id: "devvault",
    index: "01",
    name: "DevVault",
    eyebrow: "SECRETS MANAGEMENT",
    description: "A self-hosted secrets platform for securely storing, retrieving, and managing application secrets.",
    stack: ["Spring Boot", "Spring Security", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "Next.js"],
    details: [
      ["Encryption", "AES-256-GCM"],
      ["Security", "JWT + RBAC + audit logging"],
      ["Performance", "Redis-backed caching"],
      ["Deployment", "Railway + Vercel"]
    ],
    metrics: ["35% lower secret retrieval latency", "96% faster developer onboarding"],
    links: { docs: "https://devvault-backend-production-d964.up.railway.app/swagger-ui/index.html", live: null, github: null }
  },
  {
    id: "athletica",
    index: "02",
    name: "AthleticaAI",
    eyebrow: "VOICE-DRIVEN AI FITNESS",
    description: "A conversational fitness application using voice input and Gemini to generate personalized plans.",
    stack: ["Next.js", "React", "Google Gemini API", "Vapi Voice AI", "Clerk", "Convex"],
    details: [
      ["AI", "Vapi Voice AI + Gemini"],
      ["Auth", "Clerk"],
      ["State", "Convex"],
      ["Interaction", "Conversational audio"]
    ],
    metrics: ["95%+ extraction accuracy", "Sub-100ms data updates"],
    links: { docs: null, live: "https://athletica-ai-eosin.vercel.app/", github: null }
  },
  {
    id: "lucidia",
    index: "03",
    name: "Lucidia",
    eyebrow: "AI-ENHANCED WORKSPACE",
    description: "A private rich-text workspace with AI assistance for dynamic document creation and editing.",
    stack: ["Node.js", "Express.js", "Together AI", "MongoDB", "Quill.js"],
    details: [
      ["Editor", "Quill.js rich text"],
      ["AI", "Together AI LLM endpoints"],
      ["Storage", "MongoDB"],
      ["Security", "Encrypted document storage"]
    ],
    metrics: ["AI-assisted document editing", "Encrypted rich-text data at rest"],
    links: { docs: null, live: "https://lucidia-ak2u.onrender.com/", github: null }
  },
  {
    id: "smart-irrigation",
    index: "04",
    name: "Smart Irrigation System",
    eyebrow: "ML PREDICTION + STREAMLIT",
    description: "A sensor-data prediction system that uses a MultiOutput Random Forest classifier to predict irrigation-zone activation.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    details: [
      ["Model", "MultiOutput Random Forest"],
      ["Input", "20 environmental sensor features"],
      ["Output", "3 irrigation zones"],
      ["Deployment", "Interactive Streamlit app"]
    ],
    metrics: ["20 input features", "3 predicted irrigation zones"],
    links: { docs: null, live: null, github: null }
  },
  {
    id: "travelo",
    index: "05",
    name: "Travelo",
    eyebrow: "FULL-STACK TRAVEL APP",
    description: "A travel-themed web application for exploring, reviewing and managing campgrounds across the world.",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Bootstrap 5", "Passport.js", "Cloudinary", "Multer"],
    details: [
      ["Architecture", "RESTful + MVC"],
      ["Auth", "Passport Local + express-session"],
      ["Media", "Cloudinary + Multer"],
      ["Validation", "Custom errors + form validation"]
    ],
    metrics: ["Campground CRUD", "Reviews + image uploads"],
    links: { docs: null, live: "https://tinyurl.com/yvbemvs2", github: "https://github.com/KushagraJadiya24/Travelo" }
  },
  {
    id: "texturemap",
    index: "06",
    name: "TextureMap",
    eyebrow: "THREE.JS INTERACTIVE 3D",
    description: "An interactive 3D cube viewer that swaps surface textures through drag-and-drop interaction.",
    stack: ["Three.js", "JavaScript ES6", "HTML", "CSS"],
    details: [
      ["Rendering", "Three.js BoxGeometry"],
      ["Interaction", "Drag-and-drop texture swapping"],
      ["Lighting", "Ambient + Directional Light"],
      ["Loading", "TextureLoader + color-space correction"]
    ],
    metrics: ["Real-time texture swapping", "Responsive 3D viewer"],
    links: { docs: null, live: null, github: "https://github.com/KushagraJadiya24/TextureMap" }
  },
  {
    id: "fridge2fork",
    index: "07",
    name: "Fridge2Fork",
    eyebrow: "INGREDIENT-BASED RECIPE APP",
    description: "A minimalist recipe discovery application that matches available ingredients with recipes a user can make.",
    stack: ["HTML5", "CSS3", "Vanilla JavaScript", "Recipe API"],
    details: [
      ["Search", "Comma-separated ingredients"],
      ["UI", "Responsive recipe cards"],
      ["Data", "Recipe API integration"],
      ["Performance", "Loading states + lightweight frontend"]
    ],
    metrics: ["Ingredient-based discovery", "Desktop + mobile responsive"],
    links: { docs: null, live: null, github: null }
  }
] as const;

export const skillGroups = [
  { id: "languages", label: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"] },
  { id: "backend", label: "Backend", items: ["FastAPI", "Spring Boot", "Node.js", "Express.js", "RESTful APIs", "Microservices", "JWT", "RBAC"] },
  { id: "ai", label: "AI / LLM", items: ["RAG", "LLMs", "Vector Embeddings", "OpenAI", "Gemini API"] },
  { id: "data", label: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { id: "infra", label: "Infrastructure", items: ["Docker", "GitHub Actions", "Git", "Postman", "Vercel"] },
  { id: "frontend", label: "Frontend", items: ["React.js", "Next.js", "TailwindCSS"] },
  { id: "core", label: "Core CS", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "System Design"] }
] as const;

export const achievements = [
  { label: "Problem Solving", value: "300+", detail: "LeetCode problems solved", link: "https://leetcode.com/u/KushagraJadiya24/" },
  { label: "National Finalist", value: "Top 20 / 500+", detail: "GFG Byte Quest Hackathon" },
  { label: "Runner-Up", value: "2nd Place", detail: "Coding Crackers" },
  { label: "Certification", value: "IBM", detail: "Web Development Fundamentals", link: "https://www.credly.com/org/ibm/badge/web-development-fundamentals" },
  { label: "NPTEL Elite", value: "DBMS & C", detail: "NPTEL certification" }
] as const;
