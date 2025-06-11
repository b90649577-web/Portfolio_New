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
      }
    }
  };

  return (
    <>
      <MetaTags
        title="Contact Brajesh Kumar | Hire AI Engineer & Full Stack Developer"
        description="Get in touch with Brajesh Kumar for freelance projects, AI development, full stack development, and UI/UX design services. Available for global collaborations and remote work."
        keywords="contact Brajesh Kumar, hire AI engineer, freelance full stack developer, AI development services, React developer for hire, Python developer contact, machine learning consultant"
        url="https://brajeshkumar.dev/#/contact"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-16">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;