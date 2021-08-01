import styles from './ItemDetail.module.css'
import CancelIcon from '@material-ui/icons/Cancel';
import {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
// import ItemsinCart from '../../data/ItemsinCart';


function ItemDetail({image, title, price, vender, instock, childunmount}) {
    const [itemquantity, setItemquantity] = useState(1)
    const editJsonFile = require("edit-json-file");
    let file = editJsonFile('../itemsincart.json');
    const [itemincart, setItemincart] = useState([])
    return (
        <div className={styles.itemDetail}>
            <div className={styles.itemDetail__cancelbtn}>
                <CancelIcon className={styles.cancel__icon} onClick={childunmount}/>
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
            <div className={styles.addtocart}>
                {/* plus minus */}
                <div className={styles.addtocart__quantity}>
                    {
                        itemquantity === 1
                        ?
                        <RemoveIcon className={styles.counters} style={{color: "#d4d4d4"}}/>
                        :
                        <RemoveIcon className={styles.counters} onClick={itemdecrement}/>
                    }
                    <p>
                        {itemquantity}
                    </p>
                    <AddIcon className={styles.counters} onClick={itemincrement}/>
                </div>
                <form>
                    <button onClick={addtocartfn} type='submit'>Add to cart</button>
                </form>
            </div>
        </div>
    )
    function addtocartfn(e){
        e.preventDefault()
        // <ItemsinCart title= {title} />
        console.log('you click add to cart')
        setItemincart([...itemincart, title])
        itemincart.map((items) =>
            // file.set("title", items)
            (
                // eslint-disable-next-line
                file.append("title", items),
                console.log(items)
            )
        )
        console.log(file.get());
    }
    function itemincrement(e){
        setItemquantity(itemquantity + 1)
    }
    function itemdecrement(e){
        setItemquantity(itemquantity - 1)
    }
}

export default ItemDetail
