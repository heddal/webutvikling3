//Page that shows more information about the destination chosen

import React, { Component } from 'react';
import Image from '../components/Image';
import Infotext from '../components/Infotext'
import './Destination.css'
import { Grid, Paper } from '@material-ui/core';


class Destination extends Component {
    state = {
    }

    render() {
        return(
            <div className = 'container-destination'>
                <div className = 'back'>
                    hei
                </div>
                <Grid
                    container
                    spacing={16}
                    style={{padding: 20}}
				    direction='row'
				    justify='center'
                    alignItems='center'
                    className='papir'

                >
                    <Paper className='paper'>
                        
                        <div className = 'image'>
                            <Image />
                        </div>
                        <div className = 'text'>
                            <Infotext />
                        </div>
                    </Paper>
                </Grid>
                
                
            </div>
        )
    }
}

export default Destination