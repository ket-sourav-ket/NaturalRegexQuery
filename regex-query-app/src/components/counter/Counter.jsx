import React, { useState } from "react";
function Counter() {
 const [count, setCount] = useState(0);
 return (
   <div>
     <p>You clicked {count} times</p>
     </div>)}

export default Counter