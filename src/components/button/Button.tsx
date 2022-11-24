import React, {FC} from 'react';
import styled from "styled-components";

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
export const Button: FC<ButtonProps> = ({
  primary,
  backgroundColor,
    label,
    onClick,
    size = 'medium',
}: ButtonProps) => {
  return (
    <Wrapper
      type="button"
      style={{ backgroundColor }}
      onClick={onClick}
      primary={primary}
      size={size}
    >
      {label}
    </Wrapper>
  );
};

export const Wrapper = styled.button<{
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${(props) => props.primary ? `
    color: ${props.theme.colors.primaryText};
    background-color: ${props.theme.colors.primaryBackground};
  ` : `
    color: ${props.theme.colors.secondaryText};
    background-color: ${props.theme.colors.secondaryBackground};
  `}
  ${(props: { size?: string; }) => props.size === 'small' ? `
  font-size: 12px;
  padding: 10px 16px;
  ` : props.size === 'medium' ? `
  font-size: 14px;
  padding: 11px 20px;
  ` : `
  font-size: 16px;
  padding: 12px 24px;
  `}
`;

