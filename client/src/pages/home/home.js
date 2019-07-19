import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Challenges from '../../components/challenges'
import Result from '../../components/result'
import Topscore from '../../components/topscore'
import Players from '../../components/players'
import './home.css'
import Garage from '../garage/garage'

function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };
  
  const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
  }));
  
const Home = _ => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChangeIndex(index) {
        setValue(index);
    }
    return (
        <div className={classes.root} id="homenav">
            <AppBar position="static" color="blue" className="appbar">
                <Tabs className="tabs"
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                >
                <Tab label="Top Score" />
                {/* <Tab label="Players" /> */}
                {/* <Tab label="Challenges" />
                <Tab label="Result" /> */}
                <Tab label='Garage'/>
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabContainer dir={theme.direction}><Topscore /></TabContainer>
                {/* <TabContainer dir={theme.direction}><Players /></TabContainer> */}
                {/* <TabContainer dir={theme.direction}><Challenges /></TabContainer>
                <TabContainer dir={theme.direction}><Result /></TabContainer> */}
                <TabContainer dir={theme.direction}><Garage /></TabContainer>
            </SwipeableViews>
    </div>
    )
}

export default Home