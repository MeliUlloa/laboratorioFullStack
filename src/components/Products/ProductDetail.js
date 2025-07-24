import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/posts`)
            .then(res => res.json())
            .then(data => {
                const found = data.posts.find(p => p.id === parseInt(id));
                if (found) {
                    // Parse imágenes si es necesario
                    found.imagenes = typeof found.imagenes === 'string' ? JSON.parse(found.imagenes) : found.imagenes;
                    setProduct(found);
                }
            });
    }, [id]);

    if (!product) return <div>Producto no encontrado</div>;

    return (
        <div>
            <h2>{product.titulo}</h2>
            <img src={`http://localhost:3001/uploads/${product.imagenes[0]}`} width="400" />
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            <button onClick={() => navigate('/cart')} style={{ marginLeft: '10px' }}>
                Ver carrito
            </button>
        </div>
    );
}

export default ProductDetail;
