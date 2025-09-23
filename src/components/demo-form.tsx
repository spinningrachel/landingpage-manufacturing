import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';

export function DemoForm() {
  const [formData, setFormData] = useState({
    businessEmail: '',
    companySize: '',
    name: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Demo request submitted:', formData);
    // Show success message or redirect
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg border">
      <div className="mb-6">
        <h3 className="text-xl mb-2">See Visual Layer in Action</h3>
        <p className="text-muted-foreground">The demo will show you:</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="businessEmail">Business Email*</Label>
          <Input
            id="businessEmail"
            type="email"
            placeholder="you@company.com"
            value={formData.businessEmail}
            onChange={(e) => handleInputChange('businessEmail', e.target.value)}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="companySize">Company Size*</Label>
          <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-50">1-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-1000">201-1000 employees</SelectItem>
              <SelectItem value="1000+">1000+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="name">Name*</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="message">Questions / Comments</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your visual inspection challenges..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="mt-1"
            rows={3}
          />
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Request a Demo
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          By filling out this form, you agree to our privacy policy.
        </p>
      </form>
    </div>
  );
}