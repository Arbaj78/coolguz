import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { client } from '../client';
import BlockContent from '@sanity/block-content-to-react';

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
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => {
        setSinglePost(data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return (
      <div className="text-center py-20 bg-white text-black">
        <h1 className="text-3xl font-semibold">Loading...</h1>
      </div>
    );
  }

  if (!singlePost) {
    return (
      <div className="text-center py-20 bg-white text-black">
        <h1 className="text-3xl font-semibold">Post not found</h1>
        <Link to="/blog" className="text-orange-500 underline mt-4 block">
          Go back to blog
        </Link>
      </div>
    );
  }

  return (
    <section className="px-4 max-w-5xl mx-auto py-12 bg-white text-black">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6 border-l-4 border-orange-500 pl-4">
        {singlePost.title}
      </h1>

      {/* Image */}
      {singlePost.mainImage?.asset?.url && (
        <img
          src={singlePost.mainImage.asset.url}
          alt={singlePost.mainImage.alt || 'Blog cover'}
          className="w-full max-h-[500px] object-cover rounded-lg mb-8 shadow-md"
        />
      )}

      {/* Body Content */}
      <div className="prose max-w-none prose-lg prose-blockquote:border-l-orange-500 prose-headings:text-black prose-p:text-gray-700">
        <BlockContent
          blocks={singlePost.body}
          projectId="buvouatw"
          dataset="production"
        />
      </div>

      {/* Back Button */}
      <div className="mt-12">
        <Link
          to="/blog"
          className="inline-block py-2 px-6 rounded shadow text-white bg-black hover:bg-white border-2 border-black transition-all duration-300 hover:text-black font-semibold"
        >
          ← Back to Blog
        </Link>
      </div>
    </section>
  );
};

export default SinglePost;
