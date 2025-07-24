// src/components/ProductForm.jsx

import React, { useState } from 'react';
import { productService } from '../services/productService';

function ProductForm() {
  const [form, setForm] = useState({
    titulo: '',
    descripcion: '',
    precio: '',
    ubicacion: '',
    tipo: '',
  });
  const [imagenes, setImagenes] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = e => {
    setImagenes(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    // 👇 Múltiples imágenes
    for (let i = 0; i < imagenes.length; i++) {
      formData.append('imagenes', imagenes[i]);
    }

    const token = localStorage.getItem('token');
    const result = await productService.create(formData, token);

    setMessage(result.success ? 'Producto creado' : result.message);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input name="titulo" placeholder="Título" onChange={handleChange} required />
      <input name="descripcion" placeholder="Descripción" onChange={handleChange} required />
      <input name="precio" placeholder="Precio" type="number" onChange={handleChange} required />
      <input name="ubicacion" placeholder="Ubicación" onChange={handleChange} required />
      <input name="tipo" placeholder="Tipo" onChange={handleChange} required />

      <input type="file" multiple onChange={handleFileChange} required />

      <button type="submit">Crear producto</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default ProductForm;
