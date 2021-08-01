// import {Router} from 'react'
import { Link } from "react-router-dom";
import styles from './Header.module.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
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
            <Link  to={{pathname: './AddToCartPage/AddToCartPage.js'}}>
                <ShoppingCartIcon className={styles.icon}/>
            </Link>
                
            </div>
        </div>
    )
    
}

export default Header
