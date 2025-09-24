"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FooterMenuTitle({
  as: _Component = _Builtin.Block,
  menuTitleVisibility = true,
  menuTitleText = "footer menu title",
}) {
  return menuTitleVisibility ? (
    <_Component className="footer_menu-grid-title" tag="div">
      {menuTitleText}
    </_Component>
  ) : null;
}
