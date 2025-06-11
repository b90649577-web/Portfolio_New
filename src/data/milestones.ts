import { Calendar, Award, Code, GraduationCap, Users, BookOpen, Target, Lightbulb, Briefcase, Github, ExternalLink, Download, FileText, Link as LinkIcon, AlignCenterVertical as Certificate, Presentation, Folder } from 'lucide-react';

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
  // JUNE 2025
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
    id: '2025-06-uiuxai',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'UI/UX Design in the World of AI',
    description: 'Attended an insightful session on how AI is revolutionizing design workflows and creativity.',
    type: 'event',
    icon: '🎨',
    tags: ['UI/UX', 'AI', 'Event', 'Design'],
    category: 'professional'
  },
  {
    id: '2025-06-ssoc',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'Selected as SSOC Season 4 Contributor',
    description: 'Selected as a contributor for Script Summer of Code Season 4.',
    type: 'achievement',
    icon: '🏆',
    tags: ['SSOC', 'OpenSource', 'Achievement'],
    category: 'professional'
  },
  {
    id: '2025-06-mentorship-ui',
    date: 'June 2025',
    month: 'June',
    year: '2025',
    title: 'Mentorship Cards UI Concept',
    description: 'Designed an advanced UI concept for mentorship cards to enhance learner engagement.',
    type: 'project',
    icon: '🧑‍🏫',
    tags: ['UI', 'Mentorship', 'Project', 'Design'],
    category: 'advanced'
  },

// MAY 2025
  {
    id: '2025-05-powerbi',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Power BI & AI Summit – Delhi Edition',
    description: 'Participated in the Power BI & AI Summit, exploring real-world AI and BI applications.',
    type: 'event',
    icon: '📊',
    tags: ['Power BI', 'AI', 'Summit', 'Delhi'],
    category: 'professional'
  },
  {
    id: '2025-05-aicamp',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'AICamp Meetup at Tata 1mg, Gurugram',
    description: 'Attended the AICamp Meetup, networking with AI professionals and learning about cutting-edge tools.',
    type: 'event',
    icon: '🤝',
    tags: ['AI', 'Meetup', 'Networking', 'Gurugram'],
    category: 'professional'
  },
  {
    id: '2025-05-business4',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Business4.0 Meetup – AI for Business Augmentation',
    description: 'Explored AI applications in business at the Business4.0 Meetup.',
    type: 'event',
    icon: '💼',
    tags: ['AI', 'Business', 'Meetup'],
    category: 'professional'
  },
  {
    id: '2025-05-ainxt',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'AI.NXT AI Summit – Gurugram',
    description: 'Attended the AI.NXT AI Summit focused on Generative AI, ML, and Responsible AI.',
    type: 'event',
    icon: '🚀',
    tags: ['AI', 'Summit', 'Gurugram'],
    category: 'professional'
  },
  {
    id: '2025-05-inclusivedesign',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Inclusive Design Research – Microsoft Gurugram',
    description: 'Participated in Inclusive Design Research workshop advancing UX in social impact.',
    type: 'event',
    icon: '🧩',
    tags: ['Design', 'UX', 'Microsoft', 'Gurugram'],
    category: 'professional'
  },
  {
    id: '2025-05-mahakumbh',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Starting Mahakumbh 2025',
    description: 'Engaged with startups and innovators at one of India\'s largest tech events.',
    type: 'event',
    icon: '🎉',
    tags: ['Startup', 'Event', 'Mahakumbh'],
    category: 'professional'
  },
  {
    id: '2025-05-artists-ai',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'How Artists Use AI – Microsoft Gurugram',
    description: 'Explored how artists and creators are collaborating with AI for music and art.',
    type: 'event',
    icon: '🎵',
    tags: ['AI', 'Art', 'Microsoft', 'Gurugram'],
    category: 'professional'
  },
  {
    id: '2025-05-ai-pay',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'AI Innovation Pay 2025 – Gurgaon',
    description: 'Attended the AI Innovation Pay event focused on responsible AI and ethical development.',
    type: 'event',
    icon: '💡',
    tags: ['AI', 'Innovation', 'Gurgaon'],
    category: 'professional'
  },
  {
    id: '2025-05-cyberconnect',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Cyber Connect – Microsoft, Noida',
    description: 'Gained hands-on experience in cybersecurity at the Microsoft Cyber Connect event.',
    type: 'event',
    icon: '🛡️',
    tags: ['Cybersecurity', 'Microsoft', 'Noida'],
    category: 'professional'
  },
  {
    id: '2025-05-voicebot',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    title: 'Voice Bot + Calendar Sync Prototype',
    description: 'Built an advanced prototype integrating voice bots with calendar sync capabilities.',
    type: 'project',
    icon: '🗣️',
    tags: ['VoiceBot', 'Calendar', 'Prototype'],
    category: 'advanced'
  },

// APRIL 2025
  {
    id: '2025-04-xrcreator',
    date: 'April 2025',
    month: 'April',
    year: '2025',
    title: 'XR Creator Hackathon – 91 Springboard, Noida',
    description: 'Participated in the XR Creator Hackathon focusing on extended reality solutions.',
    type: 'event',
    icon: '🌐',
    tags: ['XR', 'Hackathon', 'Noida'],
    category: 'professional'
  },
  {
    id: '2025-04-advdashboard',
    date: 'April 2025',
    month: 'April',
    year: '2025',
    title: 'Advanced Dashboard UI',
    description: 'Developed a cutting-edge dashboard UI for data visualization and insights.',
    type: 'project',
    icon: '📈',
    tags: ['Dashboard', 'UI', 'Project'],
    category: 'advanced'
  },
  {
    id: '2025-04-resumeeval',
    date: 'April 2025',
    month: 'April',
    year: '2025',
    title: 'AI-Powered Resume Evaluator',
    description: 'Built an AI-powered tool for automated resume screening and evaluation.',
    type: 'project',
    icon: '📄',
    tags: ['AI', 'Resume', 'Project'],
    category: 'advanced'
  },

// MARCH 2025
  {
    id: '2025-03-iitdelhi',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'IIT Delhi – BECon & Startup Expo',
    description: 'Showcased projects and networked with founders at BECon & Startup Expo, IIT Delhi.',
    type: 'event',
    icon: '🏢',
    tags: ['IIT', 'Startup', 'Expo', 'Delhi'],
    category: 'professional'
  },
  {
    id: '2025-03-unicorns-iitd',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'The Unicorns from IIT Delhi – Feb 1 Event',
    description: 'Attended "The Unicorns" event at IIT Delhi, gaining insights from industry leaders.',
    type: 'event',
    icon: '🦄',
    tags: ['IIT', 'Event', 'Delhi'],
    category: 'professional'
  },
  {
    id: '2025-03-cognizance',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'Cognizance 2025 (IIT Roorkee)',
    description: 'Campus ambassador for Cognizance 2025, the flagship tech fest of IIT Roorkee.',
    type: 'campus ambassador',
    icon: '🎓',
    tags: ['IIT', 'Campus Ambassador', 'Roorkee'],
    category: 'professional'
  },
  {
    id: '2025-03-facedash',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'Face Recognition Dashboard',
    description: 'Developed an advanced dashboard for real-time face recognition and analytics.',
    type: 'project',
    icon: '🧑‍💻',
    tags: ['Face Recognition', 'Dashboard', 'Project'],
    category: 'advanced'
  },
  {
    id: '2025-03-promptwriter',
    date: 'March 2025',
    month: 'March',
    year: '2025',
    title: 'OpenAI Prompt Writer Tool',
    description: 'Created a custom prompt engineering tool for OpenAI applications.',
    type: 'project',
    icon: '✍️',
    tags: ['OpenAI', 'Prompt Engineering', 'Project'],
    category: 'advanced'
  },

