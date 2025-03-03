"use client";
import React, { useState } from "react";
import Link from "next/link";
import Input from "./Input";
import Buttons from "./Button";
import { z } from "zod";
import Image from "next/image";

const loginSchema = z.object({
  email: z.string().email("L'email est requis"),
  password: z.string().min(1, "Le mot de passe est requis"),
});

type ErrorState = {
  [key: string]: string;
} | null;

const LoginForm = () => {
  const [error, setError] = useState<ErrorState>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const formDataObject = Object.fromEntries(formData.entries());

      loginSchema.parse(formDataObject);
    } catch (e) {
      if (e instanceof z.ZodError) {
        setError({ general: "Tous les champs sont requis" });
      }
    }
  };

  return (
    <div className="mx-4 lg:mx-0">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div>
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={(value) => setEmail(value)}
            isRequired
          />
        </div>
        <div className="w-full flex flex-col gap-2 items-end">
          <div className="w-full">
            <Input
              label="Mot de passe"
              type="password"
              placeholder="Mot de passe"
              id="password"
              name="password"
              value={password}
              onChange={(value) => setPassword(value)}
              isRequired
            />
          </div>
          <Link href="/forgot-password" className="text-text text-sm">
            Mot de passe oublié ?
          </Link>
        </div>
        {error?.general && (
          <div className="flex gap-2 items-center justify-center mt-2">
            <Image
              src="/warning.png"
              alt="warning icon"
              width={20}
              height={20}
            />
            <p className="text-text text-xs">{error.general}</p>
          </div>
        )}
        <div className="mt-4">
          <Buttons label="Se connecter" className="w-full" />
        </div>
        <p className="text-center text-text">
          Pas de compte ? <Link href="/sign-up">S&apos;inscrire</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
