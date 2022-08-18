import React from 'react';
import { Link } from 'react-router-dom'

function CategoryCard({name, image}){
    return (
        <>

        <div className='category-card'>
            <div className='category-image' style={{backgroundImage:`url(${image})`}}>
                
            </div>
            <div className='category-name'>
                <h3>{name}</h3>

            </div>

        </div>
        
        </>
    )

}

function Categories(){
    
    const categoriesArray = [
        {
            name:'electronics', 
            id:'1', 
            image:'https://img.freepik.com/foto-gratis/reparador-soldando-componentes-placa-base-mientras-repara-telefono-inteligente-danado-usando-pinzas-plancha_343059-504.jpg?w=996&t=st=1660851859~exp=1660852459~hmac=38239eb00017323c139fc99ae467c83e7faf4991267032eebbbdb93874a4d5a3'
        },
        {
            name:'jewelry', 
            id:'2', 
            image:'https://img.freepik.com/foto-gratis/primer-plano-mujer-sosteniendo-anillo-forma-corona_181624-22837.jpg?w=996&t=st=1660851894~exp=1660852494~hmac=48217435f83a4287e99fb61099e5c2f72ef7fc42183616a697aaa5735b09bf24'
        },
        {
            name:"men's clothing", 
            id:'3', 
            image:'https://img.freepik.com/foto-gratis/disparo-vertical-hombre-caucasico-rubio-barba-gorra_181624-53004.jpg?w=360&t=st=1660851935~exp=1660852535~hmac=3496788a67f993a2d4a752b4ad9e9d9c6203c85be912b593c918de906bae0da1'
        },
        
    ]

    return (
        <>  

            { categoriesArray.map(category =>{

                return <Link key={category.id} to={`/category/${category.id}`}>
                    <CategoryCard  name={category.name} image={category.image}/>
                </Link>
                
                
                
                }) 
            }
        </>

    )
    

    
}
function CategoriesContainer(){
    return (
        <div className='categories-container'>
            <Categories/>
        </div>
        
    )

}
export default CategoriesContainer