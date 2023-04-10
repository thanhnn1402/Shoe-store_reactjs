import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to="/">
                    <img src={images.logo} alt="" />
                </Link>
            </div>
            <nav className={cx('navbar')}>
                <ul className={cx('navbar-nav')}>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-link')} to="/">
                            HOME
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-link')} to="/shop">
                            SHOP
                        </Link>
                    </li>

                    <Tippy
                        interactive
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('menu')} tabIndex="-1" {...attrs}>
                                <div className={cx('menu-item')}>
                                    <Link to="/account/orders">ORDERS</Link>
                                </div>
                                <div className={cx('menu-item')}>
                                    <Link to="/account/address">ADDRESS</Link>
                                </div>
                                <div className={cx('menu-item')}>
                                    <Link to="/account/details">ACCOUNT DETAILS</Link>
                                </div>
                            </div>
                        )}
                    >
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-link')} to="/">
                                MY ACCOUNT
                                <FontAwesomeIcon className={cx('nav-icon')} icon={faChevronDown} />
                            </Link>
                        </li>
                    </Tippy>

                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-link')} to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-link')} to="/contact">
                            CONTACT
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-link')} to="/">
                            $0.00
                            <FontAwesomeIcon className={cx('nav-icon', 'nav-icon-cart')} icon={faBagShopping} />
                            <span className={cx('badge')}>3</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
