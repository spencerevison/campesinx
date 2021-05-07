import React, { Component } from "react";

export default class Givebutter extends Component {
  constructor() {
    super();
    if (typeof document !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://givebutter.com/js/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <div className="container">
        <iframe
          src="https://givebutter.com/embed/c/SazYKE"
          width="100%"
          height="615px"
          className="mx-auto max-w-[601px]"
          name="givebutter"
          frameBorder="0"
          scrolling="no"
          seamless
          allowpaymentrequest
        />
      </div>
    );
  }
}
