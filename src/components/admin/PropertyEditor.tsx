import { useState, useEffect } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ImageUploader from './ImageUploader';

interface Property {
  id?: string;
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
}

interface PropertyEditorProps {
  property: Property | null;
  onSave: () => void;
  onCancel: () => void;
}

const PropertyEditor = ({ property, onSave, onCancel }: PropertyEditorProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Property>(property || {
    title: '',
    location: '',
    images: [],
    price: '',
    price_num: 0,
    original_price: '',
    beds: 1,
    baths: 1,
    sqft: 0,
    amenities: [],
    description: '',
    status: 'draft',
    featured: false,
  });

  const [amenitiesText, setAmenitiesText] = useState(
    property?.amenities?.join(', ') || ''
  );

  // Update form data when property prop changes
  useEffect(() => {
    if (property) {
      setFormData(property);
      setAmenitiesText(property.amenities?.join(', ') || '');
    } else {
      setFormData({
        title: '',
        location: '',
        images: [],
        price: '',
        price_num: 0,
        original_price: '',
        beds: 1,
        baths: 1,
        sqft: 0,
        amenities: [],
        description: '',
        status: 'draft',
        featured: false,
      });
      setAmenitiesText('');
    }
  }, [property]);

  const handleInputChange = (field: keyof Property, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmenitiesChange = (value: string) => {
    setAmenitiesText(value);
    const amenitiesArray = value.split(',').map(a => a.trim()).filter(a => a);
    handleInputChange('amenities', amenitiesArray);
  };

  const handleImageUpload = (urls: string[]) => {
    handleInputChange('images', urls);
  };

  const handleSave = async (publish: boolean = false) => {
    if (!formData.title || !formData.location || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const dataToSave = {
        ...formData,
        status: publish ? 'published' : formData.status,
      };

      let error;
      if (property?.id) {
        ({ error } = await supabase
          .from('properties')
          .update(dataToSave)
          .eq('id', property.id));
      } else {
        ({ error } = await supabase
          .from('properties')
          .insert([dataToSave]));
      }

      if (error) throw error;

      toast({
        title: "Success",
        description: property?.id ? "Property updated successfully" : "Property created successfully",
      });
      onSave();
    } catch (error) {
      console.error('Error saving property:', error);
      toast({
        title: "Error",
        description: "Failed to save property",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {property ? 'Edit Property' : 'Create Property'}
            </h1>
            <p className="text-muted-foreground">
              {property ? 'Update property details' : 'Add a new property listing'}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleSave(false)}>
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button onClick={() => handleSave(true)}>
            Publish
          </Button>
        </div>
      </div>

      <Tabs defaultValue="details" className="w-full">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Luxury Beachfront Condo"
              />
            </div>

            <div>
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Miami Beach, Fort Lauderdale"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Price *</Label>
                <Input
                  id="price"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  placeholder="$2,500"
                />
              </div>
              <div>
                <Label htmlFor="price_num">Price (Number) *</Label>
                <Input
                  id="price_num"
                  type="number"
                  value={formData.price_num}
                  onChange={(e) => handleInputChange('price_num', parseInt(e.target.value) || 0)}
                  placeholder="2500"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="original_price">Original Price (Optional)</Label>
              <Input
                id="original_price"
                value={formData.original_price || ''}
                onChange={(e) => handleInputChange('original_price', e.target.value)}
                placeholder="$3,000"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="beds">Bedrooms</Label>
                <Input
                  id="beds"
                  type="number"
                  value={formData.beds}
                  onChange={(e) => handleInputChange('beds', parseInt(e.target.value) || 1)}
                />
              </div>
              <div>
                <Label htmlFor="baths">Bathrooms</Label>
                <Input
                  id="baths"
                  type="number"
                  value={formData.baths}
                  onChange={(e) => handleInputChange('baths', parseInt(e.target.value) || 1)}
                />
              </div>
              <div>
                <Label htmlFor="sqft">Square Feet</Label>
                <Input
                  id="sqft"
                  type="number"
                  value={formData.sqft}
                  onChange={(e) => handleInputChange('sqft', parseInt(e.target.value) || 0)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe the property..."
                rows={6}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => handleInputChange('featured', checked)}
              />
              <Label htmlFor="featured">Featured Property</Label>
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => handleInputChange('status', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="images" className="space-y-4">
          <div>
            <Label>Property Images</Label>
            <p className="text-sm text-muted-foreground mb-4">
              Upload multiple images for this property
            </p>
            <ImageUploader
              currentImages={formData.images}
              onImagesChange={handleImageUpload}
              multiple={true}
            />
          </div>
        </TabsContent>

        <TabsContent value="amenities" className="space-y-4">
          <div>
            <Label htmlFor="amenities">Amenities</Label>
            <p className="text-sm text-muted-foreground mb-2">
              Enter amenities separated by commas
            </p>
            <Textarea
              id="amenities"
              value={amenitiesText}
              onChange={(e) => handleAmenitiesChange(e.target.value)}
              placeholder="Pool, Gym, Parking, Pet Friendly, etc."
              rows={6}
            />
            {formData.amenities.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.amenities.map((amenity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PropertyEditor;