// this is the main page
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './Main.css';
import MainCards from '../components/MainCards';
import Searchbox from '../components/Searchbox';


class Main extends Component {
    state = {  }
    render() {
        return (
            <div className="alt">
                <Grid container justify="center" alignItems="center" direction="column"  className="main">
                    <Grid container className="text">
                        <div className="content">
                            <h3>
                                Dream destination
                            </h3>
                            <h4>
                                Where is your ultimate destination?
                            </h4>
                            <Searchbox/>
                            <p>
                              To se the most visited pages
                              <Link to="/wordcloud" className='link'>
                                click here
                              </Link>
                            </p>
                        </div>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
<<<<<<< HEAD
                           <MainCards/> 
                        
=======
                      <Cards/>
>>>>>>> #11 make wordcloud
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Main;
