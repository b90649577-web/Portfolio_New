import React from 'react';
import About from '../components/sections/About';
import MetaTags from '../components/SEO/MetaTags';

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Brajesh Kumar",
      "jobTitle": "AI Engineer & Full Stack Developer",
      "description": "Passionate Computer Science student specializing in AI, machine learning, and full-stack development",
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "Full Stack Development",
        "React.js",
        "Python",
        "UI/UX Design"
      ]
    }
  };

  return (
    <>
      <MetaTags
        title="About Brajesh Kumar | AI Engineer & Full Stack Developer Background"
        description="Learn about Brajesh Kumar's journey as an AI Engineer and Full Stack Developer. Computer Science student at GL Bajaj with expertise in React, Python, Machine Learning, and 100+ projects."
        keywords="Brajesh Kumar about, AI engineer background, full stack developer story, computer science student, GL Bajaj, machine learning expertise, React developer journey"
        url="https://brajeshkumar.dev/#/about"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-16">
        <About />
      </div>
    </>
  );
};

export default AboutPage;