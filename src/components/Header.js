import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import img from "./Covid_.png"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',


    },
  },

  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },


  pic: {
    height: 100,
    width: 100,
    padding: 10,



  },

}));

export default function Header() {
  const classes = useStyles();

  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#82b74b' }}>
        <Toolbar>
          <img src={img} alt="CovidLogo" className={classes.pic}  title="covid-19"/>
          <Typography className={classes.title} variant="h3" noWrap >
            COVID-19 APP
          </Typography>
          <h3>
            Date :{" "}
            {n}{" "} {date}{"-"}{month}{"-"}{year}
          </h3>

        </Toolbar>
      </AppBar>
    </div>
  );
}