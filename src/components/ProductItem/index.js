import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function ProductItem({ thumbnail, category, name, oldPrice, newPrice, to = '', sale }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Tippy
                    interactive
                    placement="top-end"
                    render={(attrs) => (
                        <div className={cx('actions')} tabIndex="-1" {...attrs}>
                            <Link className={cx('btn-action')} to={to}>
                                <FontAwesomeIcon icon={faEye} />
                                <span>Quick View</span>
                            </Link>
                            <Link className={cx('btn-action')} to={to}>
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span>Select options</span>
                            </Link>
                        </div>
                    )}
                >
                    <Link to={to} style={{ display: 'inline-block' }}>
                        <img className={cx('thumbnail')} src={thumbnail} alt="" />
                    </Link>
                </Tippy>
                {sale && (
                    <div className={cx('sale-wrap')}>
                        <span>Sale!</span>
                    </div>
                )}
            </div>
            <div className={cx('body')}>
                <p className={cx('category')}>{category}</p>
                <Link className={cx('name')} to={to}>
                    {name}
                </Link>
                <p className={cx('review')}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </p>
                <p className={cx('price')}>
                    {oldPrice && <span className={cx('old-price')}>{oldPrice}</span>}
                    <span className={cx('new-price')}>{newPrice}</span>
                </p>
            </div>
        </div>
    );
}

export default ProductItem;
