export interface Milestone {
  id: string;
  title: string;
  description: string;
  type: 'event' | 'achievement' | 'project' | 'campus ambassador' | 'contributor' | 'learning' | 'planning' | 'education';
  month: string;
  year: string;
  icon: string;
  tags: string[];
  link?: string;
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
  // 2025 Milestones
  {
    id: 'openai-academy-2025',
    title: 'OpenAI Academy Launch 2025 – Future Skills for India',
    description: 'Invited to The Oberoi, New Delhi for the OpenAI Academy launch — a visionary leap in India\'s AI journey. Witnessed groundbreaking discussions on AI literacy and democratization.',
    type: 'event',
    month: 'June',
    year: '2025',
    icon: '🤖',
    tags: ['OpenAI', 'AI', 'Academy', 'Delhi', 'Future Skills', 'India'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_openaiacademy-indiaai-meity-activity-7336473782242414592-QOtx'
  },
  {
    id: 'ssoc-season-4-2025',
    title: 'SSOC Season 4 Contributor',
    description: 'Selected as a contributor for Script Summer of Code Season 4. Contributing to open source projects and collaborative development initiatives.',
    type: 'contributor',
    month: 'June',
    year: '2025',
    icon: '👨‍💻',
    tags: ['Open Source', 'SSOC', 'Contributor', 'Development', 'Community'],
    link: 'https://ssoc.getsocialnow.co/'
  },
  {
    id: 'aicamp-meetup-tata-1mg',
    title: 'AICamp Meetup at Tata 1mg – Gurugram',
    description: 'Attended a power-packed AICamp Meetup at Tata 1mg, Gurugram — where GenAI, community, and execution came together to define the future of AI.',
    type: 'event',
    month: 'May',
    year: '2025',
    icon: '🏢',
    tags: ['AI', 'GenAI', 'AICamp', 'Tata 1mg', 'Gurugram', 'Meetup'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_aicamp-futurewithai-genai-activity-7335668379482826753-uZMs'
  },
  {
    id: 'power-bi-ai-summit-2025',
    title: 'Power BI & AI Summit 2025 – Delhi Edition',
    description: 'Attended a game-changing summit at Microsoft Gurugram — insights on AI, data, business, and human stories shaping our future.',
    type: 'event',
    month: 'May',
    year: '2025',
    icon: '📊',
    tags: ['Power BI', 'AI', 'Summit', 'Microsoft', 'Delhi', 'Data Analytics'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_powerbisummit-aisummit2025-microsoftgurugram-activity-7332381298121953280-7tmg'
  },
  {
    id: 'business-networking-cp',
    title: 'Business Networking Meetup at Coffee Home, Connaught Place',
    description: 'Real connections, deep conversations, and new ideas at a vibrant Delhi business networking meetup.',
    type: 'event',
    month: 'May',
    year: '2025',
    icon: '☕',
    tags: ['Business', 'Networking', 'Delhi', 'Connaught Place', 'Meetup'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_aiforbusiness-businessinnovation-generativeai-activity-7330105177502380032-7ntK'
  },
  {
    id: 'ai-nxt-summit-may',
    title: 'AI.NXT AI Summit – Gurugram',
    description: 'A deep dive into Generative AI, Machine Learning, and Responsible AI – insights, connections, and inspiration from industry leaders.',
    type: 'event',
    month: 'May',
    year: '2025',
    icon: '🚀',
    tags: ['AI', 'Summit', 'Generative AI', 'Machine Learning', 'Gurugram'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_ainxt-aisummit-generativeai-activity-7329798634399600640--1hj'
  },
  {
    id: 'apis-kafka-cloud-meetup',
    title: 'APIs. Kafka. Cloud. Connections – Meetup & Workshop at WeWork',
    description: 'Hands-on learning and technical deep dives into API management, Kong Gateway, and next-gen Kafka at WeWork Gurugram.',
    type: 'event',
    month: 'May',
    year: '2025',
    icon: '⚙️',
    tags: ['API', 'Kafka', 'Cloud', 'Kong Gateway', 'WeWork', 'Workshop'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_apis-konggateway-kongkonnect-activity-7327557360242053121-1zDk'
  },
  {
    id: 'business40-meetup-april',
    title: 'Business4.0 Meetup – AI for Business Augmentation',
    description: 'How LLMs and Generative AI are transforming business – highlights from an insightful meetup at Coffee Home, Connaught Place.',
    type: 'event',
    month: 'April',
    year: '2025',
    icon: '💼',
    tags: ['Business 4.0', 'AI', 'LLM', 'Generative AI', 'Business Transformation'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_aiforbusiness-businessinnovation-generativeai-activity-7324684940606894080--xZn'
  },
  {
    id: 'artists-ai-creative-collaborator',
    title: 'How Artists Are Using AI as a Creative Collaborator',
    description: 'Witnessed how AI is reshaping the creative universe: music, DJing, and more at Microsoft Office, Gurugram.',
    type: 'event',
    month: 'April',
    year: '2025',
    icon: '🎨',
    tags: ['AI', 'Creativity', 'Music', 'Art', 'Microsoft', 'Collaboration'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_ai-artificialintelligence-aiart-activity-7322542088410021888-6Rua'
  },
  {
    id: 'inclusive-design-research-ux',
    title: 'Inclusive Design Research: Advancing UX in the Social Impact Sector',
    description: 'Insights from a transformative session on empathy, inclusivity, and storytelling in UX research at Microsoft Office, Gurugram.',
    type: 'event',
    month: 'April',
    year: '2025',
    icon: '🎯',
    tags: ['UX', 'Design', 'Research', 'Social Impact', 'Inclusivity'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_design-research-gurugram-activity-7314522499205992448-Ikj4'
  },
  {
    id: 'starting-mahakumbh-2025',
    title: 'StartingMahakumbh2025 – A Confluence of Ideas, Technology & Entrepreneurship',
    description: 'Highlights and key takeaways from one of India\'s biggest innovation and startup gatherings.',
    type: 'event',
    month: 'April',
    year: '2025',
    icon: '🏆',
    tags: ['Startup', 'Innovation', 'Entrepreneurship', 'Technology', 'Mahakumbh'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_startingmahakumbh2025-startingmahakumbh-innovation-activity-7314995772746285057-Q6ZD'
  },
  {
    id: 'ai-nxt-summit-march',
    title: 'AI.NXT AI Summit Gurugram – Cloud, Generative AI, and Microsoft Ecosystem',
    description: 'A massive event on cloud, AI tools, and networking with innovators in Gurugram. Deep dive into AI & Cloud technologies.',
    type: 'event',
    month: 'March',
    year: '2025',
    icon: '☁️',
    tags: ['AI', 'Cloud', 'Microsoft', 'Summit', 'Generative AI'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_ainxt-ai-generativeai-activity-7312166978075422720-BE7l'
  },
  {
    id: 'redefining-autonomy-drone-systems',
    title: 'Redefining Autonomy: Designing Smarter Drone Systems for Seamless Interactions',
    description: 'A hands-on UX session about designing user-friendly, autonomous drone systems and machine interactions.',
    type: 'event',
    month: 'March',
    year: '2025',
    icon: '🚁',
    tags: ['Drone', 'Autonomy', 'UX', 'AI', 'Design'],
    link: 'https://www.linkedin.com/posts/brajesh-kumar-9b58651a8_drone-interactions-autonomousdronesystems-activity-7299113247222198273-fui9'
  },
  {
    id: 'iitr-cognizance-2025',
    title: 'Campus Ambassador - IIT Roorkee Cognizance 2025',
    description: 'Represented Cognizance 2025 and managed student engagement and event promotion for IIT Roorkee\'s technical fest.',
    type: 'campus ambassador',
    month: 'March',
    year: '2025',
    icon: '🎓',
    tags: ['IIT Roorkee', 'Campus Ambassador', 'Cognizance', 'Technical Fest'],
    link: 'https://cognizance.org.in/'
  },
  {
    id: 'iitd-kaizen-2025',
    title: 'Campus Ambassador - IIT Delhi Kaizen 2025',
    description: 'Kaizen 2025 program representative, coordinated between institution and student body for IIT Delhi\'s flagship event.',
    type: 'campus ambassador',
    month: 'January',
    year: '2025',
    icon: '🏛️',
    tags: ['IIT Delhi', 'Campus Ambassador', 'Kaizen', 'Student Coordination'],
    link: 'https://kaizen.iitd.ac.in/'
  },
  {
    id: 'wayspire-campus-ambassador',
    title: 'Campus Ambassador - Wayspire',
    description: 'Represented Wayspire educational initiatives, promoted skill development and career guidance programs.',
    type: 'campus ambassador',
    month: 'December',
    year: '2024',
    icon: '🌟',
    tags: ['Wayspire', 'Campus Ambassador', 'Education', 'Skill Development'],
    link: 'https://wayspire.com/'
  },
  {
    id: 'gssoc-2024-contributor',
    title: 'GSSOC 2024 Contributor',
    description: 'Contributed to open source projects during GirlScript Summer of Code 2024, collaborated with developers worldwide.',
    type: 'contributor',
    month: 'October',
    year: '2024',
    icon: '👩‍💻',
    tags: ['Open Source', 'GSSOC', 'GirlScript', 'Contributor', 'Development'],
    link: 'https://gssoc.girlscript.tech/'
  },
  {
    id: 'iitm-campus-ambassador',
    title: 'Campus Ambassador - IIT Madras',
    description: 'Information Technology Infrastructure and Statistical Data Analysis role representing IIT Madras programs.',
    type: 'campus ambassador',
    month: 'October',
    year: '2024',
    icon: '🏫',
    tags: ['IIT Madras', 'Campus Ambassador', 'IT Infrastructure', 'Data Analysis'],
    link: 'https://www.iitm.ac.in/'
  },
  {
    id: 'imuna-campus-ambassador',
    title: 'Campus Ambassador - IMUNA',
    description: 'Computer Information Systems and Statistical Data Analysis role representing International Model United Nations Association.',
    type: 'campus ambassador',
    month: 'September',
    year: '2024',
    icon: '🌍',
    tags: ['IMUNA', 'Campus Ambassador', 'Model UN', 'International Relations'],
    link: 'https://www.imuna.org/'
  },
  {
    id: 'letsupgrad-campus-ambassador',
    title: 'Campus Ambassador - Lets Upgrad',
    description: 'Promoted upskilling and professional development programs, facilitated student engagement with career advancement opportunities.',
    type: 'campus ambassador',
    month: 'July',
    year: '2024',
    icon: '📈',
    tags: ['Lets Upgrad', 'Campus Ambassador', 'Upskilling', 'Career Development'],
    link: 'https://www.letsupgrad.com/'
  },
  {
    id: 'gl-bajaj-admission',
    title: 'Started B.Tech at GL Bajaj Group of Institutions',
    description: 'Began B.Tech in Computer Science and Engineering with focus on Artificial Intelligence and Project Management.',
    type: 'education',
    month: 'September',
    year: '2023',
    icon: '🎓',
    tags: ['GL Bajaj', 'B.Tech', 'Computer Science', 'AI', 'Education'],
    link: 'https://www.glbajajgroup.org/'
  },
  {
    id: 'dps-12th-completion',
    title: 'Completed Higher Secondary Education (12th Grade)',
    description: 'Completed 12th grade at Delhi Public School, Madhubani with 66% focusing on Physics, Chemistry, Math, and Computer Science.',
    type: 'education',
    month: 'May',
    year: '2023',
    icon: '📚',
    tags: ['DPS', '12th Grade', 'Higher Secondary', 'Science', 'Computer Science'],
    link: 'https://www.dpsmadhubani.com/'
  },
  {
    id: 'dps-10th-completion',
    title: 'Completed Secondary Education (10th Grade)',
    description: 'Completed 10th grade at Delhi Public School, Madhubani with 91%, excelled in math and science, active in tech clubs.',
    type: 'education',
    month: 'May',
    year: '2021',
    icon: '🏆',
    tags: ['DPS', '10th Grade', 'Secondary Education', 'Math', 'Science', 'Tech Clubs'],
    link: 'https://www.dpsmadhubani.com/'
  },
  {
    id: 'programming-journey-start',
    title: 'Started Programming Journey',
    description: 'Began learning programming with Python and web development fundamentals, started building first projects.',
    type: 'learning',
    month: 'January',
    year: '2020',
    icon: '💻',
    tags: ['Programming', 'Python', 'Web Development', 'Learning', 'Journey Start'],
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

export const projectResources: ProjectResource[] = [
  // Professional Level Projects
  {
    id: 'emma-ai-assistant',
    title: 'Emma – Personal AI Assistant',
    description: 'A smart command-line Python-based personal assistant that performs everyday digital tasks such as setting reminders, opening applications, fetching real-time weather and news.',
    category: 'professional',
    tags: ['Python', 'AI', 'Assistant', 'CLI', 'APIs', 'Voice Recognition'],
    githubUrl: 'https://github.com/Brajesh31/emma',
    demoUrl: 'https://github.com/Brajesh31/emma#demo'
  },
  {
    id: 'thea-ai-therapist',
    title: 'Thea – AI Therapist',
    description: 'An AI-powered virtual mental health assistant that provides therapeutic interactions using a custom dataset of emotional responses to mimic empathetic conversations.',
    category: 'professional',
    tags: ['Python', 'TensorFlow', 'NLP', 'Mental Health', 'AI', 'Therapy'],
    githubUrl: 'https://github.com/Brajesh31/thea',
    demoUrl: 'https://github.com/Brajesh31/thea#demo'
  },
  {
    id: 'semac-platform',
    title: 'SEMAC – College Management System',
    description: 'A central hub for college students to manage semester-related resources including timetables, attendance, notes, and grade prediction using ML.',
    category: 'professional',
    tags: ['Next.js', 'MongoDB', 'Python', 'Machine Learning', 'Education', 'Management'],
    githubUrl: 'https://github.com/Brajesh31/semac',
    demoUrl: 'https://semac.vercel.app'
  },
  {
    id: 'ideapool-platform',
    title: 'IdeaPool – Innovation Platform',
    description: 'A collaborative platform for sharing and developing innovative ideas with community voting and project management features.',
    category: 'professional',
    tags: ['React', 'Node.js', 'MongoDB', 'Innovation', 'Collaboration', 'Community'],
    githubUrl: 'https://github.com/Brajesh31/ideapool',
    demoUrl: 'https://ideapool.netlify.app'
  },
  {
    id: 'portfolio-website-v2',
    title: 'Portfolio Website v2.0',
    description: 'Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring advanced animations and SEO optimization.',
    category: 'professional',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Portfolio', 'SEO', 'Responsive'],
    githubUrl: 'https://github.com/Brajesh31/portfolio-v2',
    demoUrl: 'https://brajeshkumar.dev'
  },

  // Advanced Level Projects
  {
    id: 'ella-ai-companion',
    title: 'Ella – AI Chat Companion',
    description: 'A mobile-friendly AI chatbot app that provides context-aware, friendly conversations for daily engagement and emotional support.',
    category: 'advanced',
    tags: ['React Native', 'Expo', 'Firebase', 'AI', 'Chatbot', 'Mobile'],
    githubUrl: 'https://github.com/Brajesh31/ella',
    demoUrl: 'https://expo.dev/@brajesh31/ella'
  },
  {
    id: 'knights-flovora-game',
    title: 'The Knights of Flovora',
    description: 'A 2D adventure RPG with quest-based progression, combat mechanics, and collectible items, offering a classic dungeon crawler experience.',
    category: 'advanced',
    tags: ['Flutter', 'Dart', 'Flame Engine', 'Game Development', 'RPG', 'Mobile'],
    githubUrl: 'https://github.com/Brajesh31/knights',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.brajesh.knights'
  },
  {
    id: 'face-recognition-system',
    title: 'Advanced Face Recognition System',
    description: 'Real-time face recognition system using OpenCV and deep learning for security and attendance management applications.',
    category: 'advanced',
    tags: ['Python', 'OpenCV', 'Deep Learning', 'Face Recognition', 'Computer Vision', 'Security'],
    githubUrl: 'https://github.com/Brajesh31/face-recognition',
    demoUrl: 'https://github.com/Brajesh31/face-recognition#demo'
  },
  {
    id: 'agrotech-platform',
    title: 'AgroTech – Smart Farming Platform',
    description: 'IoT-based smart farming solution with crop monitoring, weather prediction, and automated irrigation system.',
    category: 'advanced',
    tags: ['IoT', 'Python', 'React', 'Agriculture', 'Smart Farming', 'Automation'],
    githubUrl: 'https://github.com/Brajesh31/agrotech',
    demoUrl: 'https://agrotech-demo.netlify.app'
  },
  {
    id: 'career-mapper-ai',
    title: 'Career Mapper AI',
    description: 'AI-powered career guidance platform that analyzes skills, interests, and market trends to suggest optimal career paths.',
    category: 'advanced',
    tags: ['Python', 'Machine Learning', 'Career Guidance', 'AI', 'Data Analysis', 'Recommendation'],
    githubUrl: 'https://github.com/Brajesh31/career-mapper',
    demoUrl: 'https://career-mapper.herokuapp.com'
  },

  // Intermediate Level Projects
  {
    id: 'chatterbox-app',
    title: 'ChatterBox – Real-time Chat Application',
    description: 'Real-time messaging application with group chats, file sharing, and emoji reactions built with Socket.io.',
    category: 'intermediate',
    tags: ['Node.js', 'Socket.io', 'React', 'Real-time', 'Chat', 'Messaging'],
    githubUrl: 'https://github.com/Brajesh31/chatterbox',
    demoUrl: 'https://chatterbox-live.netlify.app'
  },
  {
    id: 'inventory-management',
    title: 'Smart Inventory Management System',
    description: 'Web-based inventory management system with barcode scanning, stock alerts, and analytics dashboard.',
    category: 'intermediate',
    tags: ['React', 'Node.js', 'MongoDB', 'Inventory', 'Management', 'Analytics'],
    githubUrl: 'https://github.com/Brajesh31/inventory-management',
    demoUrl: 'https://smart-inventory.netlify.app'
  },
  {
    id: 'fitdeck-fitness',
    title: 'FitDeck – Fitness Tracking App',
    description: 'Comprehensive fitness tracking application with workout plans, progress monitoring, and social features.',
    category: 'intermediate',
    tags: ['React Native', 'Firebase', 'Fitness', 'Health', 'Tracking', 'Social'],
    githubUrl: 'https://github.com/Brajesh31/fitdeck',
    demoUrl: 'https://expo.dev/@brajesh31/fitdeck'
  },
  {
    id: 'capnshare-platform',
    title: 'CapNShare – Skill Sharing Platform',
    description: 'Platform for sharing and learning skills within communities with video tutorials and peer-to-peer learning.',
    category: 'intermediate',
    tags: ['React', 'Node.js', 'Video Streaming', 'Education', 'Community', 'Learning'],
    githubUrl: 'https://github.com/Brajesh31/capnshare',
    demoUrl: 'https://capnshare.netlify.app'
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
    id: 'influencer-analytics',
    title: 'Influencer Analytics Dashboard',
    description: 'Analytics dashboard for social media influencers to track engagement, growth, and performance metrics.',
    category: 'intermediate',
    tags: ['React', 'D3.js', 'Analytics', 'Social Media', 'Dashboard', 'Metrics'],
    githubUrl: 'https://github.com/Brajesh31/influencer-analytics',
    demoUrl: 'https://influencer-analytics.netlify.app'
  },

  // Beginner Level Projects
  {
    id: 'mathematrix-game',
    title: 'Mathematrix – Math Learning Game',
    description: 'An interactive learning platform for children to practice multiplication tables through gamified quizzes and animations.',
    category: 'beginner',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Education', 'Game', 'Math'],
    githubUrl: 'https://github.com/Brajesh31/mathematrix',
    demoUrl: 'https://mathematrix.netlify.app'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast Application',
    description: 'Simple weather application that displays current weather and 5-day forecast using OpenWeatherMap API.',
    category: 'beginner',
    tags: ['JavaScript', 'HTML', 'CSS', 'Weather API', 'Responsive', 'Web App'],
    githubUrl: 'https://github.com/Brajesh31/weather-app',
    demoUrl: 'https://weather-forecast-bk.netlify.app'
  },
  {
    id: 'todo-list-app',
    title: 'Advanced Todo List Application',
    description: 'Feature-rich todo application with categories, priorities, due dates, and local storage persistence.',
    category: 'beginner',
    tags: ['JavaScript', 'HTML', 'CSS', 'Local Storage', 'Todo', 'Productivity'],
    githubUrl: 'https://github.com/Brajesh31/todo-app',
    demoUrl: 'https://advanced-todo-bk.netlify.app'
  },
  {
    id: 'calculator-app',
    title: 'Scientific Calculator',
    description: 'Web-based scientific calculator with advanced mathematical functions and memory operations.',
    category: 'beginner',
    tags: ['JavaScript', 'HTML', 'CSS', 'Calculator', 'Math', 'Web App'],
    githubUrl: 'https://github.com/Brajesh31/calculator',
    demoUrl: 'https://scientific-calc-bk.netlify.app'
  },
  {
    id: 'quiz-app',
    title: 'Interactive Quiz Application',
    description: 'Multi-category quiz application with timer, scoring system, and progress tracking.',
    category: 'beginner',
    tags: ['JavaScript', 'HTML', 'CSS', 'Quiz', 'Education', 'Interactive'],
    githubUrl: 'https://github.com/Brajesh31/quiz-app',
    demoUrl: 'https://interactive-quiz-bk.netlify.app'
  },
  {
    id: 'password-generator',
    title: 'Secure Password Generator',
    description: 'Password generator with customizable length, character sets, and strength indicators.',
    category: 'beginner',
    tags: ['JavaScript', 'HTML', 'CSS', 'Security', 'Password', 'Generator'],
    githubUrl: 'https://github.com/Brajesh31/password-generator',
    demoUrl: 'https://secure-password-gen.netlify.app'
  },
  {
    id: 'color-palette-generator',
    title: 'Color Palette Generator',
    description: 'Tool for generating harmonious color palettes for design projects with export functionality.',
    category: 'beginner',
    tags: ['JavaScript', 'HTML', 'CSS', 'Design', 'Colors', 'Palette'],
    githubUrl: 'https://github.com/Brajesh31/color-palette',
    demoUrl: 'https://color-palette-gen.netlify.app'
  },
  {
    id: 'expense-tracker',
    title: 'Personal Expense Tracker',
    description: 'Simple expense tracking application with categories, charts, and monthly reports.',
    category: 'beginner',
    tags: ['JavaScript', 'HTML', 'CSS', 'Finance', 'Tracking', 'Charts'],
    githubUrl: 'https://github.com/Brajesh31/expense-tracker',
    demoUrl: 'https://expense-tracker-bk.netlify.app'
  },
  {
    id: 'recipe-finder',
    title: 'Recipe Finder Application',
    description: 'Recipe search application using external API with ingredient-based search and favorites.',
    category: 'beginner',
    tags: ['JavaScript', 'HTML', 'CSS', 'Recipe API', 'Food', 'Search'],
    githubUrl: 'https://github.com/Brajesh31/recipe-finder',
    demoUrl: 'https://recipe-finder-bk.netlify.app'
  },
  {
    id: 'music-player',
    title: 'Web Music Player',
    description: 'HTML5 audio-based music player with playlist support, shuffle, and repeat functionality.',
    category: 'beginner',
    tags: ['JavaScript', 'HTML', 'CSS', 'Audio', 'Music', 'Player'],
    githubUrl: 'https://github.com/Brajesh31/music-player',
    demoUrl: 'https://web-music-player-bk.netlify.app'
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