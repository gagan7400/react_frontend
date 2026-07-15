import { useRef } from "react"
function DashboardComp() {
    let theme = useRef("dark")
    let handleToggle = () => {
        if (theme.current.className.includes("light-card")) {
            theme.current.className = "card dark-card"
        } else {
            theme.current.className = "card light-card"
        }
    }
    return (
        <>
            <h3> Hello Dashboard</h3>
            <button className="btn btn-primary" onClick={handleToggle}>Toggle Theme</button>
            <div ref={theme} className="card light-card">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className="btn btn-info">Main card</button>
            </div>
        </>
    )
}
export default DashboardComp;
