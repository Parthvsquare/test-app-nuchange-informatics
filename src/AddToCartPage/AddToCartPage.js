// import {useState} from 'react'
import styles from './AddToCartPage.module.css'
import Header from '../Header/Header';
import ItemCard from '../Components/ItemCard/ItemCard'
import data from '../data/file.json'

function AddToCartPage() {
    
    return (
        <div className={styles.addtocart}>
              <Header/>
              <div className={styles.addtocart__items}>
                    {data.map((itemInfo)=>{
                    return  (
                        <div className="itemPage__cards" key={itemInfo.id}>
                                <ItemCard image= {itemInfo.image}
                                title={itemInfo.name}
                                price={itemInfo.price}
                                instock={itemInfo.available}/>
                            
                        </div>
                    )
                })}
                </div>
        </div>
    )
}

export default AddToCartPage
