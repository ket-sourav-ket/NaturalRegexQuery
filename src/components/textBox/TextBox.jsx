import React from 'react'
import './textBox.css';
import Highlighter from '../highlighter/Highlighter';
import { useEffect, useState, useRef } from "react";
import {Outlet, Link, useNavigate,Form, redirect, useLoaderData} from 'react-router-dom';

export async function searchLoader({request, params})
{
  const document_id = params.docId;
  let response = await fetch(`/searchFile/${document_id}`);
  let data = response.json();
  return {data}
}

const TextBox = () => {
  const { data } = useLoaderData();

  //const strs = data.text
  //const index = data.index
 
    const strs = `This is demo text that signifies a placeholder data in acatual application this would be a string representing 
    the contents of the document.
    In a small village nestled between rolling hills, there was a garden unlike any other. This garden was said to be enchanted, filled with flowers that glowed under the moonlight and trees that whispered secrets to those who listened closely.

One day, a young girl named Asha stumbled upon the garden while exploring the outskirts of her village. She was drawn to its beauty and the soft, melodic hum that seemed to emanate from the flowers. As she wandered deeper into the garden, she noticed a peculiar tree with golden leaves. At the base of the tree was a small, intricately carved door.

Curiosity piqued, Asha gently pushed the door open and found herself in a magical realm. The air was filled with the scent of blooming flowers, and the sky was painted with hues of pink and purple. Creatures she had only read about in fairy tales roamed freely, and the trees seemed to sing in harmony.

Asha soon met a wise old owl named Orion, who perched on a branch above her. "Welcome, young one," Orion hooted. "You have discovered the Enchanted Garden, a place where dreams come to life and magic is real."

Orion guided Asha through the garden, showing her wonders beyond her imagination. She met talking animals, danced with fairies, and even learned to cast a few spells. But as the sun began to set, Orion reminded her that she must return to her world before nightfall.

Reluctantly, Asha made her way back to the golden tree. Before she left, Orion gave her a small, glowing flower. "This will remind you of the magic within you," he said.

Asha returned to her village, her heart filled with wonder and joy. She kept the glowing flower by her bedside, and every night, she would dream of the Enchanted Garden and the adventures she had there. And though she never found the garden again, she knew that its magic lived on within her, guiding her through life's challenges and reminding her of the beauty and wonder in the world.

I hope you enjoyed the story! Would you like to hear another one or talk about something else?`;
    const index = [0,3,6,8];
    var views = [];
    const arr = strs.split(' ');
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