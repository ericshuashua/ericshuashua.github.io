import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {
    Typography,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    IconButton,
    Drawer,
    Divider,
    CssBaseline,
    Box,
    AppBar,
    Button 
} from '@mui/material';
import logo from '../assets/logo.svg';

const drawerWidth = 240;
const navItems = [
    {
        "name": 'Home', 
        "link": '#home'
    },
    {
        "name": 'About',
        "link": '#about'
    },
    {
        "name": 'Photo',
        "link": '#photo'
    },
    {
        "name": 'Article',
        "link": '#article'
    },
    {
        "name": 'Contact',
        "link": '#contact'
    }
];

const Topbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img src={logo} alt="logo" />
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item["name"]} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', fontFamily: 'Caveat-Regular' }} href={item["link"]}>
                            <ListItemText primary={item["name"]} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" color="transparent" elevation={0}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <img src={logo} alt="logo" />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button 
                                key={item["name"]} 
                                sx={{ color: '#FF5454', marginRight: '2.5rem', 
                                    ':hover': {
                                        color: 'white'
                                    }
                                }}
                                href={item["link"]}
                            >
                                {item["name"]}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

export default Topbar