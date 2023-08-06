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

// src/tailwind.tsx
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import htmlParser, {
  attributesToProps,
  domToReact,
  Element
} from "html-react-parser";
import { tailwindToCSS } from "tw-to-css";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Tailwind = ({ children, config }) => {
  const { twi } = tailwindToCSS({
    config
  });
  const newChildren = React.Children.toArray(children);
  const fullHTML = renderToStaticMarkup(/* @__PURE__ */ jsx(Fragment, { children: newChildren }));
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
    const html = renderToStaticMarkup(child);
    const parsedHTML = htmlParser(html, {
      replace: (domNode) => {
        var _a;
        if (domNode instanceof Element) {
          if (hasResponsiveStyles && hasHead && domNode.name === "head") {
            let newDomNode = null;
            if (domNode.children) {
              const props = attributesToProps(domNode.attribs);
              newDomNode = /* @__PURE__ */ jsxs("head", __spreadProps(__spreadValues({}, props), { children: [
                domToReact(domNode.children),
                /* @__PURE__ */ jsx("style", { children: headStyle })
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
  return /* @__PURE__ */ jsx(Fragment, { children: reactHTML });
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
export {
  Tailwind
};
