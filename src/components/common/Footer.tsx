import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/personal';
import { useTheme } from '../ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/', title: 'Go to Home - Brajesh Kumar EdTech-Community Portfolio', ariaLabel: 'Navigate to Home page' },
    { name: 'Projects', path: '/projects', title: 'AI, Machine Learning, Google Cloud, Azure, Firebase, Kong & Full Stack Projects', ariaLabel: 'View projects portfolio' },
    { name: 'Experience', path: '/experience', title: 'Professional Experience, Campus Ambassador & EdTech-Community Leadership Roles', ariaLabel: 'View professional experience' },
    { name: 'Certificates', path: '/certificates', title: '100+ Professional Certifications in AI, Cloud, Development', ariaLabel: 'View certifications' },
    { name: 'Contact', path: '/contact', title: 'Contact for Freelance Projects, EdTech-Community & Collaboration', ariaLabel: 'Contact for projects' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: personalInfo.contact.github,
      color: 'hover:text-[#333333]',
      title: 'View GitHub Profile - Brajesh31 | EdTech-Community Projects',
      ariaLabel: 'Visit Brajesh Kumar GitHub profile with EdTech-Community projects'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personalInfo.contact.linkedin,
      color: 'hover:text-[#0077B5]',
      title: 'Connect on LinkedIn - Brajesh Kumar | EdTech-Community founder',
      ariaLabel: 'Connect with Brajesh Kumar on LinkedIn'
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${personalInfo.contact.email}`,
      color: 'hover:text-[#EA4335]',
      title: 'Send Email to Brajesh Kumar for EdTech-Community & Projects',
      ariaLabel: 'Send email to Brajesh Kumar'
    }
  ];

  const techPartners = [
    { name: 'Google Cloud', url: 'https://cloud.google.com/', title: 'Google Cloud Platform' },
    { name: 'Microsoft Azure', url: 'https://azure.microsoft.com/', title: 'Microsoft Azure Cloud' },
    { name: 'Firebase', url: 'https://firebase.google.com/', title: 'Firebase Platform' },
    { name: 'Kong', url: 'https://konghq.com/', title: 'Kong API Gateway' }
  ];

  return (
    <footer 
      className={`relative w-full mt-auto py-8 border-t z-10 transition-colors duration-300 
        ${theme === 'dark' 
          ? 'bg-dark-card/95 backdrop-blur-sm border-gray-800' 
          : 'bg-light-card/95 backdrop-blur-sm border-gray-200'}`}
      role="contentinfo"
      aria-label="Footer Information"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <Link 
              to="/" 
              className="flex items-center gap-2 mb-4" 
              title="Brajesh Kumar - AI Engineer, EdTech-Community founder & Full Stack Developer Portfolio"
              aria-label="Go to homepage"
            >
              <img 
                src={theme === 'dark' ? '/personal-dark.jpg' : '/personal-light.jpg'} 
                alt="Brajesh Kumar - AI Engineer, EdTech-Community founder & Full Stack Developer" 
                className="h-10 w-10 rounded-full"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Brajesh<span className="text-primary-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left mb-4">
              AI Engineer, EdTech-Community founder & Full Stack Developer crafting innovative digital solutions with expertise in Google Cloud, Azure, Firebase, Kong, React, Python, and Machine Learning.
            </p>
            
            {/* Contact Information with Schema */}
            <address className="not-italic text-sm text-gray-600 dark:text-gray-400" itemScope itemType="https://schema.org/Person">
              <span itemProp="name" className="sr-only">Brajesh Kumar</span>
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">Mathura</span>, 
                <span itemProp="addressRegion"> Uttar Pradesh</span>, 
                <span itemProp="addressCountry"> India</span>
              </div>
              <div className="mt-1">
                <span itemProp="email">bk117134@gmail.com</span>
              </div>
              <div>
                <span itemProp="telephone">+91-7452971645</span>
              </div>
            </address>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <nav aria-label="Footer Navigation">
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      title={link.title}
                      aria-label={link.ariaLabel}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Tech Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Tech Partners</h3>
            <div className="flex flex-col gap-2">
              {techPartners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={partner.title}
                  aria-label={`Visit ${partner.name} website`}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                >
                  {partner.name} <ExternalLink size={12} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  aria-label={link.ariaLabel}
                  className={`text-gray-600 dark:text-gray-400 ${link.color} transition-colors`}
                >
                  <link.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            © {currentYear} {personalInfo.fullName} | EdTech-Community. All rights reserved.
          </p>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" aria-label="love" /> using
            <a 
              href="https://react.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              title="React.js - JavaScript Library"
              aria-label="Visit React.js website"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1"
            >
              React <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            &
            <a 
              href="https://tailwindcss.com" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Tailwind CSS - Utility-First CSS Framework"
              aria-label="Visit Tailwind CSS website"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1"
            >
              Tailwind CSS <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;