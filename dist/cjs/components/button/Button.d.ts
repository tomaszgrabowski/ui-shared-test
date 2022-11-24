import React, { FC } from 'react';
export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: FC<ButtonProps>;
export declare const Wrapper: import("styled-components").StyledComponent<"button", any, {
    primary?: boolean | undefined;
    size?: "small" | "medium" | "large" | undefined;
    children: React.ReactNode;
}, never>;
