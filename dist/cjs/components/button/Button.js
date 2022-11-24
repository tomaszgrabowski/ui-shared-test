"use strict";
exports.__esModule = true;
exports.Wrapper = exports.Button = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var primary = _a.primary, backgroundColor = _a.backgroundColor, label = _a.label, onClick = _a.onClick, _b = _a.size, size = _b === void 0 ? 'medium' : _b;
    return (react_1["default"].createElement(exports.Wrapper, { type: "button", style: { backgroundColor: backgroundColor }, onClick: onClick, primary: primary, size: size }, label));
};
exports.Button = Button;
exports.Wrapper = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n  ", "\n  ", "\n"], ["\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n  ", "\n  ", "\n"])), function (props) { return props.primary ? "\n  color: white;\n  background-color: #794EAD;\n  " : "\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  "; }, function (props) { return props.size === 'small' ? "\n  font-size: 12px;\n  padding: 10px 16px;\n  " : props.size === 'medium' ? "\n  font-size: 14px;\n  padding: 11px 20px;\n  " : "\n  font-size: 16px;\n  padding: 12px 24px;\n  "; });
var templateObject_1;
//# sourceMappingURL=Button.js.map