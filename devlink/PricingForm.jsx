"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PricingForm.module.css";

export function PricingForm({
  as: _Component = _Builtin.FormWrapper,
  formProps = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "form-block-2")} id="PricingForm">
      <_Builtin.FormForm
        className={_utils.cx(_styles, "form")}
        name="wf-form-PricingForm"
        data-name="PricingForm"
        method="get"
        id="wf-form-PricingForm"
        {...formProps}
      >
        <_Builtin.FormBlockLabel
          className={_utils.cx(_styles, "field-label")}
          htmlFor="name"
        >
          {"Name"}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "text-field-3")}
          name="name"
          maxLength={256}
          data-name="Name"
          placeholder="Enter your full name"
          disabled={false}
          type="text"
          required={true}
          autoFocus={false}
          id="name"
        />
        <_Builtin.FormBlockLabel
          className={_utils.cx(_styles, "field-label-2")}
          htmlFor="email"
        >
          {"Email address"}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "text-field-2")}
          name="email"
          maxLength={256}
          data-name="Email"
          placeholder="Enter your business email address"
          disabled={false}
          type="email"
          required={true}
          autoFocus={false}
          id="email"
        />
        <_Builtin.FormBlockLabel
          className={_utils.cx(_styles, "field-label-3")}
          htmlFor="Company-website-URL"
        >
          {"Your company website (URL)"}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "text-field")}
          name="field"
          maxLength={256}
          data-name="Field"
          placeholder="Your company website"
          disabled={false}
          type="url"
          required={true}
          autoFocus={false}
          id="Company-website-URL"
        />
        <_Builtin.FormBlockLabel
          className={_utils.cx(_styles, "field-label-4")}
          htmlFor="Reason-for-meeting"
        >
          <_Builtin.Strong className={_utils.cx(_styles, "bold-text")}>
            {"What’s your biggest visual data challenge today?"}
          </_Builtin.Strong>{" "}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextarea
          className={_utils.cx(_styles, "textarea")}
          name="Reason-for-meeting"
          maxLength={5000}
          data-name="Reason for meeting"
          placeholder="What would you most like to focus on when we meet up?"
          required={false}
          autoFocus={false}
          id="Reason-for-meeting"
        />
        <_Builtin.FormButton
          className={_utils.cx(_styles, "submit-button")}
          type="submit"
          value="Submit"
          data-wait="Please wait..."
        />
      </_Builtin.FormForm>
      <_Builtin.FormSuccessMessage>
        <_Builtin.Block tag="div">
          {"Thank you! We'll be in touch to schedule a demo with you ASAP!"}
        </_Builtin.Block>
      </_Builtin.FormSuccessMessage>
      <_Builtin.FormErrorMessage>
        <_Builtin.Block tag="div">
          {
            "Oops! Something went wrong while submitting the form. Please try again and if you continue to experience issues, send us a note at "
          }
          <_Builtin.Link
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"support@visual-layer.com"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.FormErrorMessage>
    </_Component>
  );
}
