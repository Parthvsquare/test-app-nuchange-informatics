import { useState } from "react";
import ItemCard from '../Components/ItemCard/ItemCard'
import ItemDetail from '../Components/ItemDetail/ItemDetail'
import styles from './ItemPage.module.css'
import data from '../data/file.json'


function ItemPage() {
    const [clickedstate, setClickedstate] = useState([0]);
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

    // function whichItemClicked(id){

    //     console.log(id)
    // }
    return (
        
        <div className={styles.itemPage}>
            <div className="itemPage__itemlist">
                {data.map((itemInfo)=>{
                    return  (
                        <div className="itemPage__cards" key={itemInfo.id}
                        onClick={() => whichItemClicked(itemInfo.id)}>
                            <ItemCard image= {itemInfo.image}
                                title={itemInfo.name}
                                price={itemInfo.price}
                                instock={itemInfo.available}/>
                        </div>
                    )
                })}
            </div>
            {clickedstate > 0
                ?
                <div>
                    {data.map((itemNumber)=>{
                           return(
                               <div className="itemPage__detail" key={itemNumber.id} >
                               <ItemDetail  
                               title={itemNumber.name}
                               price={itemNumber.price}
                               instock={itemNumber.available}
                               />
                               </div>
                           )
                       })
                   }
                </div>
                :
            <div className={styles.item__sort}>
                {/* itemsort */}
                <h2>Filter</h2>
                {/* In stock
                Fruit
                Vegetable */}
                </div>
            }
        </div>
    )
    function whichItemClicked(id){
        console.log(id);
        setClickedstate(id)
    }
    
}

export default ItemPage