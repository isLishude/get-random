/*!
 * get a random string or number of given range
 * @author isLishude
 * @license MIT
 * @version 1.3.1
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
  const tmp: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let str: string = "";
  let i = 0;
  while (i < length) {
    const rand: number = Math.floor(Math.random() * tmp.length);
    str += tmp[rand];
    i++;
  }
  return str;
}

// get safer random string
export function getSafer(length: number = 16): string {
  const isNode: boolean = typeof window !== "undefined" ? false : true;
  let buffer: string;
  if (!isNode) {
    const random = window.crypto.getRandomValues(new Uint8Array(length));
    // base64 of browser
    buffer = window.btoa(String.fromCharCode.apply(null, random));
  } else {
    buffer = randomBytes(length).toString("base64");
  }
  // get random replace letter
  const replace: string = getStr(1);
  // replace "+" "\" "="
  const resolve: string = buffer.replace(/[\+\/=]/g, replace);
  // shorten
  const result: string = resolve.slice(0, length);
  return result;
}
