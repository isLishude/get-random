/**
 * get a radom string or number of given range
 * @author islishude
 * @license MIT
 * @version 1.0.0
 */
export default class Random {
    /**
     * get a number of given range
     * @param min {number} the min number
     * @param max {number} the max number
     * @return {number} a radom number
     */
    getNum(min: number, max: number) {
        // if the params are not number,reports error
        if (typeof min !== 'number' || typeof max !== 'number') {
            throw new Error('param invalidate,should be a number')
        }
        // if the order is not incorrect,exchange param position
        if (min > max) {
            [min, max] = [max, min]
        }
        // if number is not in safe range,reports error
        if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
            throw new Error('param should be in safe range')
        }
        // if min param is equal with max param,return min
        if (min === max) {
            return min
        }
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    /**
     * get a radom string
     * @param length {number} default is 6
     * @return <string> a radom string,default length is 6
     */
    getStr(length: number = 6) {
        let str: string = 'abcdefghijklmnopqrstuvwxyz'
        let _str: string = ''
        str += str.toUpperCase();
        str += '0123456789'
        for (let i = 0; i < length; i++) {
            let rand: number = Math.floor(Math.random() * str.length)
            _str += str[rand];
        }
        return _str
    }
}