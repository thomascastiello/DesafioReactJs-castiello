import React, {useState} from 'react';
import Item from './Item';


const Items = () => {
    const [items] = useState([
        {
            id: 1,
            title: "Golden",
            price: 280,
            picture: "https://pixabay.com/get/gd27c20b87c19f089b5ab78bb7e4c3a3c81a28c091dfce85e259310543e1854a17ffa8ce90ded7f4da7088990248d3046d938f43321f6ce9f7647cb6f82719299be0ccd4ea7aa5708c6f88d8b25165189_640.jpg"
        },
        {
            id: 2,
            title: "IPA",
            price: 350,
            picture: "https://pixabay.com/get/gd27c20b87c19f089b5ab78bb7e4c3a3c81a28c091dfce85e259310543e1854a17ffa8ce90ded7f4da7088990248d3046d938f43321f6ce9f7647cb6f82719299be0ccd4ea7aa5708c6f88d8b25165189_640.jpg"
        },
        {
            id: 3,
            title: "APA",
            price: 300,
            picture: "https://pixabay.com/get/gd27c20b87c19f089b5ab78bb7e4c3a3c81a28c091dfce85e259310543e1854a17ffa8ce90ded7f4da7088990248d3046d938f43321f6ce9f7647cb6f82719299be0ccd4ea7aa5708c6f88d8b25165189_640.jpg"
        },
    ]);

    return(
        <div className='d-flex'>
            {items.map((item) => {
                return (
                <Item key={item.id} title={item.title} price={item.price} img={item.picture} /> 
                );
            })}
        </div>
    );
};

export default Items;