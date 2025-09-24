"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonThertiaryLarge({
  as: _Component = _Builtin.Link,
  buttonVisibility = true,

  buttonLink = {
    href: "#",
  },

  buttonText = "Button Text",
}) {
  return buttonVisibility ? (
    <_Component
      className="button-thertiary-large"
      button={true}
      block=""
      options={buttonLink}
    >
      {buttonText}
    </_Component>
  ) : null;
}
