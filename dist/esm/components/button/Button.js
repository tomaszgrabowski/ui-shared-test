import { __makeTemplateObject } from "tslib";
import React from 'react';
import styled from "styled-components";
/**
 * Primary UI component for user interaction
 */
export var Button = function (_a) {
    var primary = _a.primary, backgroundColor = _a.backgroundColor, label = _a.label, onClick = _a.onClick, _b = _a.size, size = _b === void 0 ? 'medium' : _b;
    return (React.createElement(Wrapper, { type: "button", style: { backgroundColor: backgroundColor }, onClick: onClick, primary: primary, size: size }, label));
};
export var Wrapper = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n  ", "\n  ", "\n"], ["\n  font-family: ", ";\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n  ", "\n  ", "\n"])), function (props) { return props.theme.fonts.primary; }, function (props) { return props.primary ? "\n    color: ".concat(props.theme.colors.primaryText, ";\n    background-color: ").concat(props.theme.colors.primaryBackground, ";\n  ") : "\n    color: ".concat(props.theme.colors.secondaryText, ";\n    background-color: ").concat(props.theme.colors.secondaryBackground, ";\n  "); }, function (props) { return props.size === 'small' ? "\n  font-size: 12px;\n  padding: 10px 16px;\n  " : props.size === 'medium' ? "\n  font-size: 14px;\n  padding: 11px 20px;\n  " : "\n  font-size: 16px;\n  padding: 12px 24px;\n  "; });
var templateObject_1;
//# sourceMappingURL=Button.js.map