import { useNavigate } from "react-router-dom"
import "../register/register.css"
import registerImage from "../../assets/pana.png"
import { useState } from "react"
function register(){
    const navigate = useNavigate()
    const [regData,setRegData]=useState({email:'',password:''})
    // const regData=[]
    const handleRegister=(e:any)=>{
        const {name:value}=e.target.value
        set1
        
           alert("enter the otp in next page");
           navigate('/otp')
    }
    return <>
            <div className="register-outer-container">
            <div className="register-inner-container">
                <div className="register-forms">
                <h1 >Register</h1>
                <div className="register-inner-form">
                    <input type="text" name='email' placeholder="jhon@gmail.com" required></input>
                    <a className="register-forgot" href="register_page.html">forgot password?</a>
                    <button type="submit" onClick={handleRegister}>Register</button>
                    <div className="register-register-link">
                       Already a member? <a>Login</a>
                    </div>
                    
                </div>
                </div>
                <div className="register-down">
                <img src={registerImage} className="register-image"></img>
            </div>
                
            </div>
            
        </div>
    
    </>
}
export default register