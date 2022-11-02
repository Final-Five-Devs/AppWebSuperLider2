
import { Route,Routes } from "react-router-dom"
import { AddProducto } from "./components/AddProducto/AddProducto"
import { Inicio } from "./components/Inicio/Inicio"
import CarroCompras from './components/CarroCompras/CarroCompras'
import { TotalProductos } from "./components/TotalProductos/TotalProductos";
import { Dashboard } from "./components/admin/Dashboard";
<<<<<<< HEAD
import { VentasRealizadas } from "./components/VentasRealizadas/VentasRealizadas";
=======
import Login from './components/login/Login';
import Register from './components/Register/Register';
import Reset from './components/Reset/Reset';

//import Dashboard from './components/Dashboard/Dashboard';
>>>>>>> 01a4a0fcb503cac81b826400c7e6f9c76bac2d5e

export const Ruteos =({ cart, setCart, handleChange,handleClick }) =>{

    return(
        
        <Routes>
                <Route path="/" element={<Inicio handleClick={handleClick}/>}></Route>

                <Route path="/admin/dasboard" element={<Dashboard />}/>

                <Route path="/admin/dasboard/nuevo" element={<AddProducto/>}></Route>

                <Route path="/admin/dasboard/Total%20Productos" element={<TotalProductos></TotalProductos>}></Route>
                
                <Route Route path = "/admin/dasboard/VentasRealizadas"
                element = {<VentasRealizadas></VentasRealizadas>}></Route >
                
                <Route path="/CarroCompras" element={<CarroCompras cart={cart} setCart={setCart} handleChange={handleChange}/>}></Route>
                
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/reset" element={ <Reset/>} />
                <Route exact path="/dashboard" element={<Dashboard/>} />     
               
         </Routes>

    )

}