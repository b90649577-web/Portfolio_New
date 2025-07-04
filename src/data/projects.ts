// SEO keywords globally merged by Bolt AI on 2025-01-27 for maximum ranking – excludes milestone page
import emma from '../assets/emma.jpg';
import thea from '../assets/thea.jpg';
import ella from '../assets/ella.jpg';
import knights from '../assets/knights.jpg';
import mathematrix from '../assets/mathematrix.jpg';
import semac from '../assets/semc.jpg';
import ideapool from '../assets/ideapool.jpg';
import fitdeck from '../assets/firedeck.jpg';
import chatterbox from '../assets/chatterbox.jpg';
import capnshare from '../assets/capnshare.jpg';
import careerMapper from '../assets/career-mapper.jpg';
import inventory from '../assets/inventory.jpg';
import faceRecognition from '../assets/face-recognition.jpg';
import agilePlanner from '../assets/agile-planner.jpg';
import agrotech from '../assets/agrotech.jpg';
import influencer from '../assets/influencer.jpg';
// Import placeholder image for new projects
import placeholder from '../assets/emma.jpg'; // Using emma as placeholder for now

const globalKeywords = [
  "Python", "Java", "C", "C++", "C#", "JavaScript", "TypeScript", "Go", "Golang", "Rust", "Kotlin", "Swift", "R", "Ruby", "PHP", "Dart", "Scala", "MATLAB", "Julia", "Haskell", "Perl", "Shell", "Bash", "PowerShell", "Fortran", "Objective-C", "Assembly", "F#", "Elixir", "COBOL", "VBA", "Solidity", "Groovy", "SAS", "PL/SQL", "SQL", "NoSQL", "GraphQL",
  "React", "React Native", "Angular", "Vue", "Next.js", "Nuxt.js", "Svelte", "Preact", "Tailwind CSS", "Bootstrap", "Material UI", "Chakra UI", "jQuery", "Ember.js", "Alpine.js", "Redux", "MobX", "Zustand", "SWR", "TanStack Query", "Node.js", "Express", "NestJS", "Fastify", "Socket.io", "Django", "Flask", "Spring Boot", "Spring", "Hibernate", "ASP.NET", "Laravel", "Symfony", "Ruby on Rails", "Meteor", "Phoenix", "Ktor", "FastAPI", "Fiber", "Gatsby", "Eleventy", "Gridsome", "Remix", "Quasar", "Expo", "Capacitor", "Ionic", "Electron", "Tauri",
  "MongoDB", "PostgreSQL", "MySQL", "MariaDB", "Redis", "SQLite", "Cassandra", "CouchDB", "DynamoDB", "Firestore", "BigQuery", "Snowflake", "Oracle Database", "Elasticsearch", "Supabase", "PlanetScale", "Firebase",
  "AWS", "Amazon Web Services", "Microsoft Azure", "Google Cloud Platform", "GCP", "IBM Cloud", "Oracle Cloud", "DigitalOcean", "Linode", "Heroku", "Netlify", "Vercel", "Cloudflare", "Render", "Railway", "Docker", "Kubernetes", "Helm", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "Travis CI", "ArgoCD", "Pulumi", "Serverless", "Lambda", "Fargate", "App Engine", "S3", "Notion", "Airtable", "Trello", "Jira", "Confluence", "Miro", "Loom", "Calendly", "Asana", "Slack", "Discord", "WhatsApp", "Telegram", "Zoom",
  "Artificial Intelligence", "AI", "Machine Learning", "ML", "Deep Learning", "DL", "Reinforcement Learning", "NLP", "Natural Language Processing", "Computer Vision", "Generative AI", "Prompt Engineering", "Large Language Models", "LLM", "Transformers", "OpenAI", "ChatGPT", "Gemini", "Google Bard", "Claude", "Llama", "Mixtral", "Falcon", "Gemma", "BLOOM", "Stability AI", "Midjourney", "Stable Diffusion", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Hugging Face", "LangChain", "Haystack", "DVC", "Weights & Biases", "Jupyter", "Colab", "Anaconda", "DataCamp", "Kaggle", "DataRobot", "AutoML", "MLflow", "Dataiku", "Data Science", "Big Data", "Analytics", "Business Intelligence", "Data Analytics", "Statistical Learning", "Feature Engineering",
  "Blockchain", "Web3", "Crypto", "Ethereum", "Bitcoin", "Solana", "Polygon", "Smart Contract", "dApps", "NFT", "DeFi", "Metamask", "Chainlink", "ERC20", "ERC721", "Solidity", "Truffle", "Hardhat", "Ethers.js", "Web3.js", "Alchemy", "Moralis", "Binance Smart Chain", "IPFS", "Filecoin", "Zero Knowledge", "zk-SNARKs", "zk-Rollup", "StarkWare", "Arbitrum", "Optimism", "Layer 2", "Staking", "Yield Farming",
  "Cybersecurity", "Penetration Testing", "Bug Bounty", "Ethical Hacking", "SOC", "SIEM", "Firewall", "Zero Trust", "Threat Intelligence", "Infosec", "Red Team", "Blue Team", "Purple Team", "Encryption", "TLS", "SSL", "OWASP", "ISO 27001", "GDPR", "HIPAA", "Phishing",
  "Android", "iOS", "Flutter", "SwiftUI", "Kotlin Multiplatform", "Xamarin", "Jetpack Compose", "Wearables", "IoT", "Raspberry Pi", "Arduino", "ESP32", "MQTT", "Edge Computing", "Robotics", "ROS", "CAN Bus", "Microcontroller",
  "UI", "UX", "UI/UX", "UX Research", "User Research", "Design Thinking", "Figma", "Adobe XD", "Sketch", "InVision", "Canva", "Wireframing", "Prototyping", "Usability", "Accessibility", "Responsive Design", "Dark Mode", "Material Design", "Atomic Design", "Product Management", "Product Designer",
  "Google", "Alphabet", "Apple", "Microsoft", "Amazon", "Meta", "Facebook", "Instagram", "X", "Twitter", "LinkedIn", "GitHub", "GitLab", "Bitbucket", "Netflix", "Tesla", "Spotify", "Uber", "Salesforce", "Shopify", "Stripe", "PayPal", "Atlassian",
  "HackerRank", "LeetCode", "CodeChef", "GeeksforGeeks", "Codeforces", "AtCoder", "TopCoder", "InterviewBit", "Project Euler", "Coursera", "edX", "Udemy", "Pluralsight", "Khan Academy", "DataCamp", "LinkedIn Learning", "Codecademy", "Alison", "FutureLearn", "Great Learning", "NPTEL", "Unacademy", "Simplilearn", "Skillshare", "Forage", "Cognitive Class", "IBM SkillsBuild",
  "IIT Delhi", "IIT Bombay", "IIT Madras", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee", "IIT Guwahati", "IIT Hyderabad", "IIT Indore", "IIT Bhubaneswar", "IIT Patna", "IIT Gandhinagar", "IIT Jodhpur", "IIT Mandi", "IIT Ropar", "IIT Palakkad", "IIT Tirupati", "NIT Trichy", "NIT Surathkal", "NIT Warangal", "NIT Calicut", "NIT Rourkela", "NIT Durgapur", "NIT Allahabad", "NIT Jaipur", "NIT Kurukshetra", "NIT Bhopal", "NIT Nagpur", "NIT Surat", "NIT Silchar", "NIT Jamshedpur", "NIT Patna", "BITS Pilani", "IIIT Hyderabad", "IIIT Delhi", "IIIT Allahabad", "IIIT Bangalore", "IIIT Bhubaneswar", "IIITDM Jabalpur", "IIITDM Kancheepuram", "MIT", "Stanford", "Harvard", "UC Berkeley", "Princeton", "Yale", "Columbia", "Oxford", "Cambridge", "Imperial College London", "NUS", "NTU", "Tsinghua", "Peking", "Waterloo", "Toronto", "ETH Zurich", "EPFL", "Caltech", "UCLA", "University of Chicago", "Cornell", "Georgia Tech", "University of Edinburgh", "Melbourne",
  "India", "United States", "USA", "UK", "United Kingdom", "Canada", "Germany", "France", "Singapore", "Australia", "China", "Japan", "South Korea", "Brazil", "Mexico", "Spain", "Italy", "Switzerland", "Sweden", "Finland", "Netherlands", "Israel", "Ireland", "UAE", "Russia", "South Africa", "Turkey", "Denmark", "Norway", "Belgium", "New Zealand", "Delhi", "New Delhi", "Mumbai", "Bangalore", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Gurgaon", "Noida", "Indore", "Lucknow", "Patna", "London", "San Francisco", "Silicon Valley", "New York", "Boston", "Toronto", "Vancouver", "Berlin", "Munich", "Sydney", "Melbourne", "Beijing", "Shanghai", "Tokyo", "Seoul", "Paris", "Zurich", "Stockholm", "Dublin", "Dubai", "Tel Aviv", "Amsterdam", "Helsinki", "Hong Kong", "Chicago", "Los Angeles", "Austin", "Miami", "Seattle",
  "Software Engineer", "Software Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Web Developer", "Mobile Developer", "App Developer", "UI Designer", "UX Designer", "CTO", "CEO", "COO", "Product Manager", "Data Scientist", "ML Engineer", "AI Researcher", "DevOps Engineer", "Cloud Architect", "QA Engineer", "Intern", "Researcher", "Founder", "Mentor", "Freelancer", "Consultant", "Tech Lead", "Engineering Manager", "Technical Writer", "Open Source Contributor", "Volunteer", "Ambassador", "Campus Ambassador", "Club President", "Community Manager", "Blogger", "Speaker", "Hackathon", "Competition", "Workshop", "Bootcamp", "Summit", "Conference", "Meetup", "Seminar", "Webinar", "Networking", "Panel", "Fellowship",
  "2025", "Trending", "Trending Skills", "AI Skills", "Prompt Engineering", "AI Agent", "Voice AI", "AI Coding Agent", "Generative AI", "AI Art", "RAG", "LangGraph", "Copilot", "NotebookLM", "Agentic Workflows", "Retrieval Augmented Generation", "Semantic Search", "Open Source AI", "Edge AI", "AI Marketplace", "Responsible AI", "Ethical AI", "Explainable AI", "Regulatory Compliance", "Low Code", "No Code", "Serverless", "API Economy", "API Integration", "Cloud Native", "SRE", "MLOps", "DataOps", "FinOps", "Multicloud", "Hybrid Cloud", "Digital Transformation", "Digital India", "Startup India", "Make in India", "Bharat Stack", "Gig Economy", "Remote Work", "Hybrid Work", "Global Teams", "Creator Economy", "Solopreneur", "Side Hustle", "Tech Blogger", "Next Gen", "Sustainability", "Climate Action", "Global Citizen", "AI Ethics", "Gen Z", "Millennial", "Collab", "Innovation", "Women in Tech", "Diversity in STEM", "Student Leader", "Ambassador", "Mentor", "Coach", "Guide", "Networking Events", "Mentorship Programs", "Internship Opportunities", "Job Openings", "Community Partners", "Problem Solving", "Technology Events", "Professional Network", "Student Startups", "UpSkill Workshops", "Future of Work", "Startup Success", "Vistara Partnership", "Global Investors", "Open Source Projects", "Register Now", "Join the Community", "Trusted Platform", "Spark Innovation", "Pitch Event", "Product Launch", "Career Platform", "Tech Meetup", "Learning Platform", "Online Registration", "Business Excel", "Business Drive", "Business Forum", "Business Fusion", "Make a Difference", "Help Students Succeed", "Using Technology", "Explore Opportunities", "Experience Events", "Interact with Innovators", "Enhance Skills", "Brush up Skills", "Join as a Member", "Excel Experience", "Global Network", "Initiative for Women", "Women Entrepreneurs",
  "Brajesh Kumar", "etech-community.com", "Tech Dev Club", "Agrotech AI", "Emma AI", "Ella AI", "Thea AI", "Globex", "Mathematrix", "FitDeck", "IdeaPool", "ChatterBox", "Cap'nShare", "Career Mapper", "SEMAC", "Inventory Management", "Chatbot Project", "Face Recognition Project", "Lab Agile Planning", "Resource Vault", "Portfolio", "Personal Website", "Resume", "CV", "Projects", "Blog", "Resources", "Learning Resources", "Showcase", "Gallery", "Testimonial", "Certificate", "Award", "Honor", "Achievement", "Skillset", "Networking", "Collaboration", "Global Community"
];

