import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './../components/web/home/Home.jsx';
import Categories from './../components/web/categories/Categories.jsx';
import DashboardLayout from './DashboardLayout';
import HomeDashboard from './../components/dashboard/home/Home.jsx'
import CategoriesDashboard from './../components/dashboard/categories/Categories.jsx'
import Register from '../components/web/register/Register.jsx';
import Login from '../components/web/login/Login.jsx';
import Cart from '../components/web/cart/Cart.jsx';
import CategoriesDetails from '../components/web/categories/CategoriesDetails.jsx';
import AllProducts from '../components/web/products/AllProducts.jsx';
import Product from '../components/web/products/Product.jsx';
import ProtectedRout from './protectedRout/ProtectedRout.jsx';
import ForgetPass from '../components/web/forgetpass/ForgetPass.jsx';
import Reset from '../components/web/forgetpass/Reset.jsx';
import Profile from '../components/web/profile/Profile.jsx';
import Order from '../components/web/order/Order.jsx';
import Userinfo from '../components/web/profile/Userinfo.jsx';
import UserContact from '../components/web/profile/UserContact.jsx';
import UserOrderInfo from '../components/web/profile/UserOrderInfo.jsx';

 export  const router = createBrowserRouter([

    {
        path: "/",
        element:<Layout  />,
        children:[
          {
            path:'register',
            element:<Register />,
          },
         {
           path:'login',
           element:<Login  />,
          },
          {
            path:'/',
            element:<Home />,
          },
          {
            path:'categories',
            element:<Categories />,
        },
        {
          path:'reset',
          element:<Reset />,
      },
      {
        path:'profile',
        element:
        <ProtectedRout>
          <Profile />
        </ProtectedRout>,
         children:[
          {
          index:true,
           
           element:<Userinfo/>,
          },
          {
          path:'contact',
          element:<UserContact/>
          },
          {
          path:'userOrder',
          element:<UserOrderInfo/>
          }
          
        ]
        
    },
    {
      path:'allproducts',
      element:<AllProducts />,
  },

    {
      path:'order',
      element:<Order />,
  },
       
    {
          path:'cart',
          element:
          <ProtectedRout>
            <Cart/>
          </ProtectedRout>
          ,
        },
        {
        path:'forgetpassword',
        element: <ForgetPass />
        },
        {
          path:'/products/category/:CategoryId',
          element:<CategoriesDetails />,
        },
        {
          path:'/products/:ProductId',
          element:<Product />,
        },
          {
            path:'*',
            element:<h2>Page Not Found ---web</h2>,
          }]
        },
        {
          path:'/dashboard',
          element:<DashboardLayout />,
          children:[{
            path:'home',
            element:<HomeDashboard />
          },
          {
            path:'categories',
            element:<CategoriesDashboard/>,
          },
          {
            path:'*',
            element:<h2>Page Not Found --- Dashboard</h2>
          }
         
        ]
        }
        ]);
//      {
//      path:'/',
//      element:<Layout />,
//      children:[
//       {
//         path:'register',
//         element:<Register/>,
//       },
//       {
//         path:'login',
//         element:<Login/>,
//       },
//       {
//        path:'home',
//        element:<Home />,
//      },
//      {
//        path:'categories',
//        element:<Categories />,
//    },
//      {
//        path:'*',
//        element:<h2>Page Not Found ---web</h2>,
//      }
//     ]},
//     {
//      path:'/dashboard',
//      element:<DashboardLayout />,
//      children:[{
//        path:'home',
//        element:<HomeDashboard />
//      },
//      {
//        path:'categories',
//        element:<CategoriesDashboard/>,
//      },
//      {
//        path:'*',
//        element:<h2>Page Not Found --- Dashboard</h2>
//      }
    
//    ]
//     }
//    ]);
   