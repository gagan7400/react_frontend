import React, { memo } from 'react'
import { dataContext } from './ContextProvider.jsx'
function ChildofB() {
    console.log("Child of B:");
    return (
        <div className='border p-3 m-2'>
            <h4>Childof B</h4>
            <dataContext.Consumer>
                {
                    (result) => {
                        return (
                            <>
                                <h1>name:{result.name}</h1>
                                <input type="text" value={result.name} onChange={(e) => result.setName(e.target.value)} />
                            </>
                        )
                    }
                }
            </dataContext.Consumer>
        </div>
    )
}
export default memo(ChildofB)