import React from "react";
import "./Process.css";

const Process = () => {

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your brand, goals, target audience, and current digital presence — so everything we build is rooted in strategy, not guesswork."
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description:
        "We develop a tailored execution plan — content calendars, ad strategies, listing roadmaps — with clear timelines, deliverables, and approval checkpoints."
    },
    {
      number: "03",
      title: "Execution",
      description:
        "Our team gets to work — designing creatives, writing copy, optimizing listings, and launching campaigns — with week-by-week updates so you're always in the loop."
    },
    {
      number: "04",
      title: "Review & Scale",
      description:
        "We track performance, share monthly reports, and refine what works — turning insights into actions that compound your growth over time."
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

        <p className="process-desc">A structured, transparent process that keeps you informed and your brand moving forward — every week.</p>

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
