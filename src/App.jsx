import React, {useState} from 'react'
import Data from './Components/Data'
import * as XLSX from 'xlsx';
import Cols from './Components/Cols';
function App() {
    const [fileError, setFileError] = useState(null);
    const [fileData, setFileData] = useState(null); // Submit
    const [excelFile, setExcelFile] = useState(null); //Change
    const [cols, setCols] = useState(null); //headers
    

    const fileUpload = (e) =>{
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile && selectedFile.type === "text/csv"){
                let reader =  new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) =>{
                    console.log(e);
                    //parse data
                    setFileError(null);
                    setExcelFile(e.target.result);
                }
            }
            else{
                setFileError("Error! please upload CSV file");
                
            }
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(excelFile !== null){
            const workbook = XLSX.read(excelFile, {type : 'buffer'});

            //get first sheet(This part is confusing)
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
                
            const data = XLSX.utils.sheet_to_json(worksheet, {header : 1})

           
            // Working With headers
            // const headers = data[0];

            // const heads = headers.map(head => ({title : head, field: head}))
            setCols(data[0]);


            data.splice(0,1);
            setFileData(data)

        }else{
            setFileData(null)
        }
        
    }
  return (
    <div className='app'>
        {/* Uploading File*/}
        <form onSubmit={handleSubmit}>
            <input type="file" id='files' onChange={fileUpload}/> 
            {/* <label htmlFor="files"></label> */}
            <button type="submit">Upload Csv File</button>
            <br /><br />
            {fileError && <div className='error'>{fileError}</div>}
        </form>
        
        {/* Displaying Files */}
        <div className="container">
            {fileData===null && <h2>No File is selected</h2>}
            {fileData !==null && 
                
                    <table className='table'>
                        <thead>
                            <tr><Cols cols={cols}/></tr>
                        </thead>
                        <tbody>
                            {/* <Data fileData={fileData}></Data> */}
                        </tbody>
                    </table>
                
            }
        </div>
      
    </div>
  )
}

export default App