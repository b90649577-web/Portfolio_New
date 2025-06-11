import React from 'react';
import Projects from '../components/sections/Projects';
import MetaTags from '../components/SEO/MetaTags';

const ProjectsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Brajesh Kumar Projects Portfolio",
    "description": "Showcase of AI, machine learning, and full-stack development projects by Brajesh Kumar",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Software Development Projects",
      "description": "Collection of AI, web development, and machine learning projects",
      "numberOfItems": "100+",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Emma - Personal Assistant",
          "description": "AI-powered personal assistant built with Python",
          "applicationCategory": "AI Assistant",
          "operatingSystem": "Cross-platform"
        },
        {
          "@type": "SoftwareApplication", 
          "name": "Thea - AI Therapist",
          "description": "AI-powered virtual mental health assistant",
          "applicationCategory": "Healthcare AI",
          "operatingSystem": "Web-based"
        },
        {
          "@type": "SoftwareApplication",
          "name": "SEMAC",
          "description": "College management system with ML-powered grade prediction",
          "applicationCategory": "Education Management",
          "operatingSystem": "Web-based"
        }
      ]
    }
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Projects | AI, Machine Learning & Full Stack Development Portfolio"
        description="Explore 100+ projects by Brajesh Kumar including AI assistants, machine learning applications, React web apps, and Python tools. Featured projects: Emma AI Assistant, Thea AI Therapist, SEMAC."
        keywords="Brajesh Kumar projects, AI projects, machine learning projects, React projects, Python projects, Emma AI assistant, Thea AI therapist, SEMAC, full stack projects, web development portfolio"
        url="https://brajeshkumar.dev/#/projects"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-16">
        <Projects />
      </div>
    </>
  );
};

export default ProjectsPage;