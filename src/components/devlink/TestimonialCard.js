"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function TestimonialCard({
  as: _Component = _Builtin.Block,
  profilePictureVisibility = true,
  profilePicture = "",
  nameVisibility = true,
  nameText = "Client name",
  positionVisibility = true,
  positionText = "Position",
  quoteVisibility = true,
  quoteText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
}) {
  return (
    <_Component className="testimonial_card" tag="div">
      <_Builtin.Block className="testimonial_card-profile" tag="div">
        {profilePictureVisibility ? (
          <_Builtin.Image
            className="testimonial_card-img"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={profilePicture}
          />
        ) : null}
        <_Builtin.Block className="testimonial_card-info" tag="div">
          {nameVisibility ? (
            <_Builtin.Block
              className="is-body-xs is-0-6-opacity is-text-semibold"
              tag="div"
            >
              {nameText}
            </_Builtin.Block>
          ) : null}
          {positionVisibility ? (
            <_Builtin.Block className="is-body-xs is-0-6-opacity" tag="div">
              {positionText}
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="testimonial_card-quote-wrapper" tag="div">
        {quoteVisibility ? (
          <_Builtin.Paragraph className="is-quote is-testimonial-card">
            {quoteText}
          </_Builtin.Paragraph>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
