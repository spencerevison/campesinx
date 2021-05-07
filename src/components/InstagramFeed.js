import React, { Component } from "react";
import Spinner from "./Spinner";

export default class InstagramFeed extends Component {
  constructor() {
    super();
    if (typeof document !== "undefined") {
      const script = document.createElement("script");
      script.src =
        "https://cdn.curator.io/published/3249009b-30cf-433b-8602-3a96db0b4f3e.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <div className="container">
        <div id="curator-feed-campesinx-womb-care-layout">
          <Spinner />
        </div>
      </div>
    );
  }
}
