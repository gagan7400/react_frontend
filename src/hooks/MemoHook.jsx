import { useState, useMemo } from 'react';
function MemoHook() {
    let [price, setPrice] = useState(1000);
    let [count, setCount] = useState(1);
    let calculate = () => {
        console.log("calculate:");
        let k = 0;
        for (let i = 0; i <= 991; i++) {
            k++;
        }
        return k + price
    }
    let calculatePrice = useMemo(calculate, [price]);

    return (
        <div className='container mt-5 border border-2 border-dark p-5'>
            <h1> Memo Hook </h1>
            <p> Calculated Price : {calculatePrice} </p>
            <button onClick={() => setCount(count + 1)}> inc count : {count}</button>
            <button onClick={() => setPrice(price + 100)}> inc price : {price}</button>
        </div>
    )

}
export default MemoHook;

// useState
// useCallback
// useEffect
// useMemo
// useRef
// useContext
