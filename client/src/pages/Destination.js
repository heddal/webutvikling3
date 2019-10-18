//Page that shows more information about the destination chosen

import React, { Component } from 'react';
import Image from '../components/Image';
import BackButton from '../components/BackButton';
import Infotext from '../components/Infotext'
import './Destination.css'



class Destination extends Component {
    state = {
    }

    render() {
        return(
            <div className = 'container-destination'>
                <div className = 'back'>
                    <BackButton />
                </div>
                <div className = 'image'>
                    <Image />
                </div>
                <div className = 'text'>
                    <Infotext />
                </div>
            </div>
        )
    }
}

export default Destination