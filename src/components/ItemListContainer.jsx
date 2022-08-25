import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';
import { Link } from 'react-router-dom';
import { ListInlineItem } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from '@mui/material';

const ItemListContainer = () => {

    const [herramientas, setHerramientas] = useState([]);
    const { idCategory } = useParams();

// component did update

useEffect(() => {
    firestoreFetch(idCategory)
        .then(result => setHerramientas(result))
        .catch(err => console.log(err));
}, [idCategory]);


// component will unmount

useEffect(()=> {
    return (()=> {
          setHerramientas([]);
    })
}, []);
    

    return (
        <>
        <div className='container align-item-center d-flex justify-content-center '>
        <ListInlineItem className='mt-4 mb-5 col-3'>
            <Link to='/category/Electrica' style={{textDecoration: "none", color: '#0000008c',}}><Button variant="contained">Herramientas Eléctricas</Button><span class="sr-only"></span></Link>
        </ListInlineItem>
        <ListInlineItem className='mt-4 mb-5'>
            <Link to='/category/Manual' style={{textDecoration: "none", color: '#0000008c'}}><Button variant="contained">Herramientas Manuales</Button></Link>
        </ListInlineItem>
        </div>
        <ItemList className="mt-5" productos={herramientas} />
        </>
    )
}

export default ItemListContainer;