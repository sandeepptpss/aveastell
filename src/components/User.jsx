import React ,{useState, useEffect} from "react";
// Create function based user
const User =()=>{
const Url = "https://jsonplaceholder.typicode.com/users";
// How to use useState hooks
const [ data,setData]=useState([]);
// Create arrow function
const fetchData=()=>{
     return fetch(Url)
     .then((resp)=>resp.json())
     .then((result)=>setData(result))
}
//How to use useEffect hooks
useEffect(()=>{
    fetchData();
},[data]);
    return(
        <div className="App">
        <h1 style={{ color: "green" }}>Get Api via React</h1>
        <center>
            { data.map((indexdata)=>{
            return (
           <div className="main-get-api">
            {/* display api data */}
              <h2 className={ indexdata.id }>{indexdata.id}</h2>
               <p><b>Name :-</b>{ indexdata.name }</p> 
               <p><b>Email Adress:-</b> { indexdata.email }</p>
               <p><b>Phone Number:-</b> { indexdata.phone}</p>
               <p><b>Company Name:-</b> { indexdata.company.name}</p>
               <p><b>Adress Adress:-</b> { indexdata.address.city} ,{ indexdata.address.street}, { indexdata.address.zipcode }</p>
               <p><b>Website Name:-</b> { indexdata.website}</p>
               <p><b>lat:</b> { indexdata.address.geo.lat }</p>
               <p><b>lng:</b> { indexdata.address.geo.lng }</p>
               
              </div>
            );
          })
          }
        </center>
      </div>
    );
 }
export default User;