import React from 'react'
import Image from 'next/image';
import { developers, creative, awareness, sportsMale, socialmedia, sportsFemale, women, photography, aucsc  } from '../assets';

const clubs = [
  {
    name: "Developers Club",
    leadName: "Lead: Muhammad Zain Ul Abideen",
    coLeadName: "Co-Lead: Aeraf Ali",
    imageUrl: developers,
  },
  {
    name: "AU Cyber Skills Club",
    leadName: "Lead: Saif ur Rehman Abbasi",
    coLeadName: "Co-Lead: Abdullah Tufail",
    imageUrl: aucsc,
  },
  {
    name: "Creative Club",
    leadName: "Lead: Shamaim Zehra",
    imageUrl: creative,
  },
  {
    name: "Social Media Club",
    leadName: "Leads: Basma Khalid",
    imageUrl: socialmedia,
  },
  {
    name: "Photography Club",
    leadName: "Lead: Ahmed Mehmood",
    imageUrl: photography,
  },
  {
    name: "Women's Club",
    leadName: "Lead: Misha Sohail",
    imageUrl: women,
  },
  {
    name: "Sports Club (Female)",
    leadName: "Lead: Eman Malik",
    imageUrl: sportsFemale,
  },
  {
    name: "Awareness Club",
    leadName: "Lead: Muhammad Hamza",
    imageUrl: awareness,
  },
  {
    name: "Sports Club (Male)",
    leadName: "Lead: Jawad Aftab",
    imageUrl: sportsMale,
  },
];
const Clubs = () => {
  return (
    <section className="bg-white py-24 sm:py-32 font-montserrat" id="clubs">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-wide text-navprimary md:text-4xl">
            Our Clubs
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our society consists of 9 clubs, each of which is led by a club
            lead.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {clubs.map((club) => (
            <li key={club.name}>
              <Image
                className="aspect-[2/2] w-full rounded-2xl object-cover"
                src={club.imageUrl}
                alt=""
                width={500}
                height={500}
              />
              <h3 className="mt-6 text-xl font-semibold leading-8 tracking-tight text-navprimary">
                {club.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{club.leadName}</p>
              <p className="text-base leading-7 text-gray-600">{club.coLeadName}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Clubs