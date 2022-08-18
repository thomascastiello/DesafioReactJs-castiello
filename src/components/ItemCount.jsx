import React, {useState} from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function CountButton(props){
  return(
    <button className='count-btn'>{props.children}</button>
  )

}
const ItemCount = ({stock, initial, onAdd}) => {
  const [qty, setQty] = useState(initial);

  const sumaQty = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  }
  const restaQty = () => {
    if (qty > 0 ) {
      setQty(qty - 1)
    }
  }

  return (
    <div className='ic-container'>
        <div className='ic-title'>
        </div>
        <div className='ic-body'>
          <div className='counter'>
            <div onClick={restaQty}><CountButton><AiOutlineMinus/></CountButton></div>
            <div><CountButton>{qty}</CountButton></div>
            <div onClick={sumaQty}><CountButton><AiOutlinePlus /></CountButton></div>
          </div>
          {
            qty > 0 ?
            <div className='add-to-cart' onClick={() => onAdd()}>
            <button>
              <span className="button_top">Add To Cart</span>
            </button>
            </div>
            :
            <div className='add-to-cart' style={{display:"none"}}>
            <button>
              <span className="button_top">Add To Cart</span>
            </button>
            </div>
          }  
        </div>
        
    </div>
  )
}

export default ItemCount