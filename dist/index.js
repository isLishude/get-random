/*!
 * get a random string or number of given range
 * @author isLishude
 * @license MIT
 * @version 1.3.1
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "crypto"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var crypto_1 = require("crypto");
    function getNum(min, max) {
        if (typeof min !== "number" || typeof max !== "number") {
            return 0;
        }
        if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
            return 0;
        }
        if (min === max) {
            return min;
        }
        else if (min < max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        else {
            return Math.floor(Math.random() * (min - max + 1)) + max;
        }
    }
    exports.getNum = getNum;
    function getStr(length) {
        if (length === void 0) { length = 6; }
        var tmp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var str = "";
        var i = 0;
        while (i < length) {
            var rand = Math.floor(Math.random() * tmp.length);
            str += tmp[rand];
            i++;
        }
        return str;
    }
    exports.getStr = getStr;
    function getSafer(length) {
        if (length === void 0) { length = 16; }
        var isNode = typeof window !== "undefined" ? false : true;
        var buffer;
        if (!isNode) {
            var random = window.crypto.getRandomValues(new Uint8Array(length));
            buffer = window.btoa(String.fromCharCode.apply(null, random));
        }
        else {
            buffer = crypto_1.randomBytes(length).toString("base64");
        }
        var replace = getStr(1);
        var resolve = buffer.replace(/[\+\/=]/g, replace);
        var result = resolve.slice(0, length);
        return result;
    }
    exports.getSafer = getSafer;
});
