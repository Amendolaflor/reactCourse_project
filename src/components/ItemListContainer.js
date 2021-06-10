import React from 'react';
import ItemCount from './ItemCount'


function ItemListContainer(props) {
    return (
        <div className= "product-list">
            <h1> {props.greeting} </h1>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer
