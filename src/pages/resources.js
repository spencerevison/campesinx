import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import Article from "components/Article";
import SEO from "../components/SEO";

const ResourcesPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <Article page={page} />
    </Layout>
  );
};

export default ResourcesPage;

export const query = graphql`
  query ResourcesQuery {
    page: datoCmsStandardPage(slug: { eq: "resources" }, title: {}) {
      title
      body
    }
  }
`;
