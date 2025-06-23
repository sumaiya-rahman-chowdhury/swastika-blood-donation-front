"use client";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import GeneralButton from "@/app/component/button/GeneralButton";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animation";

const OurStory = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, amount: 0.1 }} // Triggers when 30% of the element is visible
      variants={fadeInUp}
    >
      <section className="p-6">
        <h1 className="text-xl mb-6 text-center text-red-700">Our Story</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="flex flex-col gap-6 justify-between">
            <div className="w-full p-6 text-black bg-red-50 flex justify-between flex-col lg:flex-row md:flex-row rounded-lg">
              <div>
                <h1 className="text-center font-bold text-7xl">
                  75<span className="text-5xl relative top-[-0.6em]">+</span>
                </h1>
                <p className="text-red-700 text-center">Blood Cooperations</p>
              </div>
              <div>
                <h1 className="text-center font-bold text-7xl">
                  9<span className="text-5xl relative top-[-0.3em]">0+</span>
                </h1>
                <p className="text-red-700 text-center">Expert Staff</p>
              </div>
              <div>
                <h1 className="text-center font-bold text-7xl">
                  3<span className="text-5xl relative top-[-0.3em]">20+</span>
                </h1>
                <p className="text-red-700 text-center">Blood Donations</p>
              </div>
              <div></div>
            </div>
            <div className="flex gap-6 lg:flex-row md:flex-row flex-col justify-between items-stretch">
              <div className="lg:w-1/2 md:w-1/2 w-full bg-red-700 px-10 py-13 text-white space-y-6 rounded-lg">
                <h3 className="text-2xl">Why We Do It</h3>
                <hr />
                <p>
                  Every 2 seconds, someone needs a blood transfusion. Yet, less
                  than 5% of eligible donors give blood.{`We’re`} here to bridge
                  that gap, making donation simple, safe, and rewarding.
                </p>
              </div>
              <div
                className="lg:w-1/2 md:w-1/2 w-full bg-red-500 p-6 text-white rounded-lg bg-center bg-cover bg-no-repeat h-screen md:h-auto"
                style={{
                  backgroundImage: `url('https://donors.creedcreatives.net/image/blood-bag.jpg')`,
                }}
              ></div>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-between">
            <div className="w-full  text-black space-y-6 ">
              <h1 className="text-5xl font-bold text-[#1D1D1D]">
                Dedicated to Life, The Story of Our Blood Drive Initiative
              </h1>
              <p className="text-[#555555]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fringilla curabitur adipiscing pulvinar nisi natoque odio
                cursus. Consectetur lacus ridiculus sagittis nisi non euismod
                euismod molestie
              </p>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col gap-6 p-6 border-1 border-[#f3f3f3] rounded-lg">
              <div className="lg:w-1/2 md:w-1/2 w-full bg-[#f3f3f3] p-6 text-white space-y-5 rounded-lg">
                <h3 className="text-2xl text-[#1D1D1D]">Have a Question?</h3>
                <p className="text-[#555555]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex gap-6 items-center ">
                  <div className="w-[50px] h-[50px] bg-red-700 flex items-center justify-center rounded">
                    <HiOutlinePhoneMissedCall className="text-3xl" />
                  </div>
                  <div className="text-[#1D1D1D]">
                    <h3>Call Us</h3>
                    <p>01313550387</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col gap-4  text-white rounded-lg">
                <ol className="space-y-4 text-black">
                  <li className="flex gap-2 items-center">
                    <FaHeart className="text-red-700" />
                    <p>Torquent sem ligula ultrices odio</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaHeart className="text-red-700" />
                    Integer aliquet enim conubia.
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaHeart className="text-red-700" />
                    Massa eleifend dapibus litora
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaHeart className="text-red-700" />
                    Aptent morbi duis pharetra vel.
                  </li>
                </ol>
                <Link href="/">
                  <GeneralButton value="Discover More" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default OurStory;
