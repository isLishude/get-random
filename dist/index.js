/*!
 * get a random string or number of given range
 * @author isLishude
 * @license MIT
 * @version 1.4.0
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
    var base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function getNum(min, max) {
        if (typeof min !== "number" || typeof max !== "number") {
            return 0;
        }
        if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
            return 0;
        }
        return min === max
            ? min
            : Math.floor(Math.random() * (Math.abs(max - min) + 1)) +
                Math.min(max, min);
    }
    exports.getNum = getNum;
    function getStr(length) {
        if (length === void 0) { length = 6; }
        var str = "";
        var i = 0;
        while (i++ < length) {
            var rand = Math.floor(Math.random() * base64.length);
            str += base64[rand];
        }
        return str;
    }
    exports.getStr = getStr;
    function getSafer(length) {
        if (length === void 0) { length = 16; }
        var result = "";
        var random = typeof window !== "undefined"
            ? window.crypto.getRandomValues(new Uint8Array(length))
            : crypto_1.randomBytes(length);
        while (0 < length--) {
            result += base64[random[length] & 0x3f];
        }
        return result;
    }
    exports.getSafer = getSafer;
});
