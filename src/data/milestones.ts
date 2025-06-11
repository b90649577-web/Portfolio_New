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
    description: 'Engaged with startups and innovators at one of India’s largest tech events.',
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
    description: 'Attended “The Unicorns” event at IIT Delhi, gaining insights from industry leaders.',
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
    description: 'Campus ambassador for Kaizen 2025, IIT Delhi’s annual technical and cultural fest.',
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
      title: 'GL Bajaj Group of Institutions',
      description: 'Started B.Tech CSE at GL Bajaj Group of Institutions.',
      type: 'B.Tech student',
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


export const resources: Resource[] = [
  {
    id: 'mentorship-cards-ui-2025',
    title: 'Mentorship Cards UI Concept',
    description: 'UI/UX concept for scalable mentorship and networking features.',
    type: 'project',
    category: 'advanced',
    year: '2025',
    tags: ['Mentorship', 'UI', 'UX', 'Figma', 'React'],
    downloadUrl: '',
    icon: '🗂️',
    githubUrl: 'https://github.com/Brajesh31/mentorship-cards-ui'
  },
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