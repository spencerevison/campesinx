import React from "react";
import Layout from "components/Layout";
import { graphql } from "gatsby";
import Hero from "../components/Hero";

const IndexPage = ({ data: { page } }) => {
  return (
    <Layout pageTitle="Home">
      <Hero data={page} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    page: datoCmsHomePage {
      heroImage {
        fluid(maxWidth: 1180) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      heroTagline
      heroSubText
    }
  }
`;
