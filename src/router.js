import { ROUTER } from "./util/router";
import HomePage from './pages/user/home';
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./pages/user/profilePage";
import ProductsPage from "pages/user/productsPage";
import ProductDetailPage from "pages/user/ProductDetailPage";

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTER.USER.PROFILE,
            component: <ProfilePage />
        }, {
            path: ROUTER.USER.PRODUCTS,
            component: <ProductsPage />
        }, {
            path: ROUTER.USER.PRODUCT,
            component: <ProductDetailPage />
        }

    ]
    return <MasterLayout>
    <Routes>
        {
            userRouter.map((item, key) => (
                <Route key={key} path={item.path} element={item.component} />
            ))
        }
        </Routes>
    </MasterLayout>
}


const RouterCustom = () => {
    return renderUserRouter();
}
export default RouterCustom;