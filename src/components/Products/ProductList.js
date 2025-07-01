import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Producto 1',
        price: 100,
        image: 'https://via.placeholder.com/300x200?text=Producto+1',
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 200,
        image: 'https://via.placeholder.com/300x200?text=Producto+2',
    },
    {
        id: 3,
        name: 'Producto 3',
        price: 300,
        image: 'https://via.placeholder.com/300x200?text=Producto+3',
    },
    {
        id: 4,
        name: 'Producto 4',
        price: 400,
        image: 'https://via.placeholder.com/300x200?text=Producto+4',
    },
    {
        id: 5,
        name: 'Producto 5',
        price: 500,
        image: 'https://via.placeholder.com/300x200?text=Producto+5',
    },
    {
        id: 6,
        name: 'Producto 6',
        price: 600,
        image: 'https://via.placeholder.com/300x200?text=Producto+6',
    }
];

function ProductList() {
    const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <Grid container spacing={3} justifyContent="center">
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card sx={{ maxWidth: 345 }} onClick={() => handleProductClick(product.id)}>
                        <CardHeader
                            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>}
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={product.name}
                            subheader={`Price: $${product.price}`}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={product.image}
                            alt={product.name}
                        />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Description of {product.name}.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="add to cart">
                                <AddShoppingCartIcon />
                            </IconButton>
                            <IconButton aria-label="expand details">
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography>Additional details of {product.name}...</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductList;
