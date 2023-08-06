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

// src/container.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Container = React.forwardRef((_a, forwardedRef) => {
  var _b = _a, { children, style } = _b, props = __objRest(_b, ["children", "style"]);
  return /* @__PURE__ */ jsx(
    "table",
    __spreadProps(__spreadValues({
      align: "center",
      width: "100%"
    }, props), {
      ref: forwardedRef,
      "data-id": "__react-email-container",
      role: "presentation",
      cellSpacing: "0",
      cellPadding: "0",
      border: 0,
      style: __spreadValues({ maxWidth: "37.5em" }, style),
      children: /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", { style: { width: "100%" }, children: /* @__PURE__ */ jsx("td", { children }) }) })
    })
  );
});
Container.displayName = "Container";
export {
  Container
};
