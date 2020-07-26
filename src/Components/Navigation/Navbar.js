import React from "react";

import {
    CssBaseline,
    AppBar,
    Box,
    Button
} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';




const styles = theme => ({
    root: {
        height: "10%",
        backgroundColor: "#ac3b61"
    },
    button: {
        padding: "20px",
        fontWeight: "bold"
    },
    username: {
        marginLeft: "auto",
        marginRight: "5%", 
        color: 'white',
        borderColor: 'white'
    },
    inputStyle: {
        color: 'white',
        borderColor: 'white',
    },
    password: {
        marginRight: "2%", 
        color: 'white',
        borderColor: 'white' 
    },
    submit: {
        padding: '0 2% 0 2%',
        margin: '5px',
        backgroundColor: '#ee2dc'

    }
})



function Navbar(props) {
    return (
        <div>
            <CssBaseline />
            <AppBar className={props.classes.root}>
                <Box display="flex">
                    <Button className={props.classes.button} color="inherit">Social Housing Commission</Button>
                    <Button className={props.classes.button} color="inherit">Join</Button>
                    <Button className={props.classes.button} color="inherit">FAQ</Button>
                    <TextField
                        classes={{root: props.classes.username}}
                        InputProps={{
                            className: props.classes.inputStyle
                          }}
                        id="standard-email-input"
                        label="email"
                        type="email" 
                        autoComplete="current-email"
                    />
                    <TextField
                        classes={{root: props.classes.password}}
                        InputProps={{
                            className: props.classes.inputStyle
                          }}
                        id="standard-password-input"
                        label="password"
                        type="password" 
                        autoComplete="current-password"
                    />
                    <Button className={props.classes.submit} variant="contained" >
                        Login
                    </Button>
                </Box>
            </AppBar>
        </div>
    );
}


export default withStyles(styles, {withTheme: true})(Navbar)