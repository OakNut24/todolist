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

export default function ListBlock() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    function handleClose() {
        setAnchorEl(null);
        console.log("close")
    }

    function handleCheckBoxClick() {
        console.log("checkbox pressed")
    }

    return <>
        <Card sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'none' }}>
            <CardHeader
                title="Alon's List"
                subheader="subtitle"
                titleTypographyProps={{
                    sx: { fontSize: 16 },
                }}
            />


            <CardActions disableSpacing>
                <CheckBox color='secondary.main' onClick={handleCheckBoxClick} />
                {/* <IconButton aria-label="add to favorites">
                    <CheckBoxIcon fontSize='medium' sx={{ color: 'secondary.main' }} />
                </IconButton> */}
                <IconButton aria-label="add to favorites" onClick={handleClick}>
                    <DragHandleIcon fontSize='medium' />
                </IconButton>
                <ListBlockMenu anchorEl={anchorEl} onClose={handleClose} />
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