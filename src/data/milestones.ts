export interface Milestone {
  id: string;
  title: string;
  description: string;
  type: 'event' | 'achievement' | 'project' | 'campus ambassador' | 'contributor' | 'learning' | 'planning' | 'education' | 'B.Tech student';
  month: string;
  year: string;
  icon: string;
  tags: string[];
  link?: string;
  category: 'professional' | 'advanced' | 'intermediate' | 'beginner';
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'certificate' | 'document' | 'link' | 'portfolio' | 'code' | 'presentation';
  year: string;
  icon: string;
  tags: string[];
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

export const milestones: Milestone[] = [
  // 2025
  // JUNE 2025
  {
    id: '2025-06-openai',
    month: 'June',
    year: '2025',
    title: 'OpenAI Academy Launch at The Oberoi, Delhi',
    description: 'Invited to the landmark OpenAI Academy launch focused on Future Skills for India, featuring industry leaders and AI innovations.',
    type: 'event',
    icon: '🤖',
    tags: ['AI', 'OpenAI', 'Event', 'Delhi', 'Academy'],
    category: 'professional',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_openaiacademy-indiaai-meity-activity-7336473782242414592-QOtx'
  },
  {
    id: '2025-06-uiuxai',
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
    month: 'May',
    year: '2025',
    title: 'Power BI & AI Summit – Delhi Edition',
    description: 'Participated in the Power BI & AI Summit, exploring real-world AI and BI applications.',
    type: 'event',
    icon: '📊',
    tags: ['Power BI', 'AI', 'Summit', 'Delhi'],
    category: 'professional',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_powerbisummit-aisummit2025-microsoftgurugram-activity-7332381298121953280-7tmg'
  },
  {
    id: '2025-05-aicamp',
    month: 'May',
    year: '2025',
    title: 'AICamp Meetup at Tata 1mg, Gurugram',
    description: 'Attended the AICamp Meetup, networking with AI professionals and learning about cutting-edge tools.',
    type: 'event',
    icon: '🤝',
    tags: ['AI', 'Meetup', 'Networking', 'Gurugram'],
    category: 'professional',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_aicamp-futurewithai-genai-activity-7335668379482826753-uZMs'
  },
  {
    id: '2025-05-business4',
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
    month: 'December',
    year: '2022',
    title: 'Restaurant Ordering UI',
    description: 'Simple restaurant order-taking front-end demo.',
    type: 'project',
    icon: '🍽️',
    tags: ['UI', 'Restaurant'],
    category: 'beginner'
  },

  // NOVEMBER 2022
  {
    id: '2022-11-digitalclock',
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
    month: 'October',
    year: '2022',
    title: 'Light/Dark Theme Toggle UI',
    description: 'UI feature to switch between light and dark themes.',
    type: 'project',
    icon: '🌓',
    tags: ['UI', 'Theme'],
    category: 'beginner'
  },

  // SEPTEMBER 2022
  {
    id: '2022-09-addressbook',
    month: 'September',
    year: '2022',
    title: 'Address Book',
    description: 'Java CLI/GUI: add/search/update/delete contacts.',
    type: 'project',
    icon: '📒',
    tags: ['Java', 'Address Book'],
    category: 'beginner'
  },

  // AUGUST 2022
  {
    id: '2022-08-banking-sim',
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
    month: 'June',
    year: '2022',
    title: 'Attendance App - Java',
    description: 'Java app for student attendance management.',
    type: 'project',
    icon: '🗓️',
    tags: ['Java', 'Attendance'],
    category: 'intermediate'
  },

  // MAY 2022
  {
    id: '2022-05-calculator',
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
    month: 'March',
    year: '2022',
    title: 'Java Quiz System',
    description: 'Java app for MCQ quizzes with instant feedback.',
    type: 'project',
    icon: '❓',
    tags: ['Java', 'Quiz'],
    category: 'intermediate'
  },

  // FEBRUARY 2022
  {
    id: '2022-02-file-encdec',
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
    month: 'December',
    year: '2020',
    title: 'File Copier Script',
    description: 'Script to copy files between folders using Python.',
    type: 'project',
    icon: '📁',
    tags: ['Python', 'File'],
    category: 'beginner'
  },

  // NOVEMBER 2020
  {
    id: '2020-11-palindrome',
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
    month: 'October',
    year: '2020',
    title: 'Resume Template - HTML',
    description: 'Simple resume webpage using HTML/CSS.',
    type: 'project',
    icon: '📄',
    tags: ['HTML', 'Resume'],
    category: 'beginner'
  },

  // SEPTEMBER 2020
  {
    id: '2020-09-shopping-list',
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
    month: 'May',
    year: '2020',
    title: 'Learned Python Basics',
    description: 'Completed basics of Python including syntax, data types, and control flow.',
    type: 'learning',
    icon: '🐍',
    tags: ['Python', 'Learning'],
    category: 'beginner'
  },

  // APRIL 2020
  {
    id: '2020-04-todo-list',
    month: 'April',
    year: '2020',
    title: 'To-Do List (CLI)',
    description: 'Add, view, remove tasks; stores tasks in a list.',
    type: 'project',
    icon: '📝',
    tags: ['Python', 'To-Do', 'CLI'],
    category: 'beginner'
  },

  // MARCH 2020
  {
    id: '2020-03-file-reader',
    month: 'March',
    year: '2020',
    title: 'File Reader/Writer',
    description: 'Read and write to text files with Python.',
    type: 'project',
    icon: '📄',
    tags: ['Python', 'File IO'],
    category: 'beginner'
  },

  // FEBRUARY 2020
  {
    id: '2020-02-mult-table',
    month: 'February',
    year: '2020',
    title: 'Multiplication Table Generator',
    description: 'Prints multiplication tables for any number.',
    type: 'project',
    icon: '✖️',
    tags: ['Python', 'Multiplication'],
    category: 'beginner'
  },

  // JANUARY 2020
  {
    id: '2020-01-temp-conv',
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
    id: 'canva-sales-presentation',
    title: 'Build Customizable Sales Presentation Graphics Using Canva',
    description: 'Professional certificate from Coursera on creating effective sales presentations using Canva design tools.',
    type: 'certificate',
    year: '2025',
    icon: '🎨',
    tags: ['Canva', 'Sales', 'Presentation', 'Design', 'Coursera'],
    url: 'https://coursera.org/verify/U16VPKBLWHKJ'
  },
  {
    id: 'canva-web-pages',
    title: 'Use Canva to Create Desktop and Mobile-friendly Web Pages',
    description: 'Coursera certificate on creating responsive web pages using Canva for both desktop and mobile platforms.',
    type: 'certificate',
    year: '2025',
    icon: '📱',
    tags: ['Canva', 'Web Pages', 'Responsive Design', 'Mobile', 'Coursera'],
    url: 'https://coursera.org/verify/8ULAP5KM83Y0'
  },
  {
    id: 'ux-portfolio-crevado',
    title: 'Create Your UX Portfolio with Crevado',
    description: 'Coursera certificate on building professional UX portfolios using Crevado platform.',
    type: 'certificate',
    year: '2025',
    icon: '💼',
    tags: ['UX', 'Portfolio', 'Crevado', 'Design', 'Coursera'],
    url: 'https://coursera.org/verify/H32NN875QYLJ'
  },
  {
    id: 'pitch-deck-canva',
    title: 'Design a Pitch Deck with Canva',
    description: 'Coursera certificate on creating compelling pitch decks for startups and business presentations.',
    type: 'certificate',
    year: '2025',
    icon: '📊',
    tags: ['Pitch Deck', 'Canva', 'Business', 'Presentation', 'Coursera'],
    url: 'https://coursera.org/verify/G1K53UY9ZGKW'
  },
  {
    id: 'website-videos-canva',
    title: 'Create Website Videos with Canva',
    description: 'EDX Alumni certificate on creating engaging website videos using Canva video creation tools.',
    type: 'certificate',
    year: '2025',
    icon: '🎥',
    tags: ['Video', 'Canva', 'Website', 'Content Creation', 'EDX'],
    url: 'https://courses.edx.org/certificates/QS8RY49ISMIR'
  },
  {
    id: 'resume-pdf',
    title: 'Professional Resume',
    description: 'Latest professional resume showcasing skills, experience, projects, and achievements.',
    type: 'document',
    year: '2025',
    icon: '📄',
    tags: ['Resume', 'CV', 'Professional', 'Career', 'Skills'],
    downloadUrl: '/resume.pdf'
  },
  {
    id: 'github-profile',
    title: 'GitHub Profile - Brajesh31',
    description: 'Complete GitHub profile with 100+ repositories, open source contributions, and project showcases.',
    type: 'portfolio',
    year: '2025',
    icon: '💻',
    tags: ['GitHub', 'Open Source', 'Projects', 'Code', 'Portfolio'],
    url: 'https://github.com/Brajesh31'
  },
  {
    id: 'linkedin-profile',
    title: 'LinkedIn Professional Profile',
    description: 'Professional LinkedIn profile with network connections, experience, and industry insights.',
    type: 'portfolio',
    year: '2025',
    icon: '💼',
    tags: ['LinkedIn', 'Professional', 'Network', 'Career', 'Industry'],
    url: 'https://www.linkedin.com/in/brajesh-kumar-9b58651a8/'
  },
  {
    id: 'codechef-profile',
    title: 'CodeChef Competitive Programming Profile',
    description: '3-star CodeChef profile with competitive programming achievements and contest participation.',
    type: 'portfolio',
    year: '2025',
    icon: '🏆',
    tags: ['CodeChef', 'Competitive Programming', '3-star', 'Algorithms', 'Contests'],
    url: 'https://www.codechef.com/users/brajesh31'
  },
  {
    id: 'hackerrank-profile',
    title: 'HackerRank 5-Star Python Profile',
    description: '5-star HackerRank profile in Python with problem-solving achievements and skill certifications.',
    type: 'portfolio',
    year: '2025',
    icon: '🐍',
    tags: ['HackerRank', 'Python', '5-star', 'Problem Solving', 'Certification'],
    url: 'https://www.hackerrank.com/profile/bk117134'
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'Comprehensive portfolio website showcasing projects, skills, experience, and professional journey.',
    type: 'portfolio',
    year: '2025',
    icon: '🌐',
    tags: ['Portfolio', 'Website', 'React', 'TypeScript', 'Professional'],
    url: 'https://brajeshkumar.dev'
  }
];

// All Projects in Alphabetical Order
export const projectResources: ProjectResource[] = [
  {
    id: 'advanced-dashboard-ui',
    title: 'Advanced Dashboard UI',
    description: 'Cutting-edge dashboard UI for data visualization and insights with modern design patterns.',
    category: 'advanced',
    tags: ['Dashboard', 'UI', 'Data Visualization', 'React', 'Charts'],
    githubUrl: 'https://github.com/Brajesh31/advanced-dashboard',
    demoUrl: 'https://advanced-dashboard-bk.netlify.app'
  },
  {
    id: 'agile-planner',
    title: 'Agile Project Planner',
    description: 'Agile project management tool with sprint planning, task tracking, and team collaboration features.',
    category: 'intermediate',
    tags: ['React', 'Node.js', 'Agile', 'Project Management', 'Collaboration', 'Planning'],
    githubUrl: 'https://github.com/Brajesh31/agile-planner',
    demoUrl: 'https://agile-planner.netlify.app'
  },
  {
    id: 'agrotech-platform',
    title: 'AgroTech - Smart Farming Platform',
    description: 'IoT-based smart farming solution with crop monitoring, weather prediction, and automated irrigation system.',
    category: 'advanced',
    tags: ['IoT', 'Python', 'React', 'Agriculture', 'Smart Farming', 'Automation'],
    githubUrl: 'https://github.com/Brajesh31/agrotech',
    demoUrl: 'https://agrotech-demo.netlify.app'
  },
  {
    id: 'ai-powered-resume-evaluator',
    title: 'AI-Powered Resume Evaluator',
    description: 'Built an AI-powered tool for automated resume screening and evaluation using machine learning.',
    category: 'advanced',
    tags: ['AI', 'Resume', 'Machine Learning', 'Python', 'NLP'],
    githubUrl: 'https://github.com/Brajesh31/resume-evaluator',
    demoUrl: 'https://resume-evaluator-ai.netlify.app'
  },
  {
    id: 'alarm-clock-simple',
    title: 'Simple Alarm Clock',
    description: 'CLI alarm clock that waits and notifies at set time with customizable alerts.',
    category: 'beginner',
    tags: ['Python', 'Alarm', 'CLI', 'Time'],
    githubUrl: 'https://github.com/Brajesh31/alarm-clock',
    demoUrl: 'https://github.com/Brajesh31/alarm-clock#demo'
  },
  {
    id: 'alarm-timer-combo',
    title: 'Alarm + Timer Combo',
    description: 'Python application combining alarm and timer functionality in a single app.',
    category: 'beginner',
    tags: ['Python', 'Alarm', 'Timer', 'GUI'],
    githubUrl: 'https://github.com/Brajesh31/alarm-timer',
    demoUrl: 'https://github.com/Brajesh31/alarm-timer#demo'
  },
  {
    id: 'attendance-app-java',
    title: 'Attendance App - Java',
    description: 'Java application for student attendance management with reporting features.',
    category: 'intermediate',
    tags: ['Java', 'Attendance', 'Management', 'GUI'],
    githubUrl: 'https://github.com/Brajesh31/attendance-java',
    demoUrl: 'https://github.com/Brajesh31/attendance-java#demo'
  },
  {
    id: 'basic-calculator-swing',
    title: 'Basic Calculator (Swing/JavaFX)',
    description: 'Java Swing/JavaFX calculator for arithmetic operations with user-friendly interface.',
    category: 'beginner',
    tags: ['Java', 'Calculator', 'Swing', 'JavaFX'],
    githubUrl: 'https://github.com/Brajesh31/calculator-swing',
    demoUrl: 'https://github.com/Brajesh31/calculator-swing#demo'
  },
  {
    id: 'basic-cms-markdown',
    title: 'Basic CMS with Markdown',
    description: 'Content management system that supports Markdown for easy blogging and content creation.',
    category: 'intermediate',
    tags: ['CMS', 'Markdown', 'Web', 'Content'],
    githubUrl: 'https://github.com/Brajesh31/cms-markdown',
    demoUrl: 'https://cms-markdown-bk.netlify.app'
  },
  {
    id: 'blog-cms-flask',
    title: 'Blog CMS - Flask CRUD',
    description: 'Content management system for blogging using Flask with full CRUD operations.',
    category: 'intermediate',
    tags: ['Blog', 'CMS', 'Flask', 'CRUD', 'Python'],
    githubUrl: 'https://github.com/Brajesh31/blog-cms-flask',
    demoUrl: 'https://blog-cms-flask.herokuapp.com'
  },
  {
    id: 'bmi-calculator-cli',
    title: 'BMI Calculator CLI',
    description: 'Calculate BMI and print health category through command line interface.',
    category: 'beginner',
    tags: ['Python', 'BMI', 'CLI', 'Health'],
    githubUrl: 'https://github.com/Brajesh31/bmi-calculator-cli',
    demoUrl: 'https://github.com/Brajesh31/bmi-calculator-cli#demo'
  },
  {
    id: 'bmi-calculator-swing',
    title: 'BMI Calculator (Swing GUI)',
    description: 'Java Swing application to input height/weight and see BMI with health category.',
    category: 'beginner',
    tags: ['Java', 'BMI', 'Swing', 'GUI'],
    githubUrl: 'https://github.com/Brajesh31/bmi-swing',
    demoUrl: 'https://github.com/Brajesh31/bmi-swing#demo'
  },
  {
    id: 'bmi-chart-plotter',
    title: 'BMI Chart Plotter - matplotlib',
    description: 'Python application to plot BMI charts from user data using matplotlib.',
    category: 'beginner',
    tags: ['Python', 'matplotlib', 'BMI', 'Charts'],
    githubUrl: 'https://github.com/Brajesh31/bmi-chart',
    demoUrl: 'https://github.com/Brajesh31/bmi-chart#demo'
  },
  {
    id: 'bmi-visual-gui-tkinter',
    title: 'BMI Visual GUI - Tkinter',
    description: 'BMI calculator with category visualization using Python Tkinter.',
    category: 'intermediate',
    tags: ['Python', 'BMI', 'Tkinter', 'GUI'],
    githubUrl: 'https://github.com/Brajesh31/bmi-tkinter',
    demoUrl: 'https://github.com/Brajesh31/bmi-tkinter#demo'
  },
  {
    id: 'calculator-arithmetic',
    title: 'Calculator - Arithmetic',
    description: 'CLI calculator for basic arithmetic operations: add, subtract, multiply, divide.',
    category: 'beginner',
    tags: ['Python', 'Calculator', 'CLI', 'Math'],
    githubUrl: 'https://github.com/Brajesh31/calculator-arithmetic',
    demoUrl: 'https://github.com/Brajesh31/calculator-arithmetic#demo'
  },
  {
    id: 'capnshare-platform',
    title: "Cap'nShare - Food Sharing App",
    description: 'Web application to share food across campus and reduce wastage with community features.',
    category: 'advanced',
    tags: ['Food', 'Sharing', 'App', 'Community', 'React', 'Node.js'],
    githubUrl: 'https://github.com/Brajesh31/capnshare',
    demoUrl: 'https://capnshare.netlify.app'
  },
  {
    id: 'career-mapper-ai',
    title: 'Career Mapper',
    description: 'Application to compare jobs based on multiple lifestyle indices and career guidance.',
    category: 'advanced',
    tags: ['Career', 'Job Comparison', 'App', 'AI', 'Analytics'],
    githubUrl: 'https://github.com/Brajesh31/career-mapper',
    demoUrl: 'https://career-mapper.herokuapp.com'
  },
  {
    id: 'chatterbox-app',
    title: 'ChatterBox - Real-Time Chat App',
    description: 'Real-time messaging application with group chats, file sharing, and emoji reactions.',
    category: 'advanced',
    tags: ['Chat', 'Real-Time', 'App', 'Socket.io', 'Node.js'],
    githubUrl: 'https://github.com/Brajesh31/chatterbox',
    demoUrl: 'https://chatterbox-live.netlify.app'
  },
  {
    id: 'cli-project-launcher',
    title: 'CLI Project Launcher',
    description: 'Command-line interface tool to launch and manage projects efficiently.',
    category: 'intermediate',
    tags: ['CLI', 'Tool', 'Project', 'Management', 'Node.js'],
    githubUrl: 'https://github.com/Brajesh31/cli-launcher',
    demoUrl: 'https://github.com/Brajesh31/cli-launcher#demo'
  },
  {
    id: 'contact-manager-csv',
    title: 'Contact Manager - CSV',
    description: 'CLI tool to add/search contacts with data storage in CSV format.',
    category: 'beginner',
    tags: ['CSV', 'Contact', 'CLI', 'Python'],
    githubUrl: 'https://github.com/Brajesh31/contact-csv',
    demoUrl: 'https://github.com/Brajesh31/contact-csv#demo'
  },
  {
    id: 'css-ui-kit',
    title: 'CSS UI Kit',
    description: 'Comprehensive CSS UI kit for faster front-end development with reusable components.',
    category: 'intermediate',
    tags: ['CSS', 'UI Kit', 'Frontend', 'Components'],
    githubUrl: 'https://github.com/Brajesh31/css-ui-kit',
    demoUrl: 'https://css-ui-kit-bk.netlify.app'
  },
  {
    id: 'currency-converter-api',
    title: 'Currency Converter - API',
    description: 'Python application to convert currencies using live API rates.',
    category: 'beginner',
    tags: ['Currency', 'API', 'Python', 'Exchange'],
    githubUrl: 'https://github.com/Brajesh31/currency-converter-api',
    demoUrl: 'https://github.com/Brajesh31/currency-converter-api#demo'
  },
  {
    id: 'currency-converter-gui',
    title: 'Currency Converter GUI',
    description: 'GUI tool to convert currencies using static or API rates with user-friendly interface.',
    category: 'intermediate',
    tags: ['Currency', 'Converter', 'GUI', 'Python'],
    githubUrl: 'https://github.com/Brajesh31/currency-converter-gui',
    demoUrl: 'https://github.com/Brajesh31/currency-converter-gui#demo'
  },
  {
    id: 'data-visualizer-dashboard',
    title: 'Data Visualizer Dashboard',
    description: 'Python Dash/Streamlit application to upload CSV, plot charts, and share results.',
    category: 'intermediate',
    tags: ['Python', 'Dash', 'Streamlit', 'Visualization', 'Data'],
    githubUrl: 'https://github.com/Brajesh31/data-visualizer',
    demoUrl: 'https://data-visualizer-bk.herokuapp.com'
  },
  {
    id: 'dev-toolkit-vault',
    title: 'Dev Toolkit Vault',
    description: 'Comprehensive vault of essential developer toolkits for rapid development.',
    category: 'intermediate',
    tags: ['Developer', 'Toolkit', 'Project', 'Tools'],
    githubUrl: 'https://github.com/Brajesh31/dev-toolkit',
    demoUrl: 'https://dev-toolkit-vault.netlify.app'
  },
  {
    id: 'dice-roller-simulator',
    title: 'Dice Roller Simulator',
    description: 'Simulates rolling dice with random numbers 1–6 and multiple dice support.',
    category: 'beginner',
    tags: ['Python', 'Game', 'Dice', 'Random'],
    githubUrl: 'https://github.com/Brajesh31/dice-roller',
    demoUrl: 'https://github.com/Brajesh31/dice-roller#demo'
  },
  {
    id: 'digital-clock',
    title: 'Digital Clock',
    description: 'Swing GUI clock displaying current time with alarm feature and customization.',
    category: 'beginner',
    tags: ['Java', 'Clock', 'GUI', 'Swing'],
    githubUrl: 'https://github.com/Brajesh31/digital-clock',
    demoUrl: 'https://github.com/Brajesh31/digital-clock#demo'
  },
  {
    id: 'ella-ai-companion',
    title: 'Ella - AI Chat Companion',
    description: 'Mobile-friendly AI chatbot app providing context-aware conversations for daily engagement.',
    category: 'advanced',
    tags: ['AI', 'Chat', 'Mobile', 'Companion', 'React Native'],
    githubUrl: 'https://github.com/Brajesh31/ella',
    demoUrl: 'https://expo.dev/@brajesh31/ella'
  },
  {
    id: 'email-file-sender-combo',
    title: 'Email + File Sender Combo Tool',
    description: 'Utility to send emails with file attachments and batch processing.',
    category: 'intermediate',
    tags: ['Email', 'Utility', 'Python', 'Files'],
    githubUrl: 'https://github.com/Brajesh31/email-file-sender',
    demoUrl: 'https://github.com/Brajesh31/email-file-sender#demo'
  },
  {
    id: 'email-sender-smtplib',
    title: 'Email Sender - smtplib',
    description: 'Python application to send emails programmatically using smtplib.',
    category: 'beginner',
    tags: ['Python', 'Email', 'SMTP', 'Automation'],
    githubUrl: 'https://github.com/Brajesh31/email-sender',
    demoUrl: 'https://github.com/Brajesh31/email-sender#demo'
  },
  {
    id: 'emma-ai-assistant',
    title: 'Emma – Personal AI Assistant',
    description: 'Smart command-line Python-based personal assistant for everyday digital tasks.',
    category: 'professional',
    tags: ['Python', 'AI', 'Assistant', 'CLI', 'APIs', 'Voice Recognition'],
    githubUrl: 'https://github.com/Brajesh31/emma',
    demoUrl: 'https://github.com/Brajesh31/emma#demo'
  },
  {
    id: 'expense-tracker-pie-charts',
    title: 'Expense Tracker (Pie Charts)',
    description: 'Expense tracking application with pie chart visualizations and analytics.',
    category: 'intermediate',
    tags: ['Expense', 'Tracker', 'Charts', 'React', 'Analytics'],
    githubUrl: 'https://github.com/Brajesh31/expense-tracker-charts',
    demoUrl: 'https://expense-tracker-charts.netlify.app'
  },
  {
    id: 'expense-tracker-react',
    title: 'Expense Tracker - React',
    description: 'React-based application to track and visualize expenses with modern UI.',
    category: 'intermediate',
    tags: ['Expense', 'React', 'App', 'Finance', 'Tracking'],
    githubUrl: 'https://github.com/Brajesh31/expense-tracker-react',
    demoUrl: 'https://expense-tracker-react-bk.netlify.app'
  },
  {
    id: 'face-detection-gui',
    title: 'Face Detection GUI',
    description: 'User-friendly GUI for real-time face detection using computer vision.',
    category: 'intermediate',
    tags: ['Face Detection', 'GUI', 'Project', 'OpenCV', 'Python'],
    githubUrl: 'https://github.com/Brajesh31/face-detection-gui',
    demoUrl: 'https://github.com/Brajesh31/face-detection-gui#demo'
  },
  {
    id: 'face-recognition-dashboard',
    title: 'Face Recognition Dashboard',
    description: 'Advanced dashboard for real-time face recognition and analytics.',
    category: 'advanced',
    tags: ['Face Recognition', 'Dashboard', 'Project', 'AI', 'Analytics'],
    githubUrl: 'https://github.com/Brajesh31/face-recognition-dashboard',
    demoUrl: 'https://face-recognition-dashboard.netlify.app'
  },
  {
    id: 'figma-to-html-clone',
    title: 'Figma to HTML UI Clone',
    description: 'Cloned UI from Figma designs to HTML/CSS for rapid prototyping.',
    category: 'intermediate',
    tags: ['Figma', 'HTML', 'UI', 'Clone', 'CSS'],
    githubUrl: 'https://github.com/Brajesh31/figma-html-clone',
    demoUrl: 'https://figma-html-clone.netlify.app'
  },
  {
    id: 'figma-ui-kits',
    title: 'Figma UI Kits',
    description: 'Reusable UI kits designed in Figma for fast prototyping and design consistency.',
    category: 'intermediate',
    tags: ['Figma', 'UI Kit', 'Design', 'Prototyping'],
    githubUrl: 'https://github.com/Brajesh31/figma-ui-kits',
    demoUrl: 'https://www.figma.com/community/file/figma-ui-kits'
  },
  {
    id: 'file-copier-script',
    title: 'File Copier Script',
    description: 'Python script to copy files between folders with batch processing.',
    category: 'beginner',
    tags: ['Python', 'File', 'Script', 'Automation'],
    githubUrl: 'https://github.com/Brajesh31/file-copier',
    demoUrl: 'https://github.com/Brajesh31/file-copier#demo'
  },
  {
    id: 'file-encryption-decryption',
    title: 'File Encryption/Decryption',
    description: 'Utility to encrypt/decrypt files using simple ciphers and security algorithms.',
    category: 'intermediate',
    tags: ['Encryption', 'File', 'Java', 'Security'],
    githubUrl: 'https://github.com/Brajesh31/file-encryption',
    demoUrl: 'https://github.com/Brajesh31/file-encryption#demo'
  },
  {
    id: 'file-encryptor-fernet',
    title: 'File Encryptor (Fernet)',
    description: 'Encrypt and decrypt files using Fernet symmetric encryption.',
    category: 'intermediate',
    tags: ['Python', 'Encryption', 'Fernet', 'Security'],
    githubUrl: 'https://github.com/Brajesh31/file-encryptor-fernet',
    demoUrl: 'https://github.com/Brajesh31/file-encryptor-fernet#demo'
  },
  {
    id: 'file-organizer-folder-sorter',
    title: 'File Organizer - Folder Sorter',
    description: 'Python application to automatically sort files into folders by type.',
    category: 'beginner',
    tags: ['Python', 'File Organizer', 'Automation', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/file-organizer',
    demoUrl: 'https://github.com/Brajesh31/file-organizer#demo'
  },
  {
    id: 'file-reader-writer',
    title: 'File Reader/Writer',
    description: 'Python application to read and write to text files with various formats.',
    category: 'beginner',
    tags: ['Python', 'File IO', 'Text', 'Processing'],
    githubUrl: 'https://github.com/Brajesh31/file-reader-writer',
    demoUrl: 'https://github.com/Brajesh31/file-reader-writer#demo'
  },
  {
    id: 'fitdeck-fitness',
    title: 'FitDeck - Fitness Platform',
    description: 'Platform for fitness enthusiasts to connect and share routines with social features.',
    category: 'advanced',
    tags: ['Fitness', 'Platform', 'App', 'Social', 'Health'],
    githubUrl: 'https://github.com/Brajesh31/fitdeck',
    demoUrl: 'https://expo.dev/@brajesh31/fitdeck'
  },
  {
    id: 'fitness-tracker-charts',
    title: 'Fitness Tracker with Charts',
    description: 'Fitness tracker featuring interactive data visualizations and progress monitoring.',
    category: 'intermediate',
    tags: ['Fitness', 'Tracker', 'Charts', 'Health', 'Analytics'],
    githubUrl: 'https://github.com/Brajesh31/fitness-tracker-charts',
    demoUrl: 'https://fitness-tracker-charts.netlify.app'
  },
  {
    id: 'flask-login-signup',
    title: 'Flask Login/Signup',
    description: 'Flask application with user authentication features and session management.',
    category: 'intermediate',
    tags: ['Flask', 'Auth', 'Python', 'Web'],
    githubUrl: 'https://github.com/Brajesh31/flask-login',
    demoUrl: 'https://flask-login-bk.herokuapp.com'
  },
  {
    id: 'hangman-game',
    title: 'Hangman Game',
    description: 'Word guessing game with text-based interface and multiple difficulty levels.',
    category: 'beginner',
    tags: ['Python', 'Game', 'Hangman', 'CLI'],
    githubUrl: 'https://github.com/Brajesh31/hangman-game',
    demoUrl: 'https://github.com/Brajesh31/hangman-game#demo'
  },
  {
    id: 'hotel-management-system-c',
    title: 'Hotel Management System - C',
    description: 'Basic hotel booking/checkout CLI system using C programming.',
    category: 'intermediate',
    tags: ['C', 'Hotel', 'CLI', 'Management'],
    githubUrl: 'https://github.com/Brajesh31/hotel-management-c',
    demoUrl: 'https://github.com/Brajesh31/hotel-management-c#demo'
  },
  {
    id: 'html-css-blog-template',
    title: 'HTML/CSS Blog Template',
    description: 'Responsive blog template using HTML and CSS with modern design.',
    category: 'beginner',
    tags: ['HTML', 'CSS', 'Blog', 'Template'],
    githubUrl: 'https://github.com/Brajesh31/blog-template',
    demoUrl: 'https://blog-template-bk.netlify.app'
  },
  {
    id: 'html-css-product-card',
    title: 'HTML/CSS Product Card Showcase',
    description: 'Product card layouts using HTML and CSS with hover effects.',
    category: 'beginner',
    tags: ['HTML', 'CSS', 'UI', 'Product'],
    githubUrl: 'https://github.com/Brajesh31/product-card-showcase',
    demoUrl: 'https://product-card-showcase.netlify.app'
  },
  {
    id: 'image-filter-app',
    title: 'Image Filter App',
    description: 'Application for applying custom filters to images with various effects.',
    category: 'intermediate',
    tags: ['Image Filter', 'App', 'Python', 'PIL'],
    githubUrl: 'https://github.com/Brajesh31/image-filter-app',
    demoUrl: 'https://github.com/Brajesh31/image-filter-app#demo'
  },
  {
    id: 'image-resizer-pil',
    title: 'Image Resizer - PIL',
    description: 'Python application to resize images in bulk using PIL library.',
    category: 'beginner',
    tags: ['Python', 'PIL', 'Image', 'Resize'],
    githubUrl: 'https://github.com/Brajesh31/image-resizer',
    demoUrl: 'https://github.com/Brajesh31/image-resizer#demo'
  },
  {
    id: 'influencer-analytics',
    title: 'Influencer Analytics Dashboard',
    description: 'Analytics dashboard for social media influencers to track engagement and performance.',
    category: 'intermediate',
    tags: ['React', 'D3.js', 'Analytics', 'Social Media', 'Dashboard', 'Metrics'],
    githubUrl: 'https://github.com/Brajesh31/influencer-analytics',
    demoUrl: 'https://influencer-analytics.netlify.app'
  },
  {
    id: 'inventory-management-dashboard',
    title: 'Inventory Management Dashboard',
    description: 'Django/Flask application with stock CRUD, alerts, graphs, and billing.',
    category: 'intermediate',
    tags: ['Django', 'Flask', 'Inventory', 'Management', 'Dashboard'],
    githubUrl: 'https://github.com/Brajesh31/inventory-dashboard',
    demoUrl: 'https://inventory-dashboard-bk.herokuapp.com'
  },
  {
    id: 'inventory-management-system',
    title: 'Inventory Management System',
    description: 'Advanced inventory management system to streamline stock and orders.',
    category: 'advanced',
    tags: ['Inventory', 'Project', 'Management', 'React', 'Node.js'],
    githubUrl: 'https://github.com/Brajesh31/inventory-management',
    demoUrl: 'https://smart-inventory.netlify.app'
  },
  {
    id: 'java-billing-application',
    title: 'Java Billing Application',
    description: 'Billing application developed with Java for desktop environments.',
    category: 'intermediate',
    tags: ['Java', 'Billing', 'App', 'Desktop'],
    githubUrl: 'https://github.com/Brajesh31/java-billing',
    demoUrl: 'https://github.com/Brajesh31/java-billing#demo'
  },
  {
    id: 'java-calculator-swing',
    title: 'Java Calculator - Swing',
    description: 'GUI calculator for arithmetic operations using Java Swing.',
    category: 'beginner',
    tags: ['Java', 'Swing', 'Calculator', 'GUI'],
    githubUrl: 'https://github.com/Brajesh31/java-calculator-swing',
    demoUrl: 'https://github.com/Brajesh31/java-calculator-swing#demo'
  },
  {
    id: 'java-quiz-system',
    title: 'Java Quiz System',
    description: 'Java application for MCQ quizzes with instant feedback and scoring.',
    category: 'intermediate',
    tags: ['Java', 'Quiz', 'MCQ', 'Education'],
    githubUrl: 'https://github.com/Brajesh31/java-quiz-system',
    demoUrl: 'https://github.com/Brajesh31/java-quiz-system#demo'
  },
  {
    id: 'job-comparison-platform',
    title: 'Job Comparison Platform',
    description: 'React + Express + MySQL platform to compare jobs by CTC, perks, and reviews.',
    category: 'intermediate',
    tags: ['React', 'Express', 'MySQL', 'Jobs', 'Comparison'],
    githubUrl: 'https://github.com/Brajesh31/job-comparison',
    demoUrl: 'https://job-comparison-platform.netlify.app'
  },
  {
    id: 'jwt-authentication-system',
    title: 'JWT Authentication System',
    description: 'Secure authentication system using JSON Web Tokens (JWT).',
    category: 'advanced',
    tags: ['JWT', 'Auth', 'Security', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/Brajesh31/jwt-auth-system',
    demoUrl: 'https://jwt-auth-system.herokuapp.com'
  },
  {
    id: 'knights-flovora-game',
    title: 'The Knights of Flovora',
    description: '2D adventure RPG with quest-based progression, combat mechanics, and collectible items.',
    category: 'advanced',
    tags: ['Game', 'Flutter', 'RPG', 'Adventure', 'Mobile'],
    githubUrl: 'https://github.com/Brajesh31/knights',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.brajesh.knights'
  },
  {
    id: 'library-book-manager',
    title: 'Library Book Manager',
    description: 'Django + Bootstrap application to search/add/remove books with due alerts.',
    category: 'intermediate',
    tags: ['Library', 'Django', 'Bootstrap', 'Books'],
    githubUrl: 'https://github.com/Brajesh31/library-manager',
    demoUrl: 'https://library-manager-bk.herokuapp.com'
  },
  {
    id: 'light-dark-theme-toggle',
    title: 'Light/Dark Theme Toggle UI',
    description: 'UI feature to switch between light and dark themes with smooth transitions.',
    category: 'beginner',
    tags: ['UI', 'Theme', 'Toggle', 'CSS'],
    githubUrl: 'https://github.com/Brajesh31/theme-toggle',
    demoUrl: 'https://theme-toggle-ui.netlify.app'
  },
  {
    id: 'login-auth-ui-kit',
    title: 'Login/Auth UI Kit',
    description: 'Reusable login/auth UI kit for web projects with modern design.',
    category: 'intermediate',
    tags: ['Auth', 'UI Kit', 'Login', 'Web'],
    githubUrl: 'https://github.com/Brajesh31/login-auth-ui-kit',
    demoUrl: 'https://login-auth-ui-kit.netlify.app'
  },
  {
    id: 'login-auth-flow-firebase',
    title: 'Login Auth Flow (React + Firebase)',
    description: 'Authentication flow using React and Firebase for secure login.',
    category: 'intermediate',
    tags: ['React', 'Firebase', 'Auth', 'Login'],
    githubUrl: 'https://github.com/Brajesh31/react-firebase-auth',
    demoUrl: 'https://react-firebase-auth-bk.netlify.app'
  },
  {
    id: 'login-page-html-css',
    title: 'Login Page - HTML/CSS',
    description: 'Frontend login page designed with HTML and CSS with responsive design.',
    category: 'beginner',
    tags: ['HTML', 'CSS', 'Login', 'Frontend'],
    githubUrl: 'https://github.com/Brajesh31/login-page-html',
    demoUrl: 'https://login-page-html-bk.netlify.app'
  },
  {
    id: 'machine-learning-form-ui',
    title: 'Machine Learning Form UI',
    description: 'Interactive UI for ML-based form submission and predictions.',
    category: 'intermediate',
    tags: ['ML', 'UI', 'Project', 'Forms', 'Python'],
    githubUrl: 'https://github.com/Brajesh31/ml-form-ui',
    demoUrl: 'https://ml-form-ui.netlify.app'
  },
  {
    id: 'mad-libs-generator',
    title: 'Mad Libs Generator',
    description: 'CLI fun game for random story generation with user input.',
    category: 'beginner',
    tags: ['Python', 'Game', 'MadLibs', 'CLI'],
    githubUrl: 'https://github.com/Brajesh31/mad-libs',
    demoUrl: 'https://github.com/Brajesh31/mad-libs#demo'
  },
  {
    id: 'mathematrix-game',
    title: 'Mathematrix',
    description: 'Interactive website to teach and test multiplication tables through gamified learning.',
    category: 'intermediate',
    tags: ['Math', 'Website', 'Learning', 'Education', 'Game'],
    githubUrl: 'https://github.com/Brajesh31/mathematrix',
    demoUrl: 'https://mathematrix.netlify.app'
  },
  {
    id: 'memory-game-html-js',
    title: 'Memory Game - HTML/JS',
    description: 'Classic memory card game built with HTML and JavaScript.',
    category: 'beginner',
    tags: ['JavaScript', 'Game', 'Memory', 'HTML'],
    githubUrl: 'https://github.com/Brajesh31/memory-game',
    demoUrl: 'https://memory-game-bk.netlify.app'
  },
  {
    id: 'mentorship-cards-ui',
    title: 'Mentorship Cards UI Concept',
    description: 'Advanced UI concept for mentorship cards to enhance learner engagement.',
    category: 'advanced',
    tags: ['UI', 'Mentorship', 'Project', 'Design', 'React'],
    githubUrl: 'https://github.com/Brajesh31/mentorship-cards',
    demoUrl: 'https://mentorship-cards-ui.netlify.app'
  },
  {
    id: 'mini-banking-system-java',
    title: 'Mini Banking System - Java',
    description: 'Basic account operations using Java with transaction management.',
    category: 'intermediate',
    tags: ['Java', 'Banking', 'System', 'Finance'],
    githubUrl: 'https://github.com/Brajesh31/mini-banking-java',
    demoUrl: 'https://github.com/Brajesh31/mini-banking-java#demo'
  },
  {
    id: 'mobile-forms-ui-mockups',
    title: 'Mobile Forms UI Mockups',
    description: 'Mobile-first UI mockups for forms and input screens.',
    category: 'intermediate',
    tags: ['Mobile', 'Forms', 'UI', 'Mockup', 'Design'],
    githubUrl: 'https://github.com/Brajesh31/mobile-forms-ui',
    demoUrl: 'https://mobile-forms-ui.netlify.app'
  },
  {
    id: 'mood-tracker-ui-design',
    title: 'Mood Tracker UI Design',
    description: 'Visually appealing mood tracker user interface with analytics.',
    category: 'intermediate',
    tags: ['Mood', 'UI', 'Tracker', 'Design', 'Health'],
    githubUrl: 'https://github.com/Brajesh31/mood-tracker-ui',
    demoUrl: 'https://mood-tracker-ui.netlify.app'
  },
  {
    id: 'movie-book-recommendation-engine',
    title: 'Movie/Book Recommendation Engine',
    description: 'Python (Flask/FastAPI) + scikit-learn: collaborative filtering, trending lists.',
    category: 'intermediate',
    tags: ['Python', 'ML', 'Recommendation', 'Flask', 'scikit-learn'],
    githubUrl: 'https://github.com/Brajesh31/recommendation-engine',
    demoUrl: 'https://recommendation-engine-bk.herokuapp.com'
  },
  {
    id: 'movie-recommender-system',
    title: 'Movie Recommender System',
    description: 'Machine learning-based movie recommender system with collaborative filtering.',
    category: 'advanced',
    tags: ['Movie', 'ML', 'Recommender', 'Python', 'AI'],
    githubUrl: 'https://github.com/Brajesh31/movie-recommender',
    demoUrl: 'https://movie-recommender-bk.herokuapp.com'
  },
  {
    id: 'multiplication-table-generator',
    title: 'Multiplication Table Generator',
    description: 'Python application to print multiplication tables for any number.',
    category: 'beginner',
    tags: ['Python', 'Multiplication', 'Math', 'Education'],
    githubUrl: 'https://github.com/Brajesh31/multiplication-table',
    demoUrl: 'https://github.com/Brajesh31/multiplication-table#demo'
  },
  {
    id: 'music-visualizer',
    title: 'Music Visualizer',
    description: 'Interactive music visualizer using JavaScript and Web Audio API.',
    category: 'intermediate',
    tags: ['Music', 'Visualizer', 'JS', 'Web Audio'],
    githubUrl: 'https://github.com/Brajesh31/music-visualizer',
    demoUrl: 'https://music-visualizer-bk.netlify.app'
  },
  {
    id: 'music-visualizer-web-app',
    title: 'Music Visualizer Web App',
    description: 'JavaScript Canvas/Web Audio API: upload audio, visualize waveform, customize themes.',
    category: 'intermediate',
    tags: ['JavaScript', 'Web Audio', 'Canvas', 'Music', 'Visualization'],
    githubUrl: 'https://github.com/Brajesh31/music-visualizer-web',
    demoUrl: 'https://music-visualizer-web.netlify.app'
  },
  {
    id: 'news-api-reader-cli',
    title: 'News API Reader CLI',
    description: 'CLI tool to fetch and display news using News API.',
    category: 'beginner',
    tags: ['News', 'CLI', 'API', 'Python'],
    githubUrl: 'https://github.com/Brajesh31/news-cli',
    demoUrl: 'https://github.com/Brajesh31/news-cli#demo'
  },
  {
    id: 'nlp-chatbot-tensorflow',
    title: 'NLP Chatbot with TensorFlow',
    description: 'TensorFlow-powered NLP chatbot for intelligent conversations.',
    category: 'advanced',
    tags: ['NLP', 'Chatbot', 'TensorFlow', 'Project', 'AI'],
    githubUrl: 'https://github.com/Brajesh31/nlp-chatbot-tensorflow',
    demoUrl: 'https://nlp-chatbot-tensorflow.herokuapp.com'
  },
  {
    id: 'notes-app-js-localsto',
    title: 'Notes App - JS LocalStorage',
    description: 'Notes application in JavaScript using localStorage for persistence.',
    category: 'beginner',
    tags: ['JavaScript', 'Notes', 'LocalStorage', 'Web'],
    githubUrl: 'https://github.com/Brajesh31/notes-localstorage',
    demoUrl: 'https://notes-localstorage-bk.netlify.app'
  },
  {
    id: 'notes-app-rich-text-folders',
    title: 'Notes App with Rich Text & Folders',
    description: 'React + Node.js: rich text editing, folders, search, dark mode.',
    category: 'intermediate',
    tags: ['React', 'Node.js', 'Notes', 'Rich Text', 'Folders'],
    githubUrl: 'https://github.com/Brajesh31/notes-app-rich',
    demoUrl: 'https://notes-app-rich.netlify.app'
  },
  {
    id: 'number-guessing-game',
    title: 'Number Guessing Game',
    description: 'Guess the randomly chosen number with feedback on guesses.',
    category: 'beginner',
    tags: ['Python', 'Game', 'Guess', 'CLI'],
    githubUrl: 'https://github.com/Brajesh31/number-guessing',
    demoUrl: 'https://github.com/Brajesh31/number-guessing#demo'
  },
  {
    id: 'online-markdown-editor',
    title: 'Online Markdown Editor',
    description: 'React + Node.js: live preview, export to PDF/HTML, syntax highlighting.',
    category: 'intermediate',
    tags: ['Markdown', 'Editor', 'React', 'Live Preview'],
    githubUrl: 'https://github.com/Brajesh31/markdown-editor',
    demoUrl: 'https://markdown-editor-bk.netlify.app'
  },
  {
    id: 'openai-prompt-writer-tool',
    title: 'OpenAI Prompt Writer Tool',
    description: 'Custom prompt engineering tool for OpenAI applications.',
    category: 'advanced',
    tags: ['OpenAI', 'Prompt Engineering', 'Project', 'AI', 'Tool'],
    githubUrl: 'https://github.com/Brajesh31/openai-prompt-writer',
    demoUrl: 'https://openai-prompt-writer.netlify.app'
  },
  {
    id: 'palindrome-checker',
    title: 'Palindrome Checker',
    description: 'CLI to check if a string or number is a palindrome.',
    category: 'beginner',
    tags: ['Python', 'Palindrome', 'CLI', 'String'],
    githubUrl: 'https://github.com/Brajesh31/palindrome-checker',
    demoUrl: 'https://github.com/Brajesh31/palindrome-checker#demo'
  },
  {
    id: 'password-generator',
    title: 'Password Generator',
    description: 'Generate strong random passwords of given length with customizable options.',
    category: 'beginner',
    tags: ['Python', 'Password', 'Security', 'Generator'],
    githubUrl: 'https://github.com/Brajesh31/password-generator',
    demoUrl: 'https://github.com/Brajesh31/password-generator#demo'
  },
  {
    id: 'personal-library-manager',
    title: 'Personal Library Manager',
    description: 'CLI/GUI to add/search/remove books with file storage.',
    category: 'beginner',
    tags: ['Java', 'Library', 'Books', 'Management'],
    githubUrl: 'https://github.com/Brajesh31/personal-library',
    demoUrl: 'https://github.com/Brajesh31/personal-library#demo'
  },
  {
    id: 'portfolio-page-download-resume',
    title: 'Portfolio Page + Download Resume',
    description: 'Simple portfolio web page with downloadable resume feature.',
    category: 'beginner',
    tags: ['HTML', 'Portfolio', 'Resume', 'Web'],
    githubUrl: 'https://github.com/Brajesh31/portfolio-simple',
    demoUrl: 'https://portfolio-simple-bk.netlify.app'
  },
  {
    id: 'portfolio-v2-multiple-sections',
    title: 'Portfolio v2 - Multiple Sections',
    description: 'Personal portfolio site with multiple dynamic sections and modern design.',
    category: 'intermediate',
    tags: ['Portfolio', 'Web', 'Multi-section', 'Responsive'],
    githubUrl: 'https://github.com/Brajesh31/portfolio-v2',
    demoUrl: 'https://portfolio-v2-bk.netlify.app'
  },
  {
    id: 'productivity-dashboard',
    title: 'Productivity Dashboard',
    description: 'Dashboard to track and boost personal productivity with analytics.',
    category: 'intermediate',
    tags: ['Productivity', 'Dashboard', 'Analytics', 'React'],
    githubUrl: 'https://github.com/Brajesh31/productivity-dashboard',
    demoUrl: 'https://productivity-dashboard-bk.netlify.app'
  },
  {
    id: 'quiz-app-cli',
    title: 'Quiz App (CLI)',
    description: 'Java CLI: Multiple-choice quiz with score display and feedback.',
    category: 'beginner',
    tags: ['Java', 'Quiz', 'CLI', 'Education'],
    githubUrl: 'https://github.com/Brajesh31/quiz-cli',
    demoUrl: 'https://github.com/Brajesh31/quiz-cli#demo'
  },
  {
    id: 'quiz-app-python',
    title: 'Quiz App - Python',
    description: 'CLI quiz game with score tracking and feedback system.',
    category: 'beginner',
    tags: ['Python', 'Quiz', 'CLI', 'Game'],
    githubUrl: 'https://github.com/Brajesh31/quiz-python',
    demoUrl: 'https://github.com/Brajesh31/quiz-python#demo'
  },
  {
    id: 'quiz-management-system',
    title: 'Quiz Management System',
    description: 'Python Flask/Django: admin panel, timed quizzes, leaderboard.',
    category: 'intermediate',
    tags: ['Python', 'Quiz', 'Flask', 'Django'],
    githubUrl: 'https://github.com/Brajesh31/quiz-management',
    demoUrl: 'https://quiz-management-bk.herokuapp.com'
  },
  {
    id: 'real-time-chat-application',
    title: 'Real-Time Chat Application',
    description: 'React + Node.js + Socket.io: multi-room chat, emojis, typing indicators.',
    category: 'intermediate',
    tags: ['React', 'Node.js', 'Socket.io', 'Chat', 'Real-time'],
    githubUrl: 'https://github.com/Brajesh31/realtime-chat',
    demoUrl: 'https://realtime-chat-bk.netlify.app'
  },
  {
    id: 'recipe-finder-app',
    title: 'Recipe Finder App',
    description: 'Application to search and display recipes by ingredient.',
    category: 'beginner',
    tags: ['Recipe', 'App', 'Search', 'Food'],
    githubUrl: 'https://github.com/Brajesh31/recipe-finder',
    demoUrl: 'https://recipe-finder-bk.netlify.app'
  },
  {
    id: 'registration-form-flask',
    title: 'Registration Form - Flask',
    description: 'Flask application for user registration with validation.',
    category: 'beginner',
    tags: ['Flask', 'Form', 'Registration', 'Python'],
    githubUrl: 'https://github.com/Brajesh31/registration-flask',
    demoUrl: 'https://registration-flask-bk.herokuapp.com'
  },
  {
    id: 'restaurant-ordering-ui',
    title: 'Restaurant Ordering UI',
    description: 'Simple restaurant order-taking front-end demo with menu display.',
    category: 'beginner',
    tags: ['UI', 'Restaurant', 'Ordering', 'Frontend'],
    githubUrl: 'https://github.com/Brajesh31/restaurant-ui',
    demoUrl: 'https://restaurant-ui-bk.netlify.app'
  },
  {
    id: 'resume-generator-html-export',
    title: 'Resume Generator with HTML Export',
    description: 'Resume generator that exports directly to HTML format.',
    category: 'intermediate',
    tags: ['Resume', 'Generator', 'HTML', 'Export'],
    githubUrl: 'https://github.com/Brajesh31/resume-generator-html',
    demoUrl: 'https://resume-generator-html.netlify.app'
  },
  {
    id: 'resume-template-html',
    title: 'Resume Template - HTML',
    description: 'Simple resume webpage using HTML/CSS with professional design.',
    category: 'beginner',
    tags: ['HTML', 'Resume', 'Template', 'CSS'],
    githubUrl: 'https://github.com/Brajesh31/resume-template-html',
    demoUrl: 'https://resume-template-html-bk.netlify.app'
  },
  {
    id: 'roadmap-planner-web-app',
    title: 'Roadmap Planner Web App',
    description: 'Roadmap planning tool for tracking learning or project progress.',
    category: 'intermediate',
    tags: ['Roadmap', 'Planner', 'Web App', 'Planning'],
    githubUrl: 'https://github.com/Brajesh31/roadmap-planner',
    demoUrl: 'https://roadmap-planner-bk.netlify.app'
  },
  {
    id: 'rock-paper-scissors-console',
    title: 'Rock Paper Scissors - Console',
    description: 'Classic Rock Paper Scissors game vs computer with score tracking.',
    category: 'beginner',
    tags: ['Python', 'Game', 'RPS', 'Console'],
    githubUrl: 'https://github.com/Brajesh31/rps-console',
    demoUrl: 'https://github.com/Brajesh31/rps-console#demo'
  },
  {
    id: 'rock-paper-scissors-gui',
    title: 'Rock Paper Scissors GUI',
    description: 'GUI version of classic rock-paper-scissors game with visual interface.',
    category: 'beginner',
    tags: ['Python', 'Tkinter', 'Game', 'GUI'],
    githubUrl: 'https://github.com/Brajesh31/rps-gui',
    demoUrl: 'https://github.com/Brajesh31/rps-gui#demo'
  },
  {
    id: 'screenshot-app-gui',
    title: 'Screenshot App - GUI',
    description: 'GUI application to take and save desktop screenshots.',
    category: 'intermediate',
    tags: ['Screenshot', 'GUI', 'Python', 'Desktop'],
    githubUrl: 'https://github.com/Brajesh31/screenshot-gui',
    demoUrl: 'https://github.com/Brajesh31/screenshot-gui#demo'
  },
  {
    id: 'screenshot-tool-pyautogui',
    title: 'Screenshot Tool - pyautogui',
    description: 'Automated screenshots using Python pyautogui library.',
    category: 'beginner',
    tags: ['Python', 'Screenshot', 'pyautogui', 'Automation'],
    githubUrl: 'https://github.com/Brajesh31/screenshot-pyautogui',
    demoUrl: 'https://github.com/Brajesh31/screenshot-pyautogui#demo'
  },
  {
    id: 'semac-platform',
    title: 'SEMAC - College ML Utility App',
    description: 'Machine learning utility app for semester management and analytics.',
    category: 'advanced',
    tags: ['ML', 'Utility', 'Project', 'Education', 'Analytics'],
    githubUrl: 'https://github.com/Brajesh31/semac',
    demoUrl: 'https://semac.vercel.app'
  },
  {
    id: 'shopping-list-manager',
    title: 'Shopping List Manager',
    description: 'Python CLI: add, view, remove items, save/load to file.',
    category: 'beginner',
    tags: ['Python', 'CLI', 'List', 'Shopping'],
    githubUrl: 'https://github.com/Brajesh31/shopping-list',
    demoUrl: 'https://github.com/Brajesh31/shopping-list#demo'
  },
  {
    id: 'simple-atm-interface',
    title: 'Simple ATM Interface',
    description: 'Java CLI: Check balance, deposit, withdraw, exit with transaction history.',
    category: 'beginner',
    tags: ['Java', 'ATM', 'CLI', 'Banking'],
    githubUrl: 'https://github.com/Brajesh31/simple-atm',
    demoUrl: 'https://github.com/Brajesh31/simple-atm#demo'
  },
  {
    id: 'simple-banking-simulation',
    title: 'Simple Banking Simulation',
    description: 'Java CLI: deposit, withdraw, balance, transaction history.',
    category: 'beginner',
    tags: ['Java', 'Banking', 'Simulation', 'CLI'],
    githubUrl: 'https://github.com/Brajesh31/banking-simulation',
    demoUrl: 'https://github.com/Brajesh31/banking-simulation#demo'
  },
  {
    id: 'single-page-resume-website',
    title: 'Single-Page Resume Website',
    description: 'Minimal single-page resume site built with HTML/CSS.',
    category: 'beginner',
    tags: ['HTML', 'Resume', 'Single Page', 'Minimal'],
    githubUrl: 'https://github.com/Brajesh31/single-page-resume',
    demoUrl: 'https://single-page-resume-bk.netlify.app'
  },
  {
    id: 'stopwatch-countdown-combo',
    title: 'Stopwatch + Countdown Combo',
    description: 'Combo stopwatch and countdown timer desktop application.',
    category: 'beginner',
    tags: ['Timer', 'Utility', 'Stopwatch', 'Desktop'],
    githubUrl: 'https://github.com/Brajesh31/stopwatch-countdown',
    demoUrl: 'https://github.com/Brajesh31/stopwatch-countdown#demo'
  },
  {
    id: 'stopwatch-tkinter',
    title: 'Stopwatch - Tkinter',
    description: 'Python stopwatch GUI using Tkinter with lap timing.',
    category: 'beginner',
    tags: ['Python', 'Tkinter', 'Stopwatch', 'GUI'],
    githubUrl: 'https://github.com/Brajesh31/stopwatch-tkinter',
    demoUrl: 'https://github.com/Brajesh31/stopwatch-tkinter#demo'
  },
  {
    id: 'student-employee-attendance-app',
    title: 'Student/Employee Attendance App',
    description: 'Java (Swing/JavaFX) or Python (Tkinter): mark/view attendance, export reports.',
    category: 'intermediate',
    tags: ['Java', 'Python', 'Attendance', 'Management'],
    githubUrl: 'https://github.com/Brajesh31/attendance-app',
    demoUrl: 'https://github.com/Brajesh31/attendance-app#demo'
  },
  {
    id: 'student-grade-tracker',
    title: 'Student Grade Tracker',
    description: 'Application to record and compute student grades for multiple subjects.',
    category: 'intermediate',
    tags: ['Grades', 'Student', 'Tracker', 'Education'],
    githubUrl: 'https://github.com/Brajesh31/grade-tracker',
    demoUrl: 'https://github.com/Brajesh31/grade-tracker#demo'
  },
  {
    id: 'student-grades-calculator',
    title: 'Student Grades Calculator',
    description: 'CLI/GUI tool to enter subject marks, compute averages/grades.',
    category: 'beginner',
    tags: ['Grades', 'Java', 'Calculator', 'Student'],
    githubUrl: 'https://github.com/Brajesh31/grades-calculator',
    demoUrl: 'https://github.com/Brajesh31/grades-calculator#demo'
  },
  {
    id: 'student-marks-manager',
    title: 'Student Marks Manager',
    description: 'Java application to input/store marks, calculate average/highest/lowest.',
    category: 'beginner',
    tags: ['Java', 'Marks', 'Student', 'Management'],
    githubUrl: 'https://github.com/Brajesh31/marks-manager',
    demoUrl: 'https://github.com/Brajesh31/marks-manager#demo'
  },
  {
    id: 'survey-creator-tool',
    title: 'Survey Creator Tool',
    description: 'Tool to create, share, and analyze surveys with data visualization.',
    category: 'intermediate',
    tags: ['Survey', 'Tool', 'Analytics', 'Forms'],
    githubUrl: 'https://github.com/Brajesh31/survey-creator',
    demoUrl: 'https://survey-creator-bk.netlify.app'
  },
  {
    id: 'task-scheduler',
    title: 'Task Scheduler',
    description: 'Desktop tool for scheduling and tracking daily tasks with reminders.',
    category: 'intermediate',
    tags: ['Scheduler', 'Productivity', 'Tasks', 'Desktop'],
    githubUrl: 'https://github.com/Brajesh31/task-scheduler',
    demoUrl: 'https://github.com/Brajesh31/task-scheduler#demo'
  },
  {
    id: 'temperature-converter',
    title: 'Temperature Converter',
    description: 'Convert between Celsius, Fahrenheit, and Kelvin temperature scales.',
    category: 'beginner',
    tags: ['Python', 'Temperature', 'Converter', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/temperature-converter',
    demoUrl: 'https://github.com/Brajesh31/temperature-converter#demo'
  },
  {
    id: 'text-file-analyzer',
    title: 'Text File Analyzer',
    description: 'Analyze text files for word/character counts and other statistics.',
    category: 'beginner',
    tags: ['Python', 'Text', 'Analyzer', 'File'],
    githubUrl: 'https://github.com/Brajesh31/text-analyzer',
    demoUrl: 'https://github.com/Brajesh31/text-analyzer#demo'
  },
  {
    id: 'thea-ai-therapist',
    title: 'Thea – AI Therapist',
    description: 'AI-powered virtual mental health assistant providing therapeutic interactions.',
    category: 'professional',
    tags: ['Python', 'TensorFlow', 'NLP', 'Mental Health', 'AI', 'Therapy'],
    githubUrl: 'https://github.com/Brajesh31/thea',
    demoUrl: 'https://github.com/Brajesh31/thea#demo'
  },
  {
    id: 'tip-calculator',
    title: 'Tip Calculator',
    description: 'Calculate tip and split bills among friends with customizable percentages.',
    category: 'beginner',
    tags: ['Python', 'Calculator', 'Tip', 'Finance'],
    githubUrl: 'https://github.com/Brajesh31/tip-calculator',
    demoUrl: 'https://github.com/Brajesh31/tip-calculator#demo'
  },
  {
    id: 'todo-list-cli',
    title: 'To-Do List (CLI)',
    description: 'Add, view, remove tasks with task storage in a list.',
    category: 'beginner',
    tags: ['Python', 'To-Do', 'CLI', 'Tasks'],
    githubUrl: 'https://github.com/Brajesh31/todo-cli',
    demoUrl: 'https://github.com/Brajesh31/todo-cli#demo'
  },
  {
    id: 'todo-list-file-based',
    title: 'To-Do List - File-based',
    description: 'Simple CLI to-do list storing tasks in a text file.',
    category: 'beginner',
    tags: ['To-Do', 'CLI', 'File', 'Python'],
    githubUrl: 'https://github.com/Brajesh31/todo-file',
    demoUrl: 'https://github.com/Brajesh31/todo-file#demo'
  },
  {
    id: 'url-shortener-bitly-api',
    title: 'URL Shortener - Bitly API',
    description: 'Shorten URLs using the Bitly API with analytics and tracking.',
    category: 'intermediate',
    tags: ['URL', 'Shortener', 'Bitly', 'API'],
    githubUrl: 'https://github.com/Brajesh31/url-shortener-bitly',
    demoUrl: 'https://url-shortener-bitly.netlify.app'
  },
  {
    id: 'voice-bot-calendar-sync',
    title: 'Voice Bot + Calendar Sync Prototype',
    description: 'Advanced prototype integrating voice bots with calendar sync capabilities.',
    category: 'advanced',
    tags: ['VoiceBot', 'Calendar', 'Prototype', 'AI', 'Integration'],
    githubUrl: 'https://github.com/Brajesh31/voice-bot-calendar',
    demoUrl: 'https://voice-bot-calendar.netlify.app'
  },
  {
    id: 'weather-cli-app',
    title: 'Weather CLI App',
    description: 'Command-line weather application using public API for weather data.',
    category: 'beginner',
    tags: ['Python', 'CLI', 'Weather', 'API'],
    githubUrl: 'https://github.com/Brajesh31/weather-cli',
    demoUrl: 'https://github.com/Brajesh31/weather-cli#demo'
  },
  {
    id: 'weather-dashboard-chartjs',
    title: 'Weather Dashboard - ChartJS',
    description: 'Weather data visualization dashboard with ChartJS and real-time updates.',
    category: 'intermediate',
    tags: ['ChartJS', 'Weather', 'Dashboard', 'Visualization'],
    githubUrl: 'https://github.com/Brajesh31/weather-dashboard-chartjs',
    demoUrl: 'https://weather-dashboard-chartjs.netlify.app'
  },
  {
    id: 'web-scraper-beautifulsoup',
    title: 'Web Scraper - BeautifulSoup',
    description: 'Python application to scrape web data and parse with BeautifulSoup.',
    category: 'beginner',
    tags: ['Python', 'Web Scraping', 'BeautifulSoup', 'Data'],
    githubUrl: 'https://github.com/Brajesh31/web-scraper-bs4',
    demoUrl: 'https://github.com/Brajesh31/web-scraper-bs4#demo'
  },
  {
    id: 'youtube-downloader-gui',
    title: 'YouTube Downloader GUI',
    description: 'GUI application to download YouTube videos easily with format options.',
    category: 'intermediate',
    tags: ['YouTube', 'Downloader', 'GUI', 'Python'],
    githubUrl: 'https://github.com/Brajesh31/youtube-downloader-gui',
    demoUrl: 'https://github.com/Brajesh31/youtube-downloader-gui#demo'
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

export const getAllProjectsAlphabetically = (): ProjectResource[] => {
  return [...projectResources].sort((a, b) => a.title.localeCompare(b.title));
};

export const getProjectsByCategory = (category: string): ProjectResource[] => {
  return projectResources.filter(project => project.category === category);
};

export const searchMilestones = (query: string): Milestone[] => {
  const lowercaseQuery = query.toLowerCase();
  return milestones.filter(milestone =>
    milestone.title.toLowerCase().includes(lowercaseQuery) ||
    milestone.description.toLowerCase().includes(lowercaseQuery) ||
    milestone.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const searchResources = (query: string): Resource[] => {
  const lowercaseQuery = query.toLowerCase();
  return resources.filter(resource =>
    resource.title.toLowerCase().includes(lowercaseQuery) ||
    resource.description.toLowerCase().includes(lowercaseQuery) ||
    resource.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const searchProjects = (query: string): ProjectResource[] => {
  const lowercaseQuery = query.toLowerCase();
  return projectResources.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Statistics
export const getStatistics = () => {
  const totalMilestones = milestones.length;
  const totalResources = resources.length;
  const totalProjects = projectResources.length;
  
  const milestonesByType = milestones.reduce((acc, milestone) => {
    acc[milestone.type] = (acc[milestone.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const resourcesByType = resources.reduce((acc, resource) => {
    acc[resource.type] = (acc[resource.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const projectsByCategory = projectResources.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return {
    totalMilestones,
    totalResources,
    totalProjects,
    milestonesByType,
    resourcesByType,
    projectsByCategory
  };
};