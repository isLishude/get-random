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
            throw new Error("param invalidate,should be a number");
        }
        if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
            throw new Error("param should be in safe range");
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
        var str = "abcdefghijklmnopqrstuvwxyz";
        var _str = "";
        str += str.toUpperCase();
        str += "0123456789";
        for (var i = 0; i < length; i++) {
            var rand = Math.floor(Math.random() * str.length);
            _str += str[rand];
        }
        return _str;
    }
    exports.getStr = getStr;
});
