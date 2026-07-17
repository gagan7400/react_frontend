import { useState, useEffect } from 'react'
function HOC(Child) {
    return function Wrapper() {
        let [loading, setLoading] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }, []);
        return (
            <>
                {loading ?
                    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
                        <div className="loader"> </div>
                    </div> :
                    <>  <Child /></>
                }
            </>
        )
    }
}


export default HOC;