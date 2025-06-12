import React from 'react';
import Contact from '../components/sections/Contact';
import MetaTags from '../components/SEO/MetaTags';

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Brajesh Kumar",
      "email": "bk117134@gmail.com",
      "telephone": "+91-7452971645",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mathura",
        "addressRegion": "Uttar Pradesh", 
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Professional Inquiries",
        "availableLanguage": ["English", "Hindi"]
      },
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
        "name": "Contact",
        "item": "https://brajeshkumar.dev/#/contact"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Contact Brajesh Kumar | EdTech-Community | Hire AI Engineer, Google Cloud, Azure, Firebase, Kong & Full Stack Developer"
        description="Get in touch with Brajesh Kumar, EdTech-Community founder for freelance projects, AI development, Google Cloud, Azure, Firebase, Kong solutions, full stack development, and UI/UX design services. Available for global collaborations and remote work."
        keywords="contact Brajesh Kumar, EdTech-Community contact, hire AI engineer, freelance full stack developer, AI development services, Google Cloud services, Azure services, Firebase services, Kong services, React developer for hire, Python developer contact, machine learning consultant"
        url="https://brajeshkumar.dev/#/contact"
        structuredData={[structuredData, breadcrumbData]}
      />
      <div className="container mx-auto px-4 py-16">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;