"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/animation";
import Image from "next/image";

export default function WhyDonate() {
  const arrayOfProPic: string[] = [
    "https://donors.creedcreatives.net/image/close-up-smiling-young-african-man-with-glasses-le-2024-10-18-04-52-17-utc-150x150.jpg",
    "https://donors.creedcreatives.net/image/handsome-arab-guy-chilling-at-home-smiling-at-cam-2025-01-02-18-35-12-utc-150x150.jpg",
    "https://donors.creedcreatives.net/image/a-beautiful-asian-girl-stands-in-modest-clothes-2025-01-10-20-30-33-utc-150x150.jpg",
  ];
  const content = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            venenatis elit nostra lacinia inceptos. Nascetur imperdiet
            pellentesque in eget; mauris luctus faucibus pellentesque.
          `;
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-30">
      {/* Left image with overlay */}
      <div className="relative rounded-xl overflow-hidden h-[500px]">
        <Image
          fill
          src="https://donors.creedcreatives.net/image/vertical-shot-of-a-male-s-hand-going-through-a-med-2025-02-11-21-56-16-utc.jpg"
          alt="Blood donation"
          className=" object-cover"
        />
        {/* Overlay card */}
        <div
          className="absolute bottom-4 right-4 bg-white/45 backdrop-blur-md 
        flex flex-col
        rounded-xl p-4  items-center gap-4 shadow-lg"
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            className="flex -space-x-3"
          >
            {arrayOfProPic.map((item, key) => {
              return (
                <Image
                  key={key}
                  src={item}
                  alt="hero1"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-white"
                />
              );
            })}
            <div
              className="w-[80px] h-[80px] bg-red-600 text-white rounded-full
           flex items-center justify-center text-5xl font-bold"
            >
              +
            </div>
          </motion.div>
          <div>
            <p className="text-sm text-gray-800">
              Join <span className="text-red-600 font-semibold">50,000+</span>{" "}
              heroes and be lifesavers for others
            </p>
          </div>
        </div>
      </div>

      {/* Right content */}
      <div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="inView"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-red-600 font-semibold mb-2">Why Donate?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            The Life You Save Could Be
            <br />
            Someone You Love
          </h2>
          <p className="text-gray-600 mb-6">{content}</p>
        </motion.div>
        <div className="border-t border-gray-300 my-6"></div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <div className="text-red-600 text-3xl mb-2">🩸</div>
            <h4 className="font-semibold text-lg mb-1">
              Your Blood, Their Second Chance
            </h4>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="text-red-600 text-3xl mb-2">❤️</div>
            <h4 className="font-semibold text-lg mb-1">
              Urgent Need, Every Day
            </h4>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="text-red-600 text-3xl mb-2">🧍‍♂️</div>
            <h4 className="font-semibold text-lg mb-1">
              Save Lives in Minutes
            </h4>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}