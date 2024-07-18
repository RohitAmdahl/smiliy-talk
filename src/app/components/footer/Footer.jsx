import React from "react";

const Footer = () => {
  return (
    <footer className="tracking-wider text-lg font-bold">
      <div className="border-t max-w-7xl container mt-3">
        <p className="pt-8 text-lg">© 2023 Smiliy-Talk, All rights reserved.</p>
        <p>Made with ❤️ by Rohit</p>
        <div className="">
          <a
            className="hover:underline duration-100 ease-in-out"
            href="https://docs.simli.com/"
          >
            Simli Docs{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
