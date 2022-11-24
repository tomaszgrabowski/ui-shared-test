"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var react_to_webcomponent_1 = tslib_1.__importDefault(require("react-to-webcomponent"));
var ButtonWC = function () {
    return (react_1["default"].createElement("button", { id: 'button-wc' }, "Button"));
};
exports["default"] = ButtonWC;
customElements.define('button-wc', ((0, react_to_webcomponent_1["default"])(ButtonWC, (react_1["default"]), (react_dom_1["default"]))));
//# sourceMappingURL=ButtonWC.js.map