import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Link} from 'react-router-dom';
import {NavRoutes} from "../../utils/consts";
import {BACKGROUND_BLUE} from "../../utils/colors";
import {Paper} from "@mui/material";

export default function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    backgroundColor: BACKGROUND_BLUE,
                    height: 87,
                    boxShadow: "none",
                    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
            }}
            >
                {NavRoutes.map((route, index) => (
                    <BottomNavigationAction
                        key={route.path}
                        component={Link}
                        label={route.name}
                        to={route.path}
                        icon={<img src={route.icon} alt={route.path}/>}
                        sx={{
                            padding: 0,
                            color: value === index ? "white" : "rgba(255, 255, 255, 0.5)",
                            '&.Mui-selected': {
                                color: 'white',
                                '.MuiBottomNavigationAction-label': {
                                    fontSize: '16px',
                                },
                            },
                            '.MuiBottomNavigationAction-label': {
                                marginTop: '8px',
                                fontSize: value === index ? '16px' : '14px',
                            },
                        }}
                    />
                ))}
            </BottomNavigation>
        </Paper>
    );
}