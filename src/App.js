import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';
import Movies from './components/movies';


class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 3},
            {id: 4, value: 4},
        ]
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value = counters[index].value + 1;
        this.setState({counters: counters});
    }

    handleDelete = counterId  => {
        const counters = this.state.counters.filter(
            c => c.id !== counterId
        );
        this.setState({counters: counters});
    };

    handleReset = () => {

        const counters = this.state.counters.map( c => {
            c.value=0;
            return c;
        });
        this.setState({counters: counters});
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        if(counters[index].value - 1 <= 0){
            counters[index].value = 0;
        }
        else{
            counters[index].value = counters[index].value - 1;
        }

        this.setState({counters:counters})
    }

    render() {

        return (
          <React.Fragment>
              {/*<NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>*/}
                <main className="container">
                    <Movies />
                    {/*<Counters*/}
                    {/*    counters = {this.state.counters}*/}
                    {/*    onReset={this.handleReset}*/}
                    {/*    onIncrement={this.handleIncrement}*/}
                    {/*    onDelete={this.handleDelete}*/}
                    {/*    onDecrement={this.handleDecrement}*/}
                    {/*/>*/}

                </main>
          </React.Fragment>
  );
}

}

export default App;
