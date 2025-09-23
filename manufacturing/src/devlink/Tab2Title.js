"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Tab2Title.module.css";

export function Tab2Title({
  as: _Component = _Builtin.Block,
  title = "Uncover insights",
}) {
  return (
    <_Component className={_utils.cx(_styles, "is-h3", "is-tabs")} tag="div">
      {"Uncover insights"}
    </_Component>
  );
}
