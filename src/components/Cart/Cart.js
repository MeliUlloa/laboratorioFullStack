import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Box, Typography, Button, Divider,  Paper, IconButton, Grid, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Cart() {
    const { cart, removeItem, clearCart } = useContext(CartContext);
    // Calcular total general
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const descuento = total * 0.10;
    const totalFinal = total - descuento;
    
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <ShoppingCartIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
                <Typography variant="h4" fontWeight="bold">Mi carrito</Typography>
            </Box>

            {cart.length === 0 ? (
                <Typography align="center">El carrito está vacío</Typography>
            ) : (
                <Grid container spacing={4} justifyContent="center">
                    {/* Columna izquierda: productos */}
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            {cart.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mb: 2,
                                        p: 1,
                                        borderBottom: '1px solid #ddd',
                                    }}
                                >
                                    {/* Imagen */}
                                    <Box sx={{ width: 80, height: 80, mr: 2 }}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: 4,
                                            }}
                                        />
                                    </Box>

                                    {/* Detalles */}
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>
                                        <Typography variant="body2">Cantidad: {item.quantity}</Typography>
                                        <Typography variant="body2">Precio unitario: ${item.price}</Typography>
                                    </Box>

                                    {/* Total individual + botón eliminar */}
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant="h6">${item.price * item.quantity}</Typography>
                                        <IconButton color="error" onClick={() => removeItem(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            ))}
                            <Box mt={2}>
                                <Button variant="outlined" color="secondary" onClick={clearCart}>
                                    Vaciar carrito
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Columna derecha: resumen */}
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom fontWeight="bold">Resumen de compra</Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Typography variant="body1">Total: <strong>${total}</strong></Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Continuar compra
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </Box>
        </Container>
    );
}

export default Cart;
