import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';
import {
    Box,
    Grid,
    Typography,
    Button,
    Paper,
    IconButton,
    Container,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import '../ProductDetail/ProductDetail'

import Navbar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'

function ProductDetail() {
    const { id } = useParams(); // obtiene el id del producto
    const { addToCart } = useContext(CartContext); // agrega al carrito
    const navigate = useNavigate(); // navegación
    const [product, setProduct] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);


    useEffect(() => {
        // Obtener el detalle del producto de la API (o mock de datos)
        // fetch(`http://localhost:3001/posts`)
        //     .then(res => res.json())
        //     .then(data => {
        //         const found = data.posts.find(p => p.id === parseInt(id));
        //         if (found) {
        //             // Parse imágenes si es necesario
        //             found.imagenes = typeof found.imagenes === 'string' ? JSON.parse(found.imagenes) : found.imagenes;
        //             setProduct(found);
        //         }
        //     });

        const mockProducts = [
            {
                id: 1,
                name: 'Pan Casero',
                price: 150,
                image: 'https://scontent.fnqn11-2.fna.fbcdn.net/v/t39.30808-6/470190020_928176326045923_9032983999149828781_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEV3xmdoHKyaFjs4m4aR8d34dcNZ6RxNG_h1w1npHE0b1TqNwVmSg3zroqM-3a8RfTAgEZEWBBdVdokFmLctbu4&_nc_ohc=1SXA3RNF4YIQ7kNvwHGYkWu&_nc_oc=Admfwlit2ZwNILUrTVkyFULuebH2IZNKg70ulbhNTB9ozJIotA9BiwHodWuRMMvDKdI&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=uxfoSok9uILZeAyCd1hwxg&oh=00_AfQuZLde82dwVHPSLxj9fTTkYfGsxEGuhjexyAWqzt65RA&oe=68857962',
                description: 'Pan artesanal hecho con masa madre.'
            },
            {
                id: 2,
                name: 'Croissant Mantecoso',
                price: 200,
                image: 'https://scontent.fnqn11-2.fna.fbcdn.net/v/t39.30808-6/470228359_928175586045997_6220303982047481718_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH2xyQAxMpaAEr1vEE32u5usSXKqR_iJk2xJcqpH-ImTew_DKW3NhgHALpBvSPZlVhN0IqhkqganSkxHmCLWMgs&_nc_ohc=4g0jKm7A41cQ7kNvwGgynLS&_nc_oc=Adn-U_4zaCxLQhJvugtDSR5Ho0HWlUac4eVXfLzkdr-aFzcAZiP07psJgF-F88g3k84&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=E9U3R4_DkqJGEb_UQOKSdQ&oh=00_AfSjAwyfLheVi5jiDq4_snvF7d7G-q_Lxww5PwGloZIvZQ&oe=6885A938',
                description: 'Croissant hojaldrado, ideal para el desayuno.'
            },
            {
                id: 3,
                name: 'Medialuna Dulce',
                price: 120,
                image: 'https://scontent.fnqn11-2.fna.fbcdn.net/v/t39.30808-6/470191298_928175176046038_2828112471730526294_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEwRmKuoFx0AV0lBFqSerHs3c-kDaOffz_dz6QNo59_P5dslZbCH4WvwhldoH0u2ignzDQ3ZcEwNvgrmxEtVovc&_nc_ohc=kdEVEFAvi10Q7kNvwHhWk87&_nc_oc=AdkM4pz7G827ip104UKTmnG1d8qACDRMMKODmxqJYyYHHemQXTpbs6ODjgnqWR-DixE&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=Eudso0CCB_eokGqCwSQPmA&oh=00_AfQOVHtV6Gd-vwXynL1kcFvrQ35bFICZMgR5uQukH7NdMQ&oe=688586DC',
                description: 'Medialuna esponjosa, perfecta con café.'
            },
            {
                id: 4,
                name: 'Bizcochitos',
                price: 180,
                image: 'https://scontent.fnqn11-2.fna.fbcdn.net/v/t39.30808-6/470222108_928176516045904_740289773179545148_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFVHgUifDd6UHZh_c-j_P4qgM6sruw7CO2Azqyu7DsI7ZdSbtfFfqAQlX-rWz1uwO-GQwuYi9HRwbCwl5Aba15t&_nc_ohc=gi_Nva8j9ikQ7kNvwG3Us6p&_nc_oc=AdmoizYvB9-FMqFA0Ts6pp148AjPszslN2QSur9Hl1vGIa7lu39pq6eeROIuffrfcfw&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=rdoOx-qEHElL5apZxbzSMg&oh=00_AfSJblQJvHxP6by3S70HQwcYpixXzSZ_g1mGdqbjRzskpA&oe=6885A6B7',
                description: 'Pan integral con semillas para una opción más saludable.'
            },
            {
                id: 5,
                name: 'Alfajores',
                price: 140,
                image: 'https://scontent.fnqn11-2.fna.fbcdn.net/v/t39.30808-6/470139577_928175429379346_7835569113085817009_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEP90P7VRj2LskW_D0mG1bmKGsayN8MUEkoaxrI3wxQSbSJjI5POWssPUjrap30l0C8t72E6VztDONuEIbBbA4E&_nc_ohc=SAo80dA_Fo4Q7kNvwHN7HuE&_nc_oc=Adm8j4VWpJ_CuLNmlDxvB60I1VZpG177M1oI-p0QMgmJma2LOdDb5Ouunvtr6t2IuB0&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=Mg9l_XHoG55jWjaNmv9ffg&oh=00_AfQM5md5yLZNNQXNXBsUfNKfj81WPtU8Pij8M1XaZfzfsg&oe=68858894',
                description: 'Pan de ajo recién horneado con mantequilla y ajo.'
            },
            {
                id: 6,
                name: 'Bizcochito Saborizado',
                price: 170,
                image: 'https://scontent.fnqn11-2.fna.fbcdn.net/v/t39.30808-6/470139085_928175186046037_8415848070027026344_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEAk5NFRUavJM-IbU6l_s5ThbbK692ajpOFtsrr3ZqOk_yMH43hHm03IcbKNyySdss7RzWTmAHzqpC82CTzLKnO&_nc_ohc=g57LnLAfXCQQ7kNvwHbGUqv&_nc_oc=AdmzoO2rX7p8XfjZ6hHWHI64rqIFuNffKYV8iXCHizTTYqVAsMPVzqqcMqC72aM1auU&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=8QTv9u_h4SPa2g6WIDmspQ&oh=00_AfRM6AYZH7KuBKAg2Nc18FkmMb7KUSWu0p5ScHBWm1_lMw&oe=68857DBD',
                description: 'Bagel preparado con harina de calidad, ideal para untar.'
            }
        ];

        const foundProduct = mockProducts.find(product => product.id === parseInt(id));
        setProduct(foundProduct);

    }, [id]); // Reaccionar al cambio del id

    if (!product) return <div>Producto no encontrado</div>;

    return (
        // <div>
        //     <h2>{product.titulo}</h2>
        //     <img src={`http://localhost:3001/uploads/${product.imagenes[0]}`} width="400" />
        //     <p>{product.descripcion}</p>
        //     <p>Precio: ${product.precio}</p>
        //     <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        //     <button onClick={() => navigate('/cart')} style={{ marginLeft: '10px' }}>
        //         Ver carrito
        //     </button>
        // </div>


        <>
            <Navbar />

            <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
                {/* Sección principal */}
                <Grid container spacing={4}>
                    {/* Imagen */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Box
                                component="img"
                                src={product.image}
                                alt={product.name}
                                sx={{
                                    width: '100%',
                                    maxHeight: 500,
                                    objectFit: 'contain',
                                    borderRadius: 2,
                                    objectFit: 'cover', // "contain" también es válido según tu gusto
                                    borderRadius: 2,
                                    display: 'block',
                                    margin: '0 auto',
                                }}
                            />
                        </Paper>
                    </Grid>

                    {/* Info + Descripción */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ padding: 3 }}>
                            <Typography variant="h4" gutterBottom>
                                {product.name}
                            </Typography>

                            <Typography variant="h5" color="error" gutterBottom>
                                ${product.price.toFixed(2)}
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<ShoppingCartIcon />}
                                    onClick={() => addToCart(product)}
                                >
                                    Agregar al carrito
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<PaymentIcon />}
                                    onClick={() => {
                                        addToCart(product);
                                        navigate('/cart');
                                    }}
                                    sx={{ borderColor: '#F97C8E', color: '#F97C8E' }}
                                >
                                    Comprar ahora
                                </Button>

                                <IconButton
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    color={isFavorite ? 'error' : 'default'}
                                >
                                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                </IconButton>
                            </Box>

                            {/* Descripción dentro del mismo bloque */}
                            <Box sx={{ mt: 4 }}>
                                <Typography variant="h6" gutterBottom>
                                    Descripción
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {product.description}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </>
    );
}

export default ProductDetail;
