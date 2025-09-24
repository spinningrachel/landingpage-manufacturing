"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonSecondarySmall({
  as: _Component = _Builtin.Link,
  buttonVisibility = true,

  buttonLink = {
    href: "#",
  },

  buttonText = "Button Text",
}) {
  return buttonVisibility ? (
    <_Component
      className="button-secondary-small"
      button={true}
      block=""
      options={buttonLink}
    >
      {buttonText}
    </_Component>
  ) : null;
}
