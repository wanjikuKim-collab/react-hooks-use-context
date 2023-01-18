import React,{createContext, useState} from "react";

//create the context object
const UserContext = createContext();


//create the context provider (component)
function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }

//export 
export {UserContext, UserProvider}