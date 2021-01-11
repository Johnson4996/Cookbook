import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import "./apptab.css"
import { RecipeFeed } from '../recipes/RecipeFeed';
import { makeStyles } from '@material-ui/core';




const useStyles = makeStyles({
barStyle:{
    "background-color": "#fff",
},
textStyle:{
    color: "black",
    
},
tabStyle:{
    
}
})

export const AppTab = (props) => {
    const classes = useStyles()
    const [selectedTab, setSelectedTab] = React.useState(0)

    const handleChange = (e, newValue) => {
        setSelectedTab(newValue)
      }

    return (
        <>
        <div className="appBarContainer">
            <AppBar className={classes.barStyle} position="static">
                <Tabs className={classes.textStyle} value={selectedTab} onChange={handleChange}>
                    <Tab className={classes.tabStyle} label="Featured" />
                    <Tab label="Recipe Feed"/>
                </Tabs>
            </AppBar>
        </div>
        {selectedTab === 0 && <RecipeFeed {...props}/>}
        {selectedTab === 1 && <RecipeFeed {...props}/>}
        </>
    )
}