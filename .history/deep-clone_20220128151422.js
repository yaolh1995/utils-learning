console.log("hello");
const deepClone = (payload) => {
  const isObj = typeof payload === "object";
  const isArr = payload instanceof Array;
  console.log("isArr:", isArr, "isObj:", isObj);

  if (isObj) {
    if (isArr) {
      const result = payload.forEach((item) => {
        key = deepClone(payload[key]);
      });
      return result;
    } else {
      const result = {};
      const keys = Object.keys;
      console.log(keys, "keys");
      keys.forEach((key) => {
        result.key = deepClone(payload[key]);
      });
      return result;
    }
  } else {
    // 简单对象
    return payload;
  }
};

const origin = { a: 1, b: { c: 2, d: 3 } };
const copy = deepClone(origin);
console.log(copy, "copy");
