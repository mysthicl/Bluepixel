import{R as i}from"./index.CZlPm10g.js";var p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=i.createContext&&i.createContext(p),g=["attr","size","title"];function O(t,e){if(t==null)return{};var r=h(t,e),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function h(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?m(Object(r),!0).forEach(function(n){y(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function y(t,e,r){return e=j(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function j(t){var e=w(t,"string");return typeof e=="symbol"?e:e+""}function w(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function v(t){return t&&t.map((e,r)=>i.createElement(e.tag,u({key:r},e.attr),v(e.child)))}function b(t){return e=>i.createElement(P,c({attr:u({},t.attr)},e),v(t.child))}function P(t){var e=r=>{var{attr:n,size:a,title:o}=t,d=O(t,g),f=a||r.size||"1em",l;return r.className&&(l=r.className),t.className&&(l=(l?l+" ":"")+t.className),i.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,d,{className:l,style:u(u({color:t.color||r.color},r.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),o&&i.createElement("title",null,o),t.children)};return s!==void 0?i.createElement(s.Consumer,null,r=>e(r)):e(p)}function x(t){return b({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480z"},child:[]}]})(t)}function E(t){return b({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22zm0 368a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22zm113.14-321.14a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44zM108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45zM464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44zm-368 0H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44zm307.08 147.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56zM142.86 164.86a21.89 21.89 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55zM256 358a102 102 0 1 1 102-102 102.12 102.12 0 0 1-102 102z"},child:[]}]})(t)}export{x as IoMoon,E as IoSunny};
