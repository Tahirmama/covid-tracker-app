import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Blink from 'react-blink-text';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color:"Black",
        borderBottom:"10px solid #405d27",
       
    },
    top:{
        fontSize:60,
    }
}));

export default function Prevention() {
    const classes = useStyles();

    return (
        <div className={classes.root}>    
        <br/>
        <h1 align="center " className={classes.top}>     <Blink color='#405d27' text="PREVENTIONS">
            </Blink> </h1>
            <br/>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <img src="https://covid.gov.pk/assets/img/prevention/s1.png" alt="Social Distancing" title="Social Distancing"/>
                        <h3>Avoid Crowded Places (Social Distancing)</h3>
                        <p>
                            As an individual, you can lower your risk of infection by reducing your rate of contact with other people.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <img src="https://covid.gov.pk/assets/img/prevention/s2.png" alt="Wear a Face Mask" title="Wear a Face Mask"/>
                        <h3>Wear a Face Mask</h3>
                        <p>
                        You should continue to use the surgical mask in all public places until you are advised.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <img src="https://covid.gov.pk/assets/img/prevention/s3.png" alt="Cover Mouth" title="Cover Mouth"/>
                        <h3>Cover Mouth when Coughing</h3>
                        <p>
                        Cover your mouth and nose with a tissue or your sleeve (not your hands) when coughing or sneezing.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper} >
                        <img src="https://covid.gov.pk/assets/img/prevention/s4.png" alt="Wash Hand" title="Wash Hand"/>
                        <h3>Wash Hand Frequently</h3>
                        <p>
                        Wash hands often with soap and water for at least 20 seconds. Use an alcohol-based hand sanitizer if soap and water are not available.
                        </p>
                    </Paper>
                </Grid>  
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper} >
                        <img src="https://covid.gov.pk/assets/img/prevention/s5.png" alt="Medical Care" title="Medical Care"/>
                        <h3>Seek Medical Care</h3>
                        <p>
                        Seek medical care right away. Before you go to a doctor’s office or emergency room, call ahead and tell them about your recent travel and your symptoms.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <img src="https://covid.gov.pk/assets/img/prevention/s6.png" alt="Avoid Contact with Animals" title="Avoid Contact with Animals"/>
                        <h3>Avoid Contact with Animals</h3>
                        <p>
                        Avoid animals (alive or dead), animal markets, and products that come from animals (such as uncooked meat).
                        </p>
                    </Paper>
                </Grid>
   </Grid>
        </div>
    );
}
