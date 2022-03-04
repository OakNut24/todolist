import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import ListBlock from './TaskListBlock';
import CreateTaskDialog from './CreateTaskDialog';
import { useEffect, useState } from 'react';
import agent from '../../app/api/agent';

export default function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams();
        params.append('googleId', 'test');
        try {
            agent.Tasks.list(params)
                .then(tasks => setTasks(tasks))
                .catch(err => console.error(err))
                .finally(() => {
                    setLoading(true);
                })
        } catch (err) {
            console.error(err);
        }

    }, [])


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
            <CreateTaskDialog open={true} />
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