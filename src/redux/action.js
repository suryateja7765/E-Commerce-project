
// 2--------
export const  Add= (item) => {
    return {
      type: "ADD_CART",
      payload: item
    }
  }
  
  export const removeItem = (id) => {
    return {
      type: "REMOVE_ITEM",
      payload: id
    }
  }


  //decrement 
  export const REMOVE = (item) => {
    return {
      type: "RMV_ONE",
      payload: item
    }
  }