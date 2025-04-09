import React from 'react';
import image from "../assets/1.png"
// --- Example Portfolio Data ---
// In a real app, you'd likely fetch this from a CMS or have it in a separate data file.
const portfolioItems = [
  {
    id: 1,
    title: 'She Leads Finance',
    description: 'A platform that empowers and educates young women to manage money, build businesses, and grow through mentorship and community support..',
    imageUrl: image, // Replace with your image path
    liveUrl: 'https://sheleads-rust.vercel.app/', // Replace with actual link
    codeUrl: 'https://github.com/ishimwesarah/sheleads', // Replace with actual link (optional)
  },
  {
    id: 2,
    title: 'Ecommerce Site',
    description: 'Designed and developed a complex e-commerce site entirely within react.',
    imageUrl: 'https://via.placeholder.com/400x250/ff6347/ffffff?text=Webflow+Showcase', // Replace with your image path
    liveUrl: 'https://ecommerce-nxuv.vercel.app/',
    codeUrl: 'https://github.com/ishimwesarah/Ecommerce'
  },
//   {
//     id: 3,
//     title: 'QA Testing Framework',
//     description: 'Developed automated tests improving regression testing efficiency by 40%.',
//     imageUrl: 'https://via.placeholder.com/400x250/4b0082/ffffff?text=QA+Framework', // Replace with your image path
//     codeUrl: '#',
//   },
//    {
//     id: 4,
//     title: 'Consulting Success Story',
//     description: 'Helped a client optimize their Webflow site speed and SEO ranking.',
//     imageUrl: 'https://via.placeholder.com/400x250/cccccc/000000?text=Client+Success', // Replace with your image path
//     liveUrl: '#',
//   },
  // Add more projects...
];
// --- End Example Data ---

const Portfolio = () => {
  return (
    <main className="page-container portfolio-container">
      <h2>My Work</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.imageUrl} alt={item.title} className="portfolio-image" />
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="portfolio-links">
                {item.liveUrl && <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {item.codeUrl && <a href={item.codeUrl} target="_blank" rel="noopener noreferrer">View Code</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;