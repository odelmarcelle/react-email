"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, require("@react-email/body"), module.exports);
__reExport(src_exports, require("@react-email/button"), module.exports);
__reExport(src_exports, require("@react-email/column"), module.exports);
__reExport(src_exports, require("@react-email/container"), module.exports);
__reExport(src_exports, require("@react-email/font"), module.exports);
__reExport(src_exports, require("@react-email/head"), module.exports);
__reExport(src_exports, require("@react-email/heading"), module.exports);
__reExport(src_exports, require("@react-email/hr"), module.exports);
__reExport(src_exports, require("@react-email/html"), module.exports);
__reExport(src_exports, require("@react-email/img"), module.exports);
__reExport(src_exports, require("@react-email/link"), module.exports);
__reExport(src_exports, require("@react-email/preview"), module.exports);
__reExport(src_exports, require("@react-email/render"), module.exports);
__reExport(src_exports, require("@react-email/row"), module.exports);
__reExport(src_exports, require("@react-email/section"), module.exports);
__reExport(src_exports, require("@react-email/tailwind"), module.exports);
__reExport(src_exports, require("@react-email/text"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("@react-email/body"),
  ...require("@react-email/button"),
  ...require("@react-email/column"),
  ...require("@react-email/container"),
  ...require("@react-email/font"),
  ...require("@react-email/head"),
  ...require("@react-email/heading"),
  ...require("@react-email/hr"),
  ...require("@react-email/html"),
  ...require("@react-email/img"),
  ...require("@react-email/link"),
  ...require("@react-email/preview"),
  ...require("@react-email/render"),
  ...require("@react-email/row"),
  ...require("@react-email/section"),
  ...require("@react-email/tailwind"),
  ...require("@react-email/text")
});
