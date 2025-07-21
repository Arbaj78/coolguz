import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../client";
import { FaSearch } from "react-icons/fa";
import { urlFor } from "../imageUrlBuilder"; // ✅ Import image builder

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc) {
        title,
        slug,
        publishedAt,
        mainImage {
          asset-> {
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8 uppercase">
        Our Blog
      </h1>

      <div className="relative mb-10 max-w-md">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full py-3 pl-10 pr-4 border-2 border-black rounded-md focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute top-3.5 left-3 text-black text-lg" />
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-lg text-orange-500">No posts found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug.current}
              to={`/blog/${post.slug.current}`}
              className="block bg-white border-2 border-black rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {post.mainImage && (
                <img
                  src={urlFor(post.mainImage).width(600).height(400).url()}
                  alt={post.mainImage.alt || post.title}
                  className="w-full h-60 object-cover"
                />
              )}

              <div className="p-4">
                <h2 className="text-2xl font-semibold text-black mb-2 hover:text-orange-500 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogPosts;
