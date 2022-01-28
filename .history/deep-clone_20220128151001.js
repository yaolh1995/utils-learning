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
      const keys = Object.keys;
      keys.forEach((key) => {
        key = deepClone(payload[key]);
      });
    }
  } else {
    // 简单对象
    return payload;
  }
};
