import React,{createContext} from "react";

//create the context object
const UserContext = createContext();


//create the context provider (component)
function UserProvider({children}){
   return(
       <UserContext.Provider value= "hello">
            {children}
       </UserContext.Provider>
   )
    

}

//export 
export {UserContext, UserProvider}