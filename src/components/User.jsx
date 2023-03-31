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
// How to use useEffect hooks
useEffect(()=>{
    fetchData();
},[data]);
    return(
        <div className="App">
        <h1 style={{ color: "red" }}>Get Api via React</h1>
        <center>
            { data.map((indexdata)=>{
            return (
           <div>
            {/* display api data */}
            <p className={ indexdata.id }>{indexdata.id}</p>
              <p><b>Name :-</b>{ indexdata.name }</p> 
              <p><b>Email Adress:-</b> { indexdata.email }</p>
              <p><b>Phone Number:-</b> { indexdata.phone}</p>
              <p><b>Company Name:- </b> { indexdata.company.name}</p>
              <p><b>adress Adress:-</b> { indexdata.address.city} ,{ indexdata.address.street}, { indexdata.address.zipcode }</p>
              </div>
            );
          })}
        </center>
      </div>
    );
 }
export default User;


