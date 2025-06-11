import React from 'react';
import Experience from '../components/sections/Experience';
import MetaTags from '../components/SEO/MetaTags';

const ExperiencePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brajesh Kumar",
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Campus Ambassador",
        "description": "International Model United Nations Association (IMUNA)",
        "occupationLocation": "India",
        "startDate": "2024-09"
      },
      {
        "@type": "Occupation", 
        "name": "Campus Ambassador",
        "description": "Indian Institute of Technology, Madras",
        "occupationLocation": "India",
        "startDate": "2024-10",
        "endDate": "2025-01"
      },
      {
        "@type": "Occupation",
        "name": "Student",
        "description": "B.Tech Computer Science and Engineering",
        "occupationLocation": "GL Bajaj Group of Institutions",
        "startDate": "2023-09"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Experience | Campus Ambassador & Student Leadership Roles"
        description="Professional experience of Brajesh Kumar including Campus Ambassador roles at IIT Madras, IIT Delhi, IIT Roorkee, IMUNA, and academic journey at GL Bajaj Group of Institutions."
        keywords="Brajesh Kumar experience, campus ambassador experience, IIT Madras, IIT Delhi, IIT Roorkee, IMUNA, GL Bajaj, student leadership, professional experience"
        url="https://brajeshkumar.dev/#/experience"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-16">
        <Experience />
      </div>
    </>
  );
};

export default ExperiencePage;