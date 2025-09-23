"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Tab4Title.module.css";

export function Tab4Title({
  as: _Component = _Builtin.Block,
  title = "Enrich with AI",
}) {
  return (
    <_Component className={_utils.cx(_styles, "is-h3", "is-tabs")} tag="div">
      {"Enrich with AI"}
    </_Component>
  );
}
