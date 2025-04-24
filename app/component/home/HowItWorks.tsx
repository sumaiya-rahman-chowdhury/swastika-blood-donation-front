"use client";

import { FaPlay } from "react-icons/fa";
import HowItWorksSection from "@/app/component/home/HowItWorksSection ";
import GeneralButton from "@/app/component/button/GeneralButton";
import { useState } from "react";
import VideoModal from "@/app/component/home/VideoModal";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation";
import Image from "next/image";

function HowItWorks() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="bg-[#1d1d1d] ">
      <HowItWorksSection />
      <motion.div
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="relative px-10 mx-auto rounded-lg overflow-hidden h-[450px] mb-10 max-w-[96%]"
      >
        {/* Background image */}
        <Image
          fill
          src="https://donors.creedcreatives.net/image/banner-1.jpg"
          alt="Video"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10 px-10">
          {/* If you want padding on content inside, wrap content inside this */}
        </div>

        {/* Content on top */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center">
          <GeneralButton
            value={<FaPlay />}
            onClick={() => setShowVideo(true)}
            className="cursor-pointer w-[70px] h-[70px] rounded-full"
          />
          <p className="text-white font-semibold mt-4">Watch Our Story</p>
          <VideoModal showVideo={showVideo} setShowVideo={setShowVideo} />
        </div>
      </motion.div>
    </div>
  );
}

export default HowItWorks;