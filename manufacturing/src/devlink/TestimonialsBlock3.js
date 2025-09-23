"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TestimonialCard } from "./TestimonialCard";
import * as _utils from "./utils";
import _styles from "./TestimonialsBlock3.module.css";

export function TestimonialsBlock3({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "testimonials_block")} tag="div">
      <TestimonialCard
        quoteText="Visual Layer is helping OCCRP in identifying & reporting timber logging fraud."
        nameText="Sergiu Nicolae Brega"
        positionText="OCCRP"
        profilePicture="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666e939d0a164715e70732d7_Sergiu%20Nicolae%20Brega.webp"
      />
      <TestimonialCard
        profilePicture="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666e93ac2a54fab5801eebee_Jose%20Benitez%20Genes.webp"
        nameText="José Benitez Genes"
        positionText="Founder & Director of AI, Intuitivo"
        quoteText="Visual Layer helps Intuitivo to revolutionize the AI-powered Unattended Retail by expertly curating and managing massive video data from Autonomous Point of Purchase, driving innovation and efficiency."
      />
    </_Component>
  );
}
