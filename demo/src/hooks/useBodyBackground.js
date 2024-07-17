import { useEffect } from "react";
export const useBodyBackground = (color) => {
    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);
};
