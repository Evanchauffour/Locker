import SignupForm from "@/components/SignupForm";
import React from "react";

const SignUp = async () => {
  return (
    <div className="w-full flex justify-center items-center my-auto h-screen">
      <section className="flex flex-col w-full sm:w-[400px] justify-center">
        <h1 className="text-4xl w-full text-center mb-6 text-text font-poppins font-bold">
          S&apos;inscrire
        </h1>
        <SignupForm />
      </section>
    </div>
  );
};

export default SignUp;
