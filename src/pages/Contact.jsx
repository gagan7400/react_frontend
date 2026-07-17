import HOC from "../HOC"

 function Contact() {
  return (
    <div className="container-fluid h-100 m-auto p-5   bg-primary text-center ">
      <h1>Contact</h1>
      <p>This is the Contact page.</p>
    </div>
  )
}
export default HOC(Contact)