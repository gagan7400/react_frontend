import HOC from "../HOC"
import { useSelector } from "react-redux";
function Contact() {
  let data = useSelector((state) => { return state });
  console.log(data)
  return (
    <div className="container-fluid h-100 m-auto p-5   bg-primary text-center ">
      <h1>Contact</h1>
      <p>This is the Contact page.</p>
    </div>
  )
}
export default HOC(Contact)