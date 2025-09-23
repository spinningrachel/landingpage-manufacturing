"use client";

import { useState } from 'react';
import { Block, Form, TextInput, Button } from '@/devlink/_Builtin';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  if (isSubmitted) {
    return (
      <Block
        tag="div"
        style={{
          textAlign: 'center',
          padding: '32px'
        }}
      >
        <Block
          tag="p"
          style={{
            color: '#16a34a',
            fontSize: '1rem'
          }}
        >
          ✓ Thank you for subscribing to the Visual Layer newsletter!
        </Block>
      </Block>
    );
  }

  return (
    <Block
      tag="div"
      style={{
        backgroundColor: '#f9fafb',
        borderRadius: '8px',
        padding: '32px',
        textAlign: 'center'
      }}
    >
      <Block
        tag="h3"
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '8px',
          color: '#111827'
        }}
      >
        Subscribe to our newsletter
      </Block>
      <Block
        tag="p"
        style={{
          color: '#6b7280',
          marginBottom: '24px',
          fontSize: '0.875rem'
        }}
      >
        Get weekly insights on vision AI for manufacturing
      </Block>

      <Form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          gap: '12px',
          maxWidth: '28rem',
          margin: '0 auto',
          alignItems: 'center'
        }}
      >
        <TextInput
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            flex: 1,
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '0.875rem'
          }}
        />
        <Button
          type="submit"
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '8px 24px',
            borderRadius: '6px',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          →
        </Button>
      </Form>
    </Block>
  );
}