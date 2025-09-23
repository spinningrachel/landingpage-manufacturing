"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonSecondaryLarge.module.css";

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
      className={_utils.cx(_styles, "button-secondary-large")}
      button={true}
      block=""
      options={buttonLink}
    >
      {buttonText}
    </_Component>
  );
}
