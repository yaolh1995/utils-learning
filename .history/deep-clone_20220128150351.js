console.log("hello");
const deepClone = (payload) => {
  const isObj = typeof payload === "object";
  const isArr = payload instanceof Array;
  console.log("isArr:", isArr, "isObj:", isObj);
  const keys = Object.keys;
  keys.forEach((key) => {
    key = deepClone(payload[key]);
  });

  if (isObj) {
    if (isArr) {
    } else {
      deepClone();
    }
  } else {
    // 简单对象
    return payload;
  }
};
