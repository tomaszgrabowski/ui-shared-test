import { __assign } from "tslib";
import React from 'react';
import ButtonWC from "./ButtonWC";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/ButtonWC',
    component: ButtonWC,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' }
    }
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) { return React.createElement(ButtonWC, __assign({}, args)); };
export var Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Button'
};
//# sourceMappingURL=ButtonWC.stories.js.map