// Services page redesigned with 3D, glassmorphism, and creative UI by Bolt AI on 2025-01-27. No SEO/Milestone edits.
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Send, ExternalLink, Code, Brain, Database, Cloud, Palette, GraduationCap, Sparkles, Zap, Layers, Cpu, Globe, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { useTheme } from '../ThemeProvider';

interface SubService {
  title: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  subServices: SubService[];
  gradient: string;
  glowColor: string;
  iconBg: string;
}

const services: ServiceCategory[] = [
  {
    id: 'web-dev',
    title: 'Web Development Services',
    icon: <Code className="w-8 h-8" />,
    description: 'End-to-end web solutions using modern technologies and best practices.',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    iconBg: 'from-blue-400 to-purple-600',
    subServices: [
      {
        title: 'Full-Stack Web Application Development',
        description: 'I design and build powerful end-to-end web applications using modern tech stacks like MERN (MongoDB, Express.js, React.js, Node.js), Django, and Laravel. From the user interface to the database and everything in between, I ensure a seamless experience, fast performance, and scalable architecture.',
      },
      {
        title: 'Responsive Front-End Development',
        description: 'With a strong focus on pixel-perfect design and smooth interactions, I create front-ends that are not just responsive but also highly engaging. Using frameworks like React, Angular, and Vue, I ensure your site adapts fluidly across all screen sizes.',
      },
      {
        title: 'E-Commerce Website Development',
        description: 'Launch your online store with fully customizable e-commerce platforms tailored for your brand. I build feature-rich e-commerce solutions with cart systems, secure payment gateways, inventory management, and order tracking.',
      },
      {
        title: 'Landing Page Design & Optimization',
        description: 'Maximize conversions with a high-performing landing page tailored for marketing campaigns, product launches, or lead capture. I design fast-loading, visually compelling landing pages optimized for SEO and mobile usability.',
      },
      {
        title: 'Portfolio Website Development',
        description: 'Showcase your personal or professional journey through an elegant and modern portfolio. I create unique layouts, animation-rich interfaces, and smooth navigation to help you make a lasting impression.',
      },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning Services',
    icon: <Brain className="w-8 h-8" />,
    description: 'Cutting-edge AI solutions for modern business needs.',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    iconBg: 'from-emerald-400 to-cyan-600',
    subServices: [
      {
        title: 'AI-Powered Chatbots & Virtual Assistants',
        description: 'Develop conversational agents that can handle customer queries, schedule tasks, provide support, and more. Using state-of-the-art NLP models, TensorFlow, and OpenAI APIs.',
      },
      {
        title: 'Image Processing & Computer Vision',
        description: 'From facial recognition and object detection to image enhancement and segmentation, I build custom solutions using GANs, OpenCV, and PyTorch.',
      },
      {
        title: 'Recommendation Systems',
        description: 'Increase user engagement and retention through intelligent systems that suggest content, products, or services using collaborative filtering and content-based approaches.',
      },
      {
        title: 'AI Therapy Bot Development',
        description: 'Build mental health bots and virtual companions designed to simulate human-like empathy and support, combining psychology-based conversational flows with advanced NLP.',
      },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & Automation',
    icon: <Database className="w-8 h-8" />,
    description: 'Transform data into actionable insights and automated workflows.',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    iconBg: 'from-orange-400 to-red-600',
    subServices: [
      {
        title: 'Data Analysis & Visualization',
        description: 'Turn raw data into insights through rich, interactive dashboards using tools like Plotly, Bokeh, and Power BI to create real-time, visually appealing charts and reports.',
      },
      {
        title: 'Process Automation Scripts',
        description: 'I help businesses automate manual tasks such as data entry, file organization, reporting, and notifications using Python and Power Automate.',
      },
      {
        title: 'Business Intelligence Reports',
        description: 'I deliver dynamic BI reports by combining SQL-based data extraction, Excel analytics, and Google Data Studio visualization.',
      },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Services',
    icon: <Cloud className="w-8 h-8" />,
    description: 'Scalable cloud solutions and DevOps practices.',
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    iconBg: 'from-violet-400 to-indigo-600',
    subServices: [
      {
        title: 'Cloud Architecture Setup',
        description: 'Design secure, scalable, and cost-effective cloud infrastructures for web apps, APIs, or data systems using AWS, Azure, or GCP.',
      },
      {
        title: 'Web Hosting & Deployment',
        description: 'Deploy your website or app with speed and reliability, including DNS configuration, SSL setup, and continuous integration.',
      },
    ],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design & Branding',
    icon: <Palette className="w-8 h-8" />,
    description: 'Create beautiful and intuitive user experiences.',
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    iconBg: 'from-pink-400 to-rose-600',
    subServices: [
      {
        title: 'UI/UX Design for Web & Mobile Apps',
        description: 'I design beautiful, user-centric interfaces that reflect your brand and optimize user journeys using Figma and Adobe XD.',
      },
      {
        title: 'Design System Creation',
        description: 'Maintain consistency across your product with a centralized design system, including reusable component libraries and clear guidelines.',
      },
    ],
  },
  {
    id: 'mentoring',
    title: 'Technical Mentoring & Consulting',
    icon: <GraduationCap className="w-8 h-8" />,
    description: 'Share knowledge and guide others in their tech journey.',
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    iconBg: 'from-yellow-400 to-orange-600',
    subServices: [
      {
        title: 'College-Level Project Mentorship',
        description: 'Provide structured, personalized guidance to students on academic or capstone project, from ideation to deployment.',
      },
      {
        title: 'Workshops and Training',
        description: 'Conduct impactful workshops covering topics like AI project development, web frameworks, and automation workflows.',
      },
    ],
  },
];

// 3D Tilt Hook
const use3DTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    transform: { rotateX, rotateY },
    handleMouseMove,
    handleMouseLeave,
  };
};

// Floating Particles Background Component
const FloatingParticles = () => {
  const { theme } = useTheme();
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${
            theme === 'dark' ? 'bg-white/10' : 'bg-black/5'
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Service Card Component
const ServiceCard: React.FC<{ service: ServiceCategory; index: number }> = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { transform, handleMouseMove, handleMouseLeave } = use3DTilt();

  const handleContactClick = (serviceTitle: string) => {
    navigate('/contact', { state: { selectedService: serviceTitle } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={transform}
        className={`relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500
          ${theme === 'dark' 
            ? 'bg-white/5 border-white/10 hover:border-white/20' 
            : 'bg-white/20 border-black/10 hover:border-black/20'
          }
          hover:shadow-2xl group-hover:scale-[1.02]`}
        whileHover={{ 
          boxShadow: `0 25px 50px -12px ${service.glowColor}`,
        }}
      >
        {/* Animated Background Gradient */}
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`}
        />
        
        {/* Animated Border Gradient */}
        <div 
          className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{
            background: `linear-gradient(45deg, ${service.glowColor}, transparent, ${service.glowColor})`,
            padding: '2px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
          }}
        />

        {/* Floating Icon */}
        <motion.div
          animate={isHovered ? {
            y: [-5, 5, -5],
            rotate: [0, 5, -5, 0],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`relative mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.iconBg} 
            flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="text-white">
            {service.icon}
          </div>
          
          {/* Icon Glow Effect */}
          <motion.div
            animate={isHovered ? { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.iconBg} blur-md opacity-0 group-hover:opacity-50`}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
            {service.title}
          </h3>
          
          <p className={`text-base mb-6 leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {service.description}
          </p>

          {/* Expand Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300
              ${theme === 'dark' 
                ? 'bg-white/10 hover:bg-white/20 text-white' 
                : 'bg-black/10 hover:bg-black/20 text-gray-900'
              }
              backdrop-blur-sm border border-white/20 hover:border-white/30`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Details</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-4">
                {service.subServices.map((subService, subIndex) => (
                  <motion.div
                    key={subService.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: subIndex * 0.1 }}
                    className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-300
                      ${theme === 'dark' 
                        ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                        : 'bg-white/30 border-black/10 hover:bg-white/50'
                      }`}
                  >
                    <h4 className={`font-semibold mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {subService.title}
                    </h4>
                    <p className={`text-sm leading-relaxed mb-3 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {subService.description}
                    </p>
                    <motion.button
                      onClick={() => handleContactClick(subService.title)}
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors
                        ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}
                      `}
                      whileHover={{ x: 5 }}
                    >
                      <Send className="w-3 h-3" /> Contact for this service
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Shimmer Effect */}
        <motion.div
          animate={isHovered ? {
            x: [-100, 100],
            opacity: [0, 0.5, 0],
          } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      setShowBanner(bottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20' 
            : 'bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50/50'
        }`} />
        
        {/* Floating Particles */}
        <FloatingParticles />
        
        {/* Animated Gradient Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Creative Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className={`text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative inline-block`}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Services I Offer
            
            {/* Glowing Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              style={{
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
              }}
            />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Explore my professional services and let's create something amazing together with cutting-edge technology and creative innovation.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className={`inline-block p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500
              ${theme === 'dark' 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/20 border-black/10'
              }`}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.4)',
            }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Let's discuss your ideas and bring them to life with cutting-edge technology.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Let's Work Together
              <ExternalLink className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Action Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className={`fixed bottom-0 left-0 right-0 p-6 backdrop-blur-xl border-t z-50
              ${theme === 'dark' 
                ? 'bg-black/20 border-white/10' 
                : 'bg-white/20 border-black/10'
              }`}
          >
            <div className="container mx-auto flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Ready to innovate?</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Transform your ideas into reality with premium development services.
                </p>
              </div>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-4 h-4" />
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;