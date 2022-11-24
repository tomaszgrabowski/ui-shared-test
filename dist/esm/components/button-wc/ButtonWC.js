import React from 'react';
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
var ButtonWC = function () {
    return (React.createElement("button", { id: 'button-wc' }, "Button"));
};
export default ButtonWC;
customElements.define('button-wc', (reactToWebComponent(ButtonWC, (React), (ReactDOM))));
//# sourceMappingURL=ButtonWC.js.map