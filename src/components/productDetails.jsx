import React, { Component } from 'react';

class ProductDetails extends Component {

    render() {
        return(
            <React.Fragment>
                <h1>Products Details - {this.props.match.params.id}</h1>
            </React.Fragment>
        )
    }
}

export default ProductDetails;