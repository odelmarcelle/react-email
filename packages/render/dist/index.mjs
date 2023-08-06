var __knownSymbol = (name, symbol) => {
  if (symbol = Symbol[name])
    return symbol;
  throw Error("Symbol." + name + " is not defined");
};
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

// src/render.ts
import * as ReactDomServer from "react-dom/server";
import { convert } from "html-to-text";
import pretty from "pretty";
var render = (component, options) => {
  if (options == null ? void 0 : options.plainText) {
    return renderAsPlainText(component, options);
  }
  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  const markup = ReactDomServer.renderToStaticMarkup(component);
  const document = `${doctype}${markup}`;
  if (options && options.pretty) {
    return pretty(document);
  }
  return document;
};
var renderAsPlainText = (component, _options) => {
  return convert(ReactDomServer.renderToStaticMarkup(component), {
    selectors: [
      { selector: "img", format: "skip" },
      { selector: "#__react-email-preview", format: "skip" }
    ]
  });
};

// src/renderAsync.ts
import { convert as convert2 } from "html-to-text";
import pretty2 from "pretty";
import { renderToReadableStream, renderToStaticMarkup as renderToStaticMarkup2 } from "react-dom/server";
function renderToString(children) {
  return __async(this, null, function* () {
    const stream = yield renderToReadableStream(children);
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
  const markup = typeof renderToStaticMarkup2 === "undefined" ? yield renderToString(component) : renderToStaticMarkup2(component);
  if (options == null ? void 0 : options.plainText) {
    return convert2(markup, {
      selectors: [
        { selector: "img", format: "skip" },
        { selector: "#__react-email-preview", format: "skip" }
      ]
    });
  }
  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  const document = `${doctype}${markup}`;
  if (options == null ? void 0 : options.pretty) {
    return pretty2(document);
  }
  return document;
});
export {
  render,
  renderAsync
};
