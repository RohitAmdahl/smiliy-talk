"use server";

import { login, signup } from "@/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 border rounded-lg shadow-md">
      <div>
        <h1 className="text-3xl text-center">Log in</h1>

        <p className="text-center font-serif p-4">
          Login to get started, please enter your credentials
        </p>
      </div>
      <form className="space-y-6 font-sans">
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
          />
        </div>

        <div className="space-y-4">
          <Button
            formAction={login}
            type="submit"
            className="w-full text-lg tracking-wider"
          >
            Login
          </Button>
          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-slate-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-slate-300">
            or
          </div>
          <div className="text-center ">
            <a href="/signup">
              Do not have an account?
              <span className="underline hover:text-lg font-semibold px-3">
                Sign UP
              </span>
            </a>
          </div>

          {/* <Button
            formAction={signup}
            type="submit"
            variant="secondary"
            className="w-full text-lg tracking-wider"
          >
            Signup
          </Button> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
