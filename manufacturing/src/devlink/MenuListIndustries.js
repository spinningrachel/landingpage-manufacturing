"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MenuListIndustries.module.css";

export function MenuListIndustries({
  as: _Component = _Builtin.List,
  pricingLinkVisibility = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav_cl", "is-industries")}
      tag="ul"
      unstyled={true}
    >
      <_Builtin.ListItem className={_utils.cx(_styles, "nav_cl-item")}>
        {pricingLinkVisibility ? (
          <_Builtin.Link
            className={_utils.cx(_styles, "nav_link")}
            button={false}
            block=""
            options={{
              href: "/industries/",
            }}
          />
        ) : null}
      </_Builtin.ListItem>
      <_Builtin.ListItem className={_utils.cx(_styles, "nav_cl-item")}>
        {pricingLinkVisibility ? (
          <_Builtin.Link
            className={_utils.cx(_styles, "nav_link")}
            button={false}
            block=""
            options={{
              href: "/industries/",
            }}
          />
        ) : null}
      </_Builtin.ListItem>
      <_Builtin.ListItem className={_utils.cx(_styles, "nav_cl-item")}>
        {pricingLinkVisibility ? (
          <_Builtin.Link
            className={_utils.cx(_styles, "nav_link")}
            button={false}
            block=""
            options={{
              href: "/industries/",
            }}
          />
        ) : null}
      </_Builtin.ListItem>
      <_Builtin.ListItem className={_utils.cx(_styles, "nav_cl-item")}>
        {pricingLinkVisibility ? (
          <_Builtin.Link
            className={_utils.cx(_styles, "nav_link")}
            button={false}
            block=""
            options={{
              href: "/industries/",
            }}
          />
        ) : null}
      </_Builtin.ListItem>
      <_Builtin.ListItem className={_utils.cx(_styles, "nav_cl-item")}>
        {pricingLinkVisibility ? (
          <_Builtin.Link
            className={_utils.cx(_styles, "nav_link")}
            button={false}
            block=""
            options={{
              href: "/industries/",
            }}
          />
        ) : null}
      </_Builtin.ListItem>
    </_Component>
  );
}
