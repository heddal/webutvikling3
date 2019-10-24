/* the search box is made with code from https://material-ui.com */

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { changeSearchword } from '../actions/SearchAction'
import { withRouter } from 'react-router-dom';



const Searchbox = (props) => {


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 500,
    backgroundColor: 'white',
  },
}));

    const classes = useStyles();
    const [values, setValues] = React.useState({
        search: props.word
    });

//Adds keypressed to search to make up the search word
  const handleChange = prop => event => { 
    setValues({ ...values, [prop]: event.target.value });
  };
  
//If the key pressed is the enter-key, the searchword will be updated in store
  const keyPressed = prop => event => { 
    if (event.keyCode === 13) { //13 is enter
      props.changeSearchword(values.search)
      props.history.push('/search/'+ values.search);
    }

  };

  


  return (
    <div className={classes.root}>
      <TextField
        id="search-box"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="search location"
        value={values.search}
        onChange={handleChange('search')}
        onKeyUp = {keyPressed(props.keyPressed)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon/>
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
};

const mapStateToProps = (state) => { //give us accsess to the data in store
  return {
    word: state.search.searchWord
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Searchbox));