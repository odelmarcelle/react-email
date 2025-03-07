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

// src/preview.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var PREVIEW_MAX_LENGTH = 150;
var Preview = React.forwardRef(
  (_a, forwardedRef) => {
    var _b = _a, { children = "" } = _b, props = __objRest(_b, ["children"]);
    let text = Array.isArray(children) ? children.join("") : children;
    text = text.substr(0, PREVIEW_MAX_LENGTH);
    return /* @__PURE__ */ jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref: forwardedRef,
        id: "__react-email-preview",
        style: {
          display: "none",
          overflow: "hidden",
          lineHeight: "1px",
          opacity: 0,
          maxHeight: 0,
          maxWidth: 0
        }
      }, props), {
        children: [
          text,
          renderWhiteSpace(text)
        ]
      })
    );
  }
);
var renderWhiteSpace = (text) => {
  if (text.length >= PREVIEW_MAX_LENGTH) {
    return null;
  }
  const whiteSpaceCodes = "\xA0\u200C\u200B\u200D\u200E\u200F\uFEFF";
  return /* @__PURE__ */ jsx("div", { children: whiteSpaceCodes.repeat(PREVIEW_MAX_LENGTH - text.length) });
};
Preview.displayName = "Preview";
export {
  Preview
};
