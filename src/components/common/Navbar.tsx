import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';
import ThemeAwareImage from '../ThemeAwareImage';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/', title: 'Go to Home - Brajesh Kumar EdTech-Community Portfolio', ariaLabel: 'Navigate to Home page' },
    { name: 'About', path: '/about', title: 'About Brajesh Kumar - AI Engineer, EdTech-Community founder & Full Stack Developer', ariaLabel: 'Learn about Brajesh Kumar' },
    { name: 'Education', path: '/education', title: 'Educational Background - B.Tech CSE at GL Bajaj Group of Institutions', ariaLabel: 'View educational background' },
    { name: 'Experience', path: '/experience', title: 'Professional Experience - Campus Ambassador, EdTech-Community & Student Leadership', ariaLabel: 'View professional experience' },
    { name: 'Profiles', path: '/profiles', title: 'Professional Profiles - GitHub, LinkedIn, CodeChef, Google Cloud, Azure & More', ariaLabel: 'View professional profiles' },
    { name: 'Projects', path: '/projects', title: 'AI, Machine Learning, Google Cloud, Azure, Firebase, Kong & Full Stack Development Projects', ariaLabel: 'View projects portfolio' },
    { name: 'Services', path: '/services', title: 'AI Development, Google Cloud, Azure, Firebase, Kong, Full Stack & UI/UX Design Services', ariaLabel: 'View services offered' },
    { name: 'Blogs', path: '/blogs', title: 'Tech Blogs & Insights - AI, Machine Learning, Google Cloud, Azure, Web Development, EdTech-Community', ariaLabel: 'Read tech blogs and insights' },
    { name: 'Certificates', path: '/certificates', title: '100+ Professional Certifications & Achievements in AI, Cloud, Development', ariaLabel: 'View certifications and achievements' },
    { name: 'Skills', path: '/skills', title: 'Technical Skills - AI, React, Python, Google Cloud, Azure, Firebase, Kong, Machine Learning', ariaLabel: 'View technical skills and tools' },
    { name: 'Milestones', path: '/milestones', title: 'Professional Journey Timeline & Project Resources', ariaLabel: 'View professional milestones and journey' },
    { name: 'Contact', path: '/contact', title: 'Contact for Freelance Projects, EdTech-Community & Collaboration', ariaLabel: 'Contact for projects and collaboration' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-light-card/95 dark:bg-dark-card/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-3'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex justify-between items-center" aria-label="Main Navigation" role="navigation">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold flex items-center gap-2 flex-shrink-0"
        >
          <Link 
            to="/" 
            className="flex items-center gap-2" 
            title="Brajesh Kumar - AI Engineer, EdTech-Community founder & Full Stack Developer Portfolio"
            aria-label="Go to homepage - Brajesh Kumar EdTech-Community Portfolio"
          >
            <ThemeAwareImage
              darkSrc="/personal-dark.jpg"
              lightSrc="/personal-light.jpg"
              alt="Brajesh Kumar - AI Engineer, EdTech-Community founder & Full Stack Developer"
              className="h-7 w-7 rounded-full"
            />
            <span>
              Brajesh<span className="text-primary-500">.</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center space-x-1 flex-wrap justify-center flex-1 mx-4"
          role="menubar"
        >
          {navLinks.map((link) => (
            <li key={link.name} role="none">
              <Link
                to={link.path}
                title={link.title}
                aria-label={link.ariaLabel}
                className={`nav-link text-xs px-2 py-2 whitespace-nowrap ${
                  location.pathname === link.path ? 'active' : ''
                }`}
                role="menuitem"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>

        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Theme Toggle Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4" aria-hidden="true" />
            )}
          </motion.button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            title={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-light-card dark:bg-dark-card border-t border-gray-800"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.name} role="none">
                <Link
                  to={link.path}
                  title={link.title}
                  aria-label={link.ariaLabel}
                  className={`block px-4 py-3 hover:bg-light-bg dark:hover:bg-dark-bg ${
                    location.pathname === link.path ? 'text-primary-500' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  role="menuitem"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;