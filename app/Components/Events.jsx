import React from 'react'
import Image from 'next/image';
import { chescrypt, connectTech, cyberFundamentals, cybersiege, cybersiegeWorkshop, cyberstorm, digitalArt, etizazTalk, farewell, futsal, fypseminar, hackathon, humanFactors, iccws, recypher, webSecurity, introductory, cyberstorm2, cispa, welcome, bugBountyTalk, projectManagementCourse, cybHer, osint101, blueHorizon} from '../assets';

const events = [
  {
    id: 25,
    title:
      "Blue Horizon",
    imageUrl: blueHorizon,
    date: "March 07, 2024",
    datetime: "2024-03-07",
    Organizer: {
      name: "AUCSS",
    },
  },
  {
    id: 24,
    title:
      "OSINT-101 Workshop",
    imageUrl: osint101,
    date: "March 07, 2024",
    datetime: "2024-03-07",
    Organizer: {
      name: "AUCSS & AU Cyber Skills Club",
    },
  },
  {
    id: 23,
    title:
      "CybHer Sec",
    imageUrl: cybHer,
    date: "March 06, 2024",
    datetime: "2024-03-06",
    Organizer: {
      name: "AUCSS & AU Women Cyber Club",
    },
  },
  {
    id: 22,
    title:
      "Project Management Course",
    imageUrl: projectManagementCourse,
    date: "Feb 28, 2024",
    datetime: "2024-02-28",
    Organizer: {
      name: "AUCSS, ReCYPHER & Erasmas+",
    },
  },
  {
    id: 21,
    title:
      "The Art of Bug Bounty",
    imageUrl: bugBountyTalk,
    date: "Feb 27, 2024",
    datetime: "2024-02-27",
    Organizer: {
      name: "AUCSS",
    },
  },
  {
    id: 20,
    title: "Cyberstorm 2.0",
    imageUrl: cyberstorm2,
    date: "Dec 06, 2023",
    datetime: "2023-12-06",
    Organizer: {
      name: "AUCSS & AU Cyber Skills Club",
    },
  },
  {
    id: 19,
    title: "Batch 2023 Welcome Party",
    imageUrl: welcome,
    date: "Nov 26, 2023",
    datetime: "2023-11-26",
    Organizer: {
      name: "AUCSS",
    },
  },
  {
    id: 18,
    title: "CISPA Cyber Security Talks",
    imageUrl: cispa,
    date: "Oct 09, 2023",
    datetime: "2023-10-09",
    Organizer: {
      name: "AUCSS & CISPA",
    },
  },
  {
    id: 17,
    title: "Cybersecurity 101 Introductory Session",
    imageUrl: introductory,
    date: "Sep 25, 2023",
    datetime: "2023-09-25",
    Organizer: {
      name: "AUCSS & AU Cyber Skills Club",
    },
  },
  {
    id: 16,
    title: "Ethical Hacking  VOIP & Wireless Hacking Workshop",
    imageUrl: recypher,
    date: "September 15, 2023",
    datetime: "2023-09-13",
    Organizer: {
      name: "AUCSS & ReCYPHER & ERASMUS+",
    },
  },
  {
    id: 15,
    title: "Batch 2018 Farewell Party",
    imageUrl: farewell,
    date: "May 27, 2023",
    datetime: "2023-05-27",
    Organizer: {
      name: "AUCSS",
    },
  },
  {
    id: 14,
    title: "Etizaz Mohsin Tech Talk",
    imageUrl: etizazTalk,
    date: "May 8, 2023",
    datetime: "2023-05-08",
    Organizer: {
      name: "AUCSS",
    },
  },
  {
    id: 13,
    title: "Web Security Training",
    imageUrl: webSecurity,
    date: "May 5, 2023",
    datetime: "2023-05-05",
    Organizer: {
      name: "AU cyber skills club",
    },
  },
  {
    id: 12,
    title: "Digital Art Competition",
    imageUrl: digitalArt,
    date: "Mar 21, 2023",
    datetime: "2023-03-21",
    Organizer: {
      name: "AUCSS",
    },
  },
  {
    id: 11,
    title: "Futsal Matches",
    imageUrl: futsal,
    date: "Mar 20, 2023",
    datetime: "2023-03-20",
    Organizer: {
      name: "AUCSS",
    },
  },
  {
    id: 10,
    title: "CyberStorm",
    imageUrl: cyberstorm,
    date: "Mar 17, 2023",
    datetime: "2023-03-17",
    Organizer: {
      name: "AU cyber skills club",
    },
  },
  {
    id: 9,
    title: "Cyber Fundamentals",
    imageUrl: cyberFundamentals,
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    Organizer: {
      name: "AUCSS",
    },
  },
  {
    id: 8,
    title: "Connect Tech",
    imageUrl: connectTech,
    date: "Mar 10, 2023",
    datetime: "2023-03-10",
    Organizer: {
      name: "AUCSS & YPDC",
    },
  },
  {
    id: 7,
    title: "Chescrypt",
    imageUrl: chescrypt,
    date: "Mar 03, 2023",
    datetime: "2023-03-03",
    Organizer: {
      name: "AUCSS",
    },
  },
  {
    id: 6,
    title: "CyberSiege",
    imageUrl: cybersiege,
    date: "Feb 25, 2023",
    datetime: "2023-02-25",
    Organizer: {
      name: "AUCSS & AirOverflow",
    },
  },
  {
    id: 5,
    title: "CyberSiege Workshop",
    imageUrl: cybersiegeWorkshop,
    date: "Feb 24, 2023",
    datetime: "2023-02-24",
    Organizer: {
      name: "AUCSS & AirOverflow",
    },
  },
  {
    id: 4,
    title: "FYP Seminar",
    imageUrl: fypseminar,
    date: "Feb 8, 2023",
    datetime: "2023-02-08",
    Organizer: {
      name: "AUCSS & AirOverflow",
    },
  },
  {
    id: 3,
    title:
      "International Conference on Cyber Warfare and Security (ICCWS) 2022",
    imageUrl: iccws,
    date: "Dec 7, 2022",
    datetime: "2022-12-07",
    Organizer: {
      name: "NCCS",
    },
  },
  {
    id: 2,
    title: "Hackathon Training",
    imageUrl: hackathon,
    date: "Oct 1, 2022",
    datetime: "2022-03-17",
    Organizer: {
      name: "AUCSS",
    },
  },
  {
    id: 1,
    title:
      "International Conference on Human Factors in Cybersecurity (HFCS) 2022",
    imageUrl: humanFactors,
    date: "Sep 30, 2022",
    datetime: "2022-09-30",
    Organizer: {
      name: "NCCS & ReCYPHER",
    },
  },
];
const Events = () => {
  return (
    <section className="bg-white py-24 sm:py-32 font-montserrat" id='events'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navprimary sm:text-4xl">
            Events & Workshops
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            All the events organized and managed by AUCSS. This includes all the training sessions, workshops, and competitions.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={event.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={event.datetime} className="mr-8">
                  {event.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    {event.Organizer.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <span className="absolute inset-0" />
                {event.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events