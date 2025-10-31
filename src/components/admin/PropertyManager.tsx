import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import PropertyList from './PropertyList';
import PropertyEditor from './PropertyEditor';

interface Property {
  id: string;
  title: string;
  location: string;
  images: string[];
  price: string;
  price_num: number;
  original_price?: string;
  beds: number;
  baths: number;
  sqft: number;
  amenities: string[];
  description: string;
  status: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

const PropertyManager = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchProperties();
    setupRealtimeSubscription();
  }, []);

  const fetchProperties = async () => {
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProperties(data || []);
    } catch (error) {
      console.error('Error fetching properties:', error);
      toast({
        title: "Error",
        description: "Failed to fetch properties",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const setupRealtimeSubscription = async () => {
    const { supabase } = await import('@/integrations/supabase/client');
    
    const channel = supabase
      .channel('properties_changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'properties'
      }, (payload) => {
        console.log('Real-time update:', payload);
        
        if (payload.eventType === 'INSERT') {
          setProperties(prev => [payload.new as Property, ...prev]);
        } else if (payload.eventType === 'UPDATE') {
          setProperties(prev => prev.map(property => 
            property.id === payload.new.id ? payload.new as Property : property
          ));
        } else if (payload.eventType === 'DELETE') {
          setProperties(prev => prev.filter(property => property.id !== payload.old.id));
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const handleCreateNew = () => {
    setEditingProperty(null);
    setIsCreating(true);
  };

  const handleEdit = (property: Property) => {
    setEditingProperty(property);
    setIsCreating(true);
  };

  const handleSave = () => {
    setIsCreating(false);
    setEditingProperty(null);
    fetchProperties();
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingProperty(null);
  };

  if (isCreating) {
    return (
      <PropertyEditor
        property={editingProperty}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Property Management</h1>
          <p className="text-muted-foreground">Manage your property listings</p>
        </div>
        <Button onClick={handleCreateNew} className="gap-2">
          <Plus className="w-4 h-4" />
          New Property
        </Button>
      </div>

      <PropertyList
        properties={properties}
        loading={loading}
        onEdit={handleEdit}
        onRefresh={fetchProperties}
      />
    </div>
  );
};

export default PropertyManager;