import AddProduct from "../pages/AddProduct/AddProduct";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import SiteRoot from "../pages/SiteRoot";
import Wishlist from "../pages/Wishlist/Wishlist";

const Routes=[{
    path:'/',
    element:<SiteRoot/>,
    children:[{
        path:'',
        element:<Home/>
    },{
        path:'Wishlist',
        element:<Wishlist/>
    },{
        path:'/:_id',
        element:<Detail/>
    },
    {
        path:"AddProduct",
        element:<AddProduct/>
    }
]
}]
export default Routes