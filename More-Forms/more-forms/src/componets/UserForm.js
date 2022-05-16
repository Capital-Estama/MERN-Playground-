import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPass, setCpass] = useState("");

    // error states
    const [FirstNameError,setFirstNameError] = useState("");
    const [LastNameError,setLastNameError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [passwordConfirmationError, setcError] = useState("");

    // validations 
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } 
        if(e.target.value.length > 2) {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } 
        if(e.target.value.length > 2) {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email Name is required!");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer!");
        } 
        if(e.target.value.length > 2) {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
            setPassword(e.target.value)
        } 
        if(e.target.value.length > 8) {
            setPasswordError("");
            setPassword(e.target.value);
        }
        passCompare();
    }
    const confirmPassword = (e) => {
        setCpass(e.target.value);
        
        if(e.target.value.length < 1) {
            setcError("Password is required!");
        } else if(e.target.value.length < 8) {
            setcError("Password must be 8 characters or longer!");
            
        } 
        passCompare();
    }

    const passCompare = () => {
        console.log(`cPass ${cPass} vs  password ${password}`);
        if(cPass != password) {
            setcError("Password does not macth!");
        }

    }

    
    
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div> 
                <label>First Name:</label>
                <input type="text" onChange={handleFirstName}></input>
                {
                    FirstNameError ?
                    <p style={{color:'red'}}>{ FirstNameError }</p> :
                    ''
                }
                </div>
                <div> 
                <label>Last Name:</label>
                <input type="text" onChange={handleLastName}></input>
                {
                    LastNameError ?
                    <p style={{color:'red'}}>{ LastNameError }</p> :
                    ''
                }
                </div>
                <div> 
                <label>Email:</label>
                <input type="email" onChange={handleEmail}></input>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
                </div>
                <div> 
                <label>Password:</label>
                <input type="text" onChange={handlePassword} ></input>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                </div>
                <div> 
                <label>Confirm Password:</label>
                <input type="text" onChange={confirmPassword }></input>
                {
                    passwordConfirmationError ?
                    <p style={{color:'red'}}>{ passwordConfirmationError }</p> :
                    ''
                }
                </div>


            </form>
        </div>

    );

}
export default UserForm;
