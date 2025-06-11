import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';
import ThemeAwareImage from '../ThemeAwareImage';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/', title: 'Go to Home - Brajesh Kumar Portfolio' },
    { name: 'About Me', path: '/about', title: 'About Brajesh Kumar - AI Engineer & Full Stack Developer' },
    { name: 'Education', path: '/education', title: 'Educational Background - B.Tech CSE at GL Bajaj' },
    { name: 'Experience', path: '/experience', title: 'Professional Experience - Campus Ambassador & Student Leadership' },
    { name: 'Profiles', path: '/profiles', title: 'Professional Profiles - GitHub, LinkedIn, CodeChef & More' },
    { name: 'Projects', path: '/projects', title: 'AI, Machine Learning & Full Stack Development Projects' },
    { name: 'Services', path: '/services', title: 'AI Development, Full Stack & UI/UX Design Services' },
    { name: 'Blogs', path: '/blogs', title: 'Tech Blogs & Insights - AI, Machine Learning, Web Development' },
    { name: 'Certificates', path: '/certificates', title: '100+ Professional Certifications & Achievements' },
    { name: 'Skills & Tools', path: '/skills', title: 'Technical Skills - AI, React, Python, Machine Learning' },
    { name: 'Milestones', path: '/milestones', title: 'Professional Journey Timeline & Project Resources' },
    { name: 'Contact', path: '/contact', title: 'Contact for Freelance Projects & Collaboration' },
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
          ? 'bg-light-card/95 dark:bg-dark-card/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center" aria-label="Main Navigation">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold flex items-center gap-2"
        >
          <Link to="/" className="flex items-center gap-2" title="Brajesh Kumar - AI Engineer & Full Stack Developer Portfolio">
            <ThemeAwareImage
              darkSrc="/personal-dark.jpg"
              lightSrc="/personal-light.jpg"
              alt="Brajesh Kumar - AI Engineer & Full Stack Developer"
              className="h-8 w-8 rounded-full"
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
          className="hidden lg:flex space-x-1 xl:space-x-2 flex-wrap justify-center"
          role="menubar"
        >
          {navLinks.map((link) => (
            <li key={link.name} role="none">
              <Link
                to={link.path}
                title={link.title}
                className={`nav-link text-xs xl:text-sm px-2 xl:px-3 py-2 ${
                  location.pathname === link.path ? 'active' : ''
                }`}
                role="menuitem"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>

        <div className="flex items-center gap-4">
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
              <Sun className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Moon className="w-5 h-5" aria-hidden="true" />
            )}
          </motion.button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
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
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.name} role="none">
                <Link
                  to={link.path}
                  title={link.title}
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