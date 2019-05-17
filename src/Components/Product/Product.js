import React, {Component} from 'react';

class Product extends Component{
    render(){
        return(
            <div className="main">
                <div className="info">
                    <h1>{this.props.name}</h1>
                    <h2>{this.props.price}</h2>
                    <img src={this.props.url} alt="Product"/>
                </div>
                <div className="buttons">
                    <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
                    <button onClick={() => this.props.edit(this.props.id)}>Edit</button>
                </div>
                
            </div>
        )
    }
}

export default Product;