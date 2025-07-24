import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import ProductList from '../../components/Products/ProductList';
import { productService } from '../../services/productService'; // servicio para traer datos reales
import '../DashPage.js/DashPage.css';
import '../../assets/styles/styles.css';
import Footer from '../../components/Footer/Footer'

function DashPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //     // Para pruebas con datos mock, comentar lo de abajo y descomentar productos mock
        // productService.getAll()
        //     .then((data) => {
        //         setProducts(data);
        //         setLoading(false);
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //         setLoading(false);
        //     });

        // Ejemplo mock:

        const mockProducts = [
  {
    id: 1,
    name: 'Pan Casero',
    price: 150,
    image: 'https://scontent.fnqn11-2.fna.fbcdn.net/v/t39.30808-6/470190020_928176326045923_9032983999149828781_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEV3xmdoHKyaFjs4m4aR8d34dcNZ6RxNG_h1w1npHE0b1TqNwVmSg3zroqM-3a8RfTAgEZEWBBdVdokFmLctbu4&_nc_ohc=1SXA3RNF4YIQ7kNvwHGYkWu&_nc_oc=Admfwlit2ZwNILUrTVkyFULuebH2IZNKg70ulbhNTB9ozJIotA9BiwHodWuRMMvDKdI&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=uxfoSok9uILZeAyCd1hwxg&oh=00_AfQuZLde82dwVHPSLxj9fTTkYfGsxEGuhjexyAWqzt65RA&oe=68857962',
    description: 'Pan artesanal hecho con masa madre y horneado tradicional.'
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

setProducts(mockProducts);
setLoading(false);

        setProducts(mockProducts);
        setLoading(false);

    }, []);

    if (loading) return <p>Cargando productos...</p>;

    return (
        <div className="dash-page-container">
            <NavBar />
            <div className="carousel-container">
                <Carousel />
            </div>
            <div className="product-list-container">
                <ProductList products={products} />
            </div>
            <div>
            <Footer />
            </div>
        </div>
    );
}

export default DashPage;
