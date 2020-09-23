import React from "react";
import {BrowserRouter, Route} from "react-router-dom";


//dummy components
const Landing = () => {
    return(<div>
        <h1>Landing</h1>
    </div>);
}
const Header = () => {
    return (
        <div>
            <h1>Header!</h1>  
        </div>
    )
}
const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard!</h1>  
        </div>
    )
}


const App = () => {

    return(
        <BrowserRouter>
            <div>
                <Route path="/" component={Landing} exact />
                <Route path="/surveys" component={Dashboard} exact />
            </div>
        </BrowserRouter>
    );

}

export default App;