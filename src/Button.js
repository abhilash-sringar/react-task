import React from 'react';
function Button(props) {
    const renderVariant= () => {
        return (props.variant==='variant-1' ?
                <button className={props.activeIndex === props.buttonindex ? "multi-switch-button_multi_switch_button__3Kr7J multi-switch-button_multi_switch_button_active__36Kh1" : "multi-switch-button_multi_switch_button__3Kr7J"} onClick={() => props.handleClick(props.text, props.buttonindex)}>{props.text}</button>
                : <button className="button-red">{props.text}</button>)
     }
    return (
        renderVariant()
    );
}

export default Button;