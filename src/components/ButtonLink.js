import React from "react";
import { Link } from "gatsby";

const VARIANT_MAPS = {
  PRIMARY: "button--primary",
  STRONG: "button--strong",
};

export default function ButtonLink(props) {
  const { to, label, className = "", variant = VARIANT_MAPS.PRIMARY } = props;
  const commonClasses = "button";
  return (
    <Link to={to} className={`${className} ${variant} ${commonClasses}`}>
      {label}
    </Link>
  );
}
ButtonLink.variant = VARIANT_MAPS;
