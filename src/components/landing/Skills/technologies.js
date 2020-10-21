import React, { useContext, useState } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import technologies from "./technologies.json";
import learn from "./learnTech.json";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";
import Tooltip from "@material-ui/core/Tooltip";

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#2196f3",
        },
    },
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={1}>
                    <Typography component={'span'}>{children}</Typography>
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
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Technologies = () => {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const Icon = (i, name, src) => {
        return (
            <Tooltip title={name}>
                <li key={i} className="skills-list-item">
                    <img height={"36"} width={"36"} src={src} />
                </li>
            </Tooltip>
        );
    };

    return (
        <MuiThemeProvider theme={customTheme}>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="All" {...a11yProps(0)} />
                        <Tab label="Most Used" {...a11yProps(1)} />
                        <Tab label="Looking to Learn" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <ul className="skills-list">
                            {technologies.map(({ i, name, icon }) =>
                                Icon(i, name, icon)
                            )}
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <ul className="skills-list">
                            {technologies
                                .filter((ele) => ele.familiarity === "primary")
                                .map(({ i, name, icon }) =>
                                    Icon(i, name, icon)
                                )}
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <ul className="skills-list">
                            {learn.map(({ i, name, icon }) =>
                                Icon(i, name, icon)
                            )}
                        </ul>
                    </TabPanel>
                </SwipeableViews>
            </div>
        </MuiThemeProvider>
    );
};

export default Technologies;
