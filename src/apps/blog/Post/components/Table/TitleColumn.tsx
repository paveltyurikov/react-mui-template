import React from "react";
import Link from "~/components/Link";
import { getDetailsUrl } from "../../urls/ui";


const TitleColumn = ({ row: { original: post } }: { row: any }) => {
  return <Link to={getDetailsUrl(post.id)}>{post.title}</Link>;
};

export default TitleColumn;
