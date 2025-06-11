import React from 'react';
import Services from '../components/sections/Services';
import MetaTags from '../components/SEO/MetaTags';

const ServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brajesh Kumar Development Services",
    "description": "Professional AI development, full stack development, and UI/UX design services",
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
      "Technical Consulting"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    }
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Services | AI Development, Full Stack & UI/UX Design Services"
        description="Professional services by Brajesh Kumar: AI development, machine learning solutions, full stack web development, React.js applications, Python automation, and UI/UX design. Available for global freelance projects."
        keywords="Brajesh Kumar services, AI development services, machine learning services, full stack development services, React development services, Python development, UI/UX design services, freelance developer services"
        url="https://brajeshkumar.dev/#/services"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-16">
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;