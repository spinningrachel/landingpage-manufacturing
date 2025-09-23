"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterLinkGrey.module.css";

export function FooterLinkGrey({
  as: _Component = _Builtin.Link,
  linkVisibility = true,

  linkUrl = {
    href: "#",
  },

  linkText = "Text Link",
}) {
  return linkVisibility ? (
    <_Component
      className={_utils.cx(_styles, "footer_legal-link")}
      button={false}
      block=""
      options={linkUrl}
    >
      {linkText}
    </_Component>
  ) : null;
}
