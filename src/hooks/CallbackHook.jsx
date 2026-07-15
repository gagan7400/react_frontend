import { useState, useCallback } from 'react';
import Child from '../components/Child';
function CallbackHook() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("elon");

    console.log("CallbackHook:");

    let fun = useCallback(() => {
        console.log("fun:", name);
    }, [name]);

    return (
        <div className='container mt-5 border border-2 border-dark p-5'>
            {/* child import  */}
            <button onClick={() => setCount(count + 1)}> inc count : {count}</button>
            <button onClick={() => setName(name + "musk")}>update name : {name}</button>
            <h1> Callback Hook </h1>
            <Child fun={fun} />
        </div>
    )

}
export default CallbackHook