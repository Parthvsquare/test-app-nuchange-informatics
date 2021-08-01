// import {Router} from 'react'
import { Link } from "react-router-dom";
import styles from './Header.module.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
// import AddToCartPage from "../AddToCartPage/AddToCartPage.js";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__title}>
                <h1>Product</h1>
            </div>
            <div className={styles.header__search}>
                <input type="text" />
                <div className={styles.header__search__icon}>
                <SearchIcon />
                </div>
            </div>
            <div className={styles.header__addtocart}>
                {/* <ShoppingCartIcon className={styles.icon}/> */}
            <Link  to = "/addToCartPage">
                <ShoppingCartIcon className={styles.icon}/>
            </Link>
            </div>
        </div>
    )
    
}

export default Header
