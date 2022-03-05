import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface Props {
    anchorEl: any | null;
    onClose: () => void;
    onDelete: () => void;
}

export default function ListBlockMenu({ anchorEl, onClose, onDelete }: Props) {

    function handleClose() {
        onClose();

    }
    // const handleClose = () => {
    //     onClose();
    // };

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={anchorEl !== null ? true : false}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>Done/Undone</MenuItem>
            <MenuItem onClick={handleClose}>Rename</MenuItem>
            <MenuItem onClick={onDelete}>Delete</MenuItem>
        </Menu>
    );
}
