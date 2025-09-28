"use client";
import React from "react";
import * as _Builtin from "../../../devlink/_Builtin";
import * as _utils from "../../../devlink/utils";
import _styles from "../../../devlink/PricingForm.module.css";

export function PricingForm({ as: _Component = _Builtin.FormWrapper }) {
  return (
    <_Component>
      <_Builtin.FormForm
        name="wf-form-PricingForm"
        data-name="PricingForm"
        method="get"
        id="wf-form-PricingForm"
      >
        <_Builtin.FormBlockLabel htmlFor="name">
          {"Name"}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextInput
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
        <_Builtin.FormBlockLabel htmlFor="email">
          {"Email address"}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextInput
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
        <_Builtin.FormBlockLabel htmlFor="Company-website-URL">
          {"Your company website (URL)"}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextInput
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

        <_Builtin.FormBlockLabel htmlFor="Reason-for-meeting">
          <_Builtin.Strong>
            {"What’s your biggest quality or inspection challenge today?"}
          </_Builtin.Strong>{" "}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextarea
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

