import React, { Component } from 'react';
import './BackButton.css';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class BackButton extends Component {

    constructor(props){
        super(props);
        this.former = "search"
    }
    
    //backarrow to go back to right path considering where you are
    handleClick = ()  => {
        console.log("former pathname: " + this.props.location.pathname);
        const path = this.props.location.pathname;
        if (path.includes("search")){
            
            this.former = "/"
        } 
        else {
            if(this.former === "search"){
                this.former= "/";
            }
            this.former = "/search"
        }
        console.log("firmer: " +this.former)
    };

    


    render(){
        return ( 
            <Link to={this.former} ><button className = "back-button" onClick={this.handleClick.bind(this)}> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#999999" viewBox="0 0 18 18"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg> </button> </Link>
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