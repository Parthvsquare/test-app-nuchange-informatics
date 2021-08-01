// import {Router} from 'react'
import { Link } from "react-router-dom";
import styles from './Header.module.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
// import AddToCartPage from "../AddToCartPage/AddToCartPage.js";

function Header({wantCart}) {
    return (
        <div className={styles.header}>
            <div className={styles.header__title}>
            <Link className={styles.link} to='/' >    <h1>Product</h1></Link>
            </div>
            <div className={styles.header__search}>
                <input type="text" />
                <div className={styles.header__search__icon}>
                <SearchIcon />
                </div>
            </div>
            
            <div className={styles.header__addtocart}>
            { wantCart 
                ?
                <Link  to = "/addToCartPage">
                    <ShoppingCartIcon className={styles.icon}/>
                </Link>
                : 
                <p>You are in Cart</p>
            }
            </div>
        </div>
    )
    
}

export default Header
