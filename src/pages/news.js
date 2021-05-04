import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Article from "../components/Article";
import SEO from "../components/SEO";
import InstagramFeed from "../components/InstagramFeed";

const NewsPage = ({ data: { page, insta } }) => {
  return (
    <Layout>
      <SEO title={page.title} />
      <InstagramFeed posts={insta.nodes} />
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
    insta: allInstaNode {
      nodes {
        id
        thumbnails {
          src
        }
        caption
        comments
        likes
        original
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
