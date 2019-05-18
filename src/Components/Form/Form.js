import React, {Component} from 'react';

class Form extends Component{

    constructor(props){
        super(props)
        this.state={
            name:"",
            price: 0,
            image: ""
        }
    }

    updateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updatePrice = (e) => {
        this.setState({
            [e.target.name]: Number(e.target.value)
        })
    }

    cancelChristmas = () => {
        this.setState({
            name: "",
            price: 0,
            image: ""
        })
    }

    render(){
        return(
            <div>
                <label>Product Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={(event) => {this.updateInput(event)}}/>
                <label>Price:</label>
                <input type="text" name="price" value={this.state.price} onChange={(event) => {this.updatePrice(event)}}/>
                <label>Image URL:</label>
                <input type="text" name="image" value={this.state.image} onChange={(event) => {this.updateInput(event)}}/>
                <button onClick={() => this.cancelChristmas}>Cancel</button>
                <button onClick={ () => {this.props.addThing(this.state)
                    .then(() => {this.cancelChristmas})}}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;