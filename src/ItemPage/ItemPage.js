
import ItemCard from '../Components/ItemCard/ItemCard'
import styles from './ItemPage.module.css'
import data from '../data/file.json'


function ItemPage() {
    // console.log(data);
    // useEffect(() => {
    //     const fetchItems = async() =>
    //     await fetch(
    //         '../data/file.json'
    //     )
    //     .then((response) => response.text())
    //     .then((data)=>{
    //          console.log(data);

    //     });
    //     // return () => {
    //     //     cleanup
    //     // }
    //     fetchItems();
    // }, []);
    return (
        <div className={styles.itemPage}>
            <div className="itemPage__itemlist">
                {data.map((itemInfo)=>{
                    return  (
                        <div className="itemPage__cards" key={itemInfo.id}>
                            <ItemCard image= {itemInfo.image} title={itemInfo.name} price={itemInfo.price} instock={itemInfo.available}/>
                        </div>
                    )
                })}
            </div>
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
