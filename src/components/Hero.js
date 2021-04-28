import React from "react";
import ButtonLink from "./ButtonLink";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Hero({ data }) {
  return (
    /*<div className="lg:min-h-160 items-center lg:container lg:flex lg:py-24 xl:py-32">
      <div className="container justify-self-start lg:pl-0 lg:max-w-none">
        <div className="text-center lg:text-left">
          <div dangerouslySetInnerHTML={{ __html: data.heroTagline }} />
          <p className="my-5">{data.heroSubText}</p>
          <ButtonLink
            variant={ButtonLink.variant.STRONG}
            to="/donate"
            label="Donate Now"
            className="mb-12"
          />
        </div>
      </div>
      <div className="container relative lg:px-0 lg:max-w-none">
        <div className="w-120 h-120 xl:h-140 xl:w-140 absolute right-0 top-1/2 hidden bg-secondary-lighter rounded-full transform -translate-y-2/4 lg:block" />
        <GatsbyImage
          className="w-full h-60 xs:h-80 sm:h-96"
          alt=""
          image={data.heroImage.gatsbyImageData}
        />
      </div>
    </div>*/
    <div className="grid">
      <div className="h-screen-nav-xs sm:h-screen-nav-sm md:h-screen-nav-md grid col-start-1 row-start-1">
        <GatsbyImage
          className="col-start-1 row-start-1 w-screen h-full opacity-25"
          alt=""
          image={data.heroImage.gatsbyImageData}
        />
        <div className="to-secondary-lightest col-start-1 row-start-1 h-full bg-gradient-to-b from-secondary-light to-tertiary via-tertiary-light sm:bg-gradient-to-r" />
      </div>
      <div className="container relative grid col-start-1 row-start-1 items-center py-16 lg:justify-items-start">
        <div className="text-center lg:max-w-lg lg:text-left">
          <div className="mb-3 mt-0 mt-12 text-5xl 2xl:text-6xl 2xl:text-8xl font-extrabold leading-tight lg:text-6xl xl:text-7xl">
            <span dangerouslySetInnerHTML={{ __html: data.heroTagline }} />
          </div>
          <p className="mb-6 2xl:max-w-none text-xl lg:max-w-md">
            {data.heroSubText}
          </p>
          <ButtonLink
            variant={ButtonLink.variant.STRONG}
            to="/donate"
            label="Donate Now"
            className="mb-0 mb-12"
          />
        </div>
      </div>
    </div>
  );
}
