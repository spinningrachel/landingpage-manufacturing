import * as React from "react";
import * as Types from "./types";

declare function NavMenus(props: {
  as?: React.ElementType;
  navLogoVisibility?: Types.Visibility.VisibilityConditions;
  pricingLinkVisibility?: Types.Visibility.VisibilityConditions;
  docsLinkVisibility?: Types.Visibility.VisibilityConditions;
  blogLinkVisibility?: Types.Visibility.VisibilityConditions;
  signInLinkVisibility?: Types.Visibility.VisibilityConditions;
  getADemoVisibility?: Types.Visibility.VisibilityConditions;
  startForFreeVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
