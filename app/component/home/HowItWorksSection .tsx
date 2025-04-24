"use client";
import { motion } from "framer-motion";
import React from "react";
import { fadeInUp } from "@/animation";

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Register & Health Check",
      description:
        "Cras euismod in lobortis diam, facilisis lectus ex potenti dis. Montes habitant vivamus.",
    },
    {
      number: "02",
      title: "Blood Donation",
      description:
        "Cras euismod in lobortis diam, facilisis lectus ex potenti dis. Montes habitant vivamus.",
    },
    {
      number: "03",
      title: "Rest & Save Lives",
      description:
        "Cras euismod in lobortis diam, facilisis lectus ex potenti dis. Montes habitant vivamus.",
    },
  ];
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
          dignissim consequat viverra mi placerat libero. Magnis justo phasellus
          in metus, sollicitudin pretium fermentum erat.`;
  return (
    <div>
      <section className=" text-white pt-16 px-4 text-center">
        <h4 className="text-red-500 mb-2 font-semibold">How It Works</h4>
        <motion.h2
          initial="hidden"
          whileInView="inView"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Giving Blood Make Easy, {"Here's"} Now
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">{content}</p>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch mb-12 ">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex justify-between items-center gap-6 hover:bg-gray-400 transition-all
              duration-300 ease-in-out
               bg-black border border-gray-600 p-6 rounded-lg w-full md:w-1/3 text-left"
            >
              <div className="absolute -left-4 bottom-11 bg-red-500 text-white font-bold text-5xl w-fit p-3 rounded mb-4">
                {step.number}
              </div>
              <div className="p-6 ml-10">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HowItWorksSection;