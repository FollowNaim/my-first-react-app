import { useState, useEffect } from 'react';

function Dchange(){
const [color,setColor] = useState("255,255,255");

const genRandomColor = ()=>{
const red = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const rgb = `rgb(${red}, ${green}, ${blue})`;
return rgb;
}

const colorChange = ()=>{
const newColor = genRandomColor();
setColor(newColor);
document.body.style.background=newColor;
}

  return(
    <div class="flex flex-col mx-auto mt-80 sm:mt-[50rem]">
    <span class="mx-auto bg-slate-300 mb-4 px-4 py-2 rounded text-lg sm:px-8 sm:py-4 sm:mb-8">{color}</span>
    <div class="mx-auto">
    <button class="bg-black text-white text-xl rounded px-8 py-2 cursor-pointer sm:px-16 sm:py-4" onClick={colorChange}>Change Color</button>
    </div>
    </div>
    );
};

export default Dchange;