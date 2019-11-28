!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],r):"object"==typeof exports?exports.webpackNumbers=r(require("lodash")):e.webpackNumbers=r(e._)}("undefined"!=typeof self?self:this,function(n){/******/
return u={},
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/t.m=o=[
/* 0 */
/***/function(e,r,n){var o=n(1),t=n(2),u={numToWord:function(n){return o.reduce(t,function(e,r){return r.num===n?r.word:e},"")},wordToNum:function(n){return o.reduce(t,function(e,r){return r.word===n&&n.toLowerCase()?r.num:e},-1)}};e.exports=u},
/* 1 */
/***/function(e,r){e.exports=n;
/***/},
/* 2 */
/***/function(e){e.exports=JSON.parse('[{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":0,"word":"Zero"}]');
/***/}
/******/],
/******/
/******/ // expose the module cache
/******/t.c=u,
/******/
/******/ // define getter function for harmony exports
/******/t.d=function(e,r,n){
/******/t.o(e,r)||
/******/Object.defineProperty(e,r,{enumerable:!0,get:n})
/******/},
/******/
/******/ // define __esModule on exports
/******/t.r=function(e){
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})},
/******/
/******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/t.t=function(r,e){
/******/if(
/******/1&e&&(r=t(r)),8&e)return r;
/******/if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;
/******/var n=Object.create(null);
/******/
/******/if(t.r(n),
/******/Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));
/******/return n;
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/t.n=function(e){
/******/var r=e&&e.__esModule?
/******/function(){return e.default}:
/******/function(){return e};
/******/
/******/return t.d(r,"a",r),r;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},
/******/
/******/ // __webpack_public_path__
/******/t.p="",t(t.s=0);
/******/
/******/ // The require function
/******/function t(e){
/******/
/******/ // Check if module is in cache
/******/if(u[e])
/******/return u[e].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var r=u[e]={
/******/i:e,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return o[e].call(r.exports,r,r.exports,t),
/******/
/******/ // Flag the module as loaded
/******/r.l=!0,r.exports;
/******/}var o,u;
/************************************************************************/
/******/});