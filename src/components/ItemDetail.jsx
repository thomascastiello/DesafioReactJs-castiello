import React, {useState} from "react";
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom'

const ProductDetail = ({title, price, image, description}) => {
    const [add, setAdd] = useState(false)

    const onAdd = () => {
        setAdd(!add)
    }

    return (
        <div className="product-detail">
            <div className="detail-image">
                <img src={image} alt={ `${title}`} />
            </div>
            <div className="detail-body">
                <div className="detail-title">
                    <h3>{title}</h3>
                </div>
                <div className="detail-description">
                    <p>
                        {description}
                    </p>

                </div>
                <div className="detail-price">
                    <p>
                        {price}
                    </p>
                </div>
                {
                    add ?
                    <div className='add-to-cart'>
                    <button>
                    <span className="button_top" style={{background:"yellow", color:"black"}}>¡Añadido!</span>
                    </button>
                    </div>
                    :
                    <ItemCount initial={1} stock={10} onAdd={onAdd}/>     
                }  
            <Link to="/cart">
            <div className='add-to-cart'>
            <button>
            <span className="button_top" style={{background:"blue"}}>Checkout</span>
            </button>
            </div>
            </Link>
            </div>   
        </div>
    )

}

function ItemDetail({ data }) {

    console.log(data)

    return (
        <>  
            <ProductDetail title={data.title} image={data.image} price={data.price} description={data.description}/>
        </>)
        
}

export default ItemDetail