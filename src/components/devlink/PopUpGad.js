"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"33460b6f-9dbd-1fd2-6ad6-d8d0bfbb8bae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"33460b6f-9dbd-1fd2-6ad6-d8d0bfbb8bae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718655028696},"e-19":{"id":"e-19","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66603dc4a8308da80ba98fa3|f8b9534a-c9c9-6963-99f2-5d2ed2ad9e96","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66603dc4a8308da80ba98fa3|f8b9534a-c9c9-6963-99f2-5d2ed2ad9e96","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718655062008},"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841d7134-a336-f034-acc5-1025f7017280","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841d7134-a336-f034-acc5-1025f7017280","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718655086733},"e-23":{"id":"e-23","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66603dc4a8308da80ba98fa3|05abd3e0-5b52-2b5c-a5fa-d60f95b12966","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66603dc4a8308da80ba98fa3|05abd3e0-5b52-2b5c-a5fa-d60f95b12966","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718655269266},"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66603dc4a8308da80ba98fa3|9e13c861-6187-bbc2-665a-bb12fe94d126","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66603dc4a8308da80ba98fa3|9e13c861-6187-bbc2-665a-bb12fe94d126","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1718655289383},"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"669a71c74a104cafefd44b9c|1dd79450-4083-50aa-32a2-025e05e96127","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"669a71c74a104cafefd44b9c|1dd79450-4083-50aa-32a2-025e05e96127","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721397706389},"e-41":{"id":"e-41","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66603dc4a8308da80ba98fa3|265965f8-96a8-7c3f-fb41-ad635b8b3793","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66603dc4a8308da80ba98fa3|265965f8-96a8-7c3f-fb41-ad635b8b3793","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721399388245},"e-43":{"id":"e-43","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66bd92f9789ead17854a0c20|e3552ed5-3da7-6d9c-a639-28dd255e9067","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66bd92f9789ead17854a0c20|e3552ed5-3da7-6d9c-a639-28dd255e9067","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723705300886},"e-45":{"id":"e-45","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66b497fd3f3175cf91be3884|df10f0a4-3d39-cc57-8b49-c856dc17c000","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66b497fd3f3175cf91be3884|df10f0a4-3d39-cc57-8b49-c856dc17c000","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723708789705},"e-51":{"id":"e-51","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-52"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66695917ae5131d8cab78faf|1fe5e2d3-7b76-8ab5-ead7-a70917cce558","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66695917ae5131d8cab78faf|1fe5e2d3-7b76-8ab5-ead7-a70917cce558","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724330853782},"e-63":{"id":"e-63","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-64"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66b497fd3f3175cf91be3884|c18be0b7-fcd0-4efa-d168-58d211c98b78","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66b497fd3f3175cf91be3884|c18be0b7-fcd0-4efa-d168-58d211c98b78","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725875413701},"e-65":{"id":"e-65","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-66"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66b497fd3f3175cf91be3884|df10f0a4-3d39-cc57-8b49-c856dc17c006","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66b497fd3f3175cf91be3884|df10f0a4-3d39-cc57-8b49-c856dc17c006","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725875891318},"e-69":{"id":"e-69","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-70"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66695917ae5131d8cab78faf|b8b44bfd-8036-b772-3e05-2df71c5fd5f0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66695917ae5131d8cab78faf|b8b44bfd-8036-b772-3e05-2df71c5fd5f0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725911573208},"e-71":{"id":"e-71","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66695917ae5131d8cab78faf|1fe5e2d3-7b76-8ab5-ead7-a70917cce2b7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66695917ae5131d8cab78faf|1fe5e2d3-7b76-8ab5-ead7-a70917cce2b7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725917627841},"e-73":{"id":"e-73","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66e02030ffc51b3b617e3623|e3552ed5-3da7-6d9c-a639-28dd255e9067","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66e02030ffc51b3b617e3623|e3552ed5-3da7-6d9c-a639-28dd255e9067","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725964336648},"e-75":{"id":"e-75","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-76"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66bd92f9789ead17854a0c20|e3552ed5-3da7-6d9c-a639-28dd255e906f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66bd92f9789ead17854a0c20|e3552ed5-3da7-6d9c-a639-28dd255e906f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725973139093},"e-81":{"id":"e-81","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66e02030ffc51b3b617e3623|e3552ed5-3da7-6d9c-a639-28dd255e906f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66e02030ffc51b3b617e3623|e3552ed5-3da7-6d9c-a639-28dd255e906f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727342551830},"e-83":{"id":"e-83","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6718d3eb216df138ca52ab31|b89440c0-cbb3-8e40-5eac-8736742b4a0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6718d3eb216df138ca52ab31|b89440c0-cbb3-8e40-5eac-8736742b4a0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1729697362239}},"actionLists":{"a-8":{"id":"a-8","title":"Popup GAD [Open]","actionItemGroups":[{"actionItems":[{"id":"a-8-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".popup_wrapper","selectorGuids":["484b767d-9012-3036-a92e-94a417575649"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".popop_component","selectorGuids":["547546cd-5cc6-57e1-f189-3b515b448712"]},"value":"flex"}}]},{"actionItems":[{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":100,"target":{"selector":".popup_wrapper","selectorGuids":["484b767d-9012-3036-a92e-94a417575649"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1718655033696},"a-9":{"id":"a-9","title":"Popup GAD [Close]","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".popop_component","selectorGuids":["547546cd-5cc6-57e1-f189-3b515b448712"]},"value":"none"}},{"id":"a-9-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"selector":".popup_wrapper","selectorGuids":["484b767d-9012-3036-a92e-94a417575649"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1718655033696}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PopUpGad({
  as: _Component = _Builtin.Block,
  checked = "Checked",
  gadChecked = "bg-black",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="popop_component"
      tag="div"
      fs-scrolldisable-element="when-visible"
    >
      <_Builtin.Block className="popup_wrapper" tag="div">
        <_Builtin.Block className="popup_left" tag="div">
          <_Builtin.Block className="popup_left-top" tag="div">
            <_Builtin.HtmlEmbed
              className="popup_logo"
              value="%3Csvg%20width%3D%22159%22%20height%3D%2232%22%20viewBox%3D%220%200%20159%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.94041%201.96265L8.29612%200H0L3.66604%2010.3355L8.94041%201.96265Z%22%20fill%3D%22%23FF4500%22%2F%3E%0A%3Cpath%20d%3D%22M32.4543%200H24.2035L20.791%2010.3355L30.1073%206.61717L32.4543%200Z%22%20fill%3D%22%23A4C217%22%2F%3E%0A%3Cpath%20d%3D%22M11.7013%2010.3355L8.93851%201.96265L5.27881%207.772L11.7013%2010.3355Z%22%20fill%3D%22%23D6493E%22%2F%3E%0A%3Cpath%20d%3D%22M8.14122%2022.9512L16.2282%2024.1596L11.7036%2010.3352L6.2052%2017.4937L8.14122%2022.9512Z%22%20fill%3D%22%23A63B94%22%2F%3E%0A%3Cpath%20d%3D%22M16.2272%2024.1596L24.3129%2022.9547L26.3611%2017.1806L20.7917%2010.3352L16.2272%2024.1596Z%22%20fill%3D%22%232DB686%22%2F%3E%0A%3Cpath%20d%3D%22M16.2263%2024.1602L21.1039%2032.0003H11.3488L16.2263%2024.1602Z%22%20fill%3D%22%230197D8%22%2F%3E%0A%3Cpath%20d%3D%22M16.2276%2024.1598L11.35%2032L8.14062%2022.9514L16.2276%2024.1598Z%22%20fill%3D%22%23336C9B%22%2F%3E%0A%3Cpath%20d%3D%22M21.1048%2031.9996L24.3129%2022.9546L16.2272%2024.1595L21.1048%2031.9996Z%22%20fill%3D%22%2326BF79%22%2F%3E%0A%3Cpath%20d%3D%22M6.20464%2017.4939L11.7031%2010.3354L2.34021%206.59839L6.20464%2017.4939Z%22%20fill%3D%22%23CC4E84%22%2F%3E%0A%3Cpath%20d%3D%22M26.3604%2017.1809L20.791%2010.3355L30.1073%206.61719L26.3604%2017.1809Z%22%20fill%3D%22%231BC07D%22%2F%3E%0A%3Cpath%20d%3D%22M43.5043%208.948H43.5801C44.0235%208.948%2044.4189%209.22641%2044.5676%209.64439L48.3804%2020.3319C48.447%2020.5175%2048.7091%2020.5175%2048.7757%2020.3319L52.5793%209.6451C52.7281%209.22712%2053.1234%208.948%2053.5669%208.948H53.642C54.3674%208.948%2054.8733%209.66706%2054.6288%2010.35L50.1678%2022.8121C50.0183%2023.2287%2049.6237%2023.5071%2049.181%2023.5071H47.9646C47.5218%2023.5071%2047.1265%2023.2287%2046.9777%2022.8121L42.5167%2010.35C42.2723%209.66706%2042.7781%208.948%2043.5036%208.948H43.5043Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M56.6%2010.9555C56.3407%2010.6962%2056.2111%2010.3824%2056.2111%2010.0133C56.2111%209.64419%2056.3407%209.33106%2056.6%209.07106C56.8593%208.81177%2057.1731%208.68213%2057.5422%208.68213C57.9113%208.68213%2058.2244%208.81177%2058.4844%209.07106C58.7437%209.33035%2058.8734%209.64419%2058.8734%2010.0133C58.8734%2010.3824%2058.7437%2010.6962%2058.4844%2010.9555C58.2251%2011.2148%2057.9113%2011.3444%2057.5422%2011.3444C57.1731%2011.3444%2056.8593%2011.2148%2056.6%2010.9555ZM56.4569%2022.4591V13.9486C56.4569%2013.3699%2056.9266%2012.9002%2057.5054%2012.9002H57.5791C58.1578%2012.9002%2058.6275%2013.3699%2058.6275%2013.9486V22.4591C58.6275%2023.0379%2058.1578%2023.5076%2057.5791%2023.5076H57.5054C56.9266%2023.5076%2056.4569%2023.0379%2056.4569%2022.4591Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M60.6672%2016.1358V15.8801C60.6672%2015.0541%2060.9655%2014.3513%2061.5634%2013.7711C62.1606%2013.1909%2062.879%2012.9011%2063.7185%2012.9011H68.895C69.4738%2012.9011%2069.9435%2013.3708%2069.9435%2013.9496V14.0134C69.9435%2014.5922%2069.4738%2015.0619%2068.895%2015.0619H63.7185C63.4726%2015.0619%2063.2629%2015.1419%2063.0887%2015.3027C62.9144%2015.4628%2062.8273%2015.6562%2062.8273%2015.8815V16.1373C62.8273%2016.3696%2062.9144%2016.5673%2063.0887%2016.7309C63.2629%2016.8946%2063.4726%2016.9768%2063.7185%2016.9768H67.5887C68.4282%2016.9768%2069.1451%2017.2686%2069.7388%2017.8524C70.3324%2018.4361%2070.6293%2019.141%2070.6293%2019.9664V20.5189C70.6293%2021.345%2070.3324%2022.0499%2069.7388%2022.6329C69.1451%2023.2167%2068.4282%2023.5085%2067.5887%2023.5085H62.1975C61.6187%2023.5085%2061.149%2023.0389%2061.149%2022.4601V22.3963C61.149%2021.8175%2061.6187%2021.3478%2062.1975%2021.3478H67.5887C67.8345%2021.3478%2068.0442%2021.2656%2068.2185%2021.102C68.3927%2020.9383%2068.4799%2020.74%2068.4799%2020.5083V19.9756C68.4799%2019.7439%2068.3927%2019.5441%2068.2185%2019.3769C68.0442%2019.2098%2067.8345%2019.1262%2067.5887%2019.1262H63.7185C62.879%2019.1262%2062.1606%2018.8343%2061.5634%2018.2505C60.9662%2017.6668%2060.6672%2016.9619%2060.6672%2016.1366V16.1358Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M72.668%2019.6787V13.9496C72.668%2013.3708%2073.1377%2012.9011%2073.7165%2012.9011H73.7802C74.359%2012.9011%2074.8287%2013.3708%2074.8287%2013.9496V19.6483C74.8287%2020.1258%2074.9909%2020.5324%2075.3147%2020.8668C75.6392%2021.2012%2076.033%2021.3684%2076.4971%2021.3684H80.0449C80.1604%2021.3684%2080.2546%2021.2741%2080.2546%2021.1587V13.9496C80.2546%2013.3708%2080.7243%2012.9011%2081.3031%2012.9011H81.3669C81.9457%2012.9011%2082.4153%2013.3708%2082.4153%2013.9496V21.3584C82.4153%2021.9521%2082.2021%2022.4593%2081.7756%2022.8787C81.3492%2023.2988%2080.8355%2023.5085%2080.2348%2023.5085H76.4978C75.4465%2023.5085%2074.5453%2023.1331%2073.7951%2022.3821C73.0442%2021.6312%2072.6687%2020.7301%2072.6687%2019.6794L72.668%2019.6787Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M84.454%2019.6787V16.7097C84.454%2015.6584%2084.828%2014.7608%2085.5754%2014.0169C86.3228%2013.2731%2087.2254%2012.9011%2088.2838%2012.9011H93.1529C93.7317%2012.9011%2094.2014%2013.3708%2094.2014%2013.9496V22.4601C94.2014%2023.0388%2093.7317%2023.5085%2093.1529%2023.5085H93.0891C92.5103%2023.5085%2092.0406%2023.0388%2092.0406%2022.4601V15.2715C92.0406%2015.1561%2091.9464%2015.0619%2091.8309%2015.0619H88.2831C87.8191%2015.0619%2087.4245%2015.2241%2087.1007%2015.5478C86.7769%2015.8716%2086.6147%2016.2662%2086.6147%2016.7302V19.6582C86.6147%2020.1222%2086.7784%2020.5196%2087.1064%2020.8512C87.4337%2021.182%2087.8261%2021.3478%2088.2838%2021.3478H89.7644C90.3432%2021.3478%2090.8129%2021.8175%2090.8129%2022.3963V22.4601C90.8129%2023.0388%2090.3432%2023.5085%2089.7644%2023.5085H88.2838C87.2325%2023.5085%2086.3313%2023.1331%2085.5811%2022.3821C84.8302%2021.6312%2084.4547%2020.7301%2084.4547%2019.6794L84.454%2019.6787Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M96.3456%2022.4586V9.99648C96.3456%209.41769%2096.8153%208.948%2097.3941%208.948H97.4578C98.0366%208.948%2098.5063%209.41769%2098.5063%209.99648V22.4586C98.5063%2023.0374%2098.0366%2023.5071%2097.4578%2023.5071H97.3941C96.8153%2023.5071%2096.3456%2023.0374%2096.3456%2022.4586Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M106.146%2019.4324V9.99672C106.146%209.41793%20106.615%208.94824%20107.194%208.94824H107.247C107.826%208.94824%20108.296%209.41793%20108.296%209.99672V19.4324C108.296%2019.9651%20108.483%2020.4185%20108.859%2020.794C109.234%2021.1695%20109.685%2021.3572%20110.211%2021.3572H116.38C116.959%2021.3572%20117.429%2021.8269%20117.429%2022.4057V22.4588C117.429%2023.0376%20116.959%2023.5073%20116.38%2023.5073H110.211C109.091%2023.5073%20108.134%2023.1099%20107.339%2022.3143C106.544%2021.5195%20106.146%2020.5581%20106.146%2019.4324Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M118.649%2019.679V16.7099C118.649%2015.6586%20119.023%2014.761%20119.77%2014.0172C120.518%2013.2733%20121.42%2012.9014%20122.479%2012.9014H127.348C127.927%2012.9014%20128.396%2013.3711%20128.396%2013.9498V22.4603C128.396%2023.0391%20127.927%2023.5088%20127.348%2023.5088H127.284C126.705%2023.5088%20126.236%2023.0391%20126.236%2022.4603V15.2718C126.236%2015.1563%20126.141%2015.0621%20126.026%2015.0621H122.478C122.014%2015.0621%20121.619%2015.2243%20121.296%2015.5481C120.971%2015.8725%20120.81%2016.2664%20120.81%2016.7305V19.6584C120.81%2020.1225%20120.973%2020.5199%20121.301%2020.8514C121.629%2021.1823%20122.021%2021.3481%20122.479%2021.3481H123.959C124.538%2021.3481%20125.008%2021.8177%20125.008%2022.3965V22.4603C125.008%2023.0391%20124.538%2023.5088%20123.959%2023.5088H122.479C121.427%2023.5088%20120.526%2023.1333%20119.776%2022.3824C119.025%2021.6314%20118.65%2020.7303%20118.65%2019.6797L118.649%2019.679Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M131.239%2012.9011H131.285C131.722%2012.9011%20132.113%2013.1725%20132.267%2013.5819L134.572%2019.734C134.64%2019.9146%20134.895%2019.9161%20134.965%2019.7354L137.325%2013.5748C137.48%2013.1689%20137.869%2012.9011%20138.304%2012.9011H138.44C139.176%2012.9011%20139.683%2013.64%20139.418%2014.3265L134.596%2026.8297C134.44%2027.2342%20134.051%2027.5006%20133.617%2027.5006H133.491C132.757%2027.5006%20132.251%2026.7659%20132.511%2026.0802L133.62%2023.16L130.259%2014.3222C129.998%2013.6358%20130.505%2012.9011%20131.238%2012.9011H131.239Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M141.292%2020.5182V15.0916C141.292%2014.4845%20141.514%2013.9673%20141.957%2013.5408C142.401%2013.1144%20142.933%2012.9011%20143.555%2012.9011H147.977C148.824%2012.9011%20149.545%2013.2015%20150.143%2013.8023C150.74%2014.403%20151.039%2015.1299%20151.039%2015.9828V16.2797C151.039%2017.1192%20150.74%2017.8375%20150.143%2018.4347C149.546%2019.0319%20148.824%2019.3309%20147.977%2019.3309H145.729C145.15%2019.3309%20144.68%2018.8612%20144.68%2018.2824V18.2293C144.68%2017.6505%20145.15%2017.1808%20145.729%2017.1808H147.998C148.244%2017.1808%20148.453%2017.0922%20148.628%2016.9144C148.802%2016.7373%20148.889%2016.5219%20148.889%2016.2697V15.9828C148.889%2015.7306%20148.802%2015.5138%20148.628%2015.3325C148.453%2015.1518%20148.244%2015.0611%20147.998%2015.0611H144.5C143.922%2015.0611%20143.452%2015.5308%20143.452%2016.1096V20.5083C143.452%2020.7407%20143.531%2020.9383%20143.687%2021.102C143.844%2021.2656%20144.035%2021.3478%20144.26%2021.3478H149.242C149.821%2021.3478%20150.29%2021.8175%20150.29%2022.3963V22.4601C150.29%2023.0388%20149.821%2023.5085%20149.242%2023.5085H144.26C143.441%2023.5085%20142.741%2023.2167%20142.161%2022.6329C141.581%2022.0492%20141.291%2021.3443%20141.291%2020.5189L141.292%2020.5182Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M154.131%2023.5078C153.552%2023.5078%20153.083%2023.0381%20153.083%2022.4593V15.8702C153.083%2015.0512%20153.381%2014.3513%20153.979%2013.7711C154.576%2013.1909%20155.294%2012.9011%20156.134%2012.9011H157.451C158.03%2012.9011%20158.499%2013.3708%20158.499%2013.9496V14.0027C158.499%2014.5815%20158.03%2015.0512%20157.451%2015.0512H156.134C155.888%2015.0512%20155.678%2015.1348%20155.504%2015.302C155.33%2015.4692%20155.243%2015.6725%20155.243%2015.9113V22.4601C155.243%2023.0388%20154.773%2023.5085%20154.194%2023.5085H154.131L154.131%2023.5078Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph className="is-h3">
              {"See Visual LayerinAction"}
            </_Builtin.Paragraph>
            <_Builtin.Paragraph className="is-body-l">
              {
                "Book a 30-minute personalized demo with our experts to learn how Visual Layer can:"
              }
            </_Builtin.Paragraph>
            <_Builtin.List className="popup_list" tag="ul" unstyled={false}>
              <_Builtin.ListItem className="is-body-xs">
                {
                  "Save up to 90% time and costs on manual data curation with automated workflows"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem className="is-body-xs">
                {
                  "Extract insights from unstructured data using natural language, visual search, and advanced queries"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem className="is-body-xs">
                {"Achieve 50% better model accuracy and performance"}
              </_Builtin.ListItem>
              <_Builtin.ListItem className="is-body-xs">
                {"Scale from gigabytes to petabytes through an API or web UI"}
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.Block>
          <_Builtin.Block
            className="popup_left-bottom"
            id="w-node-_841d7134-a336-f034-acc5-1025f7017255-f7017243"
            tag="div"
          >
            <_Builtin.Block className="popup_maruqq-title" tag="div">
              <_Builtin.Block tag="div">{"TRUSTEDBY"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="marquee_layout is-logos" tag="div">
              <_Builtin.Block className="marquee_track is-popup" tag="div">
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.HtmlEmbed
                  className="marquee_embed"
                  value="%3Cstyle%3E%0A.marquee_track%20%7B%0A%20%20white-space%3A%20nowrap%3B%0A%20%20will-change%3A%20transform%3B%0A%20%20animation%3A%20marquee%2045s%20linear%20infinite%3B%0A%7D%0A%0A%40keyframes%20marquee%20%7B%0A%20%20from%20%7B%20transform%3A%20translateX(0)%3B%20%7D%0A%20%20to%20%7B%20transform%3A%20translateX(-50%25)%3B%20%7D%0A%7D%0A%0A.marquee_track%3Ahover%20%7B%0A%09animation-play-state%3A%20paused%3B%0A%7D%0A.popup_wrapper%20li%3A%3Amarker%20%7B%0Acolor%3A%23A53D95%3B%0A%3C%2Fstyle%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="popup_right" tag="div">
          <_Builtin.HtmlEmbed
            className="popup_logo is-mobile"
            value="%3Csvg%20width%3D%22159%22%20height%3D%2232%22%20viewBox%3D%220%200%20159%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.94041%201.96265L8.29612%200H0L3.66604%2010.3355L8.94041%201.96265Z%22%20fill%3D%22%23FF4500%22%2F%3E%0A%3Cpath%20d%3D%22M32.4543%200H24.2035L20.791%2010.3355L30.1073%206.61717L32.4543%200Z%22%20fill%3D%22%23A4C217%22%2F%3E%0A%3Cpath%20d%3D%22M11.7013%2010.3355L8.93851%201.96265L5.27881%207.772L11.7013%2010.3355Z%22%20fill%3D%22%23D6493E%22%2F%3E%0A%3Cpath%20d%3D%22M8.14122%2022.9512L16.2282%2024.1596L11.7036%2010.3352L6.2052%2017.4937L8.14122%2022.9512Z%22%20fill%3D%22%23A63B94%22%2F%3E%0A%3Cpath%20d%3D%22M16.2272%2024.1596L24.3129%2022.9547L26.3611%2017.1806L20.7917%2010.3352L16.2272%2024.1596Z%22%20fill%3D%22%232DB686%22%2F%3E%0A%3Cpath%20d%3D%22M16.2263%2024.1602L21.1039%2032.0003H11.3488L16.2263%2024.1602Z%22%20fill%3D%22%230197D8%22%2F%3E%0A%3Cpath%20d%3D%22M16.2276%2024.1598L11.35%2032L8.14062%2022.9514L16.2276%2024.1598Z%22%20fill%3D%22%23336C9B%22%2F%3E%0A%3Cpath%20d%3D%22M21.1048%2031.9996L24.3129%2022.9546L16.2272%2024.1595L21.1048%2031.9996Z%22%20fill%3D%22%2326BF79%22%2F%3E%0A%3Cpath%20d%3D%22M6.20464%2017.4939L11.7031%2010.3354L2.34021%206.59839L6.20464%2017.4939Z%22%20fill%3D%22%23CC4E84%22%2F%3E%0A%3Cpath%20d%3D%22M26.3604%2017.1809L20.791%2010.3355L30.1073%206.61719L26.3604%2017.1809Z%22%20fill%3D%22%231BC07D%22%2F%3E%0A%3Cpath%20d%3D%22M43.5043%208.948H43.5801C44.0235%208.948%2044.4189%209.22641%2044.5676%209.64439L48.3804%2020.3319C48.447%2020.5175%2048.7091%2020.5175%2048.7757%2020.3319L52.5793%209.6451C52.7281%209.22712%2053.1234%208.948%2053.5669%208.948H53.642C54.3674%208.948%2054.8733%209.66706%2054.6288%2010.35L50.1678%2022.8121C50.0183%2023.2287%2049.6237%2023.5071%2049.181%2023.5071H47.9646C47.5218%2023.5071%2047.1265%2023.2287%2046.9777%2022.8121L42.5167%2010.35C42.2723%209.66706%2042.7781%208.948%2043.5036%208.948H43.5043Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M56.6%2010.9555C56.3407%2010.6962%2056.2111%2010.3824%2056.2111%2010.0133C56.2111%209.64419%2056.3407%209.33106%2056.6%209.07106C56.8593%208.81177%2057.1731%208.68213%2057.5422%208.68213C57.9113%208.68213%2058.2244%208.81177%2058.4844%209.07106C58.7437%209.33035%2058.8734%209.64419%2058.8734%2010.0133C58.8734%2010.3824%2058.7437%2010.6962%2058.4844%2010.9555C58.2251%2011.2148%2057.9113%2011.3444%2057.5422%2011.3444C57.1731%2011.3444%2056.8593%2011.2148%2056.6%2010.9555ZM56.4569%2022.4591V13.9486C56.4569%2013.3699%2056.9266%2012.9002%2057.5054%2012.9002H57.5791C58.1578%2012.9002%2058.6275%2013.3699%2058.6275%2013.9486V22.4591C58.6275%2023.0379%2058.1578%2023.5076%2057.5791%2023.5076H57.5054C56.9266%2023.5076%2056.4569%2023.0379%2056.4569%2022.4591Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M60.6672%2016.1358V15.8801C60.6672%2015.0541%2060.9655%2014.3513%2061.5634%2013.7711C62.1606%2013.1909%2062.879%2012.9011%2063.7185%2012.9011H68.895C69.4738%2012.9011%2069.9435%2013.3708%2069.9435%2013.9496V14.0134C69.9435%2014.5922%2069.4738%2015.0619%2068.895%2015.0619H63.7185C63.4726%2015.0619%2063.2629%2015.1419%2063.0887%2015.3027C62.9144%2015.4628%2062.8273%2015.6562%2062.8273%2015.8815V16.1373C62.8273%2016.3696%2062.9144%2016.5673%2063.0887%2016.7309C63.2629%2016.8946%2063.4726%2016.9768%2063.7185%2016.9768H67.5887C68.4282%2016.9768%2069.1451%2017.2686%2069.7388%2017.8524C70.3324%2018.4361%2070.6293%2019.141%2070.6293%2019.9664V20.5189C70.6293%2021.345%2070.3324%2022.0499%2069.7388%2022.6329C69.1451%2023.2167%2068.4282%2023.5085%2067.5887%2023.5085H62.1975C61.6187%2023.5085%2061.149%2023.0389%2061.149%2022.4601V22.3963C61.149%2021.8175%2061.6187%2021.3478%2062.1975%2021.3478H67.5887C67.8345%2021.3478%2068.0442%2021.2656%2068.2185%2021.102C68.3927%2020.9383%2068.4799%2020.74%2068.4799%2020.5083V19.9756C68.4799%2019.7439%2068.3927%2019.5441%2068.2185%2019.3769C68.0442%2019.2098%2067.8345%2019.1262%2067.5887%2019.1262H63.7185C62.879%2019.1262%2062.1606%2018.8343%2061.5634%2018.2505C60.9662%2017.6668%2060.6672%2016.9619%2060.6672%2016.1366V16.1358Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M72.668%2019.6787V13.9496C72.668%2013.3708%2073.1377%2012.9011%2073.7165%2012.9011H73.7802C74.359%2012.9011%2074.8287%2013.3708%2074.8287%2013.9496V19.6483C74.8287%2020.1258%2074.9909%2020.5324%2075.3147%2020.8668C75.6392%2021.2012%2076.033%2021.3684%2076.4971%2021.3684H80.0449C80.1604%2021.3684%2080.2546%2021.2741%2080.2546%2021.1587V13.9496C80.2546%2013.3708%2080.7243%2012.9011%2081.3031%2012.9011H81.3669C81.9457%2012.9011%2082.4153%2013.3708%2082.4153%2013.9496V21.3584C82.4153%2021.9521%2082.2021%2022.4593%2081.7756%2022.8787C81.3492%2023.2988%2080.8355%2023.5085%2080.2348%2023.5085H76.4978C75.4465%2023.5085%2074.5453%2023.1331%2073.7951%2022.3821C73.0442%2021.6312%2072.6687%2020.7301%2072.6687%2019.6794L72.668%2019.6787Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M84.454%2019.6787V16.7097C84.454%2015.6584%2084.828%2014.7608%2085.5754%2014.0169C86.3228%2013.2731%2087.2254%2012.9011%2088.2838%2012.9011H93.1529C93.7317%2012.9011%2094.2014%2013.3708%2094.2014%2013.9496V22.4601C94.2014%2023.0388%2093.7317%2023.5085%2093.1529%2023.5085H93.0891C92.5103%2023.5085%2092.0406%2023.0388%2092.0406%2022.4601V15.2715C92.0406%2015.1561%2091.9464%2015.0619%2091.8309%2015.0619H88.2831C87.8191%2015.0619%2087.4245%2015.2241%2087.1007%2015.5478C86.7769%2015.8716%2086.6147%2016.2662%2086.6147%2016.7302V19.6582C86.6147%2020.1222%2086.7784%2020.5196%2087.1064%2020.8512C87.4337%2021.182%2087.8261%2021.3478%2088.2838%2021.3478H89.7644C90.3432%2021.3478%2090.8129%2021.8175%2090.8129%2022.3963V22.4601C90.8129%2023.0388%2090.3432%2023.5085%2089.7644%2023.5085H88.2838C87.2325%2023.5085%2086.3313%2023.1331%2085.5811%2022.3821C84.8302%2021.6312%2084.4547%2020.7301%2084.4547%2019.6794L84.454%2019.6787Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M96.3456%2022.4586V9.99648C96.3456%209.41769%2096.8153%208.948%2097.3941%208.948H97.4578C98.0366%208.948%2098.5063%209.41769%2098.5063%209.99648V22.4586C98.5063%2023.0374%2098.0366%2023.5071%2097.4578%2023.5071H97.3941C96.8153%2023.5071%2096.3456%2023.0374%2096.3456%2022.4586Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M106.146%2019.4324V9.99672C106.146%209.41793%20106.615%208.94824%20107.194%208.94824H107.247C107.826%208.94824%20108.296%209.41793%20108.296%209.99672V19.4324C108.296%2019.9651%20108.483%2020.4185%20108.859%2020.794C109.234%2021.1695%20109.685%2021.3572%20110.211%2021.3572H116.38C116.959%2021.3572%20117.429%2021.8269%20117.429%2022.4057V22.4588C117.429%2023.0376%20116.959%2023.5073%20116.38%2023.5073H110.211C109.091%2023.5073%20108.134%2023.1099%20107.339%2022.3143C106.544%2021.5195%20106.146%2020.5581%20106.146%2019.4324Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M118.649%2019.679V16.7099C118.649%2015.6586%20119.023%2014.761%20119.77%2014.0172C120.518%2013.2733%20121.42%2012.9014%20122.479%2012.9014H127.348C127.927%2012.9014%20128.396%2013.3711%20128.396%2013.9498V22.4603C128.396%2023.0391%20127.927%2023.5088%20127.348%2023.5088H127.284C126.705%2023.5088%20126.236%2023.0391%20126.236%2022.4603V15.2718C126.236%2015.1563%20126.141%2015.0621%20126.026%2015.0621H122.478C122.014%2015.0621%20121.619%2015.2243%20121.296%2015.5481C120.971%2015.8725%20120.81%2016.2664%20120.81%2016.7305V19.6584C120.81%2020.1225%20120.973%2020.5199%20121.301%2020.8514C121.629%2021.1823%20122.021%2021.3481%20122.479%2021.3481H123.959C124.538%2021.3481%20125.008%2021.8177%20125.008%2022.3965V22.4603C125.008%2023.0391%20124.538%2023.5088%20123.959%2023.5088H122.479C121.427%2023.5088%20120.526%2023.1333%20119.776%2022.3824C119.025%2021.6314%20118.65%2020.7303%20118.65%2019.6797L118.649%2019.679Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M131.239%2012.9011H131.285C131.722%2012.9011%20132.113%2013.1725%20132.267%2013.5819L134.572%2019.734C134.64%2019.9146%20134.895%2019.9161%20134.965%2019.7354L137.325%2013.5748C137.48%2013.1689%20137.869%2012.9011%20138.304%2012.9011H138.44C139.176%2012.9011%20139.683%2013.64%20139.418%2014.3265L134.596%2026.8297C134.44%2027.2342%20134.051%2027.5006%20133.617%2027.5006H133.491C132.757%2027.5006%20132.251%2026.7659%20132.511%2026.0802L133.62%2023.16L130.259%2014.3222C129.998%2013.6358%20130.505%2012.9011%20131.238%2012.9011H131.239Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M141.292%2020.5182V15.0916C141.292%2014.4845%20141.514%2013.9673%20141.957%2013.5408C142.401%2013.1144%20142.933%2012.9011%20143.555%2012.9011H147.977C148.824%2012.9011%20149.545%2013.2015%20150.143%2013.8023C150.74%2014.403%20151.039%2015.1299%20151.039%2015.9828V16.2797C151.039%2017.1192%20150.74%2017.8375%20150.143%2018.4347C149.546%2019.0319%20148.824%2019.3309%20147.977%2019.3309H145.729C145.15%2019.3309%20144.68%2018.8612%20144.68%2018.2824V18.2293C144.68%2017.6505%20145.15%2017.1808%20145.729%2017.1808H147.998C148.244%2017.1808%20148.453%2017.0922%20148.628%2016.9144C148.802%2016.7373%20148.889%2016.5219%20148.889%2016.2697V15.9828C148.889%2015.7306%20148.802%2015.5138%20148.628%2015.3325C148.453%2015.1518%20148.244%2015.0611%20147.998%2015.0611H144.5C143.922%2015.0611%20143.452%2015.5308%20143.452%2016.1096V20.5083C143.452%2020.7407%20143.531%2020.9383%20143.687%2021.102C143.844%2021.2656%20144.035%2021.3478%20144.26%2021.3478H149.242C149.821%2021.3478%20150.29%2021.8175%20150.29%2022.3963V22.4601C150.29%2023.0388%20149.821%2023.5085%20149.242%2023.5085H144.26C143.441%2023.5085%20142.741%2023.2167%20142.161%2022.6329C141.581%2022.0492%20141.291%2021.3443%20141.291%2020.5189L141.292%2020.5182Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3Cpath%20d%3D%22M154.131%2023.5078C153.552%2023.5078%20153.083%2023.0381%20153.083%2022.4593V15.8702C153.083%2015.0512%20153.381%2014.3513%20153.979%2013.7711C154.576%2013.1909%20155.294%2012.9011%20156.134%2012.9011H157.451C158.03%2012.9011%20158.499%2013.3708%20158.499%2013.9496V14.0027C158.499%2014.5815%20158.03%2015.0512%20157.451%2015.0512H156.134C155.888%2015.0512%20155.678%2015.1348%20155.504%2015.302C155.33%2015.4692%20155.243%2015.6725%20155.243%2015.9113V22.4601C155.243%2023.0388%20154.773%2023.5085%20154.194%2023.5085H154.131L154.131%2023.5078Z%22%20fill%3D%22%23332E3C%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className="is-h2 is-text-semibold"
            id="w-node-_841d7134-a336-f034-acc5-1025f7017279-f7017243"
            tag="div"
          >
            {"Get a personalized demo"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className="hbs_gad-popup"
            value="%3Cscript%20charset%3D%22utf-8%22%20type%3D%22text%2Fjavascript%22%20src%3D%22%2F%2Fjs.hsforms.net%2Fforms%2Fembed%2Fv2.js%22%3E%3C%2Fscript%3E%0A%3Cscript%3E%0A%20%20hbspt.forms.create(%7B%0A%20%20%20%20region%3A%20%22na1%22%2C%0A%20%20%20%20portalId%3A%20%2223297802%22%2C%0A%20%20%20%20formId%3A%20%2271995fc7-15d7-45ac-94cf-898637d1c94d%22%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
          />
          <_Builtin.FormWrapper className="popup_form_block">
            <_Builtin.FormForm
              className="popup_form"
              name="email-form"
              data-name="Email Form"
              method="get"
              data-webflow-hubspot-api-form-url="https://hubspotonwebflow.com/api/forms/832499c1-070a-44cf-b7f4-1f9edcf5fc7b"
              id="gaq-email-form"
            >
              <_Builtin.FormTextInput
                className="popup_form_field"
                autoFocus={false}
                maxLength={256}
                name="email"
                data-name="Email"
                placeholder="E-mail address"
                type="email"
                disabled={false}
                required={true}
                data-wfhsfieldname="FormTextInput-2"
                id="gad-email"
              />
              <_Builtin.Block className="popup_form_fields-wrapper" tag="div">
                <_Builtin.FormTextInput
                  className="popup_form_field"
                  autoFocus={false}
                  maxLength={256}
                  name="name"
                  data-name="Name"
                  placeholder="Name"
                  type="text"
                  disabled={false}
                  required={true}
                  data-wfhsfieldname="FormTextInput-3"
                  id="gad-name"
                />
                <_Builtin.FormTextInput
                  className="popup_form_field"
                  autoFocus={false}
                  maxLength={256}
                  name="Last-Name"
                  data-name="Last Name"
                  placeholder="Last name"
                  type="text"
                  disabled={false}
                  required={true}
                  data-wfhsfieldname="FormTextInput-4"
                  id="gad-last-name"
                />
              </_Builtin.Block>
              <_Builtin.Block className="popup_form_fields-wrapper" tag="div">
                <_Builtin.FormTextInput
                  className="popup_form_field"
                  autoFocus={false}
                  maxLength={256}
                  name="Phone-number"
                  data-name="Phone number"
                  placeholder="Phone number"
                  type="tel"
                  disabled={false}
                  required={false}
                  data-wfhsfieldname="FormTextInput-5"
                  id="gad-phone-number"
                />
                <_Builtin.FormTextInput
                  className="popup_form_field"
                  autoFocus={false}
                  maxLength={256}
                  name="company"
                  data-name="company"
                  placeholder="Company"
                  type="text"
                  disabled={false}
                  required={true}
                  data-wfhsfieldname="FormTextInput-6"
                  id="gad-company"
                />
              </_Builtin.Block>
              <_Builtin.FormButton
                className="popup_form_submit-button"
                type="submit"
                value="Get a demo"
                data-wait="Please wait..."
              />
              <_Builtin.FormCheckboxWrapper>
                <_Builtin.FormCheckboxInput
                  className="popup_form_checkbox"
                  type="checkbox"
                  name="checkbox"
                  data-name="Checkbox"
                  checked={false}
                  required={true}
                  data-wfhsfieldname="FormCheckboxWrapper-6"
                  id="checkbox"
                  form={{
                    type: "checkbox-input",
                    name: "Checkbox",
                  }}
                  inputType="custom"
                  customClassName="w-checkbox-input--inputType-custom"
                />
                <_Builtin.FormInlineLabel>
                  {"Checkbox"}
                </_Builtin.FormInlineLabel>
              </_Builtin.FormCheckboxWrapper>
              <_Builtin.FormCheckboxWrapper>
                <_Builtin.FormCheckboxInput
                  className="popup_form_checkbox"
                  type="checkbox"
                  name="checkbox-2"
                  data-name="Checkbox 2"
                  checked={false}
                  required={true}
                  data-wfhsfieldname="FormCheckboxWrapper-7"
                  id="checkbox-2"
                  form={{
                    type: "checkbox-input",
                    name: "Checkbox 2",
                  }}
                  inputType="custom"
                  customClassName="w-checkbox-input--inputType-custom"
                />
                <_Builtin.FormInlineLabel>
                  {"Checkbox"}
                </_Builtin.FormInlineLabel>
              </_Builtin.FormCheckboxWrapper>
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
              <_Builtin.DOM tag="label" slot="">
                <_Builtin.DOM
                  className="popup_form_checkbox"
                  tag="input"
                  slot=""
                  type="checkbox"
                  name="62743459"
                  value="62743459"
                />
                {
                  "<p>Yes, I agree to receive marketing emails and calls in line with Visual Layer’s privacy policy.<br><br></p>"
                }
              </_Builtin.DOM>
              <_Builtin.DOM tag="label" slot="">
                <_Builtin.DOM
                  className="popup_form_checkbox"
                  tag="input"
                  slot=""
                  type="checkbox"
                  name="76731112"
                  value="76731112"
                />
                {"<p>Subscribe me to the Visual Layer newsletter.</p>"}
              </_Builtin.DOM>
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage>
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
          <_Builtin.Block className="is-pp-ty-none" tag="div">
            {
              "For information about how Visual Layer handles your personal data, please see our "
            }
            <_Builtin.Link
              className="is-link-span"
              button={false}
              block=""
              options={{
                href: "#",
                target: "_blank",
              }}
            >
              {"Privacy Policy."}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="popup_close-button"
          id="w-node-_841d7134-a336-f034-acc5-1025f7017280-f7017243"
          data-w-id="841d7134-a336-f034-acc5-1025f7017280"
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
