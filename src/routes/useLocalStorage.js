
import React from "react";


function useLocalStorage(itemName, initial) {

  const [state, dispatch] = React.useReducer(reducer, initialState(initial)); 

  const {item, loading, error} = state;    

  // ACTION CREATORS  

  const onError = (error) => {dispatch({type: actionTypes.error, payload: error})}; 
  const onLoad = (parsedItem) => {dispatch({type: actionTypes.load, payload: parsedItem})};
  const onSave = (newItem) => {dispatch({type: actionTypes.save, payload: newItem})};

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          parsedItem = initial;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        } 
        onLoad(parsedItem); 

        // setItem(parsedItem);
        // setLoading(false);

      } catch (error) {
        onError(error);

        // setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
      // setItem(newItem);
    } catch (error) {
      onError(error);
      // setError(error);
    }

  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

const initialState = (initial) =>({
  item: initial, 
  loading: true, 
  error: false
});
const actionTypes  = {
  error: 'ERROR',
  load : 'LOAD',
  save: 'SAVE',

};

const reducerObject = (state , payload) =>({
  [actionTypes.error] : {
    ...state ,
    error: true, 
  },
  [actionTypes.load] : {
    ...state ,
    error: false,
    loading: false, 
    item: payload
  },  
  [actionTypes.save] : {
    ...state , 
    item: payload
  },  

});

const reducer = (state,action) => {
  if(reducerObject(state, action.payload)[action.type]){
    return reducerObject(state, action.payload)[action.type];
  }
  else
    return state; 
};


export { useLocalStorage }; 