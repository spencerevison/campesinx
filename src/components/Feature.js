import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import ButtonLink from "./ButtonLink";

export default function Feature({ data }) {
  return (
    <div className="w-full py-24 bg-pink-50">
      <div className="container items-center md:grid grid-cols-2 gap-x-12">
        <GatsbyImage
          className="self-stretch mb-4 border-purple-200 rounded border-16 max-h-56 md:max-h-full"
          alt=""
          image={data.featureImage.gatsbyImageData}
        />
        <div>
          <h2>{data.featureHeading}</h2>
          <p className="mb-6">{data.featureText}</p>
          <ButtonLink to="/donate" label="Donate Now" />
        </div>
      </div>
    </div>
  );
}
