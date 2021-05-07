import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Article from "components/Article";
import SEO from "../components/SEO";
import Givebutter from "../components/Givebutter";

const DonatePage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <Article page={page}>
        <Givebutter />
      </Article>
    </Layout>
  );
};

export default DonatePage;

export const query = graphql`
  query DonateQuery {
    page: datoCmsStandardPage(slug: { eq: "donate" }, title: {}) {
      title
      body
    }
  }
`;
