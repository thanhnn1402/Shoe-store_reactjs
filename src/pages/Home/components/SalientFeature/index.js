import classNames from 'classnames/bind';
import styles from './SalientFeature.module.scss';

const cx = classNames.bind(styles);

function SalientFeature() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('box-element')}>
                    <div className={cx('text-background')}>
                        <h2>01.</h2>
                    </div>
                    <div className={cx('inner-content')}>
                        <h4 className={cx('title')}>Research</h4>
                        <p className={cx('description')}>
                            Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.
                        </p>
                    </div>
                </div>

                <div className={cx('box-element')}>
                    <div className={cx('text-background')}>
                        <h2>02.</h2>
                    </div>
                    <div className={cx('inner-content')}>
                        <h4 className={cx('title')}>Idea & Concept</h4>
                        <p className={cx('description')}>
                            Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.
                        </p>
                    </div>
                </div>

                <div className={cx('box-element')}>
                    <div className={cx('text-background')}>
                        <h2>03.</h2>
                    </div>
                    <div className={cx('inner-content')}>
                        <h4 className={cx('title')}>Design & Production​</h4>
                        <p className={cx('description')}>
                            Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.
                        </p>
                    </div>
                </div>

                <div className={cx('box-element')}>
                    <div className={cx('text-background')}>
                        <h2>04.</h2>
                    </div>
                    <div className={cx('inner-content')}>
                        <h4 className={cx('title')}>Sales & Support​</h4>
                        <p className={cx('description')}>
                            Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalientFeature;
