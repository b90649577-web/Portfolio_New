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
  Search
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

interface Milestone {
  id: string;
  date: string;
  month: string;
  year: string;
  title: string;
  description: string;
  type: 'project' | 'achievement' | 'education' | 'event';
  icon: string;
  tags?: string[];
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
  // 2025
  {
    id: '2025-06',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'OpenAI Academy Launch at The Oberoi, Delhi',
    description: 'Invited to attend the landmark launch of OpenAI Academy: Future Skills for India',
    type: 'event',
    icon: '🤖',
    tags: ['AI', 'OpenAI', 'Event']
  },
  {
    id: '2025-05',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'AICamp Meetup at Tata 1mg, Gurugram',
    description: 'Attended power-packed AICamp Meetup focusing on GenAI and community building',
    type: 'event',
    icon: '🚀',
    tags: ['AI', 'GenAI', 'Networking']
  },
  {
    id: '2025-04',
    date: 'April 2025',
    month: 'April',
    year: '2025',
    title: 'Blog Writing Tool',
    description: 'Built a comprehensive blog writing tool with Markdown support and React',
    type: 'project',
    icon: '📝',
    tags: ['React', 'Markdown', 'Web']
  },
  {
    id: '2025-03',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'Face Recognition System',
    description: 'Developed real-time face detection system using OpenCV and TensorFlow',
    type: 'project',
    icon: '👁️',
    tags: ['AI', 'OpenCV', 'TensorFlow']
  },
  {
    id: '2025-02',
    date: 'February 2025',
    month: 'February',
    year: '2025',
    title: 'NLP Chatbot',
    description: 'Created advanced NLP-based chatbot using TensorFlow',
    type: 'project',
    icon: '🤖',
    tags: ['NLP', 'TensorFlow', 'AI']
  },
  {
    id: '2025-01',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Agrilearn AI Portfolio Launch',
    description: 'Launched rainbow-themed portfolio with modern design and animations',
    type: 'project',
    icon: '🌈',
    tags: ['Portfolio', 'React', 'Design']
  },
  // 2024
  {
    id: '2024-12',
    date: 'December 2024',
    month: 'December',
    year: '2024',
    title: "Cap'nShare - Food Sharing Platform",
    description: 'Built a community-driven food sharing web application',
    type: 'project',
    icon: '🍽️',
    tags: ['MERN', 'Social', 'Web']
  },
  {
    id: '2024-11',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Inventory Management System',
    description: 'Developed comprehensive inventory management system using Django',
    type: 'project',
    icon: '📦',
    tags: ['Django', 'Python', 'Database']
  },
  {
    id: '2024-10',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'SEMAC - College Utility System',
    description: 'Built college management system with ML-powered grade prediction',
    type: 'project',
    icon: '🎓',
    tags: ['MERN', 'ML', 'Education']
  },
  {
    id: '2024-09',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'ChatterBox - Real-Time Chat App',
    description: 'Created real-time messaging application with Socket.io',
    type: 'project',
    icon: '💬',
    tags: ['Socket.io', 'Real-time', 'Chat']
  },
  {
    id: '2024-08',
    date: 'August 2024',
    month: 'August',
    year: '2024',
    title: 'AgroTech - Smart Farming Platform',
    description: 'Developed AI+IoT solution for smart farming with predictive analytics',
    type: 'project',
    icon: '🌱',
    tags: ['AI', 'IoT', 'Agriculture']
  },
  {
    id: '2024-07',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'The Knights of Flovora',
    description: 'Built 2D RPG game with quest-based progression using Flutter',
    type: 'project',
    icon: '⚔️',
    tags: ['Flutter', 'Game', 'RPG']
  },
  {
    id: '2024-06',
    date: 'June 2024',
    month: 'June',
    year: '2024',
    title: 'Career Mapper',
    description: 'Created career decision-making helper tool with job comparison features',
    type: 'project',
    icon: '🗺️',
    tags: ['React', 'Career', 'Tool']
  },
  {
    id: '2024-05',
    date: 'May 2024',
    month: 'May',
    year: '2024',
    title: 'FitDeck - Fitness Social Platform',
    description: 'Built comprehensive fitness social networking app with MERN stack',
    type: 'project',
    icon: '💪',
    tags: ['MERN', 'Fitness', 'Social']
  },
  {
    id: '2024-04',
    date: 'April 2024',
    month: 'April',
    year: '2024',
    title: 'Mathematrix',
    description: 'Developed gamified math learning web app for children',
    type: 'project',
    icon: '🔢',
    tags: ['Education', 'Game', 'Math']
  },
  {
    id: '2024-03',
    date: 'March 2024',
    month: 'March',
    year: '2024',
    title: 'Ella - AI Chat Companion',
    description: 'Built mobile-friendly AI chatbot app with React Native',
    type: 'project',
    icon: '📱',
    tags: ['React Native', 'AI', 'Mobile']
  },
  {
    id: '2024-02',
    date: 'February 2024',
    month: 'February',
    year: '2024',
    title: 'Thea - AI Therapist',
    description: 'Created empathetic AI therapy bot with custom emotional response dataset',
    type: 'project',
    icon: '🧠',
    tags: ['AI', 'NLP', 'Healthcare']
  },
  {
    id: '2024-01',
    date: 'January 2024',
    month: 'January',
    year: '2024',
    title: 'Emma - AI Desktop Assistant',
    description: 'Developed smart command-line Python-based personal assistant',
    type: 'project',
    icon: '🤖',
    tags: ['Python', 'AI', 'Assistant']
  },
  // 2023
  {
    id: '2023-09',
    date: 'September 2023',
    month: 'September',
    year: '2023',
    title: 'Started B.Tech at GL Bajaj',
    description: 'Began Computer Science and Engineering at GL Bajaj Group of Institutions',
    type: 'education',
    icon: '🎓',
    tags: ['Education', 'CSE']
  },
  {
    id: '2023-03',
    date: 'March 2023',
    month: 'March',
    year: '2023',
    title: 'Completed Class 12',
    description: 'Graduated from Delhi Public School with 66% in CBSE Board',
    type: 'achievement',
    icon: '📜',
    tags: ['Education', 'Achievement']
  }
];

const resources: Resource[] = [
  {
    id: 'emma',
    name: 'Emma',
    description: 'AI Desktop Assistant (Python)',
    github: 'https://github.com/Brajesh31/emma',
    download: '/downloads/emma.zip',
    type: 'app',
    tech: ['Python', 'APIs', 'CLI'],
    featured: true
  },
  {
    id: 'thea',
    name: 'Thea',
    description: 'Empathetic AI Therapist Chatbot',
    github: 'https://github.com/Brajesh31/thea',
    download: '/downloads/thea.zip',
    type: 'app',
    tech: ['Python', 'TensorFlow', 'NLP'],
    featured: true
  },
  {
    id: 'ella',
    name: 'Ella',
    description: 'AI Companion Chat App (React Native)',
    github: 'https://github.com/Brajesh31/ella',
    download: '/downloads/ella.apk',
    type: 'app',
    tech: ['React Native', 'AI', 'Mobile'],
    featured: true
  },
  {
    id: 'fitdeck',
    name: 'FitDeck',
    description: 'Fitness Social Networking App',
    github: 'https://github.com/Brajesh31/fitdeck',
    download: '/downloads/fitdeck.zip',
    type: 'web',
    tech: ['MERN', 'Social', 'Fitness']
  },
  {
    id: 'mathematrix',
    name: 'Mathematrix',
    description: 'Gamified Math Learning Web App',
    github: 'https://github.com/Brajesh31/mathematrix',
    download: '/downloads/mathematrix.zip',
    type: 'web',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    id: 'knights',
    name: 'The Knights of Flovora',
    description: 'RPG Game built with Flutter',
    github: 'https://github.com/Brajesh31/knights',
    download: '/downloads/knights.zip',
    type: 'game',
    tech: ['Flutter', 'Dart', 'Game Engine']
  },
  {
    id: 'career-mapper',
    name: 'Career Mapper',
    description: 'Career decision-making helper tool',
    github: 'https://github.com/Brajesh31/career-mapper',
    download: '/downloads/career-mapper.zip',
    type: 'tool',
    tech: ['React', 'Career', 'Analytics']
  },
  {
    id: 'agrotech',
    name: 'AgroTech',
    description: 'AI + IoT Solution for Smart Farming',
    github: 'https://github.com/Brajesh31/agrotech',
    download: '/downloads/agrotech.zip',
    type: 'web',
    tech: ['AI', 'IoT', 'Agriculture']
  },
  {
    id: 'inventory',
    name: 'Inventory Manager',
    description: 'Order/Stock system using Django',
    github: 'https://github.com/Brajesh31/inventory',
    download: '/downloads/inventory.zip',
    type: 'web',
    tech: ['Django', 'Python', 'Database']
  },
  {
    id: 'chatbot-nlp',
    name: 'Chatbot NLP',
    description: 'NLP-based AI chatbot using TensorFlow',
    github: 'https://github.com/Brajesh31/chatbot-nlp',
    download: '/downloads/chatbot-nlp.zip',
    type: 'app',
    tech: ['TensorFlow', 'NLP', 'AI']
  },
  {
    id: 'face-recognition',
    name: 'Face Recognition',
    description: 'Real-time face detection with TensorFlow & CV',
    github: 'https://github.com/Brajesh31/face-recognition',
    download: '/downloads/face-recognition.zip',
    type: 'app',
    tech: ['OpenCV', 'TensorFlow', 'Computer Vision']
  },
  {
    id: 'cheat-sheets',
    name: 'Cheat Sheets Vault',
    description: 'Python, JS, Git, ML Notes',
    github: 'https://github.com/Brajesh31/cheat-sheets',
    download: '/downloads/cheat-sheets.pdf',
    type: 'document',
    tech: ['Documentation', 'Reference', 'Notes']
  },
  {
    id: 'resume-templates',
    name: 'Resume Templates',
    description: 'Modern, ATS-compliant resumes (LaTeX/DOCX)',
    github: 'https://github.com/Brajesh31/resume-templates',
    download: '/downloads/resume-templates.docx',
    type: 'document',
    tech: ['LaTeX', 'Templates', 'Career']
  }
];

