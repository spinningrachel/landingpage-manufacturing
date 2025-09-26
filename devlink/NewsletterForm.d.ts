import * as React from "react";
import * as Types from "./types";

declare function NewsletterForm(props: {
  as?: React.ElementType;
  newsletterVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
