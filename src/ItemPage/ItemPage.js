import { response } from 'express';
import { useEffect }  from 'react'
import ItemCard from '../Components/ItemCard/ItemCard'
import styles from './ItemPage.module.css'


function ItemPage() {
    useEffect(() => {
        const fetchItems = async() =>
        await fetch(
            `https://pastebin.com/a87nf6Z9`
        )
        .then((res) = res.json())
        .then((data)=>{
            console.log(data);
        });
        // return () => {
        //     cleanup
        // }
        fetchItems();
    }, []);
    return (
        <div className={styles.itemPage}>
            <ItemCard/>
            <div className={styles.item__sort}>
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
