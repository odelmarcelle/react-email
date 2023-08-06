var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/button.tsx
import * as React from "react";

// src/utils/px-to-pt.ts
var pxToPt = (px) => isNaN(Number(px)) ? null : parseInt(px, 10) * 3 / 4;

// src/button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = React.forwardRef(
  (_a, forwardedRef) => {
    var _b = _a, { children, style, pX = 0, pY = 0, target = "_blank" } = _b, props = __objRest(_b, ["children", "style", "pX", "pY", "target"]);
    const y = (pY || 0) * 2;
    const textRaise = pxToPt(y.toString());
    return /* @__PURE__ */ jsxs(
      "a",
      __spreadProps(__spreadValues({}, props), {
        ref: forwardedRef,
        "data-id": "react-email-button",
        target,
        style: buttonStyle(__spreadProps(__spreadValues({}, style), { pX, pY })),
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              dangerouslySetInnerHTML: {
                __html: `<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%;mso-text-raise:${textRaise}" hidden>&nbsp;</i><![endif]-->`
              }
            }
          ),
          /* @__PURE__ */ jsx("span", { style: buttonTextStyle(pY), children }),
          /* @__PURE__ */ jsx(
            "span",
            {
              dangerouslySetInnerHTML: {
                __html: `<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]-->`
              }
            }
          )
        ]
      })
    );
  }
);
Button.displayName = "Button";
var buttonStyle = (style) => {
  const _a = style || {}, { pY, pX } = _a, rest = __objRest(_a, ["pY", "pX"]);
  return __spreadProps(__spreadValues({}, rest), {
    lineHeight: "100%",
    textDecoration: "none",
    display: "inline-block",
    maxWidth: "100%",
    padding: `${pY}px ${pX}px`
  });
};
var buttonTextStyle = (pY) => {
  const paddingY = pY || 0;
  return {
    maxWidth: "100%",
    display: "inline-block",
    lineHeight: "120%",
    msoPaddingAlt: "0px",
    msoTextRaise: pxToPt(paddingY.toString())
  };
};
export {
  Button
};
