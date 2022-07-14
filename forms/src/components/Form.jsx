import React,{useState } from "react";

const Form = (props) => {
    const [ email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [ lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    // Errors*
    
    const [ emailError, setEmailError] = useState("");
    const [ firstNameError, setFirstNameError] = useState("");
    const [ lastNameError, setLastNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [ confirmPasswordError, setConfirmPasswordError] = useState("");

    // create user Obj
    const createUser = (e) => {

        e.preventDefault();
        // *
        const newUser = {firstName, lastName,  email,password,confirmPassword};

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    //
    // Handles ~
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2) {

            setEmailError("Must be longer than 2 characters")
        } else {
            setEmailError("");
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length <= 2){
            setFirstNameError("Must be longer than 2 characters");
        }
        else{

                setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Must be longer than 2 characters")
        } else {
            setLastNameError("");
        }
    }

    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Must be longer than 8 characters")
        } else {
            setPasswordError("");
        }
    }
    // needs work ~ 07/28
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        // ===
        if( e.target.value != password ) {
            setConfirmPasswordError("*Confirm Password must match Password*")
        } else {
            setConfirmPasswordError("");
        }
    }
    // TOdo: fix bootstrap
    return(
        <div className="row ">
            // Todo: add bootstrap labels remove placeholder
            <form  onSubmit={ createUser }>


                <div >
                    <div>
                        <input type="text" id="FirstName" name="FirstName"  required  placeholder="First Name" onBlur={handleFirstName} />
                    </div>
                    <h3 className="text-danger">{ firstNameError }</h3>
                    <div>
                        <input  type="text" id="lastname" name="lastname"  required placeholder="Last Name" onBlur={handleLastName} />
                    </div>
                    <h3 className="text-danger">{ lastNameError }</h3>
                    <div>
                        <input type="email" id="email"  name="email" required    placeholder="Email" onBlur={handleEmail}/>
                    </div>
                    <h3 className="text-danger">{ emailError }</h3>
                    <div>
                        <input type="password" id="password" name="password"  required   placeholder="Password" onBlur={handlePassword} />
                    </div>
                    <h3 className="text-danger">{passwordError}</h3>
                    <h3 className="text-danger">{confirmPasswordError}</h3>
                    <div>
                        <input type="password" id="confirmpassword" name="confirmpassword" required   placeholder="Confirm Password" onBlur={handleConfirmPassword} />
                    </div>
                </div>
                


            </form>
                    {/* // todo: Span
            <div>
                <h3>Frist Name {firstName }</h3>
                <h3>Last Name  {lastName }</h3>
                <h3>Email  { email}</h3>
                <h3>Password  {password }</h3>
                <h3>Confirm Password { confirmPassword }</h3>
            </div> */}
        </div>
    );
}

export default Form;
// submit 
