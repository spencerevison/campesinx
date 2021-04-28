import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
