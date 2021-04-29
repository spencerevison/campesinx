import React from "react";
import Layout from "components/Layout";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import Stats from "../components/Stats";

const IndexPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO titleTemplate="Campesinx Womb Care" />
      <Hero data={page} />
      <Stats />
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
