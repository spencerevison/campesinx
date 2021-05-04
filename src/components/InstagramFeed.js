import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function InstagramFeed() {
  const script = document.createElement("script");
  script.src =
    "https://cdn.curator.io/published/3249009b-30cf-433b-8602-3a96db0b4f3e.js";
  script.async = true;
  document.body.appendChild(script);
  return (
    <div className="container" id="curator-feed-campesinx-womb-care-layout" />
  );
}
