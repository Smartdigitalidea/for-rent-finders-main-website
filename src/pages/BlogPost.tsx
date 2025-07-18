import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/BlogSidebar';
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image_url: string;
  featured: boolean;
  read_time: string;
  published_at: string;
  meta_title?: string;
  meta_description?: string;
  keywords?: string[];
  slug?: string;
}
const BlogPost = () => {
  const {
    id
  } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const {
          supabase
        } = await import('@/integrations/supabase/client');
        const {
          data,
          error
        } = await supabase.from('blog_posts').select('*').eq('id', id).eq('status', 'published').single();
        if (error) throw error;
        setPost(data);

        // Update SEO meta tags
        if (data) {
          document.title = data.meta_title || data.title;

          // Update meta description
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', data.meta_description || data.excerpt);
          }

          // Update Open Graph tags
          const ogTitle = document.querySelector('meta[property="og:title"]');
          if (ogTitle) {
            ogTitle.setAttribute('content', data.meta_title || data.title);
          }
          const ogDescription = document.querySelector('meta[property="og:description"]');
          if (ogDescription) {
            ogDescription.setAttribute('content', data.meta_description || data.excerpt);
          }
          const ogImage = document.querySelector('meta[property="og:image"]');
          if (ogImage) {
            ogImage.setAttribute('content', data.image_url);
          }
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchPost();
    }
  }, [id]);
  const handleShare = (platform?: string) => {
    if (!post) return;
    const url = window.location.href;
    const title = post.title;
    const text = post.excerpt;
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title,
            text,
            url
          });
        } else {
          navigator.clipboard.writeText(url);
        }
    }
  };
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>;
  }
  if (error || !post) {
    return <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <section className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-foreground">{post.category}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto my-[70px]">
            {/* Back to Blog Link */}
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-deep transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content Area - 70% width */}
              <article className="lg:col-span-2 space-y-8">
                {/* Article Header */}
                <header className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.read_time}
                    </span>
                    {post.featured && <span className="bg-gold/20 text-gold px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>}
                  </div>
                  
                  <div>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {post.category}
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                      {post.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  {/* Social Sharing */}
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <span className="text-sm font-medium text-muted-foreground mr-2">Share:</span>
                    
                    <Button variant="outline" size="sm" onClick={() => handleShare('twitter')} className="gap-2">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')} className="gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare()} className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Copy Link
                    </Button>
                  </div>
                </header>
                
                {/* Featured Image */}
                <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
                  <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" onError={e => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }} />
                </div>
                
                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-muted-foreground leading-relaxed space-y-6" dangerouslySetInnerHTML={{
                  __html: post.content.replace(/<h2>/g, '<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">').replace(/<h3>/g, '<h3 class="text-xl font-semibold text-foreground mt-6 mb-3">').replace(/<p>/g, '<p class="mb-4 leading-relaxed">').replace(/<ul>/g, '<ul class="list-disc pl-6 mb-4 space-y-2">').replace(/<ol>/g, '<ol class="list-decimal pl-6 mb-4 space-y-2">').replace(/<li>/g, '<li class="mb-1">').replace(/<strong>/g, '<strong class="font-semibold text-foreground">').replace(/<a /g, '<a class="text-primary hover:text-primary-deep underline" ').replace(/<table>/g, '<table class="w-full border-collapse border border-border mt-6 mb-6">').replace(/<th>/g, '<th class="border border-border bg-muted p-3 text-left font-semibold">').replace(/<td>/g, '<td class="border border-border p-3">')
                }} />
                </div>
                
                {/* Call to Action */}
                <div className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Find Your Perfect Apartment?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Let our expert team help you find the ideal rental in Miami or Fort Lauderdale. 
                    We know the market inside and out and can help you navigate the competitive South Florida rental scene.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={() => window.open('tel:855-367-7368', '_self')} size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground px-8 py-4 text-lg font-semibold">
                      Call 855-FOR-RENT
                    </Button>
                    <Link to="/contact">
                      <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                        Contact Us Online
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Keywords for SEO */}
                {post.keywords && post.keywords.length > 0 && <div className="border-t border-border pt-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {post.keywords.map((keyword, index) => <span key={index} className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs">
                          {keyword}
                        </span>)}
                    </div>
                  </div>}
              </article>

              {/* Sidebar - 30% width */}
              <aside className="lg:col-span-1">
                <div className="sticky top-8">
                  <BlogSidebar currentPostId={post.id} />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default BlogPost;