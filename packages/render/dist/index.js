"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => {
  if (symbol = Symbol[name])
    return symbol;
  throw Error("Symbol." + name + " is not defined");
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  render: () => render,
  renderAsync: () => renderAsync
});
module.exports = __toCommonJS(src_exports);

// src/render.ts
var ReactDomServer = __toESM(require("react-dom/server"));
var import_html_to_text = require("html-to-text");
var import_pretty = __toESM(require("pretty"));
var render = (component, options) => {
  if (options == null ? void 0 : options.plainText) {
    return renderAsPlainText(component, options);
  }
  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  const markup = ReactDomServer.renderToStaticMarkup(component);
  const document = `${doctype}${markup}`;
  if (options && options.pretty) {
    return (0, import_pretty.default)(document);
  }
  return document;
};
var renderAsPlainText = (component, _options) => {
  return (0, import_html_to_text.convert)(ReactDomServer.renderToStaticMarkup(component), {
    selectors: [
      { selector: "img", format: "skip" },
      { selector: "#__react-email-preview", format: "skip" }
    ]
  });
};

// src/renderAsync.ts
var import_html_to_text2 = require("html-to-text");
var import_pretty2 = __toESM(require("pretty"));
var import_server = require("react-dom/server");
function renderToString(children) {
  return __async(this, null, function* () {
    const stream = yield (0, import_server.renderToReadableStream)(children);
    const html = yield readableStreamToString(
      // ReactDOMServerReadableStream behaves like ReadableStream
      // in modern edge runtimes but the types are not compatible
      stream
    );
    return html.replace(/^<!DOCTYPE html>/, "").replace(/<!-- -->/g, "");
  });
}
function readableStreamToString(readableStream) {
  return __async(this, null, function* () {
    let result = "";
    const decoder = new TextDecoder();
    try {
      for (var iter = __forAwait(readableStream), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        const chunk = temp.value;
        result += decoder.decode(chunk);
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
    return result;
  });
}
var renderAsync = (component, options) => __async(void 0, null, function* () {
  const markup = typeof import_server.renderToStaticMarkup === "undefined" ? yield renderToString(component) : (0, import_server.renderToStaticMarkup)(component);
  if (options == null ? void 0 : options.plainText) {
    return (0, import_html_to_text2.convert)(markup, {
      selectors: [
        { selector: "img", format: "skip" },
        { selector: "#__react-email-preview", format: "skip" }
      ]
    });
  }
  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  const document = `${doctype}${markup}`;
  if (options == null ? void 0 : options.pretty) {
    return (0, import_pretty2.default)(document);
  }
  return document;
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  render,
  renderAsync
});
