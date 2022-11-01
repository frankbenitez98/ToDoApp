
import React from "react";


function useLocalStorage(itemName , initial){
    
    const [item , setItem] = React.useState(initial);
    const [loading , setLoading] = React.useState(true);
    const [error , setError] = React.useState(false);
  
    React.useEffect(()=>{
      setTimeout(() => {
        try {
          let localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItem){
            parsedItem = initial; 
            localStorage.setItem(itemName, JSON.stringify(parsedItem));
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
    
          setLoading(false); 
        } catch (error) {
          setError(error);
        }
      }, 1000);
    });
  
    const saveItem = (newItem) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem)); 
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
      
    };
    
    return {
      item ,
      saveItem,
      loading, 
      error
    };
  }

  export {useLocalStorage}; 