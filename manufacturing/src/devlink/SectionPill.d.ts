import * as React from "react";
import * as Types from "./types";

declare function SectionPill(props: {
  as?: React.ElementType;
  pillVisibility?: Types.Visibility.VisibilityConditions;
  pillText?: React.ReactNode;
  lightBackground?: Types.Builtin.Text;
  greenBackground?: Types.Builtin.Text;
  purpleBackground?: Types.Builtin.Text;
  gradientBackground?: Types.Builtin.Text;
}): React.JSX.Element;
