import React, { Component } from 'react';
import bilde from './bilde.jpg';
import { makeStyles } from '@material-ui/core';
import { borderRadius } from '@material-ui/system';

const Image = (props) => {

    const useStyles = makeStyles( theme => ({
        image: {
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: '7px',
            boxShadow: '0px 10px 10px 0px #aaaaaa'
        }
    }))

    const classes = useStyles();

    return (
        <img className = {classes.image} src = {bilde} alt = "bilde"/>
    )

}

export default Image;
