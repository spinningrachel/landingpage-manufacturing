"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function MenuListIndustries({
  as: _Component = _Builtin.List,
  pricingLinkVisibility = true,
}) {
  return (
    <_Component className="nav_cl is-industries" tag="ul" unstyled={true}>
      <_Builtin.ListItem className="nav_cl-item">
        {pricingLinkVisibility ? (
          <_Builtin.Link
            className="nav_link"
            button={false}
            block=""
            options={{
              href: "/industries/",
            }}
          />
        ) : null}
      </_Builtin.ListItem>
      <_Builtin.ListItem className="nav_cl-item">
        {pricingLinkVisibility ? (
          <_Builtin.Link
            className="nav_link"
            button={false}
            block=""
            options={{
              href: "/industries/",
            }}
          />
        ) : null}
      </_Builtin.ListItem>
      <_Builtin.ListItem className="nav_cl-item">
        {pricingLinkVisibility ? (
          <_Builtin.Link
            className="nav_link"
            button={false}
            block=""
            options={{
              href: "/industries/",
            }}
          />
        ) : null}
      </_Builtin.ListItem>
      <_Builtin.ListItem className="nav_cl-item">
        {pricingLinkVisibility ? (
          <_Builtin.Link
            className="nav_link"
            button={false}
            block=""
            options={{
              href: "/industries/",
            }}
          />
        ) : null}
      </_Builtin.ListItem>
      <_Builtin.ListItem className="nav_cl-item">
        {pricingLinkVisibility ? (
          <_Builtin.Link
            className="nav_link"
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
