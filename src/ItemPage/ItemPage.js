import React from 'react'
import ItemCard from '../Components/ItemCard/ItemCard'
import styles from './ItemPage.module.css'


function ItemPage() {
    return (
        <div className='styles.styles.itemPage'>
            <ItemCard/>
            <div className="styles.item__sort">
                {/* itemsort */}
                <h2>Filter</h2>
                {/* In stock
                Fruit
                Vegetable */}
                
            </div>
        </div>
    )
}

export default ItemPage
