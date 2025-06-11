import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Filter, Search, ExternalLink, Award, Briefcase, Code, GraduationCap, Users, BookOpen, Target, Lightbulb } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { useTheme } from '../components/ThemeProvider';

interface Milestone {
  id: string;
  date: string;
  month: string;
  year: string;
  title: string;
  description: string;
  type: 'event' | 'achievement' | 'project' | 'campus ambassador' | 'contributor' | 'learning' | 'planning';
  icon: string;
  tags: string[];
  category: 'professional' | 'advanced' | 'intermediate' | 'beginner';
  link?: string;
}

const milestones: Milestone[] = [
  // June 2025
  {
    id: '2025-06-openai',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'OpenAI Academy Launch at The Oberoi, Delhi',
    description: 'Invited to the landmark OpenAI Academy launch focused on Future Skills for India.',
    type: 'event',
    icon: '🤖',
    tags: ['AI', 'OpenAI', 'Event', 'Delhi'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-06-uiuxai',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'UI/UX Design in the World of AI',
    description: 'Attended a session on AI-powered design hosted by UXD Talks, Reskilll, and Azure Dev Community.',
    type: 'event',
    icon: '🎨',
    tags: ['UI/UX', 'AI', 'Design', 'Event'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-06-ssoc4',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'Selected as SSOC Season 4 Contributor',
    description: 'Selected as a contributor in Script Summer of Code Season 4.',
    type: 'achievement',
    icon: '🏅',
    tags: ['SSOC', 'Open Source', 'Achievement'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-06-mentorship-ui',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'Mentorship Cards UI Concept',
    description: 'Developed an advanced mentorship UI concept for student engagement.',
    type: 'project',
    icon: '💡',
    tags: ['UI', 'Mentorship', 'Project'],
    category: 'advanced',
    link: ''
  },
  // May 2025
  {
    id: '2025-05-powerbi-ai',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Power BI & AI Summit – Delhi Edition',
    description: 'Attended summit at Microsoft Gurugram focusing on Power BI and AI.',
    type: 'event',
    icon: '📊',
    tags: ['Power BI', 'AI', 'Event'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-05-aicamp',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'AICamp Meetup – Tata 1mg, Gurugram',
    description: 'Participated in AICamp Meetup: transformers, coding agents, vision-AI apps.',
    type: 'event',
    icon: '🤝',
    tags: ['AI', 'Meetup', 'Vision', 'LLM'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-05-business40',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Business4.0 Meetup – AI for Business Augmentation',
    description: 'Explored AI for business, real-world startup challenges, LLMs.',
    type: 'event',
    icon: '🏢',
    tags: ['Business', 'AI', 'LLM', 'Event'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-05-ainxt',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'AI.NXT AI Summit – Gurugram',
    description: 'Attended summit: GenAI, BERT, GPT, RAG, Copilot, impact.',
    type: 'event',
    icon: '🧠',
    tags: ['GenAI', 'Summit', 'Azure'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-05-inclusiveux',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Inclusive Design Research – Microsoft Gurugram',
    description: 'Event on empathy-driven UX in social impact. Speaker: Jayesha M. Koushik.',
    type: 'event',
    icon: '🫱🏼‍🫲🏽',
    tags: ['UX', 'Inclusive Design', 'Social Impact'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-05-mahakumbh',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Starting Mahakumbh 2025',
    description: 'Attended one of India's largest national innovation and entrepreneurship fairs.',
    type: 'event',
    icon: '🎪',
    tags: ['Startup', 'Innovation', 'Fair'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-05-artistai',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'How Artists Use AI – Microsoft Gurugram',
    description: 'Attended event on AI-powered creativity in music and arts.',
    type: 'event',
    icon: '🎶',
    tags: ['AI', 'Creativity', 'Music', 'Art'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-05-aiinnovationpay',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'AI Innovation Pay 2025 – Gurgaon',
    description: 'Attended hackathon and talks on language accessibility and ethical AI. Highlights: BHASHINI platform.',
    type: 'event',
    icon: '💬',
    tags: ['AI', 'Hackathon', 'Language'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-05-cyberconnect',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Cyber Connect – Microsoft, Noida',
    description: 'Attended event on cybersecurity, Zero Trust, and AI-driven security.',
    type: 'event',
    icon: '🛡️',
    tags: ['Cybersecurity', 'AI', 'Microsoft'],
    category: 'professional',
    link: ''
  },
  // April 2025
  {
    id: '2025-04-xrhack',
    date: 'April 2025',
    month: 'April',
    year: '2025',
    title: 'XR Creator Hackathon – 91 Springboard, Noida',
    description: 'Explored AR/VR/MR technologies at XR Creator Hackathon. Unity, Unreal, and more.',
    type: 'event',
    icon: '🕶️',
    tags: ['XR', 'Hackathon', 'Unity', 'Unreal'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-04-dashboard-ui',
    date: 'April 2025',
    month: 'April',
    year: '2025',
    title: 'Advanced Dashboard UI',
    description: 'Designed an advanced, modern dashboard UI for analytics and insights.',
    type: 'project',
    icon: '📊',
    tags: ['Dashboard', 'UI', 'Analytics'],
    category: 'advanced',
    link: ''
  },
  {
    id: '2025-04-resumeai',
    date: 'April 2025',
    month: 'April',
    year: '2025',
    title: 'AI-Powered Resume Evaluator',
    description: 'Developed a machine-learning-powered resume evaluation system.',
    type: 'project',
    icon: '📝',
    tags: ['AI', 'Resume', 'ML'],
    category: 'advanced',
    link: ''
  },
  // March 2025
  {
    id: '2025-03-iitdelhi-becon',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'IIT Delhi – BECon & Startup Expo',
    description: 'Attended one of India's largest startup expos with 300+ startups, 75+ investors, 200+ mentors.',
    type: 'event',
    icon: '🚀',
    tags: ['Startup', 'IIT Delhi', 'Expo'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-03-unicorns-iitd',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'The Unicorns from IIT Delhi – Feb 1 Event',
    description: 'Participated in sessions on unicorn startups, funding, and market fit at IIT Delhi.',
    type: 'event',
    icon: '🦄',
    tags: ['IIT Delhi', 'Startup', 'Unicorn'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-03-facerecog-dashboard',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'Face Recognition Dashboard',
    description: 'Built an advanced face recognition dashboard with modern UI and analytics.',
    type: 'project',
    icon: '🧑‍💻',
    tags: ['AI', 'Face Recognition', 'Dashboard'],
    category: 'advanced',
    link: ''
  },
  {
    id: '2025-03-promptwriter',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'OpenAI Prompt Writer Tool',
    description: 'Developed an advanced OpenAI prompt-writing tool for productivity.',
    type: 'project',
    icon: '📝',
    tags: ['OpenAI', 'Prompt', 'Tool'],
    category: 'advanced',
    link: ''
  },
  {
    id: '2025-03-cognizance-roorkee',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'Cognizance 2025 (IIT Roorkee)',
    description: 'Served as Campus Ambassador for Cognizance 2025, IIT Roorkee.',
    type: 'campus ambassador',
    icon: '🎓',
    tags: ['IIT Roorkee', 'Ambassador', 'Cognizance'],
    category: 'professional',
    link: ''
  },
  // February 2025
  {
    id: '2025-02-nlp-chatbot',
    date: 'February 2025',
    month: 'February',
    year: '2025',
    title: 'NLP Chatbot with TensorFlow',
    description: 'Developed an advanced NLP chatbot using TensorFlow and deep learning.',
    type: 'project',
    icon: '🤖',
    tags: ['NLP', 'TensorFlow', 'Chatbot'],
    category: 'advanced',
    link: ''
  },
  {
    id: '2025-02-cli-launcher',
    date: 'February 2025',
    month: 'February',
    year: '2025',
    title: 'CLI Project Launcher',
    description: 'Built a command-line project launcher tool for developers.',
    type: 'project',
    icon: '💻',
    tags: ['CLI', 'Tool', 'Automation'],
    category: 'intermediate',
    link: ''
  },
  // January 2025
  {
    id: '2025-01-azureacademy',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Azure Learning Academy – Jan 17',
    description: 'Attended Azure Learning Academy, featuring experts and live demos.',
    type: 'event',
    icon: '☁️',
    tags: ['Azure', 'Learning', 'Microsoft'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-01-agrilearn-launch',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Agrilearn AI Portfolio Launch',
    description: 'Launched my professional portfolio for Agrilearn AI.',
    type: 'achievement',
    icon: '🌾',
    tags: ['Agrilearn', 'Portfolio', 'AI'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-01-devtoolkit',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Dev Toolkit Vault',
    description: 'Developed a toolkit vault for developers to manage resources.',
    type: 'project',
    icon: '🧰',
    tags: ['DevTools', 'Productivity', 'Toolkit'],
    category: 'intermediate',
    link: ''
  },
  {
    id: '2025-01-public-projects',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Shared 100+ Projects Publicly',
    description: 'Shared over 100 projects in public repositories.',
    type: 'achievement',
    icon: '📢',
    tags: ['Projects', 'GitHub', 'Public'],
    category: 'professional',
    link: ''
  },
  {
    id: '2025-01-kaizen-iitd',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Kaizen 2025 (IIT Delhi)',
    description: 'Served as Campus Ambassador for Kaizen 2025, IIT Delhi.',
    type: 'campus ambassador',
    icon: '🎓',
    tags: ['IIT Delhi', 'Kaizen', 'Ambassador'],
    category: 'professional',
    link: ''
  },
  // December 2024
  {
    id: '2024-12-devblog',
    date: 'December 2024',
    month: 'December',
    year: '2024',
    title: 'Personal Dev Blog Started',
    description: 'Launched my personal development blog to share insights and tutorials.',
    type: 'achievement',
    icon: '✍️',
    tags: ['Blog', 'Writing', 'Achievement'],
    category: 'professional',
    link: ''
  },
  {
    id: '2024-12-timeline',
    date: 'December 2024',
    month: 'December',
    year: '2024',
    title: 'Timeline Page Launched',
    description: 'Built and launched a dynamic timeline page for my portfolio.',
    type: 'project',
    icon: '📅',
    tags: ['Timeline', 'Portfolio', 'Web'],
    category: 'intermediate',
    link: ''
  },
  {
    id: '2024-12-wayspire',
    date: 'December 2024',
    month: 'December',
    year: '2024',
    title: 'Wayspire',
    description: 'Served as Campus Ambassador at Wayspire.',
    type: 'campus ambassador',
    icon: '🎓',
    tags: ['Wayspire', 'Campus Ambassador', 'Leadership'],
    category: 'professional',
    link: ''
  },
  // November 2024
  {
    id: '2024-11-inventory',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Inventory Management System',
    description: 'Developed a robust inventory management system with analytics dashboard.',
    type: 'project',
    icon: '📦',
    tags: ['Inventory', 'Management', 'Analytics'],
    category: 'advanced',
    link: ''
  },
  {
    id: '2024-11-facedetect-gui',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Face Detection GUI',
    description: 'Created a GUI tool for face detection using OpenCV.',
    type: 'project',
    icon: '👁️',
    tags: ['Face Detection', 'GUI', 'OpenCV'],
    category: 'intermediate',
    link: ''
  },
  {
    id: '2024-11-movie-reco',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Movie Recommender System',
    description: 'Built a movie recommender system using collaborative filtering.',
    type: 'project',
    icon: '🎬',
    tags: ['Movie', 'Recommender', 'ML'],
    category: 'advanced',
    link: ''
  },
  // October 2024
  {
    id: '2024-10-semac',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'SEMAC - College ML Utility App',
    description: 'Developed an integrated machine learning utility app for college needs.',
    type: 'project',
    icon: '🏫',
    tags: ['ML', 'College', 'Utility'],
    category: 'advanced',
    link: ''
  },
  {
    id: '2024-10-iitmadras',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'IIT Madras',
    description: 'Campus Ambassador for IIT Madras tech events.',
    type: 'campus ambassador',
    icon: '🎓',
    tags: ['IIT Madras', 'Ambassador', 'Leadership'],
    category: 'professional',
    link: ''
  },
  {
    id: '2024-10-gssoc',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'GirlScript Summer of Code (GSSoC 2024)',
    description: 'Contributed as an open-source contributor in GSSoC 2024.',
    type: 'contributor',
    icon: '👩‍💻',
    tags: ['GSSoC', 'Open Source', 'Contributor'],
    category: 'professional',
    link: ''
  },
  // September 2024
  {
    id: '2024-09-chatterbox',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'ChatterBox - Real-Time Chat App',
    description: 'Created a real-time chat application using Socket.io.',
    type: 'project',
    icon: '💬',
    tags: ['Chat App', 'Socket.io', 'Real-Time'],
    category: 'advanced',
    link: ''
  },
  {
    id: '2024-09-imuna',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'IMUNA – International Model United Nations Association',
    description: 'Serving as Campus Ambassador for IMUNA.',
    type: 'campus ambassador',
    icon: '🌍',
    tags: ['IMUNA', 'Campus Ambassador', 'Leadership'],
    category: 'professional',
    link: ''
  },
  // August 2024
  {
    id: '2024-08-agrotech',
    date: 'August 2024',
    month: 'August',
    year: '2024',
    title: 'AgroTech - Smart Farming Platform',
    description: 'Developed a smart farming platform using IoT and AI technologies.',
    type: 'project',
    icon: '🌱',
    tags: ['AgroTech', 'Smart Farming', 'AI', 'IoT'],
    category: 'advanced',
    link: ''
  },
  // July 2024
  {
    id: '2024-07-knights-flovora',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'The Knights of Flovora',
    description: 'Launched an action-adventure RPG game built with Flutter and Dart.',
    type: 'project',
    icon: '🗡️',
    tags: ['Game', 'RPG', 'Flutter', 'Dart'],
    category: 'advanced',
    link: ''
  },
  {
    id: '2024-07-letsupgrad',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'Lets Upgrad',
    description: 'Campus Ambassador for Lets Upgrad.',
    type: 'campus ambassador',
    icon: '🎓',
    tags: ['Lets Upgrad', 'Ambassador', 'Leadership'],
    category: 'professional',
    link: ''
  },
  // June 2024
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
    category: 'advanced',
    link: ''
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
    category: 'advanced',
    link: ''
  },
  // May 2024
  {
    id: '2024-05-fitdeck',
    date: 'May 2024',
    month: 'May',
    year: '2024',
    title: 'FitDeck - Fitness Platform',
    description: 'Developed a social networking web app for fitness enthusiasts to connect and learn.',
    type: 'project',
    icon: '🏋️‍♂️',
    tags: ['Fitness', 'Social', 'Web'],
    category: 'advanced',
    link: ''
  },
  // April 2024
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
    category: 'intermediate',
    link: ''
  },
  // March 2024
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
    category: 'advanced',
    link: ''
  },
  // February 2024
  {
    id: '2024-02-learning-refresh',
    date: 'February 2024',
    month: 'February',
    year: '2024',
    title: 'Learning Refresh: Python & JavaScript',
    description: 'Dedicated February to deepening knowledge in Python and JavaScript, building small daily tools and reviewing new ES features.',
    type: 'learning',
    icon: '📚',
    tags: ['Learning', 'Python', 'JavaScript'],
    category: 'beginner',
    link: ''
  },
  // January 2024
  {
    id: '2024-01-project-planning',
    date: 'January 2024',
    month: 'January',
    year: '2024',
    title: 'Annual Project Planning & Goal Setting',
    description: 'Started the year by outlining major projects, setting new tech learning goals, and planning collaborations for 2024.',
    type: 'planning',
    icon: '🗓️',
    tags: ['Planning', 'Goals', 'Strategy'],
    category: 'professional',
    link: ''
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'event': return <Calendar className="w-4 h-4" />;
    case 'achievement': return <Award className="w-4 h-4" />;
    case 'project': return <Code className="w-4 h-4" />;
    case 'campus ambassador': return <GraduationCap className="w-4 h-4" />;
    case 'contributor': return <Users className="w-4 h-4" />;
    case 'learning': return <BookOpen className="w-4 h-4" />;
    case 'planning': return <Target className="w-4 h-4" />;
    default: return <Lightbulb className="w-4 h-4" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'event': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'achievement': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'project': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'campus ambassador': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'contributor': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
    case 'learning': return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';
    case 'planning': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const MilestoneCard: React.FC<{ milestone: Milestone; index: number }> = ({ milestone, index }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent" />
      
      {/* Timeline dot */}
      <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary-500 border-4 border-light-bg dark:border-dark-bg z-10" />
      
      {/* Content */}
      <div className="ml-16 pb-8">
        <div className="bg-light-card dark:bg-dark-card rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 transition-all duration-300 group">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{milestone.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors">
                  {milestone.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{milestone.date}</p>
              </div>
            </div>
            
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${getTypeColor(milestone.type)}`}>
              {getTypeIcon(milestone.type)}
              {milestone.type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {milestone.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {milestone.tags.map((tag) => (
              <span
                key={tag}
                className="skill-tag text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Link */}
          {milestone.link && (
            <a
              href={milestone.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm"
            >
              View Details <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MilestonePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  
  const types = Array.from(new Set(milestones.map(m => m.type)));
  const years = Array.from(new Set(milestones.map(m => m.year))).sort((a, b) => b.localeCompare(a));
  
  const filteredMilestones = useMemo(() => {
    return milestones.filter(milestone => {
      const matchesSearch = milestone.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           milestone.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           milestone.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesType = selectedType === '' || milestone.type === selectedType;
      const matchesYear = selectedYear === '' || milestone.year === selectedYear;
      
      return matchesSearch && matchesType && matchesYear;
    });
  }, [searchQuery, selectedType, selectedYear]);
  
  const stats = useMemo(() => {
    const totalMilestones = milestones.length;
    const projectCount = milestones.filter(m => m.type === 'project').length;
    const eventCount = milestones.filter(m => m.type === 'event').length;
    const achievementCount = milestones.filter(m => m.type === 'achievement').length;
    
    return { totalMilestones, projectCount, eventCount, achievementCount };
  }, []);

  return (
    <div className="container-section">
      <SectionHeading
        title="My Journey"
        subtitle="A timeline of my professional growth, projects, and achievements"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-light-card dark:bg-dark-card rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-3xl font-bold text-primary-500 mb-2">{stats.totalMilestones}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Milestones</div>
        </div>
        <div className="bg-light-card dark:bg-dark-card rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-3xl font-bold text-green-500 mb-2">{stats.projectCount}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
        </div>
        <div className="bg-light-card dark:bg-dark-card rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-3xl font-bold text-blue-500 mb-2">{stats.eventCount}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Events</div>
        </div>
        <div className="bg-light-card dark:bg-dark-card rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-3xl font-bold text-yellow-500 mb-2">{stats.achievementCount}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Achievements</div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search milestones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-10"
            />
          </div>
          
          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="form-input min-w-[150px]"
          >
            <option value="">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>
                {type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </option>
            ))}
          </select>
          
          {/* Year Filter */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="form-input min-w-[120px]"
          >
            <option value="">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {filteredMilestones.length > 0 ? (
          <div className="space-y-0">
            {filteredMilestones.map((milestone, index) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No milestones found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MilestonePage;