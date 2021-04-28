import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Article from "../components/Article";

const NewsPage = ({ data: { page } }) => {
  return (
    <Layout pageTitle={page.title}>
      <Article page={page} />
    </Layout>
  );
};

export default NewsPage;

export const query = graphql`
  query NewsQuery {
    page: datoCmsStandardPage(slug: { eq: "news" }, title: {}) {
      title
      body
    }
  }
`;
