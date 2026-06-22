import { useNavigate } from "react-router-dom"
import "../register/register.css"
import registerImage from "../../assets/pana.png"
function register(){
    const navigate = useNavigate()
    const onSubmit=()=>{
            navigate("/")
    }
    return <>
            <div className="register-outer-container">
            <div className="register-inner-container">
                <div className="register-forms">
                <h1 >Register</h1>
                <form action="/register" method="POST" className="register-inner-form">
                    <input type="text" placeholder="jhon@gmail.com" required></input>
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