import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/fraud-detection.png";
import IMG2 from "../../assets/311.png";
import IMG3 from "../../assets/payability.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Credit Fraud Detection Project",
    github:
      "https://github.com/hungyichang19980105/CREDIT-CARD-FRAUD-DETECTION",
  },
  {
    id: 2,
    image: IMG2,
    title: "311 NYC Borough Project",
    github: "https://github.com/hungyichang19980105/311project",
  },
  {
    id: 3,
    image: IMG3,
    title: "Payability Fraud Project",
    github: "https://github.com/hungyichang19980105/Payability-project",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
