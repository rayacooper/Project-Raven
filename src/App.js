import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends Component{

  constructor(){
    super();
    this.state={
      inventoryList: [
        {
          name: "dum",
          url: "https://i.imgur.com/9ueSah6.jpg",
          price: 5.99
        },
        {
          name: "dum",
          url: "https://i.imgur.com/9ueSah6.jpg",
          price: 5.99
        },
        {
          name: "dum",
          url: "https://i.imgur.com/9ueSah6.jpg",
          price: 5.99
        }
      ]
    }
  }

  componentDidMount() {
    axios.get('/api/inventory').then((res)=>{
      this.setState({
        inventoryList: res.data
      })
    })
  }
  addThing(obj){
    axios.post('/api/inventory', obj).then((res) => {
      this.setState({
        inventoryList: res.data
      })
    })
  }

  render(){
    return (
      <div className="App">
        <Dashboard invList={this.state.inventoryList} />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
