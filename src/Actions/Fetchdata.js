import axios from 'axios';
import {users} from '../Actions/index';

export const fetch_Data =()=>{ 
    return dispatch=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(
            response=>{
                console.log(response.data);
                
                dispatch({
                    type:users,
                    payload: response.data
                })
            }
        ).catch(
            err=>{
                dispatch({type:"ERROR",payload:err})
            }
        )
    }
}