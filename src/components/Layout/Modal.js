import React from 'react';
import Backdrop from './Backdrop';

const modal = (props) => {
    return (
        <React.Fragment>
            <Backdrop displayBackdrop={props.show} clicked={props.modalClosed} />
            <div className="Modal" style={{ display: props.show ? 'block' : 'none' }}>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default modal;
