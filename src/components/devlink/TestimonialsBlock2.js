"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsBlock2({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="testimonials_block" tag="div">
      <TestimonialCard
        quoteText="Everyone should de-duplicate their images."
        nameText="Eric Wallace"
        positionText="PhD student, Berkeley, Author of the popular paper on copyright violations by generative models"
        profilePicture="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666e933cd9d28b4d497ca0f7_Eric%20Wallace.webp"
      />
      <TestimonialCard
        profilePicture="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666e931f2b3e4091c5bc5654_Yoav%20HaCohen.webp"
        nameText="Yoav HaCohen"
        positionText="PhD, Manager of the Core Generative AI Team at Lightricks"
        quoteText="Visual Layer’s fastdup on top of Amazon S3 enables significant improvements in the quality of internet-scale datasets that are needed to train our Generative AI foundation models."
      />
    </_Component>
  );
}
