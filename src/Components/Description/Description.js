import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


function Description(props)  {
    return (
        <div>
            <Paper style={{backgroundColor: "#ac3b61", padding: "50px"}}  elevation={3}>
                <Typography style={{color: "white", fontWeight: "bold", marginBottom: "20px"}} variant="h6">What is the Social Housing Commission?</Typography>
                <Typography style={{color: "white", margin: "50px, 50px, 50px, 0px", textAlign: "left", fontSize: "20px"}} variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla ut blandit leo. Sed et tortor scelerisque, pulvinar mi nec, placerat nulla. Donec elementum condimentum 
                est ornare lacinia. Aliquam at feugiat sem. Donec suscipit eros sed nisl commodo egestas. Maecenas maximus, tortor 
                ut convallis eleifend, orci urna rhoncus nunc, a imperdiet metus neque at metus. Suspendisse ut dui ut mauris cursus 
                dignissim. Vivamus justo lectus, ornare sit amet nisi nec, faucibus elementum ligula.Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Nulla ut blandit leo. Sed et tortor scelerisque, pulvinar mi nec, placerat nulla. Donec elementum condimentum 
                est ornare lacinia. Aliquam at feugiat sem. Donec suscipit eros sed nisl commodo egestas. Maecenas maximus, tortor ut convallis 
                eleifend, orci urna rhoncus nunc, a imperdiet metus neque at metus. Suspendisse ut dui ut mauris cursus dignissim. Vivamus justo 
                lectus, ornare sit amet nisi nec, faucibus elementum ligula.</Typography>
            </Paper>
        </div>
    );
};


export default Description