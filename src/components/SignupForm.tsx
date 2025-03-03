"use client";

import React, { useState } from "react";
import Link from "next/link";
import Input from "./Input";
import Buttons from "./Button";
import { z } from "zod";
import Image from "next/image";

const signupSchema = z.object({
  lastName: z.string().min(1, "Le nom est requis"),
  firstName: z.string().min(1, "Le prénom est requis"),
  email: z.string().email("L'email n'est pas valide"),
  corp: z.string().min(1, "L'entreprise est requise"),
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .max(64, "Le mot de passe ne doit pas dépasser 64 caractères")
    .regex(/[a-z]/, "Le mot de passe doit contenir une lettre minuscule")
    .regex(/[A-Z]/, "Le mot de passe doit contenir une lettre majuscule")
    .regex(/\d/, "Le mot de passe doit contenir un chiffre")
    .regex(/[\W_]/, "Le mot de passe doit contenir un caractère spécial"),
});

type ErrorState = {
  [key: string]: string;
} | null;

const SignupForm = () => {
  const [error, setError] = useState<ErrorState>(null);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [corp, setCorp] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const validatedData = signupSchema.parse(data);

      const formDataToSubmit = new FormData();
      Object.entries(validatedData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value as string);
      });

    } catch (e) {
      if (e instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};

        e.errors.forEach((err) => {
          if (err.path[0] === "password") {
            fieldErrors[err.path[0]] = err.message;
          } else {
            fieldErrors["general"] = "Tous les champs sont requis";
          }
        });

        setError(fieldErrors);
      }
    }
  };

  return (
    <div className="mx-4 sm:mx-0">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div>
          <Input
            label="Nom"
            type="text"
            placeholder="Nom"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(value) => setLastName(value)}
            isRequired
          />
        </div>

        <div>
          <Input
            label="Prénom"
            type="text"
            placeholder="Prénom"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(value) => setFirstName(value)}
            isRequired
          />
        </div>

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
        <div>
          <Input
            label="Entreprise"
            type="text"
            placeholder="Entreprise"
            id="corp"
            name="corp"
            value={corp}
            onChange={(value) => setCorp(value)}
            isRequired
          />
        </div>
        <div>
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
          {error?.password && !error?.general && (
            <div className="flex gap-2 items-center justify-start mt-2">
              <Image
                src="/warning.png"
                alt="warning icon"
                width={20}
                height={20}
              />
              <p className="text-text text-xs text-right">{error.password}</p>
            </div>
          )}
        </div>

        {error?.general && (
          <div className="flex gap-2 items-center justify-center mt-2">
            <Image
              src="/warning.png"
              alt="warning icon"
              width={20}
              height={20}
            />
            <p className="text-text text-xs text-right">{error.general}</p>
          </div>
        )}

        <div className="mt-4">
          <Buttons label="S'inscrire" className="w-full" />
        </div>

        <p className="text-center text-text">
          Déjà inscrit ? <Link href="/sign-in">Se connecter</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
