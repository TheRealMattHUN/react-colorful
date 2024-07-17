/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import Frame from "react-frame-component";
import { HexColorInput } from "../../../src";
import { PreviewContainer, PreviewDemo, PreviewOutput, PreviewTitle } from "../styles";
export function PickerPreview({ title, frame, PickerComponent, initialColor, }) {
    const [color, setColor] = useState(initialColor);
    const handleChange = (color) => {
        console.log("🎨", color);
        setColor(color);
    };
    const Wrapper = frame ? Frame : React.Fragment;
    return (React.createElement(PreviewContainer, null,
        React.createElement(PreviewTitle, null, title),
        React.createElement(PreviewDemo, null,
            React.createElement(Wrapper, null,
                React.createElement(PickerComponent, { color: color, onChange: handleChange })),
            title.startsWith("HEX") && (
            // @ts-ignore
            React.createElement(HexColorInput, { color: color, onChange: handleChange, prefixed: true, alpha: true }))),
        React.createElement(PreviewOutput, null, JSON.stringify(color))));
}
