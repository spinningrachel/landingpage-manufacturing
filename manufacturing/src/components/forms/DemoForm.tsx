"use client";

import { useState } from 'react';
import { Block, Form, TextInput, TextArea, Select, SelectOption, Button } from '@/devlink/_Builtin';

export function DemoForm() {
  const [formData, setFormData] = useState({
    businessEmail: '',
    companySize: '',
    name: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    // Form submission logic would go here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Block
      tag="div"
      className="demo-form-container"
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '32px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb'
      }}
    >
      <Block tag="div" style={{ marginBottom: '24px' }}>
        <Block
          tag="h3"
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            marginBottom: '8px',
            color: '#111827'
          }}
        >
          See Visual Layer in Action
        </Block>
        <Block
          tag="p"
          style={{
            color: '#6b7280',
            fontSize: '0.875rem'
          }}
        >
          The demo will show you:
        </Block>
      </Block>

      <Form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <Block tag="div">
          <Block
            tag="label"
            htmlFor="businessEmail"
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '4px',
              color: '#374151'
            }}
          >
            Business Email*
          </Block>
          <TextInput
            id="businessEmail"
            type="email"
            placeholder="you@company.com"
            value={formData.businessEmail}
            onChange={(e) => handleInputChange('businessEmail', e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '0.875rem'
            }}
          />
        </Block>

        <Block tag="div">
          <Block
            tag="label"
            htmlFor="companySize"
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '4px',
              color: '#374151'
            }}
          >
            Company Size*
          </Block>
          <Select
            id="companySize"
            value={formData.companySize}
            onChange={(e) => handleInputChange('companySize', e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '0.875rem'
            }}
          >
            <SelectOption value="">Select company size</SelectOption>
            <SelectOption value="1-50">1-50 employees</SelectOption>
            <SelectOption value="51-200">51-200 employees</SelectOption>
            <SelectOption value="201-1000">201-1000 employees</SelectOption>
            <SelectOption value="1000+">1000+ employees</SelectOption>
          </Select>
        </Block>

        <Block tag="div">
          <Block
            tag="label"
            htmlFor="name"
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '4px',
              color: '#374151'
            }}
          >
            Name*
          </Block>
          <TextInput
            id="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '0.875rem'
            }}
          />
        </Block>

        <Block tag="div">
          <Block
            tag="label"
            htmlFor="message"
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '4px',
              color: '#374151'
            }}
          >
            Questions / Comments
          </Block>
          <TextArea
            id="message"
            placeholder="Tell us about your visual inspection challenges..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={3}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '0.875rem',
              resize: 'vertical'
            }}
          />
        </Block>

        <Block tag="div" style={{ paddingTop: '16px' }}>
          <Button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '12px 16px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            Request a Demo
          </Button>
        </Block>

        <Block
          tag="p"
          style={{
            fontSize: '0.75rem',
            color: '#6b7280',
            marginTop: '16px',
            textAlign: 'center'
          }}
        >
          By filling out this form, you agree to our privacy policy.
        </Block>
      </Form>
    </Block>
  );
}