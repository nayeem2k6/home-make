import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import AddProperty from "../Pages/AddProperty";
import AllProperties from "../Pages/AllProperties";
import Home from "../Pages/Home";
import PropertyDetails from "../Pages/PropertyDetails";
import MyProperties from "../Pages/MyProperties"

const router = createBrowserRouter ([
    
        {
           path:'/', 
           Component:HomeLayout,
           children: [
            {
                path:'/',
                Component:Home,
                loader: () => fetch('http://localhost:3000/latest-homes')  
            },
            
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/Properties',
                Component:AddProperty,
                
            },
            {
                path:'/all',
                Component:AllProperties,
                loader: ()=> fetch('http://localhost:3000/Homes')
            },
            {
                path:'/view/:id',
                Component:PropertyDetails,
            },
            {
                path:'/my',
                Component:MyProperties,
                loader: () => fetch('http://localhost:3000/Homes/${id}')
            
            }
           
        
           ],
           errorElement: <NotFound></NotFound> 

        },
      
    
])

export default router;