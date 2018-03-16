/*!
 * get a random string or number of given range
 * @author isLishude
 * @license MIT
 * @version 1.4.0
 */

import { randomBytes } from "crypto";

const base64 =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

// get a number of given range
export function getNum(min: number, max: number): number {
  // if the params are not number return zero
  if (typeof min !== "number" || typeof max !== "number") {
    return 0;
  }
  // if number is not in safe range return zero
  if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
    return 0;
  }
  // if min param is equal with max param,return min
  return min === max
    ? min
    : Math.floor(Math.random() * (Math.abs(max - min) + 1)) +
        Math.min(max, min);
}

// get a random string
export function getStr(length: number = 6): string {
  let str: string = "";
  let i = 0;
  while (i++ < length) {
    const rand: number = Math.floor(Math.random() * base64.length);
    str += base64[rand];
  }
  return str;
}

// get safer random string
export function getSafer(length: number = 16): string {
  let result: string = "";
  const random: Uint8Array =
    typeof window !== "undefined"
      ? window.crypto.getRandomValues(new Uint8Array(length))
      : randomBytes(length);

  while (0 < length--) {
    result += base64[random[length] & 0x3f];
  }
  return result;
}
