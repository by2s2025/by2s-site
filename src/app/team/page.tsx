import React from "react";
import { teamStudentLeaders } from "@/content/teamStudentLeaders";
import { teamProgramAdvisors } from "@/content/teamProgramAdvisors";
import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";

// Type for program advisors with optional buttonText
type ProgramAdvisor = {
  name: string;
  role: string;
  image: string;
  hasContact?: boolean;
  contactLink?: string;
  externalLink?: string;
  buttonText?: string;
};

const TeamPage = () => {
  return (
    <section className="pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent text-center">
          Meet Our Team
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Dedicated students and leaders bridging generations and cultures through compassion and creativity.
        </p>

        {/* Student Leaders Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent text-center">
            Student Leaders
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Meet the passionate students driving our programs and initiatives across the globe.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {teamStudentLeaders.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-teal-100"
                />
                <div className="font-bold text-xl mb-1 text-gray-900">{member.name}</div>
                <div className="text-teal-700 font-medium mb-1">{member.role}</div>
                <div className="text-gray-600 text-sm">{member.location}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Break */}
        <div className="w-24 h-1 bg-gradient-to-r from-gray-200 to-gray-300 mx-auto mb-12"></div>

        {/* Program Advisors Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent text-center">
            Program Advisors
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Generous professionals sharing their expertise to support our student-led mission.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {teamProgramAdvisors.map((member: ProgramAdvisor, idx) => (
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
                {member.hasContact && member.contactLink && (
                  <a href={member.contactLink}>
                    <button className="mt-2 px-3 py-1.5 bg-teal-600 text-white rounded hover:bg-teal-700 transition flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4" />
                      Contact
                    </button>
                  </a>
                )}
                {member.externalLink && (
                  <a href={member.externalLink} target="_blank" rel="noopener noreferrer">
                    <button className="mt-2 px-3 py-1.5 bg-pink-600 text-white rounded hover:bg-pink-700 transition flex items-center gap-2 text-sm">
                      <ExternalLink className="w-4 h-4" />
                      {member.buttonText || "Website"}
                    </button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage; 