// this is the main page
import React, { Component } from 'react';
import './Main.css'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles';
import { Paper, Typography } from '@material-ui/core';

const styles = theme => ({

    paper: {
        height: 140,
        width: 100,

    }
})

class Main extends Component {
    state = {  }
    render() { 
        const { classes } = this.props;
        return ( 
            <div display="flex" >
                <Grid container justify="center" alignItems="center" direction="column" >
                    {/* Using h3,4 osv here, byt material ui normally uses typography */}
                    <h3>
                        Dream destination
                    </h3>
                    <h4>
                        Where is your ultimate destination?
                    </h4>
                        
                    <h6>
                        Place search bar here
                    </h6>

                    {/* This is where the cards will be placed, made like paper for now 'till the card component is done */}
                    <Grid container justify="center" direction="row" spacing={2}>
                        {[0, 1, 2].map(value => (
                            <Grid item key={value} >
                                <Paper className={classes.paper} >
                                    <Typography variant="body2"  >
                                        This is a sheet of paper
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Main);