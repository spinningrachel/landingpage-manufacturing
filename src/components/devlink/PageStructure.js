"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalCustomCode } from "./GlobalCustomCode";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageStructure({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="page-wrapper" tag="div">
      <GlobalCustomCode />
      <Nav />
      <_Builtin.Block className="main-wrapper" tag="main">
        <_Builtin.Section
          className="header"
          tag="header"
          grid={{
            type: "section",
          }}
        >
          <_Builtin.Block className="container" tag="div">
            <_Builtin.Block className="header_layout" tag="div" />
          </_Builtin.Block>
        </_Builtin.Section>
        <_Builtin.Section
          className="section"
          tag="section"
          grid={{
            type: "section",
          }}
        >
          <_Builtin.Block className="container" tag="div">
            <_Builtin.Block className="section_layout" tag="div" />
          </_Builtin.Block>
        </_Builtin.Section>
      </_Builtin.Block>
      <Footer />
    </_Component>
  );
}
