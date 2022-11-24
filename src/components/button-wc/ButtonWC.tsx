import React, {FC} from 'react';
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";


const ButtonWC: FC = () => {
    return (
        <button id='button-wc'>Button</button>
    )
}
export default ButtonWC;


customElements.define('button-wc', (reactToWebComponent(ButtonWC, (React) as any, (ReactDOM) as any)) as any);
