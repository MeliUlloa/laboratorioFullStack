import React from 'react';
import {
  Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Grid
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import '../ProductList/ProductList.css'

function ProductList({ products }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }} onClick={() => handleProductClick(product.id)}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <ExpandMoreIcon />
                </IconButton>
              }
              title={product.name}
              subheader={`$${product.price}`}
            />
            <CardMedia
              component="img"
          
              image={product.image}
              alt={product.name}
              sx={{ objectFit: 'cover', height: 200, }}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product.description || `Description of ${product.name}.`}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
export default ProductList;
