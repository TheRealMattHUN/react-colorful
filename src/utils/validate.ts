const matcher = /^#?([0-9A-F]{3,8})$/i;

export const validHex = (value: string, alpha?: boolean): boolean => {
  const match = matcher.exec(value);
  const length = match ? match[1].length : 0;

  return (
    length === 3 || // '#rgb' format
    length === 6 || // '#rrggbb' format
    (!!alpha && length === 4) || // '#rgba' format
    (!!alpha && length === 8) // '#rrggbbaa' format
  );
};

const rgbaMatcher = /(^[0-9]*$)/gi;

export const validRGB = (value: string): boolean => {
  const match = rgbaMatcher.exec(value);
  const converted = +value;
  return -1 < converted && converted < 256;
};

export const validAlpha = (value: string): boolean => {
  const match = rgbaMatcher.exec(value);
  const converted = +value;
  return -1 < converted && converted < 100;
};
