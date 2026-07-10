import { useNavigate } from "react-router-dom"
import "../register/register.css"
import registerImage from "../../assets/pana.png"
import React, { useState } from "react";
interface FormState{
    email:string;
    password:string;
}
function register() {
    const navigate = useNavigate()
    const [regData, setRegData] = useState<FormState>({
        email: '',
        password: ''
    })
    // const regData=[]
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegData((prev)=>({...prev,[name]:value}))
    }


    const handleSubmit=(e:React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault();
        navigate('/otp')
    }
    return <>
        <div className="register-outer-container">
            <div className="register-inner-container">
                <div className="register-forms">
                    <h1 >Register</h1>
                    <form onSubmit={handleSubmit} className="register-inner-form">
                        <input type="text" name='email' value={regData.email} onChange={handleChange} placeholder="jhon@gmail.com" required></input>
                        <input type="password" name='password' value={regData.password} onChange={handleChange} placeholder="Enter the password" required></input>
                        <a className="register-forgot" href="register_page.html">forgot password?</a>
                        <button type="submit">Register</button>
                        <div className="register-register-link">
                            Already a member? <a>Login</a>
                        </div>

                    </form>
                </div>
                <div className="register-down">
                    <img src={registerImage} className="register-image"></img>
                </div>

            </div>

        </div>

    </>
}
export default register