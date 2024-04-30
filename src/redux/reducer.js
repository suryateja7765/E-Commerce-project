
// // 2------------
// const INIT_STATE = {
//     carts: []
//   }
  
//   export const CartReducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//       case "ADD_CART":
//         const ItemIndex= state.carts.findIndex((item)=> item.id == action.payload.id)

//         if(ItemIndex >= 0){
//             state.carts[ItemIndex].qnty +=1
//         }
//         else{
//             const temp={...action.payload, qnty:1}
//             return {
//           ...state,
//           carts: [...state.carts, temp]
//         }

//         }

//         //first else block will execute and store the quantity when we click the same product again then if will execute
  

//       case "REMOVE_ITEM":
//         const updatedCarts = state.carts.filter(item => item.id !== action.payload);
//         return {
//           ...state,
//           carts: updatedCarts
//         }

//         case "RMV_ONE":
//             const ItemIndex_dec= state.carts.findIndex((item)=> item.id == action.payload.id)

//                 if(state.carts[ItemIndex_dec].qnty >= 1){
//                     const dltItem=state.carts[ItemIndex_dec].qnty -= 1
//                     return{
//                         ...state,
//                         carts:[...state.carts]
//                     }
//                 }
//                 else if(state.carts[ItemIndex_dec].qnty === 1 ){
//                     const data = state.carts.filter((el)=>el.id !== action.payload);
    
//                     return {
//                         ...state,
//                         carts:data
//                     }
//                 }
//                else{
//                 return 0
//                }
//       default:
//         return state;
//     }
//   }
  
  
  
// break-----------

const INIT_STATE = {
  carts: []
}

export const CartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
      case "ADD_CART":
          const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

          if (ItemIndex >= 0) {
              state.carts[ItemIndex].qnty += 1;
              return {
                  ...state,
                  carts: [...state.carts]
              };
          } else {
              const temp = { ...action.payload, qnty: 1 };
              return {
                  ...state,
                  carts: [...state.carts, temp]
              };
          }

      case "REMOVE_ITEM":
          const updatedCarts = state.carts.filter(item => item.id !== action.payload);
          return {
              ...state,
              carts: updatedCarts
          };

      case "RMV_ONE":
          const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

          if (state.carts[ItemIndex_dec].qnty > 1) {
              state.carts[ItemIndex_dec].qnty -= 1;
              return {
                  ...state,
                  carts: [...state.carts]
              };
          } else if (state.carts[ItemIndex_dec].qnty === 1) {
              const data = state.carts.filter((el) => el.id !== action.payload);

              return {
                  ...state,
                  carts: data
              };
          } else {
              return state; // Returning state as it is when quantity is already 0
          }

      default:
          return state;
  }
}

  
  
  