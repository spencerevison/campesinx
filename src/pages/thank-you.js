import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Article from "components/Article";
import SEO from "../components/SEO";

const ThankYouPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <Article page={page} />
    </Layout>
  );
};

export default ThankYouPage;

export const query = graphql`
  query ThankYouQuery {
    page: datoCmsStandardPage(slug: { eq: "thank-you" }, title: {}) {
      title
      body
    }
  }
`;
