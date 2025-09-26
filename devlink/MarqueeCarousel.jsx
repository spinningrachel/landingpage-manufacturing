"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MarqueeCarousel.module.css";

export function MarqueeCarousel({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "marquee-section_layout")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "marquee_wrapper")}
        id={_utils.cx(
          _styles,
          "w-node-f1566097-78ef-eccd-ba76-8819341175f5-341175f4"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "marquee_title-wrapper")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "is-body-l")} tag="div">
            {"TRUSTEDBY"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "marquee_layout", "is-logos")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "marquee_track")}
            tag="div"
          >
            <_Builtin.NotSupported _atom="DynamoWrapper" />
            <_Builtin.NotSupported _atom="DynamoWrapper" />
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "marquee_embed")}
              value="%3Cstyle%3E%0A.marquee_track%20%7B%0A%20%20white-space%3A%20nowrap%3B%0A%20%20will-change%3A%20transform%3B%0A%20%20animation%3A%20marquee%2060s%20linear%20infinite%3B%0A%7D%0A%0A%40keyframes%20marquee%20%7B%0A%20%20from%20%7B%20transform%3A%20translateX(0)%3B%20%7D%0A%20%20to%20%7B%20transform%3A%20translateX(-50%25)%3B%20%7D%0A%7D%0A%0A.marquee_track%3Ahover%20%7B%0A%09animation-play-state%3A%20paused%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "marquee_mask")}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
