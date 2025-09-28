"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalCustomCode } from "./GlobalCustomCode";
import { Nav } from "./Nav";
import { FooterNoNewsletter } from "./FooterNoNewsletter";
import * as _utils from "./utils";
import _styles from "./PageStructure.module.css";

export function PageStructure({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalCustomCode />
      <Nav />
      <_Builtin.Block className={_utils.cx(_styles, "main-wrapper")} tag="main">
        <_Builtin.Section
          className={_utils.cx(_styles, "header")}
          tag="header"
          grid={{
            type: "section",
          }}
        >
          <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "header_layout")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Section>
        <_Builtin.Section
          className={_utils.cx(_styles, "section")}
          tag="section"
          grid={{
            type: "section",
          }}
        >
          <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "section_layout")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Section>
      </_Builtin.Block>
      <FooterNoNewsletter />
    </_Component>
  );
}
