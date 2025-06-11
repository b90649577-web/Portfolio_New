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
        "about": "Computer Science and Engineering with focus on AI and Machine Learning"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Education | B.Tech CSE at GL Bajaj Group of Institutions"
        description="Educational background of Brajesh Kumar - Currently pursuing B.Tech in Computer Science and Engineering at GL Bajaj Group of Institutions (2023-2027). Academic achievements and qualifications."
        keywords="Brajesh Kumar education, GL Bajaj Group of Institutions, B.Tech Computer Science, Delhi Public School, academic background, computer science education, engineering student"
        url="https://brajeshkumar.dev/#/education"
        structuredData={structuredData}
      />
      <section className="container mx-auto px-4 py-16">
        <Education />
      </section>
    </>
  );
};

export default EducationPage;