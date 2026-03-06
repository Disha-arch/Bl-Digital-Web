import React from "react";
import { GiBoxUnpacking } from "react-icons/gi";
import { FaBolt } from "react-icons/fa6";
import { RiCameraAiFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { GiOnTarget } from "react-icons/gi";
import { BsCartFill } from "react-icons/bs";
import "./Platform.css";

const Platform = () => {

  const servicesData = [
    {
      id: 1,
      icon: <GiBoxUnpacking />,
      title: "Amazon India",
      description:
        "Product listing creation, SEO-driven keyword optimization, A+ content, and category strategy to improve organic rank and conversion."
    },
    {
      id: 2,
      icon: <FaBolt />,
      title: "Blinkit",
      description:
        "Quick commerce listing setup, keyword research, title and image optimization to maximize discoverability on India's fastest-growing delivery platform."
    },
    {
      id: 3,
      icon: <RiCameraAiFill />,
      title: "Instagram & Facebook",
      description:
        "Organic content strategy, reel production, story campaigns, paid Meta ads, and audience targeting to grow reach and drive purchase intent."
    },
    {
      id: 4,
      icon: <FaGlobe />,
      title: "Your Website",
      description:
        "Custom website design, content management, brand-aligned copy, and SEO fundamentals to build a credible digital home for your business."
    },
    {
      id: 5,
      icon: <GiOnTarget />,
      title: "Meta Ads Manager",
      description:
        "Full-funnel paid campaigns from awareness to conversion — with creative testing, retargeting, and performance reporting built in."
    },
    {
      id: 6,
      icon: <BsCartFill />,
      title: "Other Marketplaces",
      description:
        "Flipkart, Meesho, and other platforms — we help you list, optimize, and scale across India's entire e-commerce ecosystem."
    }
  ];

  return (
    <section id="platform" className="platform">

      <div className="platform-top">
        <p className="platform-tag">PLATFORMS WE WORK ON</p>
        <h2>Where We <span>Deliver Results</span></h2>
        <p className="platform-desc">
          We operate across the platforms that matter most for modern Indian D2C and e-commerce brands.
        </p>
      </div>

      <div className="platform-grid">
        {servicesData.map((platform) => (
          <div className="platform-card" key={platform.id}>

            
            <div className="icon">
              {platform.icon}
            </div>

            
            <div className="platform-card-body">
              <h3>{platform.title}</h3>
              <p>{platform.description}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Platform;