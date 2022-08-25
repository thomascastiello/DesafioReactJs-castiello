import {useContext} from 'react';
import {CartContext} from './CartContext';
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button, Container, Row} from "reactstrap"
import {Link} from 'react-router-dom';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';


const Cart = () => {
    const test = useContext(CartContext);

    const finishOrder = () => {
      const productsDataBase = test.cartList.map(products => ({
        id: products.idItem,
        title: products.nameItem,
        price: products.priceItem,
        qty: products.qtyItem
      }));
  
      test.cartList.forEach(async (products) => {
        const itemRef = doc(db, "products", products.idItem);
        await updateDoc(itemRef, {
          stock: increment(-products.qtyItem)
        });
      });
  
      let order = {
        buyer: {
          name: "Juan Perez",
          email: "juan@perez.com",
          phone: "123456789"
        },
        total: test.calcTotal(),
        items: productsDataBase,
        date: serverTimestamp()
      };
    
      console.log(order);
      
      const createOrderInFirestore = async () => {
        // Add a new document with a generated id
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }
    
      createOrderInFirestore()
        .then(result => alert('¡Gracias Por tu compra!. Porfavor toma nota del n° de ID de tu orden.\n\n\nOrder ID: ' + result.id + '\n\n'))
        .catch(err => console.log(err));
    
      test.clear();
    
    

    }

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
          <div className='d-flex col-6 align-item-center'>
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

                   <CardBody>
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
            </Card>
           }
           </div>
        </Container>
        </>
    );
}

export default Cart;




