import React from 'react';
import Radio from '@material-ui/core/Radio';
import { green, red, yellow } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

export const RedRadio = withStyles({
  root: {
    color: red[400],
    '&$checked': {
      color: red[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export const YellowRadio = withStyles({
  root: {
    color: yellow[400],
    '&$checked': {
      color: yellow[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);