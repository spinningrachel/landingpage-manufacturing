import * as React from "react";
import * as Types from "./types";

declare function Nav(props: {
  as?: React.ElementType;
  navLogoVisibility?: Types.Visibility.VisibilityConditions;
  platformLinkVisibility?: Types.Visibility.VisibilityConditions;
  pricingLinkVisibility?: Types.Visibility.VisibilityConditions;
  docsLinkVisibility?: Types.Visibility.VisibilityConditions;
  blogLinkVisibility?: Types.Visibility.VisibilityConditions;
  communityLinkVisibility?: Types.Visibility.VisibilityConditions;
  signInLinkVisibility?: Types.Visibility.VisibilityConditions;
  getADemoVisibility?: Types.Visibility.VisibilityConditions;
  startForFreeVisibility?: Types.Visibility.VisibilityConditions;
  resourcesVisibility?: Types.Visibility.VisibilityConditions;
  auLinkVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
