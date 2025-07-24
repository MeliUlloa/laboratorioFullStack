import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button, TextField, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import '../../assets/styles/styles.css'; // Tu archivo de estilos
import '../NavBar/NavBar.css'
import PersonIcon from '@mui/icons-material/Person';  // Ícono de Persona

function Navbar() {
    return (
        <AppBar
            position="fixed"
            className="navbar"
            sx={{
                backgroundColor: 'var(--primary)', // Usar el color primario desde las variables
                padding: '10px 20px', // Espaciado para que se vea bien
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" component="div" className="navbar-title" sx={{ color: 'var(--background)' }}>
                        <img src={require('../../assets/styles/images/descarga.png')} alt="Logo" style={{
                            height: '75px', // Tamaño predeterminado
                            width: 'auto',
                            transition: 'height 0.3s ease', // Animación para que el logo cambie suavemente
                        }}
                            sx={{
                                height: { xs: '50px', sm: '60px', md: '75px' },  // Ajuste de tamaño responsivo
                            }}
                        />
                    </Typography>
                </Box>

                {/* Buscador */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        // placeholder="¿Qué estás buscando?"
                        size="small"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            maxWidth: 600, // largo del byscador
                            '& .MuiOutlinedInput-root': {
                                // Elimina el borde de enfoque (outline)
                                '&:focus': {
                                    outline: 'none',  // Elimina el contorno cuando está enfocado
                                    border: 'none',  // Elimina el borde cuando está enfocado
                                },
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <IconButton sx={{ fontSize: 30 }}> {/* Cambiar el tamaño aquí */}
                                    <SearchIcon sx={{ fontSize: 30 }} /> {/* Cambiar el tamaño aquí también */}
                                </IconButton>
                            ),
                        }}
                    />
                </Box>

                {/* Iconos de sesión y carrito */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button color="inherit" sx={{ marginLeft: 2 }}>
                        <PersonIcon sx={{ marginRight: 1 }} />
                        Iniciar sesión</Button>
                    <IconButton color="inherit" sx={{ marginLeft: 2 }}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
