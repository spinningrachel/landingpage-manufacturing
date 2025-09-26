import * as React from "react";
import * as Types from "./types";

declare function TestimonialCard(props: {
  as?: React.ElementType;
  profilePictureVisibility?: Types.Visibility.VisibilityConditions;
  profilePicture?: Types.Asset.Image;
  nameVisibility?: Types.Visibility.VisibilityConditions;
  nameText?: React.ReactNode;
  positionVisibility?: Types.Visibility.VisibilityConditions;
  positionText?: React.ReactNode;
  quoteVisibility?: Types.Visibility.VisibilityConditions;
  quoteText?: React.ReactNode;
}): React.JSX.Element;
