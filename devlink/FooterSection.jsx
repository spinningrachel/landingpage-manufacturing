"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonPrimaryLarge } from "./ButtonPrimaryLarge";
import * as _utils from "./utils";
import _styles from "./FooterSection.module.css";

export function FooterSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "is-community")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "community_layout")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "community_main-grid")}
            id={_utils.cx(
              _styles,
              "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc797-cfccc794"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "community_main-grid-item",
                "is-header"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc798-cfccc794"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "header-block", "is-community")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "pill-highlights")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "is-highlights",
                      "is-pill-purple"
                    )}
                    tag="div"
                    bg-pill-gradient=""
                  >
                    {"our community"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "h-wrapper", "is-community")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "is-h1")}
                    tag="h2"
                  >
                    {"Join the Visual Layer "}
                    <_Builtin.Span
                      className={_utils.cx(
                        _styles,
                        "is-gradient",
                        "heading-span"
                      )}
                    >
                      {"Community"}
                    </_Builtin.Span>
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "is-h4", "is-bl")}
                  tag="div"
                >
                  {
                    "Connect, collaborate, and lead with like-minded professionals."
                  }
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "p-wrapper", "is-community")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "is-body-m",
                      "is-white-0-6-opacity"
                    )}
                  >
                    {
                      "Our community brings together developers, data scientists, analysts, and tech leaders from around the world who share a passion for AI, computer vision, data quality, machine learning and more."
                    }
                    <br />
                    <br />
                    {
                      "Engage with industry leaders, access exclusive resources, and be part of a supportive network that's driving the future of visual data management and AI."
                    }
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "community_main-grid-item",
                "is-circle"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc7aa-cfccc794"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "circle-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "circle-l")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "circle-m")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "circle-r")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "circle-s")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "circle-xs")}
                          tag="div"
                        >
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(_styles, "circle-vl-logo")}
                            value="%3Csvg%20width%3D%2246%22%20height%3D%2245%22%20viewBox%3D%220%200%2046%2045%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.6362%203.38602L11.7435%200.666504H0.248108L5.3279%2014.9878L12.6362%203.38602Z%22%20fill%3D%22%23FF4500%22%2F%3E%0A%3Cpath%20d%3D%22M45.2179%200.666504H33.7853L29.0568%2014.9878L41.9658%209.83548L45.2179%200.666504Z%22%20fill%3D%22%23A4C217%22%2F%3E%0A%3Cpath%20d%3D%22M16.4619%2014.988L12.6336%203.38623L7.56262%2011.4359L16.4619%2014.988Z%22%20fill%3D%22%23D6493E%22%2F%3E%0A%3Cpath%20d%3D%22M11.5288%2032.4685L22.7344%2034.1429L16.465%2014.9873L8.84619%2024.9063L11.5288%2032.4685Z%22%20fill%3D%22%23A63B94%22%2F%3E%0A%3Cpath%20d%3D%22M22.733%2034.1429L33.9369%2032.4734L36.7749%2024.4725L29.0577%2014.9873L22.733%2034.1429Z%22%20fill%3D%22%232DB686%22%2F%3E%0A%3Cpath%20d%3D%22M22.7319%2034.144L29.4905%2045.0076H15.9733L22.7319%2034.144Z%22%20fill%3D%22%230197D8%22%2F%3E%0A%3Cpath%20d%3D%22M22.7336%2034.1431L15.975%2045.0067L11.528%2032.4688L22.7336%2034.1431Z%22%20fill%3D%22%23336C9B%22%2F%3E%0A%3Cpath%20d%3D%22M29.4916%2045.0063L33.9368%2032.4731L22.733%2034.1427L29.4916%2045.0063Z%22%20fill%3D%22%2326BF79%22%2F%3E%0A%3Cpath%20d%3D%22M8.84547%2024.9068L16.4643%2014.9878L3.49078%209.80957L8.84547%2024.9068Z%22%20fill%3D%22%23CC4E84%22%2F%3E%0A%3Cpath%20d%3D%22M36.774%2024.4734L29.0568%2014.9882L41.9658%209.83594L36.774%2024.4734Z%22%20fill%3D%22%231BC07D%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        </_Builtin.Block>
                        <_Builtin.Image
                          className={_utils.cx(_styles, "circle-img", "is-7")}
                          loading="lazy"
                          width="auto"
                          height="auto"
                          alt=""
                          src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666a78ab8530f50ddcc87156_Ellipse%207246.webp"
                        />
                        <_Builtin.Image
                          className={_utils.cx(_styles, "circle-img", "is-8")}
                          loading="lazy"
                          width="auto"
                          height="auto"
                          alt=""
                          src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/6673dbce67800df5167b2dbe_avatar%208.webp"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "circle-object", "is-4")}
                        tag="div"
                      />
                      <_Builtin.Image
                        className={_utils.cx(_styles, "circle-img", "is-4")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666a79f6f5dbca3e214db223_Ellipse%207244.webp"
                      />
                      <_Builtin.Image
                        className={_utils.cx(_styles, "circle-img", "is-5")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666a7a1375bc22d4b2e3bcd6_Ellipse%207250.webp"
                      />
                      <_Builtin.Image
                        className={_utils.cx(_styles, "circle-img", "is-6")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666a79ccf5dbca3e214d9bc0_Ellipse%207245.webp"
                      />
                    </_Builtin.Block>
                    <_Builtin.Image
                      className={_utils.cx(_styles, "circle-img", "is-9")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/6673dbcd9b218b782cb54318_avatar%209.webp"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "circle-img", "is-1")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666a78eaa41065085b688605_Ellipse%207247.webp"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "circle-img", "is-2")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666a7925b6532160db0544d2_Ellipse%207249.webp"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "circle-img", "is-3")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/666a795d76ea0e87c3b79fea_Ellipse%207248.webp"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "circle-object", "is-1")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "circle-object", "is-2")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "circle-object", "is-3")}
                      tag="div"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "circle-mask")}
                    tag="div"
                  />
                </_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "circle-animation")}
                  value="%3Cstyle%3E%0A%20%20.circle-m%20%7B%0A%20%20%20%20animation%3A%20rotate%20180s%20linear%20infinite%3B%0A%20%20%7D%0A%0A%20%20.circle-img%20%7B%0A%20%20%20%20animation%3A%20rotate-back%20180s%20linear%20infinite%3B%0A%20%20%7D%0A%20%20.circle-xs%20%7B%0A%20%20%20%20animation%3A%20rotate-logo%20180s%20linear%20infinite%3B%0A%20%20%7D%0A%0A%0A%20%20%40keyframes%20rotate%20%7B%0A%20%20%20%20from%20%7B%0A%20%20%20%20%20%20transform%3A%20rotate(0deg)%3B%0A%20%20%20%20%7D%0A%20%20%20%20to%20%7B%0A%20%20%20%20%20%20transform%3A%20rotate(360deg)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%40keyframes%20rotate-back%20%7B%0A%20%20%20%20from%20%7B%0A%20%20%20%20%20%20transform%3A%20rotate(0deg)%3B%0A%20%20%20%20%7D%0A%20%20%20%20to%20%7B%0A%20%20%20%20%20%20transform%3A%20rotate(-360deg)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%40keyframes%20rotate-logo%20%7B%0A%20%20%20%20from%20%7B%0A%20%20%20%20%20%20transform%3A%20rotate(0deg)%3B%0A%20%20%20%20%7D%0A%20%20%20%20to%20%7B%0A%20%20%20%20%20%20transform%3A%20rotate(-360deg)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "community_numbers-block")}
            id={_utils.cx(
              _styles,
              "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc7c1-cfccc794"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "community_numbers-title")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "is-h4")}
                tag="h3"
              >
                {"Stay Connected"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "is-body-m",
                  "is-white-0-6-opacity"
                )}
              >
                {"Explore our channels and get involved with the community."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "community_cta-grid")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "community_cta-grid-item")}
                button={false}
                block="inline"
                options={{
                  href: "https://discord.com/invite/tkYHJCA7mb",
                  target: "_blank",
                }}
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "community_cta-grid-item")}
                id={_utils.cx(
                  _styles,
                  "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc7cc-cfccc794"
                )}
                button={false}
                block="inline"
                options={{
                  href: "https://github.com/visual-layer/fastdup",
                  target: "_blank",
                }}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "community_cta-icon")}
                  value="%3Csvg%20width%3D%2265%22%20height%3D%2264%22%20viewBox%3D%220%200%2065%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2232.5%22%20cy%3D%2232%22%20r%3D%2232%22%20fill%3D%22url(%23paint0_linear_2130_1413)%22%20fill-opacity%3D%220.1%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2130_1413)%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M31.8%2020C25.0078%2020%2019.5%2025.5085%2019.5%2032.3038C19.5%2037.74%2023.0243%2042.3519%2027.9116%2043.9789C28.5262%2044.0927%2028.752%2043.712%2028.752%2043.387C28.752%2043.0936%2028.7405%2042.1243%2028.7353%2041.0962C25.3133%2041.8405%2024.5912%2039.6445%2024.5912%2039.6445C24.0317%2038.2224%2023.2256%2037.8443%2023.2256%2037.8443C22.1096%2037.0806%2023.3097%2037.0963%2023.3097%2037.0963C24.5448%2037.1831%2025.1952%2038.3642%2025.1952%2038.3642C26.2923%2040.2452%2028.0727%2039.7014%2028.7745%2039.3871C28.8849%2038.5918%2029.2037%2038.0491%2029.5555%2037.7418C26.8235%2037.4306%2023.9515%2036.3756%2023.9515%2031.6612C23.9515%2030.318%2024.432%2029.2203%2025.2189%2028.3587C25.0911%2028.0488%2024.6702%2026.7974%2025.338%2025.1026C25.338%2025.1026%2026.3709%2024.7719%2028.7214%2026.3638C29.7025%2026.0911%2030.7547%2025.9545%2031.8%2025.9499C32.8454%2025.9545%2033.8984%2026.0911%2034.8814%2026.3638C37.2291%2024.7719%2038.2606%2025.1026%2038.2606%2025.1026C38.93%2026.7974%2038.5089%2028.0488%2038.3811%2028.3587C39.1698%2029.2203%2039.647%2030.3179%2039.647%2031.6612C39.647%2036.3868%2036.7696%2037.4274%2034.0307%2037.732C34.4718%2038.1138%2034.8649%2038.8626%2034.8649%2040.0105C34.8649%2041.6567%2034.8506%2042.9817%2034.8506%2043.387C34.8506%2043.7144%2035.072%2044.098%2035.6956%2043.9772C40.5801%2042.3485%2044.1%2037.7382%2044.1%2032.3038C44.1%2025.5085%2038.593%2020%2031.8%2020Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M24.1128%2037.5238C24.086%2037.5851%2023.9904%2037.6034%2023.9036%2037.5614C23.815%2037.5212%2023.7652%2037.4375%2023.7939%2037.3759C23.8202%2037.3128%2023.9158%2037.2952%2024.0042%2037.3376C24.093%2037.3778%2024.1436%2037.4622%2024.1128%2037.5238ZM24.7135%2038.0655C24.6553%2038.1201%2024.5414%2038.0948%2024.4641%2038.0085C24.3843%2037.9224%2024.3693%2037.8074%2024.4284%2037.752C24.4885%2037.6975%2024.5989%2037.7229%2024.679%2037.8091C24.7588%2037.8961%2024.7744%2038.0103%2024.7135%2038.0655ZM25.1256%2038.7587C25.0507%2038.8113%2024.9283%2038.762%2024.8528%2038.6522C24.778%2038.5425%2024.778%2038.4108%2024.8544%2038.3581C24.9303%2038.3053%2025.0507%2038.3528%2025.1274%2038.4617C25.2021%2038.5733%2025.2022%2038.7049%2025.1256%2038.7587ZM25.8225%2039.5615C25.7555%2039.6361%2025.613%2039.6161%2025.5086%2039.5143C25.4019%2039.4148%2025.3722%2039.2735%2025.4393%2039.1989C25.507%2039.1241%2025.6504%2039.1452%2025.7555%2039.2461C25.8616%2039.3455%2025.8938%2039.4878%2025.8225%2039.5615ZM26.7231%2039.8326C26.6937%2039.9292%2026.5564%2039.9732%2026.4181%2039.9321C26.28%2039.8898%2026.1896%2039.7766%2026.2174%2039.6789C26.2462%2039.5816%2026.3841%2039.5358%2026.5234%2039.5797C26.6614%2039.6219%2026.7519%2039.7342%2026.7231%2039.8326ZM27.7483%2039.9475C27.7517%2040.0494%2027.6344%2040.1338%2027.4892%2040.1356C27.3432%2040.1388%2027.2251%2040.0564%2027.2235%2039.9563C27.2235%2039.8535%2027.3382%2039.7699%2027.4841%2039.7675C27.6293%2039.7646%2027.7483%2039.8464%2027.7483%2039.9475ZM28.7552%2039.9085C28.7727%2040.0078%2028.6717%2040.1099%2028.5276%2040.137C28.3858%2040.1631%2028.2546%2040.1018%2028.2365%2040.0034C28.2189%2039.9015%2028.3218%2039.7996%2028.4632%2039.7732C28.6077%2039.7478%2028.7369%2039.8075%2028.7552%2039.9085Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2130_1413%22%20x1%3D%2254.5%22%20y1%3D%220.499999%22%20x2%3D%2224.5%22%20y2%3D%2260%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23999999%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2130_1413%22%3E%0A%3Crect%20width%3D%2225.5%22%20height%3D%2224%22%20fill%3D%22white%22%20transform%3D%22translate(19.5%2020)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "is-body-s",
                    "is-community-cta"
                  )}
                  tag="div"
                >
                  {"GitHub"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "community_cta-grid-item")}
                id={_utils.cx(
                  _styles,
                  "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc7d0-cfccc794"
                )}
                button={false}
                block="inline"
                options={{
                  href: "https://www.youtube.com/@visual-layer",
                  target: "_blank",
                }}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "community_cta-icon")}
                  value="%3Csvg%20width%3D%2265%22%20height%3D%2264%22%20viewBox%3D%220%200%2065%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2232.5%22%20cy%3D%2232%22%20r%3D%2232%22%20fill%3D%22url(%23paint0_linear_2130_1429)%22%20fill-opacity%3D%220.1%22%2F%3E%0A%3Cpath%20d%3D%22M44.0448%2026.5714C43.775%2025.5598%2042.8983%2024.7506%2041.8868%2024.4808C39.5938%2023.8739%2025.769%2023.8064%2023.1389%2024.4808C22.1273%2024.7506%2021.2506%2025.5598%2020.9808%2026.5714C20.3739%2029.1341%2020.3064%2035.6756%2020.9808%2038.3057C21.2506%2039.3173%2022.1273%2040.1266%2023.1389%2040.3963C25.5666%2041.0707%2039.3915%2041.0707%2041.8868%2040.3963C42.8983%2040.1266%2043.775%2039.3173%2044.0448%2038.3057C44.6517%2035.8779%2044.6517%2029.0666%2044.0448%2026.5714ZM30.085%2036.0128V28.8643L36.3568%2032.4386L30.085%2036.0128Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2130_1429%22%20x1%3D%2254.5%22%20y1%3D%220.499999%22%20x2%3D%2224.5%22%20y2%3D%2260%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23999999%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "is-body-s",
                    "is-community-cta"
                  )}
                  tag="div"
                >
                  {"YouTube"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "community_cta-grid-item")}
                id={_utils.cx(
                  _styles,
                  "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc7d4-cfccc794"
                )}
                button={false}
                block="inline"
                options={{
                  href: "https://docs.visual-layer.com/docs/introduction",
                  target: "_blank",
                }}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "community_cta-icon")}
                  value="%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2232%22%20cy%3D%2232%22%20r%3D%2232%22%20fill%3D%22url(%23paint0_linear_2130_1435)%22%20fill-opacity%3D%220.1%22%2F%3E%0A%3Cpath%20d%3D%22M21.5%2038.6667C21.5%2039.5507%2021.8512%2040.3986%2022.4763%2041.0237C23.1014%2041.6488%2023.9493%2042%2024.8333%2042H38.1667C39.0507%2042%2039.8986%2041.6488%2040.5237%2041.0237C41.1488%2040.3986%2041.5%2039.5507%2041.5%2038.6667V32H21.5V38.6667Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M39.5%2025.2H31.1944L29.5944%2022H23.5V30H39.5V25.2Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2130_1435%22%20x1%3D%2254%22%20y1%3D%220.499999%22%20x2%3D%2224%22%20y2%3D%2260%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23999999%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "is-body-s",
                    "is-community-cta"
                  )}
                  tag="div"
                >
                  {"View Docs"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "community_numbers-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "community_numbers-grid-item")}
              id={_utils.cx(
                _styles,
                "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc7d9-cfccc794"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "community_numbers-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2142_273)%22%3E%0A%3Cpath%20d%3D%22M13%2025.657L7.348%2028.628L9%2018.993L2%2012.17L11.674%2010.764L16%202L20.326%2010.764L30%2012.17L28%2014.119%22%20stroke%3D%22%230397D8%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22square%22%2F%3E%0A%3Crect%20x%3D%2213%22%20y%3D%2224.1318%22%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%230397D8%22%2F%3E%0A%3Cpath%20d%3D%22M24%2031C27.866%2031%2031%2027.866%2031%2024C31%2020.134%2027.866%2017%2024%2017C20.134%2017%2017%2020.134%2017%2024C17%2027.866%2020.134%2031%2024%2031Z%22%20stroke%3D%22%230397D8%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22square%22%2F%3E%0A%3Cpath%20d%3D%22M21%2024H27%22%20stroke%3D%22%230397D8%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22square%22%2F%3E%0A%3Cpath%20d%3D%22M24%2027V21%22%20stroke%3D%22%230397D8%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22square%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2142_273%22%3E%0A%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "community_numbers-info")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "community_numbers-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "is-h2", "is-count")}
                    tag="div"
                  >
                    {"1.6"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "is-h2", "is-count")}
                    tag="div"
                  >
                    {"K+"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "is-white-opacity-0-6")}
                  tag="div"
                >
                  {"GitHub stars"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "community_numbers-grid-item")}
              id={_utils.cx(
                _styles,
                "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc7e3-cfccc794"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "community_numbers-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%202H24L30%208V27C30%2027.7956%2029.6839%2028.5587%2029.1213%2029.1213C28.5587%2029.6839%2027.7956%2030%2027%2030H5C4.20435%2030%203.44129%2029.6839%202.87868%2029.1213C2.31607%2028.5587%202%2027.7956%202%2027V8L8%202Z%22%20stroke%3D%22%230397D8%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22square%22%2F%3E%0A%3Cpath%20d%3D%22M16%2025V13%22%20stroke%3D%22%230397D8%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M11%2020L16%2025L21%2020%22%20stroke%3D%22%230397D8%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22square%22%2F%3E%0A%3Cpath%20d%3D%22M2%208H30%22%20stroke%3D%22%230397D8%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "community_numbers-info")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "community_numbers-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "is-h2", "is-count")}
                    tag="div"
                  >
                    {"500"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "is-h2", "is-count")}
                    tag="div"
                  >
                    {"K+"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "is-white-opacity-0-6")}
                  tag="div"
                >
                  {"Downloads"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "community_numbers-grid-item")}
              id={_utils.cx(
                _styles,
                "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc7ed-cfccc794"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "community_numbers-icon")}
                value="%3Csvg%20width%3D%2241%22%20height%3D%2240%22%20viewBox%3D%220%200%2041%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.45345%2034.5465L18.4477%2023.5523C19.1077%2022.8923%2019.4377%2022.5622%2019.8183%2022.4386C20.153%2022.3298%2020.5136%2022.3298%2020.8483%2022.4386C21.2289%2022.5622%2021.5589%2022.8923%2022.2189%2023.5523L33.1398%2034.4732M23.6666%2025L28.4477%2020.219C29.1077%2019.5589%2029.4377%2019.2289%2029.8183%2019.1053C30.153%2018.9965%2030.5136%2018.9965%2030.8483%2019.1053C31.2289%2019.2289%2031.5589%2019.5589%2032.2189%2020.2189L37%2025M17%2015C17%2016.8409%2015.5076%2018.3333%2013.6666%2018.3333C11.8257%2018.3333%2010.3333%2016.8409%2010.3333%2015C10.3333%2013.1591%2011.8257%2011.6667%2013.6666%2011.6667C15.5076%2011.6667%2017%2013.1591%2017%2015ZM11.6666%2035H29C31.8002%2035%2033.2004%2035%2034.2699%2034.455C35.2107%2033.9757%2035.9756%2033.2108%2036.455%2032.27C37%2031.2004%2037%2029.8003%2037%2027V13C37%2010.1997%2037%208.79961%2036.455%207.73005C35.9756%206.78924%2035.2107%206.02433%2034.2699%205.54497C33.2004%205%2031.8002%205%2029%205H11.6666C8.86636%205%207.46623%205%206.39667%205.54497C5.45586%206.02433%204.69096%206.78924%204.21159%207.73005C3.66663%208.79961%203.66663%2010.1997%203.66663%2013V27C3.66663%2029.8003%203.66663%2031.2004%204.21159%2032.27C4.69096%2033.2108%205.45586%2033.9757%206.39667%2034.455C7.46623%2035%208.86636%2035%2011.6666%2035Z%22%20stroke%3D%22%230397D8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "community_numbers-info")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "community_numbers-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "is-h2", "is-count")}
                    tag="div"
                  >
                    {"50"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "is-h2", "is-count")}
                    tag="div"
                  >
                    {"B+"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "is-white-opacity-0-6")}
                  tag="div"
                >
                  {"Images proccesed"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "community_cta-block")}
            id={_utils.cx(
              _styles,
              "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc7f7-cfccc794"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "header-block", "is-community-cta")}
              id={_utils.cx(
                _styles,
                "w-node-_847a49f7-0049-a764-ebce-4ff5cfccc7f8-cfccc794"
              )}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "is-h2")}
                tag="h2"
              >
                {"Try fast"}
                <_Builtin.Span
                  className={_utils.cx(_styles, "is-txt-blue", "is-light")}
                >
                  {"dup"}
                </_Builtin.Span>
                {" locally and scale with Visual Layer"}
              </_Builtin.Heading>
              <_Builtin.Link
                className={_utils.cx(_styles, "community_numbers-link")}
                button={false}
                block="inline"
                options={{
                  href: "https://github.com/visual-layer/fastdup",
                  target: "_blank",
                }}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "community_icon")}
                  value="%3Csvg%20width%3D%2222%22%20height%3D%2220%22%20viewbox%3D%220%200%2022%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20opacity%3D%220.6%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.25%200C4.58983%200%200%204.59041%200%2010.2531C0%2014.7833%202.93694%2018.6266%207.00963%2019.9824C7.52187%2020.0773%207.70998%2019.76%207.70998%2019.4891C7.70998%2019.2447%207.70041%2018.4369%207.69607%2017.5802C4.84442%2018.2004%204.24271%2016.3704%204.24271%2016.3704C3.77645%2015.1853%203.10464%2014.8703%203.10464%2014.8703C2.17469%2014.2339%203.17473%2014.2469%203.17473%2014.2469C4.20404%2014.3193%204.74602%2015.3035%204.74602%2015.3035C5.66021%2016.871%207.14388%2016.4178%207.72879%2016.1559C7.82075%2015.4931%208.08644%2015.0409%208.37954%2014.7849C6.10292%2014.5255%203.70956%2013.6464%203.70956%209.71767C3.70956%208.59831%204.10998%207.6836%204.76572%206.96559C4.65928%206.7073%204.30847%205.6645%204.865%204.25219C4.865%204.25219%205.72573%203.97662%207.68449%205.3032C8.50205%205.07595%209.37894%204.96209%2010.25%204.95823C11.1211%204.96209%2011.9987%205.07595%2012.8178%205.3032C14.7743%203.97662%2015.6338%204.25219%2015.6338%204.25219C16.1917%205.6645%2015.8407%206.7073%2015.7343%206.96559C16.3915%207.6836%2016.7891%208.59823%2016.7891%209.71767C16.7891%2013.6557%2014.3913%2014.5229%2012.1089%2014.7767C12.4765%2015.0948%2012.8041%2015.7189%2012.8041%2016.6754C12.8041%2018.0472%2012.7922%2019.1514%2012.7922%2019.4891C12.7922%2019.762%2012.9767%2020.0817%2013.4963%2019.981C17.5668%2018.6237%2020.5%2014.7818%2020.5%2010.2531C20.5%204.59041%2015.9108%200%2010.25%200Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M3.84397%2014.6031C3.82162%2014.6542%203.74197%2014.6695%203.66958%2014.6345C3.59576%2014.601%203.55426%2014.5313%203.5782%2014.48C3.60015%2014.4274%203.6798%2014.4127%203.75346%2014.448C3.82745%2014.4815%203.86959%2014.5518%203.84397%2014.6031ZM4.34454%2015.0546C4.29602%2015.1001%204.20112%2015.079%204.13672%2015.0071C4.07015%2014.9354%204.0577%2014.8395%204.10695%2014.7933C4.15699%2014.7479%204.24901%2014.7691%204.31573%2014.8409C4.38229%2014.9134%204.3953%2015.0086%204.34454%2015.0546ZM4.68797%2015.6322C4.62556%2015.676%204.52356%2015.635%204.46059%2015.5435C4.39826%2015.4521%204.39826%2015.3424%204.46194%2015.2984C4.52515%2015.2544%204.62556%2015.294%204.68941%2015.3847C4.75166%2015.4777%204.75174%2015.5874%204.68797%2015.6322ZM5.26867%2016.3013C5.21288%2016.3634%205.09413%2016.3468%205.00713%2016.2619C4.91822%2016.179%204.8934%2016.0613%204.94935%2015.9991C5.00577%2015.9368%205.12525%2015.9543%205.21288%2016.0384C5.30123%2016.1212%205.32813%2016.2398%205.26867%2016.3013ZM6.01921%2016.5272C5.99471%2016.6077%205.88026%2016.6443%205.76502%2016.6101C5.64993%2016.5749%205.57459%2016.4805%205.59781%2016.3991C5.62176%2016.318%205.73668%2016.2798%205.85281%2016.3165C5.96773%2016.3515%206.04316%2016.4452%206.01921%2016.5272ZM6.87351%2016.6229C6.87638%2016.7078%206.77861%2016.7782%206.65762%2016.7797C6.53591%2016.7824%206.4375%2016.7137%206.43622%2016.6303C6.43622%2016.5446%206.53176%2016.4749%206.65339%2016.4729C6.77438%2016.4705%206.87351%2016.5386%206.87351%2016.6229ZM7.71264%2016.5904C7.72716%2016.6732%207.64304%2016.7582%207.52293%2016.7808C7.40481%2016.8026%207.29547%2016.7515%207.28038%2016.6695C7.2657%2016.5846%207.35141%2016.4997%207.4693%2016.4776C7.58965%2016.4565%207.69731%2016.5063%207.71264%2016.5904Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "is-body-s",
                    "is-white-opacity-0-6"
                  )}
                  tag="div"
                >
                  {"visual-layer/fastdup"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "community_ctas-wrapper")}
              tag="div"
            >
              <ButtonPrimaryLarge
                buttonText="Try fastdup now"
                buttonLink={{
                  href: "https://github.com/visual-layer/fastdup",
                  target: "_blank",
                }}
                greyBackground="true"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "button-primary-large")}
                button={false}
                btn-gradient-bg="true"
                posthog-ab="startfree"
                block="inline"
                options={{
                  href: "https://app.visual-layer.com/free-trial",
                  target: "_blank",
                }}
              >
                <_Builtin.Paragraph className={_utils.cx(_styles, "")}>
                  {"Talk with us and start Visual Layer for free"}
                </_Builtin.Paragraph>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
