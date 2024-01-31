import React from "react";


const stats = [
  {
    id: 1,
    name: "Our Vision",
    desc: "Excellence & leadership in the cyber security education, professions, and research at the local, national, and international levels. a dedication to efficiently addressing society's demands",
  },
  {
    id: 2,
    name: "Our Mission",
    desc: "To empower the academia as a leading cyber security society and produce world-class cyber security professionals to protect the global cyber-space.",
  },
  { id: 3, name: "Our Core Values", desc: "Security | Privacy | Fairness | Accountability" },
];

const Vision = () => {
  return (
    <div className="text-white py-24 sm:py-32 font-montserrat bg-vision">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-wide md:text-4xl">
              What we stand for
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-12  rounded-2xl text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col p-8 py-2 rounded-xl hover:scale-110 ease-in duration-200"
              >
                <dt className="text-sm font-normal leading-6 p-2">
                  {stat.desc}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {stat.name}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Vision;
