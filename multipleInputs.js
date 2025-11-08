let value = "";
let expectedType = "object";
const ary = [
  { value: 1, expectedType: "number" },
  { value: "string", expectedType: "string" },
  { value: {}, expectedType: "object" },
  { value: [], expectedType: "array" },
  { value: null, expectedType: "null" },
  { value: 1, expectedType: "integer" },
  { value: 1.4, expectedType: "float" },
  { value: "", expectedType: "emptyString" },
  { value: " ", expectedType: "emptyString" },
];

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

function typesCheck(value, expectedType) {
  if (typeof value === expectedType) {
    return true;
  }
  if (expectedType === "array" && Array.isArray(value)) {
    return true;
  }
  if (expectedType === "null" && value === null) {
    return true;
  }
  if (expectedType === "integer" && Number.isInteger(value)) {
    return true;
  }
  if (expectedType === "float" && isFloat(value)) {
    return true;
  }
  if (
    expectedType === "emptyString" &&
    value.trim() === "" &&
    typeof value === "string"
  ) {
    return true;
  }
  return false;
}
// console.log(typesCheck(value, expectedType));

function validateMultiple(ary) {
  for (let i = 0; i < ary.length; i++) {
    const item = ary[i];

    console.log(
      `value=${item.value},expectedType=${
        item.expectedType
      }, Result=${typesCheck(item.value, item.expectedType)}`
    );
    // console.log("______________________________________________");
  }
}
validateMultiple(ary);