// FEBRUARY 2025
  {
    id: '2025-02-nlpchatbot',
    date: 'February 2025',
    month: 'February',
    year: '2025',
    title: 'NLP Chatbot with TensorFlow',
    description: 'Developed a TensorFlow-powered NLP chatbot for intelligent conversations.',
    type: 'project',
    icon: '💬',
    tags: ['NLP', 'Chatbot', 'TensorFlow', 'Project'],
    category: 'advanced'
  },
  {
    id: '2025-02-cli-launcher',
    date: 'February 2025',
    month: 'February',
    year: '2025',
    title: 'CLI Project Launcher',
    description: 'Built a command-line interface tool to launch and manage projects efficiently.',
    type: 'project',
    icon: '⌨️',
    tags: ['CLI', 'Tool', 'Project'],
    category: 'intermediate'
  },

// JANUARY 2025
  {
    id: '2025-01-kaizen',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Kaizen 2025 (IIT Delhi)',
    description: 'Campus ambassador for Kaizen 2025, IIT Delhi\'s annual technical and cultural fest.',
    type: 'campus ambassador',
    icon: '🎓',
    tags: ['IIT', 'Kaizen', 'Campus Ambassador', 'Delhi'],
    category: 'professional'
  },
  {
    id: '2025-01-azureacademy',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Azure Learning Academy – Jan 17',
    description: 'Attended a learning academy session on Azure Cloud and modern cloud technologies.',
    type: 'event',
    icon: '☁️',
    tags: ['Azure', 'Cloud', 'Learning', 'Event'],
    category: 'professional'
  },
  {
    id: '2025-01-agrilearn',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Agrilearn AI Portfolio Launch',
    description: 'Launched the Agrilearn AI portfolio website with new features and branding.',
    type: 'achievement',
    icon: '🌱',
    tags: ['Agrilearn', 'AI', 'Launch', 'Portfolio'],
    category: 'professional'
  },
  {
    id: '2025-01-devtoolkit',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Dev Toolkit Vault',
    description: 'Built a vault of essential developer toolkits for rapid development.',
    type: 'project',
    icon: '🧰',
    tags: ['Developer', 'Toolkit', 'Project'],
    category: 'intermediate'
  },
  {
    id: '2025-01-100projects',
    date: 'January 2025',
    month: 'January',
    year: '2025',
    title: 'Shared 100+ Projects Publicly',
    description: 'Achieved a milestone of publicly sharing over 100 projects with the community.',
    type: 'achievement',
    icon: '📢',
    tags: ['Projects', 'Milestone', 'Community'],
    category: 'professional'
  },

  // 2024
// DECEMBER 2024
  {
    id: '2024-12-devblog',
    date: 'December 2024',
    month: 'December',
    year: '2024',
    title: 'Personal Dev Blog Started',
    description: 'Launched a personal development blog to share insights, tutorials, and tech journeys.',
    type: 'achievement',
    icon: '📝',
    tags: ['Blog', 'Achievement', 'Personal', 'Writing'],
    category: 'professional'
  },
  {
    id: '2024-12-timeline',
    date: 'December 2024',
    month: 'December',
    year: '2024',
    title: 'Timeline Page Launched',
    description: 'Developed and released an interactive timeline page to showcase milestones and projects.',
    type: 'project',
    icon: '⏳',
    tags: ['Timeline', 'Project', 'Portfolio'],
    category: 'intermediate'
  },
  {
    id: '2024-12-wayspire',
    date: 'December 2024',
    month: 'December',
    year: '2024',
    title: 'Wayspire',
    description: 'Served as campus ambassador for Wayspire, fostering student engagement.',
    type: 'campus ambassador',
    icon: '🎓',
    tags: ['Wayspire', 'Campus Ambassador', 'Leadership'],
    category: 'professional'
  },

// NOVEMBER 2024
  {
    id: '2024-11-inventory',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Inventory Management System',
    description: 'Built an advanced inventory management system to streamline stock and orders.',
    type: 'project',
    icon: '📦',
    tags: ['Inventory', 'Project', 'Management'],
    category: 'advanced'
  },
  {
    id: '2024-11-facedetect',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Face Detection GUI',
    description: 'Created a user-friendly GUI for real-time face detection using computer vision.',
    type: 'project',
    icon: '🖼️',
    tags: ['Face Detection', 'GUI', 'Project'],
    category: 'intermediate'
  },
  {
    id: '2024-11-movierec',
    date: 'November 2024',
    month: 'November',
    year: '2024',
    title: 'Movie Recommender System',
    description: 'Developed a machine learning-based movie recommender system.',
    type: 'project',
    icon: '🎬',
    tags: ['Movie', 'ML', 'Recommender'],
    category: 'advanced'
  },

// OCTOBER 2024
  {
    id: '2024-10-iitmadras',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'IIT Madras',
    description: 'Served as campus ambassador for IIT Madras flagship programs.',
    type: 'campus ambassador',
    icon: '🎓',
    tags: ['IIT Madras', 'Campus Ambassador'],
    category: 'professional'
  },
  {
    id: '2024-10-gssoc',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'GirlScript Summer of Code (GSSoC 2024)',
    description: 'Contributed to open source as a participant in GSSoC 2024.',
    type: 'contributor',
    icon: '👩‍💻',
    tags: ['GSSoC', 'Open Source', 'Contributor'],
    category: 'professional'
  },
  {
    id: '2024-10-semac',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'SEMAC - College ML Utility App',
    description: 'Developed a machine learning utility app for semester management and analytics.',
    type: 'project',
    icon: '🤖',
    tags: ['ML', 'Utility', 'Project'],
    category: 'advanced'
  },
  {
    id: '2024-10-mlformui',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'Machine Learning Form UI',
    description: 'Designed interactive UI for ML-based form submission and predictions.',
    type: 'project',
    icon: '📑',
    tags: ['ML', 'UI', 'Project'],
    category: 'intermediate'
  },
  {
    id: '2024-10-figmahtml',
    date: 'October 2024',
    month: 'October',
    year: '2024',
    title: 'Figma to HTML UI Clone',
    description: 'Cloned UI from Figma designs to HTML/CSS for rapid prototyping.',
    type: 'project',
    icon: '🖌️',
    tags: ['Figma', 'HTML', 'UI', 'Clone'],
    category: 'intermediate'
  },

// SEPTEMBER 2024
  {
    id: '2024-09-chatterbox',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'ChatterBox - Real-Time Chat App',
    description: 'Developed a real-time chat application using Node.js and Socket.io.',
    type: 'project',
    icon: '💬',
    tags: ['Chat', 'Real-Time', 'App'],
    category: 'advanced'
  },
  {
    id: '2024-09-imuna',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'IMUNA – International Model United Nations Association',
    description: 'Campus ambassador for IMUNA, facilitating international MUN events.',
    type: 'campus ambassador',
    icon: '🌍',
    tags: ['IMUNA', 'MUN', 'Campus Ambassador'],
    category: 'professional'
  },
  {
    id: '2024-09-expensetracker',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'Expense Tracker - React',
    description: 'Created a React-based app to track and visualize expenses.',
    type: 'project',
    icon: '💸',
    tags: ['Expense', 'React', 'App'],
    category: 'intermediate'
  },
  {
    id: '2024-09-cssuikit',
    date: 'September 2024',
    month: 'September',
    year: '2024',
    title: 'CSS UI Kit',
    description: 'Designed a CSS UI kit for faster front-end development.',
    type: 'project',
    icon: '🎨',
    tags: ['CSS', 'UI Kit', 'Frontend'],
    category: 'intermediate'
  },

