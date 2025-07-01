import React from 'react';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Carousel/Carousel.css'

const images = [
    {
        id: 1,
        src: 'https://images.fravega.com/f300/a4d9cda0ec3eee5cb910478977732df4.jpg.webphttps://images.fravega.com/f300/a4d9cda0ec3eee5cb910478977732df4.jpg.webp',
        alt: 'Promocion 1'
    },
    {
        id: 2,
        src: 'https://previews.123rf.com/images/irinashatilova/irinashatilova2202/irinashatilova220200385/182465524-la-mano-de-una-mujer-abre-la-puerta-del-horno-y-la-luz-está-encendida-en-la-cocina-de-casa.jpg',
        alt: 'Promocion 2'
    },
    {
        id: 3,
        src: 'https://previews.123rf.com/images/liudmilachernetska/liudmilachernetska2302/liudmilachernetska230203574/197840755-moderna-cocina-eléctrica-múltiple-sobre-la-mesa-en-el-espacio-de-la-cocina-para-el-diseño.jpg+',
        alt: 'Promocion 3'
    }
];

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: false // No ajustar la altura de las imágenes automáticamente
    };

    return (
        <Box 
            sx={{ 
                width: '100%', // ancho completo
                mt: { xs: '80px', sm: '100px', md: '5px' }, // Ajuste dinámico del margen superior
                maxWidth: '1000px', 
                mx: 'auto',
                paddingBottom: '20px',  // Espaciado adicional en la parte inferior (puedes ajustarlo según necesites)
                boxSizing: 'border-box',
                position: 'relative'
            }} 
            className="carousel-container"
        >
            <Slider {...settings}>
                {images.map((img) => (
                    <Box key={img.id}>
                        <img
                            src={img.src}
                            alt={img.alt}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                objectFit: 'cover',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default Carousel;
