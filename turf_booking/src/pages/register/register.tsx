import { useNavigate } from "react-router-dom"
import "../register/register.css"
import registerImage from "../../assets/pana.png"
import React, { useState } from "react";
interface FormState {
    email: string;
    role: string;
}
function register() {
    const navigate = useNavigate()
    const [regData, setRegData] = useState<FormState>({
        email: "",
        role: "customer",
    });
    // const regData=[]
const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
    const { name, value } = e.target;

    setRegData((prev) => ({
        ...prev,
        [name]: value,
    }));
};


    const handleSubmit = async (
        e: React.SyntheticEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        await sendOtp();
    };
    const sendOtp = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/send-otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: regData.email,
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert(data.message);

                // Navigate only after OTP is sent successfully
              navigate("/otp", {
    state: {
        email: regData.email,
        role: regData.role,
    },
});
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    };
    return <>
        <div className="register-outer-container">
            <div className="register-inner-container">
                <div className="register-forms">
                    <h1 >Register</h1>

                    <form onSubmit={handleSubmit} className="register-inner-form">
                     <div className="register-role-container">
    <button
        type="button"
        className={`register-role-btn ${
            regData.role === "customer" ? "active" : ""
        }`}
        onClick={() =>
            setRegData((prev) => ({
                ...prev,
                role: "customer",
            }))
        }
    >
        Customer
    </button>

    <button
        type="button"
        className={`register-role-btn ${
            regData.role === "owner" ? "active" : ""
        }`}
        onClick={() =>
            setRegData((prev) => ({
                ...prev,
                role: "owner",
            }))
        }
    >
        Turf Owner
    </button>
</div>
                        <input type="text" name='email' value={regData.email} onChange={handleChange} placeholder="jhon@gmail.com" required></input>

                     <button type="submit" className="register-submit-btn">
    Register
</button>
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