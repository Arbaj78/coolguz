import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../client";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { urlFor } from "../imageUrlBuilder";
import { Helmet } from "react-helmet-async";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Latest");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc) {
        title,
        slug,
        publishedAt,
        excerpt,
        description,
        body,
        mainImage {
          asset-> {
            _id,
            url
          },
          alt
        },
        author-> {
          name,
          image {
            asset-> {
              _id,
              url
            }
          }
        }
      }`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPostDescription = (post) => {
    if (post.description) return post.description;
    if (post.excerpt) return post.excerpt;
    if (post.body && Array.isArray(post.body)) {
      const firstTextBlock = post.body.find(block => block._type === 'block' && block.children);
      if (firstTextBlock && firstTextBlock.children[0]) {
        return firstTextBlock.children[0].text?.substring(0, 100) + '...';
      }
    }
    return 'Discover amazing insights and knowledge in this fascinating article.';
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Date unavailable';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (error) {
      return 'Date unavailable';
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <Helmet>
        <title>Our Blog | FatCamel</title>
        <link rel="canonical" href="https://www.fatcamel.ai/blog" />
      </Helmet>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute top-20 right-5 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-16 left-10 w-32 h-32 bg-orange-50 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 pt-6 pb-3">
          <div className="text-center mb-6 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
              The AI Playbook
            </h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              Discover insights, stories, and knowledge that inspire innovation
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center justify-between mb-4 animate-slide-in">
            <div className="flex space-x-6">
              {["Latest", "Top", "Discussions"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 px-1 border-b-2 transition-all duration-300 font-medium text-base ${
                    activeTab === tab
                      ? "border-orange-500 text-orange-500"
                      : "border-transparent text-gray-600 hover:text-black hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 hover:bg-orange-50 rounded-full transition-all duration-300 group"
              >
                <Search size={20} className="text-gray-600 group-hover:text-orange-500 transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* Search Input */}
          {showSearch && (
            <div className="relative mb-4 animate-slide-down">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full max-w-md mx-auto block py-3 pl-4 pr-4 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-500 text-black placeholder:text-gray-400 shadow-lg shadow-gray-200/60 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </div>
          )}
        </div>
      </div>

      {/* Posts List */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-4">
        {posts.length === 0 ? (
          <div className="text-center py-8">
            <div className="animate-pulse space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 rounded-xl p-4 shadow-sm shadow-gray-200/40">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                </div>
              ))}
            </div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-8 animate-fade-in">
            <div className="text-4xl mb-2">🔍</div>
            <p className="text-lg text-gray-600">No posts found matching your search.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredPosts.map((post, index) => (
              <article
                key={post.slug?.current || index}
                className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-md shadow-gray-200/50 hover:shadow-2xl hover:shadow-orange-200/60 hover:border-orange-200 transition-all duration-500 transform hover:-translate-y-2"
              >
                <Link
                  to={`/blog/${post.slug?.current}`}
                  className="flex items-start gap-4"
                >
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                    
                    <h2 className="text-xl lg:text-2xl font-bold text-black mb-2 group-hover:text-orange-600 transition-all duration-300 leading-tight">
                      {post.title || 'Untitled Post'}
                    </h2>
                    
                    <p className="text-gray-600 mb-3 leading-relaxed text-sm line-clamp-2">
                      {getPostDescription(post)}
                    </p>
                    
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-2 text-orange-500" />
                      <span className="font-medium">{formatDate(post.publishedAt)}</span>
                      <span className="mx-2 text-orange-500">•</span>
                      <div className="flex items-center">
                        {post.author?.image && (
                          <img 
                            src={urlFor(post.author.image).width(24).height(24).url()} 
                            alt={post.author?.name || 'Author'} 
                            className="w-5 h-5 rounded-full mr-2 object-cover"
                          />
                        )}
                        <span className="font-medium">{post.author?.name || 'Author'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden bg-gradient-to-br from-orange-400 to-orange-500 transform group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-orange-300/40">
                      {post.mainImage ? (
                        <img
                          src={urlFor(post.mainImage).width(200).height(200).url()}
                          alt={post.mainImage.alt || post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                          <div className="text-2xl text-white opacity-90">📝</div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>

                <div className="mt-3 flex items-center text-orange-500 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="mr-1">Continue Reading</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <style >{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-15px, 15px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-blob { animation: blob 6s infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
        .animate-slide-in { animation: slide-in 0.5s ease-out; }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
        .animate-fade-in { animation: fade-in-up 0.4s ease-out; }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogPosts;