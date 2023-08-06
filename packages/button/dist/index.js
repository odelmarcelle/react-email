"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);

// src/button.tsx
var React = __toESM(require("react"));

// src/utils/px-to-pt.ts
var pxToPt = (px) => isNaN(Number(px)) ? null : parseInt(px, 10) * 3 / 4;

// src/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = React.forwardRef(
  (_a, forwardedRef) => {
    var _b = _a, { children, style, pX = 0, pY = 0, target = "_blank" } = _b, props = __objRest(_b, ["children", "style", "pX", "pY", "target"]);
    const y = (pY || 0) * 2;
    const textRaise = pxToPt(y.toString());
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "a",
      __spreadProps(__spreadValues({}, props), {
        ref: forwardedRef,
        "data-id": "react-email-button",
        target,
        style: buttonStyle(__spreadProps(__spreadValues({}, style), { pX, pY })),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "span",
            {
              dangerouslySetInnerHTML: {
                __html: `<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%;mso-text-raise:${textRaise}" hidden>&nbsp;</i><![endif]-->`
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: buttonTextStyle(pY), children }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
