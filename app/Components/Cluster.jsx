import React from 'react'
import Image from 'next/image';
import { abdulwali, cg, cyberquest, cyseckarachi, fucsc, isqtc, sheclub, ueit, uet, uetp, csc, ist } from '../assets';

const Cluster = () => {
  return (
    <section className="bg-white py-24 sm:py-32 font-montserrat" id='cluster'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold leading-8 text-navprimary sm:text-4xl">
          Our cluster
        </h2>
        <p className="mt-6 text-lg leading-8 text-center">
          All the clubs and societies of associated with AUCSS.
        </p>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <Image
            className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
            src={isqtc}
            alt="isqtc"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
            src={uetp}
            alt="uetp cyber security engineers club"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
            src={cg}
            alt="cyber guardians"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-18 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={uet}
            alt="uet cyber security society"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={ueit}
            alt="ueit cyber security club"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={sheclub}
            alt="cybersec she club"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={cyseckarachi}
            alt="cyber security karachi"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={fucsc}
            alt="foundation university cyber security club"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={csc}
            alt="nutech cyber security club"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={cyberquest}
            alt="cyber quest"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={abdulwali}
            alt="abdul wali khan university mardan"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={ist}
            alt="instiute of space technology"
            width={158}
            height={48}
          />
        </div>
      </div>
    </section>
  );
}

export default Cluster