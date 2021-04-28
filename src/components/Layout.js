import React from "react";
import { Helmet } from "react-helmet";
import favicon from "images/favicon.ico";
import site from "site.config.json";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, pageTitle }) {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{`${pageTitle} | ${site.title}`}</title>
        <meta name="description" content={site.description} />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
