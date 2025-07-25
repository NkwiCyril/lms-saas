import { LoginForm } from "@/components/login-form";
import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <main className="bg-background flex mt-20 flex-col items-center justify-center gap-6 p-6 md:p-10">
      <SignIn />
    </main>
  );
};

export default Page;
