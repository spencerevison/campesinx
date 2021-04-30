import React from "react";
import Layout from "components/Layout";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import Stats from "../components/Stats";
import Feature from "../components/Feature";

const IndexPage = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO titleTemplate="Campesinx Womb Care" />
      <Hero data={page} />
      <Stats data={page} />
      <Feature data={page} />
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
      }
      heroHeading
      heroSubText
      statsHeading
      statsSubheading
      stats {
        statNumber
        statText
      }
      featureImage {
        gatsbyImageData(
          placeholder: BLURRED
          imgixParams: {
            duotone: "88363B,F1E4FF"
            duotoneAlpha: 40
            fit: "crop"
          }
        )
      }
      featureHeading
      featureText
    }
  }
`;
