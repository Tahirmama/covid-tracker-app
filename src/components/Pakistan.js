import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Blink from 'react-blink-text';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 10,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "black",
        backgroundColor: "#b5e7a0",
        marginTop: 40,
        borderRadius: 10,
        textTransform: 'uppercase',
        letterSpacing: 2,
        borderBottom:"14px solid #405d27",



    },
    top: {
        fontSize: 40,

    },
    title: {
        letterSpacing: 5,

    },

}));

export default function GlobData() {
    const classes = useStyles();

    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.covid19api.com/summary");
            let data = await response.json();
            delete data.Global.Date;
            setGlobalData(data.Global);
        }
        getData();
    }, [])


    return (
        <div className={classes.root}>
            <h1 align="center " className={classes.top}>     <Blink color='#405d27' text='GLOBAL COVID DATA' fontSize='20'>
            </Blink> </h1>
            <Grid container spacing={3}>
                {Object.keys(globalData).map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind} >
                            <Paper
                                className={classes.paper}
                                elevation={12}>
                                <h3 className={classes.title}>
                                    {key}
                                </h3>
                                <h3>{globalData[key]}</h3>

                            </Paper>
                        </Grid>
                    )
                })}

            </Grid>
            <br />
            <br />
        </div>
    );
}
