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
        "name": "EdTech-Community founder",
        "description": "Founder and leader of EdTech-Community for collaborative learning and innovation",
        "occupationLocation": "India",
        "startDate": "2023"
      },
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
        "description": "B.Tech Computer Science and Engineering with EdTech-Community initiatives",
        "occupationLocation": "GL Bajaj Group of Institutions",
        "startDate": "2023-09"
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
        "name": "Experience",
        "item": "https://brajeshkumar.dev/#/experience"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Experience | EdTech-Community founder | Campus Ambassador & Student Leadership Roles"
        description="Professional experience of Brajesh Kumar including EdTech-Community founder, Campus Ambassador roles at IIT Madras, IIT Delhi, IIT Roorkee, IMUNA, and academic journey at GL Bajaj Group of Institutions with focus on AI, Google Cloud, Azure, Firebase, Kong technologies."
        keywords="Brajesh Kumar experience, EdTech-Community founder, campus ambassador experience, IIT Madras, IIT Delhi, IIT Roorkee, IMUNA, GL Bajaj, student leadership, professional experience, AI experience, Google Cloud experience, Azure experience"
        url="https://brajeshkumar.dev/#/experience"
        structuredData={[structuredData, breadcrumbData]}
      />
      <div className="container mx-auto px-4 py-16">
        <Experience />
      </div>
    </>
  );
};

export default ExperiencePage;