// Month-wise color mapping for professional, calm theme
const monthColors = {
  'January': {
    light: 'from-blue-100 to-blue-200',
    dark: 'from-blue-500 to-blue-600'
  },
  'February': {
    light: 'from-purple-100 to-violet-200',
    dark: 'from-violet-500 to-purple-600'
  },
  'March': {
    light: 'from-cyan-100 to-teal-200',
    dark: 'from-cyan-500 to-teal-600'
  },
  'April': {
    light: 'from-green-100 to-emerald-200',
    dark: 'from-green-500 to-emerald-600'
  },
  'May': {
    light: 'from-yellow-100 to-amber-200',
    dark: 'from-yellow-500 to-amber-600'
  },
  'June': {
    light: 'from-rose-100 to-pink-200',
    dark: 'from-rose-500 to-pink-600'
  },
  'July': {
    light: 'from-indigo-100 to-sky-200',
    dark: 'from-indigo-500 to-sky-600'
  },
  'August': {
    light: 'from-teal-100 to-lime-200',
    dark: 'from-teal-500 to-lime-600'
  },
  'September': {
    light: 'from-orange-100 to-amber-200',
    dark: 'from-orange-500 to-amber-600'
  },
  'October': {
    light: 'from-fuchsia-100 to-pink-200',
    dark: 'from-fuchsia-500 to-pink-600'
  },
  'November': {
    light: 'from-slate-100 to-gray-200',
    dark: 'from-slate-600 to-gray-700'
  },
  'December': {
    light: 'from-zinc-100 to-blue-200',
    dark: 'from-zinc-600 to-blue-700'
  }
};

const typeColors = {
  project: {
    light: 'from-blue-100 to-cyan-200',
    dark: 'from-blue-500 to-cyan-600'
  },
  achievement: {
    light: 'from-yellow-100 to-orange-200',
    dark: 'from-yellow-500 to-orange-600'
  },
  education: {
    light: 'from-green-100 to-emerald-200',
    dark: 'from-green-500 to-emerald-600'
  },
  event: {
    light: 'from-purple-100 to-pink-200',
    dark: 'from-purple-500 to-pink-600'
  }
};

const resourceTypeColors = {
  app: {
    light: 'from-blue-100 to-indigo-200',
    dark: 'from-blue-500 to-indigo-600'
  },
  web: {
    light: 'from-green-100 to-teal-200',
    dark: 'from-green-500 to-teal-600'
  },
  game: {
    light: 'from-purple-100 to-pink-200',
    dark: 'from-purple-500 to-pink-600'
  },
  tool: {
    light: 'from-orange-100 to-red-200',
    dark: 'from-orange-500 to-red-600'
  },
  document: {
    light: 'from-gray-100 to-slate-200',
    dark: 'from-gray-500 to-slate-600'
  }
};

