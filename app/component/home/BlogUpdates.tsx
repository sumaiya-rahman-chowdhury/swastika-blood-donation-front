"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaFolder } from "react-icons/fa";

const blogPosts = [
  {
    title: "How Often Can You Donate Blood? A Complete Guide",
    date: "February 24, 2025",
    category: "Uncategorized",
    image:
      "https://donors.creedcreatives.net/image/cheerful-young-female-person-visiting-her-doctor-2023-11-27-05-36-14-utc.jpg",
  },
  {
    title: "Who Can Donate Blood? Eligibility & Requirements Explained",
    date: "February 24, 2025",
    category: "Uncategorized",
    image:
      "https://donors.creedcreatives.net/image/multiracial-doctor-in-white-coat-medical-mask-and-2024-11-07-22-07-16-utc.jpg",
  },
  {
    title: "Can Donating Blood Improve Your Health? Here's What Science Says",
    date: "February 24, 2025",
    category: "Health & Benefits",
    image:
      "https://donors.creedcreatives.net/image/blood-transfusion-2024-12-04-15-30-30-utc.jpg",
  },
];

const BlogUpdates = () => {
  const content = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo dignissim consequat viverra mi placerat libero. 
          Magnis justo phasellus mi metus, sollicitudin pretium fermentum erat.`;
  const tagLine = ` Stay Connected: News, Events & Blood Drive Updates
`;
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="text-center mb-10">
        <p className="text-red-600 font-medium">Latest Blog & Update</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 my-2">
          {tagLine}
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">{content}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-3 border-1 border-[#f3f3f3] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="relative w-[100%]  rounded-lg overflow-hidden">
              <motion.img
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.5 }}
                src={post.image}
                alt={post.title}
                className="object-fit-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-base mb-2">
                {post.title}
              </h3>
              <div className="flex items-center text-sm text-gray-400 gap-4 mb-2">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaFolder />
                  <span>{post.category}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Lorem ipsum odor amet, consectetur adipiscing elit. Vivamus quis
                nibh...
              </p>
              <a
                href="#"
                className="text-sm text-red-600 font-medium hover:underline flex items-center gap-1"
              >
                Read More <span>&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogUpdates;
