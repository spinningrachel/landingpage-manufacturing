"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonPrimaryLarge({
  as: _Component = _Builtin.Link,

  buttonLink = {
    href: "#",
    target: "_blank",
  },

  buttonText = "Button Text",
  paddingLRSmall,
  gradientBackground,
  greyBackground,
  transparentBackground,
  posthogAB,
}) {
  return (
    <_Component
      className="button-primary-large"
      button={true}
      btn-footer={paddingLRSmall}
      btn-gradient-bg={gradientBackground}
      btn-grey-bg={greyBackground}
      btn-transparent-bg={transparentBackground}
      posthog-ab={posthogAB}
      block=""
      options={buttonLink}
    >
      {buttonText}
    </_Component>
  );
}
