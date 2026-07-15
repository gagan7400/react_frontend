import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Error from "./pages/Error.jsx"
import Contact from "./pages/Contact.jsx"
import Todo from "./pages/Todo.jsx"
import ProtectedRoute from "./pages/ProtectedRoute.jsx"
import Login from "./pages/Login.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Dashboard from "./dashboard/Dashboard.jsx"
import DashboardComp from "./dashboard/DashboardComp.jsx"
import UserList from "./dashboard/UserList.jsx"
import AddProduct from "./dashboard/AddProduct.jsx"
import "./App.css"
export default function App() {
console.log ("hello")
  return (
    <div className="w-100 vh-100 d-flex flex-column ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/todo" element={<Todo />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}>
            <Route path="/dashboard/" element={<DashboardComp />}> </Route>
            <Route path="/dashboard/userlist" element={<UserList />}> </Route>
            <Route path="/dashboard/addproduct" element={<AddProduct />}> </Route>
          </Route>
          <Route path="*" element={<Error />}> </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
} 