// AUGUST 2024
  {
    id: '2024-08-agrotech',
    date: 'August 2024',
    month: 'August',
    year: '2024',
    title: 'AgroTech - Smart Farming Platform',
    description: 'Built a smart farming platform leveraging IoT and AI for agriculture.',
    type: 'project',
    icon: '🌾',
    tags: ['AgroTech', 'Smart Farming', 'AI', 'IoT'],
    category: 'advanced'
  },
  {
    id: '2024-08-jwt',
    date: 'August 2024',
    month: 'August',
    year: '2024',
    title: 'JWT Authentication System',
    description: 'Implemented secure authentication using JSON Web Tokens (JWT).',
    type: 'project',
    icon: '🔐',
    tags: ['JWT', 'Auth', 'Security'],
    category: 'advanced'
  },
  {
    id: '2024-08-mobileforms',
    date: 'August 2024',
    month: 'August',
    year: '2024',
    title: 'Mobile Forms UI Mockups',
    description: 'Created mobile-first UI mockups for forms and input screens.',
    type: 'project',
    icon: '📱',
    tags: ['Mobile', 'Forms', 'UI', 'Mockup'],
    category: 'intermediate'
  },

// JULY 2024
  {
    id: '2024-07-knightsflovora',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'The Knights of Flovora',
    description: 'Developed an action-adventure RPG game using Flutter and Dart.',
    type: 'project',
    icon: '🛡️',
    tags: ['Game', 'Flutter', 'RPG'],
    category: 'advanced'
  },
  {
    id: '2024-07-prod-dashboard',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'Productivity Dashboard',
    description: 'Built a dashboard to track and boost personal productivity.',
    type: 'project',
    icon: '📊',
    tags: ['Productivity', 'Dashboard'],
    category: 'intermediate'
  },
  {
    id: '2024-07-javabill',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'Java Billing Application',
    description: 'Developed a billing application with Java for desktop environments.',
    type: 'project',
    icon: '💻',
    tags: ['Java', 'Billing', 'App'],
    category: 'intermediate'
  },
  {
    id: '2024-07-letsupgrad',
    date: 'July 2024',
    month: 'July',
    year: '2024',
    title: 'Lets Upgrad',
    description: 'Represented Lets Upgrad as campus ambassador, promoting upskilling initiatives.',
    type: 'campus ambassador',
    icon: '🎓',
    tags: ['Lets Upgrad', 'Campus Ambassador'],
    category: 'professional'
  },

// JUNE 2024
  {
    id: '2024-06-careermapper',
    date: 'June 2024',
    month: 'June',
    year: '2024',
    title: 'Career Mapper',
    description: 'Developed an application to compare jobs based on multiple lifestyle indices.',
    type: 'project',
    icon: '🗺️',
    tags: ['Career', 'Job Comparison', 'App'],
    category: 'advanced'
  },
  {
    id: '2024-06-capnshare',
    date: 'June 2024',
    month: 'June',
    year: '2024',
    title: "Cap'nShare - Food Sharing App",
    description: 'Created a web app to share food across campus and reduce wastage.',
    type: 'project',
    icon: '🍱',
    tags: ['Food', 'Sharing', 'App'],
    category: 'advanced'
  },
  {
    id: '2024-06-roadmap',
    date: 'June 2024',
    month: 'June',
    year: '2024',
    title: 'Roadmap Planner Web App',
    description: 'Designed a roadmap planning tool for tracking learning or project progress.',
    type: 'project',
    icon: '🛣️',
    tags: ['Roadmap', 'Planner', 'Web App'],
    category: 'intermediate'
  },

// MAY 2024
  {
    id: '2024-05-fitdeck',
    date: 'May 2024',
    month: 'May',
    year: '2024',
    title: 'FitDeck - Fitness Platform',
    description: 'Developed a platform for fitness enthusiasts to connect and share routines.',
    type: 'project',
    icon: '🏋️',
    tags: ['Fitness', 'Platform', 'App'],
    category: 'advanced'
  },
  {
    id: '2024-05-fitnesstracker',
    date: 'May 2024',
    month: 'May',
    year: '2024',
    title: 'Fitness Tracker with Charts',
    description: 'Created a fitness tracker featuring interactive data visualizations.',
    type: 'project',
    icon: '📈',
    tags: ['Fitness', 'Tracker', 'Charts'],
    category: 'intermediate'
  },
  {
    id: '2024-05-moodtracker',
    date: 'May 2024',
    month: 'May',
    year: '2024',
    title: 'Mood Tracker UI Design',
    description: 'Designed a visually appealing mood tracker user interface.',
    type: 'project',
    icon: '😊',
    tags: ['Mood', 'UI', 'Tracker'],
    category: 'intermediate'
  },

// APRIL 2024
  {
    id: '2024-04-mathematrix',
    date: 'April 2024',
    month: 'April',
    year: '2024',
    title: 'Mathematrix',
    description: 'Built an interactive website to teach and test multiplication tables.',
    type: 'project',
    icon: '✖️',
    tags: ['Math', 'Website', 'Learning'],
    category: 'intermediate'
  },
  {
    id: '2024-04-resumegen',
    date: 'April 2024',
    month: 'April',
    year: '2024',
    title: 'Resume Generator with HTML Export',
    description: 'Developed a resume generator that exports directly to HTML.',
    type: 'project',
    icon: '📄',
    tags: ['Resume', 'Generator', 'HTML'],
    category: 'intermediate'
  },
  {
    id: '2024-04-musicviz',
    date: 'April 2024',
    month: 'April',
    year: '2024',
    title: 'Music Visualizer',
    description: 'Created an interactive music visualizer using JavaScript and Web Audio API.',
    type: 'project',
    icon: '🎶',
    tags: ['Music', 'Visualizer', 'JS'],
    category: 'intermediate'
  },

