import React, { useState,useRef } from "react";
function PreviewImg(){
const ref = useRef();
const [File, setFile] = useState([]);
function handleChange(e) {
setFile(URL.createObjectURL(e.target.files[0]));
localStorage.setItem('File',URL.createObjectURL(e.target.files[0]));
}
console.log(File)
const remove = () => {
     setFile();
     ref.current.value = "";
localStorage.removeItem("File");
};
return(
    <div className="App">
        <h2>Display Preview Image</h2>
        <input className="my-file" type="file" ref={ref} onChange={handleChange} />
        {localStorage.getItem('File') && 
            <img id="myDIV" className="preview-img" src={localStorage.getItem("File")} alt="Previw-Img" />
         }
        <button onClick={remove}>Removed Local</button>
    </div>
);
}
export default PreviewImg;
 

