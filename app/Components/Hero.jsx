'use client';
import React from "react";
import Image from "next/image";
import { hero  } from "../assets";
import { motion } from "framer-motion";



const Hero = () => {


  return (
    <div className="bg-white font-montserrat">
      <div className="relative isolate pt-14">
        <svg
          className="absolute inset-0 z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-16 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <span className="px-3 py-1 text-sm font-semibold leading-6 text-[#195294] rounded-full bg-[#6dd5ed]/10 ring-1 ring-inset ring-[#195294]/20">
              2023-2024 Session
            </span>
            <h1 className="mt-10 pb-6 max-w-lg text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#195294] to-[#6dd5ed] sm:text-6xl">
              Air University Cyber Security Society
            </h1>
            <p className="mt-6 text-xl leading-8 font-medium text-gray-800">
              We are a team of talented students making a change.
            </p>
          </div>
          <motion.div
            className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow lg:pl-16"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={hero} alt="hero-img" priority />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



   
          