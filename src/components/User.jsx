import React ,{useState, useEffect} from "react";
 const User =()=>{
    // const url = "https://jsonplaceholder.typicode.com/users";
    // const [data, setData] = useState([]);

    const Url = "https://jsonplaceholder.typicode.com/users";
  const [ data,setData]=useState([]);
    const fetchInfo = () => {
      return fetch(Url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }
    useEffect(() => {
      fetchInfo();
    }, []);
    return(
        <div className="App">
        <h1 style={{ color: "green" }}>Get Api via React</h1>
        <center>
          {data.map((dataObj, index) => {
            return (
           <div>
            <p>{dataObj.id}</p>
              <p><b>Name :-</b> {dataObj.name}</p> 

              <p><b>Email Adress:-</b> {dataObj.email}</p>
              <p><b>Phone Number:-</b> {[dataObj.phone]}</p>
              <p><b>Company:- </b> {dataObj.company.name}</p>
              <p><b>adress Adress:-</b> {dataObj.address.city} ,{dataObj.address.street}, {dataObj.address.zipcode}</p>
              </div>
            );
          })}
        </center>
      </div>
    );
 }
export default User;


