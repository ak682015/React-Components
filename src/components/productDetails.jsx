import React, { Component } from 'react';

class ProductDetails extends Component {

    handleSave = () =>{
        this.props.history.replace('/products');
    }
    render() {
        return(
            <React.Fragment>
                <h1>Products Details - {this.props.match.params.id}</h1>
                <button onClick={this.handleSave}>Save</button>
            </React.Fragment>
        )
    }
}

export default ProductDetails;