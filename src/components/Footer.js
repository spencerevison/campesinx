import React from "react";
import { Instagram } from "react-feather";
import Logo from "svg/logo-light.svg";
import site from "site.config.json";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container flex flex-col items-center py-4 mx-auto text-gray-600 body-font md:flex-row">
        <Link
          to="/"
          className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
        >
          <Logo className="w-40 p-2 text-white" />
        </Link>
        <p className="mt-4 text-sm text-white md:ml-4 md:mt-0 md:px-4 md:py-2 md:border-l-2 md:border-r-2 md:border-gray-200">
          {site.title} © 2021
        </p>
        <a
          className="mt-4 text-sm text-white md:pl-4 md:mt-0"
          href="https://www.spencerevison.com/"
          target="_blank"
          rel="noreferrer"
        >
          Site By <span className="underline">Spencer Evison</span>
        </a>
        <span className="inline-flex justify-center mt-4 sm:justify-start sm:ml-auto sm:mt-0">
          <a
            className="ml-3 text-white"
            href="https://www.instagram.com/campesinxwombcare/"
          >
            <span className="sr-only">Instagram</span>
            <Instagram className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
}
