"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animation";
import Image from "next/image";
const TestimonialsSection = () => {
  return (
    <section className="bg-rose-50 py-16 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Box */}
        <div className="bg-red-700 text-white rounded-xl flex flex-col justify-between w-full lg:w-1/2 p-6">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <p className="text-rose-200 font-medium mb-2">Testimonials</p>
            <motion.h2
              initial="hidden"
              whileInView="inView"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight"
            >
              Lives Changed: Testimonials from Donors & Survivors
            </motion.h2>
            <p className="text-rose-100 max-w-full sm:max-w-3xl text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis
              egestas pretium sapien sit inceptos penatibus platea.
            </p>
          </div>
          {/* Testimonial Card */}
          <div className="bg-red-600 p-4 sm:p-6 rounded-xl">
            <h3 className="font-semibold mb-2 text-white text-lg">
              A Gift of Life When I Needed it Most
            </h3>
            <p className="text-rose-100 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis in
              purus porta non ut non aenean. Faucibus sollicitudin magnis
              tristique.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                <Image
                  fill
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Rebecca Sovine"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-white text-sm sm:text-base">
                  Rebecca Sovine
                </p>
                <p className="text-rose-200 text-xs sm:text-sm">
                  Blood Recipient
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md w-full lg:w-1/2 flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
              <Image
                fill
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Edward Collin"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                Edward Collin
              </p>
              <p className="text-sm text-red-600">Regular Blood Donor</p>
            </div>
          </div>
          <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
            <Image
              fill
              src="https://donors.creedcreatives.net/image/redhead-volunteer-with-transfusion-set-squeezing-r-2024-11-15-06-09-45-utc.jpg"
              alt="Testimonial"
              className="object-cover"
            />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2 text-lg sm:text-xl">
            “A Simple Act, A Life Saved”
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis in
            purus porta non ut non aenean. Faucibus sollicitudin magnis
            tristique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
