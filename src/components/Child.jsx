import { memo } from 'react'
function Child() {
    console.log("Child:");
    return (
        <div className='container mt-5 border border-2 border-dark p-5'>
            <h1> Child Component </h1>
        </div>
    )
}
export default memo(Child)