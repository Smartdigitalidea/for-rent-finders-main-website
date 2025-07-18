
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { X, MapPin, DollarSign, Calendar, Home, Star, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendSurveyEmail, type SurveyFormData } from '@/services/emailService';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: string;
}

const SurveyModal = ({ isOpen, onClose, city }: SurveyModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<SurveyFormData>({
    name: '',
    email: '',
    phone: '',
    city: city || '',
    budget: '',
    moveInDate: '',
    bedrooms: '',
    amenities: [],
    additionalNotes: ''
  });

  const budgetRanges = [
    'Under $1,500',
    '$1,500 - $2,000',
    '$2,000 - $2,500', 
    '$2,500 - $3,000',
    '$3,000 - $4,000',
    '$4,000 - $5,000',
    'Over $5,000'
  ];

  const amenitiesList = [
    'Pool',
    'Gym/Fitness Center',
    'Parking',
    'Pet-Friendly',
    'Balcony/Patio',
    'In-Unit Laundry',
    'Concierge',
    'Rooftop Access',
    'Beach Access',
    'Business Center'
  ];

  const handleInputChange = (field: keyof SurveyFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: checked 
        ? [...(prev.amenities || []), amenity]
        : (prev.amenities || []).filter(a => a !== amenity)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.city || !formData.budget) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, city, and budget are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await sendSurveyEmail(formData);
      
      if (success) {
        toast({
          title: "Survey submitted successfully!",
          description: "We'll contact you within 24 hours with personalized apartment recommendations.",
          duration: 5000,
        });
        onClose();
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          budget: '',
          moveInDate: '',
          bedrooms: '',
          amenities: [],
          additionalNotes: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Survey submission error:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or call us at (855) 367-7368.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-orange-500 text-white p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold">Find Your Perfect Apartment</DialogTitle>
                    <p className="text-white/90 mt-1">Tell us what you're looking for - it takes less than 3 minutes!</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white hover:bg-white/10 h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </DialogHeader>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-300 fill-current" />
                <span className="text-sm font-medium">4.9 Rating</span>
              </div>
              <div className="bg-green-500/80 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">100% Free</span>
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">No Obligation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">1</div>
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                  className="mt-1"
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-sm font-medium">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(555) 123-4567"
                className="mt-1"
              />
            </div>
          </div>

          {/* Apartment Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">2</div>
              Apartment Preferences
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Preferred City *
                </Label>
                <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Miami">Miami</SelectItem>
                    <SelectItem value="Fort Lauderdale">Fort Lauderdale</SelectItem>
                    <SelectItem value="Both">Both Cities</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Monthly Budget *
                </Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Move-in Date
                </Label>
                <Select value={formData.moveInDate} onValueChange={(value) => handleInputChange('moveInDate', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="When do you want to move?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ASAP">ASAP</SelectItem>
                    <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                    <SelectItem value="1-2 months">1-2 months</SelectItem>
                    <SelectItem value="2-3 months">2-3 months</SelectItem>
                    <SelectItem value="3+ months">3+ months</SelectItem>
                    <SelectItem value="Just browsing">Just browsing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Bedrooms
                </Label>
                <Select value={formData.bedrooms} onValueChange={(value) => handleInputChange('bedrooms', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="How many bedrooms?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Studio">Studio</SelectItem>
                    <SelectItem value="1 Bedroom">1 Bedroom</SelectItem>
                    <SelectItem value="2 Bedrooms">2 Bedrooms</SelectItem>
                    <SelectItem value="3 Bedrooms">3 Bedrooms</SelectItem>
                    <SelectItem value="4+ Bedrooms">4+ Bedrooms</SelectItem>
                    <SelectItem value="Flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">3</div>
              Desired Amenities (Optional)
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {amenitiesList.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity}
                    checked={formData.amenities?.includes(amenity) || false}
                    onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                  />
                  <Label htmlFor={amenity} className="text-sm font-medium">{amenity}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">4</div>
              Additional Notes (Optional)
            </h3>
            
            <div>
              <Label htmlFor="additionalNotes" className="text-sm font-medium">
                Anything else we should know?
              </Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                placeholder="Tell us about specific neighborhoods, must-have features, pet requirements, etc."
                className="mt-1 min-h-[80px] resize-none"
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary-glow hover:to-orange-glow text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Get My Apartment Matches
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground mt-3 text-center">
              By submitting this form, you agree to be contacted by our team. We respect your privacy and will never spam you.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SurveyModal;
