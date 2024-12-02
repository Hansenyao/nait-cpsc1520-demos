// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iPmjX":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"bDbGG":[function(require,module,exports,__globalThis) {
/*
    1. Observe and Collapse the getAllBooks method.
    2. create the renderBooks method which renders the books in the table.
    Sample HTML for render books.
    <tr>
      <td>Insert book id here</td>
      <td>Insert Title here</td>
      <td>Insert Author here</td>
      <td>Insert Rating here</td>
      <td>Insert Number Of Ratings here</td>
    </tr>
    3. select the table body, select the form and call the two function from the
    previous steps. This should show in the table.

    //We won't be covering the parts below for this exercise
    4. create the getAuthors function and present the authors array step by step.
      - use map to display the authors
      - use filter to get distinct authors
      - present sort as a function on an array to show you can sort things!
   
      5. create the function renderAuthorOptions to add the options to the select.

    6. add the event listener to the form.
    7. get the form values.
    8. create the getBooksFilter function with 3 params: filterQuery, objectkey, and booklist
      - this is going to fiter out based on a given key.
    9. in your event handler:
      - get books.
      - pass the subset into a filter
      - render the booklist
*/ /*
Sample object in the array of books returned from getAllBooks:
{"bookId":1,
  "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
  "author": "J.K. Rowling/Mary GrandPrÃ©",
  "rating":4.57,
  "isbn":"439785960",
  "language":"eng",
  "numberOfRatings": 652}
*/ // importing bootstrap
var _bootstrapMinCss = require("bootstrap/dist/css/bootstrap.min.css");
// import getAllBooks
var _booksJs = require("../data/books.js");
let booksArray = (0, _booksJs.getAllBooks)();
console.log(booksArray);
const renderBooks = (books)=>{
    let elem = document.querySelector("#book-rows");
    elem.innerHTML = "";
    books.forEach((book)=>{
        elem.innerHTML += `
      <tr>
        <td>${book.bookId}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.rating}</td>
        <td>${book.numberOfRatings}</td>
      </tr>`;
    });
};
renderBooks(booksArray);

},{"bootstrap/dist/css/bootstrap.min.css":"i5LP7","../data/books.js":"jOHND"}],"i5LP7":[function() {},{}],"jOHND":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAllBooks", ()=>getAllBooks);
const getAllBooks = ()=>{
    return [
        {
            "bookId": 1,
            "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
            "author": "J.K. Rowling/Mary GrandPr\xc3\xa9",
            "rating": 4.57,
            "isbn": "439785960",
            "language": "eng",
            "numberOfRatings": 652
        },
        {
            "bookId": 2,
            "title": "Harry Potter and the Order of the Phoenix (Harry Potter  #5)",
            "author": "J.K. Rowling/Mary GrandPr\xc3\xa9",
            "rating": 4.49,
            "isbn": "439358078",
            "language": "eng",
            "numberOfRatings": 870
        },
        {
            "bookId": 4,
            "title": "Harry Potter and the Chamber of Secrets (Harry Potter  #2)",
            "author": "J.K. Rowling",
            "rating": 4.42,
            "isbn": "439554896",
            "language": "eng",
            "numberOfRatings": 352
        },
        {
            "bookId": 5,
            "title": "Harry Potter and the Prisoner of Azkaban (Harry Potter  #3)",
            "author": "J.K. Rowling/Mary GrandPr\xc3\xa9",
            "rating": 4.56,
            "isbn": "043965548X",
            "language": "eng",
            "numberOfRatings": 435
        },
        {
            "bookId": 8,
            "title": "Harry Potter Boxed Set  Books 1-5 (Harry Potter  #1-5)",
            "author": "J.K. Rowling/Mary GrandPr\xc3\xa9",
            "rating": 4.78,
            "isbn": "439682584",
            "language": "eng",
            "numberOfRatings": 2690
        },
        {
            "bookId": 9,
            "title": "Unauthorized Harry Potter Book Seven News: 'Half-Blood Prince' Analysis and Speculation",
            "author": "W. Frederick Zimmerman",
            "rating": 3.74,
            "isbn": "976540606",
            "language": "en-US",
            "numberOfRatings": 152
        },
        {
            "bookId": 10,
            "title": "Harry Potter Collection (Harry Potter  #1-6)",
            "author": "J.K. Rowling",
            "rating": 4.73,
            "isbn": "439827604",
            "language": "eng",
            "numberOfRatings": 3342
        },
        {
            "bookId": 12,
            "title": "The Ultimate Hitchhiker's Guide: Five Complete Novels and One Story (Hitchhiker's Guide to the Galaxy  #1-5)",
            "author": "Douglas Adams",
            "rating": 4.38,
            "isbn": "517226952",
            "language": "eng",
            "numberOfRatings": 815
        },
        {
            "bookId": 13,
            "title": "The Ultimate Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1-5)",
            "author": "Douglas Adams",
            "rating": 4.38,
            "isbn": "345453743",
            "language": "eng",
            "numberOfRatings": 815
        },
        {
            "bookId": 14,
            "title": "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1)",
            "author": "Douglas Adams",
            "rating": 4.22,
            "isbn": "1400052920",
            "language": "eng",
            "numberOfRatings": 215
        },
        {
            "bookId": 16,
            "title": "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1)",
            "author": "Douglas Adams/Stephen Fry",
            "rating": 4.22,
            "isbn": "739322206",
            "language": "eng",
            "numberOfRatings": 6
        },
        {
            "bookId": 18,
            "title": "The Ultimate Hitchhiker's Guide (Hitchhiker's Guide to the Galaxy  #1-5)",
            "author": "Douglas Adams",
            "rating": 4.38,
            "isbn": "517149257",
            "language": "eng",
            "numberOfRatings": 815
        },
        {
            "bookId": 21,
            "title": "A Short History of Nearly Everything",
            "author": "Bill Bryson",
            "rating": 4.21,
            "isbn": "076790818X",
            "language": "eng",
            "numberOfRatings": 544
        },
        {
            "bookId": 22,
            "title": "Bill Bryson's African Diary",
            "author": "Bill Bryson",
            "rating": 3.44,
            "isbn": "767915062",
            "language": "eng",
            "numberOfRatings": 55
        },
        {
            "bookId": 23,
            "title": "Bryson's Dictionary of Troublesome Words: A Writer's Guide to Getting It Right",
            "author": "Bill Bryson",
            "rating": 3.87,
            "isbn": "767910435",
            "language": "eng",
            "numberOfRatings": 256
        },
        {
            "bookId": 24,
            "title": "In a Sunburned Country",
            "author": "Bill Bryson",
            "rating": 4.07,
            "isbn": "767903862",
            "language": "eng",
            "numberOfRatings": 335
        },
        {
            "bookId": 25,
            "title": "I'm a Stranger Here Myself: Notes on Returning to America After Twenty Years Away",
            "author": "Bill Bryson",
            "rating": 3.9,
            "isbn": "076790382X",
            "language": "eng",
            "numberOfRatings": 304
        },
        {
            "bookId": 26,
            "title": "The Lost Continent: Travels in Small Town America",
            "author": "Bill Bryson",
            "rating": 3.83,
            "isbn": "60920084",
            "language": "eng",
            "numberOfRatings": 299
        },
        {
            "bookId": 27,
            "title": "Neither Here nor There: Travels in Europe",
            "author": "Bill Bryson",
            "rating": 3.86,
            "isbn": "380713802",
            "language": "eng",
            "numberOfRatings": 254
        },
        {
            "bookId": 28,
            "title": "Notes from a Small Island",
            "author": "Bill Bryson",
            "rating": 3.91,
            "isbn": "380727501",
            "language": "eng",
            "numberOfRatings": 324
        },
        {
            "bookId": 29,
            "title": "The Mother Tongue: English and How It Got That Way",
            "author": "Bill Bryson",
            "rating": 3.93,
            "isbn": "380715430",
            "language": "eng",
            "numberOfRatings": 270
        },
        {
            "bookId": 30,
            "title": "J.R.R. Tolkien 4-Book Boxed Set: The Hobbit and The Lord of the Rings",
            "author": "J.R.R. Tolkien",
            "rating": 4.59,
            "isbn": "345538374",
            "language": "eng",
            "numberOfRatings": 1728
        },
        {
            "bookId": 31,
            "title": "The Lord of the Rings (The Lord of the Rings  #1-3)",
            "author": "J.R.R. Tolkien",
            "rating": 4.5,
            "isbn": "618517650",
            "language": "eng",
            "numberOfRatings": 1184
        },
        {
            "bookId": 34,
            "title": "The Fellowship of the Ring (The Lord of the Rings  #1)",
            "author": "J.R.R. Tolkien",
            "rating": 4.36,
            "isbn": "618346252",
            "language": "eng",
            "numberOfRatings": 398
        },
        {
            "bookId": 35,
            "title": "The Lord of the Rings (The Lord of the Rings  #1-3)",
            "author": "J.R.R. Tolkien/Alan  Lee",
            "rating": 4.5,
            "isbn": "618260587",
            "language": "en-US",
            "numberOfRatings": 1216
        },
        {
            "bookId": 36,
            "title": "The Lord of the Rings: Weapons and Warfare",
            "author": "Chris   Smith/Christopher  Lee/Richard Taylor",
            "rating": 4.53,
            "isbn": "618391002",
            "language": "eng",
            "numberOfRatings": 218
        },
        {
            "bookId": 37,
            "title": "The Lord of the Rings: Complete Visual Companion",
            "author": "Jude Fisher",
            "rating": 4.5,
            "isbn": "618510826",
            "language": "eng",
            "numberOfRatings": 224
        },
        {
            "bookId": 45,
            "title": "Agile Web Development with Rails: A Pragmatic Guide",
            "author": "Dave Thomas/David Heinemeier Hansson/Leon Breedt/Mike Clark/Thomas  Fuchs/Andreas  Schwarz",
            "rating": 3.84,
            "isbn": "097669400X",
            "language": "eng",
            "numberOfRatings": 558
        },
        {
            "bookId": 50,
            "title": "Hatchet (Brian's Saga  #1)",
            "author": "Gary Paulsen",
            "rating": 3.72,
            "isbn": "689840926",
            "language": "eng",
            "numberOfRatings": 208
        },
        {
            "bookId": 53,
            "title": "Guts: The True Stories behind Hatchet and the Brian Books",
            "author": "Gary Paulsen",
            "rating": 3.88,
            "isbn": "385326505",
            "language": "eng",
            "numberOfRatings": 144
        },
        {
            "bookId": 54,
            "title": "Molly Hatchet - 5 of the Best",
            "author": "Molly Hatchet",
            "rating": 4.33,
            "isbn": "1575606240",
            "language": "eng",
            "numberOfRatings": 56
        },
        {
            "bookId": 55,
            "title": "Hatchet Jobs: Writings on Contemporary Fiction",
            "author": "Dale Peck",
            "rating": 3.45,
            "isbn": "1595580271",
            "language": "en-US",
            "numberOfRatings": 228
        },
        {
            "bookId": 57,
            "title": "A Changeling for All Seasons (Changeling Seasons #1)",
            "author": "Angela Knight/Sahara Kelly/Judy Mays/Marteeka Karland/Kate Douglas/Shelby Morgen/Lacey Savage/Kate Hill/Willa {Okati",
            "rating": 3.76,
            "isbn": "1595962808",
            "language": "eng",
            "numberOfRatings": 304
        },
        {
            "bookId": 58,
            "title": "Changeling (Changeling  #1)",
            "author": "Delia Sherman",
            "rating": 3.6,
            "isbn": "670059676",
            "language": "eng",
            "numberOfRatings": 256
        },
        {
            "bookId": 59,
            "title": "The Changeling Sea",
            "author": "Patricia A. McKillip",
            "rating": 4.06,
            "isbn": "141312629",
            "language": "eng",
            "numberOfRatings": 137
        },
        {
            "bookId": 61,
            "title": "The Changeling",
            "author": "Zilpha Keatley Snyder",
            "rating": 4.17,
            "isbn": "595321801",
            "language": "eng",
            "numberOfRatings": 228
        },
        {
            "bookId": 63,
            "title": "The Changeling",
            "author": "Kate Horsley",
            "rating": 3.55,
            "isbn": "1590301943",
            "language": "eng",
            "numberOfRatings": 339
        },
        {
            "bookId": 66,
            "title": "The Changeling (Daughters of England  #15)",
            "author": "Philippa Carr",
            "rating": 3.98,
            "isbn": "449146979",
            "language": "eng",
            "numberOfRatings": 369
        },
        {
            "bookId": 67,
            "title": "The Known World",
            "author": "Edward P. Jones",
            "rating": 3.83,
            "isbn": "61159174",
            "language": "eng",
            "numberOfRatings": 388
        },
        {
            "bookId": 68,
            "title": "The Known World",
            "author": "Edward P. Jones/Kevin R. Free",
            "rating": 3.83,
            "isbn": "006076273X",
            "language": "en-US",
            "numberOfRatings": 14
        },
        {
            "bookId": 69,
            "title": "The Known World",
            "author": "Edward P. Jones",
            "rating": 3.83,
            "isbn": "60749911",
            "language": "eng",
            "numberOfRatings": 576
        },
        {
            "bookId": 71,
            "title": "Traders  Guns & Money: Knowns and Unknowns in the Dazzling World of Derivatives",
            "author": "Satyajit Das",
            "rating": 3.83,
            "isbn": "273704745",
            "language": "eng",
            "numberOfRatings": 334
        },
        {
            "bookId": 72,
            "title": "Artesia: Adventures in the Known World",
            "author": "Mark Smylie",
            "rating": 4.13,
            "isbn": "1932386106",
            "language": "eng",
            "numberOfRatings": 352
        },
        {
            "bookId": 74,
            "title": "The John McPhee Reader (John McPhee Reader  #1)",
            "author": "John McPhee/William Howarth",
            "rating": 4.42,
            "isbn": "374517193",
            "language": "eng",
            "numberOfRatings": 416
        },
        {
            "bookId": 75,
            "title": "Uncommon Carriers",
            "author": "John McPhee",
            "rating": 3.95,
            "isbn": "374280398",
            "language": "en-US",
            "numberOfRatings": 248
        },
        {
            "bookId": 76,
            "title": "Heirs of General Practice",
            "author": "John McPhee",
            "rating": 4.17,
            "isbn": "374519749",
            "language": "eng",
            "numberOfRatings": 128
        },
        {
            "bookId": 77,
            "title": "The Control of Nature",
            "author": "John McPhee",
            "rating": 4.24,
            "isbn": "374522596",
            "language": "en-US",
            "numberOfRatings": 288
        },
        {
            "bookId": 78,
            "title": "Annals of the Former World",
            "author": "John McPhee",
            "rating": 4.34,
            "isbn": "374518734",
            "language": "eng",
            "numberOfRatings": 720
        },
        {
            "bookId": 79,
            "title": "Coming Into the Country",
            "author": "John McPhee",
            "rating": 4.22,
            "isbn": "374522871",
            "language": "eng",
            "numberOfRatings": 448
        },
        {
            "bookId": 80,
            "title": "La Place de la Concorde Suisse",
            "author": "John McPhee",
            "rating": 3.92,
            "isbn": "374519323",
            "language": "fre",
            "numberOfRatings": 160
        },
        {
            "bookId": 81,
            "title": "Giving Good Weight",
            "author": "John McPhee",
            "rating": 4.23,
            "isbn": "374516006",
            "language": "eng",
            "numberOfRatings": 288
        },
        {
            "bookId": 83,
            "title": "Rising from the Plains",
            "author": "John McPhee",
            "rating": 4.23,
            "isbn": "374520658",
            "language": "eng",
            "numberOfRatings": 208
        },
        {
            "bookId": 85,
            "title": "The Heidi Chronicles",
            "author": "Wendy Wasserstein",
            "rating": 3.75,
            "isbn": "822205106",
            "language": "eng",
            "numberOfRatings": 81
        },
        {
            "bookId": 86,
            "title": "The Heidi Chronicles: Uncommon Women and Others & Isn't It Romantic",
            "author": "Wendy Wasserstein",
            "rating": 3.84,
            "isbn": "679734996",
            "language": "eng",
            "numberOfRatings": 249
        },
        {
            "bookId": 89,
            "title": "Active Literacy Across the Curriculum: Strategies for Reading  Writing  Speaking  and Listening",
            "author": "Heidi Hayes Jacobs",
            "rating": 3.94,
            "isbn": "1596670231",
            "language": "eng",
            "numberOfRatings": 138
        },
        {
            "bookId": 90,
            "title": "Simply Beautiful Beaded Jewelry",
            "author": "Heidi Boyd",
            "rating": 3.77,
            "isbn": "1581807740",
            "language": "en-US",
            "numberOfRatings": 128
        },
        {
            "bookId": 91,
            "title": "Always Enough: God's Miraculous Provision Among the Poorest Children on Earth",
            "author": "Heidi Baker/Rolland Baker",
            "rating": 4.46,
            "isbn": "800793617",
            "language": "eng",
            "numberOfRatings": 192
        },
        {
            "bookId": 92,
            "title": "Mapping the Big Picture: Integrating Curriculum & Assessment K-12",
            "author": "Heidi Hayes Jacobs",
            "rating": 3.68,
            "isbn": "871202867",
            "language": "en-US",
            "numberOfRatings": 108
        },
        {
            "bookId": 93,
            "title": "Heidi (Heidi  #1-2)",
            "author": "Johanna Spyri/Beverly Cleary/Angelo  Rinaldi",
            "rating": 3.99,
            "isbn": "753454947",
            "language": "eng",
            "numberOfRatings": 352
        },
        {
            "bookId": 94,
            "title": "Getting Results with Curriculum Mapping",
            "author": "Heidi Hayes Jacobs",
            "rating": 3.25,
            "isbn": "871209993",
            "language": "eng",
            "numberOfRatings": 192
        },
        {
            "bookId": 96,
            "title": "There's Always Enough: The Miraculous Move of God in Mozambique",
            "author": "Rolland Baker/Heidi Baker",
            "rating": 4.46,
            "isbn": "1852402873",
            "language": "eng",
            "numberOfRatings": 192
        },
        {
            "bookId": 98,
            "title": "What to Expect the First Year (What to Expect)",
            "author": "Heidi Murkoff/Sharon Mazel/Arlene Eisenberg/Sandee Hathaway/Mark D. Widome",
            "rating": 3.89,
            "isbn": "761129588",
            "language": "eng",
            "numberOfRatings": 832
        },
        {
            "bookId": 99,
            "title": "The Player's Handbook: The Ultimate Guide on Dating and Relationships",
            "author": "Heidi Fleiss/Libby Keatinge",
            "rating": 3.82,
            "isbn": "972016414",
            "language": "eng",
            "numberOfRatings": 123
        },
        {
            "bookId": 100,
            "title": "Simply Beautiful Beading: 53 Quick and Easy Projects",
            "author": "Heidi Boyd",
            "rating": 3.78,
            "isbn": "1581805632",
            "language": "en-US",
            "numberOfRatings": 128
        },
        {
            "bookId": 103,
            "title": "God Emperor of Dune (Dune Chronicles  #4)",
            "author": "Frank Herbert",
            "rating": 3.84,
            "isbn": "441294677",
            "language": "eng",
            "numberOfRatings": 423
        },
        {
            "bookId": 105,
            "title": "Chapterhouse: Dune (Dune Chronicles #6)",
            "author": "Frank Herbert",
            "rating": 3.91,
            "isbn": "441102670",
            "language": "eng",
            "numberOfRatings": 436
        },
        {
            "bookId": 106,
            "title": "Dune Messiah (Dune Chronicles #2)",
            "author": "Frank Herbert",
            "rating": 3.88,
            "isbn": "441172695",
            "language": "eng",
            "numberOfRatings": 331
        },
        {
            "bookId": 107,
            "title": "Dreamer of Dune: The Biography of Frank Herbert",
            "author": "Brian Herbert",
            "rating": 4.01,
            "isbn": "765306476",
            "language": "en-US",
            "numberOfRatings": 592
        },
        {
            "bookId": 109,
            "title": "Heretics of Dune (Dune Chronicles  #5)",
            "author": "Frank Herbert",
            "rating": 3.86,
            "isbn": "399128980",
            "language": "eng",
            "numberOfRatings": 480
        },
        {
            "bookId": 110,
            "title": "The Road to Dune",
            "author": "Frank Herbert/Brian Herbert/Kevin J. Anderson",
            "rating": 3.88,
            "isbn": "765353709",
            "language": "eng",
            "numberOfRatings": 426
        },
        {
            "bookId": 117,
            "title": "Heretics of Dune (Dune Chronicles #5)",
            "author": "Frank Herbert",
            "rating": 3.86,
            "isbn": "441328008",
            "language": "eng",
            "numberOfRatings": 471
        },
        {
            "bookId": 119,
            "title": "The Lord of the Rings: The Art of the Fellowship of the Ring",
            "author": "Gary Russell",
            "rating": 4.59,
            "isbn": "618212906",
            "language": "eng",
            "numberOfRatings": 192
        },
        {
            "bookId": 122,
            "title": "The Power of One (The Power of One  #1)",
            "author": "Bryce Courtenay",
            "rating": 4.35,
            "isbn": "034541005X",
            "language": "eng",
            "numberOfRatings": 544
        },
        {
            "bookId": 123,
            "title": "The Power of One (The Power of One  #1)",
            "author": "Bryce Courtenay",
            "rating": 4.35,
            "isbn": "385732546",
            "language": "eng",
            "numberOfRatings": 291
        },
        {
            "bookId": 129,
            "title": "The Power of One: One Person  One Rule  One Month",
            "author": "John C. Maxwell/Stephen R. Graves/Thomas G. Addington",
            "rating": 4.28,
            "isbn": "785260056",
            "language": "en-US",
            "numberOfRatings": 256
        },
        {
            "bookId": 130,
            "title": "Power of an Hour: Business and Life Mastery in One Hour a Week",
            "author": "Dave Lakhani",
            "rating": 3.34,
            "isbn": "471780936",
            "language": "eng",
            "numberOfRatings": 205
        },
        {
            "bookId": 131,
            "title": "The Power of One: The Solo Play for Playwrights  Actors  and Directors",
            "author": "Louis E. Catron",
            "rating": 3.67,
            "isbn": "325001537",
            "language": "eng",
            "numberOfRatings": 240
        },
        {
            "bookId": 132,
            "title": "How to Buy  Sell & Profit on eBay: Kick-Start Your Home-Based Business in Just Thirty Days",
            "author": "Adam Ginsberg",
            "rating": 3.48,
            "isbn": "006076287X",
            "language": "eng",
            "numberOfRatings": 336
        },
        {
            "bookId": 133,
            "title": "eBay for Dummies",
            "author": "Marsha Collier",
            "rating": 3.5,
            "isbn": "470045299",
            "language": "eng",
            "numberOfRatings": 386
        },
        {
            "bookId": 135,
            "title": "What to Sell on ebay and Where to Get It: The Definitive Guide to Product Sourcing for eBay and Beyond",
            "author": "Chris Malta/Lisa Suttora",
            "rating": 3.62,
            "isbn": "72262788",
            "language": "eng",
            "numberOfRatings": 260
        },
        {
            "bookId": 137,
            "title": "Starting an eBay Business for Dummies",
            "author": "Marsha Collier",
            "rating": 3.55,
            "isbn": "764569244",
            "language": "eng",
            "numberOfRatings": 384
        },
        {
            "bookId": 138,
            "title": "eBay: Top 100 Simplified Tips & Tricks",
            "author": "Julia Wilkinson",
            "rating": 4.27,
            "isbn": "471933821",
            "language": "eng",
            "numberOfRatings": 260
        },
        {
            "bookId": 139,
            "title": "ebay Timesaving Techniques for Dummies",
            "author": "Marsha Collier",
            "rating": 3.39,
            "isbn": "764559915",
            "language": "en-US",
            "numberOfRatings": 391
        },
        {
            "bookId": 140,
            "title": "eBay Business All-in-One Desk Reference for Dummies",
            "author": "Marsha Collier",
            "rating": 3.89,
            "isbn": "764584383",
            "language": "en-US",
            "numberOfRatings": 864
        },
        {
            "bookId": 141,
            "title": "Ruby Cookbook",
            "author": "Lucas Carlson/Leonard Richardson",
            "rating": 3.84,
            "isbn": "596523696",
            "language": "eng",
            "numberOfRatings": 873
        },
        {
            "bookId": 142,
            "title": "Ruby Ann's Down Home Trailer Park Cookbook",
            "author": "Ruby Ann Boxcar",
            "rating": 4.12,
            "isbn": "806523492",
            "language": "eng",
            "numberOfRatings": 240
        },
        {
            "bookId": 144,
            "title": "Ruby Ann's Down Home Trailer Park BBQin' Cookbook",
            "author": "Ruby Ann Boxcar",
            "rating": 4.08,
            "isbn": "806525363",
            "language": "eng",
            "numberOfRatings": 206
        },
        {
            "bookId": 147,
            "title": "Rails Cookbook: Recipes for Rapid Web Development with Ruby",
            "author": "Rob Orsini",
            "rating": 3.48,
            "isbn": "596527314",
            "language": "eng",
            "numberOfRatings": 514
        },
        {
            "bookId": 151,
            "title": "Anna Karenina",
            "author": "Leo Tolstoy/Richard Pevear/Larissa Volokhonsky",
            "rating": 4.05,
            "isbn": "143035002",
            "language": "eng",
            "numberOfRatings": 838
        },
        {
            "bookId": 154,
            "title": "CliffsNotes on Tolstoy's Anna Karenina",
            "author": "Marianne Sturman/Leo Tolstoy",
            "rating": 3.85,
            "isbn": "822001837",
            "language": "eng",
            "numberOfRatings": 80
        },
        {
            "bookId": 159,
            "title": "Dinner with Anna Karenina",
            "author": "Gloria Goldreich",
            "rating": 2.99,
            "isbn": "778322270",
            "language": "eng",
            "numberOfRatings": 360
        },
        {
            "bookId": 160,
            "title": "Tolstoy: Anna Karenina",
            "author": "Anthony Thorlby",
            "rating": 4.19,
            "isbn": "521313252",
            "language": "eng",
            "numberOfRatings": 128
        },
        {
            "bookId": 162,
            "title": "Untouchable",
            "author": "Mulk Raj Anand/E.M. Forster",
            "rating": 3.71,
            "isbn": "140183957",
            "language": "eng",
            "numberOfRatings": 160
        }
    ];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["iPmjX","bDbGG"], "bDbGG", "parcelRequire94c2")

//# sourceMappingURL=index.fbb3188c.js.map
