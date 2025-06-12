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
      "jobTitle": "AI Engineer, Full Stack Developer, EdTech Community Builder",
      "description": "Passionate Computer Science student, EdTech-Community founder specializing in AI, machine learning, Google Cloud, Azure, Firebase, Kong, and full-stack development",
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "Full Stack Development",
        "React.js",
        "Python",
        "UI/UX Design",
        "Google Cloud",
        "Azure",
        "Firebase",
        "Kong",
        "EdTech-Community"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "EdTech-Community"
      }
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://brajeshkumar.dev/#/about"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="About Brajesh Kumar | EdTech-Community founder, AI Engineer & Full Stack Developer Background"
        description="Learn about Brajesh Kumar's journey as an AI Engineer, EdTech-Community founder, and Full Stack Developer. Computer Science student at GL Bajaj with expertise in Google Cloud, Azure, Firebase, Kong, React, Python, Machine Learning, and 100+ projects."
        keywords="Brajesh Kumar about, EdTech-Community founder, AI engineer background, full stack developer story, computer science student, GL Bajaj, machine learning expertise, Google Cloud, Azure, Firebase, Kong, React developer journey"
        url="https://brajeshkumar.dev/#/about"
        structuredData={[structuredData, breadcrumbData]}
      />
      <div className="container mx-auto px-4 py-16">
        <About />
      </div>
    </>
  );
};

export default AboutPage;