import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

type WhatWeDoSectionProps = {
  title: string;
  image: string;
  content: string;
  list: string[];
};

export default function WhatWeDoSection({
  title,
  image,
  content,
  list,
}: WhatWeDoSectionProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 bg-white rounded-xl shadow-sm">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <div className="w-16 h-1 bg-red-600 mb-4"></div>
        <p className="text-gray-600 mb-6">{content}</p>
        <ul className="space-y-2 text-gray-700 mb-6">
          {list.map((text, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaAngleRight className="text-red-600 mt-1" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="inline-flex items-center text-red-600 hover:underline font-medium transition"
        >
          Learn More <FaAngleRight className="ml-2" />
        </a>
      </div>

      {/* Right Image */}
      <div className="relative md:w-1/2 h-74">
        <Image
          fill
          src={image}
          alt={title}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
    </section>
  );
}
