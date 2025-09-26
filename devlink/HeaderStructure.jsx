"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeaderStructure.module.css";

export function HeaderStructure({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "header")}
      grid={{
        type: "section",
      }}
      tag="header"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "header_layout")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
