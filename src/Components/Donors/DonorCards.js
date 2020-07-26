import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


function DonorCard(props) { 
        
    return (
        <Card style={{maxWidth: "30%"}} key={props.donor.id}>
            <CardContent>
                <Typography variant="body1">{props.donor.name}</Typography>
                <Typography variant="body1">Total Donations: {props.donor.donations}</Typography>
                <Typography variant="body1">Subscriptions: {props.donor.subscriptions}</Typography>
            </CardContent>
        </Card>
    )
}

export default DonorCard;
