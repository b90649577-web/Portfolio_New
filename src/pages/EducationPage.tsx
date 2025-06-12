import React from 'react';
import Education from '../components/sections/Education';
import MetaTags from '../components/SEO/MetaTags';

const EducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brajesh Kumar",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "GL Bajaj Group of Institutions",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mathura",
          "addressCountry": "India"
        }
      },
      {
        "@type": "EducationalOrganization",
        "name": "Delhi Public School",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Madhubani",
          "addressCountry": "India"
        }
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "B.Tech in Computer Science and Engineering",
        "educationalLevel": "Bachelor's Degree",
        "about": "Computer Science and Engineering with focus on AI, Machine Learning, Google Cloud, Azure, Firebase, Kong, and EdTech-Community development"
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
        "name": "Education",
        "item": "https://brajeshkumar.dev/#/education"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Education | EdTech-Community | B.Tech CSE at GL Bajaj Group of Institutions"
        description="Educational background of Brajesh Kumar, EdTech-Community founder - Currently pursuing B.Tech in Computer Science and Engineering at GL Bajaj Group of Institutions (2023-2027) with focus on AI, Machine Learning, Google Cloud, Azure, Firebase, Kong. Academic achievements and qualifications."
        keywords="Brajesh Kumar education, EdTech-Community founder education, GL Bajaj Group of Institutions, B.Tech Computer Science, Delhi Public School, academic background, computer science education, engineering student, AI education, machine learning education"
        url="https://brajeshkumar.dev/#/education"
        structuredData={[structuredData, breadcrumbData]}
      />
      <section className="container mx-auto px-4 py-16">
        <Education />
      </section>
    </>
  );
};

export default EducationPage;