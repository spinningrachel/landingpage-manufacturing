"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionPill.module.css";

export function SectionPill({
  as: _Component = _Builtin.Block,
  pillVisibility = true,
  pillText = "highlights pill",
  lightBackground,
  greenBackground,
  purpleBackground,
  gradientBackground,
}) {
  return pillVisibility ? (
    <_Component className={_utils.cx(_styles, "pill-highlights")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "is-highlights", "is-pill")}
        tag="div"
        bg-pill-gradient={gradientBackground}
      >
        {pillText}
      </_Builtin.Block>
    </_Component>
  ) : null;
}
