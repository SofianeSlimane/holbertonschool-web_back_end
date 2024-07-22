export default function cleanSet(set, startString) {
  let myStr = '';
  for (const elem of set) {
    if (elem === startString) {
      myStr.concat(`${elem}-`);
    }
    if (elem.startsWith(startString) === true && startString.length > 0) {
      const subStr = elem.substring(startString.length, elem.length);
      myStr = myStr.concat(`${subStr}-`);
    }
  }
  myStr = myStr.slice(0, -1);
  return myStr;
}
