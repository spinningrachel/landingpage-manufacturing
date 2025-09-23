"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TestimonialCard } from "./TestimonialCard";
import * as _utils from "./utils";
import _styles from "./TestimonialsBlock4.module.css";

export function TestimonialsBlock4({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "testimonials_block")} tag="div">
      <TestimonialCard
        profilePicture="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/6672fa21e9e53bfbadfe9709_Dagan%20Bar%20Or%20img.webp"
        nameText="Dagan Bar Or"
        positionText="Head of Research Team, Matrix"
        quoteText="Visual Layer & Matrix Defense partnered together for creating the next generation video search engine for Iron Swords' war efforts."
      />
      <TestimonialCard
        quoteText="Fastdup is a fantastic tool, at one afternoon we saved thousands of dollars in annotation costs by removing duplicates and unneeded data."
        nameText="Gad Benram"
        positionText="Founder, TensorOps"
        profilePicture="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/66d54c2d977bda45b8291f36_Gad%20Benram.webp"
      />
    </_Component>
  );
}
