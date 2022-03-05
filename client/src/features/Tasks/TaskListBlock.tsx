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
import Grid from '@mui/material/Grid';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ListBlockMenu from './ListBlockMenu';
import CheckBox from '../../app/components/Checkbox';
import { Task } from '../../app/Models/Task';
import agent from '../../app/api/agent';




export default function ListBlock(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    function handleClose() {
        setAnchorEl(null);
        console.log("close")
    }

    async function handleCheckBoxClick(newStatus: boolean) {
        console.log("checkbox pressed")
        try {
            const response = await agent.Tasks.updateTask(props.task._id, {
                status: newStatus
            })
        } catch (err) {
            console.error("error sending new status to server" + err);
        }
    }

    function handleDelete() {
        props.onDelete(props.task._id);
    }

    return <>
        <Card sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'none' }}>
            <CardHeader
                title={props.task.title}
                subheader={props.task.desc}
                titleTypographyProps={{
                    sx: { fontSize: 16 },
                }}
            />
            <CardActions disableSpacing>
                <CheckBox color='secondary.main' defaultState={props.task.status} onClick={handleCheckBoxClick} />
                {/* <IconButton aria-label="add to favorites">
                    <CheckBoxIcon fontSize='medium' sx={{ color: 'secondary.main' }} />
                </IconButton> */}
                <IconButton aria-label="task menu" onClick={handleClick}>
                    <DragHandleIcon fontSize='medium' />
                </IconButton>
                <ListBlockMenu anchorEl={anchorEl} onClose={handleClose} onDelete={handleDelete} />
            </CardActions>

        </Card>
        <Divider />

    </>
}


{/* <Box>
    <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
    >
        <Grid item xs={8}>
            <Typography>Title</Typography>
            <Typography>Desc</Typography>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>

    </Grid>
</Box> */}