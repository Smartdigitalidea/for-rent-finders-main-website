
import { useState } from 'react';
import { X, Calendar, DollarSign, Home, Briefcase, CreditCard, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: string;
}

const SurveyModal = ({ isOpen, onClose, city }: SurveyModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    apartmentSize: '',
    budget: '',
    customBudget: '',
    moveDate: undefined as Date | undefined,
    creditScore: '',
    employmentType: '',
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const totalSteps = 7;

  const budgetOptions = [
    '$1,600', '$1,800', '$2,000', '$2,300', '$2,600', '$3,000', 'Custom'
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Survey submitted:', { city, ...formData });
    // Here you would typically send the data to your backend
    alert('Thank you! We\'ll be in touch soon with personalized apartment recommendations.');
    onClose();
    setCurrentStep(1);
    setFormData({
      apartmentSize: '',
      budget: '',
      customBudget: '',
      moveDate: undefined,
      creditScore: '',
      employmentType: '',
      fullName: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  if (!isOpen) return null;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Home className="w-12 h-12 text-[#3384B3] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">What size apartment are you looking for?</h3>
              <p className="text-gray-600">Choose the size that fits your lifestyle in {city}</p>
            </div>
            <RadioGroup value={formData.apartmentSize} onValueChange={(value) => setFormData({...formData, apartmentSize: value})}>
              {['Studio', '1 Bedroom', '2 Bedroom', '3+ Bedrooms'].map((size) => (
                <div key={size} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value={size} id={size} />
                  <Label htmlFor={size} className="flex-1 cursor-pointer">{size}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-[#3384B3] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">What's your monthly budget?</h3>
              <p className="text-gray-600">This helps us find apartments within your price range</p>
            </div>
            <RadioGroup value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
              {budgetOptions.map((budget) => (
                <div key={budget} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value={budget} id={budget} />
                  <Label htmlFor={budget} className="flex-1 cursor-pointer">{budget}</Label>
                </div>
              ))}
            </RadioGroup>
            {formData.budget === 'Custom' && (
              <div className="mt-4">
                <Label htmlFor="customBudget">Enter your budget</Label>
                <Input
                  id="customBudget"
                  type="number"
                  placeholder="e.g., 2500"
                  value={formData.customBudget}
                  onChange={(e) => setFormData({...formData, customBudget: e.target.value})}
                />
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-[#3384B3] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">When are you moving?</h3>
              <p className="text-gray-600">This helps us prioritize available listings</p>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !formData.moveDate && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {formData.moveDate ? format(formData.moveDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={formData.moveDate}
                  onSelect={(date) => setFormData({...formData, moveDate: date})}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <CreditCard className="w-12 h-12 text-[#3384B3] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">How's your credit?</h3>
              <p className="text-gray-600">This helps us match you with appropriate properties</p>
            </div>
            <RadioGroup value={formData.creditScore} onValueChange={(value) => setFormData({...formData, creditScore: value})}>
              {['Below 550', '550-650', '650+', 'No credit / International'].map((score) => (
                <div key={score} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value={score} id={score} />
                  <Label htmlFor={score} className="flex-1 cursor-pointer">{score}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Briefcase className="w-12 h-12 text-[#3384B3] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Employment type?</h3>
              <p className="text-gray-600">This helps landlords understand your income verification</p>
            </div>
            <RadioGroup value={formData.employmentType} onValueChange={(value) => setFormData({...formData, employmentType: value})}>
              {['W-2 Employee', 'Contractor', 'Self-employed', 'Student', 'Other'].map((type) => (
                <div key={type} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value={type} id={type} />
                  <Label htmlFor={type} className="flex-1 cursor-pointer">{type}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <User className="w-12 h-12 text-[#3384B3] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-600">We'll use this to send you personalized recommendations</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Anything else we should know?</h3>
              <p className="text-gray-600">Optional: Tell us about specific needs, pet requirements, etc.</p>
            </div>
            <Textarea
              placeholder="e.g., I have a large dog, need parking, prefer ground floor..."
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              rows={4}
            />
            <div className="bg-[#A2CDDD] bg-opacity-20 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-700 mb-2">⭐️ <strong>4.9 Average Rating</strong> | Over 300 Happy Renters</p>
              <p className="text-xs text-gray-600">Join hundreds of satisfied renters who found their perfect home with our help!</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Find Your Perfect Apartment</h2>
            <p className="text-sm text-gray-600">{city} • Step {currentStep} of {totalSteps}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-4 pt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#3384B3] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6">
          {renderStep()}
        </div>

        <div className="sticky bottom-0 bg-white border-t p-4 flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            className="bg-[#3384B3] hover:bg-[#2a6b91] text-white"
            disabled={
              (currentStep === 1 && !formData.apartmentSize) ||
              (currentStep === 2 && !formData.budget) ||
              (currentStep === 3 && !formData.moveDate) ||
              (currentStep === 4 && !formData.creditScore) ||
              (currentStep === 5 && !formData.employmentType) ||
              (currentStep === 6 && (!formData.fullName || !formData.email || !formData.phone))
            }
          >
            {currentStep === totalSteps ? 'Start Your Search!' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SurveyModal;
