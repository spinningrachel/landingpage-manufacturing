"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionStructure({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className="container" tag="div">
        <_Builtin.Block className="section_layout" tag="div" />
      </_Builtin.Block>
    </_Component>
  );
}
