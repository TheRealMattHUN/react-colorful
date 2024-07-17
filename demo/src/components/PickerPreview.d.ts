import React from "react";
import { ColorPickerBaseProps, AnyColor } from "../../../src/types";
interface Props<T extends AnyColor> {
    title: string;
    frame?: boolean;
    PickerComponent: React.ComponentType<Partial<ColorPickerBaseProps<T>>>;
    initialColor?: T;
}
export declare function PickerPreview<T extends AnyColor>({ title, frame, PickerComponent, initialColor, }: Props<T>): JSX.Element;
export {};
//# sourceMappingURL=PickerPreview.d.ts.map