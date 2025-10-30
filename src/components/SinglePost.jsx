import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../client";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../imageUrlBuilder";
import { Calendar } from "lucide-react";
import { Helmet } from "react-helmet-async"; // ✅ SEO ke liye add kiya

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          body,
          publishedAt,
          "slug": slug.current,
          mainImage {
            asset-> {
              _id,
              url
            },
            alt
          }
        }[0]`
      )
      .then((data) => {
        setSinglePost(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [slug]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-2xl font-medium text-gray-700">
            Loading your article...
          </h1>
        </div>
      </div>
    );
  }

  if (!singlePost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  // ✅ Canonical URL generate
  const canonicalUrl = `https://www.fatcamel.ai/blog/${singlePost.slug}`;
  const ogImage =
    singlePost.mainImage?.asset?.url ||
    "https://www.fatcamel.ai/default-og-image.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>{singlePost.title} | FatCamel</title>
        <meta
          name="description"
          content={singlePost.body[0]?.children?.[0]?.text || singlePost.title}
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={singlePost.title} />
        <meta
          property="og:description"
          content={singlePost.body[0]?.children?.[0]?.text || singlePost.title}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={singlePost.title} />
        <meta
          name="twitter:description"
          content={singlePost.body[0]?.children?.[0]?.text || singlePost.title}
        />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative">
        {singlePost.mainImage && (
          <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
            <img
              src={urlFor(singlePost.mainImage).width(1920).url()}
              alt={singlePost.mainImage.alt || "Blog cover"}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Back Button */}
            <div className="absolute top-6 left-6 z-10">
              <Link
                to="/blog"
                className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 font-medium rounded-full hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back
              </Link>
            </div>
          </div>
        )}

        {/* Title Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {singlePost.title}
            </h1>
            {singlePost.publishedAt && (
              <div className="flex items-center text-white/90">
                <Calendar size={20} className="mr-2" />
                <span>{formatDate(singlePost.publishedAt)}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative -mt-20 z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="article-content text-gray-700 leading-relaxed space-y-6">
                <BlockContent
                  blocks={singlePost.body}
                  projectId={client.config().projectId}
                  dataset={client.config().dataset}
                  serializers={{
                    types: {
                      image: ({ node }) => (
                        <figure className="my-8 rounded-xl overflow-hidden shadow-lg">
                          <img
                            src={urlFor(node).width(800).url()}
                            alt={node.alt || "Blog Image"}
                            className="w-full h-auto"
                          />
                          {node.caption && (
                            <figcaption className="text-center text-sm text-gray-500 mt-2">
                              {node.caption}
                            </figcaption>
                          )}
                        </figure>
                      ),
                    },
                  }}
                />
              </div>
            </div>
          </article>

          {/* Back to Blog Button */}
          <div className="mt-12 mb-16 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              <svg
                className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Explore More Articles
            </Link>
          </div>
        </div>
      </div>

      {/* Article Content Styles */}
      <style>
        {`
        .article-content p {
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.7;
          color: #374151;
        }
        .article-content h1, .article-content h2, .article-content h3, .article-content h4 {
          color: #1f2937;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .article-content h1 { font-size: 2rem; }
        .article-content h2 { font-size: 1.5rem; }
        .article-content h3 { font-size: 1.25rem; }
        .article-content h4 { font-size: 1.125rem; }
        .article-content blockquote {
          border-left: 4px solid #2563eb;
          background: #eff6ff;
          padding: 1rem 1.5rem;
          margin: 2rem 0;
          border-radius: 0 0.5rem 0.5rem 0;
          font-style: italic;
        }
        .article-content ul, .article-content ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }
        .article-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .article-content a {
          color: #2563eb;
          text-decoration: underline;
        }
        .article-content a:hover {
          color: #1d4ed8;
        }
        .article-content strong {
          font-weight: 600;
          color: #1f2937;
        }
      `}
      </style>
    </div>
  );
};

export default SinglePost;
