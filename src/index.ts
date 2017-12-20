/*!
 * get a random string or number of given range
 * @author isLishude
 * @license MIT
 * @version 1.2.4
 */
import { randomBytes } from "crypto";

// get a number of given range
export function getNum(min: number, max: number): number {
  // if the params are not number return zero
  if (typeof min !== "number" || typeof max !== "number") {
    return 0;
  }
  // if number is not in safe range,reports error
  if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
    return 0;
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
// get a random string
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

// get safe random string
export function getSafer(length: number = 16): string {
  const buffer: string = randomBytes(length).toString("base64");
  // get random replace letter
  const replace: string = getStr(1);
  // replace "+" "\" "="
  const resolve: string = buffer.replace(/[\+\\=]/g, replace);
  // shorten
  const result: string = resolve.slice(0, length);
  return result;
}
