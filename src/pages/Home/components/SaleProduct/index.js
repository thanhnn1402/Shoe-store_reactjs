import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import styles from './SaleProduct.module.scss';
import ProductItem from '~/components/ProductItem';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SaleProduct() {
    const ref = useRef({});

    const next = () => {
        ref.current.slickNext();
    };

    const previous = () => {
        ref.current.slickPrev();
    };

    let settings = {
        className: cx('slick-slider'),
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        arrows: false,
        dots: true,
        dotsClass: `slick-dots ${cx('dots')}`,
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <h1>UNBELIEVABLE</h1>
                    <h3>SPEED.COMFORT.</h3>
                </div>
                <div className={cx('body')}>
                    <div className={cx('list-product')}>
                        <button className={cx('slick-prev')} onClick={previous}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>

                        <button className={cx('slick-next')} onClick={next}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                        <Slider {...settings} ref={ref}>
                            <ProductItem
                                thumbnail={images.product_1}
                                category="Running shoes"
                                name="AirPro X3 Whole Blue"
                                newPrice="$62.00"
                                sale
                            />
                            <ProductItem
                                thumbnail={images.product_2}
                                category="Running shoes"
                                name="AirPro X3 Red"
                                newPrice="$62.00"
                            />
                            <ProductItem
                                thumbnail={images.product_3}
                                category="Running shoes"
                                name="AirPro X3 Green"
                                oldPrice="$60.00"
                                newPrice="$58.00"
                                sale
                            />
                            <ProductItem
                                thumbnail={images.product_4}
                                category="Running shoes"
                                name="AirPro X3 Aqua"
                                oldPrice="$60.00"
                                newPrice="$58.00"
                            />

                            <ProductItem
                                thumbnail={images.product_5}
                                category="Running shoes"
                                name="AirPro X3 Blue"
                                oldPrice="$58.00"
                                newPrice="$55.00"
                                sale
                            />
                            <ProductItem
                                thumbnail={images.product_6}
                                category="Running shoes"
                                name="AirPro X3 Whole Green"
                                oldPrice="$60.00"
                                newPrice="$58.00"
                            />
                            <ProductItem
                                thumbnail={images.product_7}
                                category="Running shoes"
                                name="AirPro X3 Orange"
                                newPrice="$62.00"
                                sale
                            />
                            <ProductItem
                                thumbnail={images.product_8}
                                category="Running shoes"
                                name="AirPro X3 Yellow"
                                oldPrice="$60.00"
                                newPrice="$58.00"
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleProduct;
