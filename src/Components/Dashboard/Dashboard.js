import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component{

    constructor(props){
        super(props);
    }



    render(){
        const inventoryList = this.props.invList.map((e, i) => {
            return <Product key={i} name={e.name} url={e.url} price={e.price}
            delete={this.props.delete}/>
        })
        return(
            <div>
                DASHBOARD
                {inventoryList}
            </div>
        )
    }
}

export default Dashboard;