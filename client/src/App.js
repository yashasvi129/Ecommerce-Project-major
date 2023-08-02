
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import ForgotPasssword from './pages/Auth/ForgotPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Product';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';
import AdminOrders from './pages/Admin/AdminOrders';
function App() {
  return (
     <>
       <Routes>
         <Route path='/' element={<HomePage/>}></Route>
         <Route path='/product/:slug' element={<ProductDetails/>}></Route>
         <Route path='/categories' element={<Categories/>}></Route>
         <Route path='/cart' element={<CartPage/>}></Route>
         <Route path='/category/:slug' element={<CategoryProduct/>}></Route>
         <Route path='/search' element={<Search/>}></Route>
         <Route path='/dashboard' element={<PrivateRoute/>}>
            <Route path="user" element={<Dashboard/>}></Route>
            <Route path="user/orders" element={<Orders/>}></Route>
            <Route path="user/profile" element={<Profile/>}></Route>
         </Route>
            
         <Route path='/dashboard' element={<AdminRoute/>}>
            <Route path="admin" element={<AdminDashboard/>}></Route>
            <Route path="admin/create-category" element={<CreateCategory/>}></Route>
            <Route path="admin/create-product" element={<CreateProduct/>}></Route>
            <Route path="admin/products" element={<Products/>}></Route>
            <Route path="admin/product/:slug" element={<UpdateProduct/>}></Route>
            <Route path="admin/users" element={<Users/>}></Route>
            <Route path="admin/orders" element={<AdminOrders/>}></Route>
         </Route>
         
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/forgot-password' element={<ForgotPasssword/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/policy' element={<Policy/>}></Route>
         <Route path='*' element={<Pagenotfound/>}></Route>
       </Routes>
     </>
  );
}

export default App;
