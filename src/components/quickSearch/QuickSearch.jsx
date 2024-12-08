import React, { useRef, useState } from 'react'
import {Outlet, Link, useNavigate,Form, redirect, useLoaderData} from 'react-router-dom';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

import { MdCloudUpload, MdDelete } from 'react-icons/md'
import txtImg from '../../assets/txtImg.png';
import './quickSearch.css'

export async function quickAction({request,params})
{
    const formData = await request.formData();
    const uploadData = Object.fromEntries(formData);
    console.log('inside quick search action');
    console.log(uploadData);
    let response = await fetch('/uploadFile',
        {
            method : 'POST',
            
            body : formData

        }
        
    );
    let docId = await response.text()

    return redirect(`/search/${docId}/${uploadData.query}`);

}



const QuickSearch = () => {
    const [fileName, setFileName] = useState(null)
    const fileRef = useRef()
    const submitRef = useRef()
  return (
    
    <div  className='search-container'>
        <Form method='POST' action='/quickSearch' style={{height: '45%'}} className='quick-form' encType='multipart/form-data'>
            <input hidden ref={fileRef} name='files' type="file" accept='.txt' className='file-field'
            onChange={({ target: {files}}) => {
                submitRef.current.disabled = false
                files[0] && setFileName(files[0].name)
                


            }}
            />

{fileName?
 <div style={{
    border: '2px dashed #1475cf' , cursor: 'pointer', 
    borderRadius:'5px' , backgroundColor : 'rgb(255, 244, 240)',
    display: 'flex' , flexDirection: 'row' , justifyContent: 'flex-start',
    height: '205%' , width : '30%'

 }} className='clickable' onClick={(eventWrapper)=> {
    eventWrapper.stopPropagation();
    fileRef.current?.click();
                                                
 }}>
 <img src={txtImg} width={50} height={50} alt={fileName} />
 </div>
 
 :
 <div style={{
    border: '2px dashed #1475cf' , cursor: 'pointer', 
    borderRadius:'5px' , backgroundColor : 'rgb(255, 244, 240)',
    display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'

 }}  className='clickable' onClick={(eventWrapper)=>{
                                                eventWrapper.stopPropagation();
                                                fileRef.current?.click();
 }}>
 <MdCloudUpload style={{marginLeft: '27%'}} color='#1475cf' size={100} />
 <p style={{marginTop: '0'}}>Browse Files to Upload</p>
 </div>
 
} 


            
            
            <input name='query' type='text' placeholder='Enter your query' className='query-field' />
            <button ref={submitRef} type='submit' className='search-button' disabled={false} onClick={(eventWrapper)=> eventWrapper.stopPropagation()}> Search </button> 

        </Form>

    </div>
  )
}

export default QuickSearch