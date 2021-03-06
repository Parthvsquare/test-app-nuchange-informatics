import React from 'react'
import styles from './ItemCard.module.css'


function ItemCard({image, title, price, instock}) {
    return (
        <div className={styles.itemCard}>
            <img src={image} alt="" />
            <div className={styles.itemCard__right}>
                <h2>{title}</h2>
                <h3>{price} Rs</h3>
                {instock ? <p>Item in stock</p> : <p>Not in stock</p>}
            </div>
        </div>
    )
}

export default ItemCard
