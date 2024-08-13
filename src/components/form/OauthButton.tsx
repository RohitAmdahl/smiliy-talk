"use client";

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { doSocialLogin } from "@/app/actions";

const OauthButton = () => {
  return (
    <form className="pb-4" action={doSocialLogin}>
      <div className="flex justify-center items-center gap-4">
        <Button
          className="w-full flex gap-3"
          variant="default"
          type="submit"
          value="google"
          name="action"
        >
          <FcGoogle size={25} />
          Login with Google
        </Button>
        <Button
          className="w-full flex gap-3"
          variant="default"
          type="submit"
          value="github"
          name="action"
        >
          <FaGithub size={25} />
          Login with Github
        </Button>
      </div>
    </form>
  );
};

export default OauthButton;
