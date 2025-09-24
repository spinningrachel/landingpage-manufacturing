"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d1a7c648-1859-578d-d1ee-5cd5d73d0d3b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d1a7c648-1859-578d-d1ee-5cd5d73d0d3b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718689686558}},"actionLists":{"a-10":{"id":"a-10","title":"Popup GAQ [Open]","actionItemGroups":[{"actionItems":[{"id":"a-10-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".popup-gaq_wrapper","selectorGuids":["0323a88b-ae54-56bc-43e0-7a33319f9d5d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".popop-gaq_component","selectorGuids":["d5ab7f2f-c74c-ec84-0352-a2c72927ae59"]},"value":"flex"}}]},{"actionItems":[{"id":"a-10-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":100,"target":{"selector":".popup-gaq_wrapper","selectorGuids":["0323a88b-ae54-56bc-43e0-7a33319f9d5d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718655033696}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavLink({
  as: _Component = _Builtin.Link,
  linkVisibility = true,

  linkUrl = {
    href: "#",
  },

  linkText = "Text Link",
}) {
  _interactions.useInteractions(_interactionsData);

  return linkVisibility ? (
    <_Component
      className="nav_link"
      data-w-id="d1a7c648-1859-578d-d1ee-5cd5d73d0d3b"
      button={false}
      block=""
      options={linkUrl}
    >
      {linkText}
    </_Component>
  ) : null;
}
