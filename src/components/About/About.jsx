import React from "react";
import "./About.css";

const About = () => {

  const features = [
    "Startup-focused approach with agile, week-by-week delivery",
    "Transparent pricing with no hidden costs — ever",
    "Dedicated account manager for every client engagement",
    "Specialized in D2C, e-commerce, and quick commerce brands",
    "Platform-compliant work across Amazon, Blinkit, and Meta",
    "Post-launch support and ongoing brand consultancy"
  ];

  const stats = [
    {
      number: "30+",
      label: "Projects Completed"
    },
    {
      number: "10+",
      label: "Brands Served"
    },
    {
      number: "15+",
      label: "Team Members"
    },
    {
      number: "24/7",
      label: "Support Available"
    }
  ];


  return (
    <section id="about" className="about">

      <div className="about-container">

        
        <div className="about-left">

          <p className="about-tag">
            WHY CHOOSE US
          </p>

          <h2>
            Built for Startups, 
            <span>Trusted by Businesses</span>
          </h2>

          <p className="about-desc">
            At BL Digital Solutions, we combine creative thinking with technical expertise to deliver digital products that stand out. Led by Lakshay Gupta and Bhavya Chauhan, our team is passionate about helping brands scale through smart strategy and sharp execution.
          </p>


          
          <div className="about-features">

            {features.map((item, index) => (

              <div className="feature" key={index}>
                <span className="check">✔</span>
                <p>{item}</p>
              </div>

            ))}

          </div>

        </div>


        
        <div className="about-right">

          {stats.map((stat, index) => (

            <div className="stat-card" key={index}>

              <h3>{stat.number}</h3>

              <p>{stat.label}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default About;
