import Home from '~/pages/Home';
import Shop from '~/pages/Shop';
import About from '~/pages/About';
import Contact from '~/pages/Contact';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
