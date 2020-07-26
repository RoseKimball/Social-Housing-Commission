import React from 'react';
import Grid from '@material-ui/core/Grid';
import DonorCard from '../Components/Donors/DonorCards'

const donors = [
    {id: 1, name: "Jacki", donations: "4,700", subscriptions: "Doctors Without Borders, March of Dimes, A.D.A, America Works"},
    {id: 2, name: "Fez", donations: "290", subscriptions: "Covid Research, St.Judes, LiveStrong Foundation, ETC."},
    {id: 3, name: "Donna", donations: "3500", subscriptions: "Doctors Without Borders,Christmas Fund, UNICEF, A.D.A, America Works"}    
]

const Donors = () => {
    return (
        <Grid style={{marginTop: "5%", paddingBottom: "5%"}} container direction="row" justify="space-evenly" alignItems="center">
            {donors.map(donor => <DonorCard donor={donor} /> )}
        </Grid>
    )
}

export default Donors;
