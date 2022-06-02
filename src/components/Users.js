import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

function Users() {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    };

    const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
    };

    const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    };

    useEffect(() => {
    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
}, []);

return (
    <main>
        <div className="content">
    <div className="App">
    <div className="insert_wrapper">
        <div className="insertUser">
        <label name="username">Username</label>
        <input
            placeholder="Name..."
            onChange={(event) => {
            setNewName(event.target.value);
            }}
        />
        <label name="age">Age</label>
        <input
            type="number"
            placeholder="Age..."
            onChange={(event) => {
            setNewAge(event.target.value);
            }}
            />

            <button onClick={createUser}> Create User</button>
        </div>
    </div>
    <div className="userList">
    {users.map((user) => {
        return (
        <div className="user">
            {" "}
            <div className="userInfo">
                <div className="userName">
                    <h3>Name</h3>
                    <p>{user.name}</p>
                    <button
            onClick={() => {
                updateUser(user.id, user.age);
            }}
            >
            {" "}
            Increase Age
            </button>
                </div>
                <div className="userAge">
                    <h3>Age</h3>
                    <p>{user.age}</p>
                    <button
            onClick={() => {
                deleteUser(user.id);
            }}
            >
            {" "}
            Delete User
            </button>
                </div>
            </div>
        </div>
        );
    })}
    </div>
    </div>
    </div>
    </main>
);
}

export default Users;