import React from 'react'
import styles from './Header.module.css'
function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__title}>
                Product
            </div>
            <div className={styles.header__addtocart}>
                {/* Icon for add to card */}
            </div>
        </div>
    )
}

export default Header
