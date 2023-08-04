import React, { useState } from 'react';

function Inc(){
  let [counter, setCounter] = useState(0);
  const increment = ()=>{
    setCounter(counter + 2)
  }
  
  
  
  return(
    
    <div class="w-11/12 m-auto mt-6/12">
    <div>
    <h2 class="mx-auto text-xl bg-blue-400 text-center my-4 rounded">The Time is {new Date().toLocaleTimeString()}</h2>
    </div>
       <h1 class="bg-blue-300 text-center p-4 text-3xl rounded"> Hello World {counter}</h1>
       <div class="flex justify-center mt-4">
       <button class="bg-black text-white text-center px-4 py-2 rounded" onClick={increment}>Click Here </button>
       </div>
       </div>
    );
};

 export default Inc;