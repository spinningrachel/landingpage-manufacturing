"use client";

import { useState } from 'react';

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Integrate with actual form handler
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{
      backgroundColor: "white",
      padding: "32px",
      borderRadius: "16px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "500px"
    }}>
      <h3 style={{
        fontSize: "1.5rem",
        marginBottom: "24px",
        color: "#111827",
        fontWeight: "800"
      }}>
        Book Your Demo
      </h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name" style={{
            display: "block",
            marginBottom: "8px",
            color: "#374151",
            fontWeight: "500"
          }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "1rem",
              fontFamily: "inherit"
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email" style={{
            display: "block",
            marginBottom: "8px",
            color: "#374151",
            fontWeight: "500"
          }}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your business email address"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "1rem",
              fontFamily: "inherit"
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="website" style={{
            display: "block",
            marginBottom: "8px",
            color: "#374151",
            fontWeight: "500"
          }}>
            Your company website (URL)
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
            placeholder="Your company website"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "1rem",
              fontFamily: "inherit"
            }}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label htmlFor="reason" style={{
            display: "block",
            marginBottom: "8px",
            color: "#374151",
            fontWeight: "500"
          }}>
            What will we talk about?
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="What would you most like to focus on when we meet up?"
            rows={4}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "1rem",
              fontFamily: "inherit",
              resize: "vertical"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#A63B94",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            background: "linear-gradient(to right, #A63B94, #0197D8, #1BC07D)"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}