import React from "react";
import Link from "next/link";

export default function UnstyledLink(props: any) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return <Link to={href} {...props} className={`${props?.className}`} />;
  }

  return (
    <a
      className={`${props?.className}`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}
