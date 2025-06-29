// SEO keywords globally merged by Bolt AI on 2025-01-27 for maximum ranking – excludes milestone page
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ExternalLink, MapPin, Phone, Globe, Code, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/personal';
import { useTheme } from '../ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinksLeft = [
    { name: 'Home', path: '/', title: 'Go to Home - Brajesh Kumar EdTech-Community Portfolio', ariaLabel: 'Navigate to Home page', icon: Globe },
    { name: 'About', path: '/about', title: 'About Brajesh Kumar - AI Engineer, EdTech-Community founder', ariaLabel: 'Learn about Brajesh Kumar', icon: Code },
    { name: 'Projects', path: '/projects', title: 'AI, Machine Learning, Google Cloud, Azure, Firebase, Kong & Full Stack Projects', ariaLabel: 'View projects portfolio', icon: Code },
    { name: 'Experience', path: '/experience', title: 'Professional Experience, Campus Ambassador & EdTech-Community Leadership Roles', ariaLabel: 'View professional experience', icon: Briefcase },
    { name: 'Skills', path: '/skills', title: 'Technical Skills - AI, React, Python, Google Cloud, Azure, Firebase, Kong', ariaLabel: 'View technical skills', icon: Award },
    { name: 'Services', path: '/services', title: 'AI Development, Google Cloud, Azure, Firebase, Kong, Full Stack & UI/UX Design Services', ariaLabel: 'View services offered', icon: Code },
  ];

  const quickLinksRight = [
    { name: 'Education', path: '/education', title: 'Educational Background - B.Tech CSE at GL Bajaj Group of Institutions', ariaLabel: 'View educational background', icon: Award },
    { name: 'Profiles', path: '/profiles', title: 'Professional Profiles - GitHub, LinkedIn, CodeChef, Google Cloud, Azure & More', ariaLabel: 'View professional profiles', icon: Globe },
    { name: 'Blogs', path: '/blogs', title: 'Tech Blogs & Insights - AI, Machine Learning, Google Cloud, Azure, Web Development', ariaLabel: 'Read tech blogs and insights', icon: Code },
    { name: 'Certificates', path: '/certificates', title: '100+ Professional Certifications & Achievements in AI, Cloud, Development', ariaLabel: 'View certifications and achievements', icon: Award },
    { name: 'Contact', path: '/contact', title: 'Contact for Freelance Projects, EdTech-Community & Collaboration', ariaLabel: 'Contact for projects and collaboration', icon: Mail },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: personalInfo.contact.github,
      color: 'hover:text-[#333333] hover:bg-[#333333]/10',
      title: 'View GitHub Profile - Brajesh31 | EdTech-Community Projects',
      ariaLabel: 'Visit Brajesh Kumar GitHub profile with EdTech-Community projects'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personalInfo.contact.linkedin,
      color: 'hover:text-[#0077B5] hover:bg-[#0077B5]/10',
      title: 'Connect on LinkedIn - Brajesh Kumar | EdTech-Community founder',
      ariaLabel: 'Connect with Brajesh Kumar on LinkedIn'
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${personalInfo.contact.email}`,
      color: 'hover:text-[#EA4335] hover:bg-[#EA4335]/10',
      title: 'Send Email to Brajesh Kumar for EdTech-Community & Projects',
      ariaLabel: 'Send email to Brajesh Kumar'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mathura, Uttar Pradesh, India',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7452971645',
      color: 'text-green-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'bk117134@gmail.com',
      color: 'text-red-500'
    }
  ];

  return (
    <footer 
      className={`relative w-full mt-auto py-12 border-t z-10 transition-colors duration-300 
        ${theme === 'dark' 
          ? 'bg-gradient-to-br from-dark-card/95 via-dark-bg/95 to-dark-card/95 backdrop-blur-sm border-gray-800' 
          : 'bg-gradient-to-br from-light-card/95 via-light-bg/95 to-light-card/95 backdrop-blur-sm border-gray-200'}`}
      role="contentinfo"
      aria-label="Footer Information"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex flex-col items-center lg:items-start"
          >
            <Link 
              to="/" 
              className="flex items-center gap-3 mb-6 group" 
              title="Brajesh Kumar - AI Engineer, EdTech-Community founder & Full Stack Developer Portfolio"
              aria-label="Go to homepage"
            >
              <div className="relative">
                <img 
                  src={theme === 'dark' ? '/personal-dark.jpg' : '/personal-light.jpg'} 
                  alt="Brajesh Kumar - AI Engineer, EdTech-Community founder & Full Stack Developer" 
                  className="h-12 w-12 rounded-full ring-2 ring-primary-500/20 group-hover:ring-primary-500/40 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300"></div>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white block">
                  Brajesh<span className="text-primary-500">.</span>
                </span>
                <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                  EdTech-Community
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left mb-6 leading-relaxed">
              AI Engineer, EdTech-Community founder & Full Stack Developer crafting innovative digital solutions with expertise in 
              <span className="text-primary-600 dark:text-primary-400 font-medium"> Google Cloud, Azure, Firebase, Kong</span>, 
              React, Python, and Machine Learning.
            </p>
            
            {/* Contact Information Cards */}
            <div className="space-y-3 w-full">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-light-bg dark:hover:bg-dark-bg/50 transition-colors duration-300"
                >
                  <div className={`p-2 rounded-lg ${info.color} bg-current/10`}>
                    <info.icon className={`w-4 h-4 ${info.color}`} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">{info.label}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>
              Navigation
            </h3>
            <nav aria-label="Footer Navigation Left">
              <ul className="space-y-3">
                {quickLinksLeft.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.path}
                      title={link.title}
                      aria-label={link.ariaLabel}
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 group p-2 rounded-lg hover:bg-light-bg dark:hover:bg-dark-bg/50"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Quick Links - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-secondary-500 to-primary-500 rounded-full"></div>
              Resources
            </h3>
            <nav aria-label="Footer Navigation Right">
              <ul className="space-y-3">
                {quickLinksRight.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.path}
                      title={link.title}
                      aria-label={link.ariaLabel}
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 group p-2 rounded-lg hover:bg-light-bg dark:hover:bg-dark-bg/50"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Social Links & Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 rounded-full"></div>
              Connect
            </h3>
            
            {/* Social Media Links */}
            <div className="space-y-4 mb-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  aria-label={link.ariaLabel}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 ${link.color} transition-all duration-300 group hover:border-current/30 hover:shadow-lg hover:shadow-current/10`}
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-sm">{link.name}</p>
                    <p className="text-xs opacity-70">Connect with me</p>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                </motion.a>
              ))}
            </div>

            {/* EdTech Community Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-primary-500/10 border border-primary-500/20"
            >
              <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" aria-hidden="true" />
                EdTech-Community
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Join our global community for collaborative learning, innovation, and growth in AI, Cloud technologies, and Full Stack Development.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                © {currentYear} {personalInfo.fullName} | 
                <span className="text-primary-600 dark:text-primary-400 font-medium">EdTech-Community</span>
                <span className="hidden md:inline">• All rights reserved.</span>
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" aria-label="love" /> using
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://react.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="React.js - JavaScript Library"
                  aria-label="Visit React.js website"
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors text-xs font-medium"
                >
                  React <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
                <a 
                  href="https://tailwindcss.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Tailwind CSS - Utility-First CSS Framework"
                  aria-label="Visit Tailwind CSS website"
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 transition-colors text-xs font-medium"
                >
                  Tailwind <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;