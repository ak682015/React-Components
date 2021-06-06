import React, { Component } from 'react';

class Counter extends Component {
    styles ={
        fontSize :10,
        fontWeight: 'bold',
    }

    render() {
        return (
            <React.Fragment>
            <div>
                <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">+</button>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-warning btn-sm m-2"
                    disabled={this.props.counter.value === 0}
                >-</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">x</button>
            </div>

            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "btn m-2 btn-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
        return count === 0 ? "Zero":count;
    }
}
 
export default Counter;