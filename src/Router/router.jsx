import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import AddProperty from "../Pages/AddProperty";
import AllProperties from "../Pages/AllProperties";
import MyProperties from "../Pages/MyProperties";
import Home from "../Pages/Home";


const router = createBrowserRouter ([
    
        {
           path:'/', 
           Component:HomeLayout,
           children: [
            {
                
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
              path:'/profile', 
              Component:MyProperties,  
              loader: () => fetch("http://localhost:3000/Homes")
            },
            
            {
                path:'/home',
                Component:Home
            }
           
        
           ],
           errorElement: <NotFound></NotFound> 

        },
      
    
])

export default router;