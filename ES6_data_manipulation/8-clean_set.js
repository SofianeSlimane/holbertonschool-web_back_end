export default function cleanSet(set, startString) {
  if (startString === '') {
    return startString;
  }
  let myStr = '';
  for (const elem of set) {
    if (elem.startsWith(startString) === true) {
      const subStr = elem.substring(startString.length, elem.length);
      myStr = myStr.concat(`${subStr}-`);
    }
  }
  myStr = myStr.slice(0, -1);
  return myStr;
}
