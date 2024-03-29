import React, {useState} from "react"

export const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail(document.getElementById("email").innerText);
    }

    return (
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

            <label for="password">Password</label>
            <input type="password" placeholder="***********" id="password" name="password"/>

            <button>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account ? Register here.</button>
        </div>
    )
}