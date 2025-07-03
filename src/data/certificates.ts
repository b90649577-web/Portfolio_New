// SEO keywords globally merged by Bolt AI on 2025-01-27 for maximum ranking – excludes milestone page
// Import images (adjust path/filenames as needed)
import canvaImg from '../assets/canva.jpg';
import canvaWebImg from '../assets/canva-webpages.jpg';
import uxPortfolioImg from '../assets/ux-portfolio.jpg';
import pitchDeckImg from '../assets/pitch-deck.jpg';
import websiteVideosImg from '../assets/website-videos.jpg';

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

export const certificates = [
  {
    id: "1",
    title: "Expand Employee Interaction with Canvas",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "WRVYTRZ5VGYJ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "2",
    title: "Facial Expression Recognition with PyTorch",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "HTOO8M00GD19",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "3",
    title: "Finding, Sorting, & Filtering Data in Microsoft Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "DB3PNC7HBA93",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "4",
    title: "Fine Tune BERT for Text Classification with TensorFlow",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "8DTQS6F2TR63",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "5",
    title: "Gamification Learning with Genially",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "2L3TURUU9QJO",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "6",
    title: "Get Started with Airtable",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "FGH37PNHVSLN",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "7",
    title: "Get Started with Microsoft Forms",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "T10T2RAL5ILI",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "8",
    title: "Get Started with Wrike",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "B6R9JTJ5AR3D",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "9",
    title: "Get started with Asana",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "X7OAFQLVABI9",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "10",
    title: "Get started with Jira",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "GYRO5U6WZ8TF",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "11",
    title: "Get started with Mural",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "569PZOUB0VGS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "12",
    title: "Getting Started in Google Analytics",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "JFGZWUN6MMYW",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "13",
    title: "Getting Started with Asana",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "CR03PAW9KCGT",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "14",
    title: "Getting Started with Azure DevOps Boards",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "QVSTBQPBO4C0",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "15",
    title: "Getting Started with Microsoft Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "R93VJ0DS5N4N",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "16",
    title: "Getting started with Azure IOT Hub",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "XC1DF5OV8F53",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "17",
    title: "Getting started with ImageJ",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SOJMI9JE36KN",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "18",
    title: "Getting started with Prezi for small businesses",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "XEYBVO42KZD2",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "19",
    title: "Goldman Sachs - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "March 2025",
    credentialId: "g5sno7hGQtPfLJrrb",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "20",
    title: "Graphic design: pop your Linkedin with 3D effect Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "6YSPMK2JPRKU",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "21",
    title: "Hiring and Onboarding Employees with ClickUp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "J8976NJ3VMYQ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "22",
    title: "How To Set Up Project Sites and Spaces with Confluence",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "HCJ4HMJ3Y8KQ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "23",
    title: "How To Visualize Your Data Using Microsoft Powerpoint",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AW7SEWYRE41Y",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "24",
    title: "How to create presentations using Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "8EE2GLS76DJ4",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "25",
    title: "How to use Custom and Conditional Formatting in Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "XSNZY8KGL4PT",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "26",
    title: "How to use roadmaps in Jira",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "IS2L5RUG6CKG",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "27",
    title: "Hyperparameter Tuning with Keras Tuner",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "30TFGKRD59AF",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "28",
    title: "Improve Business Performance with Google Forms",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "K073WI84ZE1W",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "29",
    title: "Improve Business Performance with Microsoft Forms",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NF2EVESJHHXK",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "30",
    title: "Improve Communication with Genial.ly",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NOVX7BE1RTYK",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "31",
    title: "Improve Organizational Performance using Mural",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "I8DF0VYY8B0P",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "32",
    title: "Improve Team Communication Using Google Chat",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "FBDQ27HXWWF0",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "33",
    title: "Improve the Effectiveness of your Campaigns with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AGUYDJSLKZRX",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "34",
    title: "Infographics Using Google Slides for Education",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "X27VK8M57K3N",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "35",
    title: "Initiate a New Agile Project with Jira",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "W9W0UJ32CICL",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "36",
    title: "Insert Table of Contents, Page Numbers and Header & Footer in Word",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "9H2ZZFR6PPJK",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "37",
    title: "Introduction to Google Drive",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "V7XG1B8VIFG8",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "38",
    title: "Introduction to Microsoft Teams",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "95OKVKDABICM",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "39",
    title: "Introduction to Slack",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "0JFX6QVGPKR5",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "40",
    title: "Introduction to Trello",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "G82E6AXSTEF6",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "41",
    title: "Jira for Product Management",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "I4E2X6UOGH7Z",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "42",
    title: "Jira Project Settings for Admins",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "3K4KEXV3LLE6",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "43",
    title: "Kanban Project Management with Jira Software",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "3KWF2RO3VG7P",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "44",
    title: "Labeling Data for Computer Vision Projects",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "JXXFRBRG9OXP",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "45",
    title: "Launching a Facebook Business Page",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "B3FAVOKTGOTL",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "46",
    title: "Launching your Product with Trello",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SYK4M3WJQ6VR",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "47",
    title: "Lead Generation with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "3P3M6UJ1N8PB",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "48",
    title: "Machine Learning Model Deployment with Streamlit",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "FUK9VLTL7MWS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "49",
    title: "Making Creative Videos using Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "D9C8SR9P1X0E",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "50",
    title: "Managing Agile Projects with Jira",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TYYOJP97BAYC",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "51",
    title: "Managing Stakeholder Communication with Miro",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "Z7P27P0PQKYY",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "52",
    title: "Marketing Analytics with Data Studio",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "M3XTLTQQOBMO",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "53",
    title: "Marketing with Instagram for Business",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "UZUWBJFA6XRP",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "54",
    title: "Math Assessment with Google Forms",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "5OQ8USMPCJAK",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "55",
    title: "Microsoft Excel Conditional Formatting",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "8NSIUZH3Y3AE",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "56",
    title: "Microsoft Excel Pivot Table Essentials",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "RNYCEAKBJJUZ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "57",
    title: "Microsoft Excel VLOOKUP Function",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "L2HKLL1XEQY4",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "58",
    title: "Microsoft Word Document Formatting Essentials",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "0BO9GTVLJDAT",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "59",
    title: "Modernizing a Resume with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LM1G8VC3Z7HV",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "60",
    title: "Monthly Newsletter using Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KGESNNASRBT5",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "61",
    title: "Monthly Reports with Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "IT7R6J3ZTXRV",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "62",
    title: "Motion Graphics with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "5T4CU7H96KAD",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "63",
    title: "Organizing Your Work in Trello",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "HZ3S5JVEG4WL",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "64",
    title: "Personal Branding with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "C8PQ4Y92EJNC",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "65",
    title: "Pitch Deck Creation with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "EGQY9XBM86ZM",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "66",
    title: "Power Automate for Excel Workflows",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "2Y6BCO94W67N",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "67",
    title: "PowerPoint Design for Beginners",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "GY4BLFTTY0CN",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "68",
    title: "Presenting Data with Infographics",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KZTK1NNZFXAP",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "69",
    title: "Professional Resume Writing using Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "U16VPKBLWHKJ",
    image: canvaImg,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "70",
    title: "Project Timeline with Microsoft Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "7BSJZCRBZVVI",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "71",
    title: "Reports Automation with Power Automate",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PK0OMCLQMGL6",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "72",
    title: "Resume and Cover Letter using Google Docs",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "S0Y3G0Q63BE8",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "73",
    title: "Sales Report Generator using Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NUE06IUFWY1B",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "74",
    title: "School Website using Weebly",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MPUCKEGASAC7",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "75",
    title: "Social Campaign Metrics with Data Studio",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KRSEEVF3S95E",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "76",
    title: "Social Media Calendar in Trello",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "DNJCY200IB9O",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "77",
    title: "Spreadsheet Budget with Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "JNE5YP648F8O",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "78",
    title: "Strategic Goals Canvas with Miro",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "RSFO9MIXS7LE",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "79",
    title: "Student Books with Book Creator",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SQ167RI2YCZC",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "80",
    title: "Survey Creation with Microsoft Forms",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ZG0QBSD8KJA4",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "81",
    title: "Tasks & Lists with ClickUp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "IK3TNUZS3A4Y",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "82",
    title: "Team Communication with Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "1N2CHIWLNH34",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "83",
    title: "Timeline Presentation using PowerPoint",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KQAQ1WQYCPRC",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "84",
    title: "UX Portfolio using Crevado",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "H32NN875QYLJ",
    image: uxPortfolioImg,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "85",
    title: "VPC Architecture on AWS",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "IYY4SR2OD06R",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "86",
    title: "Virtual Machines & Web Server on Azure",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "Q7WFBDPSFZ8X",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "87",
    title: "Web Design Using Wix ADI",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "K6Z6OYU5G98K",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "88",
    title: "Website Analytics in Google Data Studio",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KRSEEVF3S95E",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "89",
    title: "Workflow Automation using Wrike",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "S6UK41L554FM",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "90",
    title: "YouTube Channel Brand Kit with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "0ZL4TP8UZYSC",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "91",
    title: "Your First Python Program From UST",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "YHRR3XPV5JVQ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "92",
    title: "Model-driven Power App for Rental Company",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "WCUTAD8YU27I",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "93",
    title: "Organizational Templates in Trello",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "DNJCY200IB9O",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "94",
    title: "PDF Balance Report using HTML, Excel & Power Automate",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "GWJGMSXSCR92",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "95",
    title: "Power App for Adding Records to SharePoint List",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "YBTCUTLT27RH",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "96",
    title: "Create Student Books with Book Creator",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SQ167RI2YCZC",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "97",
    title: "Create Tasks and Lists with ClickUp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "IK3TNUZS3A4Y",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "98",
    title: "Create Visually Engaging Presentations using Microsoft Sway",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "POHMVG4KOVFW",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "99",
    title: "Create a Business Proposal with Visme",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "QXBS7ZAF3FQA",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "100",
    title: "Create a Cover Letter with Microsoft Word",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "K6NL4S04JZTL",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "101",
    title: "Create a Customer Service Survey in Microsoft Forms",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ZG0QBSD8KJA4",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "102",
    title: "Create a Lead Generation Chatbot using Chatfuel",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "G1K6HDZZRTFH",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "103",
    title: "Create a Mortgage Calculator in Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "L2ADXPRWPW2L",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "104",
    title: "Create a Professional Automated Landing Page with Mailchimp",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "7Y0PPF0O73FZ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "105",
    title: "Create a Profile and Network on LinkedIn",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "J7VZZ3LTUSB9",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "106",
    title: "Create a Project Charter with Google Docs",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NKDQNSGZTHS0",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "107",
    title: "Create a Project Management Dashboard with Bitrix24",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "44ZIW9CDPCO6",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "108",
    title: "Create a Project Management Tracker with Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "7QE14D8KUJP5",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "109",
    title: "Create a Project Management Tracker with Microsoft Excel",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "0SGXQSRGRPP2",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "110",
    title: "Create a Resume and Cover Letter with Google Docs",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "S0Y3G0Q63BE8",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "111",
    title: "Create a Simple Gantt Chart using Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "H9WO4ATJ78LB",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "112",
    title: "Create a Simple Gantt Chart using Microsoft Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "7BSJZCRBZVVI",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "113",
    title: "Create a Small Business Website with Weebly",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MPUCKEGASAC7",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "114",
    title: "Create a Superhero Name Generator with TensorFlow",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "8MOIZXI4E1CY",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "115",
    title: "Create a Custom Workflow in Wrike",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "S6UK41L554FM",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "116",
    title: "Create a Value Proposition Canvas in Miro",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "RSFO9MIXS7LE",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "117",
    title: "Create a Website with MailChimp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "17MVWT63SVII",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "118",
    title: "Create an Email Autoresponder Using Mailchimp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "8TV78UU71HST",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "119",
    title: "Create an Infographic with Infogram",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "Y5XRH7BVHZY7",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "120",
    title: "Create and Design Digital Products using Canva",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "3N7HJKKYETPM",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "121",
    title: "Create and Manage a Project Dashboard with Wrike",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "GEPTT9LRDFZI",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "122",
    title: "Create Attractive Infographics with Creately",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "OJNGTHX87WKS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "123",
    title: "Create Social Media Content with Prezi",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "YPR2LQ62N09X",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "124",
    title: "Create Website Videos with Canva",
    issuer: "EDX Alumni",
    date: "March 2025",
    credentialId: "QS8RY49ISMIR",
    image: websiteVideosImg,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "125",
    title: "Create Your E-commerce Store with Ecwid",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "58YWCZ73YWUM",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "126",
    title: "Create Your E-commerce Store with Shopify",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "JT72XJYI48V6",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "127",
    title: "Creating Horizontal and Vertical Timelines in PowerPoint",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KQAQ1WQYCPRC",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "128",
    title: "Creating Multi Task Models With Keras",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "M554KXELMRMK",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "129",
    title: "Creating Tasks and Goals for a Project in ClickUp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SI8BJIAGA6IF",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "130",
    title: "Creating a Budget with Microsoft Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "G7E0MZ71SS4E",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "131",
    title: "Creating a Portfolio Using Weebly",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "HHQOGKI8I4P7",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "132",
    title: "Critical Path Analysis Using Lucidchart",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "3104V29XYNLF",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "133",
    title: "Data Visualization in Microsoft PowerPoint",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "F7D8F3PC94BS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "134",
    title: "Data Visualization using Bokeh",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "Y0RQ4WY71RIB",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "135",
    title: "Data Visualization using Plotly",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PV5TT3N8IC27",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "136",
    title: "Data Visualization using Plotnine and ggplot",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "5AVCKUZKSVR4",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "137",
    title: "Deep Learning with PyTorch: GANs",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "3CWLRJ7TH5KM",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "138",
    title: "Deep Learning with PyTorch: GradCAM",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "Q4TQI687KI0F",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "139",
    title: "Deep Learning with PyTorch: Image Segmentation",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "YQ5K0LIMZ46Q",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "140",
    title: "Deep Learning with PyTorch: Object Localization",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "UOL99DYSM4W8",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "141",
    title: "Design a Pitch Deck with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "G1K53UY9ZGKW",
    image: pitchDeckImg,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "142",
    title: "Designing and Formatting a Presentation in PowerPoint",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "3U4D49FFC3A3",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "143",
    title: "Develop LinkedIn Designs with Visme",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NJATP4B8B9FG",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "144",
    title: "Develop a Company Website with Wix",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "HPJXL9O13FV1",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "145",
    title: "Developing Advanced Programme Delivery Framework in ClickUp",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "UZCO63KQKS5K",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "146",
    title: "Developing a Programme Management Blueprint with ClickUp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "HVNFZILN7GLS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "147",
    title: "Enhance Student Learning with Nearpod",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LYVUPB3LZ7OS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "148",
    title: "Enigma - CTF",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "f9da92bf-52af-46dd-8f62-0118bf45b051",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "149",
    title: "Ethical AI and Its Implications for Modern Business 2.0",
    issuer: "Udemy",
    date: "March 2025",
    credentialId: "UC-cb5cfeOc-0859-4563-b348-718e21f9",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "150",
    title: "Build a Budget and Analyze Variance using Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "JNE5YP648F8O",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "151",
    title: "Build a Full Website using WordPress",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "QFVMAGYIFFGH",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "152",
    title: "Build a Professional Resume using Canva",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "1YZDUHMWNDGF",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "153",
    title: "Build a computer vision app with Azure Cognitive Services",
    issuer: "Microsoft",
    date: "March 2025",
    credentialId: "RKKF6ZJFM0IQ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "154",
    title: "Build a free website with WordPress",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "Y2GNDQMPZPAE",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "155",
    title: "Build a mobile app with Google Sheets on Glide and no coding",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "XFZZ1ZUVBMTQ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "156",
    title: "Build a website using Wix Artificial Design Intelligence",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "K6Z6OYU5G98K",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "157",
    title: "Build an Automated Landing page using AI from Wix ADI",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "NUD7PFFBI0NV",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "158",
    title: "Build your business brand using Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KS6H06KDB0C1",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "159",
    title: "Build your first Machine Learning Pipeline using Dataiku",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ZKGKDQA02C5F",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "160",
    title: "Building Candlestick Charts with Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "XNN2KYUFIQ24",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "161",
    title: "Building Digital Media using Graphic Design in PowerPoint",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "WG1LMIY6L30B",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "162",
    title: "Building Smart Business Assistants with IBM Watson",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "H7ZT1S7AZX1W",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "163",
    title: "Building Students Math Skills with iKnowit",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "OULMB3R5NKXH",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "164",
    title: "Building an Ecosystem model with Insight Maker",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "3PO29AYDG9LR",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "165",
    title: "Business Operations Support in Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "N3DJFVWTU7DC",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "166",
    title: "Certificate of Excellence in Round 1: Learning Boot Camp of Unstop Talent Park 2025",
    issuer: "Unstop",
    date: "March 2025",
    credentialId: "28b2aae3-4f23-4bc0-80a6-9dbedc5d76fb",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "167",
    title: "Certificate of Excellence in Treasure Hunt - February Series",
    issuer: "Unstop",
    date: "March 2025",
    credentialId: "25fa2a50-ffa9-4859-a755-5d31f3325f4c",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "168",
    title: "Certificate of Participation in Bug Bounty of Verge - The Technical Fest",
    issuer: "Unstop",
    date: "March 2025",
    credentialId: "f6a7cfb6-9580-464a-8981-690dc6855a14",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "169",
    title: "Certificate of Participation in Challenge 19 of Weekly Coding Challenge",
    issuer: "Unstop",
    date: "March 2025",
    credentialId: "a1859b6a-e590-40f5-9b2e-a2405b06d2d9",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "170",
    title: "Certificate of Participation in Code of the Phoenix | Hackathon of E-Summit 2025",
    issuer: "Unstop",
    date: "March 2025",
    credentialId: "22dccce4-f797-49e7-85e1-b69ea262be1c",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "171",
    title: "Certificate of Participation in Cryptic Hunt of Verge - The Technical Fest",
    issuer: "Unstop",
    date: "March 2025",
    credentialId: "5ec13340-bce6-40e8-87f6-fcb00d22ea43",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "172",
    title: "Certificate of Participation in Promptify of Invictus 2025",
    issuer: "Unstop",
    date: "March 2025",
    credentialId: "caab3a7a-b6a2-4821-85db-8c1886c910f4",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "173",
    title: "Certificate of Participation in Research Forge of Invictus 2025",
    issuer: "Unstop",
    date: "March 2025",
    credentialId: "78deb237-73d8-4d7d-91e5-8c096beb13a5",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "174",
    title: "Certificate of Participation in Round 1: Quiz of Research Forge",
    issuer: "Unstop",
    date: "March 2025",
    credentialId: "f2125667-41e2-4f22-bb01-d77a4b90af14",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "175",
    title: "Change Leadership: Developing Strategic Gap Analysis in Miro",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ATHSIF7B1CES",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "176",
    title: "Compose and Program Music in Python using Earsketch",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TJLGI394JTDZ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "177",
    title: "Conditional Formatting, Tables and Charts in Microsoft Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "UPEXJPAWB4B5",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "178",
    title: "Create Model-driven Power App for Rental Company",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "WCUTAD8YU27I",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "179",
    title: "Create Organizational Templates in Trello",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "DNJCY200IB9O",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "180",
    title: "Create PDF Balance Report using HTML, Excel & Power Automate",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "GWJGMSXSCR92",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "181",
    title: "Create Power App for Adding Records to SharePoint List",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "YBTCUTLT27RH",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "182",
    title: "Create Student Books with Book Creator",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SQ167RI2YCZC",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "183",
    title: "Create Tasks and Lists with ClickUp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "IK3TNUZS3A4Y",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "184",
    title: "Create Visually Engaging Presentations using Microsoft Sway",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "POHMVG4KOVFW",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "185",
    title: "Create Your First Python Program From UST",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "YHRR3XPV5JVQ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "186",
    title: "Create Your UX portfolio with Crevado",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "H32NN875QYLJ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "187",
    title: "Create a Business proposal with Visme for businesses",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "QXBS7ZAF3FQA",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "188",
    title: "Create a Cover Letter with an Envelope using Microsoft Word",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "K6NL4S04JZTL",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "189",
    title: "Create a Custom Marketing Analytics Dashboard in Data Studio",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KRSEEVF3S95E",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "190",
    title: "Create a Customer Service Survey in Microsoft Forms",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ZG0QBSD8KJA4",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "191",
    title: "Create a Lead Generation Messenger Chatbot using Chatfuel",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "G1K6HDZZRTFH",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "192",
    title: "Create a Mortgage Calculator in Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "L2ADXPRWPW2L",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "193",
    title: "Create a Professional Automated Landing Page using Mailchimp",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "7Y0PPF0O73FZ",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "194",
    title: "Create a Profile and Network on LinkedIn",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "J7VZZ3LTUSB9",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "195",
    title: "Create a Project Charter with Google Docs",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NKDQNSGZTHS0",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "196",
    title: "Create a Project Management Dashboard using Bitrix24",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "44ZIW9CDPCO6",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "197",
    title: "Create a Project Management Tracker using Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "7QE14D8KUJP5",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "198",
    title: "Create a Project Management Tracker using Microsoft Excel",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "0SGXQSRGRPP2",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "199",
    title: "Create a Resume and Cover Letter with Google Docs",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "S0Y3G0Q63BE8",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "200",
    title: "Create a Simple Gantt Chart using Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "H9WO4ATJ78LB",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "201",
    title: "Create a Simple Gantt Chart using Microsoft Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "7BSJZCRBZVVI",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "202",
    title: "Create a Small Business Website with Weebly",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MPUCKEGASAC7",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "203",
    title: "Create a Superhero Name Generator with TensorFlow",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "8MOIZXI4E1CY",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "204",
    title: "Create a custom workflow in Wrike",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "S6UK41L554FM",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "205",
    title: "Create a value proposition canvas in Miro",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "RSFO9MIXS7LE",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "206",
    title: "Create a website with MailChimp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "17MVWT63SVII",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "207",
    title: "Create an Email Autoresponder Using Mailchimp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "8TV78UU71HST",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "208",
    title: "Create an infographic with Infogram",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "Y5XRH7BVHZY7",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "209",
    title: "Create and Design Digital Products using Canva",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "3N7HJKKYETPM",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "210",
    title: "Create and manage a project dashboard with Wrike",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "GEPTT9LRDFZI",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "211",
    title: "Create attractive infographics with Creately",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "OJNGTHX87WKS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "212",
    title: "Create social media content with Prezi",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "YPR2LQ62N09X",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "213",
    title: "Create website videos with Canva",
    issuer: "EDX Alumni",
    date: "March 2025",
    credentialId: "QS8RY49ISMIR",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "214",
    title: "Create your e-commerce store with Ecwid",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "58YWCZ73YWUM",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "215",
    title: "Create your e-commerce store with Shopify",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "JT72XJYI48V6",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "216",
    title: "Creating Horizontal and Vertical Timelines in PowerPoint",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KQAQ1WQYCPRC",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "217",
    title: "Creating Multi Task Models With Keras",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "M554KXELMRMK",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "218",
    title: "Creating Tasks and Goals for a Project in ClickUp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SI8BJIAGA6IF",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "219",
    title: "Creating a Budget with Microsoft Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "G7E0MZ71SS4E",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "220",
    title: "Creating a Portfolio Using Weebly",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "HHQOGKI8I4P7",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "221",
    title: "Critical Path Analysis Using Lucidchart",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "3104V29XYNLF",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "222",
    title: "Data Visualization in Microsoft PowerPoint",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "F7D8F3PC94BS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "223",
    title: "Data Visualization using Bokeh",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "Y0RQ4WY71RIB",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "224",
    title: "Data Visualization using Plotly",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PV5TT3N8IC27",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "225",
    title: "Data Visualization using Plotnine and ggplot",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "5AVCKUZKSVR4",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "226",
    title: "Deep Learning with PyTorch : Generative Adversarial Network",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "3CWLRJ7TH5KM",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "227",
    title: "Deep Learning with PyTorch : GradCAM",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "Q4TQI687KI0F",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "228",
    title: "Deep Learning with PyTorch : Image Segmentation",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "YQ5K0LIMZ46Q",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "229",
    title: "Deep Learning with PyTorch : Object Localization",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "UOL99DYSM4W8",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "230",
    title: "Design a pitch deck with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "G1K53UY9ZGKW",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "231",
    title: "Designing and Formatting a Presentation in PowerPoint",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "3U4D49FFC3A3",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "232",
    title: "Develop Linkedin designs with Visme",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NJATP4B8B9FG",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "233",
    title: "Develop a Company Website with Wix",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "HPJXL9O13FV1",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "234",
    title: "Developing Advanced Programme Delivery Framework in ClickUp",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "UZCO63KQKS5K",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "235",
    title: "Developing a Programme Management Blueprint with ClickUp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "HVNFZILN7GLS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "236",
    title: "Enhance Student Learning with Interactive Lessons in Nearpod",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LYVUPB3LZ7OS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "237",
    title: "Enigma - CTF",
    issuer: "United Latino Students Association",
    date: "March 2025",
    credentialId: "f9da92bf-52af-46dd-8f62-0118bf45b051",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "238",
    title: "Ethical AI and Its Implications for Modern Business 2.0",
    issuer: "Udemy",
    date: "March 2025",
    credentialId: "UC-cb5cfeOc-0859-4563-b348-718e21f9",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "241",
    title: "Excel Charts - Visualization Techniques",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "FXH3UVG4EPLN",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "242",
    title: "Excel Data Validation and Data Cleaning Techniques",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "P7NGLXOISNDP",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "243",
    title: "Excel Dashboards for Beginners",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TXLCMH3G7H3J",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "244",
    title: "Excel Functions: Lookup, Logical, Text, Math",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "RM8FAZ95E9K6",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "245",
    title: "Excel: Advanced Formatting Techniques",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "JPJNZ8H9SDFK",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "246",
    title: "Create an Online Form using Google Forms",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "K98EMV2YV7OP",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "247",
    title: "Create Engaging Social Posts with Buffer",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "XJE9KDUV84MB",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "248",
    title: "Build a Marketing Funnel using Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "R45DKLSUQW4A",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "249",
    title: "Use Zapier to Automate a Workflow",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "Z1DKLSUE3PLW",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "250",
    title: "Create a Job Tracker with Airtable",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "REWPLZKTD9PL",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "251",
    title: "Create a Data Dashboard using Power BI",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "POE9V2LWSL3K",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "252",
    title: "Develop and Deploy Serverless APIs on AWS",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KF3LPZV92MVX",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "253",
    title: "Getting Started with Kubernetes",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "YUIOPZXCVB34",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "254",
    title: "Deploy a Web App on Azure",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ASDF1234POIU",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "255",
    title: "Machine Learning with Python: Exploratory Data Analysis",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "DF34UIOPOIUY",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "256",
    title: "Analyze COVID-19 Impact with Data Studio",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LOP93WESD2ZS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "257",
    title: "Build an AI Chatbot with Dialogflow",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "XZCVBNMPOIU2",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "258",
    title: "Automate Daily Emails using Python",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LOPZK38DHG31",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "259",
    title: "Build a Time Tracker with Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NMXCV9282UUD",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "260",
    title: "Create a Newsletter System with Mailchimp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "OIPLMN394KXS",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "261",
    title: "Create a Mind Map using Coggle",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ZMNPOIU834KL",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "262",
    title: "Build a Blogging Site using Ghost CMS",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PLKJHGZX234T",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "263",
    title: "Run a Survey using Typeform",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LMZXC09876OK",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "264",
    title: "Build REST APIs using Flask",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "DFG89PLKJHGF",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "265",
    title: "Build an Employee Directory App",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KLOIUYTREWQ9",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "266",
    title: "Build a Quiz App with HTML/CSS/JS",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NBGKLOIUYT89",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "267",
    title: "Implement JWT Authentication in Node.js",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "QWER2345TYUI",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "268",
    title: "Create Charts using Chart.js",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "XCVBNM98345U",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "269",
    title: "Getting Started with GraphQL",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "DFG0987UJHGG",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "270",
    title: "Build a Portfolio with Bootstrap",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LKJHGF2345YH",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "271",
    title: "Create API Documentation using Swagger",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SWAGGERDOC271",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "272",
    title: "Create a RESTful API using Node.js and Express",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NODEAPI272",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "273",
    title: "Create a Portfolio Website using HTML & CSS",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PORTHTMLCSS273",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "274",
    title: "Implement Authentication using Firebase",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "FIREAUTH274",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "275",
    title: "Create a Blogging App using React",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "REACTBLOG275",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "276",
    title: "Deploy Your App with Vercel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "VERCELDEPLOY276",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "277",
    title: "Host Static Website on GitHub Pages",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "GHPAGES277",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "278",
    title: "Create Google Sheet Based Inventory Tracker",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SHEETINV278",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "279",
    title: "Automate Reports using Python Pandas",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PYREPS279",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "280",
    title: "Build a Resume Website in Bootstrap",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "BOOTRES280",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "281",
    title: "Create a Professional Email Signature in Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CANVASIGN281",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "282",
    title: "Create Data Entry Forms with Microsoft Forms",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MSFORM282",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "283",
    title: "Use Google Keep for Personal Productivity",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "KEEPNOTE283",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "284",
    title: "Getting Started with Microsoft OneNote",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ONENOTE284",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "285",
    title: "Project Management with Trello Basics",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TRELLOPM285",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "286",
    title: "Create a Student Portfolio Site using Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NOTIONPORT286",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "287",
    title: "Advanced Slides Design in PowerPoint",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PPTSLIDE287",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "288",
    title: "Workplace Collaboration using Slack",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SLACKCOLLAB288",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "289",
    title: "Team Communication with Discord for Devs",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "DISCORDTEAM289",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "290",
    title: "Create Task Automation with IFTTT",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "IFTTTAUTO290",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "291",
    title: "Create a Habit Tracker in Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NOTIONHABIT291",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "292",
    title: "Build a Landing Page with Carrd",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CARRDLAND292",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "293",
    title: "Design a Minimal CV Template using Figma",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "FIGMACV293",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "294",
    title: "Build a Journal App with JavaScript",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "JSJOURNAL294",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "295",
    title: "Getting Started with OpenAI API",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "OPENAIAPI295",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "296",
    title: "Use Midjourney for AI Visuals",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MIDJVIS296",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "297",
    title: "Build a Meme Generator in HTML + JS",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MEMEBUILD297",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "298",
    title: "Create Dynamic Forms using Typeform",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TYPEFORMS298",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "299",
    title: "Design Email Campaigns using Mailchimp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MAILCHIMP299",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "300",
    title: "Use Canva to Create a Poster Campaign",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CANVAPOST300",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "301",
    title: "Build Social Media Strategy using Buffer",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "BUFFER301",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "302",
    title: "Create Instagram Reels Campaign with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "REELSCANVA302",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "303",
    title: "Build Brand Identity with Color Theory",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "COLORBRAND303",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "304",
    title: "Create YouTube Thumbnail Templates with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "YTCANVA304",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "305",
    title: "Design E-book Layout using Adobe Express",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "EBOOKLAYOUT305",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "306",
    title: "Master Personal Branding on LinkedIn",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LINKBRAND306",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "307",
    title: "Automate LinkedIn Posting using Zapier",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ZAPIERLINK307",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "308",
    title: "Create SEO Audit Report using SEMrush",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SEMAUDIT308",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "309",
    title: "Build Landing Pages that Convert",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LANDING309",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "310",
    title: "Create Lead Magnets with Google Docs",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LEADMAGDOC310",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "311",
    title: "Visualize Sales Funnel with Lucidchart",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SALESFUN311",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "312",
    title: "Design Infographics using Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "INFOGRAPH312",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "313",
    title: "Automate Content Calendar using Airtable",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AIRCAL313",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "314",
    title: "Create Animated Presentations in Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ANIMCAN314",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "315",
    title: "Build a Personal Portfolio with Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NOTIONPORT315",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "316",
    title: "Design Professional Newsletters with Mailchimp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MCNEWS316",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "317",
    title: "Create Event Promo Videos using Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "EVENTCAN317",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "318",
    title: "Build a Logo using Looka AI",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LOOKALOGO318",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "319",
    title: "Create Product Hunt Launch Plan",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PHPLAN319",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "320",
    title: "Generate Business Names using AI Tools",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AIBNAME320",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "321",
    title: "Create a Pitch Video using Descript",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "DESCRIPT321",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "322",
    title: "Build a Product Page using Webflow",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "WEBFLOW322",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "323",
    title: "Design Ads for Instagram with Adobe Spark",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ADSPARK323",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "324",
    title: "Track Ads Campaigns in Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ADTRACK324",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "325",
    title: "Create a Social Proof Strategy for SaaS",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SOCIALSAAS325",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "326",
    title: "Use AIDA Formula in Copywriting",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AIDACOPY326",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "327",
    title: "Use ChatGPT for SEO Blogs",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "GPTSEO327",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "328",
    title: "Design Client Proposals in Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CLIENTCANVA328",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "329",
    title: "Build a Launch Checklist using Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NOTIONCHECK329",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "330",
    title: "Design Promotional Posters with Fotor",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "FOTORPOST330",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "331",
    title: "Mastering Email Marketing Funnels",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "EMAILFUNNEL331",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "332",
    title: "Create Product Mockups with Smartmockups",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SMARTMOCK332",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "333",
    title: "Create Twitter Carousels for Tech Brands",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TWEETCARO333",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "334",
    title: "Design Email Signatures with Wisestamp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "EMAILSIGN334",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "335",
    title: "Create GIF Ads with Photoshop",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "GIFAD335",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "336",
    title: "Build a Sales Page with Carrd",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CARRDSPAGE336",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "337",
    title: "Create Lead Forms with Typeform",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TYPEFORMLEAD337",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "338",
    title: "Write Cold Emails for Freelance Clients",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "COLDMAIL338",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "339",
    title: "Design Pitch Decks with Beautiful.ai",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "BEAUTIFULDECK339",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "340",
    title: "Automate Welcome Emails with ConvertKit",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "WELCOMEEMAIL340",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "341",
    title: "Build an Online Course on Teachable",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TEACHABLE341",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "342",
    title: "Create Facebook Ads with Meta Business Suite",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "FBADS342",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "343",
    title: "Write a Blog using SurferSEO & Jasper",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "BLOGAI343",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "344",
    title: "Design Coupon Campaigns in Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "COUPONCANVA344",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "345",
    title: "Create Case Study Templates in Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NOTIONCASE345",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "346",
    title: "Build Service Pages with WordPress",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SERVICEWP346",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "347",
    title: "Create Daily Posting Calendar with Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "POSTCALENDAR347",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "348",
    title: "Design Certificate Templates in Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CERTCANVA348",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "349",
    title: "Automate Portfolio Submissions using Zapier",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PORTFZAPIER349",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "350",
    title: "Create a Freelancer Rate Calculator in Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "RATECALC350",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "351",
    title: "Build Cold Outreach Template Bank in Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "COLDNOTION351",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "352",
    title: "Create PDF Pitch Decks using Visme",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "VISMEPDF352",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "353",
    title: "Create UTM Tracking Links for Campaigns",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "UTMTRACK353",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "354",
    title: "Design Google Ads Banners using Figma",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "FIGAD354",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "355",
    title: "Build Testimonial Highlights for Web",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TESTHIGHLIGHT355",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "356",
    title: "Generate Visual Reports with Canva Docs",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CANVADOCS356",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "357",
    title: "Create YouTube Banners using Snappa",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SNAPPAYOUTUBE357",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "358",
    title: "Design Slides for Elevator Pitches",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PITCHSLIDE358",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "359",
    title: "Create Highlight Covers for Instagram",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "INSTAHL359",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "360",
    title: "Build AI-generated Voiceovers for Videos",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "VOICEAI360",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "361",
    title: "Design Product Launch Announcements",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PRODLAUNCH361",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "362",
    title: "Create AI Blog Thumbnails in Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AICANVABLOG362",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "363",
    title: "Build Productivity Dashboards in Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NOTIONPROD363",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "364",
    title: "Create Timeline Animations in PowerPoint",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TIMELINEPPT364",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "365",
    title: "Design Tech Posters for College Fests",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TECHPOSTER365",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "366",
    title: "Build Digital Business Cards with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "DIGIBIZCARD366",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "367",
    title: "Create Mobile Ad Mockups with Smartmockups",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MOBMOCK367",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "368",
    title: "Design Workshop Certificates in Figma",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "WORKFIGMA368",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "369",
    title: "Automate Responses in WhatsApp Business",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "WABAUTO369",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "370",
    title: "Create UX Research Docs in Google Docs",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "UXRESEARCH370",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "371",
    title: "Build AI Avatar Videos with Synthesia",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AIAVATAR371",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "372",
    title: "Design Email Headers for Campaigns",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "EMAILHEADER372",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "373",
    title: "Create Pricing Tables in HTML & CSS",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PRICETABLE373",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "374",
    title: "Develop a Product Hunt Launch Strategy",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PHLAUNCH374",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "375",
    title: "Design Posters for Hackathons",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "HACKPOSTER375",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "376",
    title: "Create UX Feedback Forms in Google Forms",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "UXFORM376",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "377",
    title: "Build Job Application Dashboards in Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "JOBDASH377",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "378",
    title: "Design Custom Google Chrome Extensions",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CHROMEEXT378",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "379",
    title: "Create Presentation Animations in Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CANVAANIM379",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "380",
    title: "Automate Data Entry using Power Automate",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AUTODATA380",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "381",
    title: "Create Social Proof Banners in HTML",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "PROOFBANNER381",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "382",
    title: "Design Customer Review Graphics in Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "REVIEWGRAPHIC382",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "383",
    title: "Create Tech Job Portfolios in Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TECHPORT383",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "384",
    title: "Build Survey Dashboards using Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SURVEYDASH384",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "385",
    title: "Design Mock Interview Templates",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MOCKTEMP385",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "386",
    title: "Create Email Sign-Up Widgets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "SIGNUPWIDGET386",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "387",
    title: "Build Alumni Portals using WordPress",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ALUMNIWP387",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "388",
    title: "Design Interactive Quizzes in Typeform",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TYPEQUIZ388",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "389",
    title: "Create Developer Portfolio with React",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "REACTPORT389",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "390",
    title: "Build Product Waitlist Pages",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "WAITLIST390",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "391",
    title: "Create AI Business Strategy Deck",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AIBIZ391",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "392",
    title: "Design Professional Logos with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LOGOCANVA392",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "393",
    title: "Build Productivity Workflows in Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "NOTIONWORK393",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "394",
    title: "Create Digital Badges in Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "BADGECANVA394",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "395",
    title: "Automate Lead Capture with Zapier",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "ZAPIERLEAD395",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "396",
    title: "Develop AI Persona Templates",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AIPERSONA396",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "397",
    title: "Build a Campaign Dashboard in Trello",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "TRELLOCAMPAIGN397",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "398",
    title: "Create AI Cover Letter Templates",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AICOVER398",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "399",
    title: "Design Explainer Graphics for Startups",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "STARTEXPLAIN399",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "400",
    title: "Create AI Chatbot Personas",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CHATBOT400",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "401",
    title: "Build an Internship Tracker in Excel",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "INTERNSHIP401",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "402",
    title: "Create Visual Dashboards with Canva",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "VISUALDASH402",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "403",
    title: "Design Product Feedback Boards",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "FEEDBACK403",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "404",
    title: "Automate Job Application Flow with Power Automate",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "JOBSPOWER404",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "405",
    title: "Build a Newsletter Signup Page with Mailchimp",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MAILNEWS405",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "406",
    title: "Create Hackathon Schedules in Google Sheets",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "HACKSCHED406",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "407",
    title: "Build a Startup Roadmap in Miro",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MIROROADMAP407",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "408",
    title: "Design a Portfolio Case Study Page",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CASESTUDY408",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "409",
    title: "Automate Club Event Attendance Reports",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "EVENTREPORT409",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "410",
    title: "Create Student Registration Forms in Airtable",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "AIRTABLE410",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "411",
    title: "Design a Gamified Quiz App UI in Figma",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "GAMIFYUI411",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "412",
    title: "Create an Investor Pitch One-Pager",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "INVESTORPITCH412",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "413",
    title: "Build a Remote Job Board with Google Sites",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "REMOTEJOBSITE413",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "414",
    title: "Create Learning Track Dashboards",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "LEARNTRACK414",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "415",
    title: "Design Product Feedback Loops",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "FEEDBACKLOOP415",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "416",
    title: "Build a Multi-Language Resume Site",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "MULTIREZ416",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "417",
    title: "Create a College Event Feedback System",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "EVENTSYS417",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "418",
    title: "Design EdTech App Wireframes in Figma",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "EDTECHFIGMA418",
    image: null,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "419",
    title: "Build a Coding Resources Hub in Notion",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "CODINGHUB419",
    image: null,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "420",
    title: "Use Canva to Create Desktop and Mobile-friendly Web Pages",
    issuer: "Coursera",
    date: "March 2025",
    credentialId: "8ULAP5KM83Y0",
    image: canvaWebImg,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  }
];

export const certificateCategories = [
  {
    name: "UI/UX & Software Development",
    certificates: [
      "Build Customizable Sales Presentation Graphics Using Canva",
      "Use Canva to Create Desktop and Mobile-friendly Web Pages",
      "Create Your UX Portfolio with Crevado",
      "Design a Pitch Deck with Canva",
      "Create Website Videos with Canva"
    ],
    keywords: globalKeywords.slice(0, 50)
  }
];