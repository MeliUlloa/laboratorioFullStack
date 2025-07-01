import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import ProductList from '../../components/Products/ProductList';
import '../DashPage.js/DashPage.css'; // Asegúrate de importar el archivo CSS
import '../../assets/styles/styles.css'; // Estilos globales

function DashPage() {
    return (
        <div className="dash-page-container">
            <NavBar />

            {/* Contenedor para el Carousel */}
            <div className="carousel-container">
                <Carousel />
            </div>

            {/* Contenedor para la lista de productos */}
            <div className="product-list-container" >
                <ProductList />
            </div>
        </div>
    );
}

export default DashPage;
