import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
  rawTitle?: boolean;
}

export function SEO({ title, description, canonicalUrl, schema, rawTitle }: SEOProps) {
  const fullTitle = rawTitle ? title : `${title} | Capital Corridor`;
  const baseUrl = 'https://www.capitalcorridor.in';
  const url = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Capital Corridor" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

