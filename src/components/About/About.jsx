import React from "react";
import "./About.css";

const About = () => {

  const features = [
    "Startup-focused approach with agile delivery",
    "Transparent pricing, no hidden costs",
    "Dedicated project manager for every engagement",
    "Modern tech stack — React, Next.js, Flutter & more",
    "Post-launch support and maintenance",
    "Proven track record with 50+ projects"
  ];

  const stats = [
    {
      number: "3+",
      label: "Years Experience"
    },
    {
      number: "50+",
      label: "Projects Completed"
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
            Built for Startups, <span>Trusted by Businesses</span>
          </h2>

          <p className="about-desc">
            At BL Digital Solutions, we combine creative thinking with
            technical expertise to deliver digital products that stand out.
            Our team is passionate about helping businesses scale through technology.
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
