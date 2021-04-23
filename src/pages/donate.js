import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";

const DonatePage = ({ data: { page } }) => {
  return (
    <Layout pageTitle={page.title}>
      <div className="container">
        <article
          dangerouslySetInnerHTML={{ __html: page.body }}
          className="prose sm:py-18 lg:prose-lg xl:prose-xl mx-auto py-12 max-w-7xl"
        />
      </div>
    </Layout>
  );
};

export default DonatePage;

export const query = graphql`
  query DonateQuery {
    page: datoCmsStandardPage(slug: { eq: "resources" }, title: {}) {
      title
      body
    }
  }
`;
