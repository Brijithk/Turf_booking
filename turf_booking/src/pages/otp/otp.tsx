
import "../login/login_page.css"
import otpLogo from  "../../assets/otpLogo.png"
import { useNavigate } from "react-router-dom";
function Otp(){
    const navigate = useNavigate()
    const onSubmit = () => {
        navigate("/register")
    }
return(
<>
    <div className="otp-outer-container">
            <div className="otp-inner-container">
                <div className="otp-forms">
                <h1 >otp</h1>
                <div className="otp-inner-form">
                    <p>We wiil send you a one time password oon this Mail Id Jhon@gmail.com                 </p>
                    <button type="submit" onClick={onSubmit}>Verify</button>
                    <div className="otp-register-link">
                       Don't have an account? <a href="register_page.html">Register</a>
                    </div>
                    
                </div>
                </div>
                <div className="otp-down">
                <img src={otpLogo} className="otp-image"/>
            </div>
                
            </div>
            
        </div>
        </>
   
)
}
export default Otp;