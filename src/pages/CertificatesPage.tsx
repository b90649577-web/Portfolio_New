import React from 'react';
import Certificates from '../components/sections/Certificates';
import MetaTags from '../components/SEO/MetaTags';

const CertificatesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brajesh Kumar",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Build Customizable Sales Presentation Graphics Using Canva",
        "credentialCategory": "Professional Certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Coursera"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Use Canva to Create Desktop and Mobile-friendly Web Pages",
        "credentialCategory": "Professional Certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Coursera"
        }
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Certificates | 100+ Professional Certifications & Achievements"
        description="View Brajesh Kumar's professional certificates and achievements including Coursera certifications, IBM credentials, Google Cloud certifications, and specialized training in AI, web development, and design."
        keywords="Brajesh Kumar certificates, professional certifications, Coursera certificates, IBM certifications, Google Cloud certificates, AI certifications, web development certificates, design certificates"
        url="https://brajeshkumar.dev/#/certificates"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-16">
        <Certificates />
      </div>
    </>
  );
};

export default CertificatesPage;