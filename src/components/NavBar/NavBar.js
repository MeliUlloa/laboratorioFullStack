import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../assets/styles/styles.css'; // Tu archivo de estilos
import '../NavBar/NavBar.css'

function Navbar() {
    return (
        <AppBar position="fixed" className="navbar">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Título a la izquierda */}
                <Typography variant="h6" component="div" className="navbar-title">
                    Osadia Mini Market
                </Typography>

                {/* Botones alineados a la derecha */}
                <Box sx={{ display: 'flex' }}>
                    <Button className="navbar-button" color="inherit">Inicio</Button>
                    <Button className="navbar-button" color="inherit">Productos</Button>
                    <Button className="navbar-button" color="inherit">Contacto</Button>
                    <Button className="navbar-button" color="inherit" startIcon={<ShoppingCartIcon />}>Carrito</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
