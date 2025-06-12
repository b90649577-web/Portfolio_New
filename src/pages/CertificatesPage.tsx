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
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Google Cloud Platform Certifications",
        "credentialCategory": "Cloud Certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Google Cloud"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Microsoft Azure Certifications",
        "credentialCategory": "Cloud Certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Microsoft Azure"
        }
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "EdTech-Community"
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
        "name": "Certificates",
        "item": "https://brajeshkumar.dev/#/certificates"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Certificates | EdTech-Community | 100+ Professional Certifications & Achievements"
        description="View Brajesh Kumar's professional certificates and achievements including Coursera certifications, IBM credentials, Google Cloud certifications, Azure certifications, Firebase certifications, Kong certifications, and specialized training in AI, web development, and design for EdTech-Community."
        keywords="Brajesh Kumar certificates, EdTech-Community certificates, professional certifications, Coursera certificates, IBM certifications, Google Cloud certificates, Azure certificates, Firebase certificates, Kong certificates, AI certifications, web development certificates, design certificates"
        url="https://brajeshkumar.dev/#/certificates"
        structuredData={[structuredData, breadcrumbData]}
      />
      <div className="container mx-auto px-4 py-16">
        <Certificates />
      </div>
    </>
  );
};

export default CertificatesPage;