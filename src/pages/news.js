import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Article from "../components/Article";
import SEO from "../components/SEO";
import InstagramFeed from "../components/InstagramFeed";

const NewsPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <InstagramFeed />
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
