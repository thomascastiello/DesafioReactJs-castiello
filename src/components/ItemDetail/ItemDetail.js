import React, {useEffect, useState} from "react";
import ItemDetailCont from "./ItemDetailCont";


function traerProductos(){
    return new Promise((resolve,reject) => {
        setTimeout(
            () => resolve (ItemDetail), 2000);
    })
};

const ItemDetail = () => {
    const [itemDetails, setitemDetails] = useState([
/* 
        useEffect(() => {
            traerProductos().then((respuesta) => {
                setitemDetails(respuesta);
            })
        }),
 */
        {
            id: 1,
            title: "Golden",
            price: 280,
            picture: "https://i.ibb.co/PCh5ybt/beer-g3a7a09a41-640-1.jpg"
        }
    ]);

    return(
        <div className='d-flex'>
            {itemDetails.map((itemdetailcont) => {
                return (
                <ItemDetailCont key={itemdetailcont.id} title={itemdetailcont.title} price={itemdetailcont.price} img={itemdetailcont.picture} /> 
                );
            })}
        </div>
    );

}

export default ItemDetail;
