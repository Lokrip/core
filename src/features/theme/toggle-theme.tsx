import DropDownMenu from "@/shared/ui/dropdown";
import { Button, MenuItem } from "@mui/material";
import { useTheme } from "next-themes";
import { useState } from "react";

export function ToggleTheme() {
    const { setTheme } = useTheme();
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
            keyboard={<Button>
                <span>Переключатель темы</span>
            </Button>}

            menuList={[
                <MenuItem onClick={() => setTheme("light")} disableRipple key="edit">
                    Светлая
                </MenuItem>,
                <MenuItem onClick={() => setTheme("dark")} disableRipple key="edit">
                    Тёмная
                </MenuItem>
            ]}

            open={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
            handleClick={handleClick}
        />
    )
}