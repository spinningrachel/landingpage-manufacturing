"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { NavBlockMenus } from "./NavBlockMenus";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".nav_banner-close","originalId":"33460b6f-9dbd-1fd2-6ad6-d8d0bfbb8b9a","appliesTo":"CLASS"},"targets":[{"selector":".nav_banner-close","originalId":"33460b6f-9dbd-1fd2-6ad6-d8d0bfbb8b9a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718006522662}},"actionLists":{"a-3":{"id":"a-3","title":"[Nav banner] - close","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".nav_banner.is-gradient","selectorGuids":["7e4d2b6f-dc49-11c5-6a62-1bbba0080e03","7773dcc9-0145-adff-b382-2ad6c9988bbb"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718006539105}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav({
  as: _Component = _Builtin.Block,
  navLogoVisibility = true,
  platformLinkVisibility = true,
  pricingLinkVisibility = true,
  docsLinkVisibility = false,
  blogLinkVisibility = false,
  communityLinkVisibility = true,
  signInLinkVisibility = true,
  getADemoVisibility = true,
  startForFreeVisibility = true,
  resourcesVisibility = true,
  auLinkVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "nav")} tag="nav">
      <_Builtin.Block
        className={_utils.cx(_styles, "nav_banner", "is-gradient")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container", "is-nav")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav_banner-layout")}
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "")} tag="div">
              <_Builtin.Block className={_utils.cx(_styles, "")} tag="div">
                {"Meet us at MLD1 2025! Septrmber 17, Ramat Gan, Israel"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "nav_banner-close")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_140_959)%22%3E%0A%3Cg%20opacity%3D%220.5%22%3E%0A%3Cpath%20d%3D%22M1.5%201.5L10.5%2010.5%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M10.5%201.5L1.5%2010.5%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_140_959%22%3E%0A%3Crect%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <NavBlockMenus
        navLogoVisibility={navLogoVisibility}
        pricingLinkVisibility={pricingLinkVisibility}
        docsLinkVisibility={docsLinkVisibility}
        blogLinkVisibility={blogLinkVisibility}
        signInLinkVisibility={signInLinkVisibility}
        getADemoVisibility={getADemoVisibility}
        startForFreeVisibility={startForFreeVisibility}
      />
    </_Component>
  );
}
