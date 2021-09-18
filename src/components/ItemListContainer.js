import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import {productos} from "./Products";

function ItemListContainer() {

  const { category_name } = useParams();

  const [items, setItems] = useState([]);

  /* console.log(productos) */
  const productos = [
    {
        id: 1,
        title: 'Moños',
        price: 300,
        pictureUrl: 'https://i.ebayimg.com/images/g/3P0AAOSwVH5bjGwX/s-l1600.jpg',
        description: 'Varios Colores',
        stock: 100,
        category: 'accesorios',
    },
    {
      id: 2,
      title: 'Collares Cachorros',
      price: 500,
      pictureUrl: 'https://i.ebayimg.com/images/g/dugAAOSwolpfGO6P/s-l1600.jpg',
      description: 'Varios Colores',
      stock: 100,
      category: 'accesorios',
    },
    {
      id: 3,
      title: 'Buzo Woof',
      price: 1500,
      pictureUrl: 'https://i.ebayimg.com/images/g/bloAAOSwNoteGG9X/s-l1600.png',
      description: 'Color blanco y negro.',
      stock: 100,
      category: 'ropa',
    },
    {
      id: 4,
      title: 'Collar Led',
      price: 700,
      pictureUrl: 'https://i.ebayimg.com/images/g/9ocAAOSwh6xfmOC1/s-l1600.jpg',
      description: 'Varios Colores',
      stock: 100,
      category: 'accesorios',
    },
    {
      id: 5,
      title: 'Sueter Lana',
      price: 1000,
      pictureUrl: 'https://i.ebayimg.com/images/g/3JoAAOSwaS9fXCyd/s-l1600.jpg',
      description: 'Varios Colores',
      stock: 100,
      category: 'ropa',
    },
    {
      id: 6,
      title: 'Buzos Navideños',
      price: 1000,
      pictureUrl: 'https://i.ebayimg.com/images/g/7awAAOSwumNfcao3/s-l1600.jpg',
      description: 'Varios Modelos',
      stock: 100,
      category: 'ropa',
    },
    {
      id: 7,
      title: 'Zapatillas',
      price: 800,
      pictureUrl: 'https://i.ebayimg.com/images/g/NEYAAOSwCWBhLZl7/s-l1600.jpg',
      description: 'Anti deslizantes',
      stock: 100,
      category: 'ropa',
    },
    {
      id: 8,
      title: 'Vestidos',
      price: 1000,
      pictureUrl: 'https://i.ebayimg.com/images/g/SZEAAOSwmJFhQH3p/s-l1600.jpg',
      description: 'Cuadrille',
      stock: 100,
      category: 'ropa',
    },
    {
        id: 9,
        title: 'Gorra',
        price: 1100,
        pictureUrl: 'https://i.ebayimg.com/images/g/3o0AAOSwb-FfTgHC/s-l1600.jpg',
        description: 'Regulable,2 tamaños.',
        stock: 50,
        category: 'ropa',
    },
    {
      id: 10,
      title: 'Remeras Disney',
      price: 1450,
      pictureUrl: 'https://i.ebayimg.com/images/g/8qgAAOSwMgxhGd3B/s-l1600.jpg',
      description: 'Varios Modelos',
      stock: 50,
      category: 'ropa',
    },
    {
      id: 11,
      title: 'Buzo Adidog',
      price: 1500,
      pictureUrl: 'https://i.ebayimg.com/images/g/sPwAAOSwiCFeCBtm/s-l1600.jpg',
      description: 'Colores:Gris,Negro,Rosa,Rojo.',
      stock: 50,
      category: 'ropa',
    },
    {
      id: 12,
      title: 'Chombas',
      price: 1450,
      pictureUrl: 'https://i.ebayimg.com/images/g/lygAAOSwGB1f~A3g/s-l1600.jpg',
      description: 'Varios Colores',
      stock: 50,
      category: 'ropa',
    },
    {
      id: 13,
      title: 'Cadenas',
      price: 700,
      pictureUrl: 'https://i.ebayimg.com/images/g/trEAAOSwP35fD~ON/s-l500.jpg',
      description: 'Plateado o Dorado',
      stock: 50,
      category: 'accesorios',
    },
    {
        id: 14,
        title: 'Camisas Hawai',
        price: 1000,
        pictureUrl: 'https://i.ebayimg.com/images/g/X70AAOSwSnVf6u~7/s-l1600.jpg',
        description: 'Varios Colores',
        stock: 10,
        category: 'ropa',
    },
    {
      id: 15,
      title: 'Bandanas',
      price: 600,
      pictureUrl: 'https://i.ebayimg.com/images/g/grgAAOSwCdVez4bQ/s-l1600.jpg',
      description: 'Varios Modelos',
      stock: 10,
      category: 'accesorios',
    }
];
  
const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      /* console.log(typeof categoryId === 'undefined') */
         if (typeof category_name !== 'undefined') {

            const itemFiltadros = productos.filter((item) => {
              /*console.log(item.category)*/
              /*console.log(category_name)*/
              return item.category == category_name
        });
          /*console.log(itemFiltadros)*/
          resolve(itemFiltadros);
        }else{
          resolve(productos);
        }


    }, 1000)
})

useEffect(() => {
    getProducts.then(rta => {

      setItems(rta)

    });
// eslint-disable-next-line react-hooks/exhaustive-deps

}, [category_name]);
    return (
      <section>
        <div className="container">
          {
            items.length ?
          <>
            <h2 className="titulo-seccion">Productos destacados</h2>
            <ItemList items={items}/>
            
          </> :
            <p className="cargando">Cargando...</p>
          }
        </div>
      </section>
    );
}
  
export default ItemListContainer;