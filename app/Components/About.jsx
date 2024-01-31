import React from "react";
import Image from "next/image";
import { about } from "../assets";

const About = () => {
  return (
    <section
      className="w-full bg-white py-16 px-4 mb-10 font-montserrat"
      id="about"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6">
        <Image
          className="w-[550px] mx-auto my-4 rounded-3xl object-cover border border-gray-200 shadow-2xl"
          src={about}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left">
            <h1 className="md:text-4xl sm:text-3xl text-2xl py-6 font-semibold text-navprimary">
              About us
            </h1>
            <div className="p-8 rounded-xl shadow-2xl text-center md:text-left hover:scale-95 ease-in duration-200">
              <p>{`Air University Cyber Security Society is a subordinate body working in collaboration with the Air University and the Department of Cyber Security.
                AUCSS is headed by the President, co-headed by the Vice President and managed by the General Secretery. The society comprises of four teams i.e. Technical Team, Management Team, Media Team and Security Team.
                Alongside this, AUCSS has eight clubs, each having it's own objectives. Each team and club is headed by a Team Head and a Co-Head, appointed by the President and the core committee.`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
