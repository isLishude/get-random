/*!
 * get a random string or number of given range
 * @author isLishude
 * @license MIT
 * @version 2.0.1
 */

import { randomBytes } from "crypto";

const base64 =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

// get a number of given range
export function number(min: number, max: number): number {
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
export function string(length: number = 6): string {
  let res: string = "";
  let i = 0;
  while (i++ < length) {
    const rand: number = Math.floor(Math.random() * base64.length);
    res += base64[rand];
  }
  return res;
}

// get uuid by pseudo-random generator
export function uuid(length: number = 21): string {
  let res: string = "";
  const random: Uint8Array =
    typeof window === "object"
      ? window.crypto.getRandomValues(new Uint8Array(length))
      : randomBytes(length);

  while (length--) {
    res += base64[random[length] & 0x3f];
  }
  return res;
}
