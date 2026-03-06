import React from "react";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { TbTargetArrow } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { TfiShine } from "react-icons/tfi";
import "./Services.css";

const Services = () => {

  const servicesData = [
    {
      id: 1,
      icon: <TbDeviceMobileMessage />,
      title: "Social Media Management",
      description:
        "Strategic content planning, brand-aligned creatives, reels, stories, and captions — crafted to build community, drive engagement, and convert followers into customers."
    },
    {
      id: 2,
      icon: <TbTargetArrow />,
      title: "Meta & Instagram Ads",
      description:
        "Performance-driven paid campaigns on Meta platforms — from creative ideation and audience targeting to A/B testing and budget optimization for maximum ROAS."
    },
    {
      id: 3,
      icon: <FaCartShopping />,
      title: "Amazon Product Listing",
      description:
        "Keyword-rich titles, bullet points, and A+ content that improve search ranking and conversion rate on Amazon — fully compliant with platform guidelines."
    },
    {
      id: 4,
      icon: <FaBolt />,
      title: "Quick Commerce — Blinkit",
      description:
        "End-to-end Blinkit listing management — keyword research, optimized product titles, image audits, and discoverability strategies for the 10-minute delivery ecosystem."
    },
    {
      id: 5,
      icon: <RiComputerFill />,
      title: "Website Design & Development",
      description:
        "Modern, conversion-focused websites built with clean code and compelling design — from landing pages to full business websites that represent your brand with credibility."
    },
    {
      id: 6,
      icon: <TfiShine />,
      title: "Brand Identity & Design",
      description:
        "Logos, brand guidelines, visual systems, and creative assets that establish a cohesive identity across every digital touchpoint — built to be remembered."
    }
  ];


  return (
    <section id="services" className="services">

      
      <div className="services-top">

        <p className="services-tag">WHAT WE DO</p>

        <h2>Services That Drive Results</h2>

        <p className="services-desc">
          End-to-end digital solutions tailored for D2C brands, startups, and growing businesses across India.
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
