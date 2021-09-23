
import React from 'react';

         const login_util = props=>{
           let {loggedIn} = props;
           if(loggedIn)
           {
               <button>Logout</button>
           }
           else{
               <button>Login</button>
           }
         };
export default login_util;