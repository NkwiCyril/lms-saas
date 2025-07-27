import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const NewCompanion = async () => {
  const { userId } = await auth();
  
  if (!userId) {
    return redirect("/sign-in");
  }

  return (
    <div className="min-md:w-2/3 min-lg:w-1/3 flex flex-col mx-auto gap-4">
      <h2 className="text-2xl font-bold">Companion Builder</h2>
      <CompanionForm />
    </div>
  );
};

export default NewCompanion;
