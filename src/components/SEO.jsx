import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image = '/logo.png', type = 'website', schema }) => (
  <Helmet>
    {title && <title>{title}</title>}
    {description && <meta name="description" content={description} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {url && <meta property="og:url" content={url} />}
    {image && <meta property="og:image" content={image} />}
    <meta property="og:type" content={type} />
    <meta name="twitter:card" content="summary_large_image" />
    {schema && (
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    )}
  </Helmet>
);

export default SEO;
