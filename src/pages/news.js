import React from "react";
import Layout from "components/Layout";

const NewsPage = ({ data: { page } }) => {
  return (
    <Layout pageTitle={page.title}>
      <div className="container"></div>
    </Layout>
  );
};

export default NewsPage;