// MARCH 2024
  {
    id: '2024-03-ella',
    date: 'March 2024',
    month: 'March',
    year: '2024',
    title: 'Ella - AI Chat Companion',
    description: 'Built an AI-powered chat companion mobile app with React Native.',
    type: 'project',
    icon: '🤖',
    tags: ['AI', 'Chat', 'Mobile', 'Companion'],
    category: 'advanced'
  },

  // 2023

    // DECEMBER 2023
    {
      id: '2023-12-dataviz',
      date: 'December 2023',
      month: 'December',
      year: '2023',
      title: 'Data Visualizer Dashboard',
      description: 'Python Dash/Streamlit: Upload CSV, plot bar/line/pie charts, share results.',
      type: 'project',
      icon: '📊',
      tags: ['Python', 'Dash', 'Streamlit', 'Visualization'],
      category: 'intermediate'
    },
    {
      id: '2023-12-musicvisualizer',
      date: 'December 2023',
      month: 'December',
      year: '2023',
      title: 'Music Visualizer Web App',
      description: 'JavaScript Canvas/Web Audio API: upload audio, visualize waveform, customize themes.',
      type: 'project',
      icon: '🎶',
      tags: ['JavaScript', 'Web Audio', 'Canvas', 'Music'],
      category: 'intermediate'
    },

    // NOVEMBER 2023
    {
      id: '2023-11-surveytool',
      date: 'November 2023',
      month: 'November',
      year: '2023',
      title: 'Survey Creator Tool',
      description: 'Built a survey tool to create, share, and analyze surveys.',
      type: 'project',
      icon: '📝',
      tags: ['Survey', 'Tool'],
      category: 'intermediate'
    },
    {
      id: '2023-11-login-firebase',
      date: 'November 2023',
      month: 'November',
      year: '2023',
      title: 'Login Auth Flow (React + Firebase)',
      description: 'Authentication flow using React and Firebase for secure login.',
      type: 'project',
      icon: '🔐',
      tags: ['React', 'Firebase', 'Auth'],
      category: 'intermediate'
    },
    {
      id: '2023-11-movie-recommend',
      date: 'November 2023',
      month: 'November',
      year: '2023',
      title: 'Movie/Book Recommendation Engine',
      description: 'Python (Flask/FastAPI) + scikit-learn: collaborative filtering, trending lists.',
      type: 'project',
      icon: '🎬',
      tags: ['Python', 'ML', 'Recommendation'],
      category: 'intermediate'
    },

    // OCTOBER 2023
    {
      id: '2023-10-notesapp',
      date: 'October 2023',
      month: 'October',
      year: '2023',
      title: 'Notes App with Rich Text & Folders',
      description: 'React + Node.js: rich text editing, folders, search, dark mode.',
      type: 'project',
      icon: '🗒️',
      tags: ['React', 'Node.js', 'Notes'],
      category: 'intermediate'
    },

    // SEPTEMBER 2023
    {
      id: '2023-09-gbgigroup',
      date: 'September 2023',
      month: 'September',
      year: '2023',
      title: 'Started B.Tech at GL Bajaj',
      description: 'Started B.Tech CSE at GL Bajaj Group of Institutions.',
      type: 'education',
      icon: '🎓',
      tags: ['GL Bajaj', 'CSE'],
      category: 'professional'
    },
    {
      id: '2023-09-inventory-dashboard',
      date: 'September 2023',
      month: 'September',
      year: '2023',
      title: 'Inventory Management Dashboard',
      description: 'Django/Flask + SQLite/PostgreSQL: stock CRUD, alerts, graphs, billing.',
      type: 'project',
      icon: '📦',
      tags: ['Django', 'Flask', 'Inventory'],
      category: 'intermediate'
    },

    // AUGUST 2023
    {
      id: '2023-08-realtimechat',
      date: 'August 2023',
      month: 'August',
      year: '2023',
      title: 'Real-Time Chat Application',
      description: 'React + Node.js + Socket.io: multi-room chat, emojis, typing indicators.',
      type: 'project',
      icon: '💬',
      tags: ['React', 'Node.js', 'Socket.io', 'Chat'],
      category: 'intermediate'
    },

    // JULY 2023
    {
      id: '2023-07-jobcomparison',
      date: 'July 2023',
      month: 'July',
      year: '2023',
      title: 'Job Comparison Platform',
      description: 'React + Express + MySQL: compare jobs by CTC, perks, reviews.',
      type: 'project',
      icon: '💼',
      tags: ['React', 'Express', 'MySQL', 'Jobs'],
      category: 'intermediate'
    },

    // JUNE 2023
    {
      id: '2023-06-attendance',
      date: 'June 2023',
      month: 'June',
      year: '2023',
      title: 'Student/Employee Attendance App',
      description: 'Java (Swing/JavaFX) or Python (Tkinter): mark/view attendance, export reports.',
      type: 'project',
      icon: '🗓️',
      tags: ['Java', 'Python', 'Attendance'],
      category: 'intermediate'
    },

    // MAY 2023
    {
      id: '2023-05-quizmgmt',
      date: 'May 2023',
      month: 'May',
      year: '2023',
      title: 'Quiz Management System',
      description: 'Python Flask/Django: admin panel, timed quizzes, leaderboard.',
      type: 'project',
      icon: '📝',
      tags: ['Python', 'Quiz'],
      category: 'intermediate'
    },

    // APRIL 2023
    {
      id: '2023-04-figma-ui-kits',
      date: 'April 2023',
      month: 'April',
      year: '2023',
      title: 'Figma UI Kits',
      description: 'Designed reusable UI kits in Figma for fast prototyping.',
      type: 'project',
      icon: '🎨',
      tags: ['Figma', 'UI Kit'],
      category: 'intermediate'
    },

    // MARCH 2023
    {
      id: '2023-03-minibank',
      date: 'March 2023',
      month: 'March',
      year: '2023',
      title: 'Mini Banking System - Java',
      description: 'Basic account operations using Java.',
      type: 'project',
      icon: '🏦',
      tags: ['Java', 'Banking'],
      category: 'intermediate'
    },
    {
      id: '2023-03-weatherdashboard',
      date: 'March 2023',
      month: 'March',
      year: '2023',
      title: 'Weather Dashboard - ChartJS',
      description: 'Weather data visualization dashboard with ChartJS.',
      type: 'project',
      icon: '🌤️',
      tags: ['ChartJS', 'Weather'],
      category: 'intermediate'
    },
    {
      id: '2023-03-loginuikit',
      date: 'March 2023',
      month: 'March',
      year: '2023',
      title: 'Login/Auth UI Kit',
      description: 'Reusable login/auth UI kit for web projects.',
      type: 'project',
      icon: '🔑',
      tags: ['Auth', 'UI Kit'],
      category: 'intermediate'
    },
    {
      id: '2023-03-completed12',
      date: 'March 2023',
      month: 'March',
      year: '2023',
      title: 'Completed Class 12',
      description: 'Successfully completed Class 12 board exams.',
      type: 'achievement',
      icon: '🎓',
      tags: ['Class 12', 'Education'],
      category: 'professional'
    },

    // FEBRUARY 2023
    {
      id: '2023-02-imagefilter',
      date: 'February 2023',
      month: 'February',
      year: '2023',
      title: 'Image Filter App',
      description: 'Developed an app for applying custom filters to images.',
      type: 'project',
      icon: '🖼️',
      tags: ['Image Filter', 'App'],
      category: 'intermediate'
    },
    {
      id: '2023-02-faceblur',
      date: 'February 2023',
      month: 'February',
      year: '2023',
      title: 'Face Blur Tool',
      description: 'Built a face blur tool for privacy-focused image processing.',
      type: 'project',
      icon: '😶‍🌫️',
      tags: ['Face Blur', 'Privacy', 'Image'],
      category: 'intermediate'
    },
    {
      id: '2023-02-librarymanager',
      date: 'February 2023',
      month: 'February',
      year: '2023',
      title: 'Library Book Manager',
      description: 'Django + Bootstrap: search/add/remove books, due alerts.',
      type: 'project',
      icon: '📚',
      tags: ['Library', 'Django', 'Bootstrap'],
      category: 'intermediate'
    },

    // JANUARY 2023
    {
      id: '2023-01-blogcms',
      date: 'January 2023',
      month: 'January',
      year: '2023',
      title: 'Blog CMS - Flask CRUD',
      description: 'Built a content management system for blogging using Flask with full CRUD.',
      type: 'project',
      icon: '📰',
      tags: ['Blog', 'CMS', 'Flask'],
      category: 'intermediate'
    },
    {
      id: '2023-01-newscli',
      date: 'January 2023',
      month: 'January',
      year: '2023',
      title: 'News API Reader CLI',
      description: 'CLI tool to fetch and display news using News API.',
      type: 'project',
      icon: '🗞️',
      tags: ['News', 'CLI'],
      category: 'beginner'
    },
    {
      id: '2023-01-yt-downloader',
      date: 'January 2023',
      month: 'January',
      year: '2023',
      title: 'YouTube Downloader GUI',
      description: 'Developed a GUI app to download YouTube videos easily.',
      type: 'project',
      icon: '⬇️',
      tags: ['YouTube', 'Downloader', 'GUI'],
      category: 'intermediate'
    },
    {
      id: '2023-01-online-markdown-editor',
      date: 'January 2023',
      month: 'January',
      year: '2023',
      title: 'Online Markdown Editor',
      description: 'React + Node.js: live preview, export to PDF/HTML, syntax highlighting.',
      type: 'project',
      icon: '📝',
      tags: ['Markdown', 'Editor', 'React'],
      category: 'intermediate'
    },


  // 2022
    // DECEMBER 2022
    {
      id: '2022-12-taskscheduler',
      date: 'December 2022',
      month: 'December',
      year: '2022',
      title: 'Task Scheduler',
      description: 'Desktop tool for scheduling and tracking daily tasks.',
      type: 'project',
      icon: '📅',
      tags: ['Scheduler', 'Productivity'],
      category: 'intermediate'
    },
    {
      id: '2022-12-cms-markdown',
      date: 'December 2022',
      month: 'December',
      year: '2022',
      title: 'Basic CMS with Markdown',
      description: 'CMS that supports Markdown for easy blogging.',
      type: 'project',
      icon: '📝',
      tags: ['CMS', 'Markdown'],
      category: 'intermediate'
    },
    {
      id: '2022-12-restaurant-ui',
      date: 'December 2022',
      month: 'December',
      year: '2022',
      title: 'Restaurant Ordering UI',
      description: 'Simple restaurant order-taking front-end demo.',
      type: 'project',
      icon: '🍽️',
      tags: ['UI', 'Restaurant'],
      category: 'beginner'
    },

    // NOVEMBER 2022 (assigned: Digital Clock)
    {
      id: '2022-11-digitalclock',
      date: 'November 2022',
      month: 'November',
      year: '2022',
      title: 'Digital Clock',
      description: 'Swing GUI clock displaying current time, with alarm feature.',
      type: 'project',
      icon: '⏰',
      tags: ['Java', 'Clock', 'GUI'],
      category: 'beginner'
    },

    // OCTOBER 2022
    {
      id: '2022-10-recipefinder',
      date: 'October 2022',
      month: 'October',
      year: '2022',
      title: 'Recipe Finder App',
      description: 'App to search and display recipes by ingredient.',
      type: 'project',
      icon: '🥘',
      tags: ['Recipe', 'App'],
      category: 'beginner'
    },
    {
      id: '2022-10-stopwatch',
      date: 'October 2022',
      month: 'October',
      year: '2022',
      title: 'Stopwatch + Countdown Combo',
      description: 'Combo stopwatch and countdown timer desktop app.',
      type: 'project',
      icon: '⏱️',
      tags: ['Timer', 'Utility'],
      category: 'beginner'
    },
    {
      id: '2022-10-themed-toggle',
      date: 'October 2022',
      month: 'October',
      year: '2022',
      title: 'Light/Dark Theme Toggle UI',
      description: 'UI feature to switch between light and dark themes.',
      type: 'project',
      icon: '🌓',
      tags: ['UI', 'Theme'],
      category: 'beginner'
    },

    // SEPTEMBER 2022 (assigned: Address Book)
    {
      id: '2022-09-addressbook',
      date: 'September 2022',
      month: 'September',
      year: '2022',
      title: 'Address Book',
      description: 'Java CLI/GUI: add/search/update/delete contacts.',
      type: 'project',
      icon: '📒',
      tags: ['Java', 'Address Book'],
      category: 'beginner'
    },

    // AUGUST 2022 (assigned: Simple Banking Simulation)
    {
      id: '2022-08-banking-sim',
      date: 'August 2022',
      month: 'August',
      year: '2022',
      title: 'Simple Banking Simulation',
      description: 'Java CLI: deposit, withdraw, balance, transaction history.',
      type: 'project',
      icon: '🏦',
      tags: ['Java', 'Banking'],
      category: 'beginner'
    },

    // JULY 2022
    {
      id: '2022-07-screenshot-gui',
      date: 'July 2022',
      month: 'July',
      year: '2022',
      title: 'Screenshot App - GUI',
      description: 'GUI app to take and save desktop screenshots.',
      type: 'project',
      icon: '📸',
      tags: ['Screenshot', 'GUI'],
      category: 'intermediate'
    },
    {
      id: '2022-07-flask-login',
      date: 'July 2022',
      month: 'July',
      year: '2022',
      title: 'Flask Login/Signup',
      description: 'Flask app with user authentication features.',
      type: 'project',
      icon: '🔐',
      tags: ['Flask', 'Auth'],
      category: 'intermediate'
    },
    {
      id: '2022-07-file-encryptor',
      date: 'July 2022',
      month: 'July',
      year: '2022',
      title: 'File Encryptor (Fernet)',
      description: 'Encrypt and decrypt files using Fernet symmetric encryption.',
      type: 'project',
      icon: '🔒',
      tags: ['Python', 'Encryption'],
      category: 'intermediate'
    },

    // JUNE 2022
    {
      id: '2022-06-portfolio-v2',
      date: 'June 2022',
      month: 'June',
      year: '2022',
      title: 'Portfolio v2 - Multiple Sections',
      description: 'Personal portfolio site with multiple dynamic sections.',
      type: 'project',
      icon: '🌐',
      tags: ['Portfolio', 'Web'],
      category: 'intermediate'
    },
    {
      id: '2022-06-expensetracker',
      date: 'June 2022',
      month: 'June',
      year: '2022',
      title: 'Expense Tracker (Pie Charts)',
      description: 'Expense tracking app with pie chart visualizations.',
      type: 'project',
      icon: '💹',
      tags: ['Expense', 'Tracker', 'Charts'],
      category: 'intermediate'
    },
    {
      id: '2022-06-attendance-java',
      date: 'June 2022',
      month: 'June',
      year: '2022',
      title: 'Attendance App - Java',
      description: 'Java app for student attendance management.',
      type: 'project',
      icon: '🗓️',
      tags: ['Java', 'Attendance'],
      category: 'intermediate'
    },

    // MAY 2022 (assigned: Basic Calculator)
    {
      id: '2022-05-calculator',
      date: 'May 2022',
      month: 'May',
      year: '2022',
      title: 'Basic Calculator (Swing/JavaFX)',
      description: 'Java Swing/JavaFX calculator for arithmetic operations.',
      type: 'project',
      icon: '🧮',
      tags: ['Java', 'Calculator'],
      category: 'beginner'
    },

    // APRIL 2022
    {
      id: '2022-04-emailfilesender',
      date: 'April 2022',
      month: 'April',
      year: '2022',
      title: 'Email + File Sender Combo Tool',
      description: 'Utility to send emails with file attachments.',
      type: 'project',
      icon: '📧',
      tags: ['Email', 'Utility'],
      category: 'intermediate'
    },
    {
      id: '2022-04-htmlcss-product-card',
      date: 'April 2022',
      month: 'April',
      year: '2022',
      title: 'HTML/CSS Product Card Showcase',
      description: 'Product card layouts using HTML and CSS.',
      type: 'project',
      icon: '🛒',
      tags: ['HTML', 'CSS', 'UI'],
      category: 'beginner'
    },
    {
      id: '2022-04-notes-localstorage',
      date: 'April 2022',
      month: 'April',
      year: '2022',
      title: 'Notes App - JS LocalStorage',
      description: 'Notes app in JS using localStorage for persistence.',
      type: 'project',
      icon: '🗒️',
      tags: ['JavaScript', 'Notes', 'LocalStorage'],
      category: 'beginner'
    },

    // MARCH 2022
    {
      id: '2022-03-currencyconverter',
      date: 'March 2022',
      month: 'March',
      year: '2022',
      title: 'Currency Converter GUI',
      description: 'GUI tool to convert currencies using static or API rates.',
      type: 'project',
      icon: '💱',
      tags: ['Currency', 'Converter', 'GUI'],
      category: 'intermediate'
    },
    {
      id: '2022-03-bmi-tkinter',
      date: 'March 2022',
      month: 'March',
      year: '2022',
      title: 'BMI Visual GUI - Tkinter',
      description: 'BMI calculator with category using Python Tkinter.',
      type: 'project',
      icon: '⚖️',
      tags: ['Python', 'BMI', 'Tkinter'],
      category: 'intermediate'
    },
    {
      id: '2022-03-java-quiz',
      date: 'March 2022',
      month: 'March',
      year: '2022',
      title: 'Java Quiz System',
      description: 'Java app for MCQ quizzes with instant feedback.',
      type: 'project',
      icon: '❓',
      tags: ['Java', 'Quiz'],
      category: 'intermediate'
    },

    // FEBRUARY 2022 (assigned: File Encryption/Decryption)
    {
      id: '2022-02-file-encdec',
      date: 'February 2022',
      month: 'February',
      year: '2022',
      title: 'File Encryption/Decryption',
      description: 'Utility to encrypt/decrypt files using simple ciphers.',
      type: 'project',
      icon: '🔐',
      tags: ['Encryption', 'File', 'Java'],
      category: 'intermediate'
    },

    // JANUARY 2022
    {
      id: '2022-01-grade-tracker',
      date: 'January 2022',
      month: 'January',
      year: '2022',
      title: 'Student Grade Tracker',
      description: 'App to record and compute student grades for multiple subjects.',
      type: 'project',
      icon: '📊',
      tags: ['Grades', 'Student'],
      category: 'intermediate'
    },
    {
      id: '2022-01-urlshortener',
      date: 'January 2022',
      month: 'January',
      year: '2022',
      title: 'URL Shortener - Bitly API',
      description: 'Shorten URLs using the Bitly API, with analytics.',
      type: 'project',
      icon: '🔗',
      tags: ['URL', 'Shortener', 'Bitly'],
      category: 'intermediate'
    },
    {
      id: '2022-01-hotel-c',
      date: 'January 2022',
      month: 'January',
      year: '2022',
      title: 'Hotel Management System - C',
      description: 'Basic hotel booking/checkout CLI using C.',
      type: 'project',
      icon: '🏨',
      tags: ['C', 'Hotel', 'CLI'],
      category: 'intermediate'
    },
    {
      id: '2022-01-grades-calc',
      date: 'January 2022',
      month: 'January',
      year: '2022',
      title: 'Student Grades Calculator',
      description: 'CLI/GUI tool to enter subject marks, compute averages/grades.',
      type: 'project',
      icon: '🧮',
      tags: ['Grades', 'Java'],
      category: 'beginner'
    },
    {
      id: '2022-01-personal-library',
      date: 'January 2022',
      month: 'January',
      year: '2022',
      title: 'Personal Library Manager',
      description: 'CLI/GUI to add/search/remove books, save to file.',
      type: 'project',
      icon: '📚',
      tags: ['Java', 'Library'],
      category: 'beginner'
    },
    {
      id: '2022-01-bmi-swing',
      date: 'January 2022',
      month: 'January',
      year: '2022',
      title: 'BMI Calculator (Swing GUI)',
      description: 'Java Swing: input height/weight, see BMI with category.',
      type: 'project',
      icon: '⚖️',
      tags: ['Java', 'BMI'],
      category: 'beginner'
    },

  // 2021
    // DECEMBER 2021
    {
      id: '2021-12-file-organizer',
      date: 'December 2021',
      month: 'December',
      year: '2021',
      title: 'File Organizer - Folder Sorter',
      description: 'Python: Automatically sort files into folders by type.',
      type: 'project',
      icon: '🗂️',
      tags: ['Python', 'File Organizer'],
      category: 'beginner'
    },
    {
      id: '2021-12-quiz-app',
      date: 'December 2021',
      month: 'December',
      year: '2021',
      title: 'Quiz App (CLI)',
      description: 'Java CLI: Multiple-choice quiz with score display.',
      type: 'project',
      icon: '❓',
      tags: ['Java', 'Quiz', 'CLI'],
      category: 'beginner'
    },

    // NOVEMBER 2021
    {
      id: '2021-11-webscraper',
      date: 'November 2021',
      month: 'November',
      year: '2021',
      title: 'Web Scraper - BeautifulSoup',
      description: 'Python: Scrape web data and parse with BeautifulSoup.',
      type: 'project',
      icon: '🔍',
      tags: ['Python', 'Web Scraping'],
      category: 'beginner'
    },
    {
      id: '2021-11-bank-account',
      date: 'November 2021',
      month: 'November',
      year: '2021',
      title: 'Bank Account Simulator',
      description: 'Java CLI: Deposit, withdraw, check balance, menu-driven loop.',
      type: 'project',
      icon: '🏦',
      tags: ['Java', 'Banking', 'CLI'],
      category: 'beginner'
    },

    // OCTOBER 2021
    {
      id: '2021-10-email-sender',
      date: 'October 2021',
      month: 'October',
      year: '2021',
      title: 'Email Sender - smtplib',
      description: 'Python: Send emails programmatically using smtplib.',
      type: 'project',
      icon: '📧',
      tags: ['Python', 'Email'],
      category: 'beginner'
    },
    {
      id: '2021-10-registration-form',
      date: 'October 2021',
      month: 'October',
      year: '2021',
      title: 'Registration Form - Flask',
      description: 'Flask app for user registration with validation.',
      type: 'project',
      icon: '📝',
      tags: ['Flask', 'Form'],
      category: 'beginner'
    },
    {
      id: '2021-10-memory-game',
      date: 'October 2021',
      month: 'October',
      year: '2021',
      title: 'Memory Game - HTML/JS',
      description: 'A classic memory card game built with HTML and JavaScript.',
      type: 'project',
      icon: '🧠',
      tags: ['JavaScript', 'Game'],
      category: 'beginner'
    },

    // SEPTEMBER 2021
    {
      id: '2021-09-address-book',
      date: 'September 2021',
      month: 'September',
      year: '2021',
      title: 'Basic Address Book',
      description: 'Java CLI: Add, search, delete contacts; ArrayList or file storage.',
      type: 'project',
      icon: '📒',
      tags: ['Java', 'Address Book'],
      category: 'beginner'
    },

    // AUGUST 2021
    {
      id: '2021-08-weather-cli',
      date: 'August 2021',
      month: 'August',
      year: '2021',
      title: 'Weather CLI App',
      description: 'Command-line weather app using public API.',
      type: 'project',
      icon: '🌦️',
      tags: ['Python', 'CLI', 'Weather'],
      category: 'beginner'
    },
    {
      id: '2021-08-calculator-swing',
      date: 'August 2021',
      month: 'August',
      year: '2021',
      title: 'Java Calculator - Swing',
      description: 'GUI calculator for arithmetic operations (Swing).',
      type: 'project',
      icon: '🧮',
      tags: ['Java', 'Swing', 'Calculator'],
      category: 'beginner'
    },
    {
      id: '2021-08-portfolio-page',
      date: 'August 2021',
      month: 'August',
      year: '2021',
      title: 'Portfolio Page + Download Resume',
      description: 'Simple portfolio web page with downloadable resume.',
      type: 'project',
      icon: '🌐',
      tags: ['HTML', 'Portfolio'],
      category: 'beginner'
    },

    // JULY 2021
    {
      id: '2021-07-student-marks',
      date: 'July 2021',
      month: 'July',
      year: '2021',
      title: 'Student Marks Manager',
      description: 'Java: Input/store marks, calculate average/highest/lowest.',
      type: 'project',
      icon: '📊',
      tags: ['Java', 'Marks'],
      category: 'beginner'
    },

    // JUNE 2021
    {
      id: '2021-06-number-guess',
      date: 'June 2021',
      month: 'June',
      year: '2021',
      title: 'Number Guessing Game',
      description: 'Java: Random number guessing, feedback on higher/lower.',
      type: 'project',
      icon: '🎲',
      tags: ['Java', 'Game'],
      category: 'beginner'
    },

    // MAY 2021
    {
      id: '2021-05-bmi-chart',
      date: 'May 2021',
      month: 'May',
      year: '2021',
      title: 'BMI Chart Plotter - matplotlib',
      description: 'Python: Plot BMI charts from user data.',
      type: 'project',
      icon: '📈',
      tags: ['Python', 'matplotlib', 'BMI'],
      category: 'beginner'
    },
    {
      id: '2021-05-blog-template',
      date: 'May 2021',
      month: 'May',
      year: '2021',
      title: 'HTML/CSS Blog Template',
      description: 'Responsive blog template using HTML and CSS.',
      type: 'project',
      icon: '📰',
      tags: ['HTML', 'CSS', 'Blog'],
      category: 'beginner'
    },
    {
      id: '2021-05-resume-site',
      date: 'May 2021',
      month: 'May',
      year: '2021',
      title: 'Single-Page Resume Website',
      description: 'Minimal single-page resume site built with HTML/CSS.',
      type: 'project',
      icon: '📄',
      tags: ['HTML', 'Resume'],
      category: 'beginner'
    },

    // APRIL 2021
    {
      id: '2021-04-contact-csv',
      date: 'April 2021',
      month: 'April',
      year: '2021',
      title: 'Contact Manager - CSV',
      description: 'CLI tool to add/search contacts, stores data in CSV.',
      type: 'project',
      icon: '📇',
      tags: ['CSV', 'Contact', 'CLI'],
      category: 'beginner'
    },
    {
      id: '2021-04-palindrome',
      date: 'April 2021',
      month: 'April',
      year: '2021',
      title: 'Palindrome Checker',
      description: 'Java: Check if input string/number is a palindrome.',
      type: 'project',
      icon: '🔁',
      tags: ['Java', 'Palindrome'],
      category: 'beginner'
    },

    // MARCH 2021
    {
      id: '2021-03-simple-atm',
      date: 'March 2021',
      month: 'March',
      year: '2021',
      title: 'Simple ATM Interface',
      description: 'Java CLI: Check balance, deposit, withdraw, exit.',
      type: 'project',
      icon: '🏧',
      tags: ['Java', 'ATM'],
      category: 'beginner'
    },

    // FEBRUARY 2021
    {
      id: '2021-02-rock-paper',
      date: 'February 2021',
      month: 'February',
      year: '2021',
      title: 'Rock Paper Scissors GUI',
      description: 'GUI version of classic rock-paper-scissors game.',
      type: 'project',
      icon: '✊✋✌️',
      tags: ['Python', 'Tkinter', 'Game'],
      category: 'beginner'
    },
    {
      id: '2021-02-image-resizer',
      date: 'February 2021',
      month: 'February',
      year: '2021',
      title: 'Image Resizer - PIL',
      description: 'Python: Resize images in bulk using PIL.',
      type: 'project',
      icon: '📏',
      tags: ['Python', 'PIL', 'Image'],
      category: 'beginner'
    },
    {
      id: '2021-02-alarm-timer',
      date: 'February 2021',
      month: 'February',
      year: '2021',
      title: 'Alarm + Timer Combo',
      description: 'Python: Alarm and timer in a single app.',
      type: 'project',
      icon: '⏰',
      tags: ['Python', 'Alarm', 'Timer'],
      category: 'beginner'
    },

    // JANUARY 2021
    {
      id: '2021-01-todo-file',
      date: 'January 2021',
      month: 'January',
      year: '2021',
      title: 'To-Do List - File-based',
      description: 'Simple CLI to-do list storing tasks in a text file.',
      type: 'project',
      icon: '✅',
      tags: ['To-Do', 'CLI', 'File'],
      category: 'beginner'
    },
    {
      id: '2021-01-currency-conv',
      date: 'January 2021',
      month: 'January',
      year: '2021',
      title: 'Currency Converter - API',
      description: 'Python: Convert currencies using live API rates.',
      type: 'project',
      icon: '💱',
      tags: ['Currency', 'API'],
      category: 'beginner'
    },
    {
      id: '2021-01-stopwatch-tkinter',
      date: 'January 2021',
      month: 'January',
      year: '2021',
      title: 'Stopwatch - Tkinter',
      description: 'Python: Stopwatch GUI using Tkinter.',
      type: 'project',
      icon: '⏲️',
      tags: ['Python', 'Tkinter', 'Stopwatch'],
      category: 'beginner'
    },


  // 2020
    // DECEMBER 2020
    {
      id: '2020-12-quiz-python',
      date: 'December 2020',
      month: 'December',
      year: '2020',
      title: 'Quiz App - Python',
      description: 'CLI quiz game with score tracking and feedback.',
      type: 'project',
      icon: '❓',
      tags: ['Python', 'Quiz', 'CLI'],
      category: 'beginner'
    },
    {
      id: '2020-12-screenshot-pyautogui',
      date: 'December 2020',
      month: 'December',
      year: '2020',
      title: 'Screenshot Tool - pyautogui',
      description: 'Automated screenshots using Python pyautogui.',
      type: 'project',
      icon: '📸',
      tags: ['Python', 'Screenshot', 'pyautogui'],
      category: 'beginner'
    },
    {
      id: '2020-12-file-copier',
      date: 'December 2020',
      month: 'December',
      year: '2020',
      title: 'File Copier Script',
      description: 'Script to copy files between folders using Python.',
      type: 'project',
      icon: '📁',
      tags: ['Python', 'File'],
      category: 'beginner'
    },

    // NOVEMBER 2020 (assigned: Palindrome Checker)
    {
      id: '2020-11-palindrome',
      date: 'November 2020',
      month: 'November',
      year: '2020',
      title: 'Palindrome Checker',
      description: 'CLI to check if a string or number is a palindrome.',
      type: 'project',
      icon: '🔁',
      tags: ['Python', 'Palindrome'],
      category: 'beginner'
    },

    // OCTOBER 2020
    {
      id: '2020-10-hangman',
      date: 'October 2020',
      month: 'October',
      year: '2020',
      title: 'Hangman Game',
      description: 'Word guessing game with text-based interface.',
      type: 'project',
      icon: '🎮',
      tags: ['Python', 'Game', 'Hangman'],
      category: 'beginner'
    },
    {
      id: '2020-10-login-htmlcss',
      date: 'October 2020',
      month: 'October',
      year: '2020',
      title: 'Login Page - HTML/CSS',
      description: 'Frontend login page designed with HTML and CSS.',
      type: 'project',
      icon: '🔐',
      tags: ['HTML', 'CSS', 'Login'],
      category: 'beginner'
    },
    {
      id: '2020-10-resume-html',
      date: 'October 2020',
      month: 'October',
      year: '2020',
      title: 'Resume Template - HTML',
      description: 'Simple resume webpage using HTML/CSS.',
      type: 'project',
      icon: '📄',
      tags: ['HTML', 'Resume'],
      category: 'beginner'
    },

    // SEPTEMBER 2020 (assigned: Shopping List Manager)
    {
      id: '2020-09-shopping-list',
      date: 'September 2020',
      month: 'September',
      year: '2020',
      title: 'Shopping List Manager',
      description: 'Python CLI: add, view, remove items, save/load to file.',
      type: 'project',
      icon: '🛒',
      tags: ['Python', 'CLI', 'List'],
      category: 'beginner'
    },

    // AUGUST 2020
    {
      id: '2020-08-password-generator',
      date: 'August 2020',
      month: 'August',
      year: '2020',
      title: 'Password Generator',
      description: 'Generate strong random passwords of given length.',
      type: 'project',
      icon: '🔑',
      tags: ['Python', 'Password'],
      category: 'beginner'
    },
    {
      id: '2020-08-alarm-clock',
      date: 'August 2020',
      month: 'August',
      year: '2020',
      title: 'Simple Alarm Clock',
      description: 'CLI alarm clock that waits and notifies at set time.',
      type: 'project',
      icon: '⏰',
      tags: ['Python', 'Alarm'],
      category: 'beginner'
    },
    {
      id: '2020-08-text-analyzer',
      date: 'August 2020',
      month: 'August',
      year: '2020',
      title: 'Text File Analyzer',
      description: 'Analyze text files for word/character counts, etc.',
      type: 'project',
      icon: '📝',
      tags: ['Python', 'Text'],
      category: 'beginner'
    },

    // JULY 2020
    {
      id: '2020-07-number-guess',
      date: 'July 2020',
      month: 'July',
      year: '2020',
      title: 'Number Guessing Game',
      description: 'Guess the randomly chosen number; feedback on guesses.',
      type: 'project',
      icon: '🎲',
      tags: ['Python', 'Game', 'Guess'],
      category: 'beginner'
    },
    {
      id: '2020-07-madlibs',
      date: 'July 2020',
      month: 'July',
      year: '2020',
      title: 'Mad Libs Generator',
      description: 'CLI fun game for random story generation.',
      type: 'project',
      icon: '📝',
      tags: ['Python', 'Game', 'MadLibs'],
      category: 'beginner'
    },
    {
      id: '2020-07-tip-calculator',
      date: 'July 2020',
      month: 'July',
      year: '2020',
      title: 'Tip Calculator',
      description: 'Calculate tip and split bills among friends.',
      type: 'project',
      icon: '💵',
      tags: ['Python', 'Calculator', 'Tip'],
      category: 'beginner'
    },
    {
      id: '2020-07-bmi-cli',
      date: 'July 2020',
      month: 'July',
      year: '2020',
      title: 'BMI Calculator CLI',
      description: 'Calculate BMI and print health category (CLI).',
      type: 'project',
      icon: '⚖️',
      tags: ['Python', 'BMI'],
      category: 'beginner'
    },

    // JUNE 2020
    {
      id: '2020-06-calculator',
      date: 'June 2020',
      month: 'June',
      year: '2020',
      title: 'Calculator - Arithmetic',
      description: 'CLI calculator: add, subtract, multiply, divide.',
      type: 'project',
      icon: '🧮',
      tags: ['Python', 'Calculator'],
      category: 'beginner'
    },
    {
      id: '2020-06-rps-console',
      date: 'June 2020',
      month: 'June',
      year: '2020',
      title: 'Rock Paper Scissors - Console',
      description: 'Classic Rock Paper Scissors game vs computer.',
      type: 'project',
      icon: '✊✋✌️',
      tags: ['Python', 'Game'],
      category: 'beginner'
    },
    {
      id: '2020-06-dice-roller',
      date: 'June 2020',
      month: 'June',
      year: '2020',
      title: 'Dice Roller Simulator',
      description: 'Simulates rolling dice; random numbers 1–6.',
      type: 'project',
      icon: '🎲',
      tags: ['Python', 'Game', 'Dice'],
      category: 'beginner'
    },

    // MAY 2020
    {
      id: '2020-05-passed-10',
      date: 'May 2020',
      month: 'May',
      year: '2020',
      title: 'Passed Class 10 – 91%',
      description: 'Achieved 91% marks in Class 10 Board Examinations.',
      type: 'achievement',
      icon: '🎓',
      tags: ['Class 10', 'Achievement'],
      category: 'professional'
    },
    {
      id: '2020-05-learned-python',
      date: 'May 2020',
      month: 'May',
      year: '2020',
      title: 'Learned Python Basics',
      description: 'Completed basics of Python including syntax, data types, and control flow.',
      type: 'learning',
      icon: '🐍',
      tags: ['Python', 'Learning'],
      category: 'beginner'
    },

    // APRIL 2020 (assigned: Simple To-Do List)
    {
      id: '2020-04-todo-list',
      date: 'April 2020',
      month: 'April',
      year: '2020',
      title: 'To-Do List (CLI)',
      description: 'Add, view, remove tasks; stores tasks in a list.',
      type: 'project',
      icon: '📝',
      tags: ['Python', 'To-Do', 'CLI'],
      category: 'beginner'
    },

    // MARCH 2020 (assigned: File Reader/Writer)
    {
      id: '2020-03-file-reader',
      date: 'March 2020',
      month: 'March',
      year: '2020',
      title: 'File Reader/Writer',
      description: 'Read and write to text files with Python.',
      type: 'project',
      icon: '📄',
      tags: ['Python', 'File IO'],
      category: 'beginner'
    },

    // FEBRUARY 2020 (assigned: Multiplication Table Generator)
    {
      id: '2020-02-mult-table',
      date: 'February 2020',
      month: 'February',
      year: '2020',
      title: 'Multiplication Table Generator',
      description: 'Prints multiplication tables for any number.',
      type: 'project',
      icon: '✖️',
      tags: ['Python', 'Multiplication'],
      category: 'beginner'
    },

    // JANUARY 2020 (assigned: Temperature Converter)
    {
      id: '2020-01-temp-conv',
      date: 'January 2020',
      month: 'January',
      year: '2020',
      title: 'Temperature Converter',
      description: 'Convert Celsius, Fahrenheit, Kelvin.',
      type: 'project',
      icon: '🌡️',
      tags: ['Python', 'Temperature'],
      category: 'beginner'
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