const MilestoneCard: React.FC<{ milestone: Milestone; index: number }> = ({ milestone, index }) => {
  const monthGradient = monthColors[milestone.month];
  const typeGradient = typeColors[milestone.type];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative p-4 rounded-xl shadow-md border border-white/20 dark:border-white/10
        bg-gradient-to-br ${monthGradient.light} dark:${monthGradient.dark}
        backdrop-blur-sm bg-opacity-50 dark:bg-opacity-30
        hover:shadow-lg hover:scale-105 transition-all duration-300 group`}
    >
      <div className="flex items-start gap-4">
        <div className={`text-2xl p-3 rounded-lg bg-gradient-to-br ${typeGradient.light} dark:${typeGradient.dark}
          bg-opacity-50 dark:bg-opacity-30 backdrop-blur-sm border border-white/20 dark:border-white/10`}>
          {milestone.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={14} className="text-gray-600 dark:text-gray-300" />
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{milestone.date}</span>
          </div>
          <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {milestone.title}
          </h3>
          <p className="text-gray-700 dark:text-zinc-200 mb-4 text-sm leading-relaxed">
            {milestone.description}
          </p>
          {milestone.tags && (
            <div className="flex flex-wrap gap-2">
              {milestone.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-white/30 dark:bg-black/20 
                    backdrop-blur-sm border border-white/40 dark:border-gray-600
                    text-gray-700 dark:text-zinc-200 font-medium"
                >
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
  const resourceGradient = resourceTypeColors[resource.type];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative p-4 rounded-xl shadow-md border border-white/20 dark:border-white/10
        bg-gradient-to-br ${resourceGradient.light} dark:${resourceGradient.dark}
        backdrop-blur-sm bg-opacity-50 dark:bg-opacity-30
        hover:shadow-lg hover:scale-105 transition-all duration-300 group`}
    >
      {resource.featured && (
        <div className="absolute -top-2 -right-2">
          <Star className="w-5 h-5 text-yellow-500 fill-current drop-shadow-sm" />
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold mb-1 text-gray-800 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {resource.name}
          </h3>
          <p className="text-sm text-gray-700 dark:text-zinc-200">
            {resource.description}
          </p>
        </div>
        <div className={`p-2 rounded-lg bg-gradient-to-br ${resourceGradient.light} dark:${resourceGradient.dark}
          bg-opacity-30 dark:bg-opacity-20 backdrop-blur-sm border border-white/20 dark:border-white/10`}>
          <Code size={18} className="text-gray-700 dark:text-zinc-200" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-md bg-white/40 dark:bg-black/20 
              text-gray-700 dark:text-zinc-200 font-medium backdrop-blur-sm
              border border-white/30 dark:border-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={resource.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-gray-800 dark:bg-gray-700 
            text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 
            transition-colors text-sm font-medium shadow-sm"
        >
          <Github size={14} />
          GitHub
        </a>
        {resource.download && (
          <a
            href={resource.download}
            download
            className="flex items-center gap-2 px-3 py-2 bg-primary-600 
              text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium shadow-sm"
          >
            <Download size={14} />
            Download
          </a>
        )}
      </div>
    </motion.div>
  );
};

const MilestonePage = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set(['2025', '2024']));

  const years = Array.from(new Set(milestones.map(m => m.year))).sort().reverse();
  const types = Array.from(new Set(milestones.map(m => m.type)));

  const filteredMilestones = milestones.filter(milestone => {
    const matchesYear = selectedYear === 'all' || milestone.year === selectedYear;
    const matchesType = selectedType === 'all' || milestone.type === selectedType;
    const matchesSearch = milestone.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         milestone.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesType && matchesSearch;
  });

  const groupedMilestones = years.reduce((acc, year) => {
    acc[year] = filteredMilestones.filter(m => m.year === year);
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

  const featuredResources = resources.filter(r => r.featured);
  const otherResources = resources.filter(r => !r.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 
      dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="🏆 Achievements & Knowledge Hub"
          subtitle="Journey through milestones and explore the resource vault"
        />

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
              bg-clip-text text-transparent">
              Milestone Timeline
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 p-6 bg-white/60 dark:bg-gray-800/60 
            backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/50 shadow-md">
            <div className="flex items-center gap-2">
              <Search size={20} className="text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search milestones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                  bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-zinc-100
                  backdrop-blur-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  transition-all duration-300"
              />
            </div>
            
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-zinc-100
                backdrop-blur-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent
                transition-all duration-300"
            >
              <option value="all">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-zinc-100
                backdrop-blur-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent
                transition-all duration-300"
            >
              <option value="all">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {years.map(year => (
              <div key={year} className="space-y-4">
                <button
                  onClick={() => toggleYear(year)}
                  className="flex items-center gap-3 w-full text-left p-4 
                    bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                    rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300
                    shadow-md backdrop-blur-sm"
                >
                  <span className="text-2xl font-bold">{year}</span>
                  <span className="text-sm opacity-90">
                    ({groupedMilestones[year]?.length || 0} milestones)
                  </span>
                  <div className="ml-auto">
                    {expandedYears.has(year) ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedYears.has(year) && groupedMilestones[year] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden"
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

        {/* Knowledge Hub Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 
              bg-clip-text text-transparent">
              Knowledge Hub & Resource Vault
            </h2>
          </div>

          {/* Featured Resources */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-zinc-100 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </div>
          </div>

          {/* All Resources */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-zinc-100">
              All Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {otherResources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MilestonePage;