import React from 'react'
import Image from 'next/image';
import { developers, creative, red_teaming, ctf_team, blue_teaming, awarenessclub, sportsMale, socialmedia, sportsFemale, women, photography, aucsc  } from '../assets';

const clubs = [
  {
    name: "Coding Club",
    leadName: "Lead: Mirza Areeb Baig",
    coLeadName: "Co-Lead: Mubahil Ahmad",
    imageUrl: developers,
  },
  {
    name: "Red Teaming",
    leadName: "Lead: Hamza Khattak",
    coLeadName: "Co-Lead: Farhan Ahmad",
    imageUrl: red_teaming,
  },
  {
    name: "Blue Teaming",
    leadName: "Lead: Furqan Ahmad",
    coLeadName: "Co-Lead: Arsham Munawar Gill",
    imageUrl: blue_teaming,
  },
  {
    name: "CTF Club",
    leadName: "Lead: Faizan Arshad",
    coLeadName: "Co-Lead: Syed Anas",
    imageUrl: ctf_team,
  },
  {
    name: "AU Cyber Skills Club",
    leadName: "Lead: Seemab Tariq",
    coLeadName: "Co-Lead: Kinza Malik",
    imageUrl: aucsc,
  },
  {
    name: "Research Club",
    leadName: "Lead: Bilal Saleem",
    coLeadName: "Co-Lead: Alishba Rehman",
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
    leadName: "Lead: Abdullah Farooq",
    coLeadName: "Co-Lead: Maymoona Naeem",
    imageUrl: awarenessclub,
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