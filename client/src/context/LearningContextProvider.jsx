import { createContext, useContext, useState } from "react"
import { courses } from "../assets/data";


const LearningContext = createContext()
export const LearningContextProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState('')
    const [addItems, setAddItems] = useState({});
  const [currentState, setCurrentState] = useState("login");


    const addToCart = (itemId) =>{
       setAddItems((prev) =>{
        if(prev[itemId]) return prev;

        return{
          ...prev,
          [itemId]:1
        }
       })
    } 
    console.log(addItems);

    const learning = {
      isLoggedIn,
      setIsLoggedIn,
      courses,
      showSearch,
      setShowSearch,
      search,
      setSearch,
      addItems,
      addToCart,
      currentState,
      setCurrentState,
    };
  return (
    <LearningContext.Provider value={learning}>
      {children}
    </LearningContext.Provider>
  )
}

export const useLearningContext = () => useContext(LearningContext);
