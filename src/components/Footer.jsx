import React from "react";

const Footer = () => {
  return (
    <footer className="h-20 bg-slate-300 drop-shadow-lg p-4 text-center border-t-2 border-slate-900">
      <div className="flex flex-col">
        <div>
          <p className="text-sm font-semibold md:text-md">
            © {new Date().getFullYear()} Apply. All rights reserved.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold md:text-md">
            Power By OpenAI & Developed By Sevasit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
