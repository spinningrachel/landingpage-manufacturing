"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonSecondaryLarge({
  as: _Component = _Builtin.Link,

  buttonLink = {
    href: "#",
    target: "_blank",
  },

  buttonText = "Button Text",
}) {
  return (
    <_Component
      className="button-secondary-large"
      button={true}
      block=""
      options={buttonLink}
    >
      {buttonText}
    </_Component>
  );
}
