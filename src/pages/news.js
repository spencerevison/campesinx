import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";

const NewsPage = ({ data: { page } }) => {
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

export default NewsPage;

export const query = graphql`
  query NewsQuery {
    page: datoCmsStandardPage(slug: { eq: "news" }, title: {}) {
      title
      body
    }
  }
`;
