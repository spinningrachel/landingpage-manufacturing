import * as React from "react";
import * as Types from "./types";

declare function FooterLink(props: {
  as?: React.ElementType;
  linkVisibility?: Types.Visibility.VisibilityConditions;
  linkUrl?: Types.Basic.Link;
  linkText?: React.ReactNode;
}): React.JSX.Element;
