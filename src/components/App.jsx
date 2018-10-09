import React from "react";
import Header from "./Store";
import Inventory from "./Inventory";
import Order from "./Order";
import Inevntory from "./Inventory";
import Store from "./Store";


class App extends React.Component {
    render() {
        return ( 
            <div className="catch-of-the-day">
                 <div className="menu">
                    <Header />
                    <Inevntory />
                    <Order />
                    
                 </div>   
                
            </div>
                
        ) 
    }
}

export default App;