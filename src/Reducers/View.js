import {users} from '../Actions/index'

const initialState = [];

const myFunc=(state=initialState,action)=>{
    
  switch (action.type) {
      case users:
        // console.log(action.payload);
        //  let spreadData =[action.payload];
         return([...state,action.payload])

          
  
      default:
        
          return state;
  }
}
export default myFunc;