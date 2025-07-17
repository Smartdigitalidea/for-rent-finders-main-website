
import { useState, useEffect } from 'react';
import { ArrowLeft, Save, Eye, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import RichTextEditor from './RichTextEditor';
import ImageUploader from './ImageUploader';

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
  meta_title?: string;
  meta_description?: string;
  keywords?: string[];
  slug?: string;
  tags?: string[];
  read_time: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  scheduled_at?: string;
}

interface BlogPostEditorProps {
  post?: BlogPost | null;
  onSave: () => void;
  onCancel: () => void;
}

const BlogPostEditor = ({ post, onSave, onCancel }: BlogPostEditorProps) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'For Rent Finders Team',
    category: '',
    status: 'draft',
    featured: false,
    image_url: '',
    meta_title: '',
    meta_description: '',
    keywords: '',
    slug: '',
    tags: '',
    read_time: '5 min read'
  });
  
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('content');
  const { toast } = useToast();

  const categories = [
    'Neighborhoods',
    'Finance',
    'Apartment Types',
    'Credit & Approval',
    'City Comparison',
    'Luxury Living',
    'Moving Tips',
    'Market Updates',
    'Lifestyle'
  ];

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        excerpt: post.excerpt || '',
        content: post.content || '',
        author: post.author || 'For Rent Finders Team',
        category: post.category || '',
        status: post.status || 'draft',
        featured: post.featured || false,
        image_url: post.image_url || '',
        meta_title: post.meta_title || '',
        meta_description: post.meta_description || '',
        keywords: post.keywords?.join(', ') || '',
        slug: post.slug || '',
        tags: post.tags?.join(', ') || '',
        read_time: post.read_time || '5 min read'
      });
    }
  }, [post]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async (publishNow = false) => {
    if (!formData.title.trim() || !formData.content.trim()) {
      toast({
        title: "Validation Error",
        description: "Title and content are required",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      const postData = {
        title: formData.title.trim(),
        excerpt: formData.excerpt.trim(),
        content: formData.content,
        author: formData.author,
        category: formData.category,
        status: publishNow ? 'published' : formData.status,
        featured: formData.featured,
        image_url: formData.image_url,
        meta_title: formData.meta_title || null,
        meta_description: formData.meta_description || null,
        keywords: formData.keywords ? formData.keywords.split(',').map(k => k.trim()).filter(Boolean) : null,
        slug: formData.slug || null,
        tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : null,
        read_time: formData.read_time,
        published_at: publishNow ? new Date().toISOString() : (post?.published_at || new Date().toISOString())
      };

      let result;
      if (post) {
        result = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', post.id);
      } else {
        result = await supabase
          .from('blog_posts')
          .insert([postData]);
      }

      if (result.error) throw result.error;

      toast({
        title: "Success",
        description: `Post ${post ? 'updated' : 'created'} successfully${publishNow ? ' and published' : ''}`,
      });

      onSave();
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: "Error",
        description: "Failed to save blog post",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = (imageUrl: string) => {
    handleInputChange('image_url', imageUrl);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onCancel}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Posts
          </Button>
          <div>
            <h1 className="text-2xl font-bold">
              {post ? 'Edit Post' : 'Create New Post'}
            </h1>
            <p className="text-muted-foreground">
              {post ? 'Update your blog post' : 'Write and publish a new blog post'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => handleSave(false)} disabled={saving}>
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button onClick={() => handleSave(true)} disabled={saving}>
            <Eye className="w-4 h-4 mr-2" />
            {formData.status === 'published' ? 'Update & Publish' : 'Publish Now'}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {/* Basic Content */}
          <Card>
            <CardHeader>
              <CardTitle>Post Content</CardTitle>
              <CardDescription>Write your blog post content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter post title..."
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange('excerpt', e.target.value)}
                  placeholder="Brief description of the post..."
                  rows={3}
                />
              </div>

              <div>
                <Label>Featured Image</Label>
                <ImageUploader
                  currentImage={formData.image_url}
                  onImageUpload={handleImageUpload}
                />
              </div>

              <div>
                <Label>Content *</Label>
                <RichTextEditor
                  content={formData.content}
                  onChange={(content) => handleInputChange('content', content)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          {/* Post Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Post Settings</CardTitle>
              <CardDescription>Configure post metadata and publishing options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => handleInputChange('author', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="readTime">Read Time</Label>
                  <Input
                    id="readTime"
                    value={formData.read_time}
                    onChange={(e) => handleInputChange('read_time', e.target.value)}
                    placeholder="5 min read"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                  placeholder="tag1, tag2, tag3"
                />
                <p className="text-sm text-muted-foreground mt-1">Separate tags with commas</p>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleInputChange('featured', checked)}
                />
                <Label htmlFor="featured">Featured Post</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-6">
          {/* SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your post for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="slug">URL Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  placeholder="auto-generated-from-title"
                />
                <p className="text-sm text-muted-foreground mt-1">Leave empty to auto-generate from title</p>
              </div>

              <div>
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={formData.meta_title}
                  onChange={(e) => handleInputChange('meta_title', e.target.value)}
                  placeholder="SEO title (defaults to post title)"
                />
              </div>

              <div>
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={formData.meta_description}
                  onChange={(e) => handleInputChange('meta_description', e.target.value)}
                  placeholder="Brief description for search engines..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="keywords">Keywords</Label>
                <Input
                  id="keywords"
                  value={formData.keywords}
                  onChange={(e) => handleInputChange('keywords', e.target.value)}
                  placeholder="keyword1, keyword2, keyword3"
                />
                <p className="text-sm text-muted-foreground mt-1">Separate keywords with commas</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BlogPostEditor;
