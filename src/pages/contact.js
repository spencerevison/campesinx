import React from "react";
import { graphql } from "gatsby";
import Article from "components/Article";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

const ContactPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <Article page={page} classes="pb-0 sm:pb-0" />
      <ContactForm />
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
