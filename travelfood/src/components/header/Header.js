import React from 'react';
import{Autocomplete, AutoComplete} from '@react-google-maps/api';
import {AppBar,ToolBar,Typography,InputBase,Box} from '@material-ui/core';
import SearchIcon from 'material-ui/icons/Search';



const Header = () => {




    return (
        <AppBar position="static">
            <ToolBar className={classes.toolbar}>
                 <Typography variant="h5" className={classes.title}>
                     <Box diplay="flex">
                      <Typography variant="h6" className={classes.title}>
                          Explore new places
                      </Typography>
                      {/* division */}
                      <Autocomplete>
                           <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase placeholder="Search..." classes={{root:classes.inputRoot, input:classes.inputInput}}/>
                           </div>
                      </Autocomplete>
                     </Box>
                 </Typography>
            </ToolBar>
        </AppBar>
    )
}


export default Header;