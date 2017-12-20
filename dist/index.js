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
    function getSafer(length) {
        if (length === void 0) { length = 16; }
        var buffer = crypto_1.randomBytes(length).toString("base64");
        var replace = getStr(1);
        var resolve = buffer.replace(/[\+\\=]/g, replace);
        var result = resolve.slice(0, length);
        return result;
    }
    exports.getSafer = getSafer;
});
