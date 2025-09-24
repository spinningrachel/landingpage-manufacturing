"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function NavTabs({ as: _Component = _Builtin.TabsWrapper }) {
  return (
    <_Component
      className="nav_mm-tabs"
      current="Tab 1"
      easing="ease"
      fadeIn={300}
      fadeOut={100}
    >
      <_Builtin.TabsMenu className="nav_mm-tabs-menu" tag="div">
        <_Builtin.TabsLink
          className="nav_mm-tab"
          data-w-tab="Tab 1"
          block="inline"
        >
          <_Builtin.Block className="nav_mm_title-block" tag="div">
            <_Builtin.Block className="is-body-m is-text-purple" tag="div">
              {"Key feautres"}
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className="nav_mm-tab-icon"
              value="%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.5%2015.5L12.5%2010.5L7.5%205.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block className="txt-wrapper" tag="div">
            <_Builtin.Block className="is-body-xs" tag="div">
              {"Our commitment is to deliver quality product lorem ipsum."}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className="nav_mm-tab is-2"
          data-w-tab="Tab 2"
          block="inline"
        >
          <_Builtin.Block className="nav_mm_title-block" tag="div">
            <_Builtin.Block className="is-body-m is-text-purple" tag="div">
              {"Industries"}
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className="nav_mm-tab-icon"
              value="%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.5%2015.5L12.5%2010.5L7.5%205.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block className="txt-wrapper" tag="div">
            <_Builtin.Block className="is-body-xs" tag="div">
              {"Our commitment is to deliver quality product lorem ipsum."}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.TabsLink>
      </_Builtin.TabsMenu>
      <_Builtin.TabsContent className="nav_mm-tabs-content" tag="div">
        <_Builtin.TabsPane
          className="nav_mm-pane is-1"
          tag="div"
          data-w-tab="Tab 1"
        >
          <_Builtin.Block className="nav_mm_title-block is-pane" tag="div">
            <_Builtin.Block className="is-body-m is-text-purple" tag="div">
              {"One Centralized Platform for Visual Data Management"}
            </_Builtin.Block>
            <_Builtin.Block className="txt-wrapper is-mm-pane" tag="div">
              <_Builtin.Block className="is-body-xs" tag="div">
                {
                  "Visual Layer empowers data and AI teams with advanced tools throughout the entire data curation process to streamline pipelines, enhance model performance, boost team productivity, and maximize the efficiency and profitability of machine learning projects."
                }
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="nav_mm_pane-divider" tag="div" />
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.TabsPane>
        <_Builtin.TabsPane
          className="nav_mm-pane is-2"
          tag="div"
          data-w-tab="Tab 2"
        >
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.TabsPane>
      </_Builtin.TabsContent>
    </_Component>
  );
}
