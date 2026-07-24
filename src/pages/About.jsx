import axios from "axios";
import { useCustomhook } from "../hooks/useCustomhook.js"
export default function About() {
  let api = "https://dummyjson.com/products";
  let { loading, setloading } = useCustomhook(2000)
  // getdata  ,using async await
  let getdata = async () => {
    try {
      let allproducts = await axios.get(api);
      console.log(allproducts)
    } catch (error) {
      console.log(error)
    }
  }
  let addData = async () => {
    try {
      let newproduct = await axios.post("https://dummyjson.com/products/add", { name: "raj", age: 99 });
      console.log(newproduct)
    } catch (error) {
      console.log(error);
    }
  }
  let updateData = async () => {
    try {
      let newproduct = await axios.put("https://dummyjson.com/products/89", { price: 23, stock: 99 });
      console.log(newproduct)
    } catch (error) {
      console.log(error);
    }
  }
  let deleteData = async () => {
    try {
      let newproduct = await axios.delete("https://dummyjson.com/products/89");
      console.log(newproduct)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {
        loading ? <div className="w-100 vh-100 d-flex justify-content-center align-items-center"> <div className="loader"> </div> </div> : <div className="container-fluid h-100 m-auto p-5  text-center bg-info ">
          <h1>About</h1>
          <p>This is the About page.</p>
          <button onClick={getdata}>Getdata</button>
          <button onClick={addData}>AddData</button>
          <button onClick={updateData}>updateData</button>
          <button onClick={deleteData}>deleteData</button>
        </div>
      }
    </>
  )
}

// react component
// css ,bootstrap ,javascript inside currlybrackets
// props
// state
// controlled , uncontrolled
// hooks,state,effect,ref, callback ,custom hook :- create a file which name is start with use
// context api
// memo (optimization)
// routing
// axios
// hoc:- higher order component
// redux ,redux thunk
// ui libraries :- bootstrap , tailwindcss ,material ui