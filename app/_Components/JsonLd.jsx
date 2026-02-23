// JSON-LD structured data component for better SEO
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

// Service-specific structured data
export function ServiceJsonLd({ service, category = 'IT' }) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": "Techmapperz",
      "url": "https://techmapperz.com",
      "logo": "https://techmapperz.com/logo.webp"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": service.description,
    "category": category,
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Businesses and Organizations"
    },
    "serviceOutput": {
      "@type": "Thing",
      "name": `Professional ${service.title} Solution`
    }
  }

  return <JsonLd data={serviceData} />
}

// Portfolio project structured data
export function ProjectJsonLd({ project }) {
  const projectData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name,
    "description": Array.isArray(project.details) ? project.details[0] : project.details,
    "creator": {
      "@type": "Organization",
      "name": "Techmapperz",
      "url": "https://techmapperz.com"
    },
    "about": {
      "@type": "Thing",
      "name": `${project.category} Project`,
      "description": `Professional ${project.category} solution by Techmapperz`
    },
    "genre": project.category,
    "keywords": project.techStack,
    "dateCreated": project.projectDetails?.year || new Date().getFullYear(),
    "image": project.image.startsWith('/') ? `https://techmapperz.com${project.image}` : project.image,
    "url": `https://techmapperz.com${project.link}`,
    "inLanguage": "en-US",
    "isAccessibleForFree": false,
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": project.projectDetails?.industry || "Business"
    }
  }

  return <JsonLd data={projectData} />
}

// Breadcrumb structured data
export function BreadcrumbJsonLd({ items }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return <JsonLd data={breadcrumbData} />
}

// FAQ structured data
export function FAQJsonLd({ faqs }) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return <JsonLd data={faqData} />
}

// Article structured data for blog posts
export function ArticleJsonLd({ article }) {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
      "@type": "Organization",
      "name": "Techmapperz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Techmapperz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://techmapperz.com/logo.webp"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  }

  return <JsonLd data={articleData} />
}