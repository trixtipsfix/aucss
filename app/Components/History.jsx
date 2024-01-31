import React from 'react'
import Image from 'next/image';
import { au, aucss, cys, kashif } from '../assets';

const History = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32 font-montserrat"
      id="history"
    >
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#195294] to-[#6dd5ed] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navprimary sm:text-4xl">
            Our History
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            {`AUCSS came into being in February 2020 as the Pakistan's first ever cyber security society at the academic level. This great initiative was took by Dr. Kashif Kifayat, Dean Faculty of Computing & Artificial Intelligence, Air University.`}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
              />
            </svg>
            <figure className="border-l border-[#195294] pl-8">
              <div className="rounded-2xl bg-trans px-8 py-10 text-center">
                <Image
                  className="mx-auto h-60 w-60 md:h-60 md:w-50 rounded-full object-cover"
                  src={kashif}
                  alt=""
                  width={500}
                  height={500}
                />
                <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-800">
                  Dr. Kashif Kifayat
                </h3>
                <p className="text-sm leading-6 text-gray-700">
                  Founder AUCSS & Director NCCS
                </p>
              </div>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              Since then, the AUCSS has been working under a diligent leadership
              of professional mentors to achieve its vision to be a cyber
              security leader.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-4">
                <Image
                  src={au}
                  alt="air university"
                  width={140}
                  height={120}
                  priority
                />
                <Image
                  src={cys}
                  alt="cyber security department"
                  width={100}
                  height={100}
                  priority
                />
                <Image
                  src={aucss}
                  alt="air university cyber security society"
                  width={100}
                  height={100}
                  priority
                />
              </li>
            </ul>
            <p className="mt-8">
              {`Since it's formation, AUCSS has proved to be a remarkable achievement at the educational level. It is playing a vital role in bridging the gap between the professional industry and the academia by organizing events such as seminars, guest talks, workshops, conferences and much more.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History