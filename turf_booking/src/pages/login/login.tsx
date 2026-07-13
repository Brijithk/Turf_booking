
import "../login/login_page.css"
import loginLogo from  "../../assets/pana.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login(){
    const [formData,setFormData]=useState({email:"",password:""})

    const [errors,setErrors]=useState({email:'',password:''})
    const navigate = useNavigate()
    const navigateRegister = () =>{
        navigate('/register')
    }
  const onSubmit = async () => {
    let newErrors = { email: "", password: "" };
    let isValid = true;

    if (!formData.email) {
        newErrors.email = "Email is required";
        isValid = false;
    }

    if (!formData.password) {
        newErrors.password = "Password is required";
        isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
        return;
    }

    try {
        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            }
        );

        const data = await response.json();

        if (response.ok) {
            alert(data.message);

            // Optional: save JWT
            // localStorage.setItem("token", data.token);

            navigate("/home");
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error(error);
        alert("Server Error");
    }
};
    const onchange= (e:any) =>{
        const{name,value} =e.target
        setFormData((prevState)=>({
            ...prevState,
            [name]: value,
        }))
    }
return(  
<>
    <div className="login-outer-container">
            <div className="login-inner-container">
                <div className="login-forms">
                <h1 >Login</h1>
                <div className="login-inner-form">
                    <input 
                    type="text" 
                    name="email"    
                    value={formData.email} 
                    onChange={onchange} 
                    placeholder="jhon@gmail.com" 
                    required
                     />
                    {errors.email &&<p className="error-messages">{errors.email}</p>}
                    <input 
                    type="password" 
                    name="password"
                    value={formData.password} 
                    onChange={onchange} 
                    placeholder="******" 
                    required 
                    />
                    {errors.password &&<p className="error-messages">{errors.password}</p>}
                    <a className="login-forgot" href="register_page.html">forgot password?</a>
                    <button type="submit" onClick={onSubmit}>Login</button>
                    <div className="login-register-link">
Don't have an account?      <a onClick={navigateRegister}>Register</a>
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