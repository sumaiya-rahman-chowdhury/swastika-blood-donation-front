"use client";
// import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import GeneralButton from "@/app/component/button/GeneralButton";
import { useUser } from "@/context/AuthContext";

const Hero = () => {
  const {user} = useUser()
  console.log(user)
  const slideInLeft = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeOut" },
  };
  // const arrayofLogo: string[] = [
  //   "https://donors.creedcreatives.net/image/Logo-Ipsum-C.png",
  //   "https://donors.creedcreatives.net/image/Logo-Ipsum-C.png",
  //   "https://donors.creedcreatives.net/image/Logo-Ipsum-I.png",
  //   " https://donors.creedcreatives.net/image/Logo-Ipsum-C.png",
  //   "https://donors.creedcreatives.net/image/Logo-Ipsum-C.png",
  //   "https://donors.creedcreatives.net/image/Logo-Ipsum-I.png",
  // ];
  const content =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            aliquet lectus quisque, pulvinar ut augue fames quam. Id accumsan mi
            enim, vel platea gravida dictum morbi iaculis.`;
  return (
    <section
      className="relative h-screen bg-cover bg-center flex"
      style={{
        backgroundImage: `url('https://donors.creedcreatives.net/image/banner-1.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="relative pt-10 z-20 flex flex-col  justify-center h-screen px-6 md:px-20 text-white items-center">
        <motion.div {...slideInLeft} className="max-w-3xl">
          <motion.h1
            {...slideInLeft}
            className="text-3xl lg:text-7xl md:text-5xl font-bold mb-4 leading-snug"
          >
            Donate Blood, Keep the World Beating
          </motion.h1>
          <p className="text-lg mb-6">{content}</p>

          <div className="flex gap-4 mb-8">
            <GeneralButton
              value="Discover More"
              className="hover:bg-gray-400 text-black border-0"
            />
            <GeneralButton value="Start Donating" />
          </div>
        </motion.div>
        <div className="flex flex-wrap items-center gap-6 opacity-80 w-full mt-9"></div>
      </div>
    </section>
  );
};

export default Hero;
