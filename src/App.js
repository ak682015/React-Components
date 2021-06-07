import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';
import Movies from './components/movies';

import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/home';
import Products from './components/products';
import ProductDetails from './components/productDetails';
import Posts from './components/posts';
import NotFound from './components/notFound';
import Admin from './components/admin/dashboard';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieDetails from './components/movieDetials';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import MovieForm from './components/movieForm';


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
              <NavBar/>
                <main className="container">
                    <div className="content">
                        <Switch>
                            <Route path="/login" component={LoginForm} />
                            <Route path="/register" component={RegisterForm} />
                            <Route path="/product/:id" component={ProductDetails} />
                            <Route path="/products" render={ (props) => <Products sortBy="newest" {...props}/>} />
                            <Route path="/posts/:year?/:month?" component={Posts} />
                            <Route path="/admin" component={Admin} />
                            <Redirect from="/messages" to="posts"/>

                            <Route path="/movies" component={Movies} />
                            <Route path="/movie/:_id" component={MovieDetails} />
                            <Route path="/new" component={MovieForm} />

                            <Route path="/customers" component={Customers} />
                            <Route path="/rentals" component={Rentals} />


                            <Route path="/not-found" component={NotFound} />
                            <Route path="/" exact component={Home} />
                            {/*<Redirect to="/not-found"/>*/}
                        </Switch>

                    </div>
                </main>
          </React.Fragment>
  );
}

}

export default App;
