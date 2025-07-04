// Added Co-Founder, Tech Dev Club (non-SEO update) for Brajesh Kumar by Bolt AI, 2025-01-27.
// SEO keywords globally merged by Bolt AI on 2025-01-27 for maximum ranking – excludes milestone page
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/personal';
import { projects } from '../data/projects';
import { certificates } from '../data/certificates';
import Education from '../components/sections/Education';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Stats from '../components/sections/Stats';
import ThemeAwareImage from '../components/ThemeAwareImage';
import { useTheme } from '../components/ThemeProvider';
import AnimatedJobTitle from '../components/AnimatedJobTitle';
import MetaTags from '../components/SEO/MetaTags';

const globalKeywords = "Python, Java, C, C++, C#, JavaScript, TypeScript, Go, Golang, Rust, Kotlin, Swift, R, Ruby, PHP, Dart, Scala, MATLAB, Julia, Haskell, Perl, Shell, Bash, PowerShell, Fortran, Objective-C, Assembly, F#, Elixir, COBOL, VBA, Solidity, Groovy, SAS, PL/SQL, SQL, NoSQL, GraphQL, React, React Native, Angular, Vue, Next.js, Nuxt.js, Svelte, Preact, Tailwind CSS, Bootstrap, Material UI, Chakra UI, jQuery, Ember.js, Alpine.js, Redux, MobX, Zustand, SWR, TanStack Query, Node.js, Express, NestJS, Fastify, Socket.io, Django, Flask, Spring Boot, Spring, Hibernate, ASP.NET, Laravel, Symfony, Ruby on Rails, Meteor, Phoenix, Ktor, FastAPI, Fiber, Gatsby, Eleventy, Gridsome, Remix, Quasar, Expo, Capacitor, Ionic, Electron, Tauri, MongoDB, PostgreSQL, MySQL, MariaDB, Redis, SQLite, Cassandra, CouchDB, DynamoDB, Firestore, BigQuery, Snowflake, Oracle Database, Elasticsearch, Supabase, PlanetScale, Firebase, AWS, Amazon Web Services, Microsoft Azure, Google Cloud Platform, GCP, IBM Cloud, Oracle Cloud, DigitalOcean, Linode, Heroku, Netlify, Vercel, Cloudflare, Render, Railway, Docker, Kubernetes, Helm, Terraform, Ansible, Jenkins, GitHub Actions, GitLab CI, CircleCI, Travis CI, ArgoCD, Pulumi, Serverless, Lambda, Fargate, App Engine, S3, Notion, Airtable, Trello, Jira, Confluence, Miro, Loom, Calendly, Asana, Slack, Discord, WhatsApp, Telegram, Zoom, Artificial Intelligence, AI, Machine Learning, ML, Deep Learning, DL, Reinforcement Learning, NLP, Natural Language Processing, Computer Vision, Generative AI, Prompt Engineering, Large Language Models, LLM, Transformers, OpenAI, ChatGPT, Gemini, Google Bard, Claude, Llama, Mixtral, Falcon, Gemma, BLOOM, Stability AI, Midjourney, Stable Diffusion, TensorFlow, PyTorch, Keras, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, Hugging Face, LangChain, Haystack, DVC, Weights & Biases, Jupyter, Colab, Anaconda, DataCamp, Kaggle, DataRobot, AutoML, MLflow, Dataiku, Data Science, Big Data, Analytics, Business Intelligence, Data Analytics, Statistical Learning, Feature Engineering, Blockchain, Web3, Crypto, Ethereum, Bitcoin, Solana, Polygon, Smart Contract, dApps, NFT, DeFi, Metamask, Chainlink, ERC20, ERC721, Solidity, Truffle, Hardhat, Ethers.js, Web3.js, Alchemy, Moralis, Binance Smart Chain, IPFS, Filecoin, Zero Knowledge, zk-SNARKs, zk-Rollup, StarkWare, Arbitrum, Optimism, Layer 2, Staking, Yield Farming, Cybersecurity, Penetration Testing, Bug Bounty, Ethical Hacking, SOC, SIEM, Firewall, Zero Trust, Threat Intelligence, Infosec, Red Team, Blue Team, Purple Team, Encryption, TLS, SSL, OWASP, ISO 27001, GDPR, HIPAA, Phishing, Android, iOS, Flutter, SwiftUI, Kotlin Multiplatform, Xamarin, Jetpack Compose, Wearables, IoT, Raspberry Pi, Arduino, ESP32, MQTT, Edge Computing, Robotics, ROS, CAN Bus, Microcontroller, UI, UX, UI/UX, UX Research, User Research, Design Thinking, Figma, Adobe XD, Sketch, InVision, Canva, Wireframing, Prototyping, Usability, Accessibility, Responsive Design, Dark Mode, Material Design, Atomic Design, Product Management, Product Designer, Google, Alphabet, Apple, Microsoft, Amazon, Meta, Facebook, Instagram, X, Twitter, LinkedIn, GitHub, GitLab, Bitbucket, Netflix, Tesla, Spotify, Uber, Salesforce, Shopify, Stripe, PayPal, Atlassian, HackerRank, LeetCode, CodeChef, GeeksforGeeks, Codeforces, AtCoder, TopCoder, InterviewBit, Project Euler, Coursera, edX, Udemy, Pluralsight, Khan Academy, DataCamp, LinkedIn Learning, Codecademy, Alison, FutureLearn, Great Learning, NPTEL, Unacademy, Simplilearn, Skillshare, Forage, Cognitive Class, IBM SkillsBuild, IIT Delhi, IIT Bombay, IIT Madras, IIT Kanpur, IIT Kharagpur, IIT Roorkee, IIT Guwahati, IIT Hyderabad, IIT Indore, IIT Bhubaneswar, IIT Patna, IIT Gandhinagar, IIT Jodhpur, IIT Mandi, IIT Ropar, IIT Palakkad, IIT Tirupati, NIT Trichy, NIT Surathkal, NIT Warangal, NIT Calicut, NIT Rourkela, NIT Durgapur, NIT Allahabad, NIT Jaipur, NIT Kurukshetra, NIT Bhopal, NIT Nagpur, NIT Surat, NIT Silchar, NIT Jamshedpur, NIT Patna, BITS Pilani, IIIT Hyderabad, IIIT Delhi, IIIT Allahabad, IIIT Bangalore, IIIT Bhubaneswar, IIITDM Jabalpur, IIITDM Kancheepuram, MIT, Stanford, Harvard, UC Berkeley, Princeton, Yale, Columbia, Oxford, Cambridge, Imperial College London, NUS, NTU, Tsinghua, Peking, Waterloo, Toronto, ETH Zurich, EPFL, Caltech, UCLA, University of Chicago, Cornell, Georgia Tech, University of Edinburgh, Melbourne, India, United States, USA, UK, United Kingdom, Canada, Germany, France, Singapore, Australia, China, Japan, South Korea, Brazil, Mexico, Spain, Italy, Switzerland, Sweden, Finland, Netherlands, Israel, Ireland, UAE, Russia, South Africa, Turkey, Denmark, Norway, Belgium, New Zealand, Delhi, New Delhi, Mumbai, Bangalore, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Gurgaon, Noida, Indore, Lucknow, Patna, London, San Francisco, Silicon Valley, New York, Boston, Toronto, Vancouver, Berlin, Munich, Sydney, Melbourne, Beijing, Shanghai, Tokyo, Seoul, Paris, Zurich, Stockholm, Dublin, Dubai, Tel Aviv, Amsterdam, Helsinki, Hong Kong, Chicago, Los Angeles, Austin, Miami, Seattle, Software Engineer, Software Developer, Frontend Developer, Backend Developer, Full Stack Developer, Web Developer, Mobile Developer, App Developer, UI Designer, UX Designer, CTO, CEO, COO, Product Manager, Data Scientist, ML Engineer, AI Researcher, DevOps Engineer, Cloud Architect, QA Engineer, Intern, Researcher, Founder, Mentor, Freelancer, Consultant, Tech Lead, Engineering Manager, Technical Writer, Open Source Contributor, Volunteer, Ambassador, Campus Ambassador, Club President, Community Manager, Blogger, Speaker, Hackathon, Competition, Workshop, Bootcamp, Summit, Conference, Meetup, Seminar, Webinar, Networking, Panel, Fellowship, 2025, Trending, Trending Skills, AI Skills, Prompt Engineering, AI Agent, Voice AI, AI Coding Agent, Generative AI, AI Art, RAG, LangGraph, Copilot, NotebookLM, Agentic Workflows, Retrieval Augmented Generation, Semantic Search, Open Source AI, Edge AI, AI Marketplace, Responsible AI, Ethical AI, Explainable AI, Regulatory Compliance, Low Code, No Code, Serverless, API Economy, API Integration, Cloud Native, SRE, MLOps, DataOps, FinOps, Multicloud, Hybrid Cloud, Digital Transformation, Digital India, Startup India, Make in India, Bharat Stack, Gig Economy, Remote Work, Hybrid Work, Global Teams, Creator Economy, Solopreneur, Side Hustle, Tech Blogger, Next Gen, Sustainability, Climate Action, Global Citizen, AI Ethics, Gen Z, Millennial, Collab, Innovation, Women in Tech, Diversity in STEM, Student Leader, Ambassador, Mentor, Coach, Guide, Networking Events, Mentorship Programs, Internship Opportunities, Job Openings, Community Partners, Problem Solving, Technology Events, Professional Network, Student Startups, UpSkill Workshops, Future of Work, Startup Success, Vistara Partnership, Global Investors, Open Source Projects, Register Now, Join the Community, Trusted Platform, Spark Innovation, Pitch Event, Product Launch, Career Platform, Tech Meetup, Learning Platform, Online Registration, Business Excel, Business Drive, Business Forum, Business Fusion, Make a Difference, Help Students Succeed, Using Technology, Explore Opportunities, Experience Events, Interact with Innovators, Enhance Skills, Brush up Skills, Join as a Member, Excel Experience, Global Network, Initiative for Women, Women Entrepreneurs, Brajesh Kumar, etech-community.com, Tech Dev Club, Agrotech AI, Emma AI, Ella AI, Thea AI, Globex, Mathematrix, FitDeck, IdeaPool, ChatterBox, Cap'nShare, Career Mapper, SEMAC, Inventory Management, Chatbot Project, Face Recognition Project, Lab Agile Planning, Resource Vault, Portfolio, Personal Website, Resume, CV, Projects, Blog, Resources, Learning Resources, Showcase, Gallery, Testimonial, Certificate, Award, Honor, Achievement, Skillset, Networking, Collaboration, Global Community";

