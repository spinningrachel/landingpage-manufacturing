"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { MarqueeCarousel } from "./MarqueeCarousel";
import * as _utils from "./utils";
import _styles from "./Marquee.module.css";

export function Marquee({ as: _Component = _Builtin.Section, bgGrey }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "is-marquee")}
      grid={{
        type: "section",
      }}
      tag="section"
      grey-bg={bgGrey}
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <MarqueeCarousel />
      </_Builtin.Block>
    </_Component>
  );
}
