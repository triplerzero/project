!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=249)}({0:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var c,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(f.functional){f._injectStyles=c;var l=f.render;f.render=function(t,e){return c.call(e),l(t,e)}}else{var u=f.beforeCreate;f.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:f}}n.d(e,"a",function(){return r})},1:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},134:function(t,e,n){var r=n(251);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,i);r.locals&&(t.exports=r.locals)},2:function(t,e,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,f=0,l=[],u=n(4);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(y(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],e));o[r.id]={id:r.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function v(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function m(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(e,t.attrs),v(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var s=f++;n=c||(c=m(e)),r=w.bind(null,n,s,!1),i=w.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),v(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){h(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}t&&d(p(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var g,_=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},249:function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(381);window.__pages=r({},window.__pages,{"details/items/affix":i})},250:function(t,e,n){"use strict";var r=n(134);n.n(r).a},251:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".content[data-v-c7fc2e34] {\n  width: 7.5rem;\n  height: auto;\n  background: white;\n}\n.con[data-v-c7fc2e34] {\n  width: 6.9rem;\n  margin: 0 auto;\n  height: auto;\n}\n.classify[data-v-c7fc2e34] {\n  height: 1rem;\n  line-height: 1rem;\n  font-size: 0.32rem;\n  color: #999999;\n}\n.file[data-v-c7fc2e34] {\n  padding-top: 0.27rem;\n  padding-bottom: 0.33rem;\n  border-radius: 0.08rem;\n  line-height: 0.4rem;\n  border: 0.01rem solid #eaeaea;\n  box-sizing: border-box;\n  padding-left: 0.22rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  background: #fafafa;\n  margin-bottom: 0.1rem;\n}\n.file .file[data-v-c7fc2e34]:last-child {\n    margin-bottom: 0;\n}\n.file > .title[data-v-c7fc2e34] {\n    font-size: 0.3rem;\n    font-family: PingFang-SC-Bold;\n    font-weight: bold;\n    color: #333333;\n}\n.file > .icon[data-v-c7fc2e34] {\n    font-size: 0.4rem;\n    margin-right: 0.2rem;\n}\n.file > .one[data-v-c7fc2e34] {\n    color: #5587e0;\n}\n.file > .two[data-v-c7fc2e34] {\n    color: #ff7736;\n}\n.file > .three[data-v-c7fc2e34] {\n    color: #79b93f;\n}\n",""])},381:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-page",{attrs:{options:{nativeScroll:!1}}},[n("t-header",{attrs:{slot:"top"},slot:"top"},[t._v("正文及附件")]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"con"},[n("div",{staticClass:"classify"},[t._v("发文正文")]),t._v(" "),t._l(t.fileList.officialText,function(e,r){return n("div",{key:r,staticClass:"file"},[n("div",{class:t.fileIcon(e)}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.name))])])}),t._v(" "),n("div",{staticClass:"classify"},[t._v("发文附件")]),t._v(" "),t._l(t.fileList.officialAccessory,function(e,r){return n("div",{key:r,staticClass:"file"},[n("div",{class:t.fileIcon(e)}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.name))])])}),t._v(" "),n("div",{staticClass:"classify"},[t._v("其他附件")]),t._v(" "),t._l(t.fileList.otherAccessory,function(e,r){return n("div",{key:r,staticClass:"file"},[n("div",{class:t.fileIcon(e)}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.name))])])}),t._v(" "),n("div",{staticClass:"classify"},[t._v("正式文件")]),t._v(" "),t._l(t.fileList.officialFile,function(e,r){return n("div",{key:r,staticClass:"file"},[n("div",{class:t.fileIcon(e)}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.name))])])})],2)])],1)};r._withStripped=!0;var i={data:function(){return{fileList:{officialText:[],officialAccessory:[],otherAccessory:[],officialFile:[]}}},mounted:function(){this.fileList={officialText:[{name:"发文正文.doc",href:""}],officialAccessory:[{name:"附件1.ppt",href:""},{name:"附件2.ppt",href:""},{name:"附件3.ppt",href:""}],otherAccessory:[{name:"附件1.ppt",href:""},{name:"附件1.xls",href:""}],officialFile:[{name:"名字会很长很长会很长很长会很长很长会很长很长附件1.ppt",href:""}]}},methods:{fileIcon:function(t){return t.name.endsWith("ppt")?"icon citicFont citic-xingzhuang8 two":t.name.endsWith("doc")?"icon citicFont citic-WORD one":t.name.endsWith("xls")?"icon citicFont citic-zu three":void 0}}},o=(n(250),n(0)),s=Object(o.a)(i,r,[],!1,null,"c7fc2e34",null);s.options.__file="src/modules/details/items/affix/index.vue";e.default=s.exports},4:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}});