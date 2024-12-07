import React from 'react'
import './textBox.css';
import Highlighter from '../highlighter/Highlighter';
import { useEffect, useState, useRef } from "react";
import {Outlet, Link, useNavigate,Form, redirect, useLoaderData} from 'react-router-dom';

export async function searchLoader({request, params})
{
  const document_id = params.docId;
  const queryString = params.queryString;
  let response = await fetch(`/searchFile/${document_id}/${queryString}`);
  let indexArray = await response.json();
  console.log(indexArray);
  let responseD = await fetch(`/downloadFile/${document_id}`)
  let textData = await responseD.text() 
  return {textData,indexArray}
}

const TextBox = () => {
  const { textData,indexArray} = useLoaderData();
  console.log("Inside Textbox")
  const index=indexArray
  console.log(textData)
  console.log(index)



  //const strs = data.text
  //const index = data.index
 
    var views = [];
    const arr = textData.split(/(\s+)/).filter((x) => x.trim().length>0)
    for(let i = 0 ; i<arr.length ; i++)
    {
        if(index.includes(i)) views.push(<Highlighter> {arr[i]} </Highlighter>)
        else views.push(<span style={{padding : "0.5px 0.5px"}}> {arr[i]} </span>)     
        
    } 

  /*const [words, setWords] = useState(views);
  const listItems = useRef(null);

  useEffect(() => {
    const lastItem = listItems.current.lastElementChild;
    if (lastItem) {
      lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [words]); */

  return (
    <div className='scroll-outer'>
    <div className='scroll-container'>
      {views}
    </div>
    </div>
  );
};


export default TextBox