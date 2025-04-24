"use client";
import { motion } from "framer-motion";
import { fadeInUp, slideInFromRight } from "@/animation";
import Image from "next/image";
import GeneralButton from "@/app/component/button/GeneralButton";

export default function BloodDonationEventsPage() {
  const arrayOfEventImages: string[] = [
    "https://donors.creedcreatives.net/image/redhead-volunteer-with-transfusion-set-squeezing-r-2024-11-15-06-09-45-utc.jpg",
    "https://donors.creedcreatives.net/image/young-woman-with-a-phone-making-blood-donation-in-2023-11-27-05-13-02-utc.jpg",
  ];
  return (
    <div className="bg-[#fff8f8] min-h-screen py-10 px-4 md:px-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 items-center h-[100vh]">
        {/* Left: Events List */}
        <div className="flex-1 space-y-6">
          <p className="text-red-600 font-medium text-sm mb-2">
            Upcoming Events & Drivers
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 max-w-2xl leading-tight">
            {`Don't Miss Out! Upcoming Blood Donations Events`}{" "}
          </h1>
          {arrayOfEventImages.map((event, index) => (
            <motion.div
              initial="hidden"
              whileInView="inView"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-start"
            >
              <div className="relative w-32 h-28 rounded-md overflow-hidden">
                <Image src={event} alt="Event image"
                fill
                className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {index === 0
                    ? "A Campus Blood Mission"
                    : "The Big Give - Citywide Blood Drive"}
                </h3>
                <div className="flex items-center flex-wrap gap-4 text-sm text-gray-600 mt-1">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0V10.5A2.25 2.25 0 015.25 8.25h13.5A2.25 2.25 0 0121 10.5v8.25"
                      />
                    </svg>
                    {index === 0 ? "March 18, 2025" : "April 27, 2025"}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {index === 0 ? "09.00 AM - 5.30 PM" : "06.30 AM - 3.00 PM"}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    {index === 0 ? "Young School Hall" : "Pure Life Hospital"}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="inView"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInFromRight}
          className="w-full lg:w-1/3  rounded-xl overflow-hidden shadow-md h-[600px] 
          flex justify-center items-center bg-center bg-cover bg-no-repeat p-6"
          style={{
            backgroundImage: `url('https://donors.creedcreatives.net/image/redhead-volunteer-with-transfusion-set-squeezing-r-2024-11-15-06-09-45-utc.jpg')`,
          }}
        >
          <div className="bg-black/60 text-white p-6 rounded-xl text-center w-full h-full flex flex-col justify-center items-center">
            <div className="text-3xl mb-4">
              <span className="inline-block text-red-500 mb-2">❤️</span>
              <p className="font-semibold leading-tight text-2xl ">
                {`Take action now! Your donation could be the reason someone
                survives a medical emergency.`}
              </p>
            </div>
            <p className="text-sm mb-4">
              {` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`}
            </p>
            <GeneralButton value={`Start Donate`}/>
          </div>
        </motion.div>
      </div>
    </div>
  );
}