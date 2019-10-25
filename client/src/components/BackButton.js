import React, { Component } from 'react';
import './BackButton.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class BackButton extends Component {

    constructor(props){
        super(props);
        this.former = ""
    }
    
    //backarrow to go back to right path considering where you are
    handleClick = () => prop =>{
        console.log(this.props.location.pathname);
        if (this.props.location.pathname === "/search"){
            this.former = "/"
        } 
        else {this.former = "/search"}
    };

    


    render(){
        return ( 
            <Link to={this.former} ><button className = "back-button" onClick={this.handleClick}> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#999999" viewBox="0 0 18 18"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg> </button> </Link>
        );
    }

}

const mapStateToProps = (state) => { //give us accsess to the data in store
    const filter = state
    return {
      word: filter
    }
  }  

export default withRouter(connect(mapStateToProps)(BackButton));