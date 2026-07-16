import axios from "axios"
export default function About() {
  let api = "https://dummyjson.com/products";

  // getdata  ,using async await
  let getdata = async () => {
    try {
      let allproducts = await axios.get(api);
      console.log(allproducts)
    } catch (error) {
      console.log(error)
    }
  }
  // using then catch
  // let getdata = () => {
  //   axios.get(api)
  //     .then((res) => { console.log(res) })
  //     .catch((err) => { console.log(err) })
  // }

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
    <div className="container-fluid h-100 m-auto p-5  text-center bg-info ">
      <h1>About</h1>
      <p>This is the About page.</p>
      <button onClick={getdata}>Getdata</button>
      <button onClick={addData}>AddData</button>
      <button onClick={updateData}>updateData</button>
      <button onClick={deleteData}>deleteData</button>
    </div>
  )
}
