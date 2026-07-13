
import "./otp.css"
import otpLogo from  "../../assets/otpLogo.png"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Otp(){
    const navigate = useNavigate()
    const location = useLocation();
    const email = location.state?.email;
    const [otp, setOtp] = useState("");
const onSubmit = async () => {
    await verifyOtp();
};
    const verifyOtp = async () => {

    const response = await fetch(
        "http://localhost:5000/api/auth/verify-otp",
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,
                otp
            })
        }
    );

    const data = await response.json();

    if (response.ok) {
    alert("OTP Verified Successfully");
   navigate("/completeRegistration", {
    state: {
        email,
    },
});
} else {
    alert(data.message);
}
};
return(
<>
    <div className="otp-outer-container">
            <div className="otp-inner-container">
                <div className="otp-forms">
                    <h1 >OTP Verification</h1>
                    <div className="otp-inner-form">
                    <p>
                        We wiil send you a one time password 
                        <br />   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; on 
                        <br />  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;this <b> Mail Id</b> 
                        <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{email}
                    </p>
                    <input
    type="text"
    placeholder="000000"
    value={otp}
    onChange={(e) => setOtp(e.target.value)}
/>
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