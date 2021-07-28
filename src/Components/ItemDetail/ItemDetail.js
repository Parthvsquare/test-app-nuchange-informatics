import React from 'react'
import styles from './ItemDetail.module.css'

function ItemDetail({image, title, price, vender, instock}) {
    return (
        <div className={styles.itemDetail}>
            <img src="image" alt="" />
            <div className={styles.title}>
                <div className={styles.name}>
                    {title}
                </div>
                <div className={styles.price}>
                    {price}
                </div>
            </div>
            <div className={styles.venderName}>
                <p>{vender}</p>
            </div>
            <div className={styles.addtocardbtn}>
                <form>
                    <button type='submit'>Add to cart</button>
                </form>
            </div>
        </div>
    )
}

export default ItemDetail
