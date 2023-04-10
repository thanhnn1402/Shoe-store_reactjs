import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import styles from './LimitedProduct.module.scss';
import Button from '~/components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function LimitedProduct() {
    const ref = useRef({});

    const next = () => {
        ref.current.slickNext();
    };

    const previous = () => {
        ref.current.slickPrev();
    };

    let settings = {
        className: cx('slick-slide'),
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('slider')}>
                    <button className={cx('slick-prev')} onClick={previous}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>

                    <button className={cx('slick-next')} onClick={next}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                    <Slider {...settings} ref={ref}>
                        <img src={images.product_limited_1} alt="" />

                        <img src={images.product_limited_2} alt="" />

                        <img src={images.product_limited_3} alt="" />

                        <img src={images.product_limited_4} alt="" />

                        <img src={images.product_limited_5} alt="" />

                        <img src={images.product_limited_6} alt="" />
                    </Slider>
                </div>
                <div className={cx('info')}>
                    <h4 className={cx('title')}>Limited Stock Available!</h4>
                    <h2 className={cx('name')}>AirPro X2</h2>
                    <p className={cx('description')}>
                        Consectetur adipiscing elit elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.​
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Button to="/" rounded leftIcon={<FontAwesomeIcon icon={faArrowRightLong} />}>
                        SHOP NOW
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LimitedProduct;
