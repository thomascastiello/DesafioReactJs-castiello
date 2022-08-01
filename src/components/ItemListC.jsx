import React from "react";

function ItemListC(props) {
    return (
        <div className="container card mt-2">
        <h2 className="card-body">Cerveza: {props.greeting}</h2>
        </div>
    );
}

export default ItemListC; 