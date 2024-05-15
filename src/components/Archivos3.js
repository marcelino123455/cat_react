import axios from "axios";
import { useState } from "react";


function Archivos3(){
    const [Url_Image, setUrl_Img] = useState("");

    const channgeUploadImage = async (e) =>{
        const file = e.target.files[0];
        console.log(e);
    
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "parcial_proyecto");

    const cloudinaryCloudName = 'dzli6ozmk';

    // const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload?upload_preset=${cloudinaryUploadPreset}&api_key=${cloudinaryApiKey}`;
    const preset = "https://api.cloudinary.com/v1_1/dzli6ozmk/image/upload"
    const response = await axios.post(
        preset, 
        data
    )
    console.log(response.data.public_id)
    console.log(Url_Image)
    setUrl_Img(response.data.secure_url)
    
}   


    return(
        <>
            <h1>Seleccionar imágen de cloudinary</h1>
            <div>
                <input type="file"  onChange={channgeUploadImage} ></input>
                {Url_Image &&(
                    <div>
                        <img src={Url_Image}></img>
                        <button>Eliminar Imagen</button>

                    </div>
                )

                }
                {/* <img src ="https://res.cloudinary.com/dzli6ozmk/image/upload/"Aqqui url publica de la imagen""></img> */}
            </div>
        </>
    )

}

export default Archivos3;