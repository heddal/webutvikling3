/* the search box is made with code from https://material-ui.com */

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { changeSearchword } from '../actions/SearchAction'

const Searchbox = (props) => {


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 500,
  },
}));

    const classes = useStyles();
    const [values, setValues] = React.useState({
        search:''
    });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const keyPressed = prop => event => {
    if (event.keyCode === 13) {
      props.changeSearchword(values.search)
    }
  };




  return (
    <div className={classes.root}>
      <TextField
        id="search-box"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="search"
        value={values.search}
        onChange={handleChange('search')}
        onKeyUp = {keyPressed(props.keyPressed)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility">
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchword: (word) => dispatch(changeSearchword(word))
  }
}


export default connect(null, mapDispatchToProps)(Searchbox);