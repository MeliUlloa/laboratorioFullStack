import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footerContent">

         <Box className="footerColumn" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 2 }}>
          <Typography variant="h6">¡Contáctanos!</Typography>
          <Link href="https://wa.me/1123456789" target="_blank" display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
            <WhatsAppIcon sx={{ marginRight: 1 }} /> WhatsApp
          </Link>
          <Link href="https://www.facebook.com" target="_blank" display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
            <FacebookIcon sx={{ marginRight: 1 }} /> Facebook
          </Link>
          <Link href="https://www.instagram.com" target="_blank" display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
            <InstagramIcon sx={{ marginRight: 1 }} /> Instagram
          </Link>
          
        </Box>

        <Box className="footerColumn">
          <Typography variant="h6">Atajos</Typography>
          <Link href="#">Inicio</Link>
          <Link href="#">Productos</Link>
          <Link href="#">Iniciar Sesión</Link>
        </Box>

        <Box className="footerColumn">
          <Typography variant="h6">Sobre nosotros</Typography>
          <Link href="#">¿Quiénes somos?</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Términos y condiciones</Link>
        </Box>
      </Box>

   {/* Mapa y ubicación */}
      <Box className="footerBottom" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 2 }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Visítanos</Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.243616903099!2d-67.80162772385653!3d-37.87798507195958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960aca4f0a60631d%3A0xb8574cea26195323!2sDr.%20Ren%C3%A9%20Favaloro%20424%2C%20R8307%20Catriel%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1753323219025!5m2!1ses!2sar"
            width="100%"
            height="200"
            style={{ border: '0', borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Box>

      <Box className="footerBottom">
        © 2024 Osadía Mini Market. Todos los derechos reservados.
      </Box>
    </Box>
  );
};

export default Footer;
