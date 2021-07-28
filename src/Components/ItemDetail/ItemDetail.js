import React from 'react'
import styles from './ItemDetail.module.css'

function ItemDetail({image, title, price, vender, instock}) {
    return (
        <div className="styles.itemDetail">
            <img src="image" alt="" />
            <div className="itemDetail__title">
                <div className="itemDetail__title--name">
                    {title}
                </div>
                <div className="itemDetail__title--price">
                    {price}
                </div>
            </div>
            <div className="itemDetail__venderName">
                <p>{vender}</p>
            </div>
            <div className="itemDetail__addtocardbtn">
                <form>
                    <button type='submit'>Add to cart</button>
                </form>
            </div>
        </div>
    )
}

export default ItemDetail
