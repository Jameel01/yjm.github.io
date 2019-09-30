(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{298:function(s,a,t){"use strict";t.r(a);var n=t(0),v=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"正则表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式","aria-hidden":"true"}},[s._v("#")]),s._v(" 正则表达式")]),s._v(" "),t("p",[s._v("正则表达式经常被用于字段或任意字符串的校验，如下面这段校验基本日期格式的JavaScript代码：")]),s._v(" "),t("pre",{staticClass:"hljs javascript"},[t("code",{staticClass:"javascript"},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" reg = "),t("span",{staticClass:"hljs-regexp"},[s._v("/^(\\\\d{1,4})(-|\\\\/")]),s._v(")(\\\\d{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("})\\\\"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("(\\\\d{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("})$/; \n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" r = fieldValue.match(reg);             \n"),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(r=="),t("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(")alert("),t("span",{staticClass:"hljs-string"},[s._v("'Date format error!'")]),s._v(");           \n")])]),s._v(" "),t("p",[s._v("下面是"),t("strong",[s._v("技匠")]),s._v("整理的，在前端开发中经常使用到的"),t("strong",[s._v("20")]),s._v("个正则表达式。")]),s._v(" "),t("hr"),s._v(" "),t("h4",[t("strong",[s._v("1 . 校验密码强度")])]),s._v(" "),t("p",[s._v("密码的强度必须是包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间。")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("^(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{"),t("span",{staticClass:"hljs-number"},[s._v("8")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("}$\n")])]),s._v(" "),t("h4",[t("strong",[s._v("2. 校验中文")])]),s._v(" "),t("p",[s._v("字符串仅能是中文。")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("^[\\\\u4e0"),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-\\\\u9fa5]{"),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",}$\n")])]),s._v(" "),t("h4",[t("strong",[s._v("3. 由数字、26个英文字母或下划线组成的字符串")])]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("^\\\\w+$\n")])]),s._v(" "),t("h4",[t("strong",[s._v("4. 校验E-Mail 地址")])]),s._v(" "),t("p",[s._v("同密码一样，下面是E-mail地址合规性的正则检查语句。")]),s._v(" "),t("pre",{staticClass:"hljs bash"},[t("code",{staticClass:"bash"},[s._v("[\\\\w!"),t("span",{staticClass:"hljs-comment"},[s._v("#$%&'*+/=?^_`{|}~-]+(?:\\\\.[\\\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\\\w](?:[\\\\w-]*[\\\\w])?\\\\.)+[\\\\w](?:[\\\\w-]*[\\\\w])?")]),s._v("\n")])]),s._v(" "),t("h4",[t("strong",[s._v("5. 校验身份证号码")])]),s._v(" "),t("p",[s._v("下面是身份证号码的正则校验。15 或 18位。")]),s._v(" "),t("p",[s._v("15位：")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("^["),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]\\\\d{"),t("span",{staticClass:"hljs-number"},[s._v("7")]),s._v("}(("),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\\\\d)"),t("span",{staticClass:"hljs-params"},[s._v("|(1[0-2]))(([0|")]),t("span",{staticClass:"hljs-number"},[s._v("1")]),t("span",{staticClass:"hljs-params"},[s._v("|2]\\\\d)|")]),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("])\\\\d{"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("}$\n")])]),s._v(" "),t("p",[s._v("18位：")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("^["),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]\\\\d{"),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("}["),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]\\\\d{"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("}(("),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\\\\d)"),t("span",{staticClass:"hljs-params"},[s._v("|(1[0-2]))(([0|")]),t("span",{staticClass:"hljs-number"},[s._v("1")]),t("span",{staticClass:"hljs-params"},[s._v("|2]\\\\d)|")]),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("])\\\\d{"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("}(["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|X)$\n")])])]),s._v(" "),t("h4",[t("strong",[s._v("6. 校验日期")])]),s._v(" "),t("p",[s._v("“yyyy-mm-dd“ 格式的日期校验，已考虑平闰年。")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("^(?"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("(?!"),t("span",{staticClass:"hljs-number"},[s._v("0000")]),s._v(")["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]{"),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}-(?"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("(?:"),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|1[0-2])-(?:0[1-9]|")]),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|2[0-8])|")]),s._v("(?:"),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("13")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|1[0-2])-(?:29|")]),t("span",{staticClass:"hljs-number"},[s._v("30")]),s._v(")"),t("span",{staticClass:"hljs-params"},[s._v("|(?:0[13578]|")]),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("02")]),s._v("])-"),t("span",{staticClass:"hljs-number"},[s._v("31")]),s._v(")"),t("span",{staticClass:"hljs-params"},[s._v("|(?:[0-9]{2}(?:0[48]|")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("2468")]),s._v("]["),t("span",{staticClass:"hljs-number"},[s._v("04")]),s._v("8]"),t("span",{staticClass:"hljs-params"},[s._v("|[13579][26])|")]),s._v("(?:"),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("48")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|[2468][048]|")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("13579")]),s._v("]["),t("span",{staticClass:"hljs-number"},[s._v("26")]),s._v("])"),t("span",{staticClass:"hljs-number"},[s._v("00")]),s._v(")-"),t("span",{staticClass:"hljs-number"},[s._v("02")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("29")]),s._v(")$\n")])]),s._v(" "),t("h4",[t("strong",[s._v("7. 校验金额")])]),s._v(" "),t("p",[s._v("金额校验，精确到2位小数。")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("^["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]+(.["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]{"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("})?$\n")])]),s._v(" "),t("h4",[t("strong",[s._v("8. 校验手机号")])]),s._v(" "),t("p",[s._v("下面是国内 13、15、18开头的手机号正则表达式。（可根据目前国内收集号扩展前两位开头号码）")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("^("),t("span",{staticClass:"hljs-number"},[s._v("13")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|14[5|")]),t("span",{staticClass:"hljs-number"},[s._v("7")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|15[0|")]),t("span",{staticClass:"hljs-number"},[s._v("1")]),t("span",{staticClass:"hljs-params"},[s._v("|2|")]),t("span",{staticClass:"hljs-number"},[s._v("3")]),t("span",{staticClass:"hljs-params"},[s._v("|5|")]),t("span",{staticClass:"hljs-number"},[s._v("6")]),t("span",{staticClass:"hljs-params"},[s._v("|7|")]),t("span",{staticClass:"hljs-number"},[s._v("8")]),t("span",{staticClass:"hljs-params"},[s._v("|9]|")]),t("span",{staticClass:"hljs-number"},[s._v("18")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),t("span",{staticClass:"hljs-params"},[s._v("|1|")]),t("span",{staticClass:"hljs-number"},[s._v("2")]),t("span",{staticClass:"hljs-params"},[s._v("|3|")]),t("span",{staticClass:"hljs-number"},[s._v("5")]),t("span",{staticClass:"hljs-params"},[s._v("|6|")]),t("span",{staticClass:"hljs-number"},[s._v("7")]),t("span",{staticClass:"hljs-params"},[s._v("|8|")]),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("])\\\\d{"),t("span",{staticClass:"hljs-number"},[s._v("8")]),s._v("}$\n")])]),s._v(" "),t("h4",[t("strong",[s._v("9. 判断IE的版本")])]),s._v(" "),t("p",[s._v("IE目前还没被完全取代，很多页面还是需要做版本兼容，下面是IE版本检查的表达式。")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("^.*MSIE ["),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("8")]),s._v("](?"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("\\\\.["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]+)?(?!.*Trident\\\\/["),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]\\\\."),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(").*$\n")])]),s._v(" "),t("h4",[t("strong",[s._v("10. 校验IP-v4地址")])]),s._v(" "),t("p",[s._v("IP4 正则语句。")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("\\\\b(?"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("(?:"),t("span",{staticClass:"hljs-number"},[s._v("25")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|2[0-4][0-9]|")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("01")]),s._v("]?["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]?)\\\\.){"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("}(?:"),t("span",{staticClass:"hljs-number"},[s._v("25")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|2[0-4][0-9]|")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("01")]),s._v("]?["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]?)\\\\b\n")])]),s._v(" "),t("h4",[t("strong",[s._v("11. 校验IP-v6地址")])]),s._v(" "),t("p",[s._v("IP6 正则语句。")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("((["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("a-fA-F]{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("){"),t("span",{staticClass:"hljs-number"},[s._v("7")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("7")]),s._v("}["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("a-fA-F]{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}"),t("span",{staticClass:"hljs-params"},[s._v("|([0-9a-fA-F]{1,4}:){1,7}:|")]),s._v("(["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("a-fA-F]{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("){"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("6")]),s._v("}"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("a-fA-F]{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}"),t("span",{staticClass:"hljs-params"},[s._v("|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|")]),s._v("(["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("a-fA-F]{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("){"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}("),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("a-fA-F]{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}){"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("}"),t("span",{staticClass:"hljs-params"},[s._v("|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|")]),s._v("(["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("a-fA-F]{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("){"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("}("),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("a-fA-F]{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}){"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("}"),t("span",{staticClass:"hljs-params"},[s._v("|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|")]),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("(("),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("a-fA-F]{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}){"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("7")]),s._v("}"),t("span",{staticClass:"hljs-params"},[s._v("|:)|")]),t("span",{staticClass:"hljs-symbol"},[s._v("fe80:")]),s._v("("),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("a-fA-F]{"),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}){"),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}"),t("span",{staticClass:"hljs-string"},[s._v("%[0-9a-zA-Z]")]),s._v("{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(",}"),t("span",{staticClass:"hljs-params"},[s._v("|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|")]),s._v("("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|")]),s._v("("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|1{0,1}[0-9]){0,1}[0-9])|")]),s._v("(["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("a-fA-F]{"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("){"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("}"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("(("),t("span",{staticClass:"hljs-number"},[s._v("25")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|(2[0-4]|")]),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("{"),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("}["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]){"),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("}["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("])\\\\.){"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("}("),t("span",{staticClass:"hljs-number"},[s._v("25")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("]"),t("span",{staticClass:"hljs-params"},[s._v("|(2[0-4]|")]),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("{"),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("}["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]){"),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("}["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("-"),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v("]))\n")])]),s._v(" "),t("h4",[t("strong",[s._v("12. 检查URL的前缀")])]),s._v(" "),t("p",[s._v("应用开发中很多时候需要区分请求是HTTPS还是HTTP，通过下面的表达式可以取出一个url的前缀然后再逻辑判断。")]),s._v(" "),t("pre",{staticClass:"hljs javascript"},[t("code",{staticClass:"javascript"},[t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!s.match("),t("span",{staticClass:"hljs-regexp"},[s._v("/^[a-zA-Z]+:\\\\/")]),s._v("\\\\"),t("span",{staticClass:"hljs-comment"},[s._v("//))")]),s._v("\n{\n    s = "),t("span",{staticClass:"hljs-string"},[s._v("'http://'")]),s._v(" + s;\n}\n")])]),s._v(" "),t("h4",[t("strong",[s._v("13. 提取URL链接")])]),s._v(" "),t("p",[s._v("下面的这个表达式可以筛选出一段文本中的URL。")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("^(f"),t("span",{staticClass:"hljs-params"},[s._v("|ht){1}(tp|")]),s._v("tps)"),t("span",{staticClass:"hljs-symbol"},[s._v(":")]),s._v("\\\\/\\\\/([\\\\w-]+\\\\.)+[\\\\w-]+(\\\\/[\\\\w- ./?%&=]*)?\n")])]),s._v(" "),t("h4",[t("strong",[s._v("14. 文件路径及扩展名校验")])]),s._v(" "),t("p",[s._v("验证windows下文件路径和扩展名（下面的例子中为.txt文件）")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("^([a-zA-Z]\\\\"),t("span",{staticClass:"hljs-symbol"},[s._v(":|")]),s._v("\\\\\\\\)\\\\\\\\([^\\\\\\\\]+\\\\\\\\)*[^\\\\/"),t("span",{staticClass:"hljs-symbol"},[s._v(":*")]),s._v("?"),t("span",{staticClass:"hljs-string"},[s._v('"<>|]+\\\\.txt(l)?$\n')])])]),s._v(" "),t("h4",[t("strong",[s._v("15. 提取Color Hex  Codes")])]),s._v(" "),t("p",[s._v("有时需要抽取网页中的颜色代码，可以使用下面的表达式。")]),s._v(" "),t("pre",{staticClass:"hljs bash"},[t("code",{staticClass:"bash"},[s._v("^"),t("span",{staticClass:"hljs-comment"},[s._v("#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")]),s._v("\n")])]),s._v(" "),t("h4",[t("strong",[s._v("16. 提取网页图片")])]),s._v(" "),t("p",[s._v("假若你想提取网页中所有图片信息，可以利用下面的表达式。")]),s._v(" "),t("pre",{staticClass:"hljs bash"},[t("code",{staticClass:"bash"},[s._v("\\\\< *[img][^\\\\\\\\>]*[src] *= *[\\\\"),t("span",{staticClass:"hljs-string"},[s._v('"\\\\\']{0,1}([^\\\\"')]),s._v("\\\\"),t("span",{staticClass:"hljs-string"},[s._v("'\\\\ >]*)\n")])])]),s._v(" "),t("h4",[t("strong",[s._v("17. 提取页面超链接")])]),s._v(" "),t("p",[s._v("提取html中的超链接。")]),s._v(" "),t("pre",{staticClass:"hljs bash"},[t("code",{staticClass:"bash"},[s._v("(<a\\\\s*(?!.*\\\\brel=)[^>]*)(href="),t("span",{staticClass:"hljs-string"},[s._v("\"https?:\\\\/\\\\/)((?!(?:(?:www\\\\.)?'.implode('|(?:www\\\\.)?', "),t("span",{staticClass:"hljs-variable"},[s._v("$follow_list")]),s._v(").'))[^\"")]),s._v("]+)"),t("span",{staticClass:"hljs-string"},[s._v('"((?!.*\\\\brel=)[^>]*)(?:[^>]*)>\n')])])]),s._v(" "),t("h4",[t("strong",[s._v("18. 查找CSS属性")])]),s._v(" "),t("p",[s._v("通过下面的表达式，可以搜索到相匹配的CSS属性。")]),s._v(" "),t("pre",{staticClass:"hljs bash"},[t("code",{staticClass:"bash"},[s._v("^\\\\s*[a-zA-Z\\\\-]+\\\\s*[:]{1}\\\\s[a-zA-Z0-9\\\\s."),t("span",{staticClass:"hljs-comment"},[s._v("#]+[;]{1}")]),s._v("\n")])]),s._v(" "),t("h4",[t("strong",[s._v("19. 抽取注释")])]),s._v(" "),t("p",[s._v("如果你需要移除HMTL中的注释，可以使用如下的表达式。")]),s._v(" "),t("pre",{staticClass:"hljs xml"},[t("code",{staticClass:"xml"},[t("span",{staticClass:"hljs-comment"},[s._v("\x3c!--(.*?)--\x3e")]),s._v("\n")])]),s._v(" "),t("h4",[t("strong",[s._v("20. 匹配HTML标签")])]),s._v(" "),t("p",[s._v("通过下面的表达式可以匹配出HTML中的标签属性。")]),s._v(" "),t("pre",{staticClass:"hljs ruby"},[t("code",{staticClass:"ruby"},[s._v("<\\\\/?\\\\w+((\\\\s+\\\\w+(\\\\s*=\\\\s*(?"),t("span",{staticClass:"hljs-symbol"},[s._v(":"),t("span",{staticClass:"hljs-string"},[s._v('".*?"')]),s._v("|"),t("span",{staticClass:"hljs-string"},[s._v("'.*?'")]),s._v("|")]),s._v("[\\\\^"),t("span",{staticClass:"hljs-string"},[s._v("'\">\\\\s]+))?)+\\\\s*|\\\\s*)\\\\/?>\n")])])]),s._v(" "),t("hr"),s._v(" "),t("h4",{attrs:{id:"_21-脱敏处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_21-脱敏处理","aria-hidden":"true"}},[s._v("#")]),s._v(" 21.脱敏处理")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("\nfilters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//脱敏处理")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("encrypt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/(\\d{3})\\d*(\\d{4})/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$1********$2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n")])])]),t("h4",{attrs:{id:"_22-地址解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_22-地址解析","aria-hidden":"true"}},[s._v("#")]),s._v(" 22.地址解析")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 解析一个url并生成window.location对象中包含的域\n * location:\n * {\n *      href: '包含完整的url',\n *      origin: '包含协议到pathname之前的内容',\n *      protocol: 'url使用的协议，包含末尾的:',\n *      username: '用户名', // 暂时不支持\n *      password: '密码',  // 暂时不支持\n *      host: '完整主机名，包含:和端口',\n *      hostname: '主机名，不包含端口'\n *      port: '端口号',\n *      pathname: '服务器上访问资源的路径/开头',\n *      search: 'query string，?开头',\n *      hash: '#开头的fragment identifier'\n * }\n *\n * @param {string} url 需要解析的url\n * @return {Object} 包含url信息的对象\n */")]),s._v("\n \n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseUrl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" location"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("href"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" keys "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'href'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'origin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'protocol'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'host'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hostname'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'port'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pathname'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'search'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hash'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" regexp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/(([^:]+:)\\/\\/(([^:\\/\\?#]+)(:\\d+)?))(\\/[^?#]*)?(\\?[^#]*)?(#.*)?/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" match "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" regexp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'match='")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" match"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("match"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" match"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" match"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result='")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"允许多位数-15-17-18-20位，字母-数字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#允许多位数-15-17-18-20位，字母-数字","aria-hidden":"true"}},[s._v("#")]),s._v(" 允许多位数 15|17|18|20位，字母+数字")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/^(^[\\da-zA-Z]{15}$)|(^[\\da-zA-Z]{17}$)|(^[\\da-zA-Z]{18}$)|(^[\\da-zA-Z]{20}$)$/\n")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);