import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DevTools } from "./components/DevTools";
import { useFaviconColor } from "./hooks/useFaviconColor";
import { useBodyBackground } from "./hooks/useBodyBackground";
import { useStargazerCount } from "./hooks/useStargazerCount";
import { GlobalStyles, Header, HeaderContent, HeaderDemo, HeaderDemoPicker, HeaderDescription, HeaderTitle, Link, LinkStarIcon, Links, LinkSeparator, } from "./styles";
// See http://www.w3.org/TR/AERT#color-contrast
const getBrightness = ({ r, g, b }) => (r * 299 + g * 587 + b * 114) / 1000;
const getRandomColor = () => {
    const colors = [
        { r: 209, g: 97, b: 28, a: 1 },
        { r: 34, g: 91, b: 161, a: 1 },
        { r: 225, g: 17, b: 135, a: 0.7625 },
        { r: 21, g: 139, b: 59, a: 1 },
        { r: 189, g: 60, b: 60, a: 1 }, // salmon
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};
const Demo = () => {
    const [color, setColor] = useState(getRandomColor);
    const textColor = getBrightness(color) > 128 || color.a < 0.5 ? "#000" : "#FFF";
    const stargazerCount = useStargazerCount();
    const handleChange = (color) => {
        console.log("🎨", color);
        setColor(color);
    };
    const colorString = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}`;
    useBodyBackground(colorString);
    useFaviconColor(colorString);
    return (React.createElement("div", null,
        React.createElement(GlobalStyles, null),
        React.createElement(Header, { style: { color: textColor } },
            React.createElement(HeaderDemo, null,
                React.createElement(HeaderDemoPicker, { color: color, onChange: handleChange })),
            React.createElement(HeaderContent, null,
                React.createElement(HeaderTitle, null, "React Colorful \uD83C\uDFA8"),
                React.createElement(HeaderDescription, null, "A tiny color picker component for React and Preact apps"),
                React.createElement(Links, null,
                    React.createElement(Link, { href: "https://github.com/omgovich/react-colorful", target: "_blank", rel: "noreferrer" },
                        "GitHub",
                        React.createElement(LinkSeparator, null),
                        React.createElement(LinkStarIcon, null),
                        stargazerCount),
                    React.createElement(Link, { href: "https://www.npmjs.com/package/react-colorful", target: "_blank", rel: "noreferrer" }, "NPM")))),
        process.env.NODE_ENV === "development" && React.createElement(DevTools, null)));
};
ReactDOM.render(React.createElement(Demo, null), document.getElementById("root"));