export const projects = [
  {
    id: '1',
    title: 'Emma – Personal Assistant',
    description:
      'A smart command-line Python-based personal assistant that performs everyday digital tasks such as setting reminders, opening applications, fetching real-time weather and news, and managing personal schedules.',
    image: emma,
    tags: [
      ...globalKeywords.slice(0, 5),
      'APIs (NewsAPI, OpenWeather)',
      'CLI Interface',
      'pyttsx3',
      'SpeechRecognition',
    ],
    github: 'https://github.com/Brajesh31/emma',
    featured: true,
    categories: ['AI/ML & Chatbots', 'Productivity Tools & Utilities', 'Backend/API Development']
  },
  {
    id: '2',
    title: 'Thea – AI Therapist',
    description:
      'An AI-powered virtual mental health assistant that provides therapeutic interactions using a custom dataset of emotional responses to mimic empathetic conversations.',
    image: thea,
    tags: [
      ...globalKeywords.slice(5, 10),
      'Custom Dataset',
      'Flask',
    ],
    github: 'https://github.com/Brajesh31/thea',
    featured: true,
    categories: ['AI/ML & Chatbots', 'Healthcare & Wellness', 'Backend/API Development']
  },
  {
    id: '3',
    title: 'Ella – AI Chat Companion',
    description:
      'A mobile-friendly AI chatbot app that provides context-aware, friendly conversations for daily engagement and emotional support.',
    image: ella,
    tags: [...globalKeywords.slice(10, 15), 'ML Models (Dialogflow)'],
    github: 'https://github.com/Brajesh31/ella',
    featured: true,
    categories: ['AI/ML & Chatbots', 'Mobile App Development', 'Frontend Development']
  },
  {
    id: '4',
    title: 'The Knights of Flovora',
    description:
      'A 2D adventure RPG with quest-based progression, combat mechanics, and collectible items, offering a classic dungeon crawler experience.',
    image: knights,
    tags: [...globalKeywords.slice(15, 20), 'Custom UI/UX'],
    github: 'https://github.com/Brajesh31/knights',
    featured: true,
    categories: ['Game Development', 'Mobile App Development']
  },
  {
    id: '5',
    title: 'Mathematrix',
    description:
      'An interactive learning platform for children to practice multiplication tables through gamified quizzes and animations.',
    image: mathematrix,
    tags: [...globalKeywords.slice(20, 25)],
    github: 'https://github.com/Brajesh31/mathematrix',
    featured: false,
    categories: ['Frontend Development', 'EdTech & Learning']
  },
  {
    id: '6',
    title: 'SEMAC',
    description:
      'A central hub for college students to manage semester-related resources including timetables, attendance, notes, and grade prediction using ML.',
    image: semac,
    tags: [...globalKeywords.slice(25, 30)],
    github: 'https://github.com/Brajesh31/semac',
    featured: true,
    categories: ['Full Stack Development', 'EdTech & Learning', 'Data Science & Analytics']
  },
  {
    id: '7',
    title: 'TEC_DEV_CL',
    description:
      'A comprehensive admin panel for managing Tech Dev Club events, sponsors, team members, and volunteers with role-based access control and real-time updates.',
    image: placeholder,
    tags: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Admin Panel',
      'CRUD Operations',
      'Real-time Updates'
    ],
    github: 'https://github.com/Brajesh31/TEC_DEV_CL',
    featured: true,
    categories: ['Full Stack Development', 'Admin & Management Tools']
  },
  {
    id: '8',
    title: 'IdeaPool',
    description:
      'A collaborative idea-sharing platform for developers to pitch project ideas and form teams, featuring one-click GitHub repo setup and integrated team chat.',
    image: ideapool,
    tags: [
      'MERN Stack',
      'Team Collaboration',
      'GitHub API',
      'Real-time Chat',
      'Project Management'
    ],
    github: 'https://github.com/Brajesh31/IdeaPool',
    featured: true,
    categories: ['Full Stack Development', 'Collaboration Tools', 'Developer Tools']
  },
  {
    id: '9',
    title: 'FitDeck',
    description:
      'A social fitness community platform with coach following, progress sharing, workout challenges, and a health badge gamification system.',
    image: fitdeck,
    tags: [
      'MERN Stack',
      'Social Platform',
      'Fitness Tracking',
      'Gamification',
      'Notifications'
    ],
    github: 'https://github.com/Brajesh31/FitDeck',
    featured: false,
    categories: ['Full Stack Development', 'Health & Fitness', 'Social Platforms']
  },
  {
    id: '10',
    title: 'ChatterBox',
    description:
      'Real-time chat application with themed rooms, live messaging, emojis, typing indicators, and room-lock features for secure conversations.',
    image: chatterbox,
    tags: [
      'Node.js',
      'Express',
      'Socket.io',
      'Real-time Communication',
      'Dark Mode'
    ],
    github: 'https://github.com/Brajesh31/ChatterBox',
    featured: false,
    categories: ['Full Stack Development', 'Communication Tools', 'Real-time Applications']
  },
  {
    id: '11',
    title: 'Invoice Flow',
    description:
      'A SaaS platform for freelancers and small businesses to generate invoices with server-side rendering optimization, PDF export, and dashboard analytics.',
    image: placeholder,
    tags: [
      'Next.js',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'PDF Generation',
      'Analytics'
    ],
    github: 'https://github.com/Brajesh31/invoice-flow-nextjs-app',
    featured: false,
    categories: ['Full Stack Development', 'Business Tools', 'SaaS Applications']
  },
  {
    id: '12',
    title: 'Car Rental System',
    description:
      'A real-time car booking platform with fleet management, location-based availability, and live vehicle tracking via WebSockets.',
    image: placeholder,
    tags: [
      'Vue.js',
      'Laravel',
      'MySQL',
      'WebSockets',
      'Geolocation',
      'Booking System'
    ],
    github: 'https://github.com/Brajesh31/car-rental-vue-laravel-app',
    featured: false,
    categories: ['Full Stack Development', 'Booking Systems', 'Location-based Services']
  },
  {
    id: '13',
    title: 'Face Recognition System',
    description:
      'An attendance system using face recognition with liveness detection, face detection history, and optimized UI for educational institutions.',
    image: faceRecognition,
    tags: [
      'React',
      'Node.js',
      'Express',
      'SQLite',
      'Computer Vision',
      'Biometrics'
    ],
    github: 'https://github.com/Brajesh31/Face-Recognition',
    featured: true,
    categories: ['AI/ML & Chatbots', 'Security & Authentication', 'Education Tools']
  },
  {
    id: '14',
    title: 'Cap\'nShare',
    description:
      'A food sharing and donation platform for campus students with admin moderation, food request flow, and map-based donor tracking.',
    image: capnshare,
    tags: [
      'Ruby on Rails',
      'PostgreSQL',
      'AWS S3',
      'Food Sharing',
      'Notifications',
      'Maps API'
    ],
    github: 'https://github.com/Brajesh31/cap-and-share',
    featured: false,
    categories: ['Full Stack Development', 'Community Platforms', 'Social Impact']
  },
  {
    id: '15',
    title: 'Career Mapper',
    description:
      'An AI-powered career suggestion tool that analyzes skills and interests to recommend suitable career paths with industry demand insights.',
    image: careerMapper,
    tags: [
      'Streamlit',
      'Python',
      'Pandas',
      'CSV',
      'Career Planning',
      'Data Analysis'
    ],
    github: 'https://github.com/Brajesh31/CareerCompass',
    featured: false,
    categories: ['AI/ML & Chatbots', 'Career Tools', 'Data Science & Analytics']
  }
];

// Helper function to get unique categories from projects
export const getUniqueCategories = () => {
  const categories = new Set<string>();
  projects.forEach(project => {
    project.categories.forEach(category => categories.add(category));
  });
  return Array.from(categories).sort();
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.categories.includes(category));
};