import * as React from "react";
import * as Types from "./types";

declare function NewsletterForm(props: {
  as?: React.ElementType;
  newsletterVisibility?: Types.Visibility.VisibilityConditions;
  runtimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
