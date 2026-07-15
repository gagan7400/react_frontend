import React, { useContext, memo } from 'react'
import { dataContext } from "./ContextProvider.jsx"
function ChildofA() {
    let data = useContext(dataContext);
    console.log("child of A");
    return (
        <div className='border p-3 m-2'>
            <h1>ChildofA</h1>

            <p> name : {data.name}</p>
            <input type="text"
                value={data.name}
                onChange={(e) => data.setName(e.target.value)}
            />
        </div>
    )
}
export default memo(ChildofA)