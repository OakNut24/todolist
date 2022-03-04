import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import ListBlock from './ListBlock';

export default function List() {

    return <>
        <Card sx={{ width: 345 }}>
            <CardHeader
                title="Todo List Example"
                titleTypographyProps={{
                    sx: { fontSize: 20 },
                }}
            />
            <Divider />

            <CardContent>
                <ListBlock />
                <ListBlock />

                <ListBlock />
                <ListBlock />
                <ListBlock />
                <ListBlock />
                <ListBlock />
                <ListBlock />

            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <AddIcon fontSize='large' sx={{ color: 'secondary.main' }} />
                </IconButton>
            </CardActions>
        </Card></>
}

// <Card sx={{ maxWidth: 345 }}>
//     <CardHeader
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//     />

//     <CardContent>
//         <Typography variant="body2" color="text.secondary">
//             This impressive paella is a perfect party dish and a fun meal to cook
//             together with your guests. Add 1 cup of frozen peas along with the mussels,
//             if you like.
//         </Typography>
//     </CardContent>
//     <CardActions disableSpacing>
//         {/* <IconButton aria-label="add to favorites">
//                     <FavoriteIcon />
//                 </IconButton> */}
//     </CardActions>
// </Card>