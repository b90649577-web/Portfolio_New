import React from 'react';
import Skills from '../components/sections/Skills';
import MetaTags from '../components/SEO/MetaTags';

const SkillsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Brajesh Kumar Technical Skills | EdTech-Community",
    "description": "Comprehensive list of technical skills and tools used by Brajesh Kumar, EdTech-Community founder",
    "itemListElement": [
      {
        "@type": "Skill",
        "name": "JavaScript",
        "description": "Advanced proficiency in JavaScript for web development and EdTech-Community projects"
      },
      {
        "@type": "Skill", 
        "name": "Python",
        "description": "Expert level Python for AI, ML, and backend development in EdTech-Community"
      },
      {
        "@type": "Skill",
        "name": "React.js",
        "description": "Advanced React.js for building modern web applications and EdTech-Community platforms"
      },
      {
        "@type": "Skill",
        "name": "Machine Learning",
        "description": "Experience with TensorFlow, scikit-learn, and AI model development for EdTech-Community"
      },
      {
        "@type": "Skill",
        "name": "Google Cloud",
        "description": "Google Cloud Platform expertise for EdTech-Community infrastructure"
      },
      {
        "@type": "Skill",
        "name": "Azure",
        "description": "Microsoft Azure cloud solutions for EdTech-Community applications"
      },
      {
        "@type": "Skill",
        "name": "Firebase",
        "description": "Firebase backend services for EdTech-Community mobile and web apps"
      },
      {
        "@type": "Skill",
        "name": "Kong",
        "description": "Kong API Gateway implementation for EdTech-Community microservices"
      }
    ]
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
        "name": "Skills",
        "item": "https://brajeshkumar.dev/#/skills"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Skills | EdTech-Community | AI, Machine Learning, React, Python, Google Cloud, Azure, Firebase, Kong & Full Stack Technologies"
        description="Comprehensive overview of Brajesh Kumar's technical skills including AI/ML, React.js, Python, Node.js, Google Cloud, Azure, Firebase, Kong, UI/UX design, cloud technologies, and 100+ certifications. EdTech-Community founder expertise."
        keywords="Brajesh Kumar skills, EdTech-Community skills, AI skills, machine learning skills, React skills, Python skills, Google Cloud skills, Azure skills, Firebase skills, Kong skills, full stack developer skills, UI/UX design skills, technical certifications, programming languages"
        url="https://brajeshkumar.dev/#/skills"
        structuredData={[structuredData, breadcrumbData]}
      />
      <div className="container mx-auto px-4 py-16">
        <Skills />
      </div>
    </>
  );
};

export default SkillsPage;