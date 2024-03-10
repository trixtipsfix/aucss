import React from 'react';
import Image from 'next/image';
import { aucss } from '../assets';

const Airange = () => {
  return (
    <section className="relative bg-gray-800 text-white py-24 sm:py-32 font-montserrat" id="airange">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Exclusive CTF Platform - AIRange
          </h1>
          <p className="mt-6 text-xl leading-8">
            Enter the weekly Cybersecurity Challenge, an esteemed Jeopardy-style Capture The Flag (CTF) platform proudly presented by the Air University Cyber Security Society, under the leadership of Head, Hamza Haroon. Engage in a dynamic environment where fresh challenges are unveiled each week. Join us to cultivate your cybersecurity acumen, interact with fellow enthusiasts, and vie for top honors on the leaderboard.
          </p>
        </div>
        <div className="mx-auto mt-16 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:max-w-4xl lg:mt-10">
          {/* <div className="max-w-xl text-base leading-7 text-gray-700 lg:order-last lg:pl-10">
            <Image
              src={aucss}
              alt="AUCSS"
              width={140}
              height={120}
              priority
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Airange;
