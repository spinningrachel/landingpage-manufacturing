"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

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
      className="footer_legal-link"
      button={false}
      block=""
      options={linkUrl}
    >
      {linkText}
    </_Component>
  ) : null;
}
