import React, { memo } from 'react'
import ChildofA from './ChildofA.jsx'

function ChildA() {
    console.log("Child A:");
    return (
        <div className='border p-3 m-2'>
            <h3>Child A</h3>
            <ChildofA />

        </div>
    )
}
export default memo(ChildA)