const jobTitles = [
  "AI Engineer",
  "Full Stack Developer", 
  "UI/UX Designer",
  "Co-Founder, Tech Dev Club"
];

const featuredSkills = [
  { 
    name: 'React', 
    symbol: '⚛️', 
    color: '#61DAFB', 
    gradient: 'from-blue-400 via-cyan-400 to-blue-500',
    bgPattern: 'radial-gradient(circle at 30% 30%, rgba(97, 218, 251, 0.3) 0%, transparent 50%)',
    description: 'Frontend Library'
  },
  { 
    name: 'TypeScript',
    symbol: 'TS', 
    color: '#3178C6', 
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    bgPattern: 'linear-gradient(135deg, rgba(49, 120, 198, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)',
    description: 'Type-Safe JS'
  },
  { 
    name: 'Node.js', 
    symbol: '🟢', 
    color: '#339933', 
    gradient: 'from-green-400 via-emerald-500 to-green-600',
    bgPattern: 'radial-gradient(ellipse at 70% 20%, rgba(52, 211, 153, 0.3) 0%, transparent 60%)',
    description: 'Backend Runtime'
  },
  { 
    name: 'Python', 
    symbol: '🐍', 
    color: '#3776AB', 
    gradient: 'from-yellow-400 via-blue-500 to-blue-700',
    bgPattern: 'linear-gradient(45deg, rgba(255, 193, 7, 0.2) 0%, rgba(55, 118, 171, 0.2) 100%)',
    description: 'AI & Backend'
  },
  { 
    name: 'Google Cloud', 
    symbol: '☁️', 
    color: '#4285F4', 
    gradient: 'from-blue-400 via-sky-500 to-blue-600',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(66, 133, 244, 0.2) 0%, rgba(52, 168, 83, 0.1) 100%)',
    description: 'Cloud Platform'
  },
  { 
    name: 'Azure', 
    symbol: '🔷', 
    color: '#0078D4', 
    gradient: 'from-blue-500 via-blue-600 to-blue-700',
    bgPattern: 'linear-gradient(135deg, rgba(0, 120, 212, 0.3) 0%, rgba(0, 120, 212, 0.1) 100%)',
    description: 'Microsoft Cloud'
  },
  { 
    name: 'Firebase', 
    symbol: '🔥', 
    color: '#FFCA28', 
    gradient: 'from-yellow-400 via-orange-500 to-red-500',
    bgPattern: 'radial-gradient(circle at 40% 60%, rgba(255, 202, 40, 0.3) 0%, rgba(255, 87, 34, 0.2) 100%)',
    description: 'Backend Service'
  },
  { 
    name: 'Kong', 
    symbol: '🦍', 
    color: '#003459', 
    gradient: 'from-gray-600 via-slate-700 to-gray-800',
    bgPattern: 'linear-gradient(45deg, rgba(0, 52, 89, 0.3) 0%, rgba(71, 85, 105, 0.2) 100%)',
    description: 'API Gateway'
  },
];

