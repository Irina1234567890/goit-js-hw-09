!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc");const u={inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),form:document.querySelector(".form")};function l(e,n){const t=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}u.form.addEventListener("submit",(function(n){n.preventDefault();let t=parseInt(u.inputDelay.value);const o=parseInt(u.inputStep.value),i=parseInt(u.inputAmount.value);for(let n=1;n<=i;n++)l(n,t).then((({position:n,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)})),t+=o;!function(e){if(e<0)Message("wrong")}()}))}();
//# sourceMappingURL=03-promises.7cbf086f.js.map
