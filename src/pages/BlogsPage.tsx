import React from 'react';
import Blogs from '../components/sections/Blogs';
import MetaTags from '../components/SEO/MetaTags';

const BlogsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Brajesh Kumar Blog",
    "description": "Insights, tutorials, and experiences in AI, machine learning, and web development",
    "author": {
      "@type": "Person",
      "name": "Brajesh Kumar"
    },
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "OpenAI Academy Launch 2025 – Future Skills for India: My Reflections",
        "description": "Invited to The Oberoi, New Delhi for the OpenAI Academy launch — a visionary leap in India's AI journey.",
        "author": {
          "@type": "Person",
          "name": "Brajesh Kumar"
        },
        "datePublished": "2025-06-05"
      }
    ]
  };

  return (
    <>
      <MetaTags
        title="Brajesh Kumar Blog | AI, Machine Learning & Web Development Insights"
        description="Read Brajesh Kumar's blog featuring insights on AI events, machine learning tutorials, web development tips, and tech industry experiences. Latest posts on OpenAI Academy, AI summits, and more."
        keywords="Brajesh Kumar blog, AI blog, machine learning blog, web development blog, tech insights, OpenAI Academy, AI events, programming tutorials, developer experiences"
        url="https://brajeshkumar.dev/#/blogs"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-16">
        <Blogs />
      </div>
    </>
  );
};

export default BlogsPage;