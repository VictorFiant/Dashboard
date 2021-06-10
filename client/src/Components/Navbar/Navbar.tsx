import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Drawer, CssBaseline } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';



import useStyles from './styles'
import Sidebar from '../Sidebar/Sidebar';


export const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);


    const handleDrawer = () => {
        setOpen(true)
    }


    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
                <CssBaseline />
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={handleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6">
                        CVE ANALYSIS
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search by CVE-ID" classes={{ root: classes.inputRoot, input: classes.inputInput }} inputProps={{ 'aria-label': 'search' }} />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} classes={{ paper: classes.drawerPaper }} open={open} onClose={() => setOpen(false)}>
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <Sidebar />
                </div>
            </Drawer>
        </div>
    )
}

export default Navbar;