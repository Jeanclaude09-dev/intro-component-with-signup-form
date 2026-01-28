"use client";

import * as React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { signupSchema } from "@/schemas/sign-up";

export default function Form() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Form submitted:", values);
      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // Helper string to keep code clean.
  // This removes the default ring and forces the red border on focus when invalid.
  const errorStyles =
    "border-red-400 p-6 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-red-400";
  const normalStyles =
    "border-gray-900 p-6 outline-purple-700 focus-visible:ring-0 focus-visible:ring-offset-0 ";

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-lg shadow-[0px_6px_2px_rgba(0,0,0,0.15)]"
    >
      <FieldGroup className="flex flex-col gap-5">
        {/* First Name */}
        <Controller
          name="firstName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="firstName" className="sr-only">
                First name
              </FieldLabel>
              <Input
                {...field}
                id="firstName"
                placeholder="First name"
                aria-invalid={fieldState.invalid}
                className={fieldState.invalid ? errorStyles : normalStyles}
              />
              {fieldState.invalid && (
                <FieldError
                  className="text-red-400"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        {/* Last Name */}
        <Controller
          name="lastName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="lastName" className="sr-only">
                Last name
              </FieldLabel>
              <Input
                {...field}
                id="lastName"
                placeholder="Last name"
                aria-invalid={fieldState.invalid}
                className={fieldState.invalid ? errorStyles : normalStyles}
              />
              {fieldState.invalid && (
                <FieldError
                  className="text-red-400 itelic"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email" className="sr-only">
                Email
              </FieldLabel>
              <Input
                {...field}
                id="email"
                placeholder="Email Address"
                aria-invalid={fieldState.invalid}
                className={fieldState.invalid ? errorStyles : normalStyles}
              />
              {fieldState.invalid && (
                <FieldError
                  className="text-red-400 italic"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password" className="sr-only">
                Password
              </FieldLabel>
              <Input
                {...field}
                id="password"
                type="password"
                placeholder="Password"
                aria-invalid={fieldState.invalid}
                className={fieldState.invalid ? errorStyles : normalStyles}
              />
              {fieldState.invalid && (
                <FieldError
                  className="text-red-400 italic"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        <button
          type="submit"
          className="bg-green-400 hover:bg-green-400/80 transition-colors duration-200 shadow-[0px_5px_2px_rgba(0,0,0,0.1)] p-4 rounded-lg text-white uppercase font-bold cursor-pointer tracking-wider"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center gap-2 justify-center">
              <LoaderCircle className="animate-spin" />
              Claiming
            </div>
          ) : (
            "Claim your free trial"
          )}
        </button>
      </FieldGroup>

      <p className="text-center text-gray-900/50 mt-2">
        By clicking the button, you are agreeing to our{" "}
        <a href="#" className="text-red-400 font-semibold cursor-pointer">
          Terms and Services
        </a>
      </p>
    </form>
  );
}
