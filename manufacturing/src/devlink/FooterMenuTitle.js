"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterMenuTitle.module.css";

export function FooterMenuTitle({
  as: _Component = _Builtin.Block,
  menuTitleVisibility = true,
  menuTitleText = "footer menu title",
}) {
  return menuTitleVisibility ? (
    <_Component
      className={_utils.cx(_styles, "footer_menu-grid-title")}
      tag="div"
    >
      {menuTitleText}
    </_Component>
  ) : null;
}
