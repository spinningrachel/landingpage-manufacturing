"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { NavLink } from "./NavLink";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".nav_banner-close","originalId":"33460b6f-9dbd-1fd2-6ad6-d8d0bfbb8b9a","appliesTo":"CLASS"},"targets":[{"selector":".nav_banner-close","originalId":"33460b6f-9dbd-1fd2-6ad6-d8d0bfbb8b9a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718006522662},"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".nav_lottie","originalId":"e32e1739-be71-733b-24b6-df326950f8d4","appliesTo":"CLASS"},"targets":[{"selector":".nav_lottie","originalId":"e32e1739-be71-733b-24b6-df326950f8d4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710930725947},"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".nav_lottie","originalId":"e32e1739-be71-733b-24b6-df326950f8d4","appliesTo":"CLASS"},"targets":[{"selector":".nav_lottie","originalId":"e32e1739-be71-733b-24b6-df326950f8d4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710930725947},"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"33460b6f-9dbd-1fd2-6ad6-d8d0bfbb8bae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"33460b6f-9dbd-1fd2-6ad6-d8d0bfbb8bae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718655028696},"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"33460b6f-9dbd-1fd2-6ad6-d8d0bfbb8bae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"33460b6f-9dbd-1fd2-6ad6-d8d0bfbb8bae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718655334939},"e-35":{"id":"e-35","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"66603dc4a8308da80ba98fa3|62e2dbbd-245c-92b5-6554-69ed251a8786","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66603dc4a8308da80ba98fa3|62e2dbbd-245c-92b5-6554-69ed251a8786","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718721808489}},"actionLists":{"a-3":{"id":"a-3","title":"[Nav banner] - close","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".nav_banner.is-gradient","selectorGuids":["7e4d2b6f-dc49-11c5-6a62-1bbba0080e03","7773dcc9-0145-adff-b382-2ad6c9988bbb"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718006539105},"a-6":{"id":"a-6","title":"[Mobile menu] - open 3","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav_menu-list","selectorGuids":["27dc2cd4-7b72-6f1f-e75a-f60575b3c4f0"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"svh","locked":false}},{"id":"a-6-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav_menu-list","selectorGuids":["27dc2cd4-7b72-6f1f-e75a-f60575b3c4f0"]},"value":"none"}},{"id":"a-6-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e32e1739-be71-733b-24b6-df326950f8d4"},"value":0}}]},{"actionItems":[{"id":"a-6-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuart","duration":800,"target":{"selector":".nav_menu-list","selectorGuids":["27dc2cd4-7b72-6f1f-e75a-f60575b3c4f0"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"dvh","locked":false}},{"id":"a-6-n-5","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":1500,"target":{"useEventTarget":true,"id":"e32e1739-be71-733b-24b6-df326950f8d4"},"value":40}},{"id":"a-6-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav_menu-list","selectorGuids":["27dc2cd4-7b72-6f1f-e75a-f60575b3c4f0"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1709106368441},"a-7":{"id":"a-7","title":"[Mobile menu] - close 3","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuart","duration":800,"target":{"selector":".nav_menu-list","selectorGuids":["27dc2cd4-7b72-6f1f-e75a-f60575b3c4f0"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"dvh","locked":false}},{"id":"a-7-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":800,"target":{"selector":".nav_lottie","selectorGuids":["7ff7eb74-b97e-d050-8fb5-12a4ee085348"]},"value":0}}]},{"actionItems":[{"id":"a-7-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav_menu-list","selectorGuids":["27dc2cd4-7b72-6f1f-e75a-f60575b3c4f0"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1709106368441},"a-8":{"id":"a-8","title":"Popup GAD [Open]","actionItemGroups":[{"actionItems":[{"id":"a-8-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".popup_wrapper","selectorGuids":["484b767d-9012-3036-a92e-94a417575649"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".popop_component","selectorGuids":["547546cd-5cc6-57e1-f189-3b515b448712"]},"value":"flex"}}]},{"actionItems":[{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":100,"target":{"selector":".popup_wrapper","selectorGuids":["484b767d-9012-3036-a92e-94a417575649"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718655033696}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav({
  as: _Component = _Builtin.Block,
  navLogoVisibility = true,
  platformLinkVisibility = true,
  pricingLinkVisibility = true,
  docsLinkVisibility = false,
  blogLinkVisibility = false,
  communityLinkVisibility = true,
  signInLinkVisibility = true,
  getADemoVisibility = true,
  startForFreeVisibility = true,
  resourcesVisibility = true,
  auLinkVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "nav")} tag="nav">
      <_Builtin.Block
        className={_utils.cx(_styles, "nav_banner", "is-gradient")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container", "is-nav")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav_banner-layout")}
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "")} tag="div">
              <_Builtin.Block className={_utils.cx(_styles, "")} tag="div">
                {"Meet us at MLD1 2025! Septrmber 17, Ramat Gan, Israel"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "nav_banner-close")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_140_959)%22%3E%0A%3Cg%20opacity%3D%220.5%22%3E%0A%3Cpath%20d%3D%22M1.5%201.5L10.5%2010.5%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M10.5%201.5L1.5%2010.5%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_140_959%22%3E%0A%3Crect%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "nav_block")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container", "is-nav")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "is-display-hidden")}
            value="%3Cstyle%3E%0A%2F*%20%40media%20only%20screen%20and%20(min-width%3A%201040px)%20and%20(max-width%3A%201300px)%20%20%7B%0A.nav_menu-list%20%7B%0Ajustify-content%3A%20start%3B%0Apadding-left%3A12rem%3B%0A%7D%0A%7D*%2F%0A%40media%20only%20screen%20and%20(min-width%3A%20991px)%20and%20(max-width%3A%201039px)%20%20%7B%0A%2F*%20.nav_menu-list%20%7B%0Ajustify-content%3A%20start%3B%0Apadding-left%3A12rem%3B%0A%7D%20*%2F%0A.nav_link%20%7B%0Afont-size%3A0.875rem%3B%0A%7D%0A.nav_dropdown-toggle%20%7B%0Afont-size%3A0.875rem%3B%0A%7D%0A%7D%0A%3C%2Fstyle%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "nav_layout")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "nav_logo-link")}
              button={false}
              aria-label="back to home"
              block="inline"
              options={{
                href: "#",
              }}
            >
              {navLogoVisibility ? (
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "nav_logo")}
                  value="%3Csvg%20width%3D%22159%22%20height%3D%2232%22%20viewBox%3D%220%200%20159%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.94041%201.96241L8.29612%20-0.000244141H0L3.66604%2010.3353L8.94041%201.96241Z%22%20fill%3D%22%23FF4500%22%2F%3E%0A%3Cpath%20d%3D%22M32.4543%20-0.000244141H24.2035L20.791%2010.3353L30.1073%206.61693L32.4543%20-0.000244141Z%22%20fill%3D%22%23A4C217%22%2F%3E%0A%3Cpath%20d%3D%22M11.7013%2010.3353L8.93851%201.9624L5.27881%207.77176L11.7013%2010.3353Z%22%20fill%3D%22%23D6493E%22%2F%3E%0A%3Cpath%20d%3D%22M8.14122%2022.951L16.2282%2024.1594L11.7036%2010.335L6.2052%2017.4934L8.14122%2022.951Z%22%20fill%3D%22%23A63B94%22%2F%3E%0A%3Cpath%20d%3D%22M16.2272%2024.1594L24.3129%2022.9545L26.3611%2017.1803L20.7917%2010.335L16.2272%2024.1594Z%22%20fill%3D%22%232DB686%22%2F%3E%0A%3Cpath%20d%3D%22M16.2263%2024.1599L21.1039%2032.0001H11.3488L16.2263%2024.1599Z%22%20fill%3D%22%230197D8%22%2F%3E%0A%3Cpath%20d%3D%22M16.2276%2024.1596L11.35%2031.9997L8.14062%2022.9512L16.2276%2024.1596Z%22%20fill%3D%22%23336C9B%22%2F%3E%0A%3Cpath%20d%3D%22M21.1048%2031.9994L24.3129%2022.9543L16.2272%2024.1593L21.1048%2031.9994Z%22%20fill%3D%22%2326BF79%22%2F%3E%0A%3Cpath%20d%3D%22M6.20464%2017.4937L11.7031%2010.3352L2.34021%206.59814L6.20464%2017.4937Z%22%20fill%3D%22%23CC4E84%22%2F%3E%0A%3Cpath%20d%3D%22M26.3604%2017.1806L20.791%2010.3353L30.1073%206.61694L26.3604%2017.1806Z%22%20fill%3D%22%231BC07D%22%2F%3E%0A%3Cpath%20d%3D%22M43.5043%208.94775H43.5801C44.0235%208.94775%2044.4189%209.22617%2044.5676%209.64414L48.3804%2020.3316C48.447%2020.5172%2048.7091%2020.5172%2048.7757%2020.3316L52.5793%209.64485C52.7281%209.22688%2053.1234%208.94775%2053.5669%208.94775H53.642C54.3674%208.94775%2054.8733%209.66682%2054.6288%2010.3498L50.1678%2022.8119C50.0183%2023.2284%2049.6237%2023.5068%2049.181%2023.5068H47.9646C47.5218%2023.5068%2047.1265%2023.2284%2046.9777%2022.8119L42.5167%2010.3498C42.2723%209.66682%2042.7781%208.94775%2043.5036%208.94775H43.5043Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M56.6%2010.9553C56.3407%2010.696%2056.2111%2010.3821%2056.2111%2010.013C56.2111%209.64394%2056.3407%209.33081%2056.6%209.07082C56.8593%208.81153%2057.1731%208.68188%2057.5422%208.68188C57.9113%208.68188%2058.2244%208.81153%2058.4844%209.07082C58.7437%209.3301%2058.8734%209.64394%2058.8734%2010.013C58.8734%2010.3821%2058.7437%2010.696%2058.4844%2010.9553C58.2251%2011.2145%2057.9113%2011.3442%2057.5422%2011.3442C57.1731%2011.3442%2056.8593%2011.2145%2056.6%2010.9553ZM56.4569%2022.4588V13.9484C56.4569%2013.3696%2056.9266%2012.8999%2057.5054%2012.8999H57.5791C58.1578%2012.8999%2058.6275%2013.3696%2058.6275%2013.9484V22.4588C58.6275%2023.0376%2058.1578%2023.5073%2057.5791%2023.5073H57.5054C56.9266%2023.5073%2056.4569%2023.0376%2056.4569%2022.4588Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M60.6672%2016.1356V15.8799C60.6672%2015.0538%2060.9655%2014.3511%2061.5634%2013.7708C62.1606%2013.1906%2062.879%2012.9009%2063.7185%2012.9009H68.895C69.4738%2012.9009%2069.9435%2013.3706%2069.9435%2013.9494V14.0131C69.9435%2014.5919%2069.4738%2015.0616%2068.895%2015.0616H63.7185C63.4726%2015.0616%2063.2629%2015.1417%2063.0887%2015.3025C62.9144%2015.4626%2062.8273%2015.656%2062.8273%2015.8813V16.137C62.8273%2016.3694%2062.9144%2016.567%2063.0887%2016.7307C63.2629%2016.8943%2063.4726%2016.9765%2063.7185%2016.9765H67.5887C68.4282%2016.9765%2069.1451%2017.2684%2069.7388%2017.8521C70.3324%2018.4359%2070.6293%2019.1408%2070.6293%2019.9661V20.5187C70.6293%2021.3447%2070.3324%2022.0496%2069.7388%2022.6327C69.1451%2023.2164%2068.4282%2023.5083%2067.5887%2023.5083H62.1975C61.6187%2023.5083%2061.149%2023.0386%2061.149%2022.4598V22.3961C61.149%2021.8173%2061.6187%2021.3476%2062.1975%2021.3476H67.5887C67.8345%2021.3476%2068.0442%2021.2654%2068.2185%2021.1017C68.3927%2020.9381%2068.4799%2020.7397%2068.4799%2020.5081V19.9753C68.4799%2019.7437%2068.3927%2019.5439%2068.2185%2019.3767C68.0442%2019.2095%2067.8345%2019.1259%2067.5887%2019.1259H63.7185C62.879%2019.1259%2062.1606%2018.834%2061.5634%2018.2503C60.9662%2017.6665%2060.6672%2016.9616%2060.6672%2016.1363V16.1356Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M72.668%2019.6785V13.9494C72.668%2013.3706%2073.1377%2012.9009%2073.7165%2012.9009H73.7802C74.359%2012.9009%2074.8287%2013.3706%2074.8287%2013.9494V19.648C74.8287%2020.1255%2074.9909%2020.5322%2075.3147%2020.8665C75.6392%2021.2009%2076.033%2021.3681%2076.4971%2021.3681H80.0449C80.1604%2021.3681%2080.2546%2021.2739%2080.2546%2021.1584V13.9494C80.2546%2013.3706%2080.7243%2012.9009%2081.3031%2012.9009H81.3669C81.9457%2012.9009%2082.4153%2013.3706%2082.4153%2013.9494V21.3582C82.4153%2021.9519%2082.2021%2022.4591%2081.7756%2022.8785C81.3492%2023.2986%2080.8355%2023.5083%2080.2348%2023.5083H76.4978C75.4465%2023.5083%2074.5453%2023.1328%2073.7951%2022.3819C73.0442%2021.6309%2072.6687%2020.7298%2072.6687%2019.6792L72.668%2019.6785Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M84.454%2019.6785V16.7094C84.454%2015.6581%2084.828%2014.7605%2085.5754%2014.0167C86.3228%2013.2728%2087.2254%2012.9009%2088.2838%2012.9009H93.1529C93.7317%2012.9009%2094.2014%2013.3706%2094.2014%2013.9494V22.4598C94.2014%2023.0386%2093.7317%2023.5083%2093.1529%2023.5083H93.0891C92.5103%2023.5083%2092.0406%2023.0386%2092.0406%2022.4598V15.2713C92.0406%2015.1558%2091.9464%2015.0616%2091.8309%2015.0616H88.2831C87.8191%2015.0616%2087.4245%2015.2238%2087.1007%2015.5476C86.7769%2015.8714%2086.6147%2016.2659%2086.6147%2016.73V19.6579C86.6147%2020.122%2086.7784%2020.5194%2087.1064%2020.851C87.4337%2021.1818%2087.8261%2021.3476%2088.2838%2021.3476H89.7644C90.3432%2021.3476%2090.8129%2021.8173%2090.8129%2022.396V22.4598C90.8129%2023.0386%2090.3432%2023.5083%2089.7644%2023.5083H88.2838C87.2325%2023.5083%2086.3313%2023.1328%2085.5811%2022.3819C84.8302%2021.6309%2084.4547%2020.7298%2084.4547%2019.6792L84.454%2019.6785Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M96.3456%2022.4583V9.99623C96.3456%209.41744%2096.8153%208.94775%2097.3941%208.94775H97.4578C98.0366%208.94775%2098.5063%209.41744%2098.5063%209.99623V22.4583C98.5063%2023.0371%2098.0366%2023.5068%2097.4578%2023.5068H97.3941C96.8153%2023.5068%2096.3456%2023.0371%2096.3456%2022.4583Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M106.146%2019.4322V9.99648C106.146%209.41769%20106.615%208.948%20107.194%208.948H107.247C107.826%208.948%20108.296%209.41769%20108.296%209.99648V19.4322C108.296%2019.9649%20108.483%2020.4183%20108.859%2020.7938C109.234%2021.1692%20109.685%2021.357%20110.211%2021.357H116.38C116.959%2021.357%20117.429%2021.8267%20117.429%2022.4055V22.4586C117.429%2023.0374%20116.959%2023.5071%20116.38%2023.5071H110.211C109.091%2023.5071%20108.134%2023.1096%20107.339%2022.3141C106.544%2021.5192%20106.146%2020.5579%20106.146%2019.4322Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M118.649%2019.6787V16.7097C118.649%2015.6584%20119.023%2014.7608%20119.77%2014.0169C120.518%2013.2731%20121.42%2012.9011%20122.479%2012.9011H127.348C127.927%2012.9011%20128.396%2013.3708%20128.396%2013.9496V22.4601C128.396%2023.0388%20127.927%2023.5085%20127.348%2023.5085H127.284C126.705%2023.5085%20126.236%2023.0388%20126.236%2022.4601V15.2715C126.236%2015.1561%20126.141%2015.0619%20126.026%2015.0619H122.478C122.014%2015.0619%20121.619%2015.2241%20121.296%2015.5478C120.971%2015.8723%20120.81%2016.2662%20120.81%2016.7302V19.6582C120.81%2020.1222%20120.973%2020.5196%20121.301%2020.8512C121.629%2021.182%20122.021%2021.3478%20122.479%2021.3478H123.959C124.538%2021.3478%20125.008%2021.8175%20125.008%2022.3963V22.4601C125.008%2023.0388%20124.538%2023.5085%20123.959%2023.5085H122.479C121.427%2023.5085%20120.526%2023.1331%20119.776%2022.3821C119.025%2021.6312%20118.65%2020.7301%20118.65%2019.6794L118.649%2019.6787Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M131.239%2012.9009H131.285C131.722%2012.9009%20132.113%2013.1722%20132.267%2013.5817L134.572%2019.7337C134.64%2019.9144%20134.895%2019.9158%20134.965%2019.7352L137.325%2013.5746C137.48%2013.1687%20137.869%2012.9009%20138.304%2012.9009H138.44C139.176%2012.9009%20139.683%2013.6398%20139.418%2014.3263L134.596%2026.8294C134.44%2027.234%20134.051%2027.5003%20133.617%2027.5003H133.491C132.757%2027.5003%20132.251%2026.7657%20132.511%2026.0799L133.62%2023.1597L130.259%2014.322C129.998%2013.6355%20130.505%2012.9009%20131.238%2012.9009H131.239Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M141.292%2020.518V15.0914C141.292%2014.4842%20141.514%2013.9671%20141.957%2013.5406C142.401%2013.1141%20142.933%2012.9009%20143.555%2012.9009H147.977C148.824%2012.9009%20149.545%2013.2013%20150.143%2013.802C150.74%2014.4028%20151.039%2015.1296%20151.039%2015.9826V16.2794C151.039%2017.1189%20150.74%2017.8373%20150.143%2018.4345C149.546%2019.0317%20148.824%2019.3306%20147.977%2019.3306H145.729C145.15%2019.3306%20144.68%2018.861%20144.68%2018.2822V18.229C144.68%2017.6502%20145.15%2017.1805%20145.729%2017.1805H147.998C148.244%2017.1805%20148.453%2017.092%20148.628%2016.9142C148.802%2016.7371%20148.889%2016.5217%20148.889%2016.2695V15.9826C148.889%2015.7304%20148.802%2015.5136%20148.628%2015.3322C148.453%2015.1516%20148.244%2015.0609%20147.998%2015.0609H144.5C143.922%2015.0609%20143.452%2015.5306%20143.452%2016.1094V20.5081C143.452%2020.7404%20143.531%2020.9381%20143.687%2021.1017C143.844%2021.2654%20144.035%2021.3476%20144.26%2021.3476H149.242C149.821%2021.3476%20150.29%2021.8173%20150.29%2022.396V22.4598C150.29%2023.0386%20149.821%2023.5083%20149.242%2023.5083H144.26C143.441%2023.5083%20142.741%2023.2164%20142.161%2022.6327C141.581%2022.0489%20141.291%2021.344%20141.291%2020.5187L141.292%2020.518Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M154.131%2023.5076C153.552%2023.5076%20153.083%2023.0379%20153.083%2022.4591V15.8699C153.083%2015.051%20153.381%2014.351%20153.979%2013.7708C154.576%2013.1906%20155.294%2012.9009%20156.134%2012.9009H157.451C158.03%2012.9009%20158.499%2013.3706%20158.499%2013.9494V14.0025C158.499%2014.5813%20158.03%2015.051%20157.451%2015.051H156.134C155.888%2015.051%20155.678%2015.1346%20155.504%2015.3018C155.33%2015.469%20155.243%2015.6723%20155.243%2015.911V22.4598C155.243%2023.0386%20154.773%2023.5083%20154.194%2023.5083H154.131L154.131%2023.5076Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              ) : null}
            </_Builtin.Link>
            <_Builtin.List
              className={_utils.cx(_styles, "nav_menu-list")}
              tag="ul"
              unstyled={true}
            >
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "nav_menu-list-item",
                  "is-mobile-top"
                )}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav_logo-link")}
                  button={false}
                  aria-label="back to home"
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  {navLogoVisibility ? (
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "nav_logo")}
                      value="%3Csvg%20width%3D%22159%22%20height%3D%2232%22%20viewBox%3D%220%200%20159%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.94041%201.96241L8.29612%20-0.000244141H0L3.66604%2010.3353L8.94041%201.96241Z%22%20fill%3D%22%23FF4500%22%2F%3E%0A%3Cpath%20d%3D%22M32.4543%20-0.000244141H24.2035L20.791%2010.3353L30.1073%206.61693L32.4543%20-0.000244141Z%22%20fill%3D%22%23A4C217%22%2F%3E%0A%3Cpath%20d%3D%22M11.7013%2010.3353L8.93851%201.9624L5.27881%207.77176L11.7013%2010.3353Z%22%20fill%3D%22%23D6493E%22%2F%3E%0A%3Cpath%20d%3D%22M8.14122%2022.951L16.2282%2024.1594L11.7036%2010.335L6.2052%2017.4934L8.14122%2022.951Z%22%20fill%3D%22%23A63B94%22%2F%3E%0A%3Cpath%20d%3D%22M16.2272%2024.1594L24.3129%2022.9545L26.3611%2017.1803L20.7917%2010.335L16.2272%2024.1594Z%22%20fill%3D%22%232DB686%22%2F%3E%0A%3Cpath%20d%3D%22M16.2263%2024.1599L21.1039%2032.0001H11.3488L16.2263%2024.1599Z%22%20fill%3D%22%230197D8%22%2F%3E%0A%3Cpath%20d%3D%22M16.2276%2024.1596L11.35%2031.9997L8.14062%2022.9512L16.2276%2024.1596Z%22%20fill%3D%22%23336C9B%22%2F%3E%0A%3Cpath%20d%3D%22M21.1048%2031.9994L24.3129%2022.9543L16.2272%2024.1593L21.1048%2031.9994Z%22%20fill%3D%22%2326BF79%22%2F%3E%0A%3Cpath%20d%3D%22M6.20464%2017.4937L11.7031%2010.3352L2.34021%206.59814L6.20464%2017.4937Z%22%20fill%3D%22%23CC4E84%22%2F%3E%0A%3Cpath%20d%3D%22M26.3604%2017.1806L20.791%2010.3353L30.1073%206.61694L26.3604%2017.1806Z%22%20fill%3D%22%231BC07D%22%2F%3E%0A%3Cpath%20d%3D%22M43.5043%208.94775H43.5801C44.0235%208.94775%2044.4189%209.22617%2044.5676%209.64414L48.3804%2020.3316C48.447%2020.5172%2048.7091%2020.5172%2048.7757%2020.3316L52.5793%209.64485C52.7281%209.22688%2053.1234%208.94775%2053.5669%208.94775H53.642C54.3674%208.94775%2054.8733%209.66682%2054.6288%2010.3498L50.1678%2022.8119C50.0183%2023.2284%2049.6237%2023.5068%2049.181%2023.5068H47.9646C47.5218%2023.5068%2047.1265%2023.2284%2046.9777%2022.8119L42.5167%2010.3498C42.2723%209.66682%2042.7781%208.94775%2043.5036%208.94775H43.5043Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M56.6%2010.9553C56.3407%2010.696%2056.2111%2010.3821%2056.2111%2010.013C56.2111%209.64394%2056.3407%209.33081%2056.6%209.07082C56.8593%208.81153%2057.1731%208.68188%2057.5422%208.68188C57.9113%208.68188%2058.2244%208.81153%2058.4844%209.07082C58.7437%209.3301%2058.8734%209.64394%2058.8734%2010.013C58.8734%2010.3821%2058.7437%2010.696%2058.4844%2010.9553C58.2251%2011.2145%2057.9113%2011.3442%2057.5422%2011.3442C57.1731%2011.3442%2056.8593%2011.2145%2056.6%2010.9553ZM56.4569%2022.4588V13.9484C56.4569%2013.3696%2056.9266%2012.8999%2057.5054%2012.8999H57.5791C58.1578%2012.8999%2058.6275%2013.3696%2058.6275%2013.9484V22.4588C58.6275%2023.0376%2058.1578%2023.5073%2057.5791%2023.5073H57.5054C56.9266%2023.5073%2056.4569%2023.0376%2056.4569%2022.4588Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M60.6672%2016.1356V15.8799C60.6672%2015.0538%2060.9655%2014.3511%2061.5634%2013.7708C62.1606%2013.1906%2062.879%2012.9009%2063.7185%2012.9009H68.895C69.4738%2012.9009%2069.9435%2013.3706%2069.9435%2013.9494V14.0131C69.9435%2014.5919%2069.4738%2015.0616%2068.895%2015.0616H63.7185C63.4726%2015.0616%2063.2629%2015.1417%2063.0887%2015.3025C62.9144%2015.4626%2062.8273%2015.656%2062.8273%2015.8813V16.137C62.8273%2016.3694%2062.9144%2016.567%2063.0887%2016.7307C63.2629%2016.8943%2063.4726%2016.9765%2063.7185%2016.9765H67.5887C68.4282%2016.9765%2069.1451%2017.2684%2069.7388%2017.8521C70.3324%2018.4359%2070.6293%2019.1408%2070.6293%2019.9661V20.5187C70.6293%2021.3447%2070.3324%2022.0496%2069.7388%2022.6327C69.1451%2023.2164%2068.4282%2023.5083%2067.5887%2023.5083H62.1975C61.6187%2023.5083%2061.149%2023.0386%2061.149%2022.4598V22.3961C61.149%2021.8173%2061.6187%2021.3476%2062.1975%2021.3476H67.5887C67.8345%2021.3476%2068.0442%2021.2654%2068.2185%2021.1017C68.3927%2020.9381%2068.4799%2020.7397%2068.4799%2020.5081V19.9753C68.4799%2019.7437%2068.3927%2019.5439%2068.2185%2019.3767C68.0442%2019.2095%2067.8345%2019.1259%2067.5887%2019.1259H63.7185C62.879%2019.1259%2062.1606%2018.834%2061.5634%2018.2503C60.9662%2017.6665%2060.6672%2016.9616%2060.6672%2016.1363V16.1356Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M72.668%2019.6785V13.9494C72.668%2013.3706%2073.1377%2012.9009%2073.7165%2012.9009H73.7802C74.359%2012.9009%2074.8287%2013.3706%2074.8287%2013.9494V19.648C74.8287%2020.1255%2074.9909%2020.5322%2075.3147%2020.8665C75.6392%2021.2009%2076.033%2021.3681%2076.4971%2021.3681H80.0449C80.1604%2021.3681%2080.2546%2021.2739%2080.2546%2021.1584V13.9494C80.2546%2013.3706%2080.7243%2012.9009%2081.3031%2012.9009H81.3669C81.9457%2012.9009%2082.4153%2013.3706%2082.4153%2013.9494V21.3582C82.4153%2021.9519%2082.2021%2022.4591%2081.7756%2022.8785C81.3492%2023.2986%2080.8355%2023.5083%2080.2348%2023.5083H76.4978C75.4465%2023.5083%2074.5453%2023.1328%2073.7951%2022.3819C73.0442%2021.6309%2072.6687%2020.7298%2072.6687%2019.6792L72.668%2019.6785Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M84.454%2019.6785V16.7094C84.454%2015.6581%2084.828%2014.7605%2085.5754%2014.0167C86.3228%2013.2728%2087.2254%2012.9009%2088.2838%2012.9009H93.1529C93.7317%2012.9009%2094.2014%2013.3706%2094.2014%2013.9494V22.4598C94.2014%2023.0386%2093.7317%2023.5083%2093.1529%2023.5083H93.0891C92.5103%2023.5083%2092.0406%2023.0386%2092.0406%2022.4598V15.2713C92.0406%2015.1558%2091.9464%2015.0616%2091.8309%2015.0616H88.2831C87.8191%2015.0616%2087.4245%2015.2238%2087.1007%2015.5476C86.7769%2015.8714%2086.6147%2016.2659%2086.6147%2016.73V19.6579C86.6147%2020.122%2086.7784%2020.5194%2087.1064%2020.851C87.4337%2021.1818%2087.8261%2021.3476%2088.2838%2021.3476H89.7644C90.3432%2021.3476%2090.8129%2021.8173%2090.8129%2022.396V22.4598C90.8129%2023.0386%2090.3432%2023.5083%2089.7644%2023.5083H88.2838C87.2325%2023.5083%2086.3313%2023.1328%2085.5811%2022.3819C84.8302%2021.6309%2084.4547%2020.7298%2084.4547%2019.6792L84.454%2019.6785Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M96.3456%2022.4583V9.99623C96.3456%209.41744%2096.8153%208.94775%2097.3941%208.94775H97.4578C98.0366%208.94775%2098.5063%209.41744%2098.5063%209.99623V22.4583C98.5063%2023.0371%2098.0366%2023.5068%2097.4578%2023.5068H97.3941C96.8153%2023.5068%2096.3456%2023.0371%2096.3456%2022.4583Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M106.146%2019.4322V9.99648C106.146%209.41769%20106.615%208.948%20107.194%208.948H107.247C107.826%208.948%20108.296%209.41769%20108.296%209.99648V19.4322C108.296%2019.9649%20108.483%2020.4183%20108.859%2020.7938C109.234%2021.1692%20109.685%2021.357%20110.211%2021.357H116.38C116.959%2021.357%20117.429%2021.8267%20117.429%2022.4055V22.4586C117.429%2023.0374%20116.959%2023.5071%20116.38%2023.5071H110.211C109.091%2023.5071%20108.134%2023.1096%20107.339%2022.3141C106.544%2021.5192%20106.146%2020.5579%20106.146%2019.4322Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M118.649%2019.6787V16.7097C118.649%2015.6584%20119.023%2014.7608%20119.77%2014.0169C120.518%2013.2731%20121.42%2012.9011%20122.479%2012.9011H127.348C127.927%2012.9011%20128.396%2013.3708%20128.396%2013.9496V22.4601C128.396%2023.0388%20127.927%2023.5085%20127.348%2023.5085H127.284C126.705%2023.5085%20126.236%2023.0388%20126.236%2022.4601V15.2715C126.236%2015.1561%20126.141%2015.0619%20126.026%2015.0619H122.478C122.014%2015.0619%20121.619%2015.2241%20121.296%2015.5478C120.971%2015.8723%20120.81%2016.2662%20120.81%2016.7302V19.6582C120.81%2020.1222%20120.973%2020.5196%20121.301%2020.8512C121.629%2021.182%20122.021%2021.3478%20122.479%2021.3478H123.959C124.538%2021.3478%20125.008%2021.8175%20125.008%2022.3963V22.4601C125.008%2023.0388%20124.538%2023.5085%20123.959%2023.5085H122.479C121.427%2023.5085%20120.526%2023.1331%20119.776%2022.3821C119.025%2021.6312%20118.65%2020.7301%20118.65%2019.6794L118.649%2019.6787Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M131.239%2012.9009H131.285C131.722%2012.9009%20132.113%2013.1722%20132.267%2013.5817L134.572%2019.7337C134.64%2019.9144%20134.895%2019.9158%20134.965%2019.7352L137.325%2013.5746C137.48%2013.1687%20137.869%2012.9009%20138.304%2012.9009H138.44C139.176%2012.9009%20139.683%2013.6398%20139.418%2014.3263L134.596%2026.8294C134.44%2027.234%20134.051%2027.5003%20133.617%2027.5003H133.491C132.757%2027.5003%20132.251%2026.7657%20132.511%2026.0799L133.62%2023.1597L130.259%2014.322C129.998%2013.6355%20130.505%2012.9009%20131.238%2012.9009H131.239Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M141.292%2020.518V15.0914C141.292%2014.4842%20141.514%2013.9671%20141.957%2013.5406C142.401%2013.1141%20142.933%2012.9009%20143.555%2012.9009H147.977C148.824%2012.9009%20149.545%2013.2013%20150.143%2013.802C150.74%2014.4028%20151.039%2015.1296%20151.039%2015.9826V16.2794C151.039%2017.1189%20150.74%2017.8373%20150.143%2018.4345C149.546%2019.0317%20148.824%2019.3306%20147.977%2019.3306H145.729C145.15%2019.3306%20144.68%2018.861%20144.68%2018.2822V18.229C144.68%2017.6502%20145.15%2017.1805%20145.729%2017.1805H147.998C148.244%2017.1805%20148.453%2017.092%20148.628%2016.9142C148.802%2016.7371%20148.889%2016.5217%20148.889%2016.2695V15.9826C148.889%2015.7304%20148.802%2015.5136%20148.628%2015.3322C148.453%2015.1516%20148.244%2015.0609%20147.998%2015.0609H144.5C143.922%2015.0609%20143.452%2015.5306%20143.452%2016.1094V20.5081C143.452%2020.7404%20143.531%2020.9381%20143.687%2021.1017C143.844%2021.2654%20144.035%2021.3476%20144.26%2021.3476H149.242C149.821%2021.3476%20150.29%2021.8173%20150.29%2022.396V22.4598C150.29%2023.0386%20149.821%2023.5083%20149.242%2023.5083H144.26C143.441%2023.5083%20142.741%2023.2164%20142.161%2022.6327C141.581%2022.0489%20141.291%2021.344%20141.291%2020.5187L141.292%2020.518Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M154.131%2023.5076C153.552%2023.5076%20153.083%2023.0379%20153.083%2022.4591V15.8699C153.083%2015.051%20153.381%2014.351%20153.979%2013.7708C154.576%2013.1906%20155.294%2012.9009%20156.134%2012.9009H157.451C158.03%2012.9009%20158.499%2013.3706%20158.499%2013.9494V14.0025C158.499%2014.5813%20158.03%2015.051%20157.451%2015.051H156.134C155.888%2015.051%20155.678%2015.1346%20155.504%2015.3018C155.33%2015.469%20155.243%2015.6723%20155.243%2015.911V22.4598C155.243%2023.0386%20154.773%2023.5083%20154.194%2023.5083H154.131L154.131%2023.5076Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  ) : null}
                </_Builtin.Link>
                <_Builtin.Block
                  className={_utils.cx(_styles, "nav_mobile-burger")}
                  tag="div"
                />
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "nav_menu-list-item",
                  "is-second-top"
                )}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav_dropdown")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "nav_dropdown-toggle")}
                    tag="div"
                  >
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav_dropdown-icon")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Block tag="div">{"Platform"}</_Builtin.Block>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "nav_dropdown-list", "is-mm")}
                    tag="nav"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "nav_menu-mobile_mm-block")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "nav_menu-mobile_mm-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "is-mm-caption")}
                          tag="div"
                        >
                          {"key features"}
                        </_Builtin.Block>
                        <_Builtin.NotSupported _atom="DynamoWrapper" />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "nav_menu-mobile_mm-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "is-mm-caption")}
                          tag="div"
                        >
                          {"industries"}
                        </_Builtin.Block>
                        <_Builtin.NotSupported _atom="DynamoWrapper" />
                        <_Builtin.NotSupported _atom="DynamoWrapper" />
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.TabsWrapper
                      className={_utils.cx(_styles, "nav_mm-tabs")}
                      current="Tab 2"
                      easing="ease"
                      fadeIn={300}
                      fadeOut={100}
                    >
                      <_Builtin.TabsMenu
                        className={_utils.cx(_styles, "nav_mm-tabs-menu")}
                        tag="div"
                      >
                        <_Builtin.TabsLink
                          className={_utils.cx(_styles, "nav_mm-tab")}
                          data-w-tab="Tab 1"
                          block="inline"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nav_mm_title-block")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "is-body-m",
                                "is-text-purple"
                              )}
                              tag="div"
                            >
                              {"Key Features"}
                            </_Builtin.Block>
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "nav_mm-tab-icon")}
                              value="%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.5%2015.5L12.5%2010.5L7.5%205.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "txt-wrapper",
                              "is-display-hidden"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "is-body-xs")}
                              tag="div"
                            >
                              {
                                "Our commitment is to deliver quality product lorem ipsum."
                              }
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                        <_Builtin.TabsLink
                          className={_utils.cx(_styles, "nav_mm-tab", "is-2")}
                          data-w-tab="Tab 2"
                          block="inline"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nav_mm_title-block")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "is-body-m",
                                "is-text-purple"
                              )}
                              tag="div"
                            >
                              {"Industries"}
                            </_Builtin.Block>
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "nav_mm-tab-icon")}
                              value="%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.5%2015.5L12.5%2010.5L7.5%205.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "txt-wrapper",
                              "is-display-hidden"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "is-body-xs")}
                              tag="div"
                            >
                              {
                                "Our commitment is to deliver quality product lorem ipsum."
                              }
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                      </_Builtin.TabsMenu>
                      <_Builtin.TabsContent
                        className={_utils.cx(_styles, "nav_mm-tabs-content")}
                        tag="div"
                      >
                        <_Builtin.TabsPane
                          className={_utils.cx(_styles, "nav_mm-pane", "is-1")}
                          tag="div"
                          data-w-tab="Tab 1"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "nav_mm_title-block",
                              "is-pane"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "is-body-m",
                                "is-text-purple"
                              )}
                              tag="div"
                            >
                              {
                                "One Centralized Platform for Visual Data Management"
                              }
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "txt-wrapper",
                                "is-mm-pane"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "is-body-xs")}
                                tag="div"
                              >
                                {
                                  "Visual Layer empowers data and AI teams with advanced tools throughout the entire data curation process to streamline pipelines, enhance model performance, boost team productivity, and maximize the efficiency and profitability of machine learning projects."
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "nav_mm_pane-divider"
                            )}
                            tag="div"
                          />
                          <_Builtin.NotSupported _atom="DynamoWrapper" />
                        </_Builtin.TabsPane>
                        <_Builtin.TabsPane
                          className={_utils.cx(_styles, "nav_mm-pane", "is-2")}
                          tag="div"
                          data-w-tab="Tab 2"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "nav_mm_title-block",
                              "is-pane"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "is-body-m",
                                "is-text-purple"
                              )}
                              tag="div"
                            >
                              {
                                "One Centralized Platform for Visual Data Management"
                              }
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "txt-wrapper",
                                "is-mm-pane"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "is-body-xs")}
                                tag="div"
                              >
                                {
                                  "Visual Layer empowers data and AI teams with advanced tools throughout the entire data curation process to streamline pipelines, enhance model performance, boost team productivity, and maximize the efficiency and profitability of machine learning projects."
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "nav_mm_pane-divider"
                            )}
                            tag="div"
                          />
                          <_Builtin.NotSupported _atom="DynamoWrapper" />
                          <_Builtin.NotSupported _atom="DynamoWrapper" />
                        </_Builtin.TabsPane>
                      </_Builtin.TabsContent>
                    </_Builtin.TabsWrapper>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                {pricingLinkVisibility ? (
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav_link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://app.visual-layer.com/free-trial",
                      target: "_blank",
                    }}
                  >
                    {"Pricing"}
                  </_Builtin.Link>
                ) : null}
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav_dropdown")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "nav_dropdown-toggle")}
                    tag="div"
                  >
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav_dropdown-icon")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Block tag="div">{"Company"}</_Builtin.Block>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "nav_dropdown-list")}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "nav_link",
                        "is-dropdown",
                        "is-mobile-underline"
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"About us"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "nav_link", "is-dropdown")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"News"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "nav_link", "is-dropdown")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Events"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      options={{
                        href: "#",
                      }}
                    >
                      {"About Us"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      options={{
                        href: "#",
                      }}
                    >
                      {"News"}
                    </_Builtin.DropdownLink>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "nav_menu-list-item",
                  "is-display-hidden-tablet"
                )}
              >
                <NavLink linkVisibility={docsLinkVisibility} linkText="Docs" />
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "nav_menu-list-item",
                  "is-display-hidden-tablet"
                )}
              >
                <NavLink linkVisibility={blogLinkVisibility} linkText="Blog" />
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav_dropdown")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "nav_dropdown-toggle")}
                    tag="div"
                  >
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav_dropdown-icon")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Block tag="div">{"Resources"}</_Builtin.Block>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "nav_dropdown-list")}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "nav_link",
                        "is-dropdown",
                        "is-mobile-underline"
                      )}
                      target="_blank"
                      options={{
                        href: "https://docs.visual-layer.com/docs/introduction",
                        target: "_blank",
                      }}
                    >
                      {"Documentation"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "nav_link", "is-dropdown")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Blog"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      options={{
                        href: "#",
                      }}
                    >
                      {"Blog"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      options={{
                        href: "#",
                      }}
                    >
                      {"Events"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      options={{
                        href: "https://docs.visual-layer.com",
                      }}
                    >
                      {"Documentation"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      options={{
                        href: "https://www.youtube.com/@visual-layer",
                      }}
                    >
                      {"Videos"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      options={{
                        href: "https://docs.visual-layer.com/docs/Dataset-Enrichment/model-catalog#available-enrichment-models",
                      }}
                    >
                      {"Model Catalog"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      options={{
                        href: "https://app.visual-layer.com/vl-datasets?utm_source=website",
                      }}
                    >
                      {"Public Datasets"}
                    </_Builtin.DropdownLink>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "nav_menu-list-item",
                  "is-mobile-no-underline"
                )}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav_dropdown")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "nav_dropdown-list")}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "nav_link",
                        "is-dropdown",
                        "is-mobile-underline"
                      )}
                      options={{
                        href: "https://github.com/visual-layer/fastdup",
                        target: "_blank",
                      }}
                    >
                      {"GitHub"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "nav_link",
                        "is-dropdown",
                        "is-mobile-underline"
                      )}
                      options={{
                        href: "https://discord.com/invite/tkYHJCA7mb",
                        target: "_blank",
                      }}
                    >
                      {"Discord"}
                    </_Builtin.DropdownLink>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav_menu-list-item", "is-ctas")}
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "nav_ctas-wrapper",
                    "is-post-wrapper"
                  )}
                  tag="div"
                >
                  {signInLinkVisibility ? (
                    <_Builtin.Link
                      className={_utils.cx(_styles, "nav_link", "is-sign-in")}
                      button={false}
                      target="_blank"
                      block=""
                      options={{
                        href: "https://app.visual-layer.com/login",
                        target: "_blank",
                      }}
                    >
                      {"Sign in"}
                    </_Builtin.Link>
                  ) : null}
                  {getADemoVisibility ? (
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "button-secondary-small",
                        "is-mobile-big",
                        "hide"
                      )}
                      data-w-id="33460b6f-9dbd-1fd2-6ad6-d8d0bfbb8bae"
                      button={true}
                      posthog-ab="getdemo"
                      id="gad-button-nav"
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Get a demo"}
                    </_Builtin.Link>
                  ) : null}
                  {startForFreeVisibility ? (
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "button-primary-small",
                        "is-mobile-big"
                      )}
                      button={true}
                      target="_blank"
                      posthog-ab="startfree"
                      block=""
                      options={{
                        href: "https://app.visual-layer.com/free-trial",
                        target: "_blank",
                      }}
                    >
                      {"Get a free trial"}
                    </_Builtin.Link>
                  ) : null}
                </_Builtin.Block>
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Block
              className={_utils.cx(_styles, "nav_mobile-burger", "is-open")}
              tag="div"
            >
              <_Builtin.NotSupported _atom="Animation" />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "nav_mobile-bg-hack")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
