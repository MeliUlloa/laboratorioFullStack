import React, { useState } from 'react'

const productos = [
    { id: 1, nombre: 'Laptop', categoria: 'Electrónica', precio: 799.99 },
    { id: 2, nombre: 'Zapatilla deportiva', categoria: 'Ropa', precio: 49.99 },
    { id: 3, nombre: 'Sofá de tres plazas', categoria: 'Hogar', precio: 349.99 },
    { id: 4, nombre: 'Smartphone', categoria: 'Electrónica', precio: 599.99 },
    { id: 5, nombre: 'Pelota de fútbol', categoria: 'Juguetes', precio: 19.99 },
    { id: 6, nombre: 'Auriculares Bluetooth', categoria: 'Electrónica', precio: 129.99 },
    { id: 7, nombre: 'Camiseta deportiva', categoria: 'Ropa', precio: 29.99 },
    { id: 8, nombre: 'Lampara de escritorio', categoria: 'Hogar', precio: 39.99 },
    { id: 9, nombre: 'Tableta', categoria: 'Electrónica', precio: 399.99 },
    { id: 10, nombre: 'Muñeca interactiva', categoria: 'Juguetes', precio: 24.99 },
    { id: 11, nombre: 'Televisor LED', categoria: 'Electrónica', precio: 499.99 },
    { id: 12, nombre: 'Chaqueta de invierno', categoria: 'Ropa', precio: 79.99 },
    { id: 13, nombre: 'Vajilla completa', categoria: 'Hogar', precio: 89.99 },
    { id: 14, nombre: 'Smartwatch', categoria: 'Electrónica', precio: 199.99 },
    { id: 15, nombre: 'Tren de juguete', categoria: 'Juguetes', precio: 29.99 },
    { id: 16, nombre: 'Monitor de computadora', categoria: 'Electrónica', precio: 169.99 },
    { id: 17, nombre: 'Pantalones de mezclilla', categoria: 'Ropa', precio: 39.99 },
    { id: 18, nombre: 'Almohada ortopédica', categoria: 'Hogar', precio: 49.99 },
    { id: 19, nombre: 'Cámara digital', categoria: 'Electrónica', precio: 249.99 },
    { id: 20, nombre: 'Peluche gigante', categoria: 'Juguetes', precio: 35.99 },
    { id: 21, nombre: 'Impresora multifuncional', categoria: 'Electrónica', precio: 129.99 },
    { id: 22, nombre: 'Gorra deportiva', categoria: 'Ropa', precio: 19.99 },
    { id: 23, nombre: 'Cafetera automática', categoria: 'Hogar', precio: 119.99 },
    { id: 24, nombre: 'Laptop gaming', categoria: 'Electrónica', precio: 1499.99 },
    { id: 25, nombre: 'Bicicleta infantil', categoria: 'Juguetes', precio: 89.99 },
    { id: 26, nombre: 'Teclado mecánico', categoria: 'Electrónica', precio: 89.99 },
    { id: 27, nombre: 'Bufanda de lana', categoria: 'Ropa', precio: 29.99 },
    { id: 28, nombre: 'Estufa eléctrica', categoria: 'Hogar', precio: 129.99 },
    { id: 29, nombre: 'Proyector de cine', categoria: 'Electrónica', precio: 349.99 },
    { id: 30, nombre: 'Set de LEGO', categoria: 'Juguetes', precio: 59.99 }
];

function ListCat() {
    const [categoria, setCategoria] = useState('');
    const [busqueda, setBusqueda] = useState('');
    //new Set(...)
    const categorias = [...new Set(productos.map(p => p.categoria))] // creamos un nuevo arreglo categorias, convierte el arreglo de catgeorias en un Set, que crea una coleccion de valores unicos y elimina cualuqier duplicado

    const productosFilt = categoria ? productos.filter(p => {
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    }) : productos


    return (
        <div>
            <h1>Productos</h1>

            <label>
                Filtrar por categoria
                <input
                    type='text'
                    value={busqueda}
                    onChange={e => setBusqueda(e.target.value)} />
            </label>
            <ul>
                {productosFilt.map((producto) => (
                    <li key={producto.id}> {producto.nombre} categoria= {producto.categoria} </li>
                ))}
            </ul>
        </div>
    )
}

export default ListCat