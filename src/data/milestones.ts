import { Calendar, Award, Code, GraduationCap, Users, BookOpen, Target, Lightbulb, Briefcase, Github, ExternalLink, Download, FileText, Link as LinkIcon, Certificate, Presentation, Folder } from 'lucide-react';

export interface Milestone {
  id: string;
  year: string;
  month: string;
  title: string;
  description: string;
  type: 'event' | 'achievement' | 'project' | 'campus ambassador' | 'contributor' | 'learning' | 'planning' | 'education';
  category: 'professional' | 'advanced' | 'intermediate' | 'beginner';
  tags: string[];
  icon: string;
  link?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'certificate' | 'document' | 'link' | 'portfolio' | 'code' | 'presentation';
  year: string;
  tags: string[];
  icon: string;
  url?: string;
  downloadUrl?: string;
}

export interface ProjectResource {
  id: string;
  title: string;
  description: string;
  category: 'professional' | 'advanced' | 'intermediate' | 'beginner';
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

// All milestones data
export const milestones: Milestone[] = [
  // 2025
  {
    id: 'ms-2025-001',
    year: '2025',
    month: 'June',
    title: 'OpenAI Academy Launch at The Oberoi, Delhi',
    description: 'Attended the prestigious OpenAI Academy launch event at The Oberoi, New Delhi, focusing on Future Skills for India in collaboration with IndiaAI and MeitY.',
    type: 'event',
    category: 'professional',
    tags: ['OpenAI', 'AI', 'Academy', 'Delhi', 'IndiaAI', 'MeitY'],
    icon: '🚀',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_openaiacademy-indiaai-meity-activity-7336473782242414592-QOtx'
  },
  {
    id: 'ms-2025-002',
    year: '2025',
    month: 'June',
    title: 'Selected as SSOC Season 4 Contributor',
    description: 'Selected as a contributor for Social Summer of Code (SSOC) Season 4, contributing to open-source projects and community development.',
    type: 'achievement',
    category: 'professional',
    tags: ['SSOC', 'Open Source', 'Contributor', 'Community'],
    icon: '🏆'
  },
  {
    id: 'ms-2025-003',
    year: '2025',
    month: 'May',
    title: 'AICamp Meetup at Tata 1mg, Gurugram',
    description: 'Participated in AICamp Meetup at Tata 1mg, Gurugram, focusing on GenAI, community building, and hands-on AI workshops.',
    type: 'event',
    category: 'professional',
    tags: ['AI', 'GenAI', 'Meetup', 'Tata 1mg', 'Gurugram', 'Community'],
    icon: '🤖',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_aicamp-futurewithai-genai-activity-7335668379482826753-uZMs'
  },
  {
    id: 'ms-2025-004',
    year: '2025',
    month: 'January',
    title: 'Agrilearn AI Portfolio Launch',
    description: 'Successfully launched the Agrilearn AI portfolio showcasing agricultural technology solutions and AI implementations.',
    type: 'achievement',
    category: 'professional',
    tags: ['Portfolio', 'Agriculture', 'AI', 'Launch', 'Technology'],
    icon: '🌱'
  },
  {
    id: 'ms-2025-005',
    year: '2025',
    month: 'January',
    title: 'Shared 100+ Projects Publicly',
    description: 'Achieved the milestone of sharing over 100 projects publicly on GitHub and other platforms, contributing to the open-source community.',
    type: 'achievement',
    category: 'professional',
    tags: ['Open Source', 'GitHub', 'Projects', 'Community', 'Milestone'],
    icon: '💯'
  },

  // 2024
  {
    id: 'ms-2024-001',
    year: '2024',
    month: 'December',
    title: 'Personal Dev Blog Started',
    description: 'Launched a personal development blog to share insights, tutorials, and experiences in software development.',
    type: 'achievement',
    category: 'professional',
    tags: ['Blog', 'Writing', 'Development', 'Sharing', 'Community'],
    icon: '📝'
  },
  {
    id: 'ms-2024-002',
    year: '2024',
    month: 'September',
    title: 'Started B.Tech at GL Bajaj',
    description: 'Began Bachelor of Technology in Computer Science and Engineering at GL Bajaj Group of Institutions.',
    type: 'education',
    category: 'professional',
    tags: ['Education', 'B.Tech', 'Computer Science', 'GL Bajaj'],
    icon: '🎓'
  },

  // 2023
  {
    id: 'ms-2023-001',
    year: '2023',
    month: 'March',
    title: 'Completed Class 12',
    description: 'Successfully completed Higher Secondary Education (Class 12) with 66% from Delhi Public School, Madhubani.',
    type: 'achievement',
    category: 'professional',
    tags: ['Education', 'Class 12', 'DPS', 'Achievement'],
    icon: '🎓'
  },

  // 2020
  {
    id: 'ms-2020-001',
    year: '2020',
    month: 'May',
    title: 'Passed Class 10 – 91%',
    description: 'Achieved excellent results in Class 10 board examinations with 91% marks from Delhi Public School, Madhubani.',
    type: 'achievement',
    category: 'professional',
    tags: ['Education', 'Class 10', 'DPS', 'Excellence', '91%'],
    icon: '🏆'
  },
  {
    id: 'ms-2020-002',
    year: '2020',
    month: 'May',
    title: 'Learned Python Basics',
    description: 'Started learning Python programming language fundamentals, marking the beginning of my coding journey.',
    type: 'learning',
    category: 'beginner',
    tags: ['Python', 'Programming', 'Learning', 'Basics', 'Coding'],
    icon: '🐍'
  }
];

// All project resources for the Resource Vault
export const projectResources: ProjectResource[] = [
  {
    id: 'pr-001',
    title: 'Advanced Dashboard UI',
    description: 'Sophisticated dashboard UI with data visualization and real-time updates',
    category: 'advanced',
    tags: ['React', 'Dashboard', 'UI/UX', 'Data Visualization'],
    githubUrl: 'https://github.com/Brajesh31/advanced-dashboard'
  },
  {
    id: 'pr-002',
    title: 'AgroTech - Smart Farming Platform',
    description: 'Smart farming platform with IoT integration and agricultural analytics',
    category: 'advanced',
    tags: ['IoT', 'Agriculture', 'Analytics', 'Full Stack'],
    githubUrl: 'https://github.com/Brajesh31/agrotech'
  },
  {
    id: 'pr-003',
    title: 'AI-Powered Resume Evaluator',
    description: 'AI system for analyzing and scoring resumes with detailed feedback',
    category: 'advanced',
    tags: ['AI', 'Machine Learning', 'NLP', 'Python'],
    githubUrl: 'https://github.com/Brajesh31/resume-evaluator'
  },
  {
    id: 'pr-004',
    title: 'Alarm + Timer Combo',
    description: 'Combined alarm clock and timer application with GUI',
    category: 'beginner',
    tags: ['Python', 'Tkinter', 'GUI', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/alarm-timer'
  },
  {
    id: 'pr-005',
    title: 'Attendance App - Java',
    description: 'Java-based attendance management system for educational institutions',
    category: 'intermediate',
    tags: ['Java', 'Swing', 'Database', 'Management'],
    githubUrl: 'https://github.com/Brajesh31/attendance-app'
  },
  {
    id: 'pr-006',
    title: 'Basic CMS with Markdown',
    description: 'Content management system with markdown support',
    category: 'intermediate',
    tags: ['CMS', 'Markdown', 'Web', 'Content'],
    githubUrl: 'https://github.com/Brajesh31/basic-cms'
  },
  {
    id: 'pr-007',
    title: 'Blog CMS - Flask CRUD',
    description: 'Flask-based blog content management system with CRUD operations',
    category: 'intermediate',
    tags: ['Flask', 'Python', 'CRUD', 'Blog'],
    githubUrl: 'https://github.com/Brajesh31/blog-cms'
  },
  {
    id: 'pr-008',
    title: 'BMI Calculator CLI',
    description: 'Command-line BMI calculator with health recommendations',
    category: 'beginner',
    tags: ['Python', 'CLI', 'Health', 'Calculator'],
    githubUrl: 'https://github.com/Brajesh31/bmi-calculator'
  },
  {
    id: 'pr-009',
    title: 'BMI Chart Plotter - matplotlib',
    description: 'BMI visualization tool using matplotlib for data plotting',
    category: 'beginner',
    tags: ['Python', 'matplotlib', 'Visualization', 'Health'],
    githubUrl: 'https://github.com/Brajesh31/bmi-plotter'
  },
  {
    id: 'pr-010',
    title: 'BMI Visual GUI - Tkinter',
    description: 'Graphical BMI calculator with visual interface using Tkinter',
    category: 'intermediate',
    tags: ['Python', 'Tkinter', 'GUI', 'Health'],
    githubUrl: 'https://github.com/Brajesh31/bmi-gui'
  },
  {
    id: 'pr-011',
    title: 'Calculator - Arithmetic',
    description: 'Basic arithmetic calculator with standard operations',
    category: 'beginner',
    tags: ['Python', 'Calculator', 'Math', 'Basic'],
    githubUrl: 'https://github.com/Brajesh31/calculator'
  },
  {
    id: 'pr-012',
    title: "Cap'nShare - Food Sharing App",
    description: 'Food sharing application to reduce waste and help communities',
    category: 'advanced',
    tags: ['React Native', 'Social Impact', 'Community', 'Mobile'],
    githubUrl: 'https://github.com/Brajesh31/capnshare'
  },
  {
    id: 'pr-013',
    title: 'Career Mapper',
    description: 'Platform for career guidance and skill development tracking',
    category: 'advanced',
    tags: ['React', 'Career', 'Skills', 'Guidance'],
    githubUrl: 'https://github.com/Brajesh31/career-mapper'
  },
  {
    id: 'pr-014',
    title: 'ChatterBox - Real-Time Chat App',
    description: 'Real-time chat application with WebSocket integration',
    category: 'advanced',
    tags: ['WebSocket', 'Real-time', 'Chat', 'Communication'],
    githubUrl: 'https://github.com/Brajesh31/chatterbox'
  },
  {
    id: 'pr-015',
    title: 'CLI Chat App with Sockets',
    description: 'Command-line chat application using socket programming',
    category: 'intermediate',
    tags: ['Python', 'Sockets', 'CLI', 'Networking'],
    githubUrl: 'https://github.com/Brajesh31/cli-chat'
  },
  {
    id: 'pr-016',
    title: 'CLI Project Launcher',
    description: 'Command-line tool for quickly launching development projects',
    category: 'intermediate',
    tags: ['CLI', 'Node.js', 'Tool', 'Productivity'],
    githubUrl: 'https://github.com/Brajesh31/cli-launcher'
  },
  {
    id: 'pr-017',
    title: 'Color Picker + Code Converter',
    description: 'Tool for picking colors and converting between color formats',
    category: 'beginner',
    tags: ['Python', 'GUI', 'Color', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/color-picker'
  },
  {
    id: 'pr-018',
    title: 'Contact Manager - CSV',
    description: 'Contact management system with CSV file storage',
    category: 'beginner',
    tags: ['Python', 'CSV', 'Management', 'Contacts'],
    githubUrl: 'https://github.com/Brajesh31/contact-manager'
  },
  {
    id: 'pr-019',
    title: 'CRUD CSV Student Manager',
    description: 'Student management system with CRUD operations on CSV files',
    category: 'intermediate',
    tags: ['Python', 'CRUD', 'CSV', 'Management'],
    githubUrl: 'https://github.com/Brajesh31/student-manager'
  },
  {
    id: 'pr-020',
    title: 'CSS UI Kit',
    description: 'Comprehensive CSS UI kit with reusable components',
    category: 'intermediate',
    tags: ['CSS', 'UI Kit', 'Components', 'Design'],
    githubUrl: 'https://github.com/Brajesh31/css-ui-kit'
  },
  {
    id: 'pr-021',
    title: 'Currency Converter - API',
    description: 'Currency converter using real-time exchange rate API',
    category: 'beginner',
    tags: ['Python', 'API', 'Currency', 'Finance'],
    githubUrl: 'https://github.com/Brajesh31/currency-converter'
  },
  {
    id: 'pr-022',
    title: 'Currency Converter GUI',
    description: 'Graphical currency converter with user-friendly interface',
    category: 'intermediate',
    tags: ['Python', 'Tkinter', 'GUI', 'Finance'],
    githubUrl: 'https://github.com/Brajesh31/currency-gui'
  },
  {
    id: 'pr-023',
    title: 'Dev Toolkit Vault',
    description: 'Comprehensive developer toolkit with essential tools and utilities',
    category: 'intermediate',
    tags: ['Tools', 'Utilities', 'Development', 'Productivity'],
    githubUrl: 'https://github.com/Brajesh31/dev-toolkit'
  },
  {
    id: 'pr-024',
    title: 'Dice Roller Simulator',
    description: 'Virtual dice rolling simulator with multiple dice support',
    category: 'beginner',
    tags: ['Python', 'Game', 'Simulation', 'Random'],
    githubUrl: 'https://github.com/Brajesh31/dice-roller'
  },
  {
    id: 'pr-025',
    title: 'Ella - AI Chat Companion',
    description: 'AI-powered chat companion with natural language processing',
    category: 'advanced',
    tags: ['AI', 'NLP', 'Chatbot', 'Machine Learning'],
    githubUrl: 'https://github.com/Brajesh31/ella'
  },
  {
    id: 'pr-026',
    title: 'Email + File Sender Combo Tool',
    description: 'Combined email and file sending utility tool',
    category: 'intermediate',
    tags: ['Python', 'Email', 'File Transfer', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/email-sender'
  },
  {
    id: 'pr-027',
    title: 'Email Sender - smtplib',
    description: 'Simple email sending application using Python smtplib',
    category: 'beginner',
    tags: ['Python', 'Email', 'SMTP', 'Communication'],
    githubUrl: 'https://github.com/Brajesh31/smtp-sender'
  },
  {
    id: 'pr-028',
    title: 'Emma – Personal Assistant',
    description: 'Smart command-line personal assistant for everyday digital tasks',
    category: 'advanced',
    tags: ['Python', 'AI', 'Assistant', 'Automation'],
    githubUrl: 'https://github.com/Brajesh31/emma'
  },
  {
    id: 'pr-029',
    title: 'Expense Tracker (Pie Charts)',
    description: 'Expense tracking application with pie chart visualizations',
    category: 'intermediate',
    tags: ['Python', 'Finance', 'Visualization', 'Charts'],
    githubUrl: 'https://github.com/Brajesh31/expense-tracker-charts'
  },
  {
    id: 'pr-030',
    title: 'Expense Tracker - React',
    description: 'React-based expense tracking application with modern UI',
    category: 'intermediate',
    tags: ['React', 'Finance', 'Frontend', 'Tracking'],
    githubUrl: 'https://github.com/Brajesh31/expense-tracker-react'
  },
  {
    id: 'pr-031',
    title: 'Face Blur Tool',
    description: 'Tool for automatically blurring faces in images for privacy',
    category: 'intermediate',
    tags: ['Python', 'OpenCV', 'Privacy', 'Image Processing'],
    githubUrl: 'https://github.com/Brajesh31/face-blur'
  },
  {
    id: 'pr-032',
    title: 'Face Detection GUI',
    description: 'Graphical interface for real-time face detection',
    category: 'intermediate',
    tags: ['Python', 'OpenCV', 'GUI', 'Computer Vision'],
    githubUrl: 'https://github.com/Brajesh31/face-detection-gui'
  },
  {
    id: 'pr-033',
    title: 'Face Recognition Dashboard',
    description: 'Comprehensive face recognition system with dashboard interface',
    category: 'advanced',
    tags: ['Python', 'OpenCV', 'Dashboard', 'Recognition'],
    githubUrl: 'https://github.com/Brajesh31/face-recognition-dashboard'
  },
  {
    id: 'pr-034',
    title: 'File Copier Script',
    description: 'Automated file copying script with batch processing',
    category: 'beginner',
    tags: ['Python', 'File Management', 'Automation', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/file-copier'
  },
  {
    id: 'pr-035',
    title: 'File Encryptor (Fernet)',
    description: 'File encryption tool using Fernet symmetric encryption',
    category: 'intermediate',
    tags: ['Python', 'Encryption', 'Security', 'Fernet'],
    githubUrl: 'https://github.com/Brajesh31/file-encryptor'
  },
  {
    id: 'pr-036',
    title: 'File Organizer - Folder Sorter',
    description: 'Automated file organization tool for sorting files into folders',
    category: 'beginner',
    tags: ['Python', 'File Management', 'Organization', 'Automation'],
    githubUrl: 'https://github.com/Brajesh31/file-organizer'
  },
  {
    id: 'pr-037',
    title: 'Figma to HTML UI Clone',
    description: 'Pixel-perfect conversion of Figma designs to HTML/CSS',
    category: 'intermediate',
    tags: ['HTML', 'CSS', 'Figma', 'UI Clone'],
    githubUrl: 'https://github.com/Brajesh31/figma-html-clone'
  },
  {
    id: 'pr-038',
    title: 'Figma UI Kits',
    description: 'Collection of UI kits and design components in Figma',
    category: 'intermediate',
    tags: ['Figma', 'UI/UX', 'Design', 'Components'],
    githubUrl: 'https://github.com/Brajesh31/figma-ui-kits'
  },
  {
    id: 'pr-039',
    title: 'FitDeck - Fitness Platform',
    description: 'Comprehensive fitness platform with workout tracking and planning',
    category: 'advanced',
    tags: ['React', 'Fitness', 'Health', 'Tracking'],
    githubUrl: 'https://github.com/Brajesh31/fitdeck'
  },
  {
    id: 'pr-040',
    title: 'Fitness Tracker with Charts',
    description: 'Fitness tracking application with data visualization charts',
    category: 'intermediate',
    tags: ['React', 'Fitness', 'Charts', 'Tracking'],
    githubUrl: 'https://github.com/Brajesh31/fitness-tracker'
  },
  {
    id: 'pr-041',
    title: 'Flask Login/Signup',
    description: 'User authentication system built with Flask framework',
    category: 'intermediate',
    tags: ['Flask', 'Python', 'Authentication', 'Web'],
    githubUrl: 'https://github.com/Brajesh31/flask-auth'
  },
  {
    id: 'pr-042',
    title: 'Hangman Game',
    description: 'Classic hangman word guessing game with GUI',
    category: 'beginner',
    tags: ['Python', 'Game', 'GUI', 'Word Game'],
    githubUrl: 'https://github.com/Brajesh31/hangman'
  },
  {
    id: 'pr-043',
    title: 'Hotel Management System - C',
    description: 'Hotel management system built in C programming language',
    category: 'intermediate',
    tags: ['C', 'Management', 'System', 'Hotel'],
    githubUrl: 'https://github.com/Brajesh31/hotel-management'
  },
  {
    id: 'pr-044',
    title: 'HTML/CSS Blog Template',
    description: 'Responsive blog template using pure HTML and CSS',
    category: 'beginner',
    tags: ['HTML', 'CSS', 'Blog', 'Template'],
    githubUrl: 'https://github.com/Brajesh31/blog-template'
  },
  {
    id: 'pr-045',
    title: 'HTML/CSS Product Card Showcase',
    description: 'Product card showcase with modern CSS styling',
    category: 'beginner',
    tags: ['HTML', 'CSS', 'Product Cards', 'Showcase'],
    githubUrl: 'https://github.com/Brajesh31/product-cards'
  },
  {
    id: 'pr-046',
    title: 'Image Filter App',
    description: 'Image filtering application with various filter effects',
    category: 'intermediate',
    tags: ['Python', 'Image Processing', 'Filters', 'PIL'],
    githubUrl: 'https://github.com/Brajesh31/image-filter'
  },
  {
    id: 'pr-047',
    title: 'Image Resizer - PIL',
    description: 'Batch image resizing tool using Python PIL library',
    category: 'beginner',
    tags: ['Python', 'PIL', 'Image Processing', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/image-resizer'
  },
  {
    id: 'pr-048',
    title: 'Inventory Management System',
    description: 'Comprehensive inventory management with CRUD operations',
    category: 'advanced',
    tags: ['Full Stack', 'CRUD', 'Management', 'Database'],
    githubUrl: 'https://github.com/Brajesh31/inventory-management'
  },
  {
    id: 'pr-049',
    title: 'Java Billing Application',
    description: 'Desktop billing application with invoice generation',
    category: 'intermediate',
    tags: ['Java', 'Swing', 'Billing', 'Desktop'],
    githubUrl: 'https://github.com/Brajesh31/java-billing'
  },
  {
    id: 'pr-050',
    title: 'Java Calculator - Swing',
    description: 'Calculator application built with Java Swing GUI',
    category: 'beginner',
    tags: ['Java', 'Swing', 'Calculator', 'GUI'],
    githubUrl: 'https://github.com/Brajesh31/java-calculator'
  },
  {
    id: 'pr-051',
    title: 'Java Quiz System',
    description: 'Interactive quiz system built with Java',
    category: 'intermediate',
    tags: ['Java', 'Quiz', 'Education', 'Interactive'],
    githubUrl: 'https://github.com/Brajesh31/java-quiz'
  },
  {
    id: 'pr-052',
    title: 'JWT Authentication System',
    description: 'Secure JWT-based authentication with role-based access',
    category: 'advanced',
    tags: ['JWT', 'Authentication', 'Security', 'Backend'],
    githubUrl: 'https://github.com/Brajesh31/jwt-auth'
  },
  {
    id: 'pr-053',
    title: 'Light/Dark Theme Toggle UI',
    description: 'UI component for switching between light and dark themes',
    category: 'beginner',
    tags: ['CSS', 'JavaScript', 'Theme', 'UI'],
    githubUrl: 'https://github.com/Brajesh31/theme-toggle'
  },
  {
    id: 'pr-054',
    title: 'Login Auth Flow (React + Firebase)',
    description: 'Complete authentication flow using React and Firebase',
    category: 'intermediate',
    tags: ['React', 'Firebase', 'Authentication', 'Frontend'],
    githubUrl: 'https://github.com/Brajesh31/react-firebase-auth'
  },
  {
    id: 'pr-055',
    title: 'Login/Auth UI Kit',
    description: 'UI kit for login and authentication interfaces',
    category: 'intermediate',
    tags: ['UI/UX', 'Authentication', 'Design', 'Kit'],
    githubUrl: 'https://github.com/Brajesh31/auth-ui-kit'
  },
  {
    id: 'pr-056',
    title: 'Login Page - HTML/CSS',
    description: 'Responsive login page design using HTML and CSS',
    category: 'beginner',
    tags: ['HTML', 'CSS', 'Login', 'Responsive'],
    githubUrl: 'https://github.com/Brajesh31/login-page'
  },
  {
    id: 'pr-057',
    title: 'Machine Learning Form UI',
    description: 'User interface for machine learning model interactions',
    category: 'intermediate',
    tags: ['ML', 'UI/UX', 'Forms', 'Interface'],
    githubUrl: 'https://github.com/Brajesh31/ml-form-ui'
  },
  {
    id: 'pr-058',
    title: 'Mad Libs Generator',
    description: 'Interactive mad libs word game generator',
    category: 'beginner',
    tags: ['Python', 'Game', 'Text', 'Interactive'],
    githubUrl: 'https://github.com/Brajesh31/mad-libs'
  },
  {
    id: 'pr-059',
    title: 'Mathematrix',
    description: 'Interactive learning platform for multiplication tables',
    category: 'intermediate',
    tags: ['Education', 'Math', 'Interactive', 'Learning'],
    githubUrl: 'https://github.com/Brajesh31/mathematrix'
  },
  {
    id: 'pr-060',
    title: 'Memory Game - HTML/JS',
    description: 'Memory matching game built with HTML and JavaScript',
    category: 'beginner',
    tags: ['HTML', 'JavaScript', 'Game', 'Memory'],
    githubUrl: 'https://github.com/Brajesh31/memory-game'
  },
  {
    id: 'pr-061',
    title: 'Mentorship Cards UI Concept',
    description: 'Modern UI concept for mentorship platform cards',
    category: 'advanced',
    tags: ['UI/UX', 'Design', 'Mentorship', 'Concept'],
    githubUrl: 'https://github.com/Brajesh31/mentorship-cards'
  },
  {
    id: 'pr-062',
    title: 'Mini Banking System - Java',
    description: 'Simple banking system simulation in Java',
    category: 'intermediate',
    tags: ['Java', 'Banking', 'System', 'Simulation'],
    githubUrl: 'https://github.com/Brajesh31/mini-banking'
  },
  {
    id: 'pr-063',
    title: 'Mobile Forms UI Mockups',
    description: 'Mobile-optimized form UI mockups and designs',
    category: 'intermediate',
    tags: ['Mobile', 'UI/UX', 'Forms', 'Mockups'],
    githubUrl: 'https://github.com/Brajesh31/mobile-forms'
  },
  {
    id: 'pr-064',
    title: 'Mood Tracker UI Design',
    description: 'User interface design for mood tracking application',
    category: 'intermediate',
    tags: ['UI/UX', 'Design', 'Health', 'Tracking'],
    githubUrl: 'https://github.com/Brajesh31/mood-tracker'
  },
  {
    id: 'pr-065',
    title: 'Movie Recommender System',
    description: 'Intelligent movie recommendation using machine learning',
    category: 'advanced',
    tags: ['Machine Learning', 'Recommendation', 'Python', 'Movies'],
    githubUrl: 'https://github.com/Brajesh31/movie-recommender'
  },
  {
    id: 'pr-066',
    title: 'Music Visualizer',
    description: 'Audio visualization tool with real-time graphics',
    category: 'intermediate',
    tags: ['Audio', 'Visualization', 'Graphics', 'Real-time'],
    githubUrl: 'https://github.com/Brajesh31/music-visualizer'
  },
  {
    id: 'pr-067',
    title: 'News API Reader CLI',
    description: 'Command-line news reader using news API',
    category: 'beginner',
    tags: ['Python', 'API', 'CLI', 'News'],
    githubUrl: 'https://github.com/Brajesh31/news-reader'
  },
  {
    id: 'pr-068',
    title: 'NLP Chatbot with TensorFlow',
    description: 'Advanced NLP chatbot using TensorFlow framework',
    category: 'advanced',
    tags: ['NLP', 'TensorFlow', 'Chatbot', 'AI'],
    githubUrl: 'https://github.com/Brajesh31/nlp-chatbot'
  },
  {
    id: 'pr-069',
    title: 'Notes App - JS LocalStorage',
    description: 'Note-taking app using JavaScript and local storage',
    category: 'beginner',
    tags: ['JavaScript', 'LocalStorage', 'Notes', 'Web'],
    githubUrl: 'https://github.com/Brajesh31/notes-app'
  },
  {
    id: 'pr-070',
    title: 'Number Guessing Game',
    description: 'Interactive number guessing game with hints',
    category: 'beginner',
    tags: ['Python', 'Game', 'Interactive', 'Logic'],
    githubUrl: 'https://github.com/Brajesh31/number-guessing'
  },
  {
    id: 'pr-071',
    title: 'OpenAI Prompt Writer Tool',
    description: 'Tool for writing and optimizing OpenAI prompts',
    category: 'advanced',
    tags: ['OpenAI', 'AI', 'Prompts', 'Tool'],
    githubUrl: 'https://github.com/Brajesh31/prompt-writer'
  },
  {
    id: 'pr-072',
    title: 'Password Generator',
    description: 'Secure password generator with customizable options',
    category: 'beginner',
    tags: ['Python', 'Security', 'Password', 'Generator'],
    githubUrl: 'https://github.com/Brajesh31/password-generator'
  },
  {
    id: 'pr-073',
    title: 'Portfolio Page + Download Resume',
    description: 'Personal portfolio page with resume download feature',
    category: 'beginner',
    tags: ['HTML', 'CSS', 'Portfolio', 'Resume'],
    githubUrl: 'https://github.com/Brajesh31/portfolio-v1'
  },
  {
    id: 'pr-074',
    title: 'Portfolio v2 - Multiple Sections',
    description: 'Enhanced portfolio with multiple sections and features',
    category: 'intermediate',
    tags: ['HTML', 'CSS', 'JavaScript', 'Portfolio'],
    githubUrl: 'https://github.com/Brajesh31/portfolio-v2'
  },
  {
    id: 'pr-075',
    title: 'Productivity Dashboard',
    description: 'Dashboard for tracking productivity and task management',
    category: 'intermediate',
    tags: ['Dashboard', 'Productivity', 'Task Management', 'Analytics'],
    githubUrl: 'https://github.com/Brajesh31/productivity-dashboard'
  },
  {
    id: 'pr-076',
    title: 'Quiz App - Python',
    description: 'Interactive quiz application built with Python',
    category: 'beginner',
    tags: ['Python', 'Quiz', 'Education', 'Interactive'],
    githubUrl: 'https://github.com/Brajesh31/quiz-app'
  },
  {
    id: 'pr-077',
    title: 'Recipe Finder App',
    description: 'Application for finding and managing recipes',
    category: 'beginner',
    tags: ['Python', 'Recipes', 'Food', 'Search'],
    githubUrl: 'https://github.com/Brajesh31/recipe-finder'
  },
  {
    id: 'pr-078',
    title: 'Registration Form - Flask',
    description: 'User registration form built with Flask framework',
    category: 'beginner',
    tags: ['Flask', 'Python', 'Forms', 'Registration'],
    githubUrl: 'https://github.com/Brajesh31/registration-form'
  },
  {
    id: 'pr-079',
    title: 'Restaurant Ordering UI',
    description: 'User interface for restaurant food ordering system',
    category: 'beginner',
    tags: ['UI/UX', 'Restaurant', 'Ordering', 'Design'],
    githubUrl: 'https://github.com/Brajesh31/restaurant-ui'
  },
  {
    id: 'pr-080',
    title: 'Resume Generator with HTML Export',
    description: 'Resume builder with HTML export functionality',
    category: 'intermediate',
    tags: ['Resume', 'Generator', 'HTML', 'Export'],
    githubUrl: 'https://github.com/Brajesh31/resume-generator'
  },
  {
    id: 'pr-081',
    title: 'Resume Template - HTML',
    description: 'Professional resume template in HTML format',
    category: 'beginner',
    tags: ['HTML', 'CSS', 'Resume', 'Template'],
    githubUrl: 'https://github.com/Brajesh31/resume-template'
  },
  {
    id: 'pr-082',
    title: 'Roadmap Planner Web App',
    description: 'Web application for planning learning and career roadmaps',
    category: 'intermediate',
    tags: ['Web App', 'Planning', 'Roadmap', 'Career'],
    githubUrl: 'https://github.com/Brajesh31/roadmap-planner'
  },
  {
    id: 'pr-083',
    title: 'Rock Paper Scissors - Console',
    description: 'Console-based rock paper scissors game',
    category: 'beginner',
    tags: ['Python', 'Game', 'Console', 'Logic'],
    githubUrl: 'https://github.com/Brajesh31/rps-console'
  },
  {
    id: 'pr-084',
    title: 'Rock Paper Scissors GUI',
    description: 'Rock paper scissors game with graphical interface',
    category: 'beginner',
    tags: ['Python', 'Tkinter', 'Game', 'GUI'],
    githubUrl: 'https://github.com/Brajesh31/rps-gui'
  },
  {
    id: 'pr-085',
    title: 'Screenshot App - GUI',
    description: 'Screenshot capture application with GUI interface',
    category: 'intermediate',
    tags: ['Python', 'Screenshot', 'GUI', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/screenshot-app'
  },
  {
    id: 'pr-086',
    title: 'Screenshot Tool - pyautogui',
    description: 'Automated screenshot tool using pyautogui library',
    category: 'beginner',
    tags: ['Python', 'pyautogui', 'Screenshot', 'Automation'],
    githubUrl: 'https://github.com/Brajesh31/screenshot-tool'
  },
  {
    id: 'pr-087',
    title: 'SEMAC - College ML Utility App',
    description: 'College utility app with machine learning features',
    category: 'advanced',
    tags: ['ML', 'College', 'Utility', 'Full Stack'],
    githubUrl: 'https://github.com/Brajesh31/semac'
  },
  {
    id: 'pr-088',
    title: 'Simple Alarm Clock',
    description: 'Basic alarm clock application with time setting',
    category: 'beginner',
    tags: ['Python', 'Alarm', 'Time', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/alarm-clock'
  },
  {
    id: 'pr-089',
    title: 'Single-Page Resume Website',
    description: 'Single-page resume website with modern design',
    category: 'beginner',
    tags: ['HTML', 'CSS', 'Resume', 'Single Page'],
    githubUrl: 'https://github.com/Brajesh31/resume-website'
  },
  {
    id: 'pr-090',
    title: 'Snake Game - Pygame',
    description: 'Classic snake game implemented using Pygame',
    category: 'intermediate',
    tags: ['Python', 'Pygame', 'Game', 'Classic'],
    githubUrl: 'https://github.com/Brajesh31/snake-game'
  },
  {
    id: 'pr-091',
    title: 'Stopwatch + Countdown Combo',
    description: 'Combined stopwatch and countdown timer application',
    category: 'beginner',
    tags: ['Python', 'Timer', 'Stopwatch', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/timer-combo'
  },
  {
    id: 'pr-092',
    title: 'Stopwatch - Tkinter',
    description: 'Stopwatch application built with Tkinter GUI',
    category: 'beginner',
    tags: ['Python', 'Tkinter', 'Stopwatch', 'GUI'],
    githubUrl: 'https://github.com/Brajesh31/stopwatch'
  },
  {
    id: 'pr-093',
    title: 'Student Grade Tracker',
    description: 'Application for tracking and managing student grades',
    category: 'intermediate',
    tags: ['Python', 'Education', 'Grades', 'Tracking'],
    githubUrl: 'https://github.com/Brajesh31/grade-tracker'
  },
  {
    id: 'pr-094',
    title: 'Survey Creator Tool',
    description: 'Tool for creating and managing surveys and forms',
    category: 'intermediate',
    tags: ['Survey', 'Forms', 'Creator', 'Tool'],
    githubUrl: 'https://github.com/Brajesh31/survey-creator'
  },
  {
    id: 'pr-095',
    title: 'Task Scheduler',
    description: 'Task scheduling and management application',
    category: 'intermediate',
    tags: ['Task Management', 'Scheduler', 'Productivity', 'Organization'],
    githubUrl: 'https://github.com/Brajesh31/task-scheduler'
  },
  {
    id: 'pr-096',
    title: 'Text File Analyzer',
    description: 'Tool for analyzing text files and extracting statistics',
    category: 'beginner',
    tags: ['Python', 'Text Analysis', 'File Processing', 'Statistics'],
    githubUrl: 'https://github.com/Brajesh31/text-analyzer'
  },
  {
    id: 'pr-097',
    title: 'Thea – AI Therapist',
    description: 'AI-powered virtual mental health assistant',
    category: 'advanced',
    tags: ['AI', 'Mental Health', 'Therapy', 'NLP'],
    githubUrl: 'https://github.com/Brajesh31/thea'
  },
  {
    id: 'pr-098',
    title: 'The Knights of Flovora',
    description: '2D adventure RPG with quest-based progression',
    category: 'advanced',
    tags: ['Game Development', 'RPG', 'Flutter', 'Adventure'],
    githubUrl: 'https://github.com/Brajesh31/knights'
  },
  {
    id: 'pr-099',
    title: 'Timeline Page Launched',
    description: 'Interactive timeline page for showcasing milestones',
    category: 'intermediate',
    tags: ['Timeline', 'Interactive', 'Web', 'Portfolio'],
    githubUrl: 'https://github.com/Brajesh31/timeline-page'
  },
  {
    id: 'pr-100',
    title: 'Tip Calculator',
    description: 'Calculator for computing tips and bill splitting',
    category: 'beginner',
    tags: ['Python', 'Calculator', 'Finance', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/tip-calculator'
  },
  {
    id: 'pr-101',
    title: 'To-Do List - File-based',
    description: 'Simple to-do list application with file storage',
    category: 'beginner',
    tags: ['Python', 'To-Do', 'File Storage', 'Productivity'],
    githubUrl: 'https://github.com/Brajesh31/todo-list'
  },
  {
    id: 'pr-102',
    title: 'URL Shortener - Bitly API',
    description: 'URL shortening service using Bitly API integration',
    category: 'intermediate',
    tags: ['Python', 'API', 'URL Shortener', 'Web Service'],
    githubUrl: 'https://github.com/Brajesh31/url-shortener'
  },
  {
    id: 'pr-103',
    title: 'Voice Bot + Calendar Sync Prototype',
    description: 'Voice bot with calendar synchronization capabilities',
    category: 'advanced',
    tags: ['Voice Bot', 'Calendar', 'AI', 'Synchronization'],
    githubUrl: 'https://github.com/Brajesh31/voice-calendar-bot'
  },
  {
    id: 'pr-104',
    title: 'Weather CLI App',
    description: 'Command-line weather application using weather API',
    category: 'beginner',
    tags: ['Python', 'CLI', 'Weather', 'API'],
    githubUrl: 'https://github.com/Brajesh31/weather-cli'
  },
  {
    id: 'pr-105',
    title: 'Weather Dashboard - ChartJS',
    description: 'Weather dashboard with data visualization using Chart.js',
    category: 'intermediate',
    tags: ['Weather', 'Dashboard', 'Chart.js', 'Visualization'],
    githubUrl: 'https://github.com/Brajesh31/weather-dashboard'
  },
  {
    id: 'pr-106',
    title: 'Web Scraper - BeautifulSoup',
    description: 'Web scraping tool using BeautifulSoup library',
    category: 'beginner',
    tags: ['Python', 'Web Scraping', 'BeautifulSoup', 'Data'],
    githubUrl: 'https://github.com/Brajesh31/web-scraper'
  },
  {
    id: 'pr-107',
    title: 'YouTube Downloader GUI',
    description: 'GUI application for downloading YouTube videos',
    category: 'intermediate',
    tags: ['Python', 'YouTube', 'Downloader', 'GUI'],
    githubUrl: 'https://github.com/Brajesh31/youtube-downloader'
  }
];

// Resources data
export const resources: Resource[] = [
  {
    id: 'res-001',
    title: 'Complete Portfolio Source Code',
    description: 'Full source code of this portfolio website with React and TypeScript',
    type: 'code',
    year: '2025',
    tags: ['React', 'TypeScript', 'Portfolio', 'Source Code'],
    icon: '💻',
    url: 'https://github.com/Brajesh31/portfolio'
  },
  {
    id: 'res-002',
    title: 'Resume - Latest Version',
    description: 'My latest professional resume in PDF format',
    type: 'document',
    year: '2025',
    tags: ['Resume', 'CV', 'Professional', 'PDF'],
    icon: '📄',
    downloadUrl: '/resume.pdf'
  },
  {
    id: 'res-003',
    title: 'Coursera Certificates Collection',
    description: 'Collection of all my Coursera course completion certificates',
    type: 'certificate',
    year: '2025',
    tags: ['Coursera', 'Certificates', 'Learning', 'Education'],
    icon: '🏆',
    url: 'https://www.coursera.org/user/d1d21a6feea4a96b11b52a876f8d5278'
  },
  {
    id: 'res-004',
    title: 'GitHub Profile',
    description: 'My GitHub profile with all public repositories and contributions',
    type: 'portfolio',
    year: '2025',
    tags: ['GitHub', 'Code', 'Open Source', 'Projects'],
    icon: '🐙',
    url: 'https://github.com/Brajesh31'
  },
  {
    id: 'res-005',
    title: 'LinkedIn Professional Profile',
    description: 'Professional networking profile with career highlights',
    type: 'portfolio',
    year: '2025',
    tags: ['LinkedIn', 'Professional', 'Networking', 'Career'],
    icon: '💼',
    url: 'https://www.linkedin.com/in/brajesh-kumar-9b58651a8/'
  }
];

// Helper functions
export const getMilestonesByYear = (year: string): Milestone[] => {
  return milestones.filter(milestone => milestone.year === year);
};

export const getResourcesByYear = (year: string): Resource[] => {
  return resources.filter(resource => resource.year === year);
};

export const getUniqueYears = (): string[] => {
  const years = new Set<string>();
  milestones.forEach(milestone => years.add(milestone.year));
  resources.forEach(resource => years.add(resource.year));
  return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a));
};

export const getUniqueTypes = (): string[] => {
  const types = new Set<string>();
  milestones.forEach(milestone => types.add(milestone.type));
  return Array.from(types).sort();
};

export const getUniqueResourceTypes = (): string[] => {
  const types = new Set<string>();
  resources.forEach(resource => types.add(resource.type));
  return Array.from(types).sort();
};

// Get all projects sorted alphabetically
export const getAllProjectsAlphabetically = (): ProjectResource[] => {
  return projectResources.sort((a, b) => a.title.localeCompare(b.title));
};