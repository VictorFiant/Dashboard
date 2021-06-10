import React from 'react';
import { Select, Container, Paper, Typography, MenuItem, FormControlLabel, Checkbox, Button } from '@material-ui/core';

import useStyle from './styles';

const Sidebar = () => {
    const classes = useStyle();
    const [age, setAge] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState({
        minor: false,
        major: false,
        critical: false,
    })

    const toggleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    };


    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as number);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper} >
                <Typography gutterBottom variant='subtitle1'>SELECT YEAR</Typography>
                <Select className={classes.margin} open={open} onClose={handleClose} onOpen={handleOpen} value={age} onChange={handleChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </Paper>
            <div className={classes.severity} />
            <Paper elevation={10} className={classes.paper}>
                <Typography gutterBottom variant='subtitle1'>SELECT SEVERITY</Typography>
                <FormControlLabel className={classes.formControl} name="minor" label="Minor" control={
                    <Checkbox color="secondary" checked={checked.minor} onChange={toggleCheckbox} />} />
                <FormControlLabel className={classes.formControl} name="major" label="Major" control={
                    <Checkbox color="secondary" checked={checked.major} onChange={toggleCheckbox} />} />
                <FormControlLabel className={classes.formControl} name="critical" label="Critical" control={
                    <Checkbox color="secondary" checked={checked.critical} onChange={toggleCheckbox} />} />
                <div className={classes.severity} />
                <Button variant="outlined" color="secondary">Reset</Button>
                <Button variant="outlined" color="primary">Apply</Button>
            </Paper>
        </Container>
    )
}

export default Sidebar;
