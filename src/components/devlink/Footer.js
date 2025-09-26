"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FooterMenuTitle } from "./FooterMenuTitle";
import { FooterLink } from "./FooterLink";
import { FooterLinkGrey } from "./FooterLinkGrey";

export function Footer({
  as: _Component = _Builtin.Block,
  footerLogoVisibility = true,

  footerLogoLink = {
    href: "#",
  },

  twitterLinkVisibility = true,

  twitterLinkUrl = {
    href: "https://x.com/i/flow/login?redirect_after_login=%2Fvisual_layer",
    target: "_blank",
  },

  instagramLinkVisibility = true,

  instagramLinkUrl = {
    href: "#",
  },

  youTubeLinkVisibility = true,

  youTubeLinkUrl = {
    href: "https://www.youtube.com/@visual-layer",
    target: "_blank",
  },

  linkedInLinkVisibility = true,

  linkedInLinkUrl = {
    href: "https://www.linkedin.com/company/visual-layer/?originalSubdomain=il",
    target: "_blank",
  },

  privacyLinkVisibility = true,

  privacyLinkUrl = {
    href: "https://docs.visual-layer.com/docs/privacy-policy",
    target: "_blank",
  },

  privacyLinkText = "Privacy Policy",
  toULinkVisibility = true,

  toULinkUrl = {
    href: "https://docs.visual-layer.com/docs/terms-of-service",
    target: "_blank",
  },

  toULinkText = "Terms of Use",
  cookieLinkVisibility = true,

  cookieLinkUrl = {
    href: "#",
  },

  cookieLinkText = "Cookie Settings",
  discordVisibility = true,

  discordLinkUrl = {
    href: "https://discord.com/invite/tkYHJCA7mb",
    target: "_blank",
  },

  githubVisibility = true,

  githubLinkUrl = {
    href: "https://github.com/visual-layer/fastdup",
    target: "_blank",
  },

  emailVisibility = true,

  emailUrl = {
    href: "mailto:info@visual-layer.com?subject=New%20message%20from%20Visual%20Layer",
  },

  emailText = "info@visual-layer.com",
  newsletterVisibility = true,
}) {
  return (
    <_Component className="footer" tag="footer">
      <_Builtin.Block className="container is-footer" tag="div">
        <_Builtin.Block className="footer_main-grid" tag="div">
          {newsletterVisibility ? (
            <_Builtin.Block className="footer_inner-grid is-cta" tag="div">
              <_Builtin.Block className="header-block is-footer" tag="div">
                <_Builtin.Block className="pill-highlights" tag="div">
                  <_Builtin.Block
                    className="is-highlights is-pill-purple"
                    tag="div"
                    bg-pill-gradient=""
                  >
                    {"newsletter"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="h-wrapper is-footer" tag="div">
                  <_Builtin.Heading tag="h3">
                    {"Access exclusive content"}
                  </_Builtin.Heading>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="footer_newsletter-block" tag="div">
                <_Builtin.HtmlEmbed
                  className="hbs_newsletter-form"
                  value="%3Cscript%20charset%3D%22utf-8%22%20type%3D%22text%2Fjavascript%22%20src%3D%22%2F%2Fjs.hsforms.net%2Fforms%2Fembed%2Fv2.js%22%3E%3C%2Fscript%3E%0A%3Cscript%3E%0A%20%20hbspt.forms.create(%7B%0A%20%20%20%20region%3A%20%22na1%22%2C%0A%20%20%20%20portalId%3A%20%2223297802%22%2C%0A%20%20%20%20formId%3A%20%2228dd28cd-4885-4df9-af9a-64745ce12f0a%22%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
                />
                <_Builtin.Paragraph className="is-body-s" style={{ color: 'rgba(246, 246, 246, 1)' }}>
                  {
                    "Get the latest news on AI, machine learning and computer vision, updates on events, blog posts, resources, and more."
                  }
                </_Builtin.Paragraph>
                <_Builtin.FormWrapper className="newsletter_form-block">
                  <_Builtin.FormForm
                    className="newsletter_form"
                    name="wf-form-Newsletter-Form"
                    data-name="Newsletter Form"
                    method="get"
                    data-webflow-hubspot-api-form-url="https://hubspotonwebflow.com/api/forms/ad6bbbcb-4f24-4cbb-850a-71f0ed141224"
                    id="wf-form-Newsletter-Form"
                  >
                    <_Builtin.FormTextInput
                      className="newsletter_form-field"
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
                      className="newsletter_form-button"
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
                  <_Builtin.FormSuccessMessage className="hs-newsletter_success-message">
                    <_Builtin.Block tag="div">
                      {
                        "Thanks for signing up, we're so happy to have you on board! Don't hesitate to get in touch if you have any questions.We'll always get back to you."
                      }
                    </_Builtin.Block>
                  </_Builtin.FormSuccessMessage>
                  <_Builtin.FormErrorMessage className="hs-newsletter_error-message">
                    <_Builtin.Block tag="div">
                      {"Oops!"}
                      <br />
                      {"Something went wrong while submitting the form."}
                      <br />
                      {"Please try again."}
                    </_Builtin.Block>
                  </_Builtin.FormErrorMessage>
                  <_Builtin.Block className="hs-newsletter_pp" tag="div">
                    <_Builtin.Span>
                      {"Your privacy is important to us "}
                    </_Builtin.Span>
                    <_Builtin.Link
                      className="hs-newsletter_pp-link"
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Span className="hs-newsletter_pp-link">
                        {"privacy policy."}
                      </_Builtin.Span>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.FormWrapper>
                <_Builtin.DOM
                  className="hs-newsletter_form-block"
                  tag="div"
                  slot=""
                  name="Form Block"
                >
                  <_Builtin.DOM
                    className="hs-newsletter_form"
                    tag="form"
                    slot=""
                    name="Form"
                    action="https://hubspotonwebflow.com/api/forms/8e60c115-335e-4a35-9e78-80edbaadf2dc"
                    method="POST"
                    encType="multipart/form-data"
                    data-name="Newsletter subscription"
                    data-wf-hs-form="webflowHubSpotForm"
                    data-wf-page-id="66603dc4a8308da80ba98fa3"
                    data-wf-element-id="80eccd80-9469-2647-b9a5-830d4510efba"
                  >
                    <_Builtin.DOM
                      className="hs-newsletter_label"
                      tag="label"
                      slot=""
                      _for="email"
                    >
                      {"Email address"}
                    </_Builtin.DOM>
                    <_Builtin.Block
                      className="hs-newsletter_input-block"
                      tag="div"
                    >
                      <_Builtin.DOM
                        className="hs-newsletter_form-field"
                        tag="input"
                        slot=""
                        type="email"
                        name="email"
                        required={true}
                        id="email"
                        placeholder="E-mail address"
                      />
                      <_Builtin.DOM
                        className="hs-newsletter_form-button"
                        tag="button"
                        slot=""
                        type="submit"
                      >
                        {"Sign up"}
                      </_Builtin.DOM>
                    </_Builtin.Block>
                    <_Builtin.Block className="hs-newsletter_pp" tag="div">
                      <_Builtin.Span>
                        {"Your privacy is important to us "}
                      </_Builtin.Span>
                      <_Builtin.Link
                        className="hs-newsletter_pp-link"
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Span className="hs-newsletter_pp-link">
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
            </_Builtin.Block>
          ) : null}
          <_Builtin.Block
            className="footer_inner-grid is-top"
            id="w-node-dd078982-dabd-bf73-09d7-fba6bbd14bb1-d43c4640"
            tag="div"
          >
            {footerLogoVisibility ? (
              <_Builtin.Link
                className="footer_logo-link"
                button={false}
                aria-label="back to home"
                block="inline"
                options={footerLogoLink}
              >
                <_Builtin.HtmlEmbed
                  className="footer_logo"
                  id="w-node-dd078982-dabd-bf73-09d7-fba6bbd14bb3-d43c4640"
                  value="%3Csvg%20width%3D%22204%22%20height%3D%2241%22%20viewBox%3D%220%200%20204%2041%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.4548%202.51462L10.6293%200H0L4.69707%2013.2423L11.4548%202.51462Z%22%20fill%3D%22%23FF4500%22%2F%3E%0A%3Cpath%20d%3D%22M41.5817%200H31.0104L26.6382%2013.2423L38.5745%208.47817L41.5817%200Z%22%20fill%3D%22%23A4C217%22%2F%3E%0A%3Cpath%20d%3D%22M14.9922%2013.2423L11.4524%202.51465L6.76343%209.95782L14.9922%2013.2423Z%22%20fill%3D%22%23D6493E%22%2F%3E%0A%3Cpath%20d%3D%22M10.4308%2029.4059L20.7921%2030.9541L14.9951%2013.2417L7.95032%2022.4134L10.4308%2029.4059Z%22%20fill%3D%22%23A63B94%22%2F%3E%0A%3Cpath%20d%3D%22M20.7909%2030.9541L31.1506%2029.4103L33.7748%2022.0122L26.6391%2013.2417L20.7909%2030.9541Z%22%20fill%3D%22%232DB686%22%2F%3E%0A%3Cpath%20d%3D%22M20.7898%2030.9551L27.0391%2041.0002H14.5404L20.7898%2030.9551Z%22%20fill%3D%22%230197D8%22%2F%3E%0A%3Cpath%20d%3D%22M20.7914%2030.9545L14.542%2040.9996L10.4301%2029.4062L20.7914%2030.9545Z%22%20fill%3D%22%23336C9B%22%2F%3E%0A%3Cpath%20d%3D%22M27.0403%2040.999L31.1506%2029.4102L20.7909%2030.9539L27.0403%2040.999Z%22%20fill%3D%22%2326BF79%22%2F%3E%0A%3Cpath%20d%3D%22M7.94966%2022.4139L14.9945%2013.2422L2.99841%208.4541L7.94966%2022.4139Z%22%20fill%3D%22%23CC4E84%22%2F%3E%0A%3Cpath%20d%3D%22M33.7739%2022.0126L26.6382%2013.2421L38.5745%208.47803L33.7739%2022.0126Z%22%20fill%3D%22%231BC07D%22%2F%3E%0A%3Cpath%20d%3D%22M55.7393%2011.4644H55.8364C56.4047%2011.4644%2056.9111%2011.8211%2057.1017%2012.3566L61.9869%2026.0498C62.0722%2026.2876%2062.408%2026.2876%2062.4933%2026.0498L67.3667%2012.3575C67.5573%2011.822%2068.0637%2011.4644%2068.6319%2011.4644H68.7282C69.6576%2011.4644%2070.3057%2012.3857%2069.9926%2013.2606L64.2769%2029.2276C64.0854%2029.7613%2063.5798%2030.118%2063.0125%2030.118H61.4541C60.8868%2030.118%2060.3803%2029.7613%2060.1897%2029.2276L54.474%2013.2606C54.1609%2012.3857%2054.809%2011.4644%2055.7384%2011.4644H55.7393Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M72.5181%2014.0363C72.1859%2013.7041%2072.0198%2013.302%2072.0198%2012.8291C72.0198%2012.3562%2072.1859%2011.955%2072.5181%2011.6218C72.8503%2011.2896%2073.2524%2011.1235%2073.7253%2011.1235C74.1982%2011.1235%2074.5994%2011.2896%2074.9325%2011.6218C75.2647%2011.9541%2075.4308%2012.3562%2075.4308%2012.8291C75.4308%2013.302%2075.2647%2013.7041%2074.9325%2014.0363C74.6003%2014.3685%2074.1982%2014.5346%2073.7253%2014.5346C73.2524%2014.5346%2072.8503%2014.3685%2072.5181%2014.0363ZM72.3347%2028.7751V17.8712C72.3347%2017.1296%2072.9365%2016.5278%2073.6781%2016.5278H73.7725C74.5141%2016.5278%2075.1159%2017.1296%2075.1159%2017.8712V28.7751C75.1159%2029.5167%2074.5141%2030.1185%2073.7725%2030.1185H73.6781C72.9365%2030.1185%2072.3347%2029.5167%2072.3347%2028.7751Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M77.7291%2020.6737V20.3461C77.7291%2019.2877%2078.1113%2018.3873%2078.8773%2017.6439C79.6425%2016.9005%2080.5629%2016.5293%2081.6385%2016.5293H88.2709C89.0124%2016.5293%2089.6142%2017.1311%2089.6142%2017.8727V17.9544C89.6142%2018.6959%2089.0124%2019.2977%2088.2709%2019.2977H81.6385C81.3235%2019.2977%2081.0548%2019.4003%2080.8316%2019.6063C80.6083%2019.8115%2080.4966%2020.0593%2080.4966%2020.3479V20.6756C80.4966%2020.9733%2080.6083%2021.2265%2080.8316%2021.4362C81.0548%2021.6459%2081.3235%2021.7512%2081.6385%2021.7512H86.5971C87.6727%2021.7512%2088.5913%2022.1251%2089.3519%2022.873C90.1125%2023.621%2090.4929%2024.5241%2090.4929%2025.5816V26.2895C90.4929%2027.3479%2090.1125%2028.251%2089.3519%2028.998C88.5913%2029.746%2087.6727%2030.1199%2086.5971%2030.1199H79.6897C78.9481%2030.1199%2078.3463%2029.5181%2078.3463%2028.7766V28.6949C78.3463%2027.9533%2078.9481%2027.3515%2079.6897%2027.3515H86.5971C86.9121%2027.3515%2087.1808%2027.2462%2087.404%2027.0366C87.6273%2026.8269%2087.739%2026.5727%2087.739%2026.2759V25.5934C87.739%2025.2965%2087.6273%2025.0406%2087.404%2024.8264C87.1808%2024.6122%2086.9121%2024.5051%2086.5971%2024.5051H81.6385C80.5629%2024.5051%2079.6425%2024.1311%2078.8773%2023.3832C78.1122%2022.6352%2077.7291%2021.7321%2077.7291%2020.6747V20.6737Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M93.105%2025.213V17.8727C93.105%2017.1311%2093.7068%2016.5293%2094.4483%2016.5293H94.53C95.2716%2016.5293%2095.8734%2017.1311%2095.8734%2017.8727V25.174C95.8734%2025.7858%2096.0813%2026.3068%2096.4961%2026.7352C96.9118%2027.1636%2097.4164%2027.3778%2098.011%2027.3778H102.557C102.705%2027.3778%20102.825%2027.2571%20102.825%2027.1092V17.8727C102.825%2017.1311%20103.427%2016.5293%20104.169%2016.5293H104.25C104.992%2016.5293%20105.594%2017.1311%20105.594%2017.8727V27.3651C105.594%2028.1258%20105.32%2028.7757%20104.774%2029.313C104.228%2029.8513%20103.57%2030.1199%20102.8%2030.1199H98.0119C96.6649%2030.1199%2095.5103%2029.6389%2094.5491%2028.6767C93.587%2027.7146%2093.1059%2026.56%2093.1059%2025.2139L93.105%2025.213Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M108.206%2025.213V21.409C108.206%2020.062%20108.685%2018.9119%20109.643%2017.9589C110.6%2017.0058%20111.757%2016.5293%20113.113%2016.5293H119.351C120.093%2016.5293%20120.694%2017.1311%20120.694%2017.8727V28.7766C120.694%2029.5181%20120.093%2030.1199%20119.351%2030.1199H119.269C118.528%2030.1199%20117.926%2029.5181%20117.926%2028.7766V19.5664C117.926%2019.4184%20117.805%2019.2977%20117.657%2019.2977H113.112C112.517%2019.2977%20112.012%2019.5056%20111.597%2019.9204C111.182%2020.3352%20110.974%2020.8408%20110.974%2021.4353V25.1867C110.974%2025.7812%20111.184%2026.2904%20111.604%2026.7152C112.023%2027.1391%20112.526%2027.3515%20113.113%2027.3515H115.01C115.751%2027.3515%20116.353%2027.9533%20116.353%2028.6949V28.7766C116.353%2029.5181%20115.751%2030.1199%20115.01%2030.1199H113.113C111.766%2030.1199%20110.611%2029.6389%20109.65%2028.6767C108.688%2027.7146%20108.207%2026.56%20108.207%2025.2139L108.206%2025.213Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M123.442%2028.7746V12.8077C123.442%2012.0661%20124.043%2011.4644%20124.785%2011.4644H124.867C125.608%2011.4644%20126.21%2012.0661%20126.21%2012.8077V28.7746C126.21%2029.5162%20125.608%2030.118%20124.867%2030.118H124.785C124.043%2030.118%20123.442%2029.5162%20123.442%2028.7746Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M135.998%2024.8971V12.8077C135.998%2012.0661%20136.599%2011.4644%20137.341%2011.4644H137.409C138.151%2011.4644%20138.752%2012.0661%20138.752%2012.8077V24.8971C138.752%2025.5796%20138.993%2026.1605%20139.474%2026.6416C139.955%2027.1227%20140.532%2027.3632%20141.206%2027.3632H149.111C149.852%2027.3632%20150.454%2027.965%20150.454%2028.7066V28.7746C150.454%2029.5162%20149.852%2030.118%20149.111%2030.118H141.206C139.772%2030.118%20138.546%2029.6088%20137.526%2028.5895C136.508%2027.5711%20135.998%2026.3393%20135.998%2024.8971Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M152.018%2025.213V21.409C152.018%2020.062%20152.497%2018.9119%20153.454%2017.9589C154.412%2017.0058%20155.568%2016.5293%20156.924%2016.5293H163.163C163.904%2016.5293%20164.506%2017.1311%20164.506%2017.8727V28.7766C164.506%2029.5181%20163.904%2030.1199%20163.163%2030.1199H163.081C162.34%2030.1199%20161.738%2029.5181%20161.738%2028.7766V19.5664C161.738%2019.4184%20161.617%2019.2977%20161.469%2019.2977H156.924C156.329%2019.2977%20155.823%2019.5056%20155.409%2019.9204C154.993%2020.3361%20154.786%2020.8408%20154.786%2021.4353V25.1867C154.786%2025.7812%20154.996%2026.2904%20155.416%2026.7152C155.835%2027.1391%20156.338%2027.3515%20156.924%2027.3515H158.822C159.563%2027.3515%20160.165%2027.9533%20160.165%2028.6949V28.7766C160.165%2029.5181%20159.563%2030.1199%20158.822%2030.1199H156.924C155.577%2030.1199%20154.423%2029.6389%20153.462%2028.6767C152.5%2027.7146%20152.018%2026.56%20152.018%2025.2139L152.018%2025.213Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M168.149%2016.5288H168.208C168.768%2016.5288%20169.269%2016.8764%20169.466%2017.4011L172.419%2025.2833C172.506%2025.5148%20172.833%2025.5166%20172.922%2025.2852L175.946%2017.392C176.144%2016.8719%20176.644%2016.5288%20177.2%2016.5288H177.374C178.317%2016.5288%20178.967%2017.4755%20178.628%2018.3551L172.449%2034.3746C172.25%2034.8929%20171.751%2035.2342%20171.196%2035.2342H171.034C170.094%2035.2342%20169.445%2034.2929%20169.778%2033.4143L171.198%2029.6729L166.892%2018.3496C166.558%2017.4701%20167.207%2016.5288%20168.148%2016.5288H168.149Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M181.028%2026.2881V19.3353C181.028%2018.5575%20181.313%2017.8949%20181.881%2017.3484C182.449%2016.802%20183.132%2016.5288%20183.928%2016.5288H189.594C190.679%2016.5288%20191.603%2016.9137%20192.369%2017.6834C193.134%2018.4531%20193.517%2019.3844%20193.517%2020.4772V20.8575C193.517%2021.9331%20193.134%2022.8535%20192.369%2023.6187C191.604%2024.3838%20190.679%2024.7669%20189.594%2024.7669H186.713C185.972%2024.7669%20185.37%2024.1651%20185.37%2023.4235V23.3554C185.37%2022.6139%20185.972%2022.0121%20186.713%2022.0121H189.621C189.936%2022.0121%20190.204%2021.8986%20190.427%2021.6708C190.651%2021.4439%20190.762%2021.1679%20190.762%2020.8448V20.4772C190.762%2020.1541%20190.651%2019.8763%20190.427%2019.6439C190.204%2019.4125%20189.936%2019.2963%20189.621%2019.2963H185.139C184.398%2019.2963%20183.796%2019.8981%20183.796%2020.6397V26.2754C183.796%2026.5732%20183.897%2026.8264%20184.097%2027.0361C184.299%2027.2457%20184.543%2027.351%20184.832%2027.351H191.214C191.956%2027.351%20192.558%2027.9528%20192.558%2028.6944V28.7761C192.558%2029.5176%20191.956%2030.1194%20191.214%2030.1194H184.832C183.782%2030.1194%20182.886%2029.7455%20182.142%2028.9976C181.399%2028.2496%20181.028%2027.3465%20181.028%2026.289L181.028%2026.2881Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M197.479%2030.1185C196.737%2030.1185%20196.135%2029.5167%20196.135%2028.7752V20.3329C196.135%2019.2836%20196.518%2018.3868%20197.284%2017.6434C198.049%2016.9%20198.969%2016.5288%20200.045%2016.5288H201.732C202.474%2016.5288%20203.076%2017.1306%20203.076%2017.8722V17.9402C203.076%2018.6818%20202.474%2019.2836%20201.732%2019.2836H200.045C199.73%2019.2836%20199.461%2019.3907%20199.238%2019.6049C199.015%2019.8191%20198.903%2020.0796%20198.903%2020.3855V28.7761C198.903%2029.5176%20198.301%2030.1194%20197.56%2030.1194H197.478L197.479%2030.1185Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Link>
            ) : null}
            <_Builtin.Block
              className="footer_menu-grid"
              id="w-node-dd078982-dabd-bf73-09d7-fba6bbd14bb4-d43c4640"
              tag="div"
            >
              <_Builtin.Block
                className="footer_menu-grid-item"
                id="w-node-dd078982-dabd-bf73-09d7-fba6bbd14bb5-d43c4640"
                tag="div"
              >
                <FooterMenuTitle menuTitleText="Navigation" />
                <_Builtin.List
                  className="footer_menu-list"
                  tag="ul"
                  unstyled={true}
                >
                  <_Builtin.ListItem className="footer_menu-list-item">
                    <FooterLink
                      linkText="Home"
                      linkUrl={{
                        href: "#",
                      }}
                    />
                  </_Builtin.ListItem>
                  <_Builtin.ListItem className="footer_menu-list-item">
                    <FooterLink
                      linkText="Platform"
                      linkUrl={{
                        href: "/#platform",
                      }}
                    />
                  </_Builtin.ListItem>
                </_Builtin.List>
              </_Builtin.Block>
              <_Builtin.Block
                className="footer_menu-grid-item"
                id="w-node-dd078982-dabd-bf73-09d7-fba6bbd14bc5-d43c4640"
                tag="div"
              >
                <FooterMenuTitle menuTitleText="resources" />
                <_Builtin.List
                  className="footer_menu-list"
                  tag="ul"
                  unstyled={true}
                >
                  <_Builtin.ListItem className="footer_menu-list-item">
                    <FooterLink
                      linkText="Blog"
                      linkUrl={{
                        href: "#",
                      }}
                    />
                  </_Builtin.ListItem>
                  <_Builtin.ListItem className="footer_menu-list-item">
                    <FooterLink
                      linkText="Documentation"
                      linkUrl={{
                        href: "https://docs.visual-layer.com",
                        target: "_blank",
                      }}
                    />
                  </_Builtin.ListItem>
                  <_Builtin.ListItem className="footer_menu-list-item is-display-hidden">
                    <FooterLink linkText="Events" />
                  </_Builtin.ListItem>
                  <_Builtin.ListItem className="footer_menu-list-item">
                    <FooterLink
                      linkText="Videos "
                      linkUrl={{
                        href: "https://www.youtube.com/@visual-layer",
                        target: "_blank",
                      }}
                    />
                  </_Builtin.ListItem>
                </_Builtin.List>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="footer_menu-grid-item"
              id="w-node-dd078982-dabd-bf73-09d7-fba6bbd14bd5-d43c4640"
              tag="div"
            >
              <_Builtin.Block className="footer_menu-group" tag="div">
                <_Builtin.List
                  className="footer_menu-list is-social-links"
                  tag="ul"
                  unstyled={true}
                >
                  <_Builtin.ListItem className="footer_menu-list-item">
                    {githubVisibility ? (
                      <_Builtin.Link
                        className="footer_social-link"
                        button={false}
                        aria-label="github"
                        block="inline"
                        options={githubLinkUrl}
                      />
                    ) : null}
                  </_Builtin.ListItem>
                  <_Builtin.ListItem className="footer_menu-list-item">
                    {discordVisibility ? (
                      <_Builtin.Link
                        className="footer_social-link"
                        button={false}
                        aria-label="discord"
                        block="inline"
                        options={discordLinkUrl}
                      >
                        <_Builtin.HtmlEmbed
                          className="footer_social-icon"
                          value="%3Csvg%20width%3D%2229%22%20height%3D%2230%22%20viewBox%3D%220%200%2029%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20opacity%3D%220.8%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2142_120)%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.6471%205C8.31984%205%204%209.36089%204%2014.7405C4%2019.0442%206.76418%2022.6953%2010.5973%2023.9833C11.0794%2024.0734%2011.2565%2023.772%2011.2565%2023.5147C11.2565%2023.2824%2011.2474%2022.5151%2011.2434%2021.7012C8.55945%2022.2904%207.99314%2020.5519%207.99314%2020.5519C7.5543%2019.426%206.92201%2019.1267%206.92201%2019.1267C6.04677%2018.5222%206.98799%2018.5345%206.98799%2018.5345C7.95674%2018.6033%208.46685%2019.5383%208.46685%2019.5383C9.32726%2021.0275%2010.7236%2020.5969%2011.2742%2020.3481C11.3607%2019.7185%2011.6108%2019.2888%2011.8866%2019.0456C9.74392%2018.7992%207.49136%2017.964%207.49136%2014.2318C7.49136%2013.1684%207.86822%2012.2994%208.48538%2011.6173C8.38521%2011.3719%208.05503%2010.3813%208.57882%209.03958C8.57882%209.03958%209.38892%208.77779%2011.2325%2010.038C12.0019%209.82215%2012.8272%209.71398%2013.6471%209.71031C14.467%209.71398%2015.2929%209.82215%2016.0638%2010.038C17.9052%208.77779%2018.7142%209.03958%2018.7142%209.03958C19.2392%2010.3813%2018.9089%2011.3719%2018.8087%2011.6173C19.4273%2012.2994%2019.8016%2013.1683%2019.8016%2014.2318C19.8016%2017.9729%2017.5447%2018.7967%2015.3966%2019.0378C15.7426%2019.3401%2016.0509%2019.9329%2016.0509%2020.8416C16.0509%2022.1449%2016.0397%2023.1938%2016.0397%2023.5147C16.0397%2023.7739%2016.2133%2024.0776%2016.7024%2023.982C20.5334%2022.6925%2023.2941%2019.0427%2023.2941%2014.7405C23.2941%209.36089%2018.9749%205%2013.6471%205Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M7.61788%2018.8727C7.59685%2018.9213%207.52189%2018.9358%207.45376%2018.9026C7.38427%2018.8707%207.34521%2018.8045%207.36775%2018.7557C7.3884%2018.7057%207.46337%2018.6918%207.5327%2018.7254C7.60233%2018.7572%207.642%2018.824%207.61788%2018.8727ZM8.08901%2019.3016C8.04334%2019.3449%207.95403%2019.3248%207.89341%2019.2565C7.83076%2019.1884%207.81904%2019.0973%207.86539%2019.0534C7.91249%2019.0102%207.9991%2019.0304%208.06189%2019.0986C8.12454%2019.1675%208.13679%2019.2579%208.08901%2019.3016ZM8.41224%2019.8504C8.3535%2019.892%208.2575%2019.853%208.19823%2019.7661C8.13956%2019.6792%208.13956%2019.575%208.19951%2019.5332C8.259%2019.4915%208.3535%2019.529%208.41359%2019.6152C8.47218%2019.7036%208.47225%2019.8078%208.41224%2019.8504ZM8.95878%2020.486C8.90627%2020.545%208.7945%2020.5292%208.71262%2020.4486C8.62895%2020.3698%208.60558%2020.258%208.65824%2020.1989C8.71135%2020.1397%208.8238%2020.1563%208.90627%2020.2363C8.98943%2020.3149%209.01474%2020.4276%208.95878%2020.486ZM9.66517%2020.7006C9.64211%2020.7771%209.53439%2020.8119%209.42593%2020.7794C9.31761%2020.7459%209.2467%2020.6562%209.26856%2020.5789C9.29109%2020.5018%209.39926%2020.4656%209.50855%2020.5004C9.61672%2020.5337%209.68771%2020.6227%209.66517%2020.7006ZM10.4692%2020.7915C10.4719%2020.8722%2010.3799%2020.939%2010.266%2020.9405C10.1515%2020.943%2010.0589%2020.8778%2010.0577%2020.7985C10.0577%2020.7171%2010.1476%2020.6509%2010.262%2020.649C10.3759%2020.6467%2010.4692%2020.7115%2010.4692%2020.7915ZM11.259%2020.7607C11.2727%2020.8393%2011.1935%2020.9201%2011.0804%2020.9415C10.9693%2020.9622%2010.8664%2020.9137%2010.8522%2020.8358C10.8383%2020.7551%2010.919%2020.6744%2011.03%2020.6535C11.1432%2020.6334%2011.2446%2020.6807%2011.259%2020.7607Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2142_120%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2219%22%20fill%3D%22white%22%20transform%3D%22translate(4%205)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Link>
                    ) : null}
                  </_Builtin.ListItem>
                  <_Builtin.ListItem className="footer_menu-list-item">
                    {linkedInLinkVisibility ? (
                      <_Builtin.Link
                        className="footer_social-link"
                        button={false}
                        aria-label="linkedin"
                        block="inline"
                        options={linkedInLinkUrl}
                      >
                        <_Builtin.HtmlEmbed
                          className="footer_social-icon"
                          value="%3Csvg%20width%3D%2229%22%20height%3D%2230%22%20viewBox%3D%220%200%2029%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20opacity%3D%220.86%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.7008%2015.651V15.6162C13.6937%2015.6279%2013.6838%2015.6396%2013.6777%2015.651H13.7008Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.72728%205C5.77333%205%205%205.77332%205%206.72727V22.2727C5%2023.2266%205.77333%2024%206.72728%2024H22.2728C23.2267%2024%2024%2023.2266%2024%2022.2727V6.72727C24%205.77332%2023.2267%205%2022.2728%205H6.72728ZM10.9097%2020.7847H8.09078V12.3038H10.9097V20.7847ZM9.50025%2011.1462H9.48163C8.53601%2011.1462%207.92308%2010.4947%207.92308%209.68047C7.92308%208.84831%208.55393%208.2153%209.51871%208.2153C10.4837%208.2153%2011.0767%208.84831%2011.0952%209.68047C11.0952%2010.4947%2010.4837%2011.1462%209.50025%2011.1462ZM21.077%2020.7847H18.2573V16.2473C18.2573%2015.1078%2017.8498%2014.3298%2016.8293%2014.3298C16.0499%2014.3298%2015.5868%2014.8536%2015.3827%2015.361C15.3086%2015.5422%2015.2892%2015.7941%2015.2892%2016.0483V20.7848H12.4691C12.4691%2020.7848%2012.5068%2013.0994%2012.4691%2012.3038H15.2892V13.5056C15.664%2012.929%2016.3326%2012.1047%2017.8305%2012.1047C19.6861%2012.1047%2021.077%2013.3165%2021.077%2015.9213V20.7847Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Link>
                    ) : null}
                  </_Builtin.ListItem>
                  <_Builtin.ListItem className="footer_menu-list-item is-display-hidden">
                    {twitterLinkVisibility ? (
                      <_Builtin.Link
                        className="footer_social-link"
                        button={false}
                        aria-label="Twitter(X)"
                        block="inline"
                        options={twitterLinkUrl}
                      >
                        <_Builtin.HtmlEmbed
                          className="footer_social-icon"
                          value="%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20opacity%3D%220.8%22%3E%0A%3Cpath%20d%3D%22M13.9667%2017.8142L8.22053%2024.3753H5.03772L12.4801%2015.8735L13.9667%2017.8142Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M15.7038%2011.6438L20.9652%205.625H24.146L17.177%2013.5951L15.7038%2011.6438Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M25.7143%2025H19.1016L4.28571%205H11.0658L25.7143%2025ZM20.0085%2022.9693H21.8292L10.0766%206.92429H8.12301L20.0085%2022.9693Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Link>
                    ) : null}
                  </_Builtin.ListItem>
                  <_Builtin.ListItem className="footer_menu-list-item">
                    {youTubeLinkVisibility ? (
                      <_Builtin.Link
                        className="footer_social-link"
                        button={false}
                        aria-label="you tube"
                        block="inline"
                        options={youTubeLinkUrl}
                      >
                        <_Builtin.HtmlEmbed
                          className="footer_social-icon"
                          value="%3Csvg%20width%3D%2229%22%20height%3D%2230%22%20viewBox%3D%220%200%2029%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20opacity%3D%220.86%22%3E%0A%3Cpath%20d%3D%22M14.4929%207C14.4929%207%207.30442%207.00001%205.50022%207.46602C4.53419%207.73434%203.73873%208.52506%203.46882%209.49947C3.00001%2011.2929%203%2015.007%203%2015.007C3%2015.007%203.00001%2018.7353%203.46882%2020.5005C3.73873%2021.4749%204.51999%2022.2515%205.50022%2022.5198C7.31862%2022.9999%2014.4929%2023%2014.4929%2023C14.4929%2023%2021.6955%2023%2023.4997%2022.534C24.48%2022.2657%2025.2612%2021.5032%2025.5169%2020.5146C25.9999%2018.7353%2026%2015.0212%2026%2015.0212C26%2015.0212%2026.0141%2011.2929%2025.5169%209.49947C25.2612%208.52506%2024.48%207.74848%2023.4997%207.49429C21.6955%207.00002%2014.4929%207%2014.4929%207ZM12.2056%2011.5755L18.1866%2015.007L12.2056%2018.4244V11.5755Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Link>
                    ) : null}
                  </_Builtin.ListItem>
                </_Builtin.List>
                <_Builtin.Block className="footer_line" tag="div" />
                {emailVisibility ? (
                  <_Builtin.Link
                    className="footer_link is-email"
                    button={false}
                    block="inline"
                    options={emailUrl}
                  >
                    <_Builtin.HtmlEmbed
                      className="footer_link-icon"
                      value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20opacity%3D%220.8%22%20clip-path%3D%22url(%23clip0_2207_156)%22%3E%0A%3Cpath%20d%3D%22M0.666656%206L8.00066%2011.3333L15.3333%206%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M7.99932%200.666992L0.666656%206.00033V14.0003C0.666656%2014.737%201.26332%2015.3337%201.99999%2015.3337H14C14.7367%2015.3337%2015.3333%2014.737%2015.3333%2014.0003V6.00033L7.99932%200.666992Z%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22square%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2207_156%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block className="footer-link" tag="div">
                      {emailText}
                    </_Builtin.Block>
                  </_Builtin.Link>
                ) : null}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="footer_divider is-show-mobile" tag="div">
              <_Builtin.Block className="footer_divider-line" tag="div" />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="footer_inner-grid is-btm"
            id="w-node-_434c393c-09ae-ba31-d7de-4dd7d43c4694-d43c4640"
            tag="div"
          >
            <_Builtin.Block className="footer_btm-menu-wrapper" tag="div">
              <_Builtin.Block className="footer_btm-block" tag="div">
                <_Builtin.Block tag="div">
                  {"© "}
                  <_Builtin.Span className="year">{"2025"}</_Builtin.Span>
                  {" Visual Layer"}
                </_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className="footer_year-embed"
                  value="%3Cscript%3E%20let%20yearElements%20%3D%20document.getElementsByClassName('year')%3B%20%5B%5D.slice.call(yearElements).forEach(function%20(div)%20%7B%20%20%20div.innerHTML%20%3D%20new%20Date().getFullYear()%3B%20%7D)%3B%0A%3C%2Fscript%3E"
                />
              </_Builtin.Block>
              <_Builtin.Block className="footer_btm-block is-legal" tag="div">
                <FooterLinkGrey
                  linkText={privacyLinkText}
                  linkVisibility={privacyLinkVisibility}
                  linkUrl={privacyLinkUrl}
                />
                <FooterLinkGrey
                  linkText={toULinkText}
                  linkVisibility={toULinkVisibility}
                  linkUrl={toULinkUrl}
                />
                <_Builtin.Block className="is-display-hidden" tag="div">
                  <FooterLinkGrey
                    linkText={cookieLinkText}
                    linkVisibility={cookieLinkVisibility}
                    linkUrl={cookieLinkUrl}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="footer_divider" tag="div">
              <_Builtin.HtmlEmbed
                className="footer_line-gradient"
                value="%3Csvg%20width%3D%2294%22%20height%3D%2214%22%20viewBox%3D%220%200%2094%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7%207L87%207%22%20stroke%3D%22url(%23paint0_linear_2207_190)%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3Cg%20opacity%3D%220.24%22%20filter%3D%22url(%23filter0_f_2207_190)%22%3E%0A%3Cpath%20d%3D%22M7%207L87%207%22%20stroke%3D%22url(%23paint1_linear_2207_190)%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_f_2207_190%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2294%22%20height%3D%2214%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%20result%3D%22effect1_foregroundBlur_2207_190%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2207_190%22%20x1%3D%2289.8571%22%20y1%3D%227%22%20x2%3D%229.85714%22%20y2%3D%226.99999%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%230197D8%22%2F%3E%0A%3Cstop%20offset%3D%220.115%22%20stop-color%3D%22%230197D8%22%2F%3E%0A%3Cstop%20offset%3D%220.5%22%20stop-color%3D%22%231BC07D%22%20stop-opacity%3D%220.5%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231BC07D%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2207_190%22%20x1%3D%2289.8571%22%20y1%3D%227%22%20x2%3D%229.85714%22%20y2%3D%226.99999%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%230197D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231BC07D%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block className="footer_divider-line" tag="div" />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Image
          className="squares is-footer"
          loading="lazy"
          width="790"
          height="Auto"
          alt=""
          src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666bc3461a56874940b8e03b_Squares.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
