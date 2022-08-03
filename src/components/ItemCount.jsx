import { useState } from "react"


const ItemCount = ({ stock, initial}) => {
    const [qty, setQty] = useState(initial);

    const sumaQty = () => {
        if (qty < stock){
            setQty(qty + 1);
        }
    }

    const restaQty = () => {
        if (qty > 0) {
            setQty (qty - 1);
        }
    }

    const onAdd = () => {
        alert("Agregaste al carrito una cerveza!")
    }

    return (
        <>
        
        <div className="container d-flex mt-1 mb-1 justify-content-evenly">
            <div className=" btn-danger btn" onClick={restaQty}>-</div>
            <div className="">{qty}</div>
            <div className="btn-danger btn" onClick={sumaQty}>+</div>
        </div>
        
        {
            qty < 1 ?
            <div className="btn btn-primary disabled m-2">
                <i className=""></i>
                Añadir al Carrito
            </div> 
            :
            <div className=" btn btn-primary m-2">
                <i></i>
                Añadir al Carrito
            </div>
        }
        <button className="btn btn-success mt-1 m-3" onClick={onAdd}>Finalizar Compra</button>
        </>
    )
}

export default ItemCount