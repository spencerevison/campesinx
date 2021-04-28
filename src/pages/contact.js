import React from "react";
import { graphql } from "gatsby";
import Article from "components/Article";
import Layout from "../components/Layout";

const ContactPage = ({ data: { page } }) => {
  return (
    <Layout pageTitle={page.title}>
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
