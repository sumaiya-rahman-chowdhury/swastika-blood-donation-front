"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatWeDoSection from "@/app/component/home/WhatWeDoSection";
import { myAnimation, sectionVariants } from "@/animation";

function WhatWeDo() {
  const [preview, setPreview] = useState<string | null>("blood");
  const type: string[] = ["blood", "bank", "health"];
  const list: string[] = [
    "Faucibus ante lectus arcu feugiat.",
    "Pellentesque diam varius vulputate.",
    "Ipsum magnis habitasse consequat.",
    "Massa habitant hac dis ac efficitur.",
  ];
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravidadis inceptos turpis aliquet leo cursus. Conubia hac finibuscondimentum nullam pretium interdum eget venenatis vulputate.Class erat mi netus rhoncus potenti mus.";

  return (
    <div className="bg-red-50 p-6">
      <div className="w-full p-6 ">
        <h5 className="text-red-500">What We Do</h5>
        <div className="lg:flex md:flex justify-center items-center my-5">
          <h3 className="text-5xl font-bold">
            The Lifesaving Work We Do for Communities in Need
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis orci ac interdum facilisi. Odio amet ante ante augue lacus
            suscipit. Parturient tincidunt erat finibus duis sapien consectetur
            scelerisque
          </p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6  ">
          {type.map((item, index) => {
            const isActive = preview === item;
            return (
              <motion.button
                whileTap={"tap"}
                whileHover={"hover"}
                whileFocus={"focus"}
                whileInView={"inView"}
                variants={myAnimation}
                key={index}
                onClick={() => setPreview(item)}
                className={`mt-3 w-auto shadow-lg font-semibold py-2 px-5 rounded-lg border transition
                ${
                  isActive
                    ? "bg-red-800 text-white border-red-800"
                    : "bg-gray-200 text-black border-gray-300"
                }
              `}
              >
                {item === "blood"
                  ? "Blood Donation"
                  : item === "bank"
                  ? "Blood Bank"
                  : "Health Checkup"}
              </motion.button>
            );
          })}
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }} 
        variants={{
          hidden: { opacity: 0, y: -50 },
          inView: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: "easeOut", delay: 0.2 },
          },
        }}
      >
        <AnimatePresence mode="wait">
          {preview === "blood" && (
            <motion.div
              key="blood"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={sectionVariants}
            >
              <WhatWeDoSection
                title="Blood Donation"
                image="https://donors.creedcreatives.net/image/young-woman-making-blood-donation-in-hospital-blo-2023-11-27-05-26-07-utc.jpg"
                content={content}
                list={list}
              />
            </motion.div>
          )}

          {preview === "bank" && (
            <motion.div
              key="bank"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={sectionVariants}
            >
              <WhatWeDoSection
                title="Blood Bank"
                image="https://donors.creedcreatives.net/image/blood-donation-nurse-2023-11-27-05-04-42-utc.jpg"
                content={content}
                list={list}
              />
            </motion.div>
          )}

          {preview === "health" && (
            <motion.div
              key="health"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={sectionVariants}
            >
              <WhatWeDoSection
                title="Health Checkup"
                image="https://donors.creedcreatives.net/image/young-woman-making-blood-donation-in-hospital-blo-2023-11-27-05-26-07-utc.jpg"
                content={content}
                list={list}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default WhatWeDo;