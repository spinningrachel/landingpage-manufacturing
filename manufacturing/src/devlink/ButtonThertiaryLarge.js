"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonThertiaryLarge.module.css";

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
      className={_utils.cx(_styles, "button-thertiary-large")}
      button={true}
      block=""
      options={buttonLink}
    >
      {buttonText}
    </_Component>
  ) : null;
}
