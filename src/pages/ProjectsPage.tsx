import React from 'react';
import Projects from '../components/sections/Projects';
import MetaTags from '../components/SEO/MetaTags';

const ProjectsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Brajesh Kumar Projects Portfolio | EdTech-Community",
    "description": "Showcase of AI, machine learning, Google Cloud, Azure, Firebase, Kong, and full-stack development projects by Brajesh Kumar, EdTech-Community founder",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Software Development Projects",
      "description": "Collection of AI, web development, machine learning, Google Cloud, Azure, Firebase, Kong projects",
      "numberOfItems": "100+",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Emma - Personal Assistant",
          "description": "AI-powered personal assistant built with Python for EdTech-Community",
          "applicationCategory": "AI Assistant",
          "operatingSystem": "Cross-platform"
        },
        {
          "@type": "SoftwareApplication", 
          "name": "Thea - AI Therapist",
          "description": "AI-powered virtual mental health assistant for EdTech-Community wellness",
          "applicationCategory": "Healthcare AI",
          "operatingSystem": "Web-based"
        },
        {
          "@type": "SoftwareApplication",
          "name": "SEMAC",
          "description": "College management system with ML-powered grade prediction for EdTech-Community",
          "applicationCategory": "Education Management",
          "operatingSystem": "Web-based"
        }
      ]
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
        "name": "Projects",
        "item": "https://brajeshkumar.dev/#/projects"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Projects | EdTech-Community | AI, Machine Learning, Google Cloud, Azure, Firebase, Kong & Full Stack Development Portfolio"
        description="Explore 100+ projects by Brajesh Kumar, EdTech-Community founder including AI assistants, machine learning applications, Google Cloud, Azure, Firebase, Kong solutions, React web apps, and Python tools. Featured projects: Emma AI Assistant, Thea AI Therapist, SEMAC."
        keywords="Brajesh Kumar projects, EdTech-Community projects, AI projects, machine learning projects, Google Cloud projects, Azure projects, Firebase projects, Kong projects, React projects, Python projects, Emma AI assistant, Thea AI therapist, SEMAC, full stack projects, web development portfolio"
        url="https://brajeshkumar.dev/#/projects"
        structuredData={[structuredData, breadcrumbData]}
      />
      <div className="container mx-auto px-4 py-16">
        <Projects />
      </div>
    </>
  );
};

export default ProjectsPage;