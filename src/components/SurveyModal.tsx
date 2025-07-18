
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Star, Quote, CheckCircle, User, Phone, Mail, MapPin, DollarSign, Calendar, Home } from 'lucide-react';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: string;
}

const SurveyModal = ({ isOpen, onClose, city }: SurveyModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: city || '',
    budget: '',
    bedrooms: '',
    timeline: '',
    preferences: ''
  });

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Miami Beach",
      rating: 5,
      text: "Found my dream apartment in just 3 days! The team made everything so easy.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus T.",
      location: "Fort Lauderdale",
      rating: 5,
      text: "Saved me hours of searching. They knew exactly what I was looking for!",
      avatar: "👨‍💻"
    },
    {
      name: "Jennifer L.",
      location: "Brickell",
      rating: 5,
      text: "Professional, fast, and completely free. Highly recommend!",
      avatar: "👩‍🎓"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Survey submitted:', formData);
    onClose();
    // Here you would typically send the data to your backend
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email;
      case 2:
        return formData.city && formData.budget && formData.bedrooms;
      case 3:
        return formData.timeline;
      default:
        return false;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden p-0 bg-white border-2 border-gray-200 shadow-2xl w-[95vw] md:w-full">
        <div className="flex flex-col lg:flex-row h-full max-h-[95vh]">
          {/* Left Column - Form with enhanced contrast - Mobile responsive */}
          <div className="flex-1 p-4 md:p-8 bg-gradient-to-br from-gray-50 to-white lg:border-r-2 border-gray-100 overflow-y-auto">
            <DialogHeader className="mb-6 md:mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <DialogTitle className="text-xl md:text-3xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                    Find Your Dream Apartment
                  </DialogTitle>
                  <p className="text-gray-600 mt-2 font-medium text-sm md:text-base">
                    Step {step} of 3 - Takes less than 2 minutes
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="rounded-lg p-2 hover:bg-gray-200 transition-colors border border-gray-300 bg-white shadow-sm"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              {/* Progress Bar with enhanced visibility */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-primary to-orange-500 h-3 rounded-full transition-all duration-500 shadow-lg"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </DialogHeader>

            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 mb-4 md:mb-6 p-3 md:p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">Let's get to know you</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 shadow-sm">
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Enter your first name"
                      className="mt-2 border-2 border-gray-300 focus:border-primary"
                    />
                  </div>
                  <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 shadow-sm">
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Enter your last name"
                      className="mt-2 border-2 border-gray-300 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 shadow-sm">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="pl-10 border-2 border-gray-300 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 shadow-sm">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      className="pl-10 border-2 border-gray-300 focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Apartment Preferences */}
            {step === 2 && (
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 mb-4 md:mb-6 p-3 md:p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Home className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">Tell us about your ideal apartment</h3>
                </div>

                <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 shadow-sm">
                  <Label htmlFor="city" className="text-gray-700 font-medium">Preferred City *</Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 z-10" />
                    <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                      <SelectTrigger className="pl-10 border-2 border-gray-300 focus:border-primary">
                        <SelectValue placeholder="Select your preferred city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="miami">Miami</SelectItem>
                        <SelectItem value="fort-lauderdale">Fort Lauderdale</SelectItem>
                        <SelectItem value="both">Both Miami & Fort Lauderdale</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 shadow-sm">
                    <Label htmlFor="budget" className="text-gray-700 font-medium">Monthly Budget *</Label>
                    <div className="relative mt-2">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 z-10" />
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="pl-10 border-2 border-gray-300 focus:border-primary">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1500">Under $1,500</SelectItem>
                          <SelectItem value="1500-2500">$1,500 - $2,500</SelectItem>
                          <SelectItem value="2500-3500">$2,500 - $3,500</SelectItem>
                          <SelectItem value="3500-5000">$3,500 - $5,000</SelectItem>
                          <SelectItem value="over-5000">Over $5,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 shadow-sm">
                    <Label htmlFor="bedrooms" className="text-gray-700 font-medium">Bedrooms *</Label>
                    <Select value={formData.bedrooms} onValueChange={(value) => handleInputChange('bedrooms', value)}>
                      <SelectTrigger className="mt-2 border-2 border-gray-300 focus:border-primary">
                        <SelectValue placeholder="Select bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="1">1 Bedroom</SelectItem>
                        <SelectItem value="2">2 Bedrooms</SelectItem>
                        <SelectItem value="3">3 Bedrooms</SelectItem>
                        <SelectItem value="4+">4+ Bedrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 shadow-sm">
                  <Label htmlFor="preferences" className="text-gray-700 font-medium">Special Preferences</Label>
                  <Textarea
                    id="preferences"
                    value={formData.preferences}
                    onChange={(e) => handleInputChange('preferences', e.target.value)}
                    placeholder="Pet-friendly, gym, pool, parking, etc."
                    className="mt-2 border-2 border-gray-300 focus:border-primary"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Timeline */}
            {step === 3 && (
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 mb-4 md:mb-6 p-3 md:p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">When do you want to move?</h3>
                </div>

                <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 shadow-sm">
                  <Label htmlFor="timeline" className="text-gray-700 font-medium">Move-in Timeline *</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger className="mt-2 border-2 border-gray-300 focus:border-primary">
                      <SelectValue placeholder="Select your timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP (Within 2 weeks)</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="2-months">Within 2 months</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 md:p-6 rounded-xl border-2 border-green-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold text-green-800">What happens next?</h4>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      We'll contact you within 2 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      Get matched with perfect apartments
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      Schedule tours at your convenience
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation Buttons with enhanced styling */}
            <div className="flex justify-between mt-6 md:mt-8 pt-4 md:pt-6 border-t-2 border-gray-200">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="px-4 md:px-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Back
              </Button>

              {step < 3 ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="bg-gradient-to-r from-primary to-orange-500 text-white px-6 md:px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                  className="bg-gradient-to-r from-primary to-orange-500 text-white px-6 md:px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit & Get Matched
                </Button>
              )}
            </div>
          </div>

          {/* Right Column - Testimonials - Hidden on mobile to save space */}
          <div className="hidden lg:block w-80 bg-gradient-to-br from-gray-100 to-gray-50 p-8 border-l-2 border-gray-200 overflow-y-auto">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-gray-800">What Our Clients Say</h3>
              <p className="text-sm text-gray-600 font-medium">Join 1,000+ happy renters</p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-4 h-4 text-gray-400 absolute -top-1 -left-1" />
                    <p className="text-sm text-gray-700 pl-4">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white rounded-xl border-2 border-primary/20 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-gray-600 font-medium">Free Service</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SurveyModal;
