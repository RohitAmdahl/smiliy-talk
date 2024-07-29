"use client";

import { useForm, FormProvider } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(2, {
      message: "email is required.",
    })
    .email(" Invalid email."),
  password: z
    .string()
    .min(2, "Password is required.")
    .max(8, "Password must be less than 8 characters."),
});

const Signup = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = () => {
    console.log("form", form.getValues());
  };

  return (
    <div className="mt-8">
      <div>
        <h1 className="text-3xl text-center">
          Get started with Smiliy-Talk account
        </h1>
        <p className="text-center font-serif p-4">
          Sign up for free to get started
        </p>
      </div>
      <div className=" w-full max-w-md mx-auto container font-sans px-8 py-8 border-2 ">
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" variant="default" type="submit">
              Sign-in
            </Button>
          </form>
        </FormProvider>
        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-slate-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-slate-300">
          or
        </div>
        <p className="flex gap-3 justify-center items-center">
          Already have an account?
          <Link className="font-bold text-xl hover:underline" href="/log-in">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
