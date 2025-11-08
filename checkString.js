let str = " ";
function emptyString(str) {
  if (str.trim() === "") {
    return true;
  } else {
    return false;
  }
}

console.log(emptyString(str));
