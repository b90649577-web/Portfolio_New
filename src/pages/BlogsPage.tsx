import React from 'react';
import Blogs from '../components/sections/Blogs';
import MetaTags from '../components/SEO/MetaTags';

const BlogsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Brajesh Kumar Blog | EdTech-Community",
    "description": "Insights, tutorials, and experiences in AI, machine learning, Google Cloud, Azure, Firebase, Kong, web development, and EdTech-Community initiatives",
    "author": {
      "@type": "Person",
      "name": "Brajesh Kumar"
    },
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "OpenAI Academy Launch 2025 – Future Skills for India: My Reflections",
        "description": "Invited to The Oberoi, New Delhi for the OpenAI Academy launch — a visionary leap in India's AI journey and EdTech-Community development.",
        "author": {
          "@type": "Person",
          "name": "Brajesh Kumar"
        },
        "datePublished": "2025-06-05"
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
        "name": "Blogs",
        "item": "https://brajeshkumar.dev/#/blogs"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Blog | EdTech-Community | AI, Machine Learning, Google Cloud, Azure, Firebase, Kong & Web Development Insights"
        description="Read Brajesh Kumar's blog featuring insights on AI events, machine learning tutorials, Google Cloud, Azure, Firebase, Kong solutions, web development tips, EdTech-Community initiatives, and tech industry experiences. Latest posts on OpenAI Academy, AI summits, and more."
        keywords="Brajesh Kumar blog, EdTech-Community blog, AI blog, machine learning blog, Google Cloud blog, Azure blog, Firebase blog, Kong blog, web development blog, tech insights, OpenAI Academy, AI events, programming tutorials, developer experiences"
        url="https://brajeshkumar.dev/#/blogs"
        structuredData={[structuredData, breadcrumbData]}
      />
      <div className="container mx-auto px-4 py-16">
        <Blogs />
      </div>
    </>
  );
};

export default BlogsPage;