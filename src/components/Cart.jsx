import {useContext, useState} from 'react';
import {CartContext} from './CartContext';
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button, Container} from "reactstrap"
import {Link} from 'react-router-dom';
import CartForm from './CartForm';



const Cart = () => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const finishOrder = () => setShow(true); 

  const test = useContext(CartContext);     

    return(
        <>
        <Container>
        <div className='mt-5 mb-4 text-center'>
        <h1 className="mb-2">Carrito de Compras</h1>
        <div className=''>
        <Link to='/'><Button variant='contained '>Continuar comprando</Button></Link>
        {
            (test.cartList.length > 0)
            ? <Button  onClick={test.clear}>Vaciar el Carrito</Button>
            : <h3>Tu Carrito esta vacio</h3>
        }
        </div>
        </div>
          <div className='d-flex align-item-center'>
            {
               test.cartList.length > 0 ?
               test.cartList.map( productos => 
                <Card key={productos.idItem}>
                   <CardImg
                     alt="Card image cap"
                     src= {productos.imgItem}
                     top
                     width="100%"
                   />

                   <CardBody className='col-12'>
                     <CardTitle tag="h5">{productos.nameItem}</CardTitle>
                     <CardSubtitle className="mb-2 text-muted" tag="h6">{productos.brandItem}</CardSubtitle>
                     <CardText>$ {productos.priceItem}</CardText> 
                     <CardText>{productos.qtyItem}</CardText>    
                     <Button onClick={() => test.removeItem(productos.idItem)}>Borrar</Button>                
                   </CardBody>
                </Card>
               )
               :<h1></h1>
            }
    
           </div>
           <div className=''>
           {
               test.cartList.length > 0 &&
               <Card>             
               <CardBody>
                 <CardTitle tag="h5">Tu Orden</CardTitle>
                 <CardSubtitle className="mb-2 text-muted" tag="h6">Subtotal</CardSubtitle>
                 <CardText> ${test.calcSubTotal()}</CardText> 
                 <CardText>IVA: ${test.calcIVA()} </CardText>
                 <CardText>Total: $ {test.calcTotal()}</CardText>             
                 <Button onClick={finishOrder}>Finalizar compra</Button>
               </CardBody>
               <CartForm handleClose={handleClose} show={show} />  
            </Card>
            
           }
           </div>
        </Container>
        </>
    );
}

export default Cart;




