import React, {useState} from "react";

function FileUpload(){
    const[file, setFile] = useState(null);

    const fileChange = (event) => {
        const selectedFile = event.target.files[0];
        if(selectedFile)
        {
            setFile(selectedFile);
        }
    };

    return(
        <div style = {{margin: '-20% 10px 10% 220px'}}>
            <input type="file" onChange={fileChange}/>
            
        </div>

    );
};

export default FileUpload;