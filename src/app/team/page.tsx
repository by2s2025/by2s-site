import React from "react";
import { team } from "@/content/team";
import Image from "next/image";

const TeamPage = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent text-center">
          Meet Our Team
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Dedicated students and leaders bridging generations and cultures through compassion and creativity.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={112}
                height={112}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-teal-100"
              />
              <div className="font-bold text-xl mb-1 text-gray-900">{member.name}</div>
              <div className="text-teal-700 font-medium mb-2">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage; 