import React from 'react';
import Title from "./Title";
import Description from "./Description";
import Button from "./Button";
function MultiSwitch(props) {
    return (
        <div className="multi-switch_multi_switch__RVRuY">
            <Title title={props.title} style={'s4 bold multi-switch_multi_switch_title__3UWJ6'}></Title>
            {props.description ? <Description description={props.description}></Description> : null}
            <div className="multi-switch-button_wrap__3sDZs ">
                {props.data.map((value, index) => (
                    <Button key = {index} activeIndex={props.activeIndex} text={value} buttonindex={index} variant={"variant-1"}  handleClick={props.handleClick}></Button>
                ))}
            </div>
        </div>
    );
}

export default MultiSwitch;



