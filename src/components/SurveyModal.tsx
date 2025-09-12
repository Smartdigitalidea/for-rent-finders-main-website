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
const SurveyModal = ({
  isOpen,
  onClose,
  city
}: SurveyModalProps) => {
  const {
    toast
  } = useToast();
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
  const budgetRanges = ['Under $1,500', '$1,500 - $2,000', '$2,000 - $2,500', '$2,500 - $3,000', '$3,000 - $4,000', '$4,000 - $5,000', 'Over $5,000'];
  const amenitiesList = ['Pool', 'Gym/Fitness Center', 'Parking', 'Pet-Friendly', 'Balcony/Patio', 'In-Unit Laundry', 'Concierge', 'Rooftop Access', 'Beach Access', 'Business Center'];
  const handleInputChange = (field: keyof SurveyFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: checked ? [...(prev.amenities || []), amenity] : (prev.amenities || []).filter(a => a !== amenity)
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.city || !formData.budget) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, city, and budget are required.",
        variant: "destructive"
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
          duration: 5000
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
        description: "Please try again or call us at (866) 367-7368.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[95vh] p-0 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-primary to-orange-500 text-white p-6 relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold">Find Your Perfect Apartment</DialogTitle>
                    <p className="text-white/90 text-sm mt-1">Tell us what you're looking for - it takes less than 3 minutes!</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/10 h-8 w-8 p-0">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </DialogHeader>
            
            {/* Trust indicators */}
            
          </div>
        </div>

        {/* Embedded Form */}
        <div className="flex-1 overflow-hidden min-h-[700px] bg-transparent">
          <iframe src="https://link.msgsndr.com/widget/form/xH2f6TFUbjW4m1xQByEV" style={{
          width: '100%',
          height: '700px',
          border: 'none',
          borderRadius: '3px'
        }} id="inline-xH2f6TFUbjW4m1xQByEV" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Find Your Perfect Apartment form" data-height="1324" data-layout-iframe-id="inline-xH2f6TFUbjW4m1xQByEV" data-form-id="xH2f6TFUbjW4m1xQByEV" title="Find Your Perfect Apartment form" className="w-full" />
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        </div>
      </DialogContent>
    </Dialog>;
};
export default SurveyModal;