export interface Milestone {
  id: string;
  date: string;
  month: string;
  year: string;
  title: string;
  description: string;
  type: 'event' | 'achievement' | 'project' | 'campus ambassador' | 'contributor' | 'learning' | 'planning' | 'education';
  icon: string;
  tags: string[];
  category: 'professional' | 'advanced' | 'intermediate' | 'beginner';
  link?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'certificate' | 'document' | 'link' | 'portfolio' | 'code' | 'presentation';
  category: 'professional' | 'academic' | 'technical' | 'creative';
  year: string;
  tags: string[];
  url?: string;
  downloadUrl?: string;
  icon: string;
}

export const milestones: Milestone[] = [
  // 2025
  {
    id: '2025-06-openai',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'OpenAI Academy Launch at The Oberoi, Delhi',
    description: 'Invited to the landmark OpenAI Academy launch focused on Future Skills for India, featuring industry leaders and AI innovations.',
    type: 'event',
    icon: '🤖',
    tags: ['AI', 'OpenAI', 'Event', 'Delhi', 'Academy'],
    category: 'professional'
  },
  {
    id: '2025-06-ssoc4',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'Selected as SSOC Season 4 Contributor',
    description: 'Selected as a contributor in Script Summer of Code Season 4, contributing to open-source projects.',
    type: 'achievement',
    icon: '🏅',
    tags: ['SSOC', 'Open Source', 'Achievement', 'Contributor'],
    category: 'professional'
  },
  {
    id: '2025-06-mentorship-ui',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'Mentorship Cards UI Concept',
    description: 'Developed an advanced mentorship UI concept for student engagement with modern design principles.',
    type: 'project',
    icon: '💡',
    tags: ['UI', 'Mentorship', 'Design', 'Student Engagement'],
    category: 'advanced'
  },
  {
    id: '2025-05-aicamp',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'AICamp Meetup at Tata 1mg, Gurugram',
    description: 'Participated in AICamp Meetup focusing on transformers, coding agents, and vision-AI applications.',
    type: 'event',
    icon: '🤝',
    tags: ['AI', 'Meetup', 'Vision', 'LLM', 'Transformers'],
    category: 'professional'
  },
  {
    id: '2025-05-voice-bot',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Voice Bot + Calendar Sync Prototype',
    description: 'Built a voice-activated bot with calendar synchronization capabilities using modern AI technologies.',
    type: 'project',
    icon: '🗣️',
    tags: ['Voice AI', 'Calendar', 'Prototype', 'Integration'],
    category: 'advanced'
  },
  {
    id: '2025-04-dashboard-ui',
    date: 'April 2025',
    month: 'April',
    year: '2025',
    title: 'Advanced Dashboard UI',
    description: 'Designed an advanced, modern dashboard UI for analytics and insights with responsive design.',
    type: 'project',
    icon: '📊',
    tags: ['Dashboard', 'UI', 'Analytics', 'Design'],
    category: 'advanced'
  },
  {
    id: '2025-04-resumeai',
    date: 'April 2025',
    month: 'April',
    year: '2025',
    title: 'AI-Powered Resume Evaluator',
    description: 'Developed a machine-learning-powered resume evaluation system with scoring and recommendations.',
    type: 'project',
    icon: '📝',
    tags: ['AI', 'Resume', 'ML', 'Evaluation'],
    category: 'advanced'
  },
  {
    id: '2025-03-facerecog-dashboard',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'Face Recognition Dashboard',
    description: 'Built an advanced face recognition dashboard with modern UI and real-time analytics.',
    type: 'project',
    icon: '🧑‍💻',
    tags: ['AI', 'Face Recognition', 'Dashboard', 'Analytics'],
    category: 'advanced'
  },
  {
    id: '2025-03-promptwriter',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'OpenAI Prompt Writer Tool',
    description: 'Developed an advanced OpenAI prompt-writing tool for enhanced productivity and AI interactions.',
    type: 'project',
    icon: '📝',
    tags: ['OpenAI', 'Prompt', 'Tool', 'Productivity'],
    category: 'advanced'
  },
  {
    id: '2025-02-nlp-chatbot',
    date: 'February 2025',
    month: 'February',
    year: '2025',
    title: 'NLP Chatbot with TensorFlow',
    description: 'Developed an advanced NLP chatbot using TensorFlow and deep learning for natural conversations.',
    type: 'project',
    icon: '🤖',
    tags: ['NLP', 'TensorFlow', 'Chatbot', 'Deep Learning'],
    category: 'advanced'
  },
  {
    id: '2025-02-cli-launcher',
    date: 'February 2025',
    month: 'February',
    year: '2025',
    title: 'CLI Project Launcher',
    description: 'Built a command-line project launcher tool for developers to streamline project management.',
    type: 'project',
    icon: '💻',
    tags: ['CLI', 'Tool', 'Automation', 'Developer Tools'],
    category: 'intermediate'
  },
  {
    id: '2025-01-agrilearn-launch',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Agrilearn AI Portfolio Launch',
    description: 'Launched my professional portfolio for Agrilearn AI, showcasing agricultural technology solutions.',
    type: 'achievement',
    icon: '🌾',
    tags: ['Agrilearn', 'Portfolio', 'AI', 'Agriculture'],
    category: 'professional'
  },
  {
    id: '2025-01-devtoolkit',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Dev Toolkit Vault',
    description: 'Developed a comprehensive toolkit vault for developers to manage resources and tools efficiently.',
    type: 'project',
    icon: '🧰',
    tags: ['DevTools', 'Productivity', 'Toolkit', 'Management'],
    category: 'intermediate'
  },
  {
    id: '2025-01-public-projects',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Shared 100+ Projects Publicly',
    description: 'Reached the milestone of sharing over 100 projects in public repositories for community benefit.',
    type: 'achievement',
    icon: '📢',
    tags: ['Projects', 'GitHub', 'Public', 'Open Source'],
    category: 'professional'
  },

  // 2024
  {
    id: '2024-12-devblog',
    date: 'December 2024',
    month: 'December',
    year: '2024',
    title: 'Personal Dev Blog Started',
    description: 'Launched my personal development blog to share insights, tutorials, and technical knowledge.',
    type: 'achievement',
    icon: '✍️',
    tags: ['Blog', 'Writing', 'Achievement', 'Knowledge Sharing'],
    category: 'professional'
  },
  {
    id: '2024-12-timeline',
    date: 'December 2024',
    month: 'December',
    year: '2024',
    title: 'Timeline Page Launched',
    description: 'Built and launched a dynamic timeline page for my portfolio with interactive features.',
    type: 'project',
    icon: '📅',
    tags: ['Timeline', 'Portfolio', 'Web', 'Interactive'],
    category: 'intermediate'
  },
  {
    id: '2024-11-inventory',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Inventory Management System',
    description: 'Developed a robust inventory management system with analytics dashboard and reporting features.',
    type: 'project',
    icon: '📦',
    tags: ['Inventory', 'Management', 'Analytics', 'Dashboard'],
    category: 'advanced'
  },
  {
    id: '2024-11-facedetect-gui',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Face Detection GUI',
    description: 'Created a user-friendly GUI tool for face detection using OpenCV and computer vision.',
    type: 'project',
    icon: '👁️',
    tags: ['Face Detection', 'GUI', 'OpenCV', 'Computer Vision'],
    category: 'intermediate'
  },
  {
    id: '2024-11-movie-reco',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Movie Recommender System',
    description: 'Built an intelligent movie recommender system using collaborative filtering and machine learning.',
    type: 'project',
    icon: '🎬',
    tags: ['Movie', 'Recommender', 'ML', 'Collaborative Filtering'],
    category: 'advanced'
  },
  {
    id: '2024-10-semac',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'SEMAC - College ML Utility App',
    description: 'Developed an integrated machine learning utility app for college needs with multiple features.',
    type: 'project',
    icon: '🏫',
    tags: ['ML', 'College', 'Utility', 'Education'],
    category: 'advanced'
  },
  {
    id: '2024-10-ml-form-ui',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'Machine Learning Form UI',
    description: 'Designed intuitive form interfaces for machine learning applications with modern UX principles.',
    type: 'project',
    icon: '📋',
    tags: ['ML', 'Form', 'UI', 'UX'],
    category: 'intermediate'
  },
  {
    id: '2024-10-figma-clone',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'Figma to HTML UI Clone',
    description: 'Converted Figma designs to pixel-perfect HTML/CSS implementations with responsive design.',
    type: 'project',
    icon: '🎨',
    tags: ['Figma', 'HTML', 'CSS', 'Clone'],
    category: 'intermediate'
  },
  {
    id: '2024-09-chatterbox',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'ChatterBox - Real-Time Chat App',
    description: 'Created a real-time chat application using Socket.io with modern messaging features.',
    type: 'project',
    icon: '💬',
    tags: ['Chat App', 'Socket.io', 'Real-Time', 'Messaging'],
    category: 'advanced'
  },
  {
    id: '2024-09-expense-tracker',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'Expense Tracker - React',
    description: 'Built a comprehensive expense tracking application using React with data visualization.',
    type: 'project',
    icon: '💰',
    tags: ['Expense', 'Tracker', 'React', 'Finance'],
    category: 'intermediate'
  },
  {
    id: '2024-09-css-ui-kit',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'CSS UI Kit',
    description: 'Developed a comprehensive CSS UI kit with reusable components and modern styling.',
    type: 'project',
    icon: '🎨',
    tags: ['CSS', 'UI Kit', 'Components', 'Styling'],
    category: 'intermediate'
  },
  {
    id: '2024-08-agrotech',
    date: 'August 2024',
    month: 'August',
    year: '2024',
    title: 'AgroTech - Smart Farming Platform',
    description: 'Developed a smart farming platform using IoT and AI technologies for agricultural optimization.',
    type: 'project',
    icon: '🌱',
    tags: ['AgroTech', 'Smart Farming', 'AI', 'IoT'],
    category: 'advanced'
  },
  {
    id: '2024-08-jwt-auth',
    date: 'August 2024',
    month: 'August',
    year: '2024',
    title: 'JWT Authentication System',
    description: 'Implemented a secure JWT authentication system with role-based access control.',
    type: 'project',
    icon: '🔐',
    tags: ['JWT', 'Authentication', 'Security', 'Backend'],
    category: 'advanced'
  },
  {
    id: '2024-08-mobile-forms',
    date: 'August 2024',
    month: 'August',
    year: '2024',
    title: 'Mobile Forms UI Mockups',
    description: 'Created mobile-first form UI mockups with focus on user experience and accessibility.',
    type: 'project',
    icon: '📱',
    tags: ['Mobile', 'Forms', 'UI', 'Mockups'],
    category: 'intermediate'
  },
  {
    id: '2024-07-knights-flovora',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'The Knights of Flovora',
    description: 'Launched an action-adventure RPG game built with Flutter and Dart featuring quest systems.',
    type: 'project',
    icon: '🗡️',
    tags: ['Game', 'RPG', 'Flutter', 'Dart'],
    category: 'advanced'
  },
  {
    id: '2024-07-productivity-dashboard',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'Productivity Dashboard',
    description: 'Built a comprehensive productivity dashboard for task management and time tracking.',
    type: 'project',
    icon: '📈',
    tags: ['Productivity', 'Dashboard', 'Task Management', 'Time Tracking'],
    category: 'intermediate'
  },
  {
    id: '2024-07-java-billing',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'Java Billing Application',
    description: 'Developed a billing application in Java with invoice generation and payment tracking.',
    type: 'project',
    icon: '🧾',
    tags: ['Java', 'Billing', 'Invoice', 'Payment'],
    category: 'intermediate'
  },
  {
    id: '2024-06-careermapper',
    date: 'June 2024',
    month: 'June',
    year: '2024',
    title: 'Career Mapper',
    description: 'Developed a web interface to compare jobs based on cost of living, health, and safety indices.',
    type: 'project',
    icon: '🗺️',
    tags: ['Career', 'Mapping', 'Web', 'React'],
    category: 'advanced'
  },
  {
    id: '2024-06-capnshare',
    date: 'June 2024',
    month: 'June',
    year: '2024',
    title: "Cap'nShare - Food Sharing App",
    description: 'Designed a web application to reduce food wastage across campus by sharing surplus food.',
    type: 'project',
    icon: '🍱',
    tags: ['Food', 'Sharing', 'Web', 'Campus'],
    category: 'advanced'
  },
  {
    id: '2024-06-roadmap-planner',
    date: 'June 2024',
    month: 'June',
    year: '2024',
    title: 'Roadmap Planner Web App',
    description: 'Created a roadmap planning application for project management and milestone tracking.',
    type: 'project',
    icon: '🛣️',
    tags: ['Roadmap', 'Planning', 'Project Management', 'Web'],
    category: 'intermediate'
  },
  {
    id: '2024-05-fitdeck',
    date: 'May 2024',
    month: 'May',
    year: '2024',
    title: 'FitDeck - Fitness Platform',
    description: 'Developed a social networking web app for fitness enthusiasts to connect and learn.',
    type: 'project',
    icon: '🏋️‍♂️',
    tags: ['Fitness', 'Social', 'Web', 'Health'],
    category: 'advanced'
  },
  {
    id: '2024-05-fitness-tracker',
    date: 'May 2024',
    month: 'May',
    year: '2024',
    title: 'Fitness Tracker with Charts',
    description: 'Built a fitness tracking application with data visualization and progress charts.',
    type: 'project',
    icon: '📊',
    tags: ['Fitness', 'Tracker', 'Charts', 'Visualization'],
    category: 'intermediate'
  },
  {
    id: '2024-05-mood-tracker',
    date: 'May 2024',
    month: 'May',
    year: '2024',
    title: 'Mood Tracker UI Design',
    description: 'Designed an intuitive mood tracking interface with emotional analytics and insights.',
    type: 'project',
    icon: '😊',
    tags: ['Mood', 'Tracker', 'UI', 'Design'],
    category: 'intermediate'
  },
  {
    id: '2024-04-mathematrix',
    date: 'April 2024',
    month: 'April',
    year: '2024',
    title: 'Mathematrix',
    description: 'Created a website to teach and test multiplication tables, making math learning interactive.',
    type: 'project',
    icon: '➗',
    tags: ['Math', 'Learning', 'Education', 'Web'],
    category: 'intermediate'
  },
  {
    id: '2024-04-resume-generator',
    date: 'April 2024',
    month: 'April',
    year: '2024',
    title: 'Resume Generator with HTML Export',
    description: 'Built a resume generator tool with HTML export functionality and multiple templates.',
    type: 'project',
    icon: '📄',
    tags: ['Resume', 'Generator', 'HTML', 'Export'],
    category: 'intermediate'
  },
  {
    id: '2024-04-music-visualizer',
    date: 'April 2024',
    month: 'April',
    year: '2024',
    title: 'Music Visualizer',
    description: 'Created an interactive music visualizer with real-time audio analysis and visual effects.',
    type: 'project',
    icon: '🎵',
    tags: ['Music', 'Visualizer', 'Audio', 'Interactive'],
    category: 'intermediate'
  },
  {
    id: '2024-03-ella',
    date: 'March 2024',
    month: 'March',
    year: '2024',
    title: 'Ella - AI Chat Companion',
    description: 'Built an AI companion app using React Native and ML for personalized chat experiences.',
    type: 'project',
    icon: '🤖',
    tags: ['AI', 'Chatbot', 'Companion', 'ML'],
    category: 'advanced'
  },

  // 2023
  {
    id: '2023-11-survey-creator',
    date: 'November 2023',
    month: 'November',
    year: '2023',
    title: 'Survey Creator Tool',
    description: 'Developed a comprehensive survey creation tool with analytics and response management.',
    type: 'project',
    icon: '📋',
    tags: ['Survey', 'Creator', 'Analytics', 'Tool'],
    category: 'intermediate'
  },
  {
    id: '2023-11-login-auth',
    date: 'November 2023',
    month: 'November',
    year: '2023',
    title: 'Login Auth Flow (React + Firebase)',
    description: 'Implemented secure login authentication flow using React and Firebase integration.',
    type: 'project',
    icon: '🔐',
    tags: ['Login', 'Auth', 'React', 'Firebase'],
    category: 'intermediate'
  },
  {
    id: '2023-11-figma-ui-kits',
    date: 'November 2023',
    month: 'November',
    year: '2023',
    title: 'Figma UI Kits',
    description: 'Created comprehensive UI kits in Figma for rapid prototyping and design consistency.',
    type: 'project',
    icon: '🎨',
    tags: ['Figma', 'UI Kits', 'Design', 'Prototyping'],
    category: 'intermediate'
  },
  {
    id: '2023-09-snake-game',
    date: 'September 2023',
    month: 'September',
    year: '2023',
    title: 'Snake Game - Pygame',
    description: 'Developed a classic Snake game using Pygame with score tracking and difficulty levels.',
    type: 'project',
    icon: '🐍',
    tags: ['Snake', 'Game', 'Pygame', 'Python'],
    category: 'intermediate'
  },
  {
    id: '2023-09-cli-chat',
    date: 'September 2023',
    month: 'September',
    year: '2023',
    title: 'CLI Chat App with Sockets',
    description: 'Built a command-line chat application using socket programming for real-time communication.',
    type: 'project',
    icon: '💬',
    tags: ['CLI', 'Chat', 'Sockets', 'Real-time'],
    category: 'intermediate'
  },
  {
    id: '2023-09-color-picker',
    date: 'September 2023',
    month: 'September',
    year: '2023',
    title: 'Color Picker + Code Converter',
    description: 'Created a color picker tool with code conversion for different color formats.',
    type: 'project',
    icon: '🎨',
    tags: ['Color', 'Picker', 'Converter', 'Tool'],
    category: 'beginner'
  },
  {
    id: '2023-09-btech-start',
    date: 'September 2023',
    month: 'September',
    year: '2023',
    title: 'Started B.Tech at GL Bajaj',
    description: 'Began Bachelor of Technology in Computer Science and Engineering at GL Bajaj Group of Institutions.',
    type: 'education',
    icon: '🎓',
    tags: ['B.Tech', 'GL Bajaj', 'Education', 'Computer Science'],
    category: 'professional'
  },
  {
    id: '2023-03-banking-system',
    date: 'March 2023',
    month: 'March',
    year: '2023',
    title: 'Mini Banking System - Java',
    description: 'Developed a mini banking system in Java with account management and transaction features.',
    type: 'project',
    icon: '🏦',
    tags: ['Banking', 'Java', 'System', 'Finance'],
    category: 'intermediate'
  },
  {
    id: '2023-03-weather-dashboard',
    date: 'March 2023',
    month: 'March',
    year: '2023',
    title: 'Weather Dashboard - ChartJS',
    description: 'Created a weather dashboard with data visualization using Chart.js and weather APIs.',
    type: 'project',
    icon: '🌤️',
    tags: ['Weather', 'Dashboard', 'ChartJS', 'API'],
    category: 'intermediate'
  },
  {
    id: '2023-03-login-ui-kit',
    date: 'March 2023',
    month: 'March',
    year: '2023',
    title: 'Login/Auth UI Kit',
    description: 'Designed a comprehensive login and authentication UI kit with multiple variations.',
    type: 'project',
    icon: '🔐',
    tags: ['Login', 'Auth', 'UI Kit', 'Design'],
    category: 'intermediate'
  },
  {
    id: '2023-03-class12-completion',
    date: 'March 2023',
    month: 'March',
    year: '2023',
    title: 'Completed Class 12',
    description: 'Successfully completed Class 12 education with focus on Science and Mathematics.',
    type: 'achievement',
    icon: '🎓',
    tags: ['Class 12', 'Education', 'Achievement', 'Science'],
    category: 'professional'
  },

  // 2022
  {
    id: '2022-12-task-scheduler',
    date: 'December 2022',
    month: 'December',
    year: '2022',
    title: 'Task Scheduler',
    description: 'Built a task scheduling application with priority management and deadline tracking.',
    type: 'project',
    icon: '📅',
    tags: ['Task', 'Scheduler', 'Management', 'Productivity'],
    category: 'intermediate'
  },
  {
    id: '2022-12-cms-markdown',
    date: 'December 2022',
    month: 'December',
    year: '2022',
    title: 'Basic CMS with Markdown',
    description: 'Developed a content management system with Markdown support for easy content creation.',
    type: 'project',
    icon: '📝',
    tags: ['CMS', 'Markdown', 'Content', 'Management'],
    category: 'intermediate'
  },
  {
    id: '2022-10-recipe-finder',
    date: 'October 2022',
    month: 'October',
    year: '2022',
    title: 'Recipe Finder App',
    description: 'Created a recipe finder application with ingredient-based search and nutritional information.',
    type: 'project',
    icon: '🍳',
    tags: ['Recipe', 'Finder', 'Food', 'App'],
    category: 'beginner'
  },
  {
    id: '2022-07-screenshot-app',
    date: 'July 2022',
    month: 'July',
    year: '2022',
    title: 'Screenshot App - GUI',
    description: 'Built a screenshot application with GUI for easy screen capture and editing.',
    type: 'project',
    icon: '📸',
    tags: ['Screenshot', 'GUI', 'Capture', 'Tool'],
    category: 'intermediate'
  },
  {
    id: '2022-06-portfolio-v2',
    date: 'June 2022',
    month: 'June',
    year: '2022',
    title: 'Portfolio v2 - Multiple Sections',
    description: 'Developed second version of portfolio with multiple sections and improved design.',
    type: 'project',
    icon: '💼',
    tags: ['Portfolio', 'Web', 'Design', 'Personal'],
    category: 'intermediate'
  },

  // 2021
  {
    id: '2021-10-email-sender',
    date: 'October 2021',
    month: 'October',
    year: '2021',
    title: 'Email Sender - smtplib',
    description: 'Created an email sending application using Python smtplib for automated communications.',
    type: 'project',
    icon: '📧',
    tags: ['Email', 'Python', 'smtplib', 'Automation'],
    category: 'beginner'
  },
  {
    id: '2021-08-weather-cli',
    date: 'August 2021',
    month: 'August',
    year: '2021',
    title: 'Weather CLI App',
    description: 'Built a command-line weather application with API integration for weather forecasts.',
    type: 'project',
    icon: '🌦️',
    tags: ['Weather', 'CLI', 'API', 'Python'],
    category: 'beginner'
  },
  {
    id: '2021-05-bmi-plotter',
    date: 'May 2021',
    month: 'May',
    year: '2021',
    title: 'BMI Chart Plotter - matplotlib',
    description: 'Created a BMI chart plotter using matplotlib for health data visualization.',
    type: 'project',
    icon: '📊',
    tags: ['BMI', 'Chart', 'matplotlib', 'Health'],
    category: 'beginner'
  },
  {
    id: '2021-01-todo-list',
    date: 'January 2021',
    month: 'January',
    year: '2021',
    title: 'To-Do List - File-based',
    description: 'Developed a file-based to-do list application for task management and organization.',
    type: 'project',
    icon: '✅',
    tags: ['Todo', 'List', 'File', 'Management'],
    category: 'beginner'
  },

  // 2020
  {
    id: '2020-12-quiz-app',
    date: 'December 2020',
    month: 'December',
    year: '2020',
    title: 'Quiz App - Python',
    description: 'Built a quiz application in Python with multiple choice questions and scoring system.',
    type: 'project',
    icon: '❓',
    tags: ['Quiz', 'Python', 'Education', 'Game'],
    category: 'beginner'
  },
  {
    id: '2020-10-hangman-game',
    date: 'October 2020',
    month: 'October',
    year: '2020',
    title: 'Hangman Game',
    description: 'Created a classic Hangman word guessing game with interactive gameplay.',
    type: 'project',
    icon: '🎮',
    tags: ['Hangman', 'Game', 'Word', 'Interactive'],
    category: 'beginner'
  },
  {
    id: '2020-08-password-generator',
    date: 'August 2020',
    month: 'August',
    year: '2020',
    title: 'Password Generator',
    description: 'Developed a secure password generator with customizable length and character sets.',
    type: 'project',
    icon: '🔑',
    tags: ['Password', 'Generator', 'Security', 'Tool'],
    category: 'beginner'
  },
  {
    id: '2020-07-number-guessing',
    date: 'July 2020',
    month: 'July',
    year: '2020',
    title: 'Number Guessing Game',
    description: 'Created a number guessing game with hints and attempt tracking for entertainment.',
    type: 'project',
    icon: '🔢',
    tags: ['Number', 'Guessing', 'Game', 'Logic'],
    category: 'beginner'
  },
  {
    id: '2020-06-calculator',
    date: 'June 2020',
    month: 'June',
    year: '2020',
    title: 'Calculator - Arithmetic',
    description: 'Built a basic arithmetic calculator with standard mathematical operations.',
    type: 'project',
    icon: '🧮',
    tags: ['Calculator', 'Arithmetic', 'Math', 'Basic'],
    category: 'beginner'
  },
  {
    id: '2020-05-class10-completion',
    date: 'May 2020',
    month: 'May',
    year: '2020',
    title: 'Passed Class 10 – 91%',
    description: 'Successfully completed Class 10 with 91% marks, demonstrating strong academic performance.',
    type: 'achievement',
    icon: '🏆',
    tags: ['Class 10', 'Achievement', '91%', 'Academic'],
    category: 'professional'
  },
  {
    id: '2020-05-python-basics',
    date: 'May 2020',
    month: 'May',
    year: '2020',
    title: 'Learned Python Basics',
    description: 'Started programming journey by learning Python fundamentals and basic programming concepts.',
    type: 'learning',
    icon: '🐍',
    tags: ['Python', 'Learning', 'Programming', 'Basics'],
    category: 'beginner'
  }
];

export const resources: Resource[] = [
  {
    id: 'resume-2025',
    title: 'Professional Resume 2025',
    description: 'Latest professional resume showcasing skills, experience, and achievements.',
    type: 'document',
    category: 'professional',
    year: '2025',
    tags: ['Resume', 'CV', 'Professional', 'Career'],
    downloadUrl: '/resume.pdf',
    icon: '📄'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Interactive portfolio website built with React and modern web technologies.',
    type: 'portfolio',
    category: 'technical',
    year: '2025',
    tags: ['Portfolio', 'React', 'Website', 'Web Development'],
    url: 'https://brajeshkumar.dev',
    icon: '🌐'
  },
  {
    id: 'github-profile',
    title: 'GitHub Profile',
    description: 'Complete collection of open-source projects and contributions.',
    type: 'code',
    category: 'technical',
    year: '2025',
    tags: ['GitHub', 'Open Source', 'Projects', 'Code'],
    url: 'https://github.com/Brajesh31',
    icon: '💻'
  },
  {
    id: 'linkedin-profile',
    title: 'LinkedIn Professional Profile',
    description: 'Professional networking profile with career highlights and connections.',
    type: 'link',
    category: 'professional',
    year: '2025',
    tags: ['LinkedIn', 'Professional', 'Networking', 'Career'],
    url: 'https://www.linkedin.com/in/brajesh-kumar-9b58651a8/',
    icon: '💼'
  },
  {
    id: 'coursera-certificates',
    title: 'Coursera Certificates Collection',
    description: 'Collection of certificates from various Coursera courses and specializations.',
    type: 'certificate',
    category: 'academic',
    year: '2025',
    tags: ['Coursera', 'Certificates', 'Learning', 'Education'],
    url: 'https://www.coursera.org/user/d1d21a6feea4a96b11b52a876f8d5278',
    icon: '🏆'
  },
  {
    id: 'google-cloud-profile',
    title: 'Google Cloud Skills Profile',
    description: 'Google Cloud Skills Boost profile with completed labs and badges.',
    type: 'certificate',
    category: 'technical',
    year: '2025',
    tags: ['Google Cloud', 'Cloud Computing', 'Badges', 'Skills'],
    url: 'https://www.cloudskillsboost.google/public_profiles/9c512a6d-9347-491d-a16f-1db7651126d9',
    icon: '☁️'
  },
  {
    id: 'microsoft-learn-profile',
    title: 'Microsoft Learn Profile',
    description: 'Microsoft Learn profile with Azure and development certifications.',
    type: 'certificate',
    category: 'technical',
    year: '2025',
    tags: ['Microsoft', 'Azure', 'Learning', 'Certifications'],
    url: 'https://learn.microsoft.com/en-us/users/brajeshkumar-2922/',
    icon: '🔷'
  },
  {
    id: 'hackerrank-profile',
    title: 'HackerRank Coding Profile',
    description: 'HackerRank profile showcasing coding skills and problem-solving abilities.',
    type: 'link',
    category: 'technical',
    year: '2025',
    tags: ['HackerRank', 'Coding', 'Problem Solving', 'Algorithms'],
    url: 'https://www.hackerrank.com/profile/bk117134',
    icon: '🧩'
  },
  {
    id: 'codechef-profile',
    title: 'CodeChef Competitive Programming',
    description: 'CodeChef profile with competitive programming achievements and ratings.',
    type: 'link',
    category: 'technical',
    year: '2025',
    tags: ['CodeChef', 'Competitive Programming', 'Algorithms', 'Contest'],
    url: 'https://www.codechef.com/users/brajesh31',
    icon: '🏅'
  },
  {
    id: 'project-documentation',
    title: 'Project Documentation Collection',
    description: 'Comprehensive documentation for major projects including technical specifications.',
    type: 'document',
    category: 'technical',
    year: '2024',
    tags: ['Documentation', 'Projects', 'Technical', 'Specifications'],
    icon: '📚'
  }
];

// Helper functions
export const getMilestonesByYear = (year: string) => {
  return milestones.filter(milestone => milestone.year === year);
};

export const getResourcesByYear = (year: string) => {
  return resources.filter(resource => resource.year === year);
};

export const getUniqueYears = () => {
  const milestoneYears = milestones.map(m => m.year);
  const resourceYears = resources.map(r => r.year);
  return Array.from(new Set([...milestoneYears, ...resourceYears])).sort((a, b) => b.localeCompare(a));
};

export const getUniqueTypes = () => {
  return Array.from(new Set(milestones.map(m => m.type)));
};

export const getUniqueResourceTypes = () => {
  return Array.from(new Set(resources.map(r => r.type)));
};