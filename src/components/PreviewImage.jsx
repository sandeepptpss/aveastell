import React, { useState } from "react";
function PreviewImg(){

const [file, setFile] = useState([]);

function handleChange(e) {



var element = document.getElementById("myDIV");
element.classList.add("active");
setFile(URL.createObjectURL(e.target.files[0]));




localStorage.setItem('src',URL.createObjectURL(e.target.files[0]));


var data = localStorage.getItem("src")
alert(data)
}

return(
    <div className="App">
        <h2>Display Preview Image  </h2>
        <input type="file" onChange={handleChange} />
    
        <img id="myDIV" class="preview-img"  src={file}  alt="Previw Img"/>
    </div>
);
}
export default PreviewImg;

 

