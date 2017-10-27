function pad(value: string) {
  let res = value;

  while ((res.length - 2) < 0) {
    res = `${res}0`;
  }

  return res;
}

interface RgbColor {
  r: number,
  g: number,
  b: number,
}

export function hexToRgb(hex: string): RgbColor {
  if (hex.length === 3) {
    let hr = hex[0];
    let hg = hex[1];
    let hb = hex[2];

    return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`)
  }

  let red = hex.slice(0, 2);
  let green = hex.slice(2, 4);
  let blue = hex.slice(4);

  return {
    r: parseInt(red, 16),
    g: parseInt(green, 16),
    b: parseInt(blue, 16),
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return [r, g, b]
    .map(val => Math.max(Math.min(val, 255), 0))
    .map(val => val.toString(16))
    .map(pad)
    .join('');
}