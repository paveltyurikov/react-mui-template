import React from "react";
import { getPostDetailsUrl } from "~/apps/blog/Post/urls/ui";
import Link from "~/components/Link";


const TitleColumn = ({ row: { original: post } }: { row: any }) => {
  return <Link to={getPostDetailsUrl(post.id)}>{post.title}</Link>;
};

export default TitleColumn;
