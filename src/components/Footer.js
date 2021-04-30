import React from "react";
import { Instagram } from "react-feather";
import Logo from "svg/logo.svg";
import site from "site.config.json";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className="container flex flex-col items-center py-8 mx-auto text-gray-600 body-font sm:flex-row">
      <Link
        to="/"
        className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
      >
        <Logo className="w-40 p-2 text-white" />
      </Link>
      <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:pl-4 sm:py-2 sm:border-l-2 sm:border-gray-200">
        {site.title} © 2021
      </p>
      <span className="inline-flex justify-center mt-4 sm:justify-start sm:ml-auto sm:mt-0">
        <a
          className="ml-3 text-gray-500"
          href="https://www.instagram.com/campesinxwombcare/"
        >
          <span className="sr-only">Instagram</span>
          <Instagram className="w-5 h-5" />
        </a>
      </span>
    </footer>
  );
}
