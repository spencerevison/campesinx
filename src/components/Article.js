import React from "react";

export default function Article({ page }) {
  return (
    <div className="container">
      <article
        dangerouslySetInnerHTML={{ __html: page.body }}
        className="article"
      />
    </div>
  );
}
