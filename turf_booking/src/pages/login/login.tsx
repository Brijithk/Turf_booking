
import "../login/login_page.css"
import loginLogo from  "../../assets/pana.png"
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate()
    const onSubmit = () => {
        navigate("/register")
    }
return(
<>
    <div className="login-outer-container">
            <div className="login-inner-container">
                <div className="login-forms">
                <h1 >Login</h1>
                <div className="login-inner-form">
                    <input type="text" placeholder="jhon@gmail.com" required />
                    <input type="password" placeholder="******" required />
                    <a className="login-forgot" href="register_page.html">forgot password?</a>
                    <button type="submit" onClick={onSubmit}>Login</button>
                    <div className="login-register-link">
                       Don't have an account? <a href="register_page.html">Register</a>
                    </div>
                    
                </div>
                </div>
                <div className="login-down">
                <img src={loginLogo} className="login-image"/>
            </div>
                
            </div>
            
        </div>
        </>
   
)
}
export default Login;