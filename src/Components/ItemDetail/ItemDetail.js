import React from 'react'
import styles from './ItemDetail.module.css'
import CancelIcon from '@material-ui/icons/Cancel';

function ItemDetail({image, title, price, vender, instock}) {
    return (
        <div className={styles.itemDetail}>
            <div className={styles.itemDetail__cancelbtn}>
                <CancelIcon className={styles.cancel__icon} />
            </div>
            
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
                    <button onClick={addtocartfn} type='submit'>Add to cart</button>
                </form>
            </div>
        </div>
    )
    function addtocartfn(e){
        console.log('you click add to cart')
    }
}

export default ItemDetail
