import React, { useCallback, useEffect, useState } from "react";
import { ColorInputBaseProps, RgbaColor } from "../types";

import { validRGB, validAlpha } from "../utils/validate";
import { ColorInput } from "./common/ColorInput";
import {
  hexToRgba,
  hsvaToHex,
  hsvaToRgba,
  hsvaToRgbaString,
  rgbaStringToHsva,
  rgbaToHsva,
} from "../utils/convert";

interface RgbaStringColorInput extends ColorInputBaseProps {
  /** Allows interaction with HexColorPicker for a duo color picker */
  stateType?: boolean;
  /** Allows Alpha parameter */
  alpha?: boolean;
}

export const RgbaStringColorInput = (props: RgbaStringColorInput): JSX.Element => {
  const { color, onChange, stateType, alpha, ...rest } = props;

  /** Escapes all non-decimal characters */
  const escape = useCallback(
    (value: string) => value.replace(/(^[0-9]*$)/gi, "").substring(0, 3),
    []
  );

  /** Validates RGB strings */
  const validate = useCallback((value: string) => validRGB(value), []);

  const validateAlpha = useCallback((value: string) => validAlpha(value), []);

  const [rgba, setRGBA] = useState<RgbaColor>(
    stateType === true
      ? hexToRgba(color ? color : "")
      : hsvaToRgba(rgbaStringToHsva(color ? color : ""))
  );

  useEffect(() => {
    if (onChange) {
      if (stateType === true) {
        onChange(hsvaToHex(rgbaToHsva(rgba)));
      } else {
        onChange(hsvaToRgbaString(rgbaToHsva(rgba)));
      }
    }
  }, [onChange, rgba, stateType]);

  return (
    <>
      <ColorInput
        {...rest}
        color={rgba.r.toString()}
        onChange={(newColor) => setRGBA({ ...rgba, r: +newColor })}
        escape={escape}
        validate={validate}
      />
      <ColorInput
        {...rest}
        color={rgba.g.toString()}
        onChange={(newColor) => setRGBA({ ...rgba, g: +newColor })}
        escape={escape}
        validate={validate}
      />
      <ColorInput
        {...rest}
        color={rgba.b.toString()}
        onChange={(newColor) => setRGBA({ ...rgba, b: +newColor })}
        escape={escape}
        validate={validate}
      />
      {alpha && (
        <ColorInput
          {...rest}
          color={rgba.a.toString()}
          onChange={(newColor) => setRGBA({ ...rgba, a: +newColor })}
          escape={escape}
          validate={validateAlpha}
        />
      )}
    </>
  );
};