const slideVariants = {
  hidden: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? -100 : 100,
    opacity: 0
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const SkillBall = ({ skill, index }) => {
  const { theme } = useTheme();
  
  return (
    <div className="relative group perspective-1000 flex-shrink-0">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -8, 0],
          rotateX: [0, 3, 0],
          rotateY: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: index * 0.3,
        }}
        whileHover={{
          scale: 1.15,
          rotateY: 15,
          rotateX: 10,
          transition: { duration: 0.4, type: "spring", stiffness: 200 }
        }}
        className={`w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-2xl flex flex-col items-center justify-center
          preserve-3d cursor-pointer transform-gpu relative overflow-hidden
          ${theme === 'dark' ? 'bg-dark-card' : 'bg-light-card'}
          bg-gradient-to-br ${skill.gradient}
          shadow-[0_8px_32px_rgba(0,0,0,0.12)]
          dark:shadow-[0_8px_32px_rgba(255,255,255,0.08)]
          border border-white/20 dark:border-gray-700/30
          transition-all duration-300 group-hover:shadow-2xl`}
        style={{
          transformStyle: 'preserve-3d',
          background: `${skill.bgPattern}, linear-gradient(135deg, ${skill.gradient.split(' ').join(', ')})`
        }}
        title={`${skill.name} - ${skill.description} | EdTech-Community Technology`}
        aria-label={`${skill.name} technology skill - ${skill.description}`}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${60 + i * 10}%`,
              }}
            />
          ))}
        </div>

        {/* Skill symbol/icon */}
        <div className="relative transform-gpu backface-hidden z-10">
          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          >
            {skill.symbol}
          </motion.div>
        </div>
        
        {/* Skill name */}
        <div className="text-center z-10">
          <h3 className="text-xs md:text-sm lg:text-base font-bold text-white drop-shadow-lg">
            {skill.name}
          </h3>
          <p className="text-xs text-white/80 font-medium hidden md:block">
            {skill.description}
          </p>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        {/* Glowing border effect */}
        <div 
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{
            background: `linear-gradient(45deg, ${skill.color}40, transparent, ${skill.color}40)`,
            filter: 'blur(1px)',
          }}
        />
      </motion.div>
      
      {/* Enhanced shadow */}
      <div 
        className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-6 rounded-full
          bg-gradient-to-r ${skill.gradient} opacity-20 blur-md
          transform-gpu scale-y-50 group-hover:opacity-40 transition-opacity duration-300`}
        aria-hidden="true"
      />

      {/* Floating particles around the skill */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-current rounded-full opacity-60"
            style={{ color: skill.color }}
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -30, 30, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 2 + index * 0.5,
              ease: "easeInOut"
            }}
            initial={{
              left: `${30 + i * 40}%`,
              top: `${20 + i * 60}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const FeaturedSection = ({ title, viewAllLink, children, direction = 'left', className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={slideVariants}
    custom={direction}
    className={`py-2 md:py-3 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 ${className}`}
  >
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <Link
        to={viewAllLink}
        className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
        aria-label={`View all ${title.toLowerCase()}`}
      >
        View All <ExternalLink size={16} aria-hidden="true" />
      </Link>
    </div>
    {children}
  </motion.div>
);

const CertificateCard = ({ certificate }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-light-card dark:bg-dark-card rounded-xl overflow-hidden transition-all duration-300 group`}
    >
      <div
        className="h-40 md:h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${certificate.image})` }}
        role="img"
        aria-label={`Certificate image for ${certificate.title}`}
      />
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {certificate.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
          {certificate.issuer}
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-xs mb-4">
          {certificate.date}
        </p>
        <button 
          className="btn btn-primary w-full"
          aria-label={`View certificate: ${certificate.title}`}
        >
          View Certificate
        </button>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-light-card dark:bg-dark-card rounded-xl overflow-hidden group transition-all duration-300"
    >
      <div
        className="h-40 md:h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
        role="img"
        aria-label={`Project screenshot for ${project.title}`}
      />
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="skill-tag text-xs">
              {tag}
            </span>
          ))}
        </div>
        <Link 
          to={`/projects`} 
          className="btn btn-primary w-full"
          aria-label={`View project details: ${project.title}`}
        >
          View Project
        </Link>
      </div>
    </motion.div>
  );
};

