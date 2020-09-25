import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";

const App = () => {

    return(
        <BrowserRouter>
            <div className="container">
                <Header />
                {/* <Route path="/" component={Landing} exact /> */}
                {/* <Route path="/surveys" component={Dashboard} exact /> */}
            </div>
        </BrowserRouter>
    );

}

export default App;