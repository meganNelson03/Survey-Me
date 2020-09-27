import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => {
    return(
        <div>
            Dashboard
        </div>
    );
}



class App extends React.Component {

    // execute as soon as App renders
    componentDidMount() {
        this.props.fetchUser();
    }

    render() { 
        console.log("APP PROPS: ");
        console.log(this.props);
        return(
        <BrowserRouter>
            <div className="container">
                <Header />
                <Route path="/" component={Landing} exact />
                <Route path="/surveys" component={Dashboard} exact />
            </div>
        </BrowserRouter>
        );
    }

}

// actions are now available to app as Props
export default connect(null, actions)(App);