import React from "react";
import { graphql } from "gatsby";
import Article from "components/Article";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ContactPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <Article page={page} />
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query ContactQuery {
    page: datoCmsStandardPage(slug: { eq: "contact" }, title: {}) {
      title
      body
    }
  }
`;
