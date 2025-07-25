import CompanionForm from "@/components/CompanionForm";
import React from "react";



const NewCompanion = () => {
  return (
    <div className="min-md:w-2/3 min-lg:w-1/3 flex flex-col mx-auto gap-4">
      <h2 className="text-2xl font-bold">Companion Builder</h2>
      <CompanionForm />
    </div>
  );
};

export default NewCompanion;
