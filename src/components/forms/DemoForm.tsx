"use client";

import { useState } from 'react';

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          border: '1px solid #e5e7eb'
        }}
      >
        <h3 style={{ color: '#16a34a', fontSize: '1.25rem', marginBottom: '8px' }}>
          ✓ Thank you for your interest!
        </h3>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          We'll be in touch within 24 hours to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        maxWidth: '400px'
      }}
    >
      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '8px',
          color: '#111827'
        }}
      >
        Get Your Free Demo
      </h3>
      <p
        style={{
          color: '#6b7280',
          marginBottom: '24px',
          fontSize: '0.875rem'
        }}
      >
        See how Visual Layer can improve your defect detection in just 15 minutes
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          style={{
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '0.875rem',
            backgroundColor: '#f9fafb'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Work Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          style={{
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '0.875rem',
            backgroundColor: '#f9fafb'
          }}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleInputChange}
          required
          style={{
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '0.875rem',
            backgroundColor: '#f9fafb'
          }}
        />
        <textarea
          name="message"
          placeholder="Tell us about your defect detection challenges"
          value={formData.message}
          onChange={handleInputChange}
          rows={3}
          style={{
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '0.875rem',
            backgroundColor: '#f9fafb',
            resize: 'vertical'
          }}
        />
        <button
          type="submit"
          style={{
            background: 'linear-gradient(to right, #A63B94, #0197D8, #1BC07D)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '8px'
          }}
        >
          Schedule My Demo
        </button>
      </form>
    </div>
  );
}