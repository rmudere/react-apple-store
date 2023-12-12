import './App.css';
import MenuSidebar from './Components/MenuSidebar';
import {deleteAllProducts, getProducts, populateProducts} from "./productsService";
import {Outlet} from "react-router-dom";

function App() {
    //deleteAllProducts().then(d=>console.log(d));
    //populateProducts().then(r => console.log(r));
    return (
        <div className="main-container">
            <MenuSidebar/>
            <Outlet/>
        </div>
    );
}

export async function loader() {
    const products = await getProducts();
    return {products};
}

export default App;
