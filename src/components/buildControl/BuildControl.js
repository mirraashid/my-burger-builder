import React from 'react';

const buildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less" disabled={!props.disable} onClick={props.lessClicked}>Less</button>
            <button className="More" onClick={props.moreClicked}>More</button>
        </div>
    );
}

export default buildControl;