import React from "react";
import {
  UserGroupIcon,
  UserAddIcon,
  SupportIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";

export default function Stats({ data }) {
  return (
    <div className="container py-8 place-items-center auto-cols-auto lg:grid lg:gap-x-6 lg:grid-cols-2 lg:py-16">
      <div className="mb-10 text-center justify-self-start lg:mb-0 lg:max-w-lg lg:text-left">
        <h2 className="mb-4 text-4xl font-extrabold leading-tight lg:text-5xl lg:leading-tight">
          {data.statsHeading}
        </h2>
        <p className="text-lg">{data.statsSubheading}</p>
      </div>
      <ul className="list-none ml-[calc(50%-100px)] sm:w-[520px] md:w-[580px] gap-x-6 gap-y-6 grid-cols-2 space-y-6 sm:grid sm:ml-auto sm:space-y-0 lg:mx-0 lg:w-auto">
        <li className="flex items-center space-x-4">
          <SupportIcon className="flex-shrink-0 w-10 h-10 text-primary" />
          <div>
            <p className="text-3xl font-extrabold">
              {data.stats[0].statNumber}
            </p>
            <p>{data.stats[0].statText}</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <UserAddIcon className="flex-shrink-0 w-10 h-10 text-primary" />
          <div>
            <p className="text-3xl font-extrabold">
              {data.stats[1].statNumber}
            </p>
            <p>{data.stats[1].statText}</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <CurrencyDollarIcon className="flex-shrink-0 w-10 h-10 text-primary" />
          <div>
            <p className="text-3xl font-extrabold">
              {data.stats[2].statNumber}
            </p>
            <p>{data.stats[2].statText}</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <UserGroupIcon className="flex-shrink-0 w-10 h-10 text-primary" />
          <div>
            <p className="text-3xl font-extrabold">
              {data.stats[3].statNumber}
            </p>
            <p>{data.stats[3].statText}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
