import * as React from "react";
import * as Types from "./types";

declare function ButtonPrimarySmall(props: {
  as?: React.ElementType;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  buttonLink?: Types.Basic.Link;
  buttonText?: React.ReactNode;
}): React.JSX.Element;
