"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

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
    <_Component className="pill-highlights" tag="div">
      <_Builtin.Block
        className="is-highlights is-pill"
        tag="div"
        bg-pill-gradient={gradientBackground}
      >
        {pillText}
      </_Builtin.Block>
    </_Component>
  ) : null;
}
