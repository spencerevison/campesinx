import React from "react";
import ButtonLink from "./ButtonLink";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Hero({ data }) {
  return (
    <div className="grid">
      <div className="h-screen-nav-xs sm:h-screen-nav-sm md:h-screen-nav-md lg:min-h-120 grid col-start-1 row-start-1">
        <GatsbyImage
          className="h-full opacity-25 col-start-1 row-start-1"
          alt=""
          image={data.heroImage.gatsbyImageData}
        />
        <div className="h-full to-secondary-lightest col-start-1 row-start-1 bg-gradient-to-b from-secondary-light to-tertiary via-tertiary-light sm:bg-gradient-to-r" />
      </div>
      <div className="container relative items-center py-16 grid col-start-1 row-start-1 lg:justify-items-start">
        <div className="text-center lg:max-w-lg lg:text-left">
          <div className="mt-0 mb-3 text-5xl font-extrabold leading-tight 2xl:text-6xl 2xl:text-8xl 2xl:leading-tight lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-tight">
            <span dangerouslySetInnerHTML={{ __html: data.heroHeading }} />
          </div>
          <p className="mb-6 text-xl 2xl:max-w-none lg:max-w-md">
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
