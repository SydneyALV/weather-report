parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){"use strict";e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(C){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new S(r||[]);return i(a,"_invoke",{value:E(t,n,c)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}n.wrap=f;var h={};function p(){}function m(){}function y(){}var v={};l(v,c,function(){return this});var g=Object.getPrototypeOf,L=g&&g(g(_([])));L&&L!==r&&o.call(L,c)&&(v=L);var b=y.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function x(e,n){var r;i(this,"_invoke",{value:function(i,a){function c(){return new n(function(r,c){!function r(i,a,c,u){var s=d(e[i],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then(function(t){r("next",t,c,u)},function(t){r("throw",t,c,u)}):n.resolve(f).then(function(t){l.value=t,c(l)},function(t){return r("throw",t,c,u)})}u(s.arg)}(i,a,r,c)})}return r=r?r.then(c,c):c()}})}function E(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return B()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function _(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:B}}function B(){return{value:void 0,done:!0}}return m.prototype=y,i(b,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},n.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,u,function(){return this}),n.AsyncIterator=x,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new x(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(b),l(b,s,"Generator"),l(b,c,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},n}function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)})}}var o=function(){var t=r(e().mark(function t(n){var r,o,i;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("https://weather-report-proxy-server-jk7z.onrender.com/location",{params:{q:n}});case 3:return i=t.sent,r=i.data[0].lat,o=i.data[0].lon,t.abrupt("return",{latitude:r,longitude:o});case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=r(e().mark(function t(){var n,r,i,u,s;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.cityName,t.next=3,o(n);case 3:return r=t.sent,i=r.latitude,u=r.longitude,t.prev=6,t.next=9,axios.get("https://weather-report-proxy-server-jk7z.onrender.com/weather",{params:{lat:i,lon:u}});case 9:s=t.sent,current_temp=s.data.main.temp,tempNumber=document.getElementById("temp-number"),tempNumber.textContent=a(current_temp),c.tempNumber=a(current_temp),y(),v(),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(6),console.log(t.t0,"Temperature could not be found.");case 21:case"end":return t.stop()}},t,null,[[6,18]])}));return function(){return t.apply(this,arguments)}}(),a=function(t){return Math.floor(9*(t-273.15)/5+32)},c={tempNumber:null,cityName:"Atlanta"},u=function(){var t=document.getElementById("city-title"),e=document.getElementById("city-input").value;c.cityName=e,t.textContent=e},s=function(){document.getElementById("city-title").textContent="Atlanta"},l=function(){document.getElementById("temp-number").textContent=c.tempNumber,y(),v()},f=function(){document.getElementById("temp-number").textContent=c.tempNumber-=1,y(),v()},d=function(){document.getElementById("temp-number").textContent=c.tempNumber+=1,y(),v()},h=document.querySelector("#celsius"),p=document.querySelector("#fahrenheit"),m=0,y=function(){var t=document.querySelector("#temp-number");h.classList.contains("active")?m=Math.floor(9*c.tempNumber/5+32):p.classList.contains("active")&&(m=c.tempNumber),m>=80?t.classList=["red"]:m>=70&&m<=79?t.classList=["orange"]:m>=60&&m<=69?t.classList=["yellow"]:m>=50&&m<=59?t.classList=["green"]:m<=49&&(t.classList=["teal"])},v=function(){h.classList.contains("active")?m=Math.floor(9*c.tempNumber/5+32):p.classList.contains("active")&&(m=c.tempNumber);var t=document.getElementById("landscape");m>=80?t.textContent="🌵  🐍 🦂 🌵🌵  🐍 🏜 🦂":m>=70&&m<=79?t.textContent="🌸🌿🌼 🌷🌻🌿 ☘️🌱 🌻🌷":m>=60&&m<=69?t.textContent="🌾🌾 🍃 🪨  🛤 🌾🌾🌾 🍃":m<=59&&(t.textContent="🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲")},g=function(t){var e=t.target.value,n=document.getElementById("sky"),r=document.getElementById("sky-gradient");"Sunny"==e?(n.textContent="☁️ ☁️ ☁️ ☀️ ☁️ ☁️",r.classList=["sunny"]):"Cloudy"==e?(n.textContent="☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",r.classList=["cloudy"]):"Rainy"==e?(n.textContent="🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧",r.classList=["rainy"]):"Snowy"==e&&(n.textContent="🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨",r.classList=["snowy"])},L=function(){l(),document.querySelector("#city-input").addEventListener("input",u),document.getElementById("reset-button").addEventListener("click",s),document.getElementById("decrease-button").addEventListener("click",f),document.getElementById("increase-button").addEventListener("click",d),document.getElementById("real-temp-button").addEventListener("click",i);var t=document.getElementById("celsius"),e=document.getElementById("fahrenheit");t.addEventListener("click",function(){t.classList.contains("active")||(e.classList.remove("active"),t.classList.add("active"),convertCelsius())}),e.addEventListener("click",function(){e.classList.contains("active")||(t.classList.remove("active"),e.classList.add("active"),a())}),document.getElementById("sky-selector").addEventListener("change",g)};document.addEventListener("DOMContentLoaded",L);
},{}]},{},["H99C"], null)
//# sourceMappingURL=/weather-report/src.1ce1e738.js.map