import { useReducer } from "react"
function Home() {
    let initialState = { count: 0 }
    let reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { ...state, count: state.count + 1 }
            case "incrementwithpayload":
                return { ...state, count: state.count + action.payload }
            default:
                return state
        }
    }
    let [state, dispatch] = useReducer(reducer, initialState);
    return (
        <section className="container-fluid h-100 m-auto p-5 bg-secondary ">
            <div className="content text-center">
                <h1>Home</h1>
                <p>Welcome to the Home page!</p>
                <div>
                    <p>What is Reducer ?</p>
                    <p>useReducer is a React Hook that lets you add a reducer to your component. <br />

                        syntax //  const [state, dispatch] = useReducer(reducer, initialArg, init?)
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
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: "increment" })}>
                    Increment
                </button>
                <button onClick={() => dispatch({ type: "incrementwithpayload", payload: 5 })}>
                    Increment by 5
                </button>
            </div>
        </section>
    )
}

export default Home;