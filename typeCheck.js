let value = "";
let expectedType = "object";

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
console.log(typesCheck(value, expectedType));
