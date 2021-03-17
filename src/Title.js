import React from 'react';;
function Title(props) {

    return (
        <div className={props.style}>{props.title}</div>
    );
}

export default Title;