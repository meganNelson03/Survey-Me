import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends React.Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false: 
                return (
                    <li>
                       <a href="/auth/google">Login With Google</a> 
                    </li>
                );
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }   
    }


    render() {
        console.log("PROPS:")
        console.log(this.props);
        return (
          <nav>
              <div className="nav-wrapper">
                <Link 
                    to={ this.props.auth ? "/surveys" : "/" } 
                    className="left brand-logo"
                >
                    SurveyMe
                </Link>
                <ul className="right">
                    {
                        this.renderContent()
                    }
                </ul>   
              </div>
          </nav>
        );
    }

}


function mapStateToProps({ auth }) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(Header);