import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, FileText, CheckCircle, Calendar, BarChart3, AlertTriangle, DollarSign, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminBlogGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [isManualGenerating, setIsManualGenerating] = useState(false);
  const [generatedPosts, setGeneratedPosts] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);
  const { toast } = useToast();

  const generateBlogPosts = async (testMode = false) => {
    const setLoading = testMode ? setIsTesting : setIsGenerating;
    setLoading(true);
    setGeneratedPosts([]);

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      toast({
        title: testMode ? "Testing DeepSeek API (2 posts)" : "Generating Blog Posts with DeepSeek",
        description: testMode ? "Testing API connection..." : "This may take a few minutes. Please wait...",
      });

      const { data, error } = await supabase.functions.invoke('generate-blog-posts', {
        body: { testMode }
      });

      if (error) {
        throw error;
      }

      if (data.error) {
        // Handle specific balance error
        if (data.error.includes('Insufficient') || data.error.includes('credits')) {
          toast({
            title: "DeepSeek API Credits Needed",
            description: "Please add credits to your DeepSeek account and try again.",
            variant: "destructive",
          });
          return;
        }
        throw new Error(data.error);
      }

      setGeneratedPosts(data.posts || []);
      
      toast({
        title: "Success!",
        description: `Generated ${data.posts?.length || 0} blog posts successfully with DeepSeek AI${testMode ? ' (TEST MODE)' : ''}`,
      });

    } catch (error) {
      console.error('Error generating blog posts:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to generate blog posts. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const generateManualPosts = async () => {
    setIsManualGenerating(true);
    setGeneratedPosts([]);

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      toast({
        title: "Inserting Manual Blog Posts",
        description: "Adding 10 high-quality, pre-written blog posts to your site...",
      });

      const { data, error } = await supabase.functions.invoke('insert-manual-blog-posts');

      if (error) {
        throw error;
      }

      if (data.error) {
        throw new Error(data.error);
      }

      toast({
        title: "Success!",
        description: `Successfully added ${data.posts_inserted || 10} blog posts to your site!`,
      });

      // Refresh the page or fetch updated posts
      window.location.reload();

    } catch (error) {
      console.error('Error inserting manual blog posts:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to insert manual blog posts. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsManualGenerating(false);
    }
  };

  const fetchAutomationLogs = async () => {
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      const { data, error } = await supabase
        .from('automated_blog_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setLogs(data || []);
      
      toast({
        title: "Logs Updated",
        description: "Fetched latest automation logs",
      });
    } catch (error) {
      console.error('Error fetching logs:', error);
      toast({
        title: "Error",
        description: "Failed to fetch automation logs",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Manual Blog Generation Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Quick Blog Posts (No API Required)
          </CardTitle>
          <CardDescription>
            Get 10 high-quality, SEO-optimized blog posts instantly while you fix your DeepSeek API
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="font-medium text-green-800">Ready to Use</span>
            </div>
            <p className="text-sm text-green-700 mb-2">
              10 pre-written, Miami/Fort Lauderdale focused blog posts ready to publish instantly.
            </p>
            <ul className="text-sm text-green-600 space-y-1 list-disc list-inside">
              <li>Brickell City Centre apartment spotlight</li>
              <li>Fort Lauderdale relocation guide</li>
              <li>Family restaurants in Coral Gables</li>
              <li>Miami Beach lifestyle guides</li>
              <li>Neighborhood comparisons and more</li>
            </ul>
          </div>

          <Button 
            onClick={generateManualPosts} 
            disabled={isManualGenerating}
            className="w-full"
            size="lg"
          >
            {isManualGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Adding Blog Posts...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 mr-2" />
                Add 10 Blog Posts Now (Instant)
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Existing DeepSeek API Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            DeepSeek AI Blog Generator
          </CardTitle>
          <CardDescription>
            Generate SEO-optimized blog posts using DeepSeek AI - 10x more cost-effective than OpenAI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Balance Warning */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-amber-600" />
              <span className="font-medium text-amber-800">DeepSeek API Credits Required</span>
            </div>
            <p className="text-sm text-amber-700 mb-2">
              Make sure you have sufficient credits in your DeepSeek account before generating posts.
            </p>
            <a 
              href="https://platform.deepseek.com/usage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-amber-800 underline hover:text-amber-900"
            >
              Check/Add Credits at DeepSeek Platform →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              onClick={() => generateBlogPosts(true)} 
              disabled={isGenerating || isTesting}
              variant="outline"
              size="lg"
              className="w-full"
            >
              {isTesting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Testing API (2 posts)...
                </>
              ) : (
                <>
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Test API (2 posts)
                </>
              )}
            </Button>

            <Button 
              onClick={() => generateBlogPosts(false)} 
              disabled={isGenerating || isTesting}
              className="w-full"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating 10 posts...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 mr-2" />
                  Generate 10 Blog Posts
                </>
              )}
            </Button>
          </div>

          {generatedPosts.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Generated Posts ({generatedPosts.length})
              </h3>
              <div className="space-y-2">
                {generatedPosts.map((post, index) => (
                  <div key={post.id} className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-800">
                        {index + 1}. {post.title}
                      </span>
                      {post.featured && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-green-600">{post.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
            <strong>DeepSeek AI Advantages:</strong>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>10x more cost-effective than OpenAI GPT-4</li>
              <li>High-quality content generation with local expertise</li>
              <li>Same API compatibility as OpenAI</li>
              <li>Optimized for long-form content (1200+ words)</li>
              <li>Better value for automated posting systems</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Automation Status Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Automated Posting Schedule
          </CardTitle>
          <CardDescription>
            Blog posts are automatically generated and published twice weekly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-800">Monday Posts</span>
              </div>
              <p className="text-sm text-blue-600">
                Market updates, financial tips, and rental advice
              </p>
              <p className="text-xs text-blue-500 mt-1">
                Every Monday at 9:00 AM EST
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="font-medium text-purple-800">Friday Posts</span>
              </div>
              <p className="text-sm text-purple-600">
                Lifestyle content, neighborhood guides, weekend reads
              </p>
              <p className="text-xs text-purple-500 mt-1">
                Every Friday at 9:00 AM EST
              </p>
            </div>
          </div>

          <Button 
            onClick={fetchAutomationLogs}
            variant="outline"
            className="w-full"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            View Automation Logs
          </Button>

          {logs.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium mb-2">Recent Automation Activity</h4>
              <div className="space-y-2">
                {logs.map((log) => (
                  <div key={log.id} className="p-2 bg-gray-50 rounded text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{log.schedule_type} - {log.status}</span>
                      <span className="text-xs text-gray-500">
                        {new Date(log.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    {log.topic && (
                      <p className="text-xs text-gray-600 mt-1">{log.topic}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBlogGenerator;
