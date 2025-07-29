"use client";

import CompanionCard from "@/components/CompanionCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { recentSessions, subjects } from "@/constants";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

// change into an async function to fetch data from the server
// Include search params as a parameter in the function
// Check if filter by search or filter by topic has been applied and get
// Insert into the getAllCompanions function to fetch the data
const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({subject, topic});

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="space-y-8">
        {/* Header Section */}
        <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Companion Library</h1>
          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search your companions..."
                onChange={() => {}}
                className="pl-10 w-full sm:w-64"
              />
            </div>

            {/* Subject Filter */}
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem
                    key={subject}
                    value={subject}
                    className="capitalize"
                  >
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Companions Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))}
        </section>
      </article>
    </main>
  );
};

export default CompanionsLibrary;
