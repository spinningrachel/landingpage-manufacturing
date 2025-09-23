"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Tab3Title.module.css";

export function Tab3Title({
  as: _Component = _Builtin.Block,
  title = "Train better models",
}) {
  return (
    <_Component className={_utils.cx(_styles, "is-h3", "is-tabs")} tag="div">
      {"Train better models"}
    </_Component>
  );
}
