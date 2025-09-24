"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Marquee({ as: _Component = _Builtin.Section, bgGrey }) {
  return (
    <_Component
      className="section is-marquee"
      grid={{
        type: "section",
      }}
      tag="section"
      grey-bg={bgGrey}
    >
      <_Builtin.Block className="container" tag="div">
        <_Builtin.Block className="marquee-section_layout" tag="div">
          <_Builtin.Block
            className="marquee_wrapper"
            id="w-node-_6025c7fe-1a90-e258-2fa6-e6c1fa25bfa5-fa25bfa2"
            tag="div"
          >
            <_Builtin.Block className="marquee_title-wrapper" tag="div">
              <_Builtin.Block className="is-body-l" tag="div">
                {"TRUSTEDBY"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="marquee_layout is-logos" tag="div">
              <_Builtin.Block className="marquee_track" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.HtmlEmbed
                  className="marquee_embed"
                  value="%3Cstyle%3E%0A.marquee_track%20%7B%0A%20%20white-space%3A%20nowrap%3B%0A%20%20will-change%3A%20transform%3B%0A%20%20animation%3A%20marquee%2060s%20linear%20infinite%3B%0A%7D%0A%0A%40keyframes%20marquee%20%7B%0A%20%20from%20%7B%20transform%3A%20translateX(0)%3B%20%7D%0A%20%20to%20%7B%20transform%3A%20translateX(-50%25)%3B%20%7D%0A%7D%0A%0A.marquee_track%3Ahover%20%7B%0A%09animation-play-state%3A%20paused%3B%0A%7D%0A%3C%2Fstyle%3E"
                />
              </_Builtin.Block>
              <_Builtin.Block className="marquee_mask" tag="div" />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
