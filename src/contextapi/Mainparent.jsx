import React, { useState, useCallback } from 'react'
import ChildB from './ChildB.jsx'
import ChildA from './ChildA.jsx'

export default function Mainparent() {
    console.log("Main Parent:");
    let [count, setCount] = useState(0);
    let [price, setprice] = useState(0);
    let [salary, setsalary] = useState(0);
    let fun = useCallback(() => {
        console.log("fun", price);
    }, [price]);
    return (
        <div className='border p-3 m-2'>
            <h1>Main Parent</h1>
            <button onClick={() => setCount(count + 1)}> inc count {count}</button>
            <button onClick={() => setprice(price + 1)}> inc price {price}</button>
            <button onClick={() => setsalary(salary + 1)}> inc salary {salary}</button>
            <ChildA price={price} fun={fun} />
            <ChildB count={count} />
        </div>
    )
}
