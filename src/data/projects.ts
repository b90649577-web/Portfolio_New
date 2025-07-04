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
        'A smart Python-based command-line assistant that automates daily digital tasks—setting reminders, launching apps, fetching weather and news, and managing schedules. Includes voice synthesis and recognition for hands-free productivity.',
    image: emma,
    tags: [
      ...globalKeywords.slice(0, 5),
      'APIs (NewsAPI, OpenWeather)',
      'CLI Interface',
      'pyttsx3',
      'SpeechRecognition'
    ],
    github: 'https://github.com/Brajesh31/emma',
    featured: true,
    categories: ['AI/ML & Chatbots', 'Productivity Tools & Utilities', 'Backend/API Development']
  },
  {
    id: '2',
    title: 'Thea – AI Therapist',
    description:
        'An AI-powered virtual mental health companion that delivers empathetic, therapeutic conversations using a custom NLP dataset. Mimics human-like responses to support emotional wellbeing.',
    image: thea,
    tags: [
      ...globalKeywords.slice(5, 10),
      'NLP',
      'Custom Dataset',
      'Flask',
      'Conversational AI'
    ],
    github: 'https://github.com/Brajesh31/thea',
    featured: true,
    categories: ['AI/ML & Chatbots', 'Healthcare & Wellness', 'Backend/API Development']
  },
  {
    id: '3',
    title: 'Ella – AI Chat Companion',
    description:
        'A cross-platform AI chatbot application for mobile, delivering friendly, context-aware daily engagement and emotional support. Powered by Dialogflow and modern UI design.',
    image: ella,
    tags: [
      ...globalKeywords.slice(10, 15),
      'Dialogflow',
      'Mobile App',
      'AI Assistant',
      'React Native'
    ],
    github: 'https://github.com/Brajesh31/ella',
    featured: true,
    categories: ['AI/ML & Chatbots', 'Mobile App Development', 'Frontend Development']
  },
  {
    id: '4',
    title: 'The Knights of Flovora',
    description:
        'A 2D RPG adventure with quest progression, turn-based combat, and item collection, offering a classic dungeon crawler experience and custom UI/UX animations.',
    image: knights,
    tags: [
      ...globalKeywords.slice(15, 20),
      'RPG Game',
      'Canvas Animation',
      'Turn-based Combat'
    ],
    github: 'https://github.com/Brajesh31/knights',
    featured: true,
    categories: ['Game Development', 'JavaScript Games', 'Frontend Projects']
  },
  {
    id: '5',
    title: 'Mathematrix',
    description:
        'An interactive gamified learning platform for kids to master multiplication tables through animated quizzes and progressive scoring, built for engagement and quick retention.',
    image: mathematrix,
    tags: [
      ...globalKeywords.slice(20, 25),
      'Gamification',
      'EdTech',
      'Quizzes',
      'Animation'
    ],
    github: 'https://github.com/Brajesh31/mathematrix',
    featured: false,
    categories: ['Frontend Development', 'EdTech & Learning', 'Gamified Apps']
  },
  {
    id: '6',
    title: 'SEMAC – Semester Management Center',
    description:
        'A central hub for students to manage semester resources—timetables, notes, attendance, and ML-based GPA prediction. Provides organized dashboards for academic utilities.',
    image: semac,
    tags: [
      ...globalKeywords.slice(25, 30),
      'Student Utility',
      'Data Analytics',
      'Resource Manager',
      'ML Prediction'
    ],
    github: 'https://github.com/Brajesh31/semac',
    featured: true,
    categories: ['Full Stack Development', 'EdTech & Learning', 'Data Science & Analytics']
  },
  {
    id: '7',
    title: 'IdeaPool – Developer Collaboration Platform',
    description:
        'A MERN-based community platform for developers to share project ideas, form teams, and collaborate on software initiatives. Features public idea feed, discussions, and role management.',
    image: ideapool,
    tags: [
      ...globalKeywords.slice(30, 35),
      'Team Collaboration',
      'Project Management',
      'Community Platform'
    ],
    github: 'https://github.com/Brajesh31/IdeaPool',
    featured: true,
    categories: ['Full-Stack Development', 'Collaboration Tools', 'Community Projects']
  },
  {
    id: '8',
    title: 'FitDeck – Fitness Social Platform',
    description:
        'A social fitness platform for users to follow coaches, join challenges, track workouts, and share articles. Built with the MERN stack and features personalized dashboards.',
    image: fitdeck,
    tags: [
      ...globalKeywords.slice(35, 40),
      'Fitness Tracker',
      'Social Features',
      'Workout Challenges'
    ],
    github: 'https://github.com/Brajesh31/FitDeck',
    featured: true,
    categories: ['Health & Wellness', 'Social Platforms', 'Full-Stack Development']
  },
  {
    id: '9',
    title: 'ChatterBox – Real-Time Chat Rooms',
    description:
        'A multi-room, real-time chat app with live user messaging, typing indicators, emoji support, and modern theming. Built using React, Node.js, and Socket.io.',
    image: chatterbox,
    tags: [
      ...globalKeywords.slice(40, 45),
      'Chat Rooms',
      'Socket.io',
      'Live Messaging'
    ],
    github: 'https://github.com/Brajesh31/ChatterBox',
    featured: true,
    categories: ['Real-time Applications', 'Social Tools', 'Web Sockets']
  },
  {
    id: '10',
    title: "Cap’nShare – Campus Food Sharing App",
    description:
        'A web app for students to share and request excess food on campus, featuring request posting, admin moderation, and a map-based donor-recipient tracker, powered by Ruby on Rails.',
    image: capnshare,
    tags: [
      ...globalKeywords.slice(45, 50),
      'Food Sharing',
      'Campus Utilities',
      'Rails App'
    ],
    github: 'https://github.com/Brajesh31/Cap-nShare',
    featured: true,
    categories: ['Social Impact', 'Campus Utilities', 'Full-Stack Development']
  },
  {
    id: '11',
    title: 'Career Mapper – Offer & Job Comparison Tool',
    description:
        'A Python-React tool for students and professionals to compare job offers by safety index, cost of living, and progression. Features chart visualizations and secure data storage.',
    image: careerMapper,
    tags: [
      ...globalKeywords.slice(50, 55),
      'Career Analysis',
      'Data Visualization',
      'Job Comparison'
    ],
    github: 'https://github.com/Brajesh31/Career-Mapper',
    featured: true,
    categories: ['Career Tools', 'Data Visualization', 'Full-Stack Apps']
  },
  {
    id: '12',
    title: 'Inventory Management System',
    description:
        'A web-based inventory and stock management application with CRUD for products, supplier management, delivery tracking, and alert dashboards. Built with Django and SQLite.',
    image: inventory,
    tags: [
      ...globalKeywords.slice(55, 60),
      'Inventory',
      'Django',
      'CRUD System'
    ],
    github: 'https://github.com/Brajesh31/Inventory-Management-System',
    featured: true,
    categories: ['Business Tools', 'Django Applications', 'Inventory Systems']
  },
  {
    id: '13',
    title: 'Face Recognition System',
    description:
        'A real-time security-focused face recognition app built with OpenCV and TensorFlow. Provides camera streaming, user registration, recognition, and liveness checks to prevent spoofing.',
    image: faceRecognition,
    tags: [
      ...globalKeywords.slice(60, 65),
      'Face Detection',
      'OpenCV',
      'Security'
    ],
    github: 'https://github.com/Brajesh31/Face-Recognition-Project',
    featured: true,
    categories: ['Computer Vision', 'Security & Surveillance', 'AI/ML']
  },
  {
    id: '14',
    title: 'Lab Agile Planning Tool',
    description:
        'A collaborative tool for agile teams to plan sprints, manage tasks, and track progress using Kanban boards and burndown charts. Supports user roles, analytics, and draggable UI.',
    image: agilePlanner,
    tags: [
      ...globalKeywords.slice(65, 70),
      'Agile Planning',
      'Kanban',
      'Sprint Analytics'
    ],
    github: 'https://github.com/Brajesh31/Lab-Agile-Planning',
    featured: true,
    categories: ['Project Management', 'Agile Tools', 'Full-Stack Development']
  },
  {
    id: '15',
    title: 'AgroTech – Smart Farm Monitoring Platform',
    description:
        'A web-based farm management system integrating IoT sensor data for temperature, moisture, and crop health. Offers AI-driven weather alerts and sponsor feedback module.',
    image: agrotech,
    tags: [
      ...globalKeywords.slice(70, 75),
      'IoT',
      'AgroTech',
      'AI Insights'
    ],
    github: 'https://github.com/Brajesh31/AgroTech',
    featured: true,
    categories: ['Agriculture Tech', 'IoT & Sensors', 'Full-Stack Web Apps']
  },
  {
    id: '16',
    title: 'Influencer-Sponsor Coordination Platform',
    description:
        'A full-featured sponsorship marketplace for influencers and brands. Includes campaign tracking, chat, performance dashboards, and smart search, built with MERN stack.',
    image: influencer,
    tags: [
      ...globalKeywords.slice(75, 80),
      'Influencer Marketing',
      'Sponsor Matching',
      'MERN'
    ],
    github: 'https://github.com/Brajesh31/Influencer-Sponsor-Coordination-Platform',
    featured: true,
    categories: ['Creator Economy', 'Collaboration Platforms', 'Business Tools']
  },

];

// Helper function to get unique categories from project
export const getUniqueCategories = () => {
  const categories = new Set<string>();
  projects.forEach(project => {
    project.categories.forEach(category => categories.add(category));
  });
  return Array.from(categories).sort();
};

// Helper function to get project by category
export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.categories.includes(category));
};