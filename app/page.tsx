import { Button } from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import React from "react";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {recentSessions.map(
          (session) =>
            parseInt(session.id) < 4 &&  (
              <CompanionCard
                key={session.id}
                id={session.id}
                name={session.name}
                topic={session.topic}
                subject={session.subject}
                duration={session.duration}
                color={session.color}
              />
            )
        )}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed lessons"
          companions={recentSessions}
          classNames={"w-2/3 max-lg:w-full"}
        />
        <CTA></CTA>
      </section>
    </main>
  );
};

export default Page;
