import React from "react";
import "./Process.css";

const Process = () => {

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We learn about your business, goals, and target audience to define the project scope."
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our designers create wireframes and high-fidelity mockups aligned with your brand."
    },
    {
      number: "03",
      title: "Development",
      description:
        "We build your product using cutting-edge technologies with clean, scalable code."
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "We deploy, optimize, and provide ongoing maintenance to keep things running smoothly."
    }
  ];


  return (
    <section id="process" className="process">

      
      <div className="process-top">

        <p className="process-tag">
          OUR PROCESS
        </p>

        <h2>
          How We Work
        </h2>

      </div>


      
      <div className="process-grid">

        {processSteps.map((step, index) => (

          <div className="process-card" key={index}>

            <h3 className="process-number">
              {step.number}
            </h3>

            <h4>
              {step.title}
            </h4>

            <p>
              {step.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Process;
