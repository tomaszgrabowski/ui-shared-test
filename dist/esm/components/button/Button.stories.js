import { __assign } from "tslib";
import React from 'react';
import { Button } from './Button';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' }
    }
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) { return React.createElement(Button, __assign({}, args)); };
export var Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Button'
};
export var Secondary = Template.bind({});
Secondary.args = {
    label: 'Button'
};
export var Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button'
};
export var Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button'
};
//# sourceMappingURL=Button.stories.js.map