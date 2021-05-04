import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function InstagramFeed({ posts }) {
  return (
    <div className="container">
      {posts.map((post, i) => (
        <a key={i} href={`https://www.instagram.com/p/${post.id}/`}>
          <GatsbyImage
            className=""
            target="_blank"
            alt=""
            image={post.localFile.childImageSharp.gatsbyImageData}
          />
        </a>
      ))}
    </div>
  );
}
