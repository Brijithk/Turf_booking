import { useNavigate, useLocation } from "react-router-dom";
import "./register.css";
import registerImage from "../../assets/pana.png";
import React, { useState } from "react";

interface FormState {
    password: string;
    confirmPassword: string;
}

function CompleteRegistration() {
    const navigate = useNavigate();
    const location = useLocation();

    // Email passed from OTP page
    const email = location.state?.email;

    const [formData, setFormData] = useState<FormState>({
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        e: React.SyntheticEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        if (!email) {
    alert("Email not found. Please verify OTP again.");
    navigate("/register");
    return;
}
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password: formData.password,
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                navigate("/home");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    };

    return (
        <>
            <div className="register-outer-container">
                <div className="register-inner-container">
                    <div className="register-forms">
                        <h1>Create Password</h1>

                        <form
                            onSubmit={handleSubmit}
                            className="register-inner-form"
                        >
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />

                            <button type="submit">
                                Create Account
                            </button>
                        </form>
                    </div>

                    <div className="register-down">
                        <img
                            src={registerImage}
                            className="register-image"
                            alt="Register"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompleteRegistration;