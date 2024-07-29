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

const Login = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = () => {
    console.log("form", form.getValues());
  };

  return (
    <div className=" w-full max-w-md mx-auto container font-sans px-8 py-8 border-2 ">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
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
            Login
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
