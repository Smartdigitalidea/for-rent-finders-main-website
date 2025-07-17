
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image_url: string;
  category: string;
  read_time: string;
  published_at: string;
  featured: boolean;
}

interface BlogSidebarProps {
  currentPostId?: string;
}

const BlogSidebar = ({ currentPostId }: BlogSidebarProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { supabase } = await import('@/integrations/supabase/client');
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, excerpt, image_url, category, read_time, published_at, featured')
          .eq('status', 'published')
          .neq('id', currentPostId || '')
          .order('published_at', { ascending: false })
          .limit(6);

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching sidebar posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPostId]);

  if (loading) {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground mb-4">Older Posts</h3>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-muted rounded-lg h-20 mb-2"></div>
            <div className="bg-muted rounded h-4 mb-1"></div>
            <div className="bg-muted rounded h-3 w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-foreground">Older Posts</h3>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="block group"
          >
            <article className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-primary/20">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight mb-2">
                    {post.title}
                  </h4>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.published_at).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.read_time}
                    </span>
                  </div>
                  
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 rounded-lg p-6 text-center">
        <h4 className="text-lg font-bold text-foreground mb-2">
          Need Help Finding an Apartment?
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          Our expert team is here to help you find your perfect rental in South Florida.
        </p>
        <button
          onClick={() => window.open('tel:855-367-7368', '_self')}
          className="w-full bg-primary hover:bg-primary-glow text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          Call 855-FOR-RENT
        </button>
      </div>

      {/* Newsletter Signup */}
      <div className="border border-border rounded-lg p-4">
        <h4 className="text-md font-bold text-foreground mb-2">
          Stay Updated
        </h4>
        <p className="text-sm text-muted-foreground mb-3">
          Get the latest apartment hunting tips and market updates.
        </p>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
