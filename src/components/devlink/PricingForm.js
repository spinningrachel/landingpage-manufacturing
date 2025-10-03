"use client";
import React from "react";
import { PricingForm as DevLinkPricingForm } from "../../../devlink/PricingForm";

export function PricingForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      field: formData.get('field'),
      'Reason-for-meeting': formData.get('Reason-for-meeting')
    };

    console.log('Form data:', data);

    // Submit to Webflow
    try {
      const response = await fetch('https://visual-layerxwidelab.webflow.io/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString()
      });

      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <DevLinkPricingForm
      formProps={{
        onSubmit: handleSubmit,
        method: 'post'
      }}
    />
  );
}

