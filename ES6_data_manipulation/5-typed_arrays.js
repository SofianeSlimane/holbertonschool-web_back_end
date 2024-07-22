export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const myView = new DataView(buffer);
  myView.setInt8(position, value);
  return myView;
}
