import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Article from "components/Article";

const AboutPage = ({ data: { page } }) => {
  return (
    <Layout pageTitle={page.title}>
      <Article page={page} />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    page: datoCmsStandardPage(slug: { eq: "about" }, title: {}) {
      title
      body
    }
  }
`;
