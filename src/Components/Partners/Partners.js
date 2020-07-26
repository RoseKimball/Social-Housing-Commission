import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Partners() {
    return (
        <Grid style={{paddingBottom: "5%"}} container direction="row" justify="center" alignItems="center">
            <Card style={{width: "95%"}}>
                <CardContent>
                    <Typography style={{fontWeight: "bold", marginBottom: "2%"}} variant="body1">Top Partners</Typography>
                    <Grid container direction="row" justify="space-evenly" alignItems="center">
                        <Typography variant="body1">Doctors Without Borders</Typography>
                        <Typography variant="body1">Unicef</Typography>
                        <Typography variant="body1">Green Peace</Typography>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Partners;