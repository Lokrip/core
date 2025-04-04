"use client"

import DropDownMenu from '@/shared/ui/dropdown';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';

export default function Profile() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <DropDownMenu 
            keyboard={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
            menuList={[
                <MenuItem onClick={handleClose} disableRipple key="edit">
                    <EditIcon />
                    Edit
                </MenuItem>,
                <MenuItem onClick={handleClose} disableRipple key="duplicate">
                    <FileCopyIcon />
                    Duplicate
                </MenuItem>,
                <Divider sx={{ my: 0.5 }} key="divider" />,
                <MenuItem onClick={handleClose} disableRipple key="archive">
                    <ArchiveIcon />
                    Archive
                </MenuItem>,
                <MenuItem onClick={handleClose} disableRipple key="more">
                    <MoreHorizIcon />
                    More
                </MenuItem>
            ]}
            open={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
            handleClick={handleClick}
        />
    )
}