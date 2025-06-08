import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Download,
  Github,
  ExternalLink,
  Trophy,
  BookOpen,
  Code,
  Star,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Zap,
  Target,
  Award,
  Lightbulb
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

interface Milestone {
  id: string;
  date: string;
  month: string;
  year: string;
  title: string;
  description: string;
  type: 'project' | 'achievement' | 'education' | 'event' | 'learning';
  icon: string;
  tags?: string[];
  category?: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  link?: string; // ✅ Added to support external links on title
}

interface Resource {
  id: string;
  name: string;
  description: string;
  github: string;
  download?: string;
  type: 'app' | 'web' | 'game' | 'tool' | 'document';
  tech: string[];
  featured?: boolean;
}

const milestones: Milestone[] = [
  // 2025 - Brand, Scale, Contribute, Network
  {
    id: '2025-06-openai',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'OpenAI Academy Launch at The Oberoi, Delhi',
    description: 'Invited to attend the landmark launch of OpenAI Academy: Future Skills for India',
    type: 'event',
    icon: '🤖',
    tags: ['AI', 'OpenAI', 'Event', 'Delhi'],
    category: 'professional',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-openai-academy' // 🔗 LinkedIn placeholder
  },
  {
    id: '2025-06-ssoc',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'Selected as SSOC Season 4 Contributor',
    description: 'Selected as contributor for Social Summer of Code Season 4',
    type: 'achievement',
    icon: '🏆',
    tags: ['Open Source', 'Contribution', 'Community'],
    category: 'professional',
    link: 'https://github.com/Brajesh31' // 🔗 GitHub profile or SSOC repo
  },
  {
    id: '2025-06-mentorship',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'Mentorship Cards UI Concept',
    description: 'Designed mentorship platform UI concept using Figma and HTML',
    type: 'project',
    icon: '🎨',
    tags: ['Figma', 'HTML', 'UI/UX'],
    category: 'advanced',
    link: 'https://www.figma.com/file/your-mentorship-design' // 🔗 Figma concept link (placeholder)
  },
  {
    id: '2025-05-aicamp',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'AICamp Meetup at Tata 1mg, Gurugram',
    description: 'Attended power-packed AICamp Meetup focusing on GenAI and community building',
    type: 'event',
    icon: '🚀',
    tags: ['AI', 'GenAI', 'Networking', 'Gurugram'],
    category: 'professional',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-aicamp-meetup' // 🔗 LinkedIn event reflection
  },
  {
    id: '2025-05-voice-bot',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Voice Bot + Calendar Sync Prototype',
    description: 'Built voice-activated bot with calendar synchronization capabilities',
    type: 'project',
    icon: '🗣️',
    tags: ['Voice AI', 'Calendar API', 'Prototype'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/voice-bot' // 🔗 GitHub repo
  },
  {
    id: '2025-04-dashboard',
    date: 'April 2025',
    month: 'April',
    year: '2025',
    title: 'Advanced Dashboard UI',
    description: 'Created comprehensive dashboard UI using React and Tailwind CSS',
    type: 'project',
    icon: '📊',
    tags: ['React', 'Tailwind', 'Dashboard'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/dashboard-ui' // 🔗 GitHub repo
  },
  {
    id: '2025-04-resume-evaluator',
    date: 'April 2025',
    month: 'April',
    year: '2025',
    title: 'AI-Powered Resume Evaluator',
    description: 'Built LLM-based resume evaluation tool with scoring and recommendations',
    type: 'project',
    icon: '📄',
    tags: ['AI', 'LLM', 'Resume', 'Evaluation'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/resume-evaluator'
  },
  {
    id: '2025-03-face-recognition',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'Face Recognition Dashboard',
    description: 'Developed real-time face detection system using CVlib with dashboard interface',
    type: 'project',
    icon: '👁️',
    tags: ['Computer Vision', 'CVlib', 'Dashboard'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/face-recognition'
  },
  {
    id: '2025-03-prompt-writer',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'OpenAI Prompt Writer Tool',
    description: 'Created Streamlit-based tool for generating and optimizing AI prompts',
    type: 'project',
    icon: '✍️',
    tags: ['Streamlit', 'OpenAI', 'Prompts'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/prompt-writer'
  },
  {
    id: '2025-02-nlp-chatbot',
    date: 'February 2025',
    month: 'February',
    year: '2025',
    title: 'NLP Chatbot with TensorFlow',
    description: 'Advanced NLP-based chatbot using TensorFlow with improved conversation flow',
    type: 'project',
    icon: '🤖',
    tags: ['NLP', 'TensorFlow', 'Chatbot'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/chatbot-nlp'
  },
  {
    id: '2025-02-cli-launcher',
    date: 'February 2025',
    month: 'February',
    year: '2025',
    title: 'CLI Project Launcher',
    description: 'Built command-line tool for quick project initialization and management',
    type: 'project',
    icon: '⚡',
    tags: ['CLI', 'Python', 'Automation'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/cli-launcher'
  },
  {
    id: '2025-01-agrilearn',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Agrilearn AI Portfolio Launch',
    description: 'Launched personal brand portfolio with rainbow theme and modern animations',
    type: 'achievement',
    icon: '🌈',
    tags: ['Portfolio', 'Branding', 'React'],
    category: 'professional',
    link: 'https://github.com/Brajesh31/agrilearn-ai'
  },
  {
    id: '2025-01-toolkit',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Dev Toolkit Vault',
    description: 'Added comprehensive developer toolkit section to portfolio',
    type: 'project',
    icon: '🛠️',
    tags: ['Tools', 'Portfolio', 'Resources'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/dev-toolkit'
  },
  {
    id: '2025-01-100-projects',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Shared 100+ Projects Publicly',
    description: 'Made 100+ projects publicly available with documentation',
    type: 'achievement',
    icon: '💯',
    tags: ['Open Source', 'Projects', 'Documentation'],
    category: 'professional',
    link: 'https://github.com/Brajesh31?tab=repositories'
  },
  // 2024 - Major Developer Leap
  {
    id: '2024-12-blog',
    date: 'December 2024',
    month: 'December',
    year: '2024',
    title: 'Personal Dev Blog Started',
    description: 'Launched personal development blog with technical insights',
    type: 'achievement',
    icon: '📝',
    tags: ['Blog', 'Writing', 'Tech'],
    category: 'professional',
    link: 'https://brajesh31.hashnode.dev'
  },
  {
    id: '2024-12-timeline',
    date: 'December 2024',
    month: 'December',
    year: '2024',
    title: 'Timeline Page Launched',
    description: 'Added comprehensive timeline page to portfolio',
    type: 'project',
    icon: '📅',
    tags: ['Timeline', 'Portfolio', 'React'],
    category: 'intermediate',
    link: 'https://brajesh31.dev/timeline'
  },
  {
    id: '2024-11-inventory',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Inventory Management System',
    description: 'Comprehensive inventory management system using Django',
    type: 'project',
    icon: '📦',
    tags: ['Django', 'Python', 'Database'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/inventory-management'
  },
  {
    id: '2024-11-face-detection',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Face Detection GUI',
    description: 'Python-based face detection application with GUI interface',
    type: 'project',
    icon: '👤',
    tags: ['Python', 'OpenCV', 'GUI'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/face-detection-gui'
  },
  {
    id: '2024-11-movie-recommender',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Movie Recommender System',
    description: 'ML-based movie recommendation system using Python and Scikit-learn',
    type: 'project',
    icon: '🎬',
    tags: ['Machine Learning', 'Python', 'Scikit-learn'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/movie-recommender'
  },
  {
    id: '2024-10-semac',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'SEMAC - College ML Utility App',
    description: 'College management system with ML-powered grade prediction',
    type: 'project',
    icon: '🎓',
    tags: ['MERN', 'ML', 'Education'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/semac-app'
  },
  {
    id: '2024-10-ml-form',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'Machine Learning Form UI',
    description: 'Interactive form interface for ML model inputs and predictions',
    type: 'project',
    icon: '🤖',
    tags: ['ML', 'UI', 'Forms'],
    category: 'intermediate'
  },
  {
    id: '2024-10-figma-clone',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'Figma to HTML UI Clone',
    description: 'Converted Figma designs to responsive HTML/CSS implementations',
    type: 'project',
    icon: '🎨',
    tags: ['Figma', 'HTML', 'CSS'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/figma-html-clone'
  },
  {
    id: '2024-09-chatterbox',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'ChatterBox - Real-Time Chat App',
    description: 'Real-time messaging application with Socket.io',
    type: 'project',
    icon: '💬',
    tags: ['Socket.io', 'Real-time', 'Chat'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/chatterbox'
  },
  {
    id: '2024-09-expense-tracker',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'Expense Tracker - React',
    description: 'Personal expense tracking application built with React',
    type: 'project',
    icon: '💰',
    tags: ['React', 'Finance', 'Tracking'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/expense-tracker'
  },
  {
    id: '2024-09-css-kit',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'CSS UI Kit',
    description: 'Custom CSS component library with reusable UI elements',
    type: 'project',
    icon: '🎨',
    tags: ['CSS', 'UI Kit', 'Components'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/css-ui-kit'
  },
  {
    id: '2024-08-agrotech',
    date: 'August 2024',
    month: 'August',
    year: '2024',
    title: 'AgroTech - Smart Farming Platform',
    description: 'AI+IoT solution for smart farming with predictive analytics',
    type: 'project',
    icon: '🌱',
    tags: ['AI', 'IoT', 'Agriculture'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/agrotech-ai'
  },
  {
    id: '2024-08-auth-system',
    date: 'August 2024',
    month: 'August',
    year: '2024',
    title: 'JWT Authentication System',
    description: 'Secure authentication system using JWT and Flask',
    type: 'project',
    icon: '🔐',
    tags: ['JWT', 'Flask', 'Authentication'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/jwt-auth'
  },
  {
    id: '2024-08-mobile-mockups',
    date: 'August 2024',
    month: 'August',
    year: '2024',
    title: 'Mobile Forms UI Mockups',
    description: 'Designed mobile-first form interfaces and mockups',
    type: 'project',
    icon: '📱',
    tags: ['Mobile', 'UI/UX', 'Forms'],
    category: 'intermediate',
    link: 'https://www.figma.com/@brajesh31'
  },
  {
    id: '2024-07-knights',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'The Knights of Flovora',
    description: '2D RPG game with quest-based progression using Flutter',
    type: 'project',
    icon: '⚔️',
    tags: ['Flutter', 'Game', 'RPG'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/the-knights-of-flovora'
  },
  {
    id: '2024-07-productivity',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'Productivity Dashboard',
    description: 'React-based productivity tracking dashboard',
    type: 'project',
    icon: '📊',
    tags: ['React', 'Productivity', 'Dashboard'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/productivity-dashboard'
  },
  {
    id: '2024-07-billing',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'Java Billing Application',
    description: 'Console-based billing system with PDF generation',
    type: 'project',
    icon: '🧾',
    tags: ['Java', 'Console', 'PDF'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/java-billing-system'
  },
  {
    id: '2024-06-career-mapper',
    date: 'June 2024',
    month: 'June',
    year: '2024',
    title: 'Career Mapper',
    description: 'Data-driven career decision-making helper tool',
    type: 'project',
    icon: '🗺️',
    tags: ['React', 'Career', 'Data'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/career-mapper'
  },
  {
    id: '2024-06-capnshare',
    date: 'June 2024',
    month: 'June',
    year: '2024',
    title: "Cap'nShare - Food Sharing App",
    description: 'Community-driven food sharing web application',
    type: 'project',
    icon: '🍽️',
    tags: ['MERN', 'Social', 'Community'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/capnshare'
  },
  {
    id: '2024-06-roadmap',
    date: 'June 2024',
    month: 'June',
    year: '2024',
    title: 'Roadmap Planner Web App',
    description: 'Interactive roadmap planning tool for learning paths',
    type: 'project',
    icon: '🛣️',
    tags: ['Web App', 'Planning', 'Learning'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/roadmap-planner'
  },
  {
    id: '2024-05-fitdeck',
    date: 'May 2024',
    month: 'May',
    year: '2024',
    title: 'FitDeck - Fitness Platform',
    description: 'Comprehensive fitness social networking app with MERN stack',
    type: 'project',
    icon: '💪',
    tags: ['MERN', 'Fitness', 'Social'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/fitdeck'
  },
  {
    id: '2024-05-fitness-tracker',
    date: 'May 2024',
    month: 'May',
    year: '2024',
    title: 'Fitness Tracker with Charts',
    description: 'React-based fitness tracking app with data visualization',
    type: 'project',
    icon: '📈',
    tags: ['React', 'Charts', 'Fitness'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/fitness-tracker'
  },
  {
    id: '2024-05-mood-tracker',
    date: 'May 2024',
    month: 'May',
    year: '2024',
    title: 'Mood Tracker UI Design',
    description: 'Figma-designed mood tracking interface with analytics',
    type: 'project',
    icon: '😊',
    tags: ['Figma', 'UI/UX', 'Mental Health'],
    category: 'intermediate',
    link: 'https://www.figma.com/@brajesh31'
  },
  {
    id: '2024-04-mathematrix',
    date: 'April 2024',
    month: 'April',
    year: '2024',
    title: 'Mathematrix',
    description: 'Gamified math learning web app for children',
    type: 'project',
    icon: '🔢',
    tags: ['Education', 'Game', 'Math'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/mathematrix'
  },
  {
    id: '2024-04-resume-generator',
    date: 'April 2024',
    month: 'April',
    year: '2024',
    title: 'Resume Generator with HTML Export',
    description: 'Dynamic resume builder with HTML export functionality',
    type: 'project',
    icon: '📄',
    tags: ['Resume', 'HTML', 'Generator'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/resume-generator'
  },
  {
    id: '2024-04-music-visualizer',
    date: 'April 2024',
    month: 'April',
    year: '2024',
    title: 'Music Visualizer',
    description: 'Web-based music visualization using HTML5 Canvas and Web Audio API',
    type: 'project',
    icon: '🎵',
    tags: ['HTML5', 'Canvas', 'Audio'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/music-visualizer'
  },
  {
    id: '2024-03-ella',
    date: 'March 2024',
    month: 'March',
    year: '2024',
    title: 'Ella - AI Chat Companion',
    description: 'Mobile-friendly AI chatbot app with React Native',
    type: 'project',
    icon: '📱',
    tags: ['React Native', 'AI', 'Mobile'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/ella'
  },
  {
    id: '2024-03-quiz-creator',
    date: 'March 2024',
    month: 'March',
    year: '2024',
    title: 'Dynamic Quiz Creator',
    description: 'JSON-based quiz creation and management system',
    type: 'project',
    icon: '❓',
    tags: ['JSON', 'Quiz', 'Dynamic'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/quiz-creator'
  },
  {
    id: '2024-03-markdown-editor',
    date: 'March 2024',
    month: 'March',
    year: '2024',
    title: 'Web Markdown Editor',
    description: 'Real-time markdown editor with live preview',
    type: 'project',
    icon: '📝',
    tags: ['Markdown', 'Editor', 'Web'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/markdown-editor'
  },
  {
    id: '2024-02-thea',
    date: 'February 2024',
    month: 'February',
    year: '2024',
    title: 'Thea - AI Therapist',
    description: 'Empathetic AI therapy bot with custom emotional response dataset',
    type: 'project',
    icon: '🧠',
    tags: ['AI', 'NLP', 'Healthcare'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/thea'
  },
  {
    id: '2024-02-time-tracker',
    date: 'February 2024',
    month: 'February',
    year: '2024',
    title: 'Java Time Tracker',
    description: 'Desktop time tracking application built with Java Swing',
    type: 'project',
    icon: '⏰',
    tags: ['Java', 'Swing', 'Productivity'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/java-time-tracker'
  },
  {
    id: '2024-02-chatgpt-ui',
    date: 'February 2024',
    month: 'February',
    year: '2024',
    title: 'ChatGPT Prompts Web UI',
    description: 'Web interface for managing and organizing ChatGPT prompts',
    type: 'project',
    icon: '💭',
    tags: ['Web', 'ChatGPT', 'UI'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/chatgpt-ui'
  },
  {
    id: '2024-01-emma',
    date: 'January 2024',
    month: 'January',
    year: '2024',
    title: 'Emma - AI Desktop Assistant',
    description: 'Smart command-line Python-based personal assistant',
    type: 'project',
    icon: '🤖',
    tags: ['Python', 'AI', 'Assistant'],
    category: 'advanced',
    link: 'https://github.com/Brajesh31/emma'
  },
  {
    id: '2024-01-dashboard',
    date: 'January 2024',
    month: 'January',
    year: '2024',
    title: 'UI Dashboard with Tailwind',
    description: 'Modern dashboard interface using Tailwind CSS',
    type: 'project',
    icon: '📊',
    tags: ['Tailwind', 'Dashboard', 'UI'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/ui-dashboard'
  },
  {
    id: '2024-01-cli-resume',
    date: 'January 2024',
    month: 'January',
    year: '2024',
    title: 'CLI Resume Builder',
    description: 'Command-line tool for building professional resumes',
    type: 'project',
    icon: '📄',
    tags: ['CLI', 'Resume', 'Python'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/cli-resume'
  },
  // 2023 - CRUD, Dashboards, Web + Flask Systems
  {
    id: '2023-11-survey',
    date: 'November 2023',
    month: 'November',
    year: '2023',
    title: 'Survey Creator Tool',
    description: 'JSON-based survey creation and management system',
    type: 'project',
    icon: '📋',
    tags: ['JSON', 'Survey', 'Web'],
    category: 'intermediate'
  },
  {
    id: '2023-11-auth-flow',
    date: 'November 2023',
    month: 'November',
    year: '2023',
    title: 'Login Auth Flow (React + Firebase)',
    description: 'Complete authentication flow using React and Firebase',
    type: 'project',
    icon: '🔐',
    tags: ['React', 'Firebase', 'Auth'],
    category: 'intermediate'
  },
  {
    id: '2023-11-figma-kits',
    date: 'November 2023',
    month: 'November',
    year: '2023',
    title: 'Figma UI Kits',
    description: 'Comprehensive UI kits including cards, modals, and forms',
    type: 'project',
    icon: '🎨',
    tags: ['Figma', 'UI Kit', 'Design'],
    category: 'intermediate'
  },
  {
    id: '2023-09-snake',
    date: 'September 2023',
    month: 'September',
    year: '2023',
    title: 'Snake Game - Pygame',
    description: 'Classic snake game implementation using Pygame',
    type: 'project',
    icon: '🐍',
    tags: ['Python', 'Pygame', 'Game'],
    category: 'intermediate'
  },
  {
    id: '2023-09-chat-cli',
    date: 'September 2023',
    month: 'September',
    year: '2023',
    title: 'CLI Chat App with Sockets',
    description: 'Command-line chat application using socket programming',
    type: 'project',
    icon: '💬',
    tags: ['Python', 'Sockets', 'CLI'],
    category: 'intermediate'
  },
  {
    id: '2023-09-color-picker',
    date: 'September 2023',
    month: 'September',
    year: '2023',
    title: 'Color Picker + Code Converter',
    description: 'Web-based color picker with hex/rgb/hsl conversion',
    type: 'project',
    icon: '🎨',
    tags: ['Web', 'Color', 'Converter'],
    category: 'beginner'
  },
  {
    id: '2023-09-college',
    date: 'September 2023',
    month: 'September',
    year: '2023',
    title: 'Started B.Tech at GL Bajaj',
    description: 'Began Computer Science and Engineering at GL Bajaj Group of Institutions',
    type: 'education',
    icon: '🎓',
    tags: ['Education', 'CSE', 'College'],
    category: 'professional'
  },
  {
    id: '2023-03-banking',
    date: 'March 2023',
    month: 'March',
    year: '2023',
    title: 'Mini Banking System - Java',
    description: 'Console-based banking system with account management',
    type: 'project',
    icon: '🏦',
    tags: ['Java', 'Banking', 'Console'],
    category: 'intermediate'
  },
  {
    id: '2023-03-weather-dashboard',
    date: 'March 2023',
    month: 'March',
    year: '2023',
    title: 'Weather Dashboard - ChartJS',
    description: 'Weather data visualization dashboard using Chart.js',
    type: 'project',
    icon: '🌤️',
    tags: ['ChartJS', 'Weather', 'Dashboard'],
    category: 'intermediate'
  },
  {
    id: '2023-03-auth-ui',
    date: 'March 2023',
    month: 'March',
    year: '2023',
    title: 'Login/Auth UI Kit',
    description: 'Comprehensive authentication UI components and templates',
    type: 'project',
    icon: '🔐',
    tags: ['UI Kit', 'Auth', 'Templates'],
    category: 'intermediate'
  },
  {
    id: '2023-03-class12',
    date: 'March 2023',
    month: 'March',
    year: '2023',
    title: 'Completed Class 12',
    description: 'Graduated from Delhi Public School with 66% in CBSE Board',
    type: 'achievement',
    icon: '📜',
    tags: ['Education', 'Achievement', 'CBSE'],
    category: 'professional'
  },
  {
    id: '2023-02-image-filter',
    date: 'February 2023',
    month: 'February',
    year: '2023',
    title: 'Image Filter App',
    description: 'Tkinter-based image filtering application using PIL',
    type: 'project',
    icon: '🖼️',
    tags: ['Tkinter', 'PIL', 'Image Processing'],
    category: 'intermediate'
  },
  {
    id: '2023-02-face-blur',
    date: 'February 2023',
    month: 'February',
    year: '2023',
    title: 'Face Blur Tool',
    description: 'OpenCV-based tool for automatic face blurring in images',
    type: 'project',
    icon: '👤',
    tags: ['OpenCV', 'Face Detection', 'Privacy'],
    category: 'intermediate'
  },
  {
    id: '2023-02-student-manager',
    date: 'February 2023',
    month: 'February',
    year: '2023',
    title: 'CRUD CSV Student Manager',
    description: 'Student management system with CSV file operations',
    type: 'project',
    icon: '👨‍🎓',
    tags: ['CRUD', 'CSV', 'Management'],
    category: 'intermediate'
  },
  {
    id: '2023-01-blog-cms',
    date: 'January 2023',
    month: 'January',
    year: '2023',
    title: 'Blog CMS - Flask CRUD',
    description: 'Content management system for blogs using Flask',
    type: 'project',
    icon: '📝',
    tags: ['Flask', 'CMS', 'CRUD'],
    category: 'intermediate'
  },
  {
    id: '2023-01-news-reader',
    date: 'January 2023',
    month: 'January',
    year: '2023',
    title: 'News API Reader CLI',
    description: 'Command-line news reader using News API',
    type: 'project',
    icon: '📰',
    tags: ['CLI', 'API', 'News'],
    category: 'beginner'
  },
  {
    id: '2023-01-youtube-downloader',
    date: 'January 2023',
    month: 'January',
    year: '2023',
    title: 'YouTube Downloader GUI',
    description: 'Desktop application for downloading YouTube videos',
    type: 'project',
    icon: '📺',
    tags: ['GUI', 'YouTube', 'Downloader'],
    category: 'intermediate'
  },

  // 2022 - Java, Web Forms, GUI, C Language
  {
    id: '2022-12-task-scheduler',
    date: 'December 2022',
    month: 'December',
    year: '2022',
    title: 'Task Scheduler',
    description: 'Python-based task scheduling system using datetime',
    type: 'project',
    icon: '📅',
    tags: ['Python', 'Scheduler', 'Datetime'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/task-scheduler'
  },
  {
    id: '2022-12-markdown-cms',
    date: 'December 2022',
    month: 'December',
    year: '2022',
    title: 'Basic CMS with Markdown',
    description: 'Simple content management system supporting Markdown',
    type: 'project',
    icon: '📝',
    tags: ['CMS', 'Markdown', 'Web'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/markdown-cms'
  },
  {
    id: '2022-12-restaurant-ui',
    date: 'December 2022',
    month: 'December',
    year: '2022',
    title: 'Restaurant Ordering UI',
    description: 'Restaurant ordering interface using HTML/CSS',
    type: 'project',
    icon: '🍽️',
    tags: ['HTML', 'CSS', 'Restaurant'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/restaurant-ui'
  },
  {
    id: '2022-10-recipe-finder',
    date: 'October 2022',
    month: 'October',
    year: '2022',
    title: 'Recipe Finder App',
    description: 'Recipe search application using HTML and external API',
    type: 'project',
    icon: '🍳',
    tags: ['HTML', 'API', 'Recipes'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/recipe-finder'
  },
  {
    id: '2022-10-stopwatch-countdown',
    date: 'October 2022',
    month: 'October',
    year: '2022',
    title: 'Stopwatch + Countdown Combo',
    description: 'Combined stopwatch and countdown timer application',
    type: 'project',
    icon: '⏱️',
    tags: ['Timer', 'Stopwatch', 'GUI'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/stopwatch-countdown'
  },
  {
    id: '2022-10-theme-toggle',
    date: 'October 2022',
    month: 'October',
    year: '2022',
    title: 'Light/Dark Theme Toggle UI',
    description: 'Web interface with light and dark theme switching',
    type: 'project',
    icon: '🌓',
    tags: ['Themes', 'UI', 'Toggle'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/theme-toggle-ui'
  },
  {
    id: '2022-07-screenshot-gui',
    date: 'July 2022',
    month: 'July',
    year: '2022',
    title: 'Screenshot App - GUI',
    description: 'Desktop screenshot application with GUI interface',
    type: 'project',
    icon: '📸',
    tags: ['GUI', 'Screenshot', 'Desktop'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/screenshot-gui'
  },
  {
    id: '2022-07-flask-auth',
    date: 'July 2022',
    month: 'July',
    year: '2022',
    title: 'Flask Login/Signup',
    description: 'User authentication system using Flask framework',
    type: 'project',
    icon: '🔐',
    tags: ['Flask', 'Auth', 'Web'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/flask-auth'
  },
  {
    id: '2022-07-file-encryptor',
    date: 'July 2022',
    month: 'July',
    year: '2022',
    title: 'File Encryptor (Fernet)',
    description: 'File encryption tool using Fernet symmetric encryption',
    type: 'project',
    icon: '🔒',
    tags: ['Encryption', 'Security', 'Files'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/file-encryptor'
  },
  {
    id: '2022-06-portfolio-v2',
    date: 'June 2022',
    month: 'June',
    year: '2022',
    title: 'Portfolio v2 - Multiple Sections',
    description: 'Second iteration of portfolio with multiple sections',
    type: 'project',
    icon: '🌐',
    tags: ['Portfolio', 'Web', 'Multi-section'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/portfolio-v2'
  },
  {
    id: '2022-06-expense-tracker',
    date: 'June 2022',
    month: 'June',
    year: '2022',
    title: 'Expense Tracker (Pie Charts)',
    description: 'Personal expense tracking with pie chart visualization',
    type: 'project',
    icon: '💰',
    tags: ['Finance', 'Charts', 'Tracking'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/expense-tracker'
  },
  {
    id: '2022-06-attendance-java',
    date: 'June 2022',
    month: 'June',
    year: '2022',
    title: 'Attendance App - Java',
    description: 'Student attendance management system in Java',
    type: 'project',
    icon: '📋',
    tags: ['Java', 'Attendance', 'Management'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/attendance-app-java'
  },
  {
    id: '2022-04-email-sender',
    date: 'April 2022',
    month: 'April',
    year: '2022',
    title: 'Email + File Sender Combo Tool',
    description: 'Combined email and file sending utility',
    type: 'project',
    icon: '📧',
    tags: ['Email', 'Files', 'Utility'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/email-file-sender'
  },
  {
    id: '2022-04-product-cards',
    date: 'April 2022',
    month: 'April',
    year: '2022',
    title: 'HTML/CSS Product Card Showcase',
    description: 'Product display cards using HTML and CSS',
    type: 'project',
    icon: '🛍️',
    tags: ['HTML', 'CSS', 'Products'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/product-cards-html-css'
  },
  {
    id: '2022-04-notes-app',
    date: 'April 2022',
    month: 'April',
    year: '2022',
    title: 'Notes App - JS LocalStorage',
    description: 'Note-taking application using JavaScript LocalStorage',
    type: 'project',
    icon: '📝',
    tags: ['JavaScript', 'LocalStorage', 'Notes'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/notes-app-localstorage'
  },
  {
    id: '2022-03-currency-gui',
    date: 'March 2022',
    month: 'March',
    year: '2022',
    title: 'Currency Converter GUI',
    description: 'Desktop currency conversion application with GUI',
    type: 'project',
    icon: '💱',
    tags: ['GUI', 'Currency', 'Converter'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/currency-converter-gui'
  },
  {
    id: '2022-03-bmi-visual',
    date: 'March 2022',
    month: 'March',
    year: '2022',
    title: 'BMI Visual GUI - Tkinter',
    description: 'Visual BMI calculator using Tkinter with charts',
    type: 'project',
    icon: '⚖️',
    tags: ['Tkinter', 'BMI', 'Visual'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/bmi-calculator-visual'
  },
  {
    id: '2022-03-java-quiz',
    date: 'March 2022',
    month: 'March',
    year: '2022',
    title: 'Java Quiz System',
    description: 'Interactive quiz application built with Java',
    type: 'project',
    icon: '❓',
    tags: ['Java', 'Quiz', 'Interactive'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/java-quiz-system'
  },
  {
    id: '2022-01-grade-tracker',
    date: 'January 2022',
    month: 'January',
    year: '2022',
    title: 'Student Grade Tracker',
    description: 'Grade tracking system using Python and CSV',
    type: 'project',
    icon: '📊',
    tags: ['Python', 'CSV', 'Grades'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/student-grade-tracker'
  },
  {
    id: '2022-01-url-shortener',
    date: 'January 2022',
    month: 'January',
    year: '2022',
    title: 'URL Shortener - Bitly API',
    description: 'URL shortening service using Bitly API',
    type: 'project',
    icon: '🔗',
    tags: ['API', 'URL', 'Shortener'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/url-shortener-bitly'
  },
  {
    id: '2022-01-hotel-management',
    date: 'January 2022',
    month: 'January',
    year: '2022',
    title: 'Hotel Management System - C',
    description: 'Hotel booking and management system in C language',
    type: 'project',
    icon: '🏨',
    tags: ['C', 'Management', 'Hotel'],
    category: 'intermediate',
    link: 'https://github.com/Brajesh31/hotel-management-c'
  },
  {
    id: '2021-10-email-sender',
    date: 'October 2021',
    month: 'October',
    year: '2021',
    title: 'Email Sender - smtplib',
    description: 'Email sending utility using Python smtplib',
    type: 'project',
    icon: '📧',
    tags: ['Python', 'Email', 'SMTP'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/email-sender-python'
  },
  {
    id: '2021-10-registration-form',
    date: 'October 2021',
    month: 'October',
    year: '2021',
    title: 'Registration Form - Flask',
    description: 'User registration form using Flask framework',
    type: 'project',
    icon: '📝',
    tags: ['Flask', 'Forms', 'Registration'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/flask-registration-form'
  },
  {
    id: '2021-10-memory-game',
    date: 'October 2021',
    month: 'October',
    year: '2021',
    title: 'Memory Game - HTML/JS',
    description: 'Card matching memory game using HTML and JavaScript',
    type: 'project',
    icon: '🧠',
    tags: ['HTML', 'JavaScript', 'Game'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/memory-game'
  },
  {
    id: '2021-08-weather-cli',
    date: 'August 2021',
    month: 'August',
    year: '2021',
    title: 'Weather CLI App',
    description: 'Command-line weather application using OpenWeather API',
    type: 'project',
    icon: '🌤️',
    tags: ['CLI', 'Weather', 'API'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/weather-cli'
  },
  {
    id: '2021-08-java-calculator',
    date: 'August 2021',
    month: 'August',
    year: '2021',
    title: 'Java Calculator - Swing',
    description: 'Desktop calculator application using Java Swing',
    type: 'project',
    icon: '🧮',
    tags: ['Java', 'Swing', 'Calculator'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/java-calculator'
  },
  {
    id: '2021-08-portfolio-v1',
    date: 'August 2021',
    month: 'August',
    year: '2021',
    title: 'Portfolio Page + Download Resume',
    description: 'First portfolio website with resume download feature',
    type: 'project',
    icon: '🌐',
    tags: ['Portfolio', 'Resume', 'Web'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/portfolio-v1'
  },
  {
    id: '2021-05-bmi-chart',
    date: 'May 2021',
    month: 'May',
    year: '2021',
    title: 'BMI Chart Plotter - matplotlib',
    description: 'BMI visualization using matplotlib charts',
    type: 'project',
    icon: '📈',
    tags: ['Python', 'Matplotlib', 'Charts'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/bmi-chart'
  },
  {
    id: '2021-05-blog-template',
    date: 'May 2021',
    month: 'May',
    year: '2021',
    title: 'HTML/CSS Blog Template',
    description: 'Static blog template using HTML and CSS',
    type: 'project',
    icon: '📝',
    tags: ['HTML', 'CSS', 'Blog'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/html-css-blog'
  },
  {
    id: '2021-05-resume-website',
    date: 'May 2021',
    month: 'May',
    year: '2021',
    title: 'Single-Page Resume Website',
    description: 'Personal resume as a single-page website',
    type: 'project',
    icon: '📄',
    tags: ['HTML', 'CSS', 'Resume'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/resume-website'
  },
  {
    id: '2021-04-file-organizer',
    date: 'April 2021',
    month: 'April',
    year: '2021',
    title: 'File Organizer - Folder Sorter',
    description: 'Automatic file organization tool by file type',
    type: 'project',
    icon: '📁',
    tags: ['Python', 'File Management', 'Automation'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/file-organizer'
  },
  {
    id: '2021-04-contact-manager',
    date: 'April 2021',
    month: 'April',
    year: '2021',
    title: 'Contact Manager - CSV',
    description: 'Contact management system using CSV files',
    type: 'project',
    icon: '📞',
    tags: ['Python', 'CSV', 'Contacts'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/contact-manager'
  },
  {
    id: '2021-04-web-scraper',
    date: 'April 2021',
    month: 'April',
    year: '2021',
    title: 'Web Scraper - BeautifulSoup',
    description: 'Web scraping tool using BeautifulSoup library',
    type: 'project',
    icon: '🕷️',
    tags: ['Python', 'BeautifulSoup', 'Scraping'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/web-scraper-bs4'
  },
  {
    id: '2021-02-rps-gui',
    date: 'February 2021',
    month: 'February',
    year: '2021',
    title: 'Rock Paper Scissors GUI',
    description: 'GUI version of Rock Paper Scissors game',
    type: 'project',
    icon: '✂️',
    tags: ['GUI', 'Game', 'Python'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/rps-gui'
  },
  {
    id: '2021-02-image-resizer',
    date: 'February 2021',
    month: 'February',
    year: '2021',
    title: 'Image Resizer - PIL',
    description: 'Image resizing tool using Python PIL library',
    type: 'project',
    icon: '🖼️',
    tags: ['Python', 'PIL', 'Image Processing'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/image-resizer'
  },
  {
    id: '2021-02-alarm-timer',
    date: 'February 2021',
    month: 'February',
    year: '2021',
    title: 'Alarm + Timer Combo',
    description: 'Combined alarm clock and timer application',
    type: 'project',
    icon: '⏰',
    tags: ['Python', 'Alarm', 'Timer'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/alarm-timer'
  },
  {
    id: '2021-01-todo-list',
    date: 'January 2021',
    month: 'January',
    year: '2021',
    title: 'To-Do List - File-based',
    description: 'Simple to-do list application with file storage',
    type: 'project',
    icon: '✅',
    tags: ['Python', 'File Storage', 'Productivity'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/todo-list'
  },
  {
    id: '2021-01-currency-converter',
    date: 'January 2021',
    month: 'January',
    year: '2021',
    title: 'Currency Converter - API',
    description: 'Currency conversion tool using external API',
    type: 'project',
    icon: '💱',
    tags: ['Python', 'API', 'Currency'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/currency-converter'
  },
  {
    id: '2021-01-stopwatch',
    date: 'January 2021',
    month: 'January',
    year: '2021',
    title: 'Stopwatch - Tkinter',
    description: 'Digital stopwatch application using Tkinter',
    type: 'project',
    icon: '⏱️',
    tags: ['Python', 'Tkinter', 'Stopwatch'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/tkinter-stopwatch'
  },
  {
    id: '2020-12-quiz-app',
    date: 'December 2020',
    month: 'December',
    year: '2020',
    title: 'Quiz App - Python',
    description: 'Simple quiz application using Python',
    type: 'project',
    icon: '❓',
    tags: ['Python', 'Quiz', 'Console'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/python-quiz-app'
  },
  {
    id: '2020-12-screenshot-tool',
    date: 'December 2020',
    month: 'December',
    year: '2020',
    title: 'Screenshot Tool - pyautogui',
    description: 'Screenshot capture tool using pyautogui',
    type: 'project',
    icon: '📸',
    tags: ['Python', 'pyautogui', 'Screenshot'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/screenshot-tool'
  },
  {
    id: '2020-12-file-copier',
    date: 'December 2020',
    month: 'December',
    year: '2020',
    title: 'File Copier Script',
    description: 'Automated file copying utility script',
    type: 'project',
    icon: '📁',
    tags: ['Python', 'File Operations', 'Automation'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/file-copier'
  },
  {
    id: '2020-10-hangman',
    date: 'October 2020',
    month: 'October',
    year: '2020',
    title: 'Hangman Game',
    description: 'Classic word guessing game implementation',
    type: 'project',
    icon: '🎯',
    tags: ['Python', 'Game', 'Console'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/hangman-game'
  },
  {
    id: '2020-10-login-page',
    date: 'October 2020',
    month: 'October',
    year: '2020',
    title: 'Login Page - HTML/CSS',
    description: 'Basic login page using HTML and CSS',
    type: 'project',
    icon: '🔐',
    tags: ['HTML', 'CSS', 'Login'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/html-login-page'
  },
  {
    id: '2020-10-resume-template',
    date: 'October 2020',
    month: 'October',
    year: '2020',
    title: 'Resume Template - HTML',
    description: 'Professional resume template in HTML',
    type: 'project',
    icon: '📄',
    tags: ['HTML', 'Resume', 'Template'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/resume-template-html'
  },
  {
    id: '2020-08-password-generator',
    date: 'August 2020',
    month: 'August',
    year: '2020',
    title: 'Password Generator',
    description: 'Secure password generation tool',
    type: 'project',
    icon: '🔑',
    tags: ['Python', 'Security', 'Generator'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/password-generator'
  },
  {
    id: '2020-08-alarm-clock',
    date: 'August 2020',
    month: 'August',
    year: '2020',
    title: 'Simple Alarm Clock',
    description: 'Basic alarm clock application',
    type: 'project',
    icon: '⏰',
    tags: ['Python', 'Alarm', 'Time'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/alarm-clock'
  },
  {
    id: '2020-08-text-analyzer',
    date: 'August 2020',
    month: 'August',
    year: '2020',
    title: 'Text File Analyzer',
    description: 'Tool for analyzing text file statistics',
    type: 'project',
    icon: '📊',
    tags: ['Python', 'Text Analysis', 'Files'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/text-analyzer'
  },
  {
    id: '2020-07-number-guessing',
    date: 'July 2020',
    month: 'July',
    year: '2020',
    title: 'Number Guessing Game',
    description: 'Interactive number guessing game',
    type: 'project',
    icon: '🔢',
    tags: ['Python', 'Game', 'Interactive'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/number-guessing-game'
  },
  {
    id: '2020-07-mad-libs',
    date: 'July 2020',
    month: 'July',
    year: '2020',
    title: 'Mad Libs Generator',
    description: 'Fun word game generator',
    type: 'project',
    icon: '📝',
    tags: ['Python', 'Game', 'Text'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/mad-libs'
  },
  {
    id: '2020-07-tip-calculator',
    date: 'July 2020',
    month: 'July',
    year: '2020',
    title: 'Tip Calculator',
    description: 'Restaurant tip calculation tool',
    type: 'project',
    icon: '💰',
    tags: ['Python', 'Calculator', 'Math'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/tip-calculator'
  },
  {
    id: '2020-07-bmi-calculator',
    date: 'July 2020',
    month: 'July',
    year: '2020',
    title: 'BMI Calculator CLI',
    description: 'Command-line Body Mass Index calculator',
    type: 'project',
    icon: '⚖️',
    tags: ['Python', 'Health', 'CLI'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/bmi-cli'
  },
  {
    id: '2020-06-calculator',
    date: 'June 2020',
    month: 'June',
    year: '2020',
    title: 'Calculator - Arithmetic',
    description: 'Basic arithmetic calculator',
    type: 'project',
    icon: '🧮',
    tags: ['Python', 'Math', 'Calculator'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/arithmetic-calculator'
  },
  {
    id: '2020-06-rock-paper-scissors',
    date: 'June 2020',
    month: 'June',
    year: '2020',
    title: 'Rock Paper Scissors - Console',
    description: 'Console-based Rock Paper Scissors game',
    type: 'project',
    icon: '✂️',
    tags: ['Python', 'Game', 'Console'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/rps-console'
  },
  {
    id: '2020-06-dice-roller',
    date: 'June 2020',
    month: 'June',
    year: '2020',
    title: 'Dice Roller Simulator',
    description: 'Virtual dice rolling simulator',
    type: 'project',
    icon: '🎲',
    tags: ['Python', 'Simulation', 'Random'],
    category: 'beginner',
    link: 'https://github.com/Brajesh31/dice-roller'
  },
  {
    id: '2020-05-class10',
    date: 'May 2020',
    month: 'May',
    year: '2020',
    title: 'Passed Class 10 – 91%',
    description: 'Completed Class 10 with 91% marks from Delhi Public School',
    type: 'achievement',
    icon: '🎓',
    tags: ['Education', 'Achievement', 'School'],
    category: 'professional'
  },
  {
    id: '2020-05-python-basics',
    date: 'May 2020',
    month: 'May',
    year: '2020',
    title: 'Learned Python Basics',
    description: 'Started learning Python: print(), if-else, loops',
    type: 'learning',
    icon: '🐍',
    tags: ['Python', 'Programming', 'Basics'],
    category: 'beginner'
  },
];

const resources: Resource[] = [
  {
    id: 'java-time-tracker',
    name: 'Java Time Tracker',
    description: 'Track time using Java Swing',
    github: 'https://github.com/Brajesh31/java-time-tracker',
    download: '/downloads/java-time-tracker.zip',
    type: 'web',
    tech: ['Java', 'Swing', 'Desktop']
  },
  {
    id: 'youtube-downloader-gui',
    name: 'YouTube Downloader GUI',
    description: 'GUI to download videos from YouTube',
    github: 'https://github.com/Brajesh31/youtube-downloader-gui',
    download: '/downloads/youtube-downloader-gui.zip',
    type: 'web',
    tech: ['Python', 'Tkinter', 'YouTubeAPI']
  },
  {
    id: 'weather-dashboard',
    name: 'Weather Dashboard',
    description: 'Weather info with ChartJS graphs',
    github: 'https://github.com/Brajesh31/weather-dashboard',
    download: '/downloads/weather-dashboard.zip',
    type: 'web',
    tech: ['React', 'ChartJS', 'WeatherAPI']
  },
  {
    id: 'openai-chatgpt-ui',
    name: 'OpenAI ChatGPT UI',
    description: 'Prompt interface for ChatGPT',
    github: 'https://github.com/Brajesh31/openai-chatgpt-ui',
    download: '/downloads/openai-chatgpt-ui.zip',
    type: 'web',
    tech: ['Next.js', 'Tailwind', 'OpenAI API']
  },
  {
    id: 'survey-creator-tool',
    name: 'Survey Creator Tool',
    description: 'Build surveys using JSON structure',
    github: 'https://github.com/Brajesh31/survey-creator-tool',
    download: '/downloads/survey-creator-tool.zip',
    type: 'web',
    tech: ['React', 'JSON', 'Formik']
  },
  {
    id: 'login-auth-flow',
    name: 'Login Auth Flow',
    description: 'React + Firebase login system',
    github: 'https://github.com/Brajesh31/login-auth-flow',
    download: '/downloads/login-auth-flow.zip',
    type: 'web',
    tech: ['React', 'Firebase', 'Auth']
  },
  {
    id: 'figma-ui-kits',
    name: 'Figma UI Kits',
    description: 'Complete UI element kit via Figma',
    github: 'https://github.com/Brajesh31/figma-ui-kits',
    download: '/downloads/figma-ui-kits.zip',
    type: 'web',
    tech: ['Figma', 'UI/UX', 'Design']
  },
  {
    id: 'snake-game',
    name: 'Snake Game',
    description: 'Classic snake game in Pygame',
    github: 'https://github.com/Brajesh31/snake-game',
    download: '/downloads/snake-game.zip',
    type: 'game',
    tech: ['Python', 'Pygame']
  },
  {
    id: 'cli-chat-app',
    name: 'CLI Chat App',
    description: 'Command-line messaging with sockets',
    github: 'https://github.com/Brajesh31/cli-chat-app',
    download: '/downloads/cli-chat-app.zip',
    type: 'tool',
    tech: ['Python', 'Socket', 'Networking']
  },
  {
    id: 'color-picker',
    name: 'Color Picker',
    description: 'Pick & convert color codes (web app)',
    github: 'https://github.com/Brajesh31/color-picker',
    download: '/downloads/color-picker.zip',
    type: 'web',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'file-encryptor',
    name: 'File Encryptor',
    description: 'Encrypt & decrypt files using Python',
    github: 'https://github.com/Brajesh31/file-encryptor',
    download: '/downloads/file-encryptor.zip',
    type: 'tool',
    tech: ['Python', 'Encryption', 'Security']
  },
  {
    id: 'flappy-bird-clone',
    name: 'Flappy Bird Clone',
    description: 'Flappy Bird recreation using JavaScript',
    github: 'https://github.com/Brajesh31/flappy-bird-clone',
    download: '/downloads/flappy-bird-clone.zip',
    type: 'game',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'python-web-scraper',
    name: 'Python Web Scraper',
    description: 'Scrape website data using BeautifulSoup',
    github: 'https://github.com/Brajesh31/python-web-scraper',
    download: '/downloads/python-web-scraper.zip',
    type: 'tool',
    tech: ['Python', 'BeautifulSoup', 'Scraping']
  },
  {
    id: 'rock-paper-ai',
    name: 'Rock Paper AI',
    description: 'Play Rock Paper Scissors vs AI',
    github: 'https://github.com/Brajesh31/rock-paper-ai',
    download: '/downloads/rock-paper-ai.zip',
    type: 'game',
    tech: ['Python', 'Random', 'AI']
  },
  {
    id: 'portfolio-v1',
    name: 'Portfolio v1',
    description: 'Basic HTML/CSS portfolio site',
    github: 'https://github.com/Brajesh31/portfolio-v1',
    download: '/downloads/portfolio-v1.zip',
    type: 'web',
    tech: ['HTML', 'CSS']
  },
  {
    id: 'music-player-ui',
    name: 'Music Player UI',
    description: 'Frontend for music player app',
    github: 'https://github.com/Brajesh31/music-player-ui',
    download: '/downloads/music-player-ui.zip',
    type: 'web',
    tech: ['React', 'Styled Components']
  },
  {
    id: 'typing-speed-app',
    name: 'Typing Speed App',
    description: 'Check typing speed via GUI',
    github: 'https://github.com/Brajesh31/typing-speed-app',
    download: '/downloads/typing-speed-app.zip',
    type: 'tool',
    tech: ['Python', 'Tkinter']
  },
  {
    id: 'markdown-blog',
    name: 'Markdown Blog Site',
    description: 'Blog platform using Markdown & Next.js',
    github: 'https://github.com/Brajesh31/markdown-blog',
    download: '/downloads/markdown-blog.zip',
    type: 'web',
    tech: ['Next.js', 'Markdown', 'Static']
  },
  {
    id: 'todo-app',
    name: 'ToDo App',
    description: 'Simple to-do list with local storage',
    github: 'https://github.com/Brajesh31/todo-app',
    download: '/downloads/todo-app.zip',
    type: 'web',
    tech: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: 'netflix-clone',
    name: 'Netflix Clone',
    description: 'Netflix frontend clone using React',
    github: 'https://github.com/Brajesh31/netflix-clone',
    download: '/downloads/netflix-clone.zip',
    type: 'web',
    tech: ['React', 'TMDB API', 'CSS']
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    description: 'Get weather using OpenWeatherMap API',
    github: 'https://github.com/Brajesh31/weather-app',
    download: '/downloads/weather-app.zip',
    type: 'web',
    tech: ['JavaScript', 'API', 'HTML']
  },
  {
    id: 'expense-tracker',
    name: 'Expense Tracker',
    description: 'Track your daily expenses',
    github: 'https://github.com/Brajesh31/expense-tracker',
    download: '/downloads/expense-tracker.zip',
    type: 'web',
    tech: ['React', 'Context API', 'Finance']
  },
  {
    id: 'quiz-app-js',
    name: 'Quiz App JS',
    description: 'Interactive quiz with JS',
    github: 'https://github.com/Brajesh31/quiz-app-js',
    download: '/downloads/quiz-app-js.zip',
    type: 'web',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'currency-converter',
    name: 'Currency Converter',
    description: 'Convert currencies in real-time',
    github: 'https://github.com/Brajesh31/currency-converter',
    download: '/downloads/currency-converter.zip',
    type: 'web',
    tech: ['API', 'HTML', 'JavaScript']
  },
  {
    id: 'blog-backend-api',
    name: 'Blog Backend API',
    description: 'REST API for blog app',
    github: 'https://github.com/Brajesh31/blog-backend-api',
    download: '/downloads/blog-backend-api.zip',
    type: 'tool',
    tech: ['Node.js', 'Express', 'MongoDB']
  },
  {
    id: 'portfolio-react',
    name: 'React Portfolio v2',
    description: 'React-based personal portfolio',
    github: 'https://github.com/Brajesh31/portfolio-react',
    download: '/downloads/portfolio-react.zip',
    type: 'web',
    tech: ['React', 'Tailwind', 'Framer Motion']
  },
  {
    id: 'chat-app-firebase',
    name: 'Chat App with Firebase',
    description: 'Realtime chat using Firebase',
    github: 'https://github.com/Brajesh31/chat-app-firebase',
    download: '/downloads/chat-app-firebase.zip',
    type: 'web',
    tech: ['Firebase', 'React', 'Chat']
  },
  {
    id: 'calculator-js',
    name: 'Calculator JS',
    description: 'Simple calculator using JavaScript',
    github: 'https://github.com/Brajesh31/calculator-js',
    download: '/downloads/calculator-js.zip',
    type: 'web',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'blog-html-template',
    name: 'Blog HTML Template',
    description: 'Static blog design template',
    github: 'https://github.com/Brajesh31/blog-html-template',
    download: '/downloads/blog-html-template.zip',
    type: 'document',
    tech: ['HTML', 'CSS']
  },
  {
    id: 'movie-search-app',
    name: 'Movie Search App',
    description: 'Search movies via OMDB API',
    github: 'https://github.com/Brajesh31/movie-search-app',
    download: '/downloads/movie-search-app.zip',
    type: 'web',
    tech: ['React', 'API', 'JavaScript']
  },
  {
    id: 'notes-app',
    name: 'Notes App',
    description: 'Take notes and save to local storage',
    github: 'https://github.com/Brajesh31/notes-app',
    download: '/downloads/notes-app.zip',
    type: 'web',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'todo-app-js',
    name: 'To-Do App JS',
    description: 'Manage daily tasks with To-Do app',
    github: 'https://github.com/Brajesh31/todo-app-js',
    download: '/downloads/todo-app-js.zip',
    type: 'web',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'task-tracker',
    name: 'Task Tracker',
    description: 'Track your tasks with React',
    github: 'https://github.com/Brajesh31/task-tracker',
    download: '/downloads/task-tracker.zip',
    type: 'web',
    tech: ['React', 'Hooks', 'Productivity']
  },
  {
    id: 'login-page-ui',
    name: 'Login Page UI',
    description: 'Login page with modern UI',
    github: 'https://github.com/Brajesh31/login-page-ui',
    download: '/downloads/login-page-ui.zip',
    type: 'web',
    tech: ['HTML', 'CSS', 'UI']
  },
  {
    id: 'restaurant-website',
    name: 'Restaurant Website',
    description: 'Static website for a restaurant',
    github: 'https://github.com/Brajesh31/restaurant-website',
    download: '/downloads/restaurant-website.zip',
    type: 'web',
    tech: ['HTML', 'CSS', 'Responsive']
  },
  {
    id: 'ecommerce-ui',
    name: 'E-Commerce UI',
    description: 'UI design for e-commerce store',
    github: 'https://github.com/Brajesh31/ecommerce-ui',
    download: '/downloads/ecommerce-ui.zip',
    type: 'document',
    tech: ['HTML', 'CSS', 'UI']
  },
  {
    id: 'color-picker',
    name: 'Color Picker',
    description: 'Select and copy color codes',
    github: 'https://github.com/Brajesh31/color-picker',
    download: '/downloads/color-picker.zip',
    type: 'tool',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'stopwatch-timer',
    name: 'Stopwatch Timer',
    description: 'Start, stop and reset timer',
    github: 'https://github.com/Brajesh31/stopwatch-timer',
    download: '/downloads/stopwatch-timer.zip',
    type: 'tool',
    tech: ['JavaScript', 'Timer', 'Utility']
  },
  {
    id: 'weather-dashboard',
    name: 'Weather Dashboard',
    description: 'Dashboard UI for weather updates',
    github: 'https://github.com/Brajesh31/weather-dashboard',
    download: '/downloads/weather-dashboard.zip',
    type: 'web',
    tech: ['React', 'CSS Modules', 'Weather API']
  }
];


// Enhanced color schemes for better visual hierarchy
const monthColors = {
  January: {
    light: 'bg-white',
    dark: 'from-blue-900 to-indigo-900',
    accent: 'text-blue-700 dark:text-blue-400',
  },
  February: {
    light: 'bg-white',
    dark: 'from-purple-900 to-violet-800',
    accent: 'text-purple-700 dark:text-purple-400',
  },
  March: {
    light: 'bg-white',
    dark: 'from-cyan-900 to-teal-800',
    accent: 'text-cyan-700 dark:text-cyan-400',
  },
  April: {
    light: 'bg-white',
    dark: 'from-green-900 to-emerald-800',
    accent: 'text-green-700 dark:text-green-400',
  },
  May: {
    light: 'bg-white',
    dark: 'from-yellow-800 to-amber-700',
    accent: 'text-yellow-700 dark:text-yellow-400',
  },
  June: {
    light: 'bg-white',
    dark: 'from-rose-800 to-pink-700',
    accent: 'text-rose-700 dark:text-rose-400',
  },
  July: {
    light: 'bg-white',
    dark: 'from-indigo-900 to-sky-800',
    accent: 'text-indigo-700 dark:text-indigo-400',
  },
  August: {
    light: 'bg-white',
    dark: 'from-teal-800 to-lime-700',
    accent: 'text-teal-700 dark:text-teal-400',
  },
  September: {
    light: 'bg-white',
    dark: 'from-orange-800 to-amber-700',
    accent: 'text-orange-700 dark:text-orange-400',
  },
  October: {
    light: 'bg-white',
    dark: 'from-fuchsia-800 to-pink-700',
    accent: 'text-fuchsia-700 dark:text-fuchsia-400',
  },
  November: {
    light: 'bg-white',
    dark: 'from-slate-800 to-gray-700',
    accent: 'text-slate-700 dark:text-slate-400',
  },
  December: {
    light: 'bg-white',
    dark: 'from-zinc-800 to-blue-700',
    accent: 'text-zinc-700 dark:text-zinc-400',
  },
};

const typeColors = {
  project: {
    light: 'bg-slate-100',
    dark: 'from-sky-800 to-cyan-700',
    icon: '💻',
    label: 'Project',
  },
  achievement: {
    light: 'bg-amber-100',
    dark: 'from-yellow-700 to-orange-600',
    icon: '🏆',
    label: 'Achievement',
  },
  education: {
    light: 'bg-green-100',
    dark: 'from-green-700 to-emerald-600',
    icon: '🎓',
    label: 'Education',
  },
  event: {
    light: 'bg-fuchsia-100',
    dark: 'from-purple-700 to-pink-700',
    icon: '🎪',
    label: 'Event',
  },
  learning: {
    light: 'bg-indigo-100',
    dark: 'from-indigo-700 to-blue-600',
    icon: '📚',
    label: 'Learning',
  },
};

const categoryColors = {
  beginner: {
    light: 'bg-green-100 text-green-800',
    dark: 'from-green-700 to-green-600 text-white',
    icon: '🌱',
    label: 'Beginner',
  },
  intermediate: {
    light: 'bg-yellow-100 text-yellow-800',
    dark: 'from-yellow-700 to-amber-600 text-white',
    icon: '🚀',
    label: 'Intermediate',
  },
  advanced: {
    light: 'bg-red-100 text-red-800',
    dark: 'from-red-700 to-pink-600 text-white',
    icon: '⚡',
    label: 'Advanced',
  },
  professional: {
    light: 'bg-purple-100 text-purple-800',
    dark: 'from-purple-700 to-fuchsia-600 text-white',
    icon: '💼',
    label: 'Professional',
  },
};

const resourceTypeColors = {
  app: {
    light: 'bg-blue-100',
    dark: 'from-indigo-700 to-violet-600',
    icon: '📱',
  },
  web: {
    light: 'bg-teal-100',
    dark: 'from-emerald-700 to-teal-600',
    icon: '🌐',
  },
  game: {
    light: 'bg-pink-100',
    dark: 'from-purple-700 to-pink-600',
    icon: '🎮',
  },
  tool: {
    light: 'bg-orange-100',
    dark: 'from-orange-700 to-red-600',
    icon: '🛠️',
  },
  document: {
    light: 'bg-slate-100',
    dark: 'from-slate-700 to-zinc-600',
    icon: '📄',
  },
};


const MilestoneCard: React.FC<{ milestone: Milestone; index: number }> = ({ milestone, index }) => {
  const monthGradient = monthColors[milestone.month];
  const typeGradient = typeColors[milestone.type];
  const categoryGradient = milestone.category ? categoryColors[milestone.category] : null;

  return (
      <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`relative rounded-2xl p-5 sm:p-6 
        border border-slate-200 dark:border-slate-700 
        ${monthGradient.light} dark:bg-gradient-to-br dark:${monthGradient.dark}
        shadow-md dark:shadow-lg hover:shadow-xl 
        backdrop-blur-sm bg-opacity-60 dark:bg-opacity-50 
        transition-all duration-300 group`}
      >
        {/* Category Badge */}
        {milestone.category && (
            <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold
          bg-gradient-to-r ${categoryGradient.dark} text-white shadow-md flex items-center gap-1`}>
              <span>{categoryGradient.icon}</span>
              {categoryGradient.label}
            </div>
        )}

        <div className="flex items-start gap-4">
          <div className={`text-3xl p-3 rounded-xl bg-opacity-70 
          bg-gradient-to-br ${typeGradient.dark} text-white 
          shadow-lg border border-white/20 dark:border-white/30`}>
            {milestone.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Calendar size={16} className="text-slate-600 dark:text-slate-300" />
              <span className={`text-sm font-semibold ${monthGradient.accent}`}>
              {milestone.date}
            </span>
              <div className={`px-2 py-1 rounded-md text-xs font-medium 
              bg-gradient-to-r ${typeGradient.dark} text-white 
              shadow-sm flex items-center gap-1`}>
                <span>{typeGradient.icon}</span>
                {typeGradient.label}
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">
              {milestone.title}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {milestone.description}
            </p>
            {milestone.tags && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {milestone.tags.map((tag) => (
                      <span key={tag}
                            className="px-3 py-1 text-xs rounded-full
                    bg-white/60 dark:bg-black/30 border border-slate-300 dark:border-slate-600
                    text-slate-800 dark:text-slate-100 font-medium backdrop-blur-sm">
                  {tag}
                </span>
                  ))}
                </div>
            )}
          </div>
        </div>
      </motion.div>
  );
};
const ResourceCard: React.FC<{ resource: Resource; index: number }> = ({ resource, index }) => {
  const gradient = resourceTypeColors[resource.type];

  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`relative p-6 rounded-2xl 
        border border-slate-200 dark:border-slate-700 
        ${gradient.light} dark:bg-gradient-to-br dark:${gradient.dark}
        shadow-md dark:shadow-lg backdrop-blur-sm
        hover:shadow-xl transition duration-300 group`}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
              {resource.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {resource.description}
            </p>
          </div>
          <div className={`text-2xl p-3 rounded-lg 
          bg-gradient-to-br ${gradient.dark} text-white`}>
            {gradient.icon}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {resource.tech.map((tech) => (
              <span key={tech}
                    className="px-2 py-1 text-xs rounded bg-white/70 dark:bg-black/30
              text-slate-800 dark:text-white border border-slate-200 dark:border-slate-600">
            {tech}
          </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a href={resource.github} target="_blank" rel="noopener noreferrer"
             className="px-4 py-2 rounded-md bg-slate-800 text-white dark:bg-white dark:text-slate-900
            hover:scale-105 transition font-medium shadow">
            <Github size={16} className="inline mr-2" />
            GitHub
          </a>
          {resource.download && (
              <a href={resource.download} download
                 className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500
              text-white hover:scale-105 font-medium transition shadow">
                <Download size={16} className="inline mr-2" />
                Download
              </a>
          )}
        </div>
      </motion.div>
  );
};
const StatsCard: React.FC<{ icon: React.ReactNode; value: string; label: string; gradient: string }> = ({
                                                                                                          icon, value, label, gradient
                                                                                                        }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`p-6 rounded-xl bg-gradient-to-br ${gradient} 
      backdrop-blur-sm bg-opacity-60 dark:bg-opacity-40 
      border border-white/20 dark:border-white/10 shadow-lg
      hover:shadow-xl hover:scale-105 transition-all duration-300`}
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <div className="text-2xl font-bold text-gray-800 dark:text-white">{value}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
        </div>
      </div>
    </motion.div>
);

const MilestonePage = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set(['2025', '2024']));

  const years = Array.from(new Set(milestones.map((m) => m.year))).sort().reverse();
  const types = Array.from(new Set(milestones.map((m) => m.type)));
  const categories = Array.from(new Set(milestones.map((m) => m.category).filter(Boolean)));

  const filteredMilestones = milestones.filter((milestone) => {
    const matchesYear = selectedYear === 'all' || milestone.year === selectedYear;
    const matchesType = selectedType === 'all' || milestone.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || milestone.category === selectedCategory;
    const matchesSearch =
        milestone.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        milestone.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        milestone.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesYear && matchesType && matchesCategory && matchesSearch;
  });

  const groupedMilestones = years.reduce((acc, year) => {
    acc[year] = filteredMilestones.filter((m) => m.year === year);
    return acc;
  }, {} as Record<string, Milestone[]>);

  const toggleYear = (year: string) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const featuredResources = resources.filter((r) => r.featured);
  const otherResources = resources.filter((r) => !r.featured);

  // Stats
  const totalProjects = milestones.filter((m) => m.type === 'project').length;
  const totalAchievements = milestones.filter((m) => m.type === 'achievement').length;
  const totalEvents = milestones.filter((m) => m.type === 'event').length;
  const yearsActive = years.length;

  return (
      <div className="min-h-screen bg-[#F9FAFC] dark:bg-[#0F172A] py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <SectionHeading
              title="🏆 Journey & Knowledge Hub"
              subtitle="My complete tech timeline and resource vault"
          />

          {/* Statistic Overview */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
          >
            <StatsCard
                icon={<Code />}
                value={`${totalProjects}+`}
                label="Projects Built"
                gradient="from-blue-100 to-cyan-200 dark:from-blue-600 dark:to-cyan-700"
            />
            <StatsCard
                icon={<Trophy />}
                value={`${totalAchievements}+`}
                label="Achievements"
                gradient="from-yellow-100 to-orange-200 dark:from-yellow-600 dark:to-orange-700"
            />
            <StatsCard
                icon={<Zap />}
                value={`${totalEvents}+`}
                label="Events Attended"
                gradient="from-purple-100 to-pink-200 dark:from-purple-600 dark:to-pink-700"
            />
            <StatsCard
                icon={<Target />}
                value={`${yearsActive}+`}
                label="Years Active"
                gradient="from-green-100 to-emerald-200 dark:from-green-600 dark:to-emerald-700"
            />
          </motion.div>

          {/* Timeline Section */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Milestone Timeline
              </h2>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
              <input
                  type="text"
                  placeholder="🔍 Search milestones..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white"
              />

              <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white"
              >
                <option value="all">All Years</option>
                {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                ))}
              </select>

              <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white"
              >
                <option value="all">All Types</option>
                {types.map((type) => (
                    <option key={type} value={type}>
                      {typeColors[type].icon} {typeColors[type].label}
                    </option>
                ))}
              </select>

              <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white"
              >
                <option value="all">All Levels</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {categoryColors[cat].icon} {categoryColors[cat].label}
                    </option>
                ))}
              </select>
            </div>

            {/* Render Timeline */}
            <div className="space-y-10">
              {years.map((year) => (
                  <div key={year}>
                    <button
                        onClick={() => toggleYear(year)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:brightness-110 transition"
                    >
                      <span>{year}</span>
                      {expandedYears.has(year) ? <ChevronUp /> : <ChevronDown />}
                    </button>

                    <AnimatePresence>
                      {expandedYears.has(year) && (
                          <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
                          >
                            {groupedMilestones[year].map((milestone, index) => (
                                <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
                            ))}
                          </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
              ))}
            </div>
          </motion.div>

          {/* Resource Vault */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Resource Vault
              </h2>
            </div>

            {/* Featured Resources */}
            {featuredResources.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">⭐ Featured</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {featuredResources.map((resource, index) => (
                        <ResourceCard key={resource.id} resource={resource} index={index} />
                    ))}
                  </div>
                </>
            )}

            {/* All Resources */}
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">📦 All Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherResources.map((resource, index) => (
                  <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default MilestonePage;
