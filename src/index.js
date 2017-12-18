/**
 * get a random string or number of given range
 * @author islishude
 * @license MIT
 * @version 1.0.0
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
    /**
     * get a number of given range
     * @param min {number} the min number
     * @param max {number} the max number
     * @return {number} a random number
     */
    function getNum(min, max) {
        // if the params are not number,reports error
        if (typeof min !== "number" || typeof max !== "number") {
            throw new Error("param invalidate,should be a number");
        }
        // if the order is not incorrect,exchange param position
        if (min > max) {
            _a = [max, min], min = _a[0], max = _a[1];
        }
        // if number is not in safe range,reports error
        if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
            throw new Error("param should be in safe range");
        }
        // if min param is equal with max param,return min
        if (min === max) {
            return min;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
        var _a;
    }
    exports.getNum = getNum;
    /**
     * get a random string
     * @param length {number} default is 6
     * @return <string> a random string,default length is 6
     */
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
