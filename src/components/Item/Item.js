import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./itemcss.css";


const Item = (props) => {
  return (
    <div className='card d-flex container mr marginitemr'>
        <h2>{props.title}</h2>
        <img className='container h-60' src={props.img} alt="Cerveza" />
        <p className='text-success text-uppercase fs-2'>$ {props.price}</p>
        <ItemCount initial={1} stock={5}/> 
    </div>
  );
};

function APICall() {
  setTimeout(() => {
    console.log("API call completed");
    return {
      id: "1",
      name: "LA MEJOR CERVEZA",
      description: "El mejor producto de la tienda",
      stock: 9,
    };
  }, 2000);
}

console.log("App iniciada.");

let resAPI = APICall();
console.log(`Respuesta: ${resAPI}`);

console.log("App finalizada.");


export default Item;