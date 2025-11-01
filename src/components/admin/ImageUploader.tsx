
import { useState } from 'react';
import { Upload, X, Image as ImageIcon, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface ImageUploaderProps {
  currentImage?: string;
  currentImages?: string[];
  onImageUpload?: (imageUrl: string) => void;
  onImagesChange?: (imageUrls: string[]) => void;
  multiple?: boolean;
}

const ImageUploader = ({ 
  currentImage, 
  currentImages = [], 
  onImageUpload,
  onImagesChange,
  multiple = false 
}: ImageUploaderProps) => {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const { toast } = useToast();

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      if (multiple && onImagesChange) {
        onImagesChange([...currentImages, data.publicUrl]);
      } else if (onImageUpload) {
        onImageUpload(data.publicUrl);
      }
      
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Upload failed",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    if (multiple) {
      const files = Array.from(e.dataTransfer.files);
      files.forEach(file => handleFileUpload(file));
    } else {
      const file = e.dataTransfer.files[0];
      if (file) {
        handleFileUpload(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (multiple) {
      const files = e.target.files ? Array.from(e.target.files) : [];
      files.forEach(file => handleFileUpload(file));
    } else {
      const file = e.target.files?.[0];
      if (file) {
        handleFileUpload(file);
      }
    }
  };

  const removeImage = (index?: number) => {
    if (multiple && onImagesChange && typeof index === 'number') {
      const newImages = currentImages.filter((_, i) => i !== index);
      onImagesChange(newImages);
    } else if (onImageUpload) {
      onImageUpload('');
    }
  };

  const handleAddUrl = () => {
    if (!imageUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid image URL",
        variant: "destructive",
      });
      return;
    }
    
    if (multiple && onImagesChange) {
      onImagesChange([...currentImages, imageUrl.trim()]);
    } else if (onImageUpload) {
      onImageUpload(imageUrl.trim());
    }
    
    setImageUrl('');
    toast({
      title: "Success",
      description: "Image URL added successfully",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Or paste image URL here..."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddUrl();
            }
          }}
        />
        <Button
          type="button"
          onClick={handleAddUrl}
          variant="outline"
          className="shrink-0"
        >
          <Link className="w-4 h-4 mr-2" />
          Add URL
        </Button>
      </div>
      {multiple && currentImages.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {currentImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Property image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <Button
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => removeImage(index)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      ) : !multiple && currentImage ? (
        <div className="relative inline-block">
          <img
            src={currentImage}
            alt="Featured image"
            className="w-full max-w-md h-48 object-cover rounded-lg"
          />
          <Button
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2"
            onClick={() => removeImage()}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ) : null}
      {(multiple || !currentImage) && (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragOver ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
        >
          <ImageIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-medium mb-2">
            {multiple ? 'Upload Property Images' : 'Upload Featured Image'}
          </h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop {multiple ? 'images' : 'an image'} here, or click to select
          </p>
          <input
            type="file"
            accept="image/*"
            multiple={multiple}
            onChange={handleFileSelect}
            className="hidden"
            id="image-upload"
            disabled={uploading}
          />
          <Button
            variant="outline"
            onClick={() => document.getElementById('image-upload')?.click()}
            disabled={uploading}
          >
            <Upload className="w-4 h-4 mr-2" />
            {uploading ? 'Uploading...' : `Select ${multiple ? 'Images' : 'Image'}`}
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Maximum file size: 5MB. Supported formats: JPG, PNG, WebP, GIF
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
