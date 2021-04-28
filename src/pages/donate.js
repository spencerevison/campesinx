import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Article from "components/Article";

const DonatePage = ({ data: { page } }) => {
  return (
    <Layout pageTitle={page.title}>
      <Article page={page} />
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
