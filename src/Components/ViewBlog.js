import React, { useState } from 'react'
import { useParams } from 'react-router'
import './ViewBlog.css';

const ViewBlog=()=> {
    let {id} = useParams();
    let [storage,setStorage] = useState()
    let getLocalstorage = JSON.parse(localStorage.getItem("Albums")) || [];
    let increseLike =0;
 
    
    let filtered = getLocalstorage.find(val=>Number(val.id)===Number(id))
    let findIndex = getLocalstorage.indexOf(filtered);
    filtered.views= Number(filtered.views)+1;
    getLocalstorage[findIndex]=filtered;
    localStorage.setItem("Albums",JSON.stringify(getLocalstorage));

    let likes = getLocalstorage.filter(val=>Number(val.like)); 
    const handleLikes=(param)=>{
        likes = getLocalstorage.find(val=>Number(val.like)===Number(param));
        let findIndex = getLocalstorage.indexOf(likes);
        if (increseLike==0) {
            likes.like =Number(likes.like)+Number(1);
            console.log(likes.like);
            getLocalstorage[findIndex]=likes;
            localStorage.setItem("Albums",JSON.stringify(getLocalstorage))
            return increseLike =1;
        }
        else if(increseLike==1){
            likes.like =Number(likes.like)-1;
            getLocalstorage[findIndex]=likes;
            localStorage.setItem("Albums",JSON.stringify(getLocalstorage))
           
            
            return increseLike =0;
        }
      
    }
        
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col s10 m5">
                        <div className="card">
                            <div className="card-title">
                                <h3>{filtered.title}</h3>
                            </div>
                            <div className="card-image">
                                <img src={filtered.url}/>
                            </div>
                            <button className="btn" onClick={()=>handleLikes(filtered.like)}>likes</button>
                            <div className="view-likes">
                            <span>{filtered.views}</span>
                            <span>{filtered.like}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewBlog
