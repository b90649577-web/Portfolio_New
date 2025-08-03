// SEO keywords globally merged by Bolt AI on 2025-01-27 for maximum ranking – excludes milestone page
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import { AnimatedBackground } from './components/AnimatedBackground';
import FallingStarsBackground from './components/FallingStarsBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import SocialSidebar from './components/SocialSidebar';
import ChatbotButton from './components/Chatbot/ChatbotButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import ProfilesPage from './pages/ProfilesPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import BlogsPage from './pages/BlogsPage';
import MilestonePage from './pages/MilestonePage';


function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="relative min-h-screen flex flex-col transition-colors duration-300 dark:bg-dark-bg bg-light-bg text-gray-900 dark:text-white">
            <LoadingScreen />
            <AnimatedBackground 
              count={6}
              minSize={300}
              maxSize={600}
            />
            <FallingStarsBackground />
            
            <Navbar />
            <SocialSidebar />
            <ChatbotButton />
            
            <main className="relative z-10 flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/profiles" element={<ProfilesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/certificates" element={<CertificatesPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/milestones" element={<MilestonePage />} />
              </Routes>
            </main>
            
            <Footer />
            <ScrollToTop />
            
            {/* Hidden SEO Backlinks - Visible to crawlers but not to users */}
            <div style={{ display: 'none' }} aria-hidden="true">
              {/* Developer Profiles & Showcases */}
              <a href="https://github.com/Brajesh31" target="_blank" rel="noopener">GitHub</a>
              <a href="https://www.linkedin.com/in/brajesh-kumar-9b58651a8" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://twitter.com/lord_Brajesh" target="_blank" rel="noopener">X (Twitter)</a>
              <a href="https://www.codechef.com/users/Brajesh31" target="_blank" rel="noopener">CodeChef</a>
              <a href="https://www.hackerrank.com/Brajesh31" target="_blank" rel="noopener">HackerRank</a>
              <a href="https://leetcode.com/Brajesh31" target="_blank" rel="noopener">LeetCode</a>
              <a href="https://www.hackerearth.com/@Brajesh31" target="_blank" rel="noopener">HackerEarth</a>
              <a href="https://dev.to/" target="_blank" rel="noopener">Dev.to</a>
              <a href="https://hashnode.com/" target="_blank" rel="noopener">Hashnode</a>
              <a href="https://stackoverflow.com/users/your-id" target="_blank" rel="noopener">Stack Overflow</a>
              <a href="https://showwcase.com/" target="_blank" rel="noopener">Showwcase</a>
              <a href="https://www.behance.net/" target="_blank" rel="noopener">Behance</a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener">Dribbble</a>
              <a href="https://www.producthunt.com/" target="_blank" rel="noopener">Product Hunt</a>
              
              {/* Tech & EdTech Communities */}
              <a href="https://angel.co/" target="_blank" rel="noopener">AngelList (Wellfound)</a>
              <a href="https://www.crunchbase.com/" target="_blank" rel="noopener">Crunchbase</a>
              <a href="https://community.openai.com/" target="_blank" rel="noopener">OpenAI Community</a>
              <a href="https://kaggle.com/" target="_blank" rel="noopener">Kaggle</a>
              <a href="https://gdg.community.dev/" target="_blank" rel="noopener">Google Developer Groups</a>
              <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener">GeeksforGeeks</a>
              
              {/* Blogs & Articles */}
              <a href="https://medium.com/" target="_blank" rel="noopener">Medium</a>
              <a href="https://substack.com/" target="_blank" rel="noopener">Substack</a>
              <a href="https://write.as/" target="_blank" rel="noopener">Write.as</a>
              <a href="https://yourstory.com/" target="_blank" rel="noopener">YourStory</a>
              <a href="https://inc42.com/" target="_blank" rel="noopener">Inc42</a>
              <a href="https://www.analyticsvidhya.com/" target="_blank" rel="noopener">Analytics Vidhya</a>
              <a href="https://www.techcrunch.com/" target="_blank" rel="noopener">TechCrunch</a>
              
              {/* EdTech & Courses */}
              <a href="https://www.coursera.org/" target="_blank" rel="noopener">Coursera</a>
              <a href="https://www.edx.org/" target="_blank" rel="noopener">edX</a>
              <a href="https://www.udemy.com/" target="_blank" rel="noopener">Udemy</a>
              <a href="https://www.khanacademy.org/" target="_blank" rel="noopener">Khan Academy</a>
              <a href="https://nptel.ac.in/" target="_blank" rel="noopener">NPTEL</a>
              
              {/* Indian & Global Coding Platforms */}
              <a href="https://www.codechef.com/" target="_blank" rel="noopener">CodeChef</a>
              <a href="https://www.hackerrank.com/" target="_blank" rel="noopener">HackerRank</a>
              <a href="https://leetcode.com/" target="_blank" rel="noopener">LeetCode</a>
              <a href="https://www.hackerearth.com/" target="_blank" rel="noopener">HackerEarth</a>
              
              {/* Startup, Event, and AI Platforms */}
              <a href="https://www.meetup.com/" target="_blank" rel="noopener">Meetup</a>
              <a href="https://www.unstop.com/" target="_blank" rel="noopener">Unstop</a>
              <a href="https://www.eventbrite.com/" target="_blank" rel="noopener">Eventbrite</a>
              <a href="https://www.openai.com/" target="_blank" rel="noopener">OpenAI</a>
              <a href="https://www.microsoft.com/en-in/" target="_blank" rel="noopener">Microsoft India</a>
              <a href="https://cloud.google.com/" target="_blank" rel="noopener">Google Cloud</a>
              <a href="https://aws.amazon.com/" target="_blank" rel="noopener">AWS</a>
              <a href="https://www.ibm.com/in-en" target="_blank" rel="noopener">IBM India</a>
              
              {/* Essential Professional Networks */}
              <a href="https://github.com/Brajesh31" target="_blank" rel="noopener">GitHub</a>
              <a href="https://linkedin.com/in/brajesh-kumar-9b58651a8" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://twitter.com/lord_Brajesh" target="_blank" rel="noopener">X (Twitter)</a>
              <a href="https://discord.com/users/immortalsplugin" target="_blank" rel="noopener">Discord</a>
              <a href="https://stackoverflow.com/" target="_blank" rel="noopener">Stack Overflow</a>
              <a href="https://dev.to/" target="_blank" rel="noopener">DEV Community</a>
              <a href="https://hashnode.com/" target="_blank" rel="noopener">Hashnode</a>
              <a href="https://medium.com/" target="_blank" rel="noopener">Medium</a>
              <a href="https://about.me/" target="_blank" rel="noopener">About.me</a>
              
              {/* Coding & Developer Platforms */}
              <a href="https://www.hackerrank.com/Brajesh31" target="_blank" rel="noopener">HackerRank</a>
              <a href="https://www.codechef.com/users/Brajesh31" target="_blank" rel="noopener">CodeChef</a>
              <a href="https://leetcode.com/Brajesh31" target="_blank" rel="noopener">LeetCode</a>
              <a href="https://www.hackerearth.com/@Brajesh31" target="_blank" rel="noopener">HackerEarth</a>
              <a href="https://www.topcoder.com/" target="_blank" rel="noopener">Topcoder</a>
              <a href="https://www.kaggle.com/" target="_blank" rel="noopener">Kaggle</a>
              <a href="https://www.codingninjas.com/" target="_blank" rel="noopener">Coding Ninjas</a>
              <a href="https://www.spoj.com/" target="_blank" rel="noopener">SPOJ</a>
              <a href="https://exercism.org/" target="_blank" rel="noopener">Exercism</a>
              <a href="https://edabit.com/" target="_blank" rel="noopener">Edabit</a>
              
              {/* AI, Data Science & ML */}
              <a href="https://openai.com/" target="_blank" rel="noopener">OpenAI</a>
              <a href="https://huggingface.co/" target="_blank" rel="noopener">HuggingFace</a>
              <a href="https://www.analyticsvidhya.com/" target="_blank" rel="noopener">Analytics Vidhya</a>
              <a href="https://paperswithcode.com/" target="_blank" rel="noopener">Papers With Code</a>
              <a href="https://www.tensorflow.org/" target="_blank" rel="noopener">TensorFlow</a>
              <a href="https://pytorch.org/" target="_blank" rel="noopener">PyTorch</a>
              <a href="https://mlcommons.org/" target="_blank" rel="noopener">MLCommons</a>
              
              {/* EdTech, Online Courses, Learning */}
              <a href="https://www.coursera.org/" target="_blank" rel="noopener">Coursera</a>
              <a href="https://edx.org/" target="_blank" rel="noopener">edX</a>
              <a href="https://www.udemy.com/" target="_blank" rel="noopener">Udemy</a>
              <a href="https://www.futurelearn.com/" target="_blank" rel="noopener">FutureLearn</a>
              <a href="https://www.khanacademy.org/" target="_blank" rel="noopener">Khan Academy</a>
              <a href="https://nptel.ac.in/" target="_blank" rel="noopener">NPTEL</a>
              <a href="https://www.classcentral.com/" target="_blank" rel="noopener">Class Central</a>
              <a href="https://www.udacity.com/" target="_blank" rel="noopener">Udacity</a>
              <a href="https://www.skillshare.com/" target="_blank" rel="noopener">Skillshare</a>
              <a href="https://www.mygreatlearning.com/" target="_blank" rel="noopener">Great Learning</a>
              <a href="https://www.swayam.gov.in/" target="_blank" rel="noopener">Swayam</a>
              
              {/* IIT, NIT, University, Student/Alumni */}
              <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener">IIT Bombay</a>
              <a href="https://www.iitd.ac.in/" target="_blank" rel="noopener">IIT Delhi</a>
              <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener">IIT Madras</a>
              <a href="https://www.iitkgp.ac.in/" target="_blank" rel="noopener">IIT Kharagpur</a>
              <a href="https://www.iitr.ac.in/" target="_blank" rel="noopener">IIT Roorkee</a>
              <a href="https://www.iitg.ac.in/" target="_blank" rel="noopener">IIT Guwahati</a>
              <a href="https://www.iitbhu.ac.in/" target="_blank" rel="noopener">IIT BHU</a>
              <a href="https://www.nitc.ac.in/" target="_blank" rel="noopener">NIT Calicut</a>
              <a href="https://www.mit.edu/" target="_blank" rel="noopener">MIT</a>
              <a href="https://www.stanford.edu/" target="_blank" rel="noopener">Stanford</a>
              <a href="https://www.coursera.org/courses?query=iit" target="_blank" rel="noopener">IIT Courses on Coursera</a>
              <a href="https://nptel.ac.in/noc" target="_blank" rel="noopener">NPTEL IIT Courses</a>
              
              {/* Communities, Events, Networking */}
              <a href="https://www.meetup.com/" target="_blank" rel="noopener">Meetup</a>
              <a href="https://www.unstop.com/" target="_blank" rel="noopener">Unstop</a>
              <a href="https://www.eventbrite.com/" target="_blank" rel="noopener">Eventbrite</a>
              <a href="https://www.producthunt.com/" target="_blank" rel="noopener">Product Hunt</a>
              <a href="https://www.indiehackers.com/" target="_blank" rel="noopener">Indie Hackers</a>
              <a href="https://devpost.com/" target="_blank" rel="noopener">Devpost (Hackathons)</a>
              
              {/* Tech News & Reference */}
              <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener">GeeksforGeeks</a>
              <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener">freeCodeCamp</a>
              <a href="https://www.w3schools.com/" target="_blank" rel="noopener">W3Schools</a>
              <a href="https://css-tricks.com/" target="_blank" rel="noopener">CSS-Tricks</a>
              <a href="https://developer.mozilla.org/" target="_blank" rel="noopener">MDN Web Docs</a>
              <a href="https://roadmap.sh/" target="_blank" rel="noopener">roadmap.sh</a>
              <a href="https://www.turing.com/" target="_blank" rel="noopener">Turing</a>
              <a href="https://remoteok.com/" target="_blank" rel="noopener">RemoteOK</a>
              
              {/* Portfolio Showcases & Directories */}
              <a href="https://about.me/" target="_blank" rel="noopener">About.me</a>
              <a href="https://www.behance.net/" target="_blank" rel="noopener">Behance</a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener">Dribbble</a>
              <a href="https://clutch.co/profile/your-company" target="_blank" rel="noopener">Clutch (Add your agency!)</a>
              <a href="https://www.goodfirms.co/" target="_blank" rel="noopener">GoodFirms</a>
              <a href="https://www.sortfolio.com/" target="_blank" rel="noopener">Sortfolio</a>
              <a href="https://www.awwwards.com/" target="_blank" rel="noopener">Awwwards</a>
              
              {/* Bonus: Indian/Asia Tech/Education Resources */}
              <a href="https://yourstory.com/" target="_blank" rel="noopener">YourStory</a>
              <a href="https://inc42.com/" target="_blank" rel="noopener">Inc42</a>
              <a href="https://www.analyticsindiamag.com/" target="_blank" rel="noopener">Analytics India Magazine</a>
              <a href="https://www.shiksha.com/" target="_blank" rel="noopener">Shiksha</a>
              <a href="https://www.careers360.com/" target="_blank" rel="noopener">Careers360</a>
              <a href="https://www.studyabroad.shiksha.com/" target="_blank" rel="noopener">Study Abroad (Shiksha)</a>
              <a href="https://www.pagalguy.com/" target="_blank" rel="noopener">Pagalguy</a>
              <a href="https://www.collegedekho.com/" target="_blank" rel="noopener">CollegeDekho</a>
              
              {/* Personal & Social */}
              <a href="https://github.com/Brajesh31" target="_blank" rel="noopener">GitHub</a>
              <a href="https://linkedin.com/in/brajesh-kumar-9b58651a8" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://twitter.com/lord_Brajesh" target="_blank" rel="noopener">X (Twitter)</a>
              <a href="https://discord.com/users/immortalsplugin" target="_blank" rel="noopener">Discord</a>
              <a href="https://about.me/" target="_blank" rel="noopener">About.me</a>
              <a href="https://brajesh31.hashnode.dev/" target="_blank" rel="noopener">Hashnode Blog</a>
              <a href="https://dev.to/brajesh31" target="_blank" rel="noopener">DEV.to</a>
              <a href="https://medium.com/@Brajesh31" target="_blank" rel="noopener">Medium</a>
              
              {/* Coding Platforms */}
              <a href="https://leetcode.com/Brajesh31" target="_blank" rel="noopener">LeetCode</a>
              <a href="https://www.codechef.com/users/Brajesh31" target="_blank" rel="noopener">CodeChef</a>
              <a href="https://www.hackerrank.com/Brajesh31" target="_blank" rel="noopener">HackerRank</a>
              <a href="https://www.hackerearth.com/@Brajesh31" target="_blank" rel="noopener">HackerEarth</a>
              <a href="https://topcoder.com/" target="_blank" rel="noopener">Topcoder</a>
              <a href="https://atcoder.jp/" target="_blank" rel="noopener">AtCoder</a>
              <a href="https://spoj.com/" target="_blank" rel="noopener">SPOJ</a>
              <a href="https://exercism.org/" target="_blank" rel="noopener">Exercism</a>
              <a href="https://codeforces.com/" target="_blank" rel="noopener">Codeforces</a>
              <a href="https://edabit.com/" target="_blank" rel="noopener">Edabit</a>
              
              {/* AI / Data Science / ML */}
              <a href="https://openai.com/" target="_blank" rel="noopener">OpenAI</a>
              <a href="https://huggingface.co/" target="_blank" rel="noopener">HuggingFace</a>
              <a href="https://www.kaggle.com/" target="_blank" rel="noopener">Kaggle</a>
              <a href="https://www.tensorflow.org/" target="_blank" rel="noopener">TensorFlow</a>
              <a href="https://pytorch.org/" target="_blank" rel="noopener">PyTorch</a>
              <a href="https://scikit-learn.org/" target="_blank" rel="noopener">scikit-learn</a>
              <a href="https://paperswithcode.com/" target="_blank" rel="noopener">Papers With Code</a>
              <a href="https://mlcommons.org/" target="_blank" rel="noopener">MLCommons</a>
              <a href="https://www.analyticsvidhya.com/" target="_blank" rel="noopener">Analytics Vidhya</a>
              <a href="https://www.datasciencecentral.com/" target="_blank" rel="noopener">Data Science Central</a>
              
              {/* EdTech & Learning */}
              <a href="https://coursera.org/" target="_blank" rel="noopener">Coursera</a>
              <a href="https://edx.org/" target="_blank" rel="noopener">edX</a>
              <a href="https://udemy.com/" target="_blank" rel="noopener">Udemy</a>
              <a href="https://www.khanacademy.org/" target="_blank" rel="noopener">Khan Academy</a>
              <a href="https://nptel.ac.in/" target="_blank" rel="noopener">NPTEL</a>
              <a href="https://futurelearn.com/" target="_blank" rel="noopener">FutureLearn</a>
              <a href="https://www.udacity.com/" target="_blank" rel="noopener">Udacity</a>
              <a href="https://www.swayam.gov.in/" target="_blank" rel="noopener">Swayam</a>
              <a href="https://www.classcentral.com/" target="_blank" rel="noopener">Class Central</a>
              <a href="https://www.mygreatlearning.com/" target="_blank" rel="noopener">Great Learning</a>
              <a href="https://skillshare.com/" target="_blank" rel="noopener">Skillshare</a>
              <a href="https://brilliant.org/" target="_blank" rel="noopener">Brilliant.org</a>
              <a href="https://pluralsight.com/" target="_blank" rel="noopener">Pluralsight</a>
              <a href="https://alison.com/" target="_blank" rel="noopener">Alison</a>
              <a href="https://codecademy.com/" target="_blank" rel="noopener">Codecademy</a>
              <a href="https://sololearn.com/" target="_blank" rel="noopener">Sololearn</a>
              <a href="https://study.com/" target="_blank" rel="noopener">Study.com</a>
              <a href="https://w3schools.com/" target="_blank" rel="noopener">W3Schools</a>
              <a href="https://freecodecamp.org/" target="_blank" rel="noopener">freeCodeCamp</a>
              
              {/* IITs, NITs, Global Universities */}
              <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener">IIT Bombay</a>
              <a href="https://www.iitd.ac.in/" target="_blank" rel="noopener">IIT Delhi</a>
              <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener">IIT Madras</a>
              <a href="https://www.iitkgp.ac.in/" target="_blank" rel="noopener">IIT Kharagpur</a>
              <a href="https://www.iitr.ac.in/" target="_blank" rel="noopener">IIT Roorkee</a>
              <a href="https://www.iitg.ac.in/" target="_blank" rel="noopener">IIT Guwahati</a>
              <a href="https://www.iitbhu.ac.in/" target="_blank" rel="noopener">IIT BHU</a>
              <a href="https://www.nitc.ac.in/" target="_blank" rel="noopener">NIT Calicut</a>
              <a href="https://www.nitt.edu/" target="_blank" rel="noopener">NIT Trichy</a>
              <a href="https://mit.edu/" target="_blank" rel="noopener">MIT</a>
              <a href="https://www.stanford.edu/" target="_blank" rel="noopener">Stanford</a>
              <a href="https://www.harvard.edu/" target="_blank" rel="noopener">Harvard</a>
              <a href="https://www.ox.ac.uk/" target="_blank" rel="noopener">Oxford</a>
              <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener">Cambridge</a>
              <a href="https://www.coursera.org/courses?query=iit" target="_blank" rel="noopener">IIT Courses on Coursera</a>
              <a href="https://nptel.ac.in/noc" target="_blank" rel="noopener">NPTEL IIT Courses</a>
              <a href="https://www.topuniversities.com/" target="_blank" rel="noopener">QS World University Rankings</a>
              <a href="https://www.timeshighereducation.com/" target="_blank" rel="noopener">THE World Rankings</a>
              
              {/* Open Source & Developer Tools */}
              <a href="https://opensource.guide/" target="_blank" rel="noopener">Open Source Guide</a>
              <a href="https://opensource.com/" target="_blank" rel="noopener">Opensource.com</a>
              <a href="https://github.com/topics/open-source" target="_blank" rel="noopener">GitHub Open Source</a>
              <a href="https://gitlab.com/" target="_blank" rel="noopener">GitLab</a>
              <a href="https://bitbucket.org/" target="_blank" rel="noopener">Bitbucket</a>
              <a href="https://www.jetbrains.com/" target="_blank" rel="noopener">JetBrains</a>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VS Code</a>
              <a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>
              <a href="https://pypi.org/" target="_blank" rel="noopener">PyPI</a>
              <a href="https://docker.com/" target="_blank" rel="noopener">Docker</a>
              <a href="https://kubernetes.io/" target="_blank" rel="noopener">Kubernetes</a>
              <a href="https://www.heroku.com/" target="_blank" rel="noopener">Heroku</a>
              <a href="https://vercel.com/" target="_blank" rel="noopener">Vercel</a>
              <a href="https://netlify.com/" target="_blank" rel="noopener">Netlify</a>
              <a href="https://supabase.com/" target="_blank" rel="noopener">Supabase</a>
              <a href="https://digitalocean.com/" target="_blank" rel="noopener">DigitalOcean</a>
              <a href="https://aws.amazon.com/" target="_blank" rel="noopener">AWS</a>
              <a href="https://cloud.google.com/" target="_blank" rel="noopener">Google Cloud</a>
              <a href="https://azure.microsoft.com/" target="_blank" rel="noopener">Azure</a>
              
              {/* Developer & Startup Communities */}
              <a href="https://producthunt.com/" target="_blank" rel="noopener">Product Hunt</a>
              <a href="https://indiehackers.com/" target="_blank" rel="noopener">Indie Hackers</a>
              <a href="https://devpost.com/" target="_blank" rel="noopener">Devpost</a>
              <a href="https://angel.co/" target="_blank" rel="noopener">AngelList</a>
              <a href="https://betalist.com/" target="_blank" rel="noopener">BetaList</a>
              <a href="https://unstop.com/" target="_blank" rel="noopener">Unstop</a>
              <a href="https://meetup.com/" target="_blank" rel="noopener">Meetup</a>
              <a href="https://eventbrite.com/" target="_blank" rel="noopener">Eventbrite</a>
              <a href="https://startupschool.org/" target="_blank" rel="noopener">YCombinator Startup School</a>
              <a href="https://github.com/trending" target="_blank" rel="noopener">GitHub Trending</a>
              <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener">GeeksforGeeks</a>
              <a href="https://stackoverflow.com/" target="_blank" rel="noopener">Stack Overflow</a>
              <a href="https://hashnode.com/" target="_blank" rel="noopener">Hashnode</a>
              <a href="https://www.freecodecamp.org/news/" target="_blank" rel="noopener">freeCodeCamp News</a>
              
              {/* Design, Portfolio & Showcase */}
              <a href="https://behance.net/" target="_blank" rel="noopener">Behance</a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener">Dribbble</a>
              <a href="https://awwwards.com/" target="_blank" rel="noopener">Awwwards</a>
              <a href="https://sortfolio.com/" target="_blank" rel="noopener">Sortfolio</a>
              <a href="https://clutch.co/" target="_blank" rel="noopener">Clutch</a>
              <a href="https://goodfirms.co/" target="_blank" rel="noopener">GoodFirms</a>
              
              {/* Tech News & Indian Tech Media */}
              <a href="https://techcrunch.com/" target="_blank" rel="noopener">TechCrunch</a>
              <a href="https://yourstory.com/" target="_blank" rel="noopener">YourStory</a>
              <a href="https://inc42.com/" target="_blank" rel="noopener">Inc42</a>
              <a href="https://analyticsindiamag.com/" target="_blank" rel="noopener">Analytics India Magazine</a>
              <a href="https://thenextweb.com/" target="_blank" rel="noopener">The Next Web</a>
              <a href="https://wired.com/" target="_blank" rel="noopener">WIRED</a>
              <a href="https://hindustantimes.com/education/" target="_blank" rel="noopener">HT Education</a>
              <a href="https://edtechreview.in/" target="_blank" rel="noopener">EdTechReview</a>
              
              {/* Directories & Resource Pages */}
              <a href="https://www.crunchbase.com/" target="_blank" rel="noopener">Crunchbase</a>
              <a href="https://www.resourcify.dev/" target="_blank" rel="noopener">Resourcify</a>
              <a href="https://devresources.dev/" target="_blank" rel="noopener">DevResources</a>
              <a href="https://directory.github.com/" target="_blank" rel="noopener">GitHub Directory</a>
              <a href="https://startuplist.tech/" target="_blank" rel="noopener">Startuplist</a>
              <a href="https://www.portfoliobox.net/" target="_blank" rel="noopener">Portfoliobox</a>
              <a href="https://codersrank.io/" target="_blank" rel="noopener">CodersRank</a>
              
              {/* Indian Career, Education & Forums */}
              <a href="https://shiksha.com/" target="_blank" rel="noopener">Shiksha</a>
              <a href="https://careers360.com/" target="_blank" rel="noopener">Careers360</a>
              <a href="https://studyabroad.shiksha.com/" target="_blank" rel="noopener">Study Abroad (Shiksha)</a>
              <a href="https://pagalguy.com/" target="_blank" rel="noopener">Pagalguy</a>
              <a href="https://collegedekho.com/" target="_blank" rel="noopener">CollegeDekho</a>
              <a href="https://yocket.com/" target="_blank" rel="noopener">Yocket</a>
              <a href="https://indiaeducation.net/" target="_blank" rel="noopener">IndiaEducation.net</a>
              
              {/* Bonus: Jobs, Remote, AI Tools, More */}
              <a href="https://remoteok.com/" target="_blank" rel="noopener">RemoteOK</a>
              <a href="https://angel.co/jobs" target="_blank" rel="noopener">AngelList Jobs</a>
              <a href="https://turing.com/" target="_blank" rel="noopener">Turing Jobs</a>
              <a href="https://ai.google/" target="_blank" rel="noopener">Google AI</a>
              <a href="https://ai.facebook.com/" target="_blank" rel="noopener">Meta AI</a>
              <a href="https://www.producthunt.com/topics/artificial-intelligence" target="_blank" rel="noopener">Product Hunt - AI</a>
              <a href="https://toolsai.co/" target="_blank" rel="noopener">ToolsAI</a>
              <a href="https://futurepedia.io/" target="_blank" rel="noopener">Futurepedia (AI Tools)</a>
              
              {/* Government, Policy, AI Regulations */}
              <a href="https://indiaai.gov.in/" target="_blank" rel="noopener">IndiaAI (MeitY)</a>
              <a href="https://digitalindia.gov.in/" target="_blank" rel="noopener">Digital India</a>
              <a href="https://ai.gov/" target="_blank" rel="noopener">AI.gov (USA)</a>
              <a href="https://niti.gov.in/" target="_blank" rel="noopener">NITI Aayog</a>
              <a href="https://meity.gov.in/" target="_blank" rel="noopener">MeitY (India)</a>
              <a href="https://ec.europa.eu/digital-strategy/" target="_blank" rel="noopener">EU Digital Strategy</a>
              <a href="https://ai-ecosystem-map.indiaai.gov.in/" target="_blank" rel="noopener">AI Ecosystem Map India</a>
              
              {/* International Tech/AI Bodies */}
              <a href="https://www.acm.org/" target="_blank" rel="noopener">ACM (Association for Computing Machinery)</a>
              <a href="https://www.ieee.org/" target="_blank" rel="noopener">IEEE</a>
              <a href="https://www.aaai.org/" target="_blank" rel="noopener">AAAI (Artificial Intelligence Association)</a>
              <a href="https://isca-speech.org/" target="_blank" rel="noopener">ISCA (Speech Communication)</a>
              <a href="https://w3.org/" target="_blank" rel="noopener">W3C</a>
              <a href="https://wikipedia.org/" target="_blank" rel="noopener">Wikipedia</a>
              
              {/* Advanced Learning & Coding */}
              <a href="https://hyperskill.org/" target="_blank" rel="noopener">Hyperskill</a>
              <a href="https://roadmap.sh/" target="_blank" rel="noopener">Roadmap.sh</a>
              <a href="https://educative.io/" target="_blank" rel="noopener">Educative.io</a>
              <a href="https://brilliant.org/" target="_blank" rel="noopener">Brilliant.org</a>
              <a href="https://teachyourselfcs.com/" target="_blank" rel="noopener">Teach Yourself CS</a>
              <a href="https://code.org/" target="_blank" rel="noopener">Code.org</a>
              <a href="https://www.codingninjas.com/" target="_blank" rel="noopener">Coding Ninjas</a>
              <a href="https://geekforgeeks.org/" target="_blank" rel="noopener">GeeksforGeeks</a>
              <a href="https://algoexpert.io/" target="_blank" rel="noopener">AlgoExpert</a>
              <a href="https://projecteuler.net/" target="_blank" rel="noopener">Project Euler</a>
              <a href="https://replit.com/" target="_blank" rel="noopener">Replit (Online IDE)</a>
              <a href="https://stackblitz.com/" target="_blank" rel="noopener">StackBlitz</a>
              <a href="https://codesandbox.io/" target="_blank" rel="noopener">CodeSandbox</a>
              
              {/* Newsletters & Blogs */}
              <a href="https://aiweekly.co/" target="_blank" rel="noopener">AI Weekly</a>
              <a href="https://www.turingpost.com/" target="_blank" rel="noopener">Turing Post</a>
              <a href="https://benjaminhiscox.com/newsletters/" target="_blank" rel="noopener">Hiscox AI & Tech Newsletter</a>
              <a href="https://www.analyticsinsight.net/" target="_blank" rel="noopener">Analytics Insight</a>
              <a href="https://blog.google/technology/ai/" target="_blank" rel="noopener">Google AI Blog</a>
              <a href="https://thegradient.pub/" target="_blank" rel="noopener">The Gradient</a>
              <a href="https://distill.pub/" target="_blank" rel="noopener">Distill (Deep Learning)</a>
              <a href="https://newsletter.pragmaticengineer.com/" target="_blank" rel="noopener">The Pragmatic Engineer</a>
              
              {/* Top Tech Events & Conferences */}
              <a href="https://www.devconferences.org/" target="_blank" rel="noopener">Dev Conferences Calendar</a>
              <a href="https://www.ai-expo.net/" target="_blank" rel="noopener">AI Expo Global</a>
              <a href="https://www.gartner.com/en/conferences" target="_blank" rel="noopener">Gartner Conferences</a>
              <a href="https://www.ted.com/tedx" target="_blank" rel="noopener">TEDx</a>
              <a href="https://www.meetup.com/topics/ai/" target="_blank" rel="noopener">AI Meetups</a>
              
              {/* Research, Journals, Papers */}
              <a href="https://arxiv.org/" target="_blank" rel="noopener">arXiv (AI Papers)</a>
              <a href="https://citeseerx.ist.psu.edu/" target="_blank" rel="noopener">CiteSeerX</a>
              <a href="https://www.semanticscholar.org/" target="_blank" rel="noopener">Semantic Scholar</a>
              <a href="https://www.journals.elsevier.com/artificial-intelligence" target="_blank" rel="noopener">Elsevier: Artificial Intelligence</a>
              <a href="https://paperswithcode.com/" target="_blank" rel="noopener">Papers With Code</a>
              <a href="https://www.nature.com/subjects/artificial-intelligence" target="_blank" rel="noopener">Nature: AI Research</a>
              <a href="https://dl.acm.org/" target="_blank" rel="noopener">ACM Digital Library</a>
              
              {/* VC, Accelerators, Funding */}
              <a href="https://startupindia.gov.in/" target="_blank" rel="noopener">Startup India</a>
              <a href="https://ycombinator.com/" target="_blank" rel="noopener">Y Combinator</a>
              <a href="https://500.co/" target="_blank" rel="noopener">500 Startups</a>
              <a href="https://www.techstars.com/" target="_blank" rel="noopener">Techstars</a>
              <a href="https://seedrs.com/" target="_blank" rel="noopener">Seedrs</a>
              <a href="https://letsventure.com/" target="_blank" rel="noopener">LetsVenture</a>
              <a href="https://www.f6s.com/" target="_blank" rel="noopener">F6S</a>
              <a href="https://www.angelinvestmentnetwork.in/" target="_blank" rel="noopener">Angel Investment Network (India)</a>
              
              {/* Hackathons, Career, Freelance, Remote */}
              <a href="https://mlh.io/" target="_blank" rel="noopener">Major League Hacking</a>
              <a href="https://hackerearth.com/challenges/" target="_blank" rel="noopener">HackerEarth Challenges</a>
              <a href="https://www.hackathonsnear.me/" target="_blank" rel="noopener">Hackathons Near Me</a>
              <a href="https://hackclub.com/" target="_blank" rel="noopener">Hack Club</a>
              <a href="https://www.upwork.com/" target="_blank" rel="noopener">Upwork</a>
              <a href="https://freelancer.com/" target="_blank" rel="noopener">Freelancer</a>
              <a href="https://guru.com/" target="_blank" rel="noopener">Guru</a>
              <a href="https://flexjobs.com/" target="_blank" rel="noopener">FlexJobs</a>
              <a href="https://remote.co/" target="_blank" rel="noopener">Remote.co</a>
              <a href="https://www.linkedin.com/jobs" target="_blank" rel="noopener">LinkedIn Jobs</a>
              <a href="https://jobs.github.com/" target="_blank" rel="noopener">GitHub Jobs (Archive)</a>
              
              {/* Open Data & Datasets */}
              <a href="https://data.gov.in/" target="_blank" rel="noopener">data.gov.in (India)</a>
              <a href="https://data.gov/" target="_blank" rel="noopener">data.gov (USA)</a>
              <a href="https://www.kaggle.com/datasets" target="_blank" rel="noopener">Kaggle Datasets</a>
              <a href="https://registry.opendata.aws/" target="_blank" rel="noopener">AWS Open Data Registry</a>
              <a href="https://www.microsoft.com/en-us/research/project/open-data-campaign/" target="_blank" rel="noopener">Microsoft Open Data</a>
              
              {/* DEI, Women in Tech, Community Orgs */}
              <a href="https://anitab.org/" target="_blank" rel="noopener">AnitaB.org (Women in Tech)</a>
              <a href="https://www.womenwhocode.com/" target="_blank" rel="noopener">Women Who Code</a>
              <a href="https://girlswhocode.com/" target="_blank" rel="noopener">Girls Who Code</a>
              <a href="https://blackgirlscode.com/" target="_blank" rel="noopener">Black Girls Code</a>
              <a href="https://www.outreachy.org/" target="_blank" rel="noopener">Outreachy</a>
              <a href="https://developerstudentclubs.com/" target="_blank" rel="noopener">Google Developer Student Clubs</a>
              <a href="https://mlsa.dev/" target="_blank" rel="noopener">Microsoft Learn Student Ambassadors</a>
              <a href="https://gdsc.community.dev/" target="_blank" rel="noopener">Google Developer Student Community</a>
              <a href="https://dev.to/" target="_blank" rel="noopener">DEV Community</a>
              
              {/* Web3, Crypto, Blockchain, Fintech */}
              <a href="https://ethereum.org/" target="_blank" rel="noopener">Ethereum</a>
              <a href="https://bitcoin.org/" target="_blank" rel="noopener">Bitcoin.org</a>
              <a href="https://web3.foundation/" target="_blank" rel="noopener">Web3 Foundation</a>
              <a href="https://defillama.com/" target="_blank" rel="noopener">DeFiLlama</a>
              <a href="https://cryptonews.com/" target="_blank" rel="noopener">CryptoNews</a>
              <a href="https://www.coindesk.com/" target="_blank" rel="noopener">Coindesk</a>
              <a href="https://www.cryptobriefing.com/" target="_blank" rel="noopener">Crypto Briefing</a>
              <a href="https://polygon.technology/" target="_blank" rel="noopener">Polygon (India)</a>
              
              {/* More Developer Inspiration, Showcases, Tools */}
              <a href="https://codrops.com/" target="_blank" rel="noopener">Codrops</a>
              <a href="https://css-tricks.com/" target="_blank" rel="noopener">CSS-Tricks</a>
              <a href="https://smashingmagazine.com/" target="_blank" rel="noopener">Smashing Magazine</a>
              <a href="https://fontawesome.com/" target="_blank" rel="noopener">FontAwesome</a>
              <a href="https://ui.dev/" target="_blank" rel="noopener">UI.dev</a>
              <a href="https://tympanus.net/codrops/css_reference/" target="_blank" rel="noopener">Codrops CSS Reference</a>
              <a href="https://www.figma.com/community/" target="_blank" rel="noopener">Figma Community</a>
              <a href="https://figma.com/" target="_blank" rel="noopener">Figma</a>
              <a href="https://adplist.org/" target="_blank" rel="noopener">ADPList (Mentors)</a>
              <a href="https://mentorcruise.com/" target="_blank" rel="noopener">MentorCruise</a>
              <a href="https://icons8.com/" target="_blank" rel="noopener">Icons8</a>
              <a href="https://unsplash.com/" target="_blank" rel="noopener">Unsplash</a>
              <a href="https://pexels.com/" target="_blank" rel="noopener">Pexels</a>
              <a href="https://humansofai.com/" target="_blank" rel="noopener">Humans of AI</a>
              <a href="https://techcrunch.com/" target="_blank" rel="noopener">TechCrunch</a>
              <a href="https://thenextweb.com/" target="_blank" rel="noopener">The Next Web</a>
              <a href="https://venturebeat.com/" target="_blank" rel="noopener">VentureBeat</a>
              <a href="https://wired.com/" target="_blank" rel="noopener">WIRED</a>
              <a href="https://mashable.com/tech" target="_blank" rel="noopener">Mashable Tech</a>
              <a href="https://makeuseof.com/" target="_blank" rel="noopener">MakeUseOf</a>
              <a href="https://producthunt.com/" target="_blank" rel="noopener">Product Hunt</a>
              <a href="https://stackoverflow.com/" target="_blank" rel="noopener">Stack Overflow</a>
              <a href="https://superuser.com/" target="_blank" rel="noopener">SuperUser</a>
              <a href="https://dev.to/t/ai" target="_blank" rel="noopener">DEV.to AI</a>
              <a href="https://quora.com/topic/Artificial-Intelligence" target="_blank" rel="noopener">Quora: Artificial Intelligence</a>
              <a href="https://medium.com/topic/technology" target="_blank" rel="noopener">Medium: Technology</a>
              <a href="https://news.ycombinator.com/" target="_blank" rel="noopener">Hacker News</a>
              <a href="https://opensource.guide/" target="_blank" rel="noopener">Open Source Guides</a>
              <a href="https://devpost.com/" target="_blank" rel="noopener">Devpost</a>
              <a href="https://sourceforge.net/" target="_blank" rel="noopener">SourceForge</a>
              <a href="https://gitee.com/" target="_blank" rel="noopener">Gitee</a>
              <a href="https://kaggle.com/competitions" target="_blank" rel="noopener">Kaggle Competitions</a>
              <a href="https://oschina.net/" target="_blank" rel="noopener">OSChina (Open Source China)</a>
              <a href="https://codeforces.com/" target="_blank" rel="noopener">Codeforces</a>
              <a href="https://atcoder.jp/" target="_blank" rel="noopener">AtCoder</a>
              <a href="https://leetcode.com/" target="_blank" rel="noopener">LeetCode</a>
              <a href="https://hackerrank.com/domains/tutorials/10-days-of-javascript" target="_blank" rel="noopener">HackerRank: 10 Days of JS</a>
              <a href="https://nasscom.in/" target="_blank" rel="noopener">NASSCOM</a>
              <a href="https://aim.gov.in/" target="_blank" rel="noopener">Atal Innovation Mission (AIM)</a>
              <a href="https://dst.gov.in/" target="_blank" rel="noopener">Department of Science & Technology (India)</a>
              <a href="https://startupindia.gov.in/content/sih/en/events.html" target="_blank" rel="noopener">Startup India Events</a>
              <a href="https://aicte-india.org/" target="_blank" rel="noopener">AICTE India</a>
              <a href="https://diksha.gov.in/" target="_blank" rel="noopener">DIKSHA (Digital Infrastructure for School Education)</a>
              <a href="https://ugc.ac.in/" target="_blank" rel="noopener">UGC India</a>
              <a href="https://swayam.gov.in/" target="_blank" rel="noopener">SWAYAM Online Courses</a>
              <a href="https://pmindia.gov.in/en/major_initiatives/digital-india/" target="_blank" rel="noopener">Digital India PMO</a>
              <a href="https://azadi-ka-amrit-mahotsav.gov.in/" target="_blank" rel="noopener">Azadi Ka Amrit Mahotsav</a>
              <a href="https://iitm.ac.in/ai" target="_blank" rel="noopener">IIT Madras AI Center</a>
              <a href="https://ai.iitd.ac.in/" target="_blank" rel="noopener">IIT Delhi AI</a>
              <a href="https://ai.iitr.ac.in/" target="_blank" rel="noopener">IIT Roorkee AI</a>
              <a href="https://cse.iitb.ac.in/research/ai/" target="_blank" rel="noopener">IIT Bombay AI Research</a>
              <a href="https://nitkkr.ac.in/" target="_blank" rel="noopener">NIT Kurukshetra</a>
              <a href="https://mit.edu/" target="_blank" rel="noopener">MIT (AI Lab)</a>
              <a href="https://cs.stanford.edu/" target="_blank" rel="noopener">Stanford Computer Science</a>
              <a href="https://deepmind.com/" target="_blank" rel="noopener">DeepMind</a>
              <a href="https://ai.berkeley.edu/" target="_blank" rel="noopener">Berkeley Artificial Intelligence Research</a>
              <a href="https://www.oxford-ai.org/" target="_blank" rel="noopener">Oxford AI Society</a>
              <a href="https://ai.yale.edu/" target="_blank" rel="noopener">Yale AI</a>
              <a href="https://cambridgeai.org/" target="_blank" rel="noopener">Cambridge AI</a>
              <a href="https://imperial.ac.uk/artificial-intelligence/" target="_blank" rel="noopener">Imperial College London AI</a>
              <a href="https://huggingface.co/" target="_blank" rel="noopener">Hugging Face</a>
              <a href="https://replicate.com/" target="_blank" rel="noopener">Replicate AI Models</a>
              <a href="https://playground.openai.com/" target="_blank" rel="noopener">OpenAI Playground</a>
              <a href="https://civitai.com/" target="_blank" rel="noopener">CivitAI</a>
              <a href="https://stablediffusionweb.com/" target="_blank" rel="noopener">Stable Diffusion Web</a>
              <a href="https://beta.dreamstudio.ai/" target="_blank" rel="noopener">DreamStudio (Stability AI)</a>
              <a href="https://trychroma.com/" target="_blank" rel="noopener">ChromaDB Playground</a>
              <a href="https://demo.llama.cpp.ai/" target="_blank" rel="noopener">Llama.cpp Demo</a>
              <a href="https://transformer.huggingface.co/" target="_blank" rel="noopener">HuggingFace Transformers Demo</a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener">Dribbble</a>
              <a href="https://behance.net/" target="_blank" rel="noopener">Behance</a>
              <a href="https://awwwards.com/" target="_blank" rel="noopener">Awwwards</a>
              <a href="https://siteinspire.com/" target="_blank" rel="noopener">SiteInspire</a>
              <a href="https://mobbin.com/" target="_blank" rel="noopener">Mobbin</a>
              <a href="https://land-book.com/" target="_blank" rel="noopener">Land Book</a>
              <a href="https://onepagelove.com/" target="_blank" rel="noopener">One Page Love</a>
              <a href="https://ui8.net/" target="_blank" rel="noopener">UI8</a>
              <a href="https://cssnectar.com/" target="_blank" rel="noopener">CSS Nectar</a>
              <a href="https://jsonlint.com/" target="_blank" rel="noopener">JSONLint</a>
              <a href="https://jwt.io/" target="_blank" rel="noopener">JWT.io</a>
              <a href="https://regex101.com/" target="_blank" rel="noopener">Regex101</a>
              <a href="https://codeshare.io/" target="_blank" rel="noopener">Codeshare.io</a>
              <a href="https://repl.it/" target="_blank" rel="noopener">Repl.it</a>
              <a href="https://carbon.now.sh/" target="_blank" rel="noopener">Carbon (Code Snippet Image)</a>
              <a href="https://readme.so/" target="_blank" rel="noopener">ReadMe.so</a>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;