function HomePage() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const featuredCertificates = certificates.filter(cert => cert.featured).slice(0, 3);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'brajesh_kumar_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Brajesh Kumar Portfolio | EdTech-Community",
    "url": "https://brajeshkumar.dev",
    "description": "Professional portfolio of Brajesh Kumar - AI Engineer, EdTech-Community founder, Full Stack Developer, and UI/UX Designer specializing in Google Cloud, Azure, Firebase, Kong",
    "author": {
      "@type": "Person",
      "name": "Brajesh Kumar",
      "jobTitle": "AI Engineer, Full Stack Developer, EdTech Community Builder",
      "url": "https://brajeshkumar.dev"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://brajeshkumar.dev/#/projects?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://brajeshkumar.dev/"
      }
    ]
  };

  return (
    <>
      <MetaTags 
        keywords={globalKeywords}
        structuredData={[structuredData, breadcrumbData]} 
      />
      <div className="min-h-screen">
        {/* Hero Section - Added proper top spacing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideVariants}
          custom="left"
          className="container-section min-h-[70vh] flex flex-col justify-center pt-20 pb-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center lg:justify-end order-1 lg:order-none"
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30"
                  aria-hidden="true"
                />
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-4 rounded-full border-2 border-dashed border-primary-400/40"
                  aria-hidden="true"
                />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-light-bg dark:from-dark-bg to-light-card dark:to-dark-card border border-primary-600/20 overflow-hidden shadow-xl">
                  <ThemeAwareImage
                    darkSrc="/self-dark.png"
                    lightSrc="/self-light.jpg"
                    alt={`${personalInfo.fullName} - AI Engineer, EdTech-Community founder & Full Stack Developer`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="block">{personalInfo.fullName.split(' ')[0]}</span>
                <span className="block text-primary-500">{personalInfo.fullName.split(' ')[1]}</span>
              </h1>
              <AnimatedJobTitle 
                titles={jobTitles}
                className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6"
              />
              
              {/* Tech Dev Club Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <a
                  href="https://techdevclub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  🚀 Co-Founder, Tech Dev Club
                  <ExternalLink size={14} />
                </a>
              </motion.div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <Link
                  to="/contact"
                  className="btn btn-primary flex items-center gap-2"
                  aria-label="Contact for hiring and EdTech-Community collaboration"
                >
                  Hire Me <ChevronRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  to="/projects"
                  className="btn btn-outline flex items-center gap-2"
                  aria-label="View AI, Google Cloud, Azure, Firebase, Kong projects"
                >
                  View Projects <ChevronRight size={16} aria-hidden="true" />
                </Link>
                <button
                  onClick={handleDownloadResume}
                  className="btn btn-outline flex items-center gap-2"
                  aria-label="Download Brajesh Kumar resume PDF"
                >
                  Download Resume <Download size={16} aria-hidden="true" />
                </button>
              </div>
              
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                Building a global tech community for collaboration and innovation through Tech Dev Club.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section - Zero spacing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideVariants}
          custom="right"
          className="py-0"
        >
          <Stats />
        </motion.div>

        {/* Featured Skills - Single line on desktop */}
        <FeaturedSection title="Featured Skills" viewAllLink="/skills" direction="left">
          <div className="flex flex-wrap justify-center lg:justify-between xl:justify-center gap-3 md:gap-4 lg:gap-2 xl:gap-4 overflow-x-auto lg:overflow-x-visible">
            {featuredSkills.map((skill, index) => (
              <SkillBall key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </FeaturedSection>

        {/* Featured Projects - Minimal spacing */}
        <FeaturedSection title="Featured Projects" viewAllLink="/projects" direction="right">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </FeaturedSection>

        {/* Featured Certificates - Added spacing from project */}
        <FeaturedSection 
          title="Featured Certificates" 
          viewAllLink="/certificates" 
          direction="left"
          className="mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </FeaturedSection>

        {/* Education - Zero margin */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideVariants}
          custom="right"
          className="mt-0"
        >
          <Education />
        </motion.div>

        {/* Experience - Zero margin */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideVariants}
          custom="left"
          className="mt-0"
        >
          <Experience />
        </motion.div>

        {/* Contact - Zero margin */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideVariants}
          custom="right"
          className="mt-0"
        >
          <Contact />
        </motion.div>
      </div>
    </>
  );
}

export default HomePage;