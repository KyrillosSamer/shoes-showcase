"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { User, Lock } from "lucide-react";
import { Container, Button, IconLink } from "@/shared/ui";

const providers = [
  { label: "Continue with Google", src: "/images/google.png" },
  { label: "Continue with Facebook", src: "/images/facebook.png" },
  { label: "Continue with Twitter", src: "/images/twitter.png" },
];

/**
 * Client component: needs local state for the controlled inputs.
 * Note the original markup used `type="text"` for the password field --
 * fixed here to `type="password"` since that was a genuine bug, not an
 * intentional design choice.
 */
export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend wired up yet -- this preserves the original's
    // "submit does nothing" behaviour while giving real form semantics.
  }

  return (
    <section
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: "url(/images/loging_bg.png)" }}
    >
      <Container className="flex flex-wrap items-center justify-around gap-10">
        <div className="w-full max-w-xl">
          <Image
            src="/images/logshoes.png"
            alt=""
            width={650}
            height={650}
            className="h-auto w-full"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-lg bg-white/90 p-8 shadow-sm"
        >
          <h2 className="mb-6 text-center text-3xl font-bold">Welcome Back!</h2>

          <label htmlFor="username" className="mb-1 block text-sm">
            User Name
          </label>
          <div className="mb-4 flex items-center gap-3 rounded-md border-2 border-brand-purple px-3">
            <User className="h-4 w-4 shrink-0 text-brand-pink" aria-hidden="true" />
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="User Name"
              className="w-full py-2.5 text-sm outline-none"
              autoComplete="username"
            />
          </div>

          <label htmlFor="password" className="mb-1 block text-sm">
            Password
          </label>
          <div className="mb-2 flex items-center gap-3 rounded-md border-2 border-brand-purple px-3">
            <Lock className="h-4 w-4 shrink-0 text-brand-pink" aria-hidden="true" />
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full py-2.5 text-sm outline-none"
              autoComplete="current-password"
            />
          </div>

          <a href="#" className="mb-3 block text-right text-sm">
            Forgot Password?
          </a>

          <Button type="submit" className="w-full">
            Login
          </Button>

          <div className="mt-5 flex items-center justify-center gap-3">
            {providers.map((provider) => (
              <IconLink
                key={provider.label}
                href="#"
                label={provider.label}
                size="sm"
                icon={
                  <Image src={provider.src} alt="" width={20} height={20} className="h-5 w-5" />
                }
              />
            ))}
          </div>
        </form>
      </Container>
    </section>
  );
}
