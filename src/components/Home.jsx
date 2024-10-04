import React from "react";
import banner from '../assets/images/jm8.jpg'; 
const Home =()=>{
  return(
    <div>
<img src={banner} alt="associated"></img>
    </div>
  )
}
export default Home;

// import React, {useState} from "react";
// const Home =()=>{
//     const [data,setData]=useState("Sandeep")
//     function updateData()
//     {
//       setData("Kumar")
//     }
//     return(
//         <div className="App">
//         <h1>{data}</h1>
//         <button onClick={updateData}>Update Data</button>
//        </div>
//     )
// }
// export default Home;
// import * as React from 'react';
// const Home = () => {
//   const [isOpen, setOpen] = React.useState(
//     JSON.parse(localStorage.getItem('is-open')) || false
//     );

//   const handleToggle = () => {
//     localStorage.setItem('is-open', JSON.stringify(!isOpen));
//     setOpen(!isOpen);
//   };
//   return (
//     <div>
//       <button onClick={handleToggle}>Toggle</button>
//       {isOpen && <div>Content</div>}
//     </div>
//   );
// };

// export default Home;


