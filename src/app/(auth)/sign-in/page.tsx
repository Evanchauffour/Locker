import LoginForm from "@/components/LoginForm";
import React from "react";

const SignIn = async () => {
  return (
    <div className="w-full flex justify-center items-center my-auto h-screen">
      <section className="flex flex-col w-full sm:w-[400px] justify-center">
        <h1 className="text-4xl w-full text-center mb-6 text-text font-poppins font-bold">
          Se connecter
        </h1>
        <LoginForm />
      </section>
    </div>
  );
};

export default SignIn;
