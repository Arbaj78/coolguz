// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * SEO component WITHOUT image meta.
 * Props:
 *  - title (required), description, url, canonical, extra (array), jsonLd (object), noIndex (bool)
 */
export default function SEO({ title, description, url, canonical, extra = [], jsonLd = null, noIndex = false }) {
  const finalUrl = canonical || url;
  const metaRobots = noIndex ? 'noindex, nofollow' : 'index, follow';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {finalUrl && <link rel="canonical" href={finalUrl} />}
        <meta name="robots" content={metaRobots} />

        {/* Open Graph - without image */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {finalUrl && <meta property="og:url" content={finalUrl} />}

        {/* Twitter - no image */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Extra meta tags */}
        {extra.map((m, i) =>
          m.property ? (
            <meta property={m.property} content={m.content} key={m.key || i} />
          ) : (
            <meta name={m.name} content={m.content} key={m.key || i} />
          )
        )}
      </Helmet>

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  canonical: PropTypes.string,
  extra: PropTypes.array,
  jsonLd: PropTypes.object,
  noIndex: PropTypes.bool
};
