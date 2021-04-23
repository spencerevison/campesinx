import React from "react";
import Layout from "components/Layout";

const ContactPage = ({ data: { page } }) => {
  return (
    <Layout pageTitle={page.title}>
      <div className="container"></div>
    </Layout>
  );
};

export default ContactPage;
