import React from "react";
import {
  UserGroupIcon,
  UserAddIcon,
  SupportIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";

export default function Stats() {
  return (
    <div className="container place-items-center py-8 lg:grid lg:gap-x-6 lg:grid-cols-2 lg:py-16">
      <div className="justify-self-start mb-10 text-center lg:mb-0 lg:max-w-xl lg:text-left">
        <h2 className="mb-4 text-4xl font-extrabold leading-tight lg:text-5xl lg:leading-tight">
          We have achieved a great deal
        </h2>
        <p className="text-lg">Thank you for your continued support!</p>
      </div>
      <ul className="ml-[calc(50%-100px)] sm:w-[520px] md:w-[580px] gap-x-6 gap-y-6 grid-cols-2 list-none space-y-6 sm:grid sm:ml-auto sm:space-y-0 lg:mx-0 lg:w-auto">
        <li className="flex items-center space-x-4">
          <SupportIcon className="w-10 h-10 text-primary" />
          <div>
            <p className="text-3xl font-extrabold">300+</p>
            <p>Farm workers supported</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <UserAddIcon className="w-10 h-10 text-primary" />
          <div>
            <p className="text-3xl font-extrabold">20+</p>
            <p>Volunteers</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <CurrencyDollarIcon className="w-10 h-10 text-primary" />
          <div>
            <p className="text-3xl font-extrabold">$5000+</p>
            <p>Donations received</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <UserGroupIcon className="w-10 h-10 text-primary" />
          <div>
            <p className="text-3xl font-extrabold">2000+</p>
            <p>People reached</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
