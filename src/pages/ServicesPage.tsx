import React from 'react';
import Services from '../components/sections/Services';
import MetaTags from '../components/SEO/MetaTags';

const ServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brajesh Kumar Development Services | EdTech-Community",
    "description": "Professional AI development, Google Cloud, Azure, Firebase, Kong solutions, full stack development, and UI/UX design services by EdTech-Community founder",
    "provider": {
      "@type": "Person",
      "name": "Brajesh Kumar"
    },
    "serviceType": [
      "AI Development",
      "Machine Learning Solutions", 
      "Full Stack Web Development",
      "React.js Development",
      "Python Development",
      "UI/UX Design",
      "Technical Consulting",
      "Google Cloud Solutions",
      "Azure Solutions",
      "Firebase Development",
      "Kong API Gateway",
      "EdTech-Community Services"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Global"
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
        "name": "Services",
        "item": "https://brajeshkumar.dev/#/services"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Services | EdTech-Community | AI Development, Google Cloud, Azure, Firebase, Kong, Full Stack & UI/UX Design Services"
        description="Professional services by Brajesh Kumar, EdTech-Community founder: AI development, machine learning solutions, Google Cloud, Azure, Firebase, Kong implementations, full stack web development, React.js applications, Python automation, and UI/UX design. Available for global freelance projects."
        keywords="Brajesh Kumar services, EdTech-Community services, AI development services, machine learning services, Google Cloud services, Azure services, Firebase services, Kong services, full stack development services, React development services, Python development, UI/UX design services, freelance developer services"
        url="https://brajeshkumar.dev/#/services"
        structuredData={[structuredData, breadcrumbData]}
      />
      <div className="container mx-auto px-4 py-16">
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;