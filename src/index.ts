/*!
 * get a random string or number of given range
 * @author isLishude
 * @license MIT
 * @version 1.2.3
 */

/**
 * get a number of given range
 * @param {number} the min number
 * @param {number} the max number
 * @return {number} a random number
 */
export function getNum(min: number, max: number): number {
  // if the params are not number,reports error
  if (typeof min !== "number" || typeof max !== "number") {
    return 0;
  }
  // if number is not in safe range,reports error
  if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
    throw new TypeError("param should be in safe range");
  }
  // if min param is equal with max param,return min
  if (min === max) {
    return min;
  } else if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }
}
/**
 * get a random string
 * @param {number} length default is 6
 * @return {string} a random string,default length is 6
 */
export function getStr(length: number = 6): string {
  let tmp: string = "abcdefghijklmnopqrstuvwxyz";
  let str: string = "";
  tmp += tmp.toUpperCase();
  tmp += "0123456789";
  for (let i = 0; i < length; i++) {
    const rand: number = Math.floor(Math.random() * tmp.length);
    str += tmp[rand];
  }
  return str;
}
