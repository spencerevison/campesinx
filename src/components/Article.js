import React from "react";

export default function Article({ page, children, classes }) {
  return (
    <div className="container">
      <article className={`article ${classes}`}>
        <h1 className="text-center">{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
        {children}
      </article>
    </div>
  );
}
