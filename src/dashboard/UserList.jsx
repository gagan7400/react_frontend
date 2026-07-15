import { useState, useEffect } from 'react';
function UserList() {
    let [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(true)
    const getUsers = async () => {
        try {
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            console.log(data)
            setUsers(data.users)
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        } catch (err) {
            console.log(err);
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        }
    };
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className="container-fluid h-100  mt-4">
            <h3 className="card-title mb-3">User Details</h3>
            <div className="w-100 p-2 h-100 overflow-auto d-flex gap-2 justify-content-evenly flex-wrap">
                {loading ?
                    <div className="w-100  h-100   d-flex   justify-content-center align-items-center">
                        <div className="loader"> </div>
                    </div>
                    :
                    users.map((user, i) => {
                        return (
                            <div className="  h-auto bg-light p-3" key={user.id} style={{ width: "350px" }}>
                                <div className=""><strong>First Name:</strong> {user.firstName}</div>
                                <div className=""><strong>Last Name:</strong> {user.lastName}</div>
                                <div className=""><strong>Age:</strong> {user.age}</div>
                                <div className=""><strong>Gender:</strong> {user.gender}</div>
                                <div className=""><strong>Email:</strong> {user.email}</div>
                                <div className=""><strong>Phone:</strong> {user.phone}</div>
                                <div className=""><strong>Username:</strong> {user.username}</div>
                                <div className=""><strong>Birth Date:</strong> {user.birthDate}</div>
                                <div className=""><strong>City:</strong> {user.address?.city}</div>
                                <div className=""><strong>University:</strong> {user.university}</div>
                                <div className=""><strong>Role:</strong> {user.role}</div>
                            </div>
                        )
                    })}
            </div>
        </div>

    );
}

export default UserList;