import React, { memo } from 'react'
import ChildofB from './ChildofB.jsx'

function ChildB({ count }) {
    console.log("Child B:");
    return (
        <div className='border p-3 m-2'>
            <h4>Child B</h4>
            <h1>count:{count}</h1>
            <ChildofB />
        </div>
    )
}
export default memo(ChildB)