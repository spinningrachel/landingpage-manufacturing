import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <p className="text-green-600">✓ Thank you for subscribing to the Visual Layer newsletter!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <h3 className="text-xl mb-2">Subscribe to our newsletter</h3>
      <p className="text-muted-foreground mb-6">
        Get weekly insights on vision AI for manufacturing
      </p>
      
      <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6">
          <ArrowRight className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}