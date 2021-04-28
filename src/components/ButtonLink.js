import React from "react";
import { Link } from "gatsby";

const VARIANT_MAPS = {
  PRIMARY: "font-medium px-4 py-2",
  STRONG: "font-bold px-5 py-3 lg:text-lg uppercase",
};

export default function ButtonLink(props) {
  const { to, label, className = "", variant = VARIANT_MAPS.PRIMARY } = props;
  const commonClasses =
    "button inline-block items-center justify-center font-medium text-white border border-transparent bg-primary whitespace-nowrap rounded-md hover:bg-primary-dark hover:text-white";
  return (
    <Link to={to} className={`${className} ${variant} ${commonClasses}`}>
      {label}
    </Link>
  );
}
ButtonLink.variant = VARIANT_MAPS;
