import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Search, Calendar, User, Tag,
  ChevronLeft, ChevronRight, Eye
} from 'lucide-react';

const AITechBlog = () => {
  const [currentPage, setCurrentPage] = useState('hero');
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentBlogPage, setCurrentBlogPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);

  const postsPerPage = 4;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  useEffect(() => {
    console.log("🚀 Blog component mounted");

    fetch("https://n8n.srv871973.hstgr.cloud/webhook/get-blog-posts") // ✅ make sure this matches your n8n
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch: " + res.status);
        console.log("🔗 Request sent to webhook");
        return res.json();
      })
      .then(data => {
        console.log("✅ Data received:", data);
        setBlogPosts(data.reverse());
      })
      .catch(err => console.error("❌ Failed to fetch blog posts", err));
  }, []);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedPosts = filteredPosts.slice(
    (currentBlogPage - 1) * postsPerPage,
    currentBlogPage * postsPerPage
  );

  const getRelatedPosts = (currentPostId) => {
    return blogPosts.filter(post => post.id !== currentPostId).slice(0, 3);
  };

  const HeroPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Explore Latest <span className="text-orange-500">AI Blogs</span>
        </h1>
        <p className="text-gray-300 text-lg mt-4 max-w-xl mx-auto">
          Dive into insights, trends, and analysis on artificial intelligence, machine learning, and more.
        </p>
        <button
          onClick={() => setCurrentPage('blog')}
          className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all"
        >
          Get Started <ArrowRight className="inline w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );

  const BlogPage = () => (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Latest <span className="text-orange-500">Posts</span>
        </h2>

        <div className="mb-6 relative max-w-xl mx-auto">
          <Search className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString()}</span>
                <span className="flex items-center gap-1"><Tag className="w-4 h-4" />{post.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <button
                onClick={() => { setSelectedPost(post); setCurrentPage('post'); }}
                className="text-orange-500 hover:underline"
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-2 mt-10">
          <button
            onClick={() => setCurrentBlogPage(p => Math.max(1, p - 1))}
            disabled={currentBlogPage === 1}
            className="p-2 border rounded disabled:opacity-40"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentBlogPage(i + 1)}
              className={`px-4 py-2 rounded ${currentBlogPage === i + 1 ? 'bg-orange-500 text-white' : 'bg-white border'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentBlogPage(p => Math.min(totalPages, p + 1))}
            disabled={currentBlogPage === totalPages}
            className="p-2 border rounded disabled:opacity-40"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const PostPage = () => {
    if (!selectedPost) return null;
    const related = getRelatedPosts(selectedPost.id);

    return (
      <div className="bg-gray-50 py-10 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setCurrentPage('blog')}
            className="mb-4 text-orange-500 hover:underline flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Blog
          </button>
          <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <div className="flex gap-4 text-sm text-gray-500 mb-2">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{selectedPost.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(selectedPost.date).toLocaleDateString()}</span>
            <span className="flex items-center gap-1"><Tag className="w-4 h-4" />{selectedPost.category}</span>
            <span className="flex items-center gap-1"><Eye className="w-4 h-4" />{selectedPost.views} views</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map(post => (
                <div key={post.id} onClick={() => { setSelectedPost(post); }} className="cursor-pointer group">
                  <img src={post.image} className="w-full h-32 object-cover rounded-lg group-hover:opacity-80 mb-2" alt={post.title} />
                  <h4 className="font-semibold text-gray-800 group-hover:text-orange-500 line-clamp-2">{post.title}</h4>
                  <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'hero' && <HeroPage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'post' && <PostPage />}
    </div>
  );
};

export default AITechBlog;
