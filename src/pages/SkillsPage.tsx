import React from 'react';
import Skills from '../components/sections/Skills';
import MetaTags from '../components/SEO/MetaTags';

const SkillsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Brajesh Kumar Technical Skills",
    "description": "Comprehensive list of technical skills and tools used by Brajesh Kumar",
    "itemListElement": [
      {
        "@type": "Skill",
        "name": "JavaScript",
        "description": "Advanced proficiency in JavaScript for web development"
      },
      {
        "@type": "Skill", 
        "name": "Python",
        "description": "Expert level Python for AI, ML, and backend development"
      },
      {
        "@type": "Skill",
        "name": "React.js",
        "description": "Advanced React.js for building modern web applications"
      },
      {
        "@type": "Skill",
        "name": "Machine Learning",
        "description": "Experience with TensorFlow, scikit-learn, and AI model development"
      },
      {
        "@type": "Skill",
        "name": "Node.js",
        "description": "Backend development with Node.js and Express.js"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Skills | AI, Machine Learning, React, Python & Full Stack Technologies"
        description="Comprehensive overview of Brajesh Kumar's technical skills including AI/ML, React.js, Python, Node.js, UI/UX design, cloud technologies, and 100+ certifications."
        keywords="Brajesh Kumar skills, AI skills, machine learning skills, React skills, Python skills, full stack developer skills, UI/UX design skills, technical certifications, programming languages"
        url="https://brajeshkumar.dev/#/skills"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-16">
        <Skills />
      </div>
    </>
  );
};

export default SkillsPage;