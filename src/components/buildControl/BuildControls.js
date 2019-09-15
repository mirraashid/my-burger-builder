import React from 'react';
import BuildControl from './BuildControl';

const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
]

const buildControls = (props) => {
    return (
        <div className="BuildControls">
            {controls.map(
                ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        lessClicked={() => props.less(ctrl.type)}
                        moreClicked={() => props.more(ctrl.type)}
                        disable={props.disableInfo[ctrl.type]} />
                )
            )}

            <button className="OrderButton"
                disabled={!props.isPurchasable}
                onClick={props.ordered}>Order Now!</button>
        </div>
    );
}

export default buildControls;