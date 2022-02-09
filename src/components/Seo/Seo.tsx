import React from "react";
import {Helmet} from "react-helmet";

type TSeo = {
  title?: string;
  description: string;
  image: string;
};

export const Seo: React.FC<TSeo> = ({title, description, image}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="shortcut icon" href={image} />
      <meta property="og:image" content={image} />
      <meta name="description" content={description} />
    </Helmet>
  );
};
