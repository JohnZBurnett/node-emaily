import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
              return "Still deciding";
            case false:
              return "I'm logged out"
            default:
              return "I'm logged in"; 
        }
    }

    render() {
        console.log("Header Render: ", this.props); 
        return (
            <nav>
                <div className="nav-wrapper">
                  <a className="left brand-logo">Emaily</a>
                  <ul className="right">
                    {this.renderContent()} 
                  </ul>
                </div>
            </nav>
        ); 
    }
}

function mapStateToProps({auth}) {
    return { auth };
}

export default connect(mapStateToProps)(Header); 