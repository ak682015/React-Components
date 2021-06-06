import {render} from 'react';
import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {

    render () {
        const { onReset, onIncrement, onDecrement, onDelete, counters } = this.props;
        return (
            <div>
                <button onClick={onReset} className={"btn btn-primary btn-sm mt-2"}>
                    Reset
                </button>
                {counters.map(counter =>
                    <Counter key={counter.id}
                             onIncrement={onIncrement}
                             onDelete={onDelete}
                             onDecrement={onDecrement}
                             counter={counter}
                    >
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;