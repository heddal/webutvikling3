import React, { Component } from 'react';
import './BackButton.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';


class BackButton extends Component {

    constructor(props){
        super(props);
        this.former = ""
    }
    
    componentWillMount(){
        console.log(this.props.location.pathname)
        console.log(this.props.location.pathname === "/Destination"); 
        if (this.props.location.pathname === "/Destination"){
            this.former = "/Search"
            console.log("former: ", this.former)
        } else {this.former = "/"}
    };

    


    render(){
        return ( 
            <Link to={this.former} ><button className = "back-button"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#999999" viewBox="0 0 18 18"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg> </button> </Link>
        );
    }

}

export default withRouter(BackButton);