export default function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://avika-jain-portfolio.vercel.app/#avika",
        "name": "Avika Jain",
        "url": "https://avika-jain-portfolio.vercel.app",
        "image": "https://avika-jain-portfolio.vercel.app/avika-showcase.jpg",
        "jobTitle": ["Graphic Designer", "UI/UX & Product Designer", "Video Editor"],
        "description": "Multidisciplinary creative working across graphic design, digital product experiences, brand identity and video storytelling.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Moradabad",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        },
        "email": "mailto:avikajain1107@gmail.com",
        "telephone": "+91-7302415626",
        "knowsAbout": [
          "Graphic Design",
          "UI/UX Design",
          "Product Design",
          "Brand Identity",
          "Video Editing",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Figma",
          "Adobe Premiere Pro",
          "Adobe After Effects"
        ],
        "sameAs": [
          "https://github.com/Aradhy20/avika-jain-portfolio",
          "https://www.linkedin.com/in/avika-jain-890167397/",
          "https://www.behance.net/avikajain"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://avika-jain-portfolio.vercel.app/#website",
        "url": "https://avika-jain-portfolio.vercel.app",
        "name": "Avika Jain — Creative Portfolio",
        "description": "Portfolio of Avika Jain — Graphic Designer, UI/UX Designer & Video Editor.",
        "publisher": {
          "@id": "https://avika-jain-portfolio.vercel.app/#avika"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

