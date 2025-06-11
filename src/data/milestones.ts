export interface Milestone {
  id: string;
  title: string;
  description: string;
  month: string;
  year: string;
  type: 'event' | 'achievement' | 'project' | 'campus ambassador' | 'contributor' | 'learning' | 'planning' | 'education';
  tags: string[];
  icon: string;
  link?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  year: string;
  type: 'certificate' | 'document' | 'link' | 'portfolio' | 'code' | 'presentation';
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

export const milestones: Milestone[] = [
  // 2025 Milestones
  {
    id: 'openai-academy-2025',
    title: 'OpenAI Academy Launch 2025 – Future Skills for India',
    description: 'Invited to The Oberoi, New Delhi for the OpenAI Academy launch — a visionary leap in India\'s AI journey. Witnessed groundbreaking discussions on AI literacy and democratization.',
    month: 'June',
    year: '2025',
    type: 'event',
    tags: ['OpenAI', 'AI Academy', 'Delhi', 'Future Skills', 'AI Literacy'],
    icon: '🚀',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_openaiacademy-indiaai-meity-activity-7336473782242414592-QOtx'
  },
  {
    id: 'ssoc-season-4-2025',
    title: 'SSOC Season 4 Contributor Selection',
    description: 'Selected as a contributor for Script Summer of Code Season 4, participating in open source development and collaborative coding initiatives.',
    month: 'June',
    year: '2025',
    type: 'achievement',
    tags: ['SSOC', 'Open Source', 'Contributor', 'Script Summer of Code'],
    icon: '🏆',
    link: 'https://ssoc.getsocialnow.co/'
  },
  {
    id: 'aicamp-meetup-tata-1mg',
    title: 'AICamp Meetup at Tata 1mg – Gurugram',
    description: 'Attended power-packed AICamp Meetup at Tata 1mg, Gurugram — where GenAI, community, and execution came together to define the future of AI.',
    month: 'May',
    year: '2025',
    type: 'event',
    tags: ['AI', 'GenAI', 'AICamp', 'Tata 1mg', 'Tech Community'],
    icon: '🤖',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_aicamp-futurewithai-genai-activity-7335668379482826753-uZMs'
  },
  {
    id: 'power-bi-ai-summit-2025',
    title: 'Power BI & AI Summit 2025 – Delhi Edition',
    description: 'Attended game-changing summit at Microsoft Gurugram — insights on AI, data, business, and human stories shaping our future.',
    month: 'May',
    year: '2025',
    type: 'event',
    tags: ['Power BI', 'AI Summit', 'Microsoft', 'Data Science'],
    icon: '📊',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_powerbisummit-aisummit2025-microsoftgurugram-activity-7332381298121953280-7tmg'
  },
  {
    id: 'business-networking-cp',
    title: 'Business Networking Meetup at Coffee Home, Connaught Place',
    description: 'Real connections, deep conversations, and new ideas at a vibrant Delhi business networking meetup.',
    month: 'May',
    year: '2025',
    type: 'event',
    tags: ['Business', 'Networking', 'Delhi', 'Entrepreneurship'],
    icon: '🤝',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_aiforbusiness-businessinnovation-generativeai-activity-7330105177502380032-7ntK'
  },
  {
    id: 'ai-nxt-summit-gurugram',
    title: 'AI.NXT AI Summit – Gurugram',
    description: 'Deep dive into Generative AI, Machine Learning, and Responsible AI – insights, connections, and inspiration from industry leaders.',
    month: 'May',
    year: '2025',
    type: 'event',
    tags: ['AI', 'Summit', 'Machine Learning', 'Gurugram'],
    icon: '🧠',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_ainxt-aisummit-generativeai-activity-7329798634399600640--1hj'
  },
  {
    id: 'apis-kafka-cloud-meetup',
    title: 'APIs. Kafka. Cloud. Connections – Meetup & Workshop at WeWork, Gurugram',
    description: 'Hands-on learning and technical deep dives into API management, Kong Gateway, and next-gen Kafka.',
    month: 'May',
    year: '2025',
    type: 'event',
    tags: ['API', 'Kafka', 'Cloud', 'Kong Gateway', 'WeWork'],
    icon: '⚙️',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_apis-konggateway-kongkonnect-activity-7327557360242053121-1zDk'
  },
  {
    id: 'business40-meetup-ai',
    title: 'Business4.0 Meetup – AI for Business Augmentation',
    description: 'How LLMs and Generative AI are transforming business – highlights from an insightful meetup.',
    month: 'April',
    year: '2025',
    type: 'event',
    tags: ['AI', 'Business', 'LLMs', 'Generative AI'],
    icon: '💼',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_aiforbusiness-businessinnovation-generativeai-activity-7324684940606894080--xZn'
  },
  {
    id: 'artists-ai-creative-collaborator',
    title: 'How Artists Are Using AI as a Creative Collaborator (Microsoft Office, Gurugram)',
    description: 'Witnessed how AI is reshaping the creative universe: music, DJing, and more.',
    month: 'April',
    year: '2025',
    type: 'event',
    tags: ['AI', 'Creativity', 'Music', 'Art', 'Microsoft'],
    icon: '🎨',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_ai-artificialintelligence-aiart-activity-7322542088410021888-6Rua'
  },
  {
    id: 'inclusive-design-research',
    title: 'Inclusive Design Research: Advancing UX in the Social Impact Sector',
    description: 'Insights from a transformative session on empathy, inclusivity, and storytelling in UX research.',
    month: 'April',
    year: '2025',
    type: 'event',
    tags: ['UX', 'Design', 'Research', 'Social Impact'],
    icon: '🎯',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_design-research-gurugram-activity-7314522499205992448-Ikj4'
  },
  {
    id: 'starting-mahakumbh-2025',
    title: 'StartingMahakumbh2025 – A Confluence of Ideas, Technology & Entrepreneurship',
    description: 'Highlights and key takeaways from one of India\'s biggest innovation and startup gatherings.',
    month: 'April',
    year: '2025',
    type: 'event',
    tags: ['Startup', 'Innovation', 'Entrepreneurship', 'Technology'],
    icon: '🚀',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_startingmahakumbh2025-startingmahakumbh-innovation-activity-7314995772746285057-Q6ZD'
  },
  {
    id: 'ai-nxt-march-2025',
    title: 'AI.NXT AI Summit Gurugram (March 29, 2025)',
    description: 'Cloud, Generative AI, and the Microsoft ecosystem — highlights from an AI-powered event.',
    month: 'March',
    year: '2025',
    type: 'event',
    tags: ['AI', 'Cloud', 'Microsoft', 'Generative AI'],
    icon: '☁️',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_ainxt-ai-generativeai-activity-7312166978075422720-BE7l'
  },
  {
    id: 'drone-systems-ux',
    title: 'Redefining Autonomy: Designing Smarter Drone Systems for Seamless Interactions',
    description: 'A hands-on UX session about designing user-friendly, autonomous drone systems and machine interactions.',
    month: 'March',
    year: '2025',
    type: 'event',
    tags: ['Drone', 'Autonomy', 'UX', 'AI'],
    icon: '🚁',
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_drone-interactions-autonomousdronesystems-activity-7299113247222198273-fui9'
  },

  // 2024 Milestones
  {
    id: 'imuna-campus-ambassador',
    title: 'Campus Ambassador - IMUNA',
    description: 'Selected as Campus Ambassador for International Model United Nations Association (IMUNA), representing the organization and facilitating Model UN events.',
    month: 'September',
    year: '2024',
    type: 'campus ambassador',
    tags: ['IMUNA', 'Campus Ambassador', 'Model UN', 'International Relations'],
    icon: '🌍'
  },
  {
    id: 'iitm-campus-ambassador',
    title: 'Campus Ambassador - IIT Madras',
    description: 'Served as Campus Ambassador for Indian Institute of Technology, Madras, promoting IT infrastructure and statistical data analysis programs.',
    month: 'October',
    year: '2024',
    type: 'campus ambassador',
    tags: ['IIT Madras', 'Campus Ambassador', 'IT Infrastructure', 'Data Analysis'],
    icon: '🏛️'
  },
  {
    id: 'gssoc-2024-contributor',
    title: 'GSSOC 2024 Contributor',
    description: 'Contributed to open source projects during GirlScript Summer of Code 2024, collaborating with developers worldwide on meaningful software projects.',
    month: 'October',
    year: '2024',
    type: 'contributor',
    tags: ['GSSOC', 'Open Source', 'GirlScript', 'Contributor'],
    icon: '👩‍💻'
  },
  {
    id: 'wayspire-campus-ambassador',
    title: 'Campus Ambassador - Wayspire',
    description: 'Represented Wayspire educational initiatives, promoting skill development and career guidance programs.',
    month: 'December',
    year: '2024',
    type: 'campus ambassador',
    tags: ['Wayspire', 'Campus Ambassador', 'Skill Development', 'Career Guidance'],
    icon: '📚'
  },
  {
    id: 'letsupgrad-campus-ambassador',
    title: 'Campus Ambassador - Lets Upgrad',
    description: 'Promoted upskilling and professional development programs, facilitating student engagement with career advancement opportunities.',
    month: 'July',
    year: '2024',
    type: 'campus ambassador',
    tags: ['Lets Upgrad', 'Campus Ambassador', 'Upskilling', 'Professional Development'],
    icon: '📈'
  },

  // 2023 Milestones
  {
    id: 'gl-bajaj-admission',
    title: 'B.Tech CSE Admission - GL Bajaj Group of Institutions',
    description: 'Started B.Tech in Computer Science and Engineering at GL Bajaj Group of Institutions, focusing on AI and project management.',
    month: 'September',
    year: '2023',
    type: 'education',
    tags: ['GL Bajaj', 'B.Tech', 'Computer Science', 'AI', 'Education'],
    icon: '🎓'
  },
  {
    id: 'programming-journey-start',
    title: 'Programming Journey Begins',
    description: 'Started learning programming with Python and web development fundamentals, beginning the journey into software development.',
    month: 'October',
    year: '2023',
    type: 'learning',
    tags: ['Programming', 'Python', 'Web Development', 'Learning'],
    icon: '💻'
  },

  // 2022 Milestones
  {
    id: 'class-12-completion',
    title: 'Higher Secondary Education Completion',
    description: 'Completed 12th grade at Delhi Public School, Madhubani with 66% marks, focusing on Physics, Chemistry, Math, and Computer Science.',
    month: 'May',
    year: '2022',
    type: 'education',
    tags: ['Class 12', 'DPS', 'Higher Secondary', 'Science'],
    icon: '📜'
  },

  // 2021 Milestones
  {
    id: 'class-10-completion',
    title: 'Secondary Education Excellence',
    description: 'Completed 10th grade at Delhi Public School, Madhubani with 91% marks, excelling in mathematics and science subjects.',
    month: 'May',
    year: '2021',
    type: 'education',
    tags: ['Class 10', 'DPS', 'Secondary Education', 'Excellence'],
    icon: '🏆'
  },

  // 2020 Milestones
  {
    id: 'tech-interest-development',
    title: 'Technology Interest Development',
    description: 'Developed strong interest in technology and computer science, participating in school tech clubs and coding workshops.',
    month: 'January',
    year: '2020',
    type: 'learning',
    tags: ['Technology', 'Computer Science', 'Tech Clubs', 'Workshops'],
    icon: '🔧'
  }
];

export const resources: Resource[] = [
  {
    id: 'canva-sales-presentation',
    title: 'Build Customizable Sales Presentation Graphics Using Canva',
    description: 'Professional certificate from Coursera on creating effective sales presentations using Canva design tools.',
    year: '2025',
    type: 'certificate',
    tags: ['Canva', 'Design', 'Sales', 'Presentation', 'Coursera'],
    icon: '🎨',
    url: 'https://coursera.org/verify/U16VPKBLWHKJ'
  },
  {
    id: 'canva-web-pages',
    title: 'Use Canva to Create Desktop and Mobile-friendly Web Pages',
    description: 'Coursera certificate demonstrating skills in creating responsive web page designs using Canva.',
    year: '2025',
    type: 'certificate',
    tags: ['Canva', 'Web Design', 'Responsive', 'Mobile', 'Coursera'],
    icon: '📱',
    url: 'https://coursera.org/verify/8ULAP5KM83Y0'
  },
  {
    id: 'ux-portfolio-crevado',
    title: 'Create Your UX Portfolio with Crevado',
    description: 'Certificate in UX portfolio creation using Crevado platform, focusing on showcasing design work effectively.',
    year: '2025',
    type: 'certificate',
    tags: ['UX', 'Portfolio', 'Crevado', 'Design', 'Coursera'],
    icon: '💼',
    url: 'https://coursera.org/verify/H32NN875QYLJ'
  },
  {
    id: 'pitch-deck-canva',
    title: 'Design a Pitch Deck with Canva',
    description: 'Professional certificate in creating compelling pitch decks for business presentations using Canva.',
    year: '2025',
    type: 'certificate',
    tags: ['Pitch Deck', 'Canva', 'Business', 'Presentation', 'Coursera'],
    icon: '📊',
    url: 'https://coursera.org/verify/G1K53UY9ZGKW'
  },
  {
    id: 'website-videos-canva',
    title: 'Create Website Videos with Canva',
    description: 'EDX Alumni certificate in creating engaging website videos using Canva video creation tools.',
    year: '2025',
    type: 'certificate',
    tags: ['Video', 'Canva', 'Website', 'Content Creation', 'EDX'],
    icon: '🎬',
    url: 'https://edx.org/verify/QS8RY49ISMIR'
  },
  {
    id: 'resume-pdf',
    title: 'Professional Resume',
    description: 'Updated professional resume showcasing skills, experience, and achievements in AI and full-stack development.',
    year: '2025',
    type: 'document',
    tags: ['Resume', 'CV', 'Professional', 'Career'],
    icon: '📄',
    downloadUrl: '/resume.pdf'
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'Comprehensive portfolio website showcasing projects, skills, and professional journey.',
    year: '2025',
    type: 'portfolio',
    tags: ['Portfolio', 'Website', 'React', 'TypeScript'],
    icon: '🌐',
    url: 'https://brajeshkumar.dev'
  }
];

export const projectResources: ProjectResource[] = [
  // Professional Projects
  {
    id: 'emma-ai-assistant',
    title: 'Emma – Personal Assistant',
    description: 'A smart command-line Python-based personal assistant that performs everyday digital tasks such as setting reminders, opening applications, fetching real-time weather and news.',
    category: 'professional',
    tags: ['Python', 'AI', 'CLI', 'APIs', 'Personal Assistant'],
    githubUrl: 'https://github.com/Brajesh31/emma',
    demoUrl: 'https://github.com/Brajesh31/emma#demo'
  },
  {
    id: 'thea-ai-therapist',
    title: 'Thea – AI Therapist',
    description: 'An AI-powered virtual mental health assistant that provides therapeutic interactions using a custom dataset of emotional responses to mimic empathetic conversations.',
    category: 'professional',
    tags: ['Python', 'TensorFlow', 'NLP', 'Healthcare', 'AI'],
    githubUrl: 'https://github.com/Brajesh31/thea',
    demoUrl: 'https://github.com/Brajesh31/thea#features'
  },
  {
    id: 'semac-platform',
    title: 'SEMAC',
    description: 'A central hub for college students to manage semester-related resources including timetables, attendance, notes, and grade prediction using ML.',
    category: 'professional',
    tags: ['Next.js', 'MongoDB', 'Python', 'Machine Learning', 'Education'],
    githubUrl: 'https://github.com/Brajesh31/semac',
    demoUrl: 'https://semac.vercel.app'
  },
  {
    id: 'ella-ai-companion',
    title: 'Ella – AI Chat Companion',
    description: 'A mobile-friendly AI chatbot app that provides context-aware, friendly conversations for daily engagement and emotional support.',
    category: 'advanced',
    tags: ['React Native', 'Expo', 'Firebase', 'ML Models', 'Dialogflow'],
    githubUrl: 'https://github.com/Brajesh31/ella',
    demoUrl: 'https://expo.dev/@brajesh31/ella'
  },
  {
    id: 'knights-flovora',
    title: 'The Knights of Flovora',
    description: 'A 2D adventure RPG with quest-based progression, combat mechanics, and collectible items, offering a classic dungeon crawler experience.',
    category: 'advanced',
    tags: ['Flutter', 'Dart', 'Flame Game Engine', 'Game Development'],
    githubUrl: 'https://github.com/Brajesh31/knights',
    demoUrl: 'https://github.com/Brajesh31/knights#gameplay'
  },

  // Advanced Projects
  {
    id: 'ideapool-platform',
    title: 'IdeaPool',
    description: 'A collaborative platform for sharing and developing innovative ideas with community voting and feedback systems.',
    category: 'advanced',
    tags: ['React', 'Node.js', 'MongoDB', 'Collaboration', 'Innovation'],
    githubUrl: 'https://github.com/Brajesh31/ideapool',
    demoUrl: 'https://ideapool.netlify.app'
  },
  {
    id: 'fitdeck-fitness',
    title: 'FitDeck',
    description: 'A comprehensive fitness tracking application with workout plans, progress monitoring, and social features.',
    category: 'advanced',
    tags: ['React Native', 'Firebase', 'Health', 'Fitness', 'Mobile'],
    githubUrl: 'https://github.com/Brajesh31/fitdeck',
    demoUrl: 'https://github.com/Brajesh31/fitdeck#features'
  },
  {
    id: 'chatterbox-social',
    title: 'ChatterBox',
    description: 'Real-time chat application with group messaging, file sharing, and video calling capabilities.',
    category: 'advanced',
    tags: ['React', 'Socket.io', 'Node.js', 'WebRTC', 'Real-time'],
    githubUrl: 'https://github.com/Brajesh31/chatterbox',
    demoUrl: 'https://chatterbox-demo.netlify.app'
  },
  {
    id: 'capnshare-platform',
    title: 'CapNShare',
    description: 'A platform for sharing and discovering creative content with advanced search and recommendation features.',
    category: 'advanced',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'Content Sharing', 'Recommendations'],
    githubUrl: 'https://github.com/Brajesh31/capnshare',
    demoUrl: 'https://capnshare.vercel.app'
  },
  {
    id: 'career-mapper',
    title: 'Career Mapper',
    description: 'AI-powered career guidance platform that analyzes skills and suggests personalized career paths.',
    category: 'advanced',
    tags: ['Python', 'Machine Learning', 'Career Guidance', 'AI', 'Analytics'],
    githubUrl: 'https://github.com/Brajesh31/career-mapper',
    demoUrl: 'https://career-mapper.streamlit.app'
  },

  // Intermediate Projects
  {
    id: 'mathematrix-learning',
    title: 'Mathematrix',
    description: 'An interactive learning platform for children to practice multiplication tables through gamified quizzes and animations.',
    category: 'intermediate',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Education', 'Gamification'],
    githubUrl: 'https://github.com/Brajesh31/mathematrix',
    demoUrl: 'https://mathematrix.netlify.app'
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    description: 'A comprehensive inventory tracking system with barcode scanning, stock alerts, and reporting features.',
    category: 'intermediate',
    tags: ['React', 'Node.js', 'MySQL', 'Inventory', 'Management'],
    githubUrl: 'https://github.com/Brajesh31/inventory-system',
    demoUrl: 'https://inventory-demo.netlify.app'
  },
  {
    id: 'face-recognition-system',
    title: 'Face Recognition System',
    description: 'Real-time face detection and recognition system using computer vision and machine learning techniques.',
    category: 'intermediate',
    tags: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'Recognition'],
    githubUrl: 'https://github.com/Brajesh31/face-recognition',
    demoUrl: 'https://github.com/Brajesh31/face-recognition#demo'
  },
  {
    id: 'agile-planner',
    title: 'Agile Project Planner',
    description: 'Project management tool with sprint planning, task tracking, and team collaboration features.',
    category: 'intermediate',
    tags: ['React', 'Redux', 'Node.js', 'Project Management', 'Agile'],
    githubUrl: 'https://github.com/Brajesh31/agile-planner',
    demoUrl: 'https://agile-planner.netlify.app'
  },
  {
    id: 'agrotech-solution',
    title: 'AgroTech Solution',
    description: 'Smart farming application with crop monitoring, weather integration, and yield prediction.',
    category: 'intermediate',
    tags: ['React Native', 'IoT', 'Agriculture', 'Weather API', 'Prediction'],
    githubUrl: 'https://github.com/Brajesh31/agrotech',
    demoUrl: 'https://github.com/Brajesh31/agrotech#features'
  },
  {
    id: 'influencer-analytics',
    title: 'Influencer Analytics Dashboard',
    description: 'Analytics platform for social media influencers with engagement tracking and audience insights.',
    category: 'intermediate',
    tags: ['React', 'Chart.js', 'Social Media', 'Analytics', 'Dashboard'],
    githubUrl: 'https://github.com/Brajesh31/influencer-analytics',
    demoUrl: 'https://influencer-analytics.netlify.app'
  },

  // Beginner Projects
  {
    id: 'todo-app-react',
    title: 'Todo App with React',
    description: 'A simple yet functional todo application built with React, featuring add, edit, delete, and filter capabilities.',
    category: 'beginner',
    tags: ['React', 'JavaScript', 'CSS', 'Local Storage', 'CRUD'],
    githubUrl: 'https://github.com/Brajesh31/react-todo',
    demoUrl: 'https://react-todo-bk.netlify.app'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'Weather application that displays current conditions and 5-day forecast using OpenWeather API.',
    category: 'beginner',
    tags: ['JavaScript', 'API', 'Weather', 'Responsive', 'CSS'],
    githubUrl: 'https://github.com/Brajesh31/weather-app',
    demoUrl: 'https://weather-forecast-bk.netlify.app'
  },
  {
    id: 'calculator-js',
    title: 'Scientific Calculator',
    description: 'A fully functional scientific calculator with basic and advanced mathematical operations.',
    category: 'beginner',
    tags: ['JavaScript', 'HTML', 'CSS', 'Mathematics', 'Calculator'],
    githubUrl: 'https://github.com/Brajesh31/calculator',
    demoUrl: 'https://scientific-calc-bk.netlify.app'
  },
  {
    id: 'quiz-app',
    title: 'Interactive Quiz Application',
    description: 'Multiple choice quiz application with timer, scoring system, and result analytics.',
    category: 'beginner',
    tags: ['JavaScript', 'Quiz', 'Timer', 'Scoring', 'Interactive'],
    githubUrl: 'https://github.com/Brajesh31/quiz-app',
    demoUrl: 'https://interactive-quiz-bk.netlify.app'
  },
  {
    id: 'expense-tracker',
    title: 'Personal Expense Tracker',
    description: 'Track daily expenses with categorization, budget limits, and spending analytics.',
    category: 'beginner',
    tags: ['JavaScript', 'Local Storage', 'Finance', 'Tracking', 'Analytics'],
    githubUrl: 'https://github.com/Brajesh31/expense-tracker',
    demoUrl: 'https://expense-tracker-bk.netlify.app'
  },
  {
    id: 'password-generator',
    title: 'Secure Password Generator',
    description: 'Generate strong, customizable passwords with various character sets and security options.',
    category: 'beginner',
    tags: ['JavaScript', 'Security', 'Password', 'Generator', 'Utility'],
    githubUrl: 'https://github.com/Brajesh31/password-generator',
    demoUrl: 'https://secure-password-gen-bk.netlify.app'
  },
  {
    id: 'color-palette-generator',
    title: 'Color Palette Generator',
    description: 'Generate beautiful color palettes for design projects with export functionality.',
    category: 'beginner',
    tags: ['JavaScript', 'Design', 'Colors', 'Palette', 'Generator'],
    githubUrl: 'https://github.com/Brajesh31/color-palette',
    demoUrl: 'https://color-palette-bk.netlify.app'
  },
  {
    id: 'markdown-previewer',
    title: 'Markdown Previewer',
    description: 'Real-time markdown editor and previewer with syntax highlighting and export options.',
    category: 'beginner',
    tags: ['JavaScript', 'Markdown', 'Editor', 'Preview', 'Syntax'],
    githubUrl: 'https://github.com/Brajesh31/markdown-previewer',
    demoUrl: 'https://markdown-preview-bk.netlify.app'
  },
  {
    id: 'pomodoro-timer',
    title: 'Pomodoro Productivity Timer',
    description: 'Productivity timer based on the Pomodoro Technique with customizable work and break intervals.',
    category: 'beginner',
    tags: ['JavaScript', 'Productivity', 'Timer', 'Pomodoro', 'Focus'],
    githubUrl: 'https://github.com/Brajesh31/pomodoro-timer',
    demoUrl: 'https://pomodoro-timer-bk.netlify.app'
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener Service',
    description: 'Create shortened URLs with click tracking and analytics dashboard.',
    category: 'beginner',
    tags: ['JavaScript', 'URL', 'Shortener', 'Analytics', 'Service'],
    githubUrl: 'https://github.com/Brajesh31/url-shortener',
    demoUrl: 'https://url-short-bk.netlify.app'
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