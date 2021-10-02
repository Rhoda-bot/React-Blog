import axios from "axios";
import { useState } from "react";

const useCustom =()=>{
    let [post,setPost] = useState({});
    const fetchPost =url=>{
        axios.get(url).then(
            response=>setPost(response.data)
        )
    }
return {post,fetchPost}
}
export default useCustom;