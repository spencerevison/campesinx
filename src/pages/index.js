import React from "react";
import Layout from "components/Layout";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import site from "../site.config.json";

const IndexPage = ({ data: { page } }) => {
  return (
    <Layout pageTitle="Home">
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{`${site.title}`}</title>
      </Helmet>
      <Hero data={page} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    page: datoCmsHomePage {
      heroImage {
        gatsbyImageData(
          placeholder: BLURRED
          imgixParams: {
            duotone: "88363B,F1E4FF"
            duotoneAlpha: 60
            fit: "crop"
          }
        )
        url
      }
      heroTagline
      heroSubText
    }
  }
`;
