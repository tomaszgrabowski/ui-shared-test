import { __assign, __awaiter, __generator } from "tslib";
import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';
export default {
    title: 'Example/Page',
    component: Page,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
};
var Template = function (args) { return React.createElement(Page, __assign({}, args)); };
export var LoggedOut = Template.bind({});
export var LoggedIn = Template.bind({});
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = function (_a) {
    var canvasElement = _a.canvasElement;
    return __awaiter(void 0, void 0, void 0, function () {
        var canvas, loginButton;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    canvas = within(canvasElement);
                    return [4 /*yield*/, canvas.getByRole('button', { name: /Log in/i })];
                case 1:
                    loginButton = _b.sent();
                    return [4 /*yield*/, userEvent.click(loginButton)];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=Page.stories.js.map