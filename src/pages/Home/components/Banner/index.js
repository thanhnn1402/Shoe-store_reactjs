import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import styles from './Banner.module.scss';
import Button from '~/components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner')} style={{ backgroundImage: `url(${images.backgroundBanner})` }}>
            <div className={cx('banner-content')}>
                <h1>AirPro X3</h1>
                <img src={images.banner} alt="" />

                <Button to="/shop" leftIcon={<FontAwesomeIcon icon={faArrowRightLong} />} rounded>
                    SHOP COLLECTION
                </Button>
            </div>
        </div>
    );
}

export default Banner;
