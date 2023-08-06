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
  Tailwind: () => Tailwind
});
module.exports = __toCommonJS(src_exports);

// src/tailwind.tsx
var React = __toESM(require("react"));
var import_server = require("react-dom/server");
var import_html_react_parser = __toESM(require("html-react-parser"));
var import_tw_to_css = require("tw-to-css");
var import_jsx_runtime = require("react/jsx-runtime");
var Tailwind = ({ children, config }) => {
  const { twi } = (0, import_tw_to_css.tailwindToCSS)({
    config
  });
  const newChildren = React.Children.toArray(children);
  const fullHTML = (0, import_server.renderToStaticMarkup)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: newChildren }));
  const tailwindCss = twi(fullHTML, {
    merge: false,
    ignoreMediaQueries: false
  });
  const css = cleanCss(tailwindCss);
  const cssMap = makeCssMap(css);
  const headStyle = getMediaQueryCss(css);
  const hasResponsiveStyles = new RegExp("@media[^{]+\\{(?<content>[\\s\\S]+?)\\}\\s*\\}", "gm").test(
    headStyle
  );
  const hasHTML = /<html[^>]*>/gm.test(fullHTML);
  const hasHead = /<head[^>]*>/gm.test(fullHTML);
  if (hasResponsiveStyles && (!hasHTML || !hasHead)) {
    throw new Error(
      "Tailwind: To use responsive styles you must have a <html> and <head> element in your template."
    );
  }
  const reactHTML = React.Children.map(newChildren, (child) => {
    if (!React.isValidElement(child))
      return child;
    const html = (0, import_server.renderToStaticMarkup)(child);
    const parsedHTML = (0, import_html_react_parser.default)(html, {
      replace: (domNode) => {
        var _a;
        if (domNode instanceof import_html_react_parser.Element) {
          if (hasResponsiveStyles && hasHead && domNode.name === "head") {
            let newDomNode = null;
            if (domNode.children) {
              const props = (0, import_html_react_parser.attributesToProps)(domNode.attribs);
              newDomNode = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", __spreadProps(__spreadValues({}, props), { children: [
                (0, import_html_react_parser.domToReact)(domNode.children),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: headStyle })
              ] }));
            }
            return newDomNode;
          }
          if ((_a = domNode.attribs) == null ? void 0 : _a.class) {
            const cleanRegex = /[:#\!\-[\]\/\.%]+/g;
            const cleanTailwindClasses = domNode.attribs.class.replace(cleanRegex, "_");
            const currentStyles = domNode.attribs.style ? `${domNode.attribs.style};` : "";
            const tailwindStyles = cleanTailwindClasses.split(" ").map((className) => {
              return cssMap[`.${className}`];
            }).join(";");
            domNode.attribs.style = `${currentStyles} ${tailwindStyles}`;
            domNode.attribs.class = domNode.attribs.class.split(" ").filter((className) => className.search(/^.{2}:/) !== -1).join(" ").replace(cleanRegex, "_");
            if (domNode.attribs.class === "")
              delete domNode.attribs.class;
          }
        }
      }
    });
    return parsedHTML;
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: reactHTML });
};
Tailwind.displayName = "Tailwind";
function cleanCss(css) {
  let newCss = css.replace(/\\/g, "").replace(/[.\!\#\w\d\\:\-\[\]\/\.%\(\))]+(?=\s*?{[^{]*?\})\s*?{/g, (m) => {
    return m.replace(new RegExp("(?<=.)[:#\\!\\-[\\\\\\]\\/\\.%]+", "g"), "_");
  }).replace(new RegExp("font-family(?<value>[^;\\r\\n]+)", "g"), (m, value) => {
    return `font-family${value.replace(/['"]+/g, "")}`;
  });
  return newCss;
}
function getMediaQueryCss(css) {
  var _a, _b;
  const mediaQueryRegex = new RegExp("@media[^{]+\\{(?<content>[\\s\\S]+?)\\}\\s*\\}", "gm");
  return (_b = (_a = css.replace(mediaQueryRegex, (m) => {
    return m.replace(
      /([^{]+\{)([\s\S]+?)(\}\s*\})/gm,
      (_, start, content, end) => {
        const newContent = content.replace(
          new RegExp("(?:[\\s\\r\\n]*)?(?<prop>[\\w-]+)\\s*:\\s*(?<value>[^};\\r\\n]+)", "gm"),
          (_2, prop, value) => {
            return `${prop}: ${value} !important;`;
          }
        );
        return `${start}${newContent}${end}`;
      }
    );
  }).match(/@media\s*([^{]+)\{([^{}]*\{[^{}]*\})*[^{}]*\}/g)) == null ? void 0 : _a.join("")) != null ? _b : "";
}
function makeCssMap(css) {
  const cssNoMedia = css.replace(
    new RegExp("@media[^{]+\\{(?<content>[\\s\\S]+?)\\}\\s*\\}", "gm"),
    ""
  );
  const cssMap = cssNoMedia.split("}").reduce(
    (acc, cur) => {
      const [key, value] = cur.split("{");
      if (key && value) {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );
  return cssMap;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tailwind
});
