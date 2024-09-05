import config from '~/config';

//Layouts
import Header from '~/layouts/components/Header';

//Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';


//Not login can view
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: Header }
];
//Login can view
const privateRoutes = [];

export { publicRoutes, privateRoutes };