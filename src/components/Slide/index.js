import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slide({ children, settings, className }) {
    return <Slider {...settings}>{children}</Slider>;
}

export default Slide;
