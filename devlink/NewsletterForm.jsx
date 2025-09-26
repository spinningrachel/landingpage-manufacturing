"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NewsletterForm.module.css";

export function NewsletterForm({
  as: _Component = _Builtin.Block,
  newsletterVisibility = true,
}) {
  return newsletterVisibility ? (
    <_Component
      className={_utils.cx(_styles, "footer_inner-grid", "is-cta")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "header-block", "is-footer")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "pill-highlights")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "is-highlights", "is-pill-purple")}
            tag="div"
            bg-pill-gradient=""
          >
            {"newsletter"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "h-wrapper", "is-footer")}
          tag="div"
        >
          <_Builtin.Heading tag="h3">
            {"Access exclusive content"}
          </_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "footer_newsletter-block")}
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "hbs_newsletter-form")}
          value="%3Cscript%20charset%3D%22utf-8%22%20type%3D%22text%2Fjavascript%22%20src%3D%22%2F%2Fjs.hsforms.net%2Fforms%2Fembed%2Fv2.js%22%3E%3C%2Fscript%3E%0A%3Cscript%3E%0A%20%20hbspt.forms.create(%7B%0A%20%20%20%20region%3A%20%22na1%22%2C%0A%20%20%20%20portalId%3A%20%2223297802%22%2C%0A%20%20%20%20formId%3A%20%2228dd28cd-4885-4df9-af9a-64745ce12f0a%22%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
        />
        <_Builtin.Paragraph className={_utils.cx(_styles, "is-body-s")}>
          {
            "Get the latest news on AI, machine learning and computer vision, updates on events, blog posts, resources, and more."
          }
        </_Builtin.Paragraph>
        <_Builtin.FormWrapper
          className={_utils.cx(_styles, "newsletter_form-block")}
        >
          <_Builtin.FormForm
            className={_utils.cx(_styles, "newsletter_form")}
            name="wf-form-Newsletter-Form"
            data-name="Newsletter Form"
            method="get"
            data-webflow-hubspot-api-form-url="https://hubspotonwebflow.com/api/forms/ad6bbbcb-4f24-4cbb-850a-71f0ed141224"
            id="wf-form-Newsletter-Form"
          >
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "newsletter_form-field")}
              name="email-newsletter"
              maxLength={256}
              data-name="email-newsletter"
              placeholder="E-mail adress"
              disabled={false}
              type="email"
              required={true}
              autoFocus={false}
              data-wfhsfieldname="FormTextInput-2"
              id="email-newsletter"
            />
            <_Builtin.FormButton
              className={_utils.cx(_styles, "newsletter_form-button")}
              type="submit"
              value="Sign up"
              data-wait="Please wait..."
              ph-track-button="submit"
            />
            <_Builtin.DOM
              tag="input"
              slot=""
              type="hidden"
              name="hutk"
              value=""
            />
            <_Builtin.DOM
              tag="input"
              slot=""
              type="hidden"
              name="ipAddress"
              value=""
            />
            <_Builtin.DOM
              tag="input"
              slot=""
              type="hidden"
              name="pageUri"
              value=""
            />
            <_Builtin.DOM
              tag="input"
              slot=""
              type="hidden"
              name="pageId"
              value=""
            />
            <_Builtin.DOM
              tag="input"
              slot=""
              type="hidden"
              name="pageName"
              value=""
            />
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage
            className={_utils.cx(_styles, "hs-newsletter_success-message")}
          >
            <_Builtin.Block tag="div">
              {
                "Thanks for signing up, we're so happy to have you on board! Don't hesitate to get in touch if you have any questions.We'll always get back to you."
              }
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage
            className={_utils.cx(_styles, "hs-newsletter_error-message")}
          >
            <_Builtin.Block tag="div">
              {"Oops!"}
              <br />
              {"Something went wrong while submitting the form."}
              <br />
              {"Please try again."}
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
          <_Builtin.Block
            className={_utils.cx(_styles, "hs-newsletter_pp")}
            tag="div"
          >
            <_Builtin.Span>{"Your privacy is important to us "}</_Builtin.Span>
            <_Builtin.Link
              className={_utils.cx(_styles, "hs-newsletter_pp-link")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              <_Builtin.Span
                className={_utils.cx(_styles, "hs-newsletter_pp-link")}
              >
                {"privacy policy."}
              </_Builtin.Span>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.FormWrapper>
        <_Builtin.DOM
          className={_utils.cx(_styles, "hs-newsletter_form-block")}
          tag="div"
          slot=""
          name="Form Block"
        >
          <_Builtin.DOM
            className={_utils.cx(_styles, "hs-newsletter_form")}
            tag="form"
            slot=""
            name="Form"
            action="https://hubspotonwebflow.com/api/forms/8e60c115-335e-4a35-9e78-80edbaadf2dc"
            method="POST"
            enctype="multipart/form-data"
            data-name="Newsletter subscription"
            data-wf-hs-form="webflowHubSpotForm"
            data-wf-page-id="66603dc4a8308da80ba98fa3"
            data-wf-element-id="80eccd80-9469-2647-b9a5-830d4510efba"
          >
            <_Builtin.DOM
              className={_utils.cx(_styles, "hs-newsletter_label")}
              tag="label"
              slot=""
              _for="email"
            >
              {"Email address"}
            </_Builtin.DOM>
            <_Builtin.Block
              className={_utils.cx(_styles, "hs-newsletter_input-block")}
              tag="div"
            >
              <_Builtin.DOM
                className={_utils.cx(_styles, "hs-newsletter_form-field")}
                tag="input"
                slot=""
                type="email"
                name="email"
                required="true"
                id="email"
                placeholder="E-mail address"
              />
              <_Builtin.DOM
                className={_utils.cx(_styles, "hs-newsletter_form-button")}
                tag="button"
                slot=""
                type="submit"
              >
                {"Sign up"}
              </_Builtin.DOM>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "hs-newsletter_pp")}
              tag="div"
            >
              <_Builtin.Span>
                {"Your privacy is important to us "}
              </_Builtin.Span>
              <_Builtin.Link
                className={_utils.cx(_styles, "hs-newsletter_pp-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Span
                  className={_utils.cx(_styles, "hs-newsletter_pp-link")}
                >
                  {"privacy policy."}
                </_Builtin.Span>
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.DOM
              tag="input"
              slot=""
              type="hidden"
              name="hutk"
              value=""
            />
            <_Builtin.DOM
              tag="input"
              slot=""
              type="hidden"
              name="ipAddress"
              value=""
            />
            <_Builtin.DOM
              tag="input"
              slot=""
              type="hidden"
              name="pageUri"
              value=""
            />
            <_Builtin.DOM
              tag="input"
              slot=""
              type="hidden"
              name="pageId"
              value=""
            />
            <_Builtin.DOM
              tag="input"
              slot=""
              type="hidden"
              name="pageName"
              value=""
            />
          </_Builtin.DOM>
        </_Builtin.DOM>
      </_Builtin.Block>
    </_Component>
  ) : null;
}
