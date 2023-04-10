import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Banner from './components/Banner';
import SaleProduct from './components/SaleProduct';
import LimitedProduct from './components/LimitedProduct';
import SalientFeature from './components/SalientFeature';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <SaleProduct />
            <LimitedProduct />
            <SalientFeature />
        </div>
    );
}

export default Home;
