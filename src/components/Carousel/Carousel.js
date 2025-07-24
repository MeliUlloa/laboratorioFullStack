import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Carousel/Carousel.css';

const images = [
    {
        id: 1,
        src: 'https://scontent.fnqn11-2.fna.fbcdn.net/v/t39.30808-6/511138517_1204856004995844_2822073743385522099_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG-JdtIBJb_ghGhxjmd_xju70o697vHAH3vSjr3u8cAfXwRT8MqoEbuLTVIpyu-vK7mZDdjRdvEVsVf7jIWU1YM&_nc_ohc=xLafuKKHyk8Q7kNvwGguzYm&_nc_oc=AdlHdCsZp6_fhB93A3qe3aTtXjwGlKRXdiuyZXhuQR8Vtu2oNopkGJ7bNrVbIlQFfGA&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=ieJfJd9XRbvid0AmQQpj8A&oh=00_AfTnsjQ7aWC8lkyKIn7LJNuAsbWULOenRhtczcw1VywGRw&oe=6885A1EB',
        alt: 'Promoción 1',
        text: 'Pan caliente todas las mañanas'
    },
    {
        id: 2,
        src: 'https://scontent.fnqn11-2.fna.fbcdn.net/v/t39.30808-6/518167806_1216266583854786_7304085749964054014_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEcAZIKeISNiyPbGnmkqqvoJWEjL6aEWfslYSMvpoRZ-wCcKXeLiyHXwxAPMic5XKSbl0yDmoSWDBTH68ljpIqx&_nc_ohc=mgU1-m8SkP0Q7kNvwEhTFQt&_nc_oc=Adn27hWp87PUENyZwu19mx6pZtANkL59WB9FiRggMyiFdvRWA0UKyxfQYeRH6iC_Co4&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=9K8_zPJIQED80KJrv7HTOQ&oh=00_AfQUbXQxmpchs0JEI-lOC6iS8igqjelQxD9Sj3y18bL3Ng&oe=688590EF',
        alt: 'Promoción 2',
        text: '¡Probá nuestras medialunas recién horneadas!'
    },
    {
        id: 3,
        src: 'https://scontent.fnqn11-2.fna.fbcdn.net/v/t39.30808-6/517367751_1214449570703154_8880457131814277638_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFvZtstxcJDo87LGreZnnghjeQIjJ6F196N5AiMnoXX3uuDebSb2onDPahf3-9LaT-sgPcQt7tXB-JFvuKOHBHh&_nc_ohc=csm26HMMeYEQ7kNvwFcamTB&_nc_oc=AdlmBCoCV_XswdrClf2o1zZ-WQHeU7NWdcNqSJzcsSncKXeaSdG2k9jGBXcSKRYvDYs&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=kk4B5CrsIcavq85TAoepIg&oh=00_AfTVbfrDy6ehHuguD13KB3zU1_b60y1H5nTCcg8SRCHhWA&oe=6885982B',
        alt: 'Promoción 3',
        text: 'Desayunos especiales para compartir'
    }
];

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        arrows: true,
    };

    return (
        <Box
            sx={{
                width: '100%',
                // maxWidth: '1200px',
                mx: 'auto',
                position: 'relative',
                mt: { xs: '60px', md: '80px' },
                overflow: 'hidden',
                borderRadius: '5px',
                border: 'none',
            }}
            className="carousel-container"
        >
            <Slider {...settings}>
                {images.map((img) => (
                    <Box
                        key={img.id}
                        sx={{
                            position: 'relative',
                            height: { xs: '250px', sm: '400px', md: '500px' }
                        }}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.7)' // oscurece para que se vea el texto
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 2
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    backgroundColor: 'rgba(0,0,0,0.4)',
                                    px: 2,
                                    py: 1,
                                    borderRadius: '8px'
                                }}
                            >
                                {img.text}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default Carousel;

