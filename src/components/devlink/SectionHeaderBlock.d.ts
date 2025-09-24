import * as React from "react";
import * as Types from "./types";

declare function SectionHeaderBlock(props: {
  as?: React.ElementType;
  pillVisibility?: Types.Visibility.VisibilityConditions;
  pillText?: React.ReactNode;
  pillLightBackground?: Types.Builtin.Text;
}): React.JSX.Element;
