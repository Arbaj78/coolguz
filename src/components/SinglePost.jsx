// src/components/SinglePost.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../client";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../imageUrlBuilder";
import { Calendar } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    let mounted = true;
    async function fetchPost() {
      try {
        const q = `*[_type == "post" && slug.current == $slug][0]{
          title,
          body,
          publishedAt,
          "slug": slug.current,
          mainImage { asset-> { _id, url }, alt },
          "authorName": author->name
        }`;
        const data = await client.fetch(q, { slug });
        if (!mounted) return;
        setSinglePost(data || null);
      } catch (err) {
        console.error("SinglePost fetch error:", err);
        if (!mounted) return;
        setSinglePost(null);
      } finally {
        setIsLoading(false);
        // dispatch prerender-ready to avoid hanging prerender
        setTimeout(
          () => window.dispatchEvent(new Event("prerender-ready")),
          50
        );
      }
    }
    fetchPost();
    return () => {
      mounted = false;
    };
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
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
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  // generate excerpt from first block text
  const excerpt = (() => {
    try {
      if (!singlePost.body) return "";
      const first = singlePost.body.find(
        (b) => b._type === "block" && b.children && b.children.length
      );
      if (!first) return "";
      return first.children
        .map((c) => c.text || "")
        .join("")
        .slice(0, 160);
    } catch {
      return "";
    }
  })();

  const canonicalUrl = `${SITE.domain}/blog/${singlePost.slug || slug}`;

  // Article JSON-LD (no images per request)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    headline: singlePost.title,
    datePublished: singlePost.publishedAt || new Date().toISOString(),
    author: singlePost.authorName
      ? { "@type": "Person", name: singlePost.authorName }
      : undefined,
    description: excerpt || `Read this article on ${SITE.name}`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Helmet>
        <title>{postTitle} | FatCamel AI Blog</title>
        <meta name="description" content={postExcerpt} />
        <link rel="canonical" href={`https://www.fatcamel.ai/blog/${slug}`} />
      </Helmet>

      {/* Top hero (optional image display kept but not required for SEO) */}
      <div className="relative">
        {singlePost.mainImage && singlePost.mainImage.asset?.url && (
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img
              src={urlFor(singlePost.mainImage).width(1600).url()}
              alt={singlePost.mainImage.alt || "Blog cover"}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute top-6 left-6 z-10">
              <Link
                to="/blog"
                className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 font-medium rounded-full hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Back
              </Link>
            </div>
          </div>
        )}

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
                            loading="lazy"
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

          <div className="mt-12 mb-16 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore More Articles
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .article-content p { margin-bottom: 1.5rem; font-size: 1.125rem; line-height: 1.7; color: #374151; }
        .article-content h1, .article-content h2, .article-content h3, .article-content h4 { color: #1f2937; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem; }
        .article-content h1 { font-size: 2rem; } .article-content h2 { font-size: 1.5rem; } .article-content h3 { font-size: 1.25rem; } .article-content h4 { font-size: 1.125rem; }
        .article-content blockquote { border-left: 4px solid #2563eb; background: #eff6ff; padding: 1rem 1.5rem; margin: 2rem 0; border-radius: 0 0.5rem 0.5rem 0; font-style: italic; }
        .article-content ul, .article-content ol { margin: 1.5rem 0; padding-left: 2rem; } .article-content li { margin-bottom: 0.5rem; line-height: 1.6; }
        .article-content a { color: #2563eb; text-decoration: underline; } .article-content a:hover { color: #1d4ed8; } .article-content strong { font-weight: 600; color: #1f2937; }
      `}</style>
    </div>
  );
};

export default SinglePost;
