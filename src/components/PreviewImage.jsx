import React, { useState,useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import preview from '../assets/images/preview.webp'; 

function PreviewImg(){

  // useState Hook 

const ref = useRef();
const [File, setFile] = useState([]);

// end useState Hook 
function handleChange(e){
setFile(URL.createObjectURL(e.target.files[0]));
localStorage.setItem('File',URL.createObjectURL(e.target.files[0]));
}


const remove = ()=>{
     setFile();
     ref.current.value = "";
     localStorage.removeItem("File");
};
 const image_path= localStorage.getItem('File')? localStorage.getItem('File') : preview
return(
     <div className="App main-preview-page">
     <TransformWrapper  initialScale={1}  initialPositionX={0}  initialPositionY={0}>
       {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
         <React.Fragment>
          {/* start Image  zoom control    */}
          <div>
           <button className="remove-image" onClick={remove }>Remove Image</button>
             <div className="main-control">
             <button onClick={() => zoomOut()}>-</button>
             <button onClick={() => zoomIn()}>+</button>
             <button onClick={() => resetTransform()}>Reset</button>
           </div>
           </div>
          {/* end Image zoom control   */}


  <TransformComponent className="zoom-image container">
  <input className="my-file" type="file" ref={ref} onChange={handleChange} />

  <img className="preview-img banner-img" src={image_path} alt="Previw-Img" />

  </TransformComponent>

    </React.Fragment>
    )}
    </TransformWrapper>
  </div>
);
}
export default PreviewImg;
 

