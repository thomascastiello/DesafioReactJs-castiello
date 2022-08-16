import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
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
            image:'https://pixabay.com/get/ga8510783bda6fe407f8cd156f1abbcfbcf8d497d37bf4cf18211d199c0c7c81338fb0125c6b145d2e18c1785e81b92f36269d5275b3e3c491689902609c2fc79f19f68a2cc7c930309ce4c27e811a0f3_1280.jpg'
        },
        {
            name:'jewelry', 
            id:'2', 
            image:'https://pixabay.com/get/gedc77eed7cfb0bae2641309e9cd35bcb54dfd5ddd188bcafffceb7e11ffa136486f8395578b119772bd16ed976160befb576f8e66ad01ff32e91e252af8688205cdbb1e1a61e010ec22a38486547aaba_1280.jpg'
        },
        {
            name:"men's clothing", 
            id:'3', 
            image:'https://pixabay.com/get/gca6c7d8280fe76040adb13dd2c6aa9de1aba01de1f596d151ade66332ea43b7551765aafd9bb42526e548d53e5affe326679fa821ab07c7fef32f1dee00a2dacd17a2796054e94a558f5461731da67d1_1280.jpg'
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