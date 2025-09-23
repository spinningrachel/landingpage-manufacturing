"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionPill } from "./SectionPill";
import * as _utils from "./utils";
import _styles from "./SectionHeaderBlock.module.css";

export function SectionHeaderBlock({
  as: _Component = _Builtin.Block,
  pillVisibility = true,
  pillText = "PLATFORM",
  pillLightBackground,
}) {
  return (
    <_Component className={_utils.cx(_styles, "header-block")} tag="div">
      <SectionPill
        pillText={pillText}
        pillVisibility={pillVisibility}
        lightBackground={pillLightBackground}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "h-wrapper", "is-tabs")}
        tag="div"
      >
        <_Builtin.Heading tag="h1">
          {"Your "}
          <_Builtin.Span
            className={_utils.cx(_styles, "is-gradient", "heading-span")}
          >
            {"AI-Powered"}
          </_Builtin.Span>
          {" visual data management platform"}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Paragraph>
        {"See. Understand. Act on your visual data."}
      </_Builtin.Paragraph>
    </_Component>
  );
}
