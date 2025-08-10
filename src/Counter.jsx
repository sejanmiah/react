import React, { useRef } from 'react';



const Counter = () => {
    let ref = useRef(0)
    const handleClick = () => {
        console.log(ref);
        ref.current = ref.current + 1
        alert("You Click" + " " +  ref.current + " "  + "Time")
    }
    return <button onClick={handleClick} className='bg-amber-300 p-3 rounded mt-5 ml-5'>Click Me</button>
};

export default Counter;