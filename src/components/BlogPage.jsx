import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [showFullExcerpt, setShowFullExcerpt] = useState({});

  // 🟢 Fetch blog posts from n8n webhook
  useEffect(() => {
    setLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      fetch("https://n8n.srv871973.hstgr.cloud/webhook/get-blog-posts")
        .then(response => response.json())
        .then(data => {
          const blogData = Array.isArray(data)
            ? data
            : Array.isArray(data.data)
            ? data.data
            : [];

          // 🟠 Normalize field names to lowercase
          const normalized = blogData.map(post => ({
            id: post.ID,
            title: post.Title,
            excerpt: post.Excerpt,
            author: post.Author,
            date: post.Date,
            category: post.Category,
            image: post.Image,
            content: post.Content,
            views: post.Views,
            readTime: post.ReadTime
          }));

          setBlogPosts(normalized);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching blog posts:", error);
          setLoading(false);
        });
    }, 1000);
  }, []);

  // 🎨 Skeleton loading component
  const SkeletonCard = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg animate-pulse border-2 border-black">
      <div className="w-full h-48 bg-gray-300 rounded-lg mb-4 animate-pulse"></div>
      <div className="h-6 bg-gray-300 rounded mb-3 w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-1/2 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-5/6 animate-pulse"></div>
      <div className="h-3 bg-gray-300 rounded w-1/3 ml-auto animate-pulse"></div>
    </div>
  );

  // Get unique categories for filter
  const categories = ["all", ...new Set(blogPosts.map(post => post.category))];

  // 🔍 Filter and sort posts
  const getFilteredAndSortedPosts = () => {
    let filtered = blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Sort posts
    filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  };

  const filteredPosts = getFilteredAndSortedPosts();

  // 📄 Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginatedPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // 🔁 Handle pagination navigation
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Handle read more toggle
  const toggleReadMore = (postId) => {
    setShowFullExcerpt(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  // Truncate excerpt
  const truncateExcerpt = (text, wordLimit = 20) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortOrder]);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-white via-orange-50 to-white">
      {!selectedPost ? (
        <>
          {/* Animated Title */}
          <div className="text-center mb-8 relative">
            <h1 className="text-5xl md:text-6xl font-black text-black mb-4 animate-bounce">
              AITech Blog
            </h1>
            <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* 🔎 Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8 space-y-6">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1 group">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-black rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 text-black placeholder-gray-500 bg-white hover:shadow-xl transform hover:scale-105"
                />
              </div>
              
              {/* Sort Dropdown */}
              <div className="relative group">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="px-6 py-4 border-2 border-black rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 text-black bg-white hover:shadow-xl transform hover:scale-105 cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-110 hover:rotate-1 hover:shadow-lg animate-bounce ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-lg ring-4 ring-orange-200 animate-pulse"
                      : "bg-white text-black border-2 border-black hover:bg-orange-50 hover:border-orange-500"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* 📰 Blog List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loading ? (
              // Show skeleton cards while loading
              Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <SkeletonCard />
                </div>
              ))
            ) : paginatedPosts.length > 0 ? (
              paginatedPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:rotate-1 animate-fade-in border-2 border-black hover:border-orange-500 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-black group-hover:text-orange-500 transition-colors duration-300 mb-3">
                    {post.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full font-bold animate-pulse">
                      {post.category}
                    </span>
                    <span className="text-black text-sm font-medium">{post.date}</span>
                    <span className="text-black text-sm font-medium">{post.readTime}</span>
                  </div>
                  
                  <div className="text-black mb-4 leading-relaxed">
                    {showFullExcerpt[post.id] ? post.excerpt : truncateExcerpt(post.excerpt)}
                    {post.excerpt.split(' ').length > 20 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleReadMore(post.id);
                        }}
                        className="text-orange-500 hover:text-black font-bold ml-2 transition-colors duration-300 hover:underline transform hover:scale-105"
                      >
                        {showFullExcerpt[post.id] ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-orange-200">
                    <p className="text-sm text-black font-medium">By {post.author}</p>
                    <p className="text-sm text-orange-500 font-bold">{post.views} views</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="animate-bounce">
                  <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 animate-pulse"></div>
                  <p className="text-black text-xl font-bold">No blog posts found matching your criteria.</p>
                </div>
              </div>
            )}
          </div>

          {/* 🔢 Pagination */}
          {totalPages > 1 && !loading && (
            <div className="flex justify-center mt-12 space-x-3">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform font-bold ${
                  currentPage === 1 
                    ? "bg-white text-gray-400 cursor-not-allowed border-2 border-gray-300" 
                    : "bg-white text-black border-2 border-black hover:bg-orange-500 hover:text-white hover:scale-110 hover:shadow-lg"
                }`}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-3 rounded-full transition-all duration-300 transform font-bold hover:scale-110 hover:rotate-12 ${
                    currentPage === i + 1 
                      ? "bg-orange-500 text-white shadow-lg ring-4 ring-orange-200 animate-pulse" 
                      : "bg-white text-black border-2 border-black hover:bg-orange-50 hover:border-orange-500 hover:shadow-lg"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform font-bold ${
                  currentPage === totalPages 
                    ? "bg-white text-gray-400 cursor-not-allowed border-2 border-gray-300" 
                    : "bg-white text-black border-2 border-black hover:bg-orange-500 hover:text-white hover:scale-110 hover:shadow-lg"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        // 🧾 Full Blog Post View
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl animate-fade-in border-2 border-black">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-6 text-orange-500 hover:text-black font-bold transition-all duration-300 hover:underline transform hover:scale-105 hover:translate-x-2"
          >
            ← Back to Blog
          </button>
          
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title} 
              className="w-full h-72 object-cover animate-fade-in" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20"></div>
          </div>
          
          <h2 className="text-5xl font-black text-black mb-4 animate-pulse">{selectedPost.title}</h2>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-orange-500 text-white text-sm rounded-full font-bold animate-pulse">
              {selectedPost.category}
            </span>
            <span className="text-black text-sm font-medium bg-white px-4 py-2 rounded-full border-2 border-black">
              {selectedPost.date}
            </span>
            <span className="text-black text-sm font-medium bg-white px-4 py-2 rounded-full border-2 border-black">
              {selectedPost.readTime}
            </span>
          </div>
          
          <p className="text-black mb-6 font-medium text-lg">By {selectedPost.author}</p>
          
          <div
            className="prose prose-lg max-w-none text-black animate-fade-in"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />
          
          <div className="mt-8 pt-6 border-t-2 border-orange-200">
            <p className="text-orange-500 font-bold text-lg animate-pulse">{selectedPost.views} views</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;