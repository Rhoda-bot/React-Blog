import axios from "axios";
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";

const BlogPage=()=> {

  let [fetchData,setFetchData] =useState();
  let [view]= useState({views:0,like:0});
  let [myState,setMyState]= useState();
  let [input, setInput]= useState()

  
  useEffect(() => {
    
    axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1").then(response=>{
      // let storeResponse ={ ...response.data,...view};
      console.log(response);
      let finalData= response.data.map((val,ind)=>{
        return {...val,...view};
      })
      // console.log(finalData);
      setFetchData(finalData);
     let getAlbums =JSON.parse(localStorage.getItem("Albums")) || [];
      getAlbums=finalData;
     localStorage.setItem("Albums",JSON.stringify(getAlbums))
     
    })
    let localstorage = JSON.parse(localStorage.getItem("Albums")) || [];
    setMyState(localstorage);
     
  }, []);

  const handleSearch=(e)=>{
   setInput(e.target.value);

  }
 return (
        <>
        <input placeholder="search here" onChange={handleSearch}/>
      
        {myState && myState.filter(val=>{
          
          if (input===undefined) {
          
            return val;
          }
         else if(val.title.includes(input)){
            return val;
          }
        }).map((data,i)=>{
          return (
            <>
              <div className="container">
              <div className="row">
              <div className=" col s12 m7">
                <div className="card">
                  <span class="card-title">Blog Title</span>
                <Link to={`post/${data.id}`}> <h5>{data.title}</h5></Link>
                   
                  <div className="card-image">
                    <img src={data.url}/>
                      <div className="card-content">
                        <button className="btn"> {data.like}</button>
                        <button className="btn">{data.views}</button>
                      </div>
                      </div>
                     </div>
              </div>
            </div>
              </div>
          </>
          )
        })}
        
        </>
    )
}

export default BlogPage
