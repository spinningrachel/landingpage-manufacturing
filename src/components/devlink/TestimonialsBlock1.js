"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsBlock1({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="testimonials_block" tag="div">
      <TestimonialCard
        quoteText="fastdup worked great. Already on my way."
        positionText="CEO Playground.ai, ex CEO Mixpanel"
        nameText="Suhail Doshi"
        profilePicture="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666e935b85c77cf08cada2cf_Suhail%20D.%20Founder%2C%20Playground%20Background%20Removed.webp"
      />
      <TestimonialCard
        profilePicture="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666e92e62115fa26d89f23d4_Srinivas%20Meesho%20Background%20Removed.webp"
        nameText="Srinivasa Rao Jami"
        positionText="Manager, Data Science, Meesho"
        quoteText="Meesho is using fastdup to curate 1,000,000,000 images of our digital catalog."
      />
    </_Component>
  );
}
