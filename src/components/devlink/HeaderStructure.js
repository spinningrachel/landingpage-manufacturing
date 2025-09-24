"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function HeaderStructure({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="header"
      grid={{
        type: "section",
      }}
      tag="header"
    >
      <_Builtin.Block className="container" tag="div">
        <_Builtin.Block className="header_layout" tag="div" />
      </_Builtin.Block>
    </_Component>
  );
}
