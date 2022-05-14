import React, {useState} from "react";

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setcPassword] = useState("");

    const CreateUser = (e) => {
        e.preventDefault();
        console.log("test!!")

    }



    return(
        <div> 
        <form onSubmit={CreateUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)}></input>
            </div>
            <div>
                <label> Email: </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label> Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={(e) => setcPassword(e.target.value)}></input>
            </div>






        </form>
        <h1>Your form Data</h1>
        <div>
            <h1>First Name: {firstName}</h1>
        </div>
        <div>
            <h1>Last Name: {lastName}</h1>
        </div>
        <div>
            <h1>Email: {email}</h1>
        </div>
        <div>
            <h1>Password: {password}</h1>
        </div>
        <div>
            <h1>Confirmed Password: {cPassword}</h1>
        </div>
        
        </div>
    );

}
export default HookForm;