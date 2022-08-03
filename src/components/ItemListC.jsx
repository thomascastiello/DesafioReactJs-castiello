import React from "react";
import ItemCount from "./ItemCount";


function ItemListC(props) {

    return (
        <div className="container card mt-2 col-3 pb-2">
            <div>
        <h2 className="card-body" >Cerveza: {props.greeting}</h2>
            </div>
        <div className="card ">

                <ItemCount initial={1} stock={5}/>
        
            </div>

        </div>
    );
}

export default ItemListC; 