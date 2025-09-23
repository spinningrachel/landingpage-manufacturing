"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Tab2Element.module.css";

export function Tab2Element({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "home-tabs_img-ar")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "", "home-tabs_img-panel", "is-tabs")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "", "home-tabs_panel-dot", "is-1")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "", "home-tabs_panel-dot", "is-2")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "", "home-tabs_panel-dot", "is-3")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "home-tabs_video")}
        value="%3Cdiv%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%3B%20position%3A%20absolute%3B%20z-index%3A2%3B%20top%3A0%3B%20left%3A0%3B%22%20class%3D%22w-background-video%20w-background-video-atom%22%3E%0A%20%20%20%20%20%20%3Cvideo%20playsinline%20loop%20muted%20autoplay%3D%22%22%20loop%3D%22%22%20muted%3D%22%22%20playsinline%3D%22%22%20data-wf-ignore%3D%22true%22%20data-object-fit%3D%22cover%22%3E%0A%20%20%20%20%20%20%20%20%3Csource%20src%3D%22https%3A%2F%2Fvl-video-assets.nyc3.cdn.digitaloceanspaces.com%2Fvl-video%2Funcover_insights.mp4%22%20data-wf-ignore%3D%22true%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fvideo%3E%0A%3C%2Fdiv%3E"
      />
    </_Component>
  );
}
