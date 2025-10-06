"use client";
import { PricingForm as DevLinkPricingForm } from "../../../devlink/PricingForm";

export function PricingForm() {
  return (
    <DevLinkPricingForm
      formProps={{
        action: "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dd1000004UXtt",
        method: "POST",
        "data-name": "PricingForm"
      }}
    />
  );
}

