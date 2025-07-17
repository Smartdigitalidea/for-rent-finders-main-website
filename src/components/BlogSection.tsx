
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image_url: string;
  category: string;
  read_time: string;
  published_at: string;
  featured: boolean;
  author: string;
}

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { supabase } = await import('@/integrations/supabase/client');
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, excerpt, image_url, category, read_time, published_at, featured, author')
          .eq('status', 'published')
          .order('published_at', { ascending: false })
          .limit(4);

        if (error) throw error;
        setBlogPosts(data || []);

        // Set up real-time subscription
        const channel = supabase
          .channel('blog_posts_public')
          .on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'blog_posts',
            filter: 'status=eq.published'
          }, () => {
            // Refetch posts when there are changes
            fetchPosts();
          })
          .subscribe();

        return () => {
          supabase.removeChannel(channel);
        };
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Latest <span className="text-[#3384B3]">Blog Posts</span>
              </h2>
              <div className="w-24 h-1 bg-[#3384B3] mx-auto rounded-full mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-2xl h-48 mb-4"></div>
                  <div className="bg-gray-200 rounded h-6 mb-2"></div>
                  <div className="bg-gray-200 rounded h-4 mb-2"></div>
                  <div className="bg-gray-200 rounded h-4 w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Latest <span className="text-[#3384B3]">Blog Posts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Stay informed with expert insights, market updates, and helpful tips for renters 
              in South Florida. Updated every Monday & Friday.
            </p>
            
            <div className="w-24 h-1 bg-[#3384B3] mx-auto rounded-full mt-6"></div>
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map(post => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img 
                      src={post.image_url} 
                      alt={post.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    
                    {/* Category and trending badge */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="bg-[#3384B3] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>

                    {/* Read time */}
                    <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.read_time}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Meta info */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.published_at).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#3384B3] transition-colors duration-200">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read more button */}
                    <div className="text-[#3384B3] font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all duration-200">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* View all posts CTA */}
          <div className="text-center">
            <Link to="/blog">
              <Button className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:scale-105">
                <TrendingUp className="w-5 h-5 mr-2" />
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
