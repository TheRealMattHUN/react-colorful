import React from "react";
import { PickerPreview } from "./PickerPreview";
import { 
// HEX
HexColorPicker, HexAlphaColorPicker, RgbColorPicker, RgbStringColorPicker, RgbaColorPicker, RgbaStringColorPicker, HslColorPicker, HslStringColorPicker, HslaColorPicker, HslaStringColorPicker, HsvColorPicker, HsvStringColorPicker, HsvaColorPicker, HsvaStringColorPicker, } from "../../../src";
export const DevTools = () => {
    return (React.createElement("div", null,
        React.createElement(PickerPreview, { title: "HEX", PickerComponent: HexColorPicker, initialColor: "#406090" }),
        React.createElement(PickerPreview, { title: "HEX Alpha", PickerComponent: HexAlphaColorPicker, initialColor: "#40609088" }),
        React.createElement(PickerPreview, { title: "RGB", PickerComponent: RgbColorPicker, initialColor: { r: 60, g: 80, b: 120 } }),
        React.createElement(PickerPreview, { title: "RGB String", PickerComponent: RgbStringColorPicker, initialColor: "rgb(60, 80, 120)" }),
        React.createElement(PickerPreview, { title: "RGBA", PickerComponent: RgbaColorPicker, initialColor: { r: 60, g: 80, b: 120, a: 0.5 } }),
        React.createElement(PickerPreview, { title: "RGBA String", PickerComponent: RgbaStringColorPicker, initialColor: "rgba(60, 80, 120, 0.5)" }),
        React.createElement(PickerPreview, { title: "HSL", PickerComponent: HslColorPicker, initialColor: { h: 200, s: 25, l: 32 } }),
        React.createElement(PickerPreview, { title: "HSL String", PickerComponent: HslStringColorPicker, initialColor: "hsl(200, 25%, 32%)" }),
        React.createElement(PickerPreview, { title: "HSLA", PickerComponent: HslaColorPicker, initialColor: { h: 200, s: 25, l: 32, a: 0.5 } }),
        React.createElement(PickerPreview, { title: "HSLA String", PickerComponent: HslaStringColorPicker, initialColor: "hsl(200, 25%, 32%, 0.5)" }),
        React.createElement(PickerPreview, { title: "HSV", PickerComponent: HsvColorPicker, initialColor: { h: 200, s: 25, v: 50 } }),
        React.createElement(PickerPreview, { title: "HSV String", PickerComponent: HsvStringColorPicker, initialColor: "hsv(200, 25%, 50%)" }),
        React.createElement(PickerPreview, { title: "HSVA", PickerComponent: HsvaColorPicker, initialColor: { h: 200, s: 25, v: 50, a: 0.5 } }),
        React.createElement(PickerPreview, { title: "HSVA String", PickerComponent: HsvaStringColorPicker, initialColor: "hsva(200, 25%, 50%, 0.5)" }),
        React.createElement(PickerPreview, { frame: true, title: "RGB", PickerComponent: RgbColorPicker, initialColor: { r: 60, g: 80, b: 120 } })));
};
