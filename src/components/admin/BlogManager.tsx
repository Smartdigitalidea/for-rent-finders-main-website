
import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import BlogPostList from './BlogPostList';
import BlogPostEditor from './BlogPostEditor';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  status: string;
  featured: boolean;
  image_url: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  meta_title?: string;
  meta_description?: string;
  keywords?: string[];
  slug?: string;
  tags?: string[];
  read_time: string;
}

const BlogManager = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
    setupRealtimeSubscription();
  }, []);

  const fetchPosts = async () => {
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: "Error",
        description: "Failed to fetch blog posts",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const setupRealtimeSubscription = async () => {
    const { supabase } = await import('@/integrations/supabase/client');
    
    const channel = supabase
      .channel('blog_posts_changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'blog_posts'
      }, (payload) => {
        console.log('Real-time update:', payload);
        
        if (payload.eventType === 'INSERT') {
          setPosts(prev => [payload.new as BlogPost, ...prev]);
        } else if (payload.eventType === 'UPDATE') {
          setPosts(prev => prev.map(post => 
            post.id === payload.new.id ? payload.new as BlogPost : post
          ));
        } else if (payload.eventType === 'DELETE') {
          setPosts(prev => prev.filter(post => post.id !== payload.old.id));
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const handleCreateNew = () => {
    setEditingPost(null);
    setIsCreating(true);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsCreating(true);
  };

  const handleSave = () => {
    setIsCreating(false);
    setEditingPost(null);
    fetchPosts(); // Refresh the list
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingPost(null);
  };

  if (isCreating) {
    return (
      <BlogPostEditor
        post={editingPost}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blog Management</h1>
          <p className="text-muted-foreground">Manage your blog posts and content</p>
        </div>
        <Button onClick={handleCreateNew} className="gap-2">
          <Plus className="w-4 h-4" />
          New Post
        </Button>
      </div>

      <BlogPostList
        posts={posts}
        loading={loading}
        onEdit={handleEdit}
        onRefresh={fetchPosts}
      />
    </div>
  );
};

export default BlogManager;
