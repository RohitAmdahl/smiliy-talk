"use server";

import { login, signup } from "@/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const signUp = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 border rounded-lg shadow-md ">
      <div>
        <h1 className="text-3xl text-center ">Sign Up</h1>

        <p className="text-center font-serif p-4">
          Sign up to get started, please enter your credentials
        </p>
      </div>
      <form className="space-y-6 font-sans">
        <div>
          <label htmlFor="name" className=" text-lg">
            Name:
          </label>
          <Input
            id="email"
            name="name"
            type="name"
            required
            placeholder="Enter your name"
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg">
            Email:
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-lg">
            Password:
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Enter your password"
            className="mt-1 block w-full"
            pattern=""
          />
        </div>

        <div className="space-y-4">
          {/* <Button
            formAction={login}
            type="submit"
            className="w-full text-lg tracking-wider"
          >
            Login
          </Button> */}

          <Button
            formAction={signup}
            type="submit"
            className="w-full text-lg tracking-wider"
          >
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default signUp;
