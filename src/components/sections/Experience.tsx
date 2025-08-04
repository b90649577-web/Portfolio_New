// Added Co-Founder, Tech Dev Club (non-SEO update) for Brajesh Kumar by Bolt AI, 2025-01-27.
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Briefcase } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { useTheme } from '../ThemeProvider';
import 'react-vertical-timeline-component/style.min.css';

const experienceList = [
  {
    title: 'Co-Founder, Tech Dev Club',
    company: 'Tech Dev Club',
    location: 'Global (Remote)',
    date: 'June 2024 - Present',
    logo: '/techdevclub.png',
    description: [
      'Launched and co-lead Tech Dev Club, connecting innovators and developers worldwide through events, mentorship, and projects',
      'Building a global tech community for collaboration and innovation',
      'Organizing workshops, hackathons, and networking events for developers',
      'Mentoring aspiring developers and fostering open-source contributions'
    ],
    link: 'https://techdevclub.com/'
  },
  {
    title: 'Open Source Mentor - GSSoC 2025',
    company: 'GirlScript Summer of Code',
    location: 'Remote, India',
    date: 'May 2025 – Present',
    logo: '/gssoc2.png',
    description: [
      'Mentoring contributors in GSSoC 2025 by offering guidance on open source best practices and development workflows',
      'Assisting with technical challenges, reviewing pull requests, and providing constructive feedback',
      'Helping newcomers navigate project repositories, understand contribution guidelines, and get started effectively',
      'Hosting sessions on Git, GitHub, coding standards, and effective collaboration techniques',
      'Fostering a welcoming and inclusive environment that encourages learning, growth, and community engagement'
    ],
  },
  {
    title: 'Open Source Contributor - GSSoC 2025',
    company: 'GirlScript Summer of Code',
    location: 'Remote, India',
    date: 'July 2025 – Present',
    logo: '/gssoc2.png',
    description: [
      'Selected as an open source contributor for GSSoC 2025 among nationwide applicants',
      'Actively contributing to community-driven open source projects under expert mentorship',
      'Working across tech stacks to add new features, fix issues, and improve documentation',
      'Collaborating with maintainers and fellow contributors using Git, GitHub, and issue tracking',
      'Engaging in weekly syncs, PR reviews, and discussions to improve code quality and project impact'
    ],
  },
  {
    title: 'Open Source Contributor Intern',
    company: 'OSCI (Open Source Community India)',
    location: 'Remote, India',
    date: 'May 2025 - Jul 2025',
    logo: '/osci.png',
    description: [
      'Selected as an open source contributor under OSCI program',
      'Contributed to community-driven open source projects and repositories',
      'Collaborated with mentors and fellow contributors across various tech stacks',
      'Improved code quality, fixed issues, and added new features based on real-world use cases'
    ],
  },
  {
    title: 'SSOC Contributor Season 4',
    company: 'Social Summer Of Code',
    location: 'India (Remote)',
    date: 'Jun 2025 - Present',
    logo: '/ssoc.png',
    description: [
      'Selected as a contributor for Script Summer of Code Season-4',
      'Contributing to open source projects and collaborative development initiatives',
      'Participating in community-driven software development and learning programs'
    ],
  },
  {
    title: 'Campus Ambassador',
    company: 'International Model United Nations Association (IMUNA)',
    location: 'India',
    date: 'Sep 2024 - Present',
    logo: '/imuna.png',
    description: [
      'Computer Information Systems and Statistical Data Analysis',
      'Full-time role representing IMUNA',
      'Facilitating Model United Nations events and promoting international diplomacy education'
    ],
  },
  {
    title: 'Campus Ambassador',
    company: 'Indian Institute of Technology, Madras',
    location: 'India (Remote)',
    date: 'Oct 2024 - Jan 2025',
    logo: '/iitm.png',
    description: [
      'Information Technology Infrastructure',
      'Statistical Data Analysis',
      'Remote full-time position promoting IIT Madras programs and initiatives'
    ],
  },
  {
    title: 'Campus Ambassador',
    company: 'Indian Institute of Technology, Roorkee',
    location: 'India (Remote)',
    date: 'Mar 2025 - Apr 2025',
    logo: '/iitr.png',
    description: [
      'Represented Cognizance 2025',
      'Managed student engagement and event promotion',
      'Coordinated technical fest activities and student participation'
    ],
  },
  {
    title: 'Campus Ambassador',
    company: 'Indian Institute of Technology, Delhi',
    location: 'Delhi, India (Remote)',
    date: 'Jan 2025 - Feb 2025',
    logo: '/iitd.png',
    description: [
      'Kaizen 2025 program representative',
      'Coordinated between institution and student body',
      'Promoted technical and cultural fest activities'
    ],
  },
  {
    title: 'Campus Ambassador',
    company: 'Wayspire',
    location: 'India (Remote)',
    date: 'Dec 2024 - Jan 2025',
    logo: '/wayspire.png',
    description: [
      'Represented Wayspire educational initiatives',
      'Promoted skill development and career guidance programs',
      'Facilitated student engagement and community building activities'
    ],
  },
  {
    title: 'GSSOC 2024 Contributor',
    company: 'GirlScript Summer of Code',
    location: 'Remote',
    date: 'Oct 2024 - Nov 2024',
    logo: '/gssoc.png',
    description: [
      'Contributed to open source projects during GirlScript Summer of Code 2024',
      'Collaborated with developers worldwide on meaningful software projects',
      'Enhanced coding skills through mentorship and peer collaboration'
    ],
  },
  {
    title: 'Campus Ambassador',
    company: 'Lets Upgrad',
    location: 'India (Remote)',
    date: 'Jul 2024 - Aug 2024',
    logo: '/letsupgrad.png',
    description: [
      'Promoted upskilling and professional development programs',
      'Facilitated student engagement with career advancement opportunities',
      'Organized workshops and information sessions for skill enhancement'
    ],
  },
  {
    title: 'Student',
    company: 'GL Bajaj Group of Institutions',
    location: 'Mathura, Uttar Pradesh',
    date: 'Sep 2023 - Present',
    logo: '/glbajaj.png',
    description: [
      'B.Tech in Computer Science and Engineering',
      'Focus on Artificial Intelligence (AI) and Project Management',
      'Active participation in technical events and projects'
    ],
  }
];

const Experience = () => {
  const { theme } = useTheme();

  return (
    <div className="container-section">
      <SectionHeading 
        title="Experience" 
        subtitle="My professional journey and work history"
      />
      
      <VerticalTimeline lineColor={theme === 'dark' ? '#2563eb' : '#3b82f6'}>
        {experienceList.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            icon={
              item.logo ? (
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img 
                    src={item.logo} 
                    alt={`${item.company} logo`}
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
              ) : (
                <Briefcase />
              )
            }
            iconClassName={theme === 'dark' ? 'bg-dark-accent-secondary' : 'bg-light-accent-secondary'}
            contentStyle={{ 
              background: theme === 'dark' ? 'rgba(17, 17, 27, 0.8)' : 'rgba(255, 255, 255, 0.8)', 
              color: theme === 'dark' ? '#fff' : '#1f2937',
              boxShadow: theme === 'dark'
                ? '0 4px 16px rgba(20, 184, 166, 0.3)'
                : '0 4px 16px rgba(20, 184, 166, 0.05)',
              border: theme === 'dark'
                ? '1px solid rgba(20, 184, 166, 0.4)'
                : '1px solid rgba(20, 184, 166, 0.3)',
            }}
            contentArrowStyle={{ 
              borderRight: theme === 'dark'
                ? '7px solid rgba(20, 184, 166, 0.4)'
                : '7px solid rgba(20, 184, 166, 0.3)'
            }}
            visible={true}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.logo && (
                  <img 
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="w-12 h-12 object-contain"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <h4 className="text-lg text-secondary-600 dark:text-secondary-400">
                    {item.company}
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {item.location}
              </p>
              
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              {item.link && (
                <div className="mt-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
                  >
                    Visit Tech Dev Club →
                  </a>
                </div>
              )}
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;