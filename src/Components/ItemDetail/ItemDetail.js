import React from 'react'
import styles from './ItemDetail.module.css'

function ItemDetail({image, title, price, vender, instock}) {
    return (
        <div className={styles.itemDetail}>
            <img src={image} alt="" />
            <div className={styles.title}>
                <div className={styles.title__name}>
                    {title}
                </div>
                <div className={styles.title__price}>
                    {price}
                </div>
            </div>
            {instock ? <p>item in stock</p> : <p>Not in stock</p>}
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
