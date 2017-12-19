/*!
 * get a random string or number of given range
 * @author isLishude
 * @license MIT
 * @version 1.2.2
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function getNum(min, max) {
        if (typeof min !== "number" || typeof max !== "number") {
            return 0;
        }
        if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
            throw new TypeError("param should be in safe range");
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
        var tmp = "abcdefghijklmnopqrstuvwxyz";
        var str = "";
        tmp += tmp.toUpperCase();
        tmp += "0123456789";
        for (var i = 0; i < length; i++) {
            var rand = Math.floor(Math.random() * tmp.length);
            str += tmp[rand];
        }
        return str;
    }
    exports.getStr = getStr;
});
