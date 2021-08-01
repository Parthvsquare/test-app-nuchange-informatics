import { useState } from "react";
import ItemCard from '../Components/ItemCard/ItemCard'
import ItemDetail from '../Components/ItemDetail/ItemDetail'
import styles from './ItemPage.module.css'
import data from '../data/file.json'


function ItemPage() {
    const [clickedstate, setClickedstate] = useState([0]);
    const [childunmount, setChildunmount] = useState(false);
    const [vegetablecheck, setVegetablecheck] = useState(false);
    const [fruitscheck, setFruitscheck] = useState(false);
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
                {
                    vegetablecheck ?
                    <div className="itemPage__vegies">
                {data.map((itemInfo)=>{
                    return  (
                        <div className="itemPage__cards" key={itemInfo.id}
                        onClick={() => whichItemClicked(itemInfo.id)}>
                            {
                                itemInfo.category === "Vegetables"
                                ?
                                <ItemCard image= {itemInfo.image}
                                title={itemInfo.name}
                                price={itemInfo.price}
                                instock={itemInfo.available}/>
                                :null
                            }
                            
                        </div>
                    )
                })}
                </div>
                :
                null
                }
                {
                    fruitscheck 
                    ?
                    <div className="itemPage__fruits">
                    {data.map((itemInfo)=>{
                        return  (
                            <div className="itemPage__cards" key={itemInfo.id}
                            onClick={() => whichItemClicked(itemInfo.id)}>
                                {
                                    itemInfo.category === "Fruits"
                                    ?
                                    <ItemCard image= {itemInfo.image}
                                    title={itemInfo.name}
                                    price={itemInfo.price}
                                    instock={itemInfo.available}/>
                                    :null
                                }
                                
                            </div>
                        )
                    })}
                    </div>
                    :
                    null
                }
                {
                    fruitscheck ===false && vegetablecheck ===false 
                    ?
                    
                 <div className="itemPage__default">
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
                : null
                }
                
            </div>
            <div className="itemPage__right">
                { childunmount 
                    ?
                    <div>
                        {data.map((itemNumber)=>{
                            return(
                                <div className="itemPage__detail" key={itemNumber.id} >
                                    {
                                        itemNumber.id === clickedstate 
                                        ?  
                                            <ItemDetail
                                                image= {itemNumber.image}  
                                                title={itemNumber.name}
                                                price={itemNumber.price}
                                                instock={itemNumber.available}
                                                vender={itemNumber.vendor}
                                                //    unmountfn{...childUnmount}
                                                /> 
                                            : null
                                }
                                </div>
                            )
                        })
                    }
                    </div>
                    :
                    <div className={styles.item__sort}>
                        {/* itemsort */}
                        <h2>Filter</h2>
                        <input
                            type="checkbox"
                            id="topping"
                            name="topping"
                            value="Paneer"
                        //   checked={setVegetablecheck(true)}
                           onChange={vegetablecheckbox}
                        />Vegetable<br />
                        <input
                            type="checkbox"
                            id="topping"
                            name="topping"
                            value="Paneer"
                        //    checked={setFruitscheck(true)}
                            onChange={fruitscheckbox}
                        />Fruits

                    </div>
                }
            </div>
            <div className="tp">
                {childunmount}
            </div>
        </div>
    )
    function whichItemClicked(id){
        // console.log(id);
        setChildunmount(!childunmount)
        setClickedstate(id)
    }
    function vegetablecheckbox(e){
        setVegetablecheck(!vegetablecheck)
        console.log(vegetablecheck)
    }
    function fruitscheckbox(e){
        setFruitscheck(!fruitscheck)
        console.log(fruitscheck)
    }

    // function childUnmount(){
    //     setChildunmount(!childunmount)
    // }
    
}

export default ItemPage