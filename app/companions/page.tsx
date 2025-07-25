import CompanionCard from "@/components/CompanionCard";
import { recentSessions, subjects } from "@/constants";
import Image from "next/image";
import React from "react";

const CompanionsLibrary = () => {
  return (
    <main>
      <article>
        <section className="flex items-center justify-between mb-8">
          <h1>Companion Library</h1>
          <div className="flex items-center justify-center space-x-7">
            <div className=" border-1 border-black rounded flex items-center gap-2 px-3 py-2">
              <Image
                src="icons/search.svg"
                alt="search for companions"
                width={15}
                height={15}
                color="#000000"
              />
              <input
                type="text"
                placeholder="Search your companions..."
                className="border-0 focus:outline-none w-64"
              />
            </div>
            <select
              name=""
              id=""
              className="border-1 border-black rounded px-3 py-2"
            >
              <option value="">Select subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject} className="capitalize">
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section className="grid grid-cols-3 gap-5">
          {recentSessions.map((session) => (
            <CompanionCard
              key={session.id}
              id={session.id}
              name={session.name}
              topic={session.topic}
              subject={session.subject}
              duration={session.duration}
              color={session.color}
            />
          ))}
        </section>
      </article>
    </main>
  );
};

export default CompanionsLibrary;
