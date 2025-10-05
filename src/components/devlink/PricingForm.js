"use client";
import { PricingForm as DevLinkPricingForm } from "../../../devlink/PricingForm";

export function PricingForm() {
  return (
    <DevLinkPricingForm
      formProps={{
        action: "https://visual-layerxwidelab.webflow.io/",
        method: "post",
        "data-name": "PricingForm"
      }}
    />
  );
}

