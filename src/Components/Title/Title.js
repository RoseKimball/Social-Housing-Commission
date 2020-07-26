import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



function Title(props) {
    return (
        <div style={{ paddingBottom: "10%"}}>
            <Grid container direction="column" justify="center" alignItems="flex-start">
                <Typography  style={{marginTop: "10%", marginLeft: "5%", color: "#ac3b61"}} variant="h2">Social</Typography>
                <Typography style={{marginLeft: "5%", color: "white"}} variant="h2">Housing</Typography>
                <Typography style={{marginLeft: "5%", color: "white"}} variant="h2">Commission</Typography>
            </Grid> 
        </div> 
    )
}

export default Title

    
        
    





        

