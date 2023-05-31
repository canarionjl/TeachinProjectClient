
export function numberToLEBytes(param: number): Uint8Array {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  view.setUint32(0, param, true);
  const bytes = new Uint8Array(buffer);
  return bytes;
}
