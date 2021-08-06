
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Blink from 'react-blink-text';



const useStyles = makeStyles((theme) => ({
    root: {
        
       
        borderColor: "#20232a",
        fontSize: 22,
    },
    table: {
   

    },
    title: {
        border: "1px dotted #82b74b",
    
    },
    title1:{
        border: "3px solid #82b74b",
    },
    head:{
        border: "3px solid #86af49",
        textTransform:"uppercase",
        padding:"9px",
    
    }

}));

export default function AllCountries() {
    const [globalData, setGlobalData] = useState([{}]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.covid19api.com/summary");
            let data = await response.json();

            setGlobalData(Object.values(Object.values(data.Countries)));
            console.log(Object.values(Object.values(data.Countries)))
        }
        getData();
    }, []);
    console.log(globalData.Countries)

    const classes = useStyles();

    return (
        <div className={classes.root}>
                        <h1 align="center " className={classes.top}>     <Blink color='#405d27' text='COUNTRY WISE COVID DATA' fontSize='20'>
            </Blink> </h1>
            <br />
            <table className={classes.table}>
                <thead >
                    <tr >
                        <th className={classes.head}> Country Name</th>
                    
               
                        <th className={classes.head}>Total Cases</th>
                       
                        <th className={classes.head}>Total Deaths</th>
                    
                        <th className={classes.head}>New confirmed</th>
                    
                        <th className={classes.head}>Total Recovered</th>
                    
                        <th className={classes.head}>New Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {globalData.map((key, ind) => {
                        return (
                            <tr key={ind}>
                                <th className={classes.title1}>
                                  {globalData[ind].Country}
                                </th>
                             
                                <td align="center " className={classes.title}>
                                    {globalData[ind].TotalConfirmed}
                                </td>
                             
                                <td align="center" className={classes.title}>
                                    {globalData[ind].TotalDeaths}
                                </td>
                     
                                <td align="center" className={classes.title}>
                                    {globalData[ind].NewConfirmed}
                                </td>
                  
                                <td align="center" className={classes.title}>
                                    {globalData[ind].TotalRecovered}
                                </td>
                               
                                <td align="center" className={classes.title}>
                                    {globalData[ind].NewDeaths}
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}