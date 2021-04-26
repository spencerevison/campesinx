import React from "react";
import ButtonLink from "./ButtonLink";
import Img from "gatsby-image";

export default function Hero({ data }) {
  return (
    <div className="prose">
      <h1>Campesinx Womb Care</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
        et, lectus sit lorem id integer.
      </p>
      <ButtonLink
        variant={ButtonLink.variant.STRONG}
        to="/donate"
        label="Donate Now"
      />
      <Img className="w-full" alt="" fluid={data.heroImage.fluid} />
    </div>
  );
}
