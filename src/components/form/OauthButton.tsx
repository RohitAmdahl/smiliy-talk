"use client";

import { signIn } from "next-auth/react"; // Import signIn
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const OauthButton = () => {
  // Handler for OAuth login
  const handleLogin = (provider: string) => {
    signIn(provider, { callbackUrl: "/dashbord" }); // Redirect to dashboard after login
  };

  return (
    <div className="pb-4">
      <div className="flex justify-center items-center gap-4">
        <Button
          className="w-full flex gap-3"
          variant="default"
          type="button" // Change to button type
          onClick={() => handleLogin("google")} // Trigger signIn with Google
        >
          <FcGoogle size={25} />
          Login with Google
        </Button>
        <Button
          className="w-full flex gap-3"
          variant="default"
          type="button" // Change to button type
          onClick={() => handleLogin("github")} // Trigger signIn with GitHub
        >
          <FaGithub size={25} />
          Login with Github
        </Button>
      </div>
    </div>
  );
};

export default OauthButton;
