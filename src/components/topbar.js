import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// importing Stats
import Allcountries from './Allcountries';
import GlobData from './Pakistan';
import Chart from './chart';
import Prevention from './Precautions';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        margin: '0 auto',
    },

    tabs: {
        maxWidth: 1000,
        width: '100%',
        margin: '0 auto',
    },

}));

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#82b74b' }}>
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    // aria-label="nav tabs example"
                    className={classes.tabs}
                >
                    <LinkTab

                        label="GLOBAL" href="/Pakistan" {...a11yProps(0)} />
                    <LinkTab label="COVID-19 CHART" href="/chart" {...a11yProps(1)} />
                    <LinkTab label="COUNTRy WISE DATA" href="/Allcountries" {...a11yProps(2)} />
                    <LinkTab label="Preventions" href="/Allcountries" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel
                className={classes.tabs}
                value={value} index={0}>
                <GlobData />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Chart />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Allcountries />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Prevention />
            </TabPanel>
        </div>
    );
}