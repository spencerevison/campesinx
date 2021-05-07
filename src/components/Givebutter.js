import React, { Component } from "react";
import Spinner from "./Spinner";

export default class Givebutter extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    if (typeof document !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://givebutter.com/js/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }

  hideSpinner = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.loading ? <Spinner /> : null}
        <iframe
          src="https://givebutter.com/embed/c/SazYKE"
          width="100%"
          height="615px"
          className="mx-auto max-w-[601px]"
          name="givebutter"
          frameBorder="0"
          scrolling="no"
          seamless
          onLoad={this.hideSpinner}
          allowpaymentrequest
        />
      </div>
    );
  }
}
