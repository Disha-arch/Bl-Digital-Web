import React from "react";
import "./Services.css";

const Services = () => {

  const servicesData = [
    {
      id: 1,
      icon: "🌐",
      title: "Web Development",
      description:
        "High-performance websites and web apps built with modern frameworks for speed and scalability."
    },
    {
      id: 2,
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver seamless user experiences."
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Research-driven design systems and interfaces that delight users and drive conversions."
    },
    {
      id: 4,
      icon: "📢",
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies that boost your online presence and growth."
    },
    {
      id: 5,
      icon: "🔍",
      title: "SEO Optimization",
      description:
        "Improve search rankings and increase organic traffic to your website."
    },
    {
      id: 6,
      icon: "🚀",
      title: "Branding Solutions",
      description:
        "Create a powerful and memorable brand identity for your business."
    }
  ];


  return (
    <section id="services" className="services">

      
      <div className="services-top">

        <p className="services-tag">WHAT WE DO</p>

        <h2>Services That Drive Results</h2>

        <p className="services-desc">
          End-to-end digital solutions tailored for startups and growing businesses.
        </p>

      </div>


      
      <div className="services-grid">

        {servicesData.map((service) => (

          <div className="service-card" key={service.id}>

            <div className="icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Services;
