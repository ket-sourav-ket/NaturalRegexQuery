import { FcFinePrint } from "react-icons/fc";
import { useState, useRef } from 'react'
import './fileButton.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { IoDocumentTextOutline } from "react-icons/io5";
import txtImg from '../../assets/txtImg.png';
import { MdOutlineUploadFile } from "react-icons/md";
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import {Outlet, Link, useNavigate,Form, redirect, useLoaderData} from 'react-router-dom';
import { AiOutlineFileSearch } from "react-icons/ai";



export async function quickAction({request,params})
{
    const formData = await request.formData();
    console.log(formData.get("files"))
    const uploadData = Object.fromEntries(formData); 
    console.log(uploadData);
    console.log('inside search action');
    //const data = new FormData();
    //data.append('files',formData.get('files'))
    //data.append('query', formData.get('query'))
    //console.log(data)
    let response = await fetch('/quickSearch',
        {
            method : 'POST',
         /*  header: {
                'Content-Type' : 'multipart/form-data'
            },  */
            body : formData,

        }
        
    );
    let doc = await response.text();
    console.log(doc);

    return redirect(`/search/${doc}/${uploadData.query}`);

}


const FileButton = () => {

    const submitRef = useRef();
    const fileRef = useRef();
    const queryRef = useRef();
    const [txtDocument, setTxtDocument] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const [query, setQuery] = useState(null);
  return (
    <div className='quickSearch-container'>
        
        <Form action='quick' encType="multipart/form-data" onSubmit={()=>setTxtDocument(null)} method='post' style={{display: 'flex', width: '10%' , height:'5%', flexDirection:'row' ,
        justifyContent: 'center' , alignItems: 'center', 
        border: '2px dashed #1475cf' , cursor: 'pointer', 
        borderRadius:'5px' , backgroundColor : 'rgb(255, 244, 240)',
        }}
        onClick={() => document.querySelector(".input-field").click()}
        >
            <input ref={fileRef} name='files' type="file" accept='.txt' className="input-field" hidden
            onChange={({ target: {files}}) => {
                files[0] && setFileName(files[0].name)
                if(files){
                    setTxtDocument("File: ")
                }
            }}  />
           
            {txtDocument ?
            <>
            <img src={txtImg} width={100} height={100} alt={txtDocument + fileName} />
            <button ref={submitRef} type='submit' hidden > Actual UPLOAD </button> 
            </>
            :
            <>
            <FcFinePrint size={50} />
            <p>Browse Files to Upload</p>
            </>
        }

            <input style={{width: '20%'}} ref={queryRef} value={query} type='text' name='query' placeholder='Enter your query' hidden></input>
        </Form>
        
        <div id='querydiv' style={{display : 'flex',
                    alignSelf : 'stretch',
                    paddingLeft : '2.5%',
                    paddingRight : '2.5%',
                    flexDirection : 'row',
                    justifyContent: 'flex-end'}}>
        <AiOutlineFileSearch color='#AE67FA' size={'35px'} style={{marginTop : '10px'}} />
        <input style={{width : '70%',
                       height :  '70%'

        }}   value={query} type='text' name='dummyQuery' placeholder='Enter your query' onChange={(eventWrapper)=>setQuery(eventWrapper.target.value)}></input> 
        
        </div>

        <div style={{display : 'flex' ,
                    flexDirection : 'row'
        }}>
        <section className='uploaded-row'>
            <AiFillFileImage color='#1475cf' />
            <span className='upload-content'>
                {fileName}
                <MdDelete
                onClick={() => {
                    setFileName("No Selected File")
                    setTxtDocument (null)
                }}
                />


            </span>

            
        </section>
        {txtDocument && <button className='upload-btn' onClick={()=> submitRef.current.click()} > Search  <MdOutlineUploadFile /> </button>}
        </div>
    </div>
  )
  
}

export default FileButton