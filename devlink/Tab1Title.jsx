"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Tab1Title.module.css";

export function Tab1Title({
  as: _Component = _Builtin.Block,
  title = "Visualize your data",
}) {
  return (
    <_Component className={_utils.cx(_styles, "is-h3", "is-tabs")} tag="div">
      {"Visualize your data"}
    </_Component>
  );
}
