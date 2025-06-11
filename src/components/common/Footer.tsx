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
    { name: 'Home', path: '/', title: 'Go to Home - Brajesh Kumar Portfolio' },
    { name: 'Projects', path: '/projects', title: 'AI, Machine Learning & Full Stack Projects' },
    { name: 'Experience', path: '/experience', title: 'Professional Experience & Campus Ambassador Roles' },
    { name: 'Certificates', path: '/certificates', title: '100+ Professional Certifications' },
    { name: 'Contact', path: '/contact', title: 'Contact for Freelance Projects & Collaboration' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: personalInfo.contact.github,
      color: 'hover:text-[#333333]',
      title: 'View GitHub Profile - Brajesh31'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personalInfo.contact.linkedin,
      color: 'hover:text-[#0077B5]',
      title: 'Connect on LinkedIn - Brajesh Kumar'
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${personalInfo.contact.email}`,
      color: 'hover:text-[#EA4335]',
      title: 'Send Email to Brajesh Kumar'
    }
  ];

  return (
    <footer className={`relative w-full mt-auto py-8 border-t z-10 transition-colors duration-300 
      ${theme === 'dark' 
        ? 'bg-dark-card/95 backdrop-blur-sm border-gray-800' 
        : 'bg-light-card/95 backdrop-blur-sm border-gray-200'}`}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <Link to="/" className="flex items-center gap-2 mb-4" title="Brajesh Kumar - AI Engineer & Full Stack Developer Portfolio">
              <img 
                src={theme === 'dark' ? '/personal-dark.jpg' : '/personal-light.jpg'} 
                alt="Brajesh Kumar - AI Engineer & Full Stack Developer" 
                className="h-10 w-10 rounded-full"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Brajesh<span className="text-primary-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              AI Engineer & Full Stack Developer crafting innovative digital solutions with expertise in React, Python, and Machine Learning.
            </p>
            
            {/* Contact Information with Schema */}
            <address className="mt-4 not-italic text-sm text-gray-600 dark:text-gray-400" itemScope itemType="https://schema.org/Person">
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
              <ul className="flex flex-wrap justify-center md:justify-start gap-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      title={link.title}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                  className={`text-gray-600 dark:text-gray-400 ${link.color} transition-colors`}
                  aria-label={link.title}
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
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" aria-label="love" /> using
            <a 
              href="https://react.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              title="React.js - JavaScript Library"
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