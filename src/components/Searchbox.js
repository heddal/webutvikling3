/* code from https://material-ui.com, slightly modefyied */

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const Searchbox = () => {

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


  return (
    <div className={classes.root}>
      <TextField
        id="search-box"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="search"
        value={values.search}
        onChange={handleChange('search')}
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


export default Searchbox;