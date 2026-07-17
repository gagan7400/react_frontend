import { useCustomhook } from "../hooks/useCustomhook.js"
function Home() {
    let { loading, setloading } = useCustomhook()
    return (
        <>
            {loading ? <div className="w-100 vh-100 d-flex justify-content-center align-items-center"> <div className="loader"> </div> </div> : <section className="container-fluid h-100 m-auto p-5 bg-secondary ">
                <div className="content text-center">
                    <h1>Home</h1>
                    <p>Welcome to the Home page!</p>
                    <div>
                        <p>What is Reducer ?</p>
                        <p>useReducer is a React Hook that lets you add a reducer to your component. <br />

                        </p>
                        <div>
                            <b> Parameters </b> <br />
                            <b>reducer</b>: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
                            <br /><b>initialArg</b>: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
                            <br /><b>optional init</b>: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).
                            <br /><b>Returns</b><br />
                            <b>useReducer returns an array with exactly two values:</b>

                            <ol>
                                <li>The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).</li>
                                <li>The dispatch function that lets you update the state to a different value and trigger a re-render.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>}
        </>
    )
}

